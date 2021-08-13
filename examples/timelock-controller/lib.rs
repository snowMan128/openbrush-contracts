#![cfg_attr(not(feature = "std"), no_std)]

#[brush::contract]
pub mod my_timelock_controller {
    use timelock_controller::traits::*;
    use ink_prelude::vec::Vec;

    #[ink(storage)]
    #[derive(Default, AccessControlStorage, TimelockControllerStorage)]
    pub struct TimelockStruct {
        #[AccessControlStorageField]
        access: AccessControlData,
        #[TimelockControllerStorageField]
        timelock: TimelockControllerData,
    }

    impl TimelockStruct {
        #[ink(constructor)]
        pub fn new(min_delay: Timestamp, proposers: Vec<AccountId>, executors: Vec<AccountId>) -> Self {
            let mut instance = Self::default();
            let caller = instance.env().caller();
            AccessControl::_init_with_admin(&mut instance, caller);
            TimelockController::_init_with_admin(&mut instance, caller, min_delay, proposers, executors);
            instance
        }
    }

    impl AccessControl for TimelockStruct {}
    impl TimelockController for TimelockStruct {}
}
