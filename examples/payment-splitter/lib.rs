#![cfg_attr(not(feature = "std"), no_std)]

#[brush::contract]
pub mod my_payment_splitter {
    use ink_prelude::vec::Vec;
    use payment_splitter::traits::*;

    #[ink(storage)]
    #[derive(Default, PaymentSplitterStorage)]
    pub struct SplitterStruct {
        #[PaymentSplitterStorageField]
        splitter: PaymentSplitterData,
    }

    impl SplitterStruct {
        #[ink(constructor)]
        pub fn new(payees_and_shares: Vec<(AccountId, Balance)>) -> Self {
            let mut instance = Self::default();
            instance._init(payees_and_shares).expect("Should init");
            instance
        }
    }

    impl PaymentSplitter for SplitterStruct {}
}
