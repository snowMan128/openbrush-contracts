#![cfg_attr(not(feature = "std"), no_std)]
#![feature(min_specialization)]

#[openbrush::contract]
pub mod my_psp22_mintable {
    use ink_storage::traits::SpreadAllocate;
    use openbrush::{
        contracts::psp22::extensions::mintable::*,
        traits::Storage,
    };

    #[ink(storage)]
    #[derive(Default, SpreadAllocate, Storage)]
    pub struct Contract {
        #[storage_field]
        psp22: psp22::Data,
    }

    impl PSP22 for Contract {}
    impl PSP22Mintable for Contract {}

    impl Contract {
        #[ink(constructor)]
        pub fn new(total_supply: Balance) -> Self {
            ink_lang::codegen::initialize_contract(|instance: &mut Self| {
                assert!(instance._mint_to(instance.env().caller(), total_supply).is_ok());
            })
        }

        #[ink(message)]
        pub fn mint_to(&mut self, account: AccountId, amount: Balance) -> Result<(), PSP22Error> {
            self.mint(account, amount)
        }
    }
}
