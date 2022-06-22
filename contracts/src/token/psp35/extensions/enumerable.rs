// Copyright (c) 2012-2022 Supercolony
//
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the"Software"),
// to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

pub use crate::{
    psp35,
    psp35::{
        balances,
        extensions::enumerable,
    },
    traits::psp35::{
        extensions::enumerable::*,
        *,
    },
};
use openbrush::{
    storage::{
        Mapping,
        MultiMapping,
        TypeGuard,
    },
    traits::{
        AccountId,
        Balance,
        OccupiedStorage,
        Storage,
    },
};

pub const STORAGE_KEY: u32 = openbrush::storage_unique_key!(Balances);

#[derive(Default, Debug)]
#[openbrush::storage(STORAGE_KEY)]
pub struct Balances {
    pub enumerable: MultiMapping<Option<AccountId>, Id, EnumerableKey>,
    pub balances: Mapping<(AccountId, Id), Balance, BalancesKey>,
    pub total_supply: Mapping<Id, Balance>,
    pub _reserved: Option<()>,
}

pub struct EnumerableKey;

impl<'a> TypeGuard<'a> for EnumerableKey {
    type Type = &'a Option<&'a AccountId>;
}

pub struct BalancesKey;

impl<'a> TypeGuard<'a> for BalancesKey {
    type Type = &'a (&'a AccountId, &'a Id);
}

impl balances::BalancesManager for Balances {
    fn balance_of(&self, owner: &AccountId, id: &Id) -> Balance {
        self.balances.get(&(owner, id)).unwrap_or(0)
    }

    fn increase_balance(&mut self, owner: &AccountId, id: &Id, amount: &Balance, mint: bool) -> Result<(), PSP35Error> {
        let initial_balance = self.balance_of(owner, id);
        self.balances
            .insert(&(owner, id), &(initial_balance.checked_add(*amount).unwrap()));

        if initial_balance == 0 {
            self.enumerable.insert(&Some(owner), id);
        }

        if mint {
            let token_supply = self.total_supply.get(id).unwrap_or(0);

            self.total_supply
                .insert(id, &(token_supply.checked_add(*amount).unwrap()));

            if token_supply == 0 {
                self.enumerable.insert(&None, id);
            }
        }
        Ok(())
    }

    fn decrease_balance(&mut self, owner: &AccountId, id: &Id, amount: &Balance, burn: bool) -> Result<(), PSP35Error> {
        let initial_balance = self.balance_of(owner, id);
        self.balances.insert(
            &(owner, id),
            &(initial_balance
                .checked_sub(*amount)
                .ok_or(PSP35Error::InsufficientBalance)?),
        );

        if initial_balance == *amount {
            self.enumerable.remove_value(&Some(owner), id);
        }

        if burn {
            let token_supply = self.total_supply.get(id).unwrap_or(0);
            self.total_supply.insert(
                id,
                &(token_supply
                    .checked_sub(*amount)
                    .ok_or(PSP35Error::InsufficientBalance)?),
            );

            if token_supply == *amount {
                self.enumerable.remove_value(&None, id);
            }
        }
        Ok(())
    }
}

impl<T> PSP35Enumerable for T
where
    T: Storage<psp35::Data<Balances>>,
    T: OccupiedStorage<{ psp35::STORAGE_KEY }, WithData = psp35::Data<Balances>>,
{
    default fn owners_token_by_index(&self, owner: AccountId, index: u128) -> Option<Id> {
        self.data().balances.enumerable.get_value(&Some(&owner), &index)
    }

    default fn token_by_index(&self, index: u128) -> Option<Id> {
        self.data().balances.enumerable.get_value(&None, &index)
    }
}
