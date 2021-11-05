/// Extension of [`PSP22`] which supports token wrapping
use crate::traits::*;

use brush::{
    declare_storage_trait,
    traits::{
        AccountId,
        Balance,
        InkStorage,
    },
};
use ink_env::call::FromAccountId;
use ink_prelude::vec::Vec;
use ink_storage::traits::SpreadLayout;
pub use psp22_derive::PSP22WrapperStorage;

#[cfg(feature = "std")]
use ink_storage::traits::StorageLayout;

#[derive(Default, Debug, SpreadLayout)]
#[cfg_attr(feature = "std", derive(StorageLayout))]
pub struct PSP22WrapperData {
    pub underlying: PSP22Stub,
}

declare_storage_trait!(PSP22WrapperStorage, PSP22WrapperData);

#[brush::trait_definition]
pub trait PSP22Wrapper: PSP22WrapperStorage + PSP22 {
    /// Allow a user to deposit `amount` of underlying tokens and mint `amount` of the wrapped tokens to `account`
    #[ink(message)]
    fn deposit_for(&mut self, account: AccountId, amount: Balance) -> Result<(), PSP22Error> {
        match self.deposit(amount) {
            Ok(_) => (),
            Err(e) => return Err(e),
        }
        self._mint(account, amount);
        Ok(())
    }

    /// Allow a user to burn `amount` of wrapped tokens and withdraw the corresponding number of underlying tokens to `account`
    #[ink(message)]
    fn withdraw_to(&mut self, account: AccountId, amount: Balance) -> Result<(), PSP22Error> {
        self._burn(Self::env().caller(), amount);
        self.withdraw(account, amount)
    }

    /// Mint wrapped token to cover any underlyingTokens that would have been transfered by mistake. Internal
    /// function that can be exposed with access control if desired.
    fn _recover(&mut self, account: AccountId) -> Balance {
        let value = self.underlying_balance() - self.total_supply();
        self._mint(account, value);
        value
    }

    /// helper function to transfer the underlying token from caller to the contract
    fn deposit(&mut self, amount: Balance) -> Result<(), PSP22Error> {
        PSP22WrapperStorage::get_mut(self).underlying.transfer_from(
            Self::env().caller(),
            Self::env().account_id(),
            amount,
            Vec::<u8>::new(),
        )
    }

    /// helper function to transfer the underlying token
    fn withdraw(&mut self, account: AccountId, amount: Balance) -> Result<(), PSP22Error> {
        PSP22WrapperStorage::get_mut(self)
            .underlying
            .transfer(account, amount, Vec::<u8>::new())
    }

    /// helper function to get balance of underlying tokens in the contract
    fn underlying_balance(&mut self) -> Balance {
        PSP22WrapperStorage::get_mut(self)
            .underlying
            .balance_of(Self::env().account_id())
    }

    /// Initalize the wrapper token with defining the underlying PSP22 token
    ///
    /// `underlying` is the token to be wrapped
    fn init(&mut self, underlying: AccountId) {
        PSP22WrapperStorage::get_mut(self).underlying = FromAccountId::from_account_id(underlying);
    }
}