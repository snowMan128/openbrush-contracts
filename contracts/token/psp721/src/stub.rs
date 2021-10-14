// It exports the stub implementation of all PSP721 traits.
// ink! will generate a wrapper around all methods of each trait and it will allow creating wrapped
// struct around contracts address(::ink_env::call::FromAccountId::from_account_id).
pub use self::{
    psp721::PSP721,
    psp721receiver::PSP721Receiver,
};

#[ink_lang::contract(compile_as_dependency = true)]
mod psp721 {
    use crate::traits::Id;
    use ink_prelude::{
        string::String,
        vec::Vec,
    };

    #[derive(Default)]
    #[ink(storage)]
    pub struct PSP721 {}

    impl PSP721 {
        #[ink(constructor)]
        pub fn new() -> Self {
            unimplemented!()
        }
    }

    #[ink(namespace = "IPSP721")]
    impl PSP721 {
        #[ink(message)]
        pub fn balance_of(&self, owner: AccountId) -> u32 {
            unimplemented!()
        }

        #[ink(message)]
        pub fn owner_of(&self, id: Id) -> Option<AccountId> {
            unimplemented!()
        }

        #[ink(message)]
        pub fn get_approved(&self, id: Id) -> Option<AccountId> {
            unimplemented!()
        }

        #[ink(message)]
        pub fn is_approved_for_all(&self, owner: AccountId, operator: AccountId) -> bool {
            unimplemented!()
        }

        #[ink(message)]
        pub fn set_approval_for_all(&mut self, to: AccountId, approved: bool) {
            unimplemented!()
        }

        #[ink(message)]
        pub fn approve(&mut self, to: AccountId, id: Id) {
            unimplemented!()
        }

        #[ink(message)]
        pub fn transfer_from(&mut self, from: AccountId, to: AccountId, id: Id) {
            unimplemented!()
        }

        #[ink(message)]
        pub fn safe_transfer_from(&mut self, from: AccountId, to: AccountId, id: Id, data: Vec<u8>) {
            unimplemented!()
        }
    }

    #[ink(namespace = "IPSP721Metadata")]
    impl PSP721 {
        #[ink(message)]
        pub fn name(&self) -> Option<String> {
            unimplemented!()
        }

        #[ink(message)]
        pub fn symbol(&self) -> Option<String> {
            unimplemented!()
        }
    }
}

#[ink_lang::contract(compile_as_dependency = true)]
mod psp721receiver {
    use crate::traits::{
        Id,
        PSP721ReceiverError,
    };
    use ink_prelude::vec::Vec;

    #[derive(Default)]
    #[ink(storage)]
    pub struct PSP721Receiver {}

    impl PSP721Receiver {
        #[ink(constructor)]
        pub fn new() -> Self {
            unimplemented!()
        }
    }

    #[ink(namespace = "IPSP721Receiver")]
    impl PSP721Receiver {
        #[ink(message)]
        pub fn on_psp721_received(
            &mut self,
            operator: AccountId,
            from: AccountId,
            id: Id,
            data: Vec<u8>,
        ) -> Result<(), PSP721ReceiverError> {
            unimplemented!()
        }
    }
}
