/// Extension of [`PSP22`] which allows the beneficiary to extract tokens after given time
use crate::traits::*;

use brush::{
    declare_storage_trait,
    traits::{
        AccountId,
        Balance,
        InkStorage,
        Timestamp,
    },
};
use ink_env::call::FromAccountId;
use ink_prelude::{
    string::String,
    vec::Vec,
};
use ink_storage::traits::SpreadLayout;
pub use psp22_derive::PSP22TokenTimelockStorage;

#[cfg(feature = "std")]
use ink_storage::traits::StorageLayout;

#[derive(Default, Debug, SpreadLayout)]
#[cfg_attr(feature = "std", derive(StorageLayout))]
pub struct PSP22TokenTimelockData {
    token_address: AccountId,
    beneficiary: AccountId,
    release_time: Timestamp,
}

declare_storage_trait!(PSP22TokenTimelockStorage, PSP22TokenTimelockData);

#[brush::trait_definition]
pub trait PSP22TokenTimelock: PSP22TokenTimelockStorage {
    /// Returns the token address
    #[ink(message)]
    fn token(&self) -> AccountId {
        self.get().token_address
    }

    /// Returns the beneficiary of the tokens
    #[ink(message)]
    fn beneficiary(&self) -> AccountId {
        self.get().beneficiary
    }

    /// Returns the timestamp when the tokens are released
    #[ink(message)]
    fn release_time(&self) -> Timestamp {
        self.get().release_time
    }

    /// Transfers the tokens held by timelock to the beneficairy
    #[ink(message)]
    fn release(&mut self) -> Result<(), PSP22Error> {
        assert!(
            Self::env().block_timestamp() >= self.get_mut().release_time,
            "{}",
            PSP22Error::Custom(String::from("Current time is before release time")).as_ref()
        );
        let amount = self.contract_balance();
        assert!(
            amount > 0,
            "{}",
            PSP22Error::Custom(String::from("No tokens to release")).as_ref()
        );
        self.withdraw(amount)
    }

    /// Helper function to withdraw tokens
    fn withdraw(&mut self, amount: Balance) -> Result<(), PSP22Error> {
        let mut psp22: PSP22Stub = FromAccountId::from_account_id(self.get().token_address);
        psp22.transfer(self.beneficiary(), amount, Vec::<u8>::new())
    }

    /// Helper function to return balance of the contract
    fn contract_balance(&self) -> Balance {
        let psp22: PSP22Stub = FromAccountId::from_account_id(self.get().token_address);
        psp22.balance_of(Self::env().account_id())
    }

    /// Initializes the contract
    fn init(&mut self, token_address: AccountId, beneficiary: AccountId, release_time: Timestamp) {
        self.get_mut().token_address = token_address;
        self.get_mut().beneficiary = beneficiary;
        self.get_mut().release_time = release_time;
    }
}