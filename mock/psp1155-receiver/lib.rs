#![cfg_attr(not(feature = "std"), no_std)]

#[brush::contract]
pub mod erc1155_receiver {
    use psp1155::traits::*;

    #[ink(storage)]
    pub struct PSP1155ReceiverStruct {
        call_counter: u64,
        revert_next_transfer: bool
    }

    impl PSP1155ReceiverStruct {
        #[ink(constructor)]
        pub fn new() -> Self {
            Self { call_counter: 0, revert_next_transfer: false }
        }

        #[ink(message)]
        pub fn get_call_counter(&self) -> u64 {
            self.call_counter
        }

        #[ink(message)]
        pub fn revert_next_transfer(&mut self) {
            self.revert_next_transfer = true
        }
    }

    impl IPSP1155Receiver for PSP1155ReceiverStruct {
        fn on_psp1155_received(&mut self, _operator: AccountId, _from: AccountId,
                                   _id: Id, _value: Balance, _data: Vec<u8>) -> Result<(), PSP1155ReceiverError> {
            if self.revert_next_transfer {
                self.revert_next_transfer = false;
                return Err(PSP1155ReceiverError::TransferRejected(String::from("Transfer Rejected")))
            }
            self.call_counter += 1;
            Ok(())
        }

        fn on_psp1155_batch_received(&mut self, _operator: AccountId, _from: AccountId,
                                         _ids: Vec<Id>, _values: Vec<Balance>, _data: Vec<u8>) -> Result<(), PSP1155ReceiverError> {
            if self.revert_next_transfer {
                self.revert_next_transfer = false;
                return Err(PSP1155ReceiverError::TransferRejected(String::from("Transfer Rejected")))
            }
            self.call_counter += 1;
            Ok(())
        }
    }
}