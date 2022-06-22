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

use crate::psp35::{
    Id,
    PSP35Error,
};
use ink_storage::traits::{
    SpreadAllocate,
    SpreadLayout,
};
use openbrush::{
    storage::{
        Mapping,
        TypeGuard,
    },
    traits::{
        AccountId,
        Balance,
    },
};

pub const BALANCES_KEY: u32 = openbrush::storage_unique_key!(Balances);

pub trait BalancesManager: SpreadLayout + SpreadAllocate {
    fn balance_of(&self, owner: &AccountId, id: &Id) -> Balance;
    fn increase_balance(&mut self, owner: &AccountId, id: &Id, amount: &Balance, mint: bool) -> Result<(), PSP35Error>;
    fn decrease_balance(&mut self, owner: &AccountId, id: &Id, amount: &Balance, burn: bool) -> Result<(), PSP35Error>;
}

#[derive(Default, Debug)]
#[openbrush::storage(BALANCES_KEY)]
pub struct Balances {
    balances: Mapping<(AccountId, Id), Balance, BalancesKey>,
}

pub struct BalancesKey;

impl<'a> TypeGuard<'a> for BalancesKey {
    type Type = &'a (&'a AccountId, &'a Id);
}

impl BalancesManager for Balances {
    #[inline(always)]
    fn balance_of(&self, owner: &AccountId, id: &Id) -> Balance {
        self.balances.get(&(owner, id)).unwrap_or(0)
    }

    #[inline(always)]
    fn increase_balance(
        &mut self,
        owner: &AccountId,
        id: &Id,
        amount: &Balance,
        _mint: bool,
    ) -> Result<(), PSP35Error> {
        let to_balance = self.balance_of(owner, id);
        self.balances
            .insert(&(owner, id), &to_balance.checked_add(*amount).unwrap());
        Ok(())
    }

    #[inline(always)]
    fn decrease_balance(
        &mut self,
        owner: &AccountId,
        id: &Id,
        amount: &Balance,
        _burn: bool,
    ) -> Result<(), PSP35Error> {
        let from_balance = self.balance_of(owner, id);
        self.balances.insert(
            &(owner, id),
            &(from_balance
                .checked_sub(*amount)
                .ok_or(PSP35Error::InsufficientBalance)?),
        );
        Ok(())
    }
}
