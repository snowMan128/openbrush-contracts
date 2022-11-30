#![cfg_attr(not(feature = "std"), no_std)]
#![feature(min_specialization)]

/// This contract will be used to represent the shares of a user
/// and other instance of this contract will be used to represent
/// the amount of borrowed tokens
#[openbrush::contract]
pub mod shares {
    use lending_project::traits::shares::*;
    use openbrush::{
        contracts::{
            ownable::*,
            psp22::extensions::{
                burnable::*,
                metadata::*,
                mintable::*,
            },
        },
        modifiers,
        traits::{
            Storage,
            String,
        },
    };

    /// Define the storage for PSP22 data, Metadata data and Ownable data
    #[ink(storage)]
    #[derive(Default, Storage)]
    pub struct SharesContract {
        #[storage_field]
        psp22: psp22::Data,
        #[storage_field]
        ownable: ownable::Data,
        #[storage_field]
        metadata: metadata::Data,
    }

    // Implement PSP22 Trait for our share
    impl PSP22 for SharesContract {}

    // Implement Ownable Trait for our share
    impl Ownable for SharesContract {}

    // Implement Metadata Trait for our share
    impl PSP22Metadata for SharesContract {}

    // Implement Mintable Trait for our share
    impl PSP22Mintable for SharesContract {
        /// override the `mint` function to add the `only_owner` modifier
        #[ink(message)]
        #[modifiers(only_owner)]
        fn mint(&mut self, account: AccountId, amount: Balance) -> Result<(), PSP22Error> {
            self._mint_to(account, amount)
        }
    }

    // Implement Burnable Trait for our share
    impl PSP22Burnable for SharesContract {
        /// override the `burn` function to add the `only_owner` modifier
        #[ink(message)]
        #[modifiers(only_owner)]
        fn burn(&mut self, account: AccountId, amount: Balance) -> Result<(), PSP22Error> {
            self._burn_from(account, amount)
        }
    }

    // It forces the compiler to check that you implemented all super traits
    impl Shares for SharesContract {}

    impl SharesContract {
        /// constructor with name and symbol
        #[ink(constructor)]
        pub fn new(name: Option<String>, symbol: Option<String>) -> Self {
            let mut instance = Self::default();
            let caller = Self::env().caller();
            instance.metadata.name = name;
            instance.metadata.symbol = symbol;
            instance.metadata.decimals = 18;
            instance._init_with_owner(caller);

            instance
        }
    }
}
