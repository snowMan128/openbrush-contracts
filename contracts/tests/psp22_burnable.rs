#![feature(min_specialization)]
#[cfg(feature = "psp22")]
#[brush::contract]
mod psp22_burnable {
    use brush::test_utils::*;
    use contracts::psp22::extensions::burnable::*;
    use ink::{
        EmitEvent,
        Env,
    };
    use ink_lang as ink;

    /// Event emitted when a token transfer occurs.
    #[ink(event)]
    pub struct Transfer {
        #[ink(topic)]
        from: Option<AccountId>,
        #[ink(topic)]
        to: Option<AccountId>,
        value: Balance,
    }

    /// A simple PSP-20 contract.
    #[ink(storage)]
    #[derive(Default, PSP22Storage)]
    pub struct PSP22Struct {
        #[PSP22StorageField]
        psp22: PSP22Data,
        // field for testing _before_token_transfer
        return_err_on_before: bool,
        // field for testing _after_token_transfer
        return_err_on_after: bool,
    }

    type Event = <PSP22Struct as ::ink_lang::BaseEvent>::Type;

    impl PSP22Internal for PSP22Struct {
        fn _emit_transfer_event(&self, _from: Option<AccountId>, _to: Option<AccountId>, _amount: Balance) {
            self.env().emit_event(Transfer {
                from: _from,
                to: _to,
                value: _amount,
            });
        }

        // Override these functions with an empty body to omit error (cross-contract calls are not supported in off-chain environment)
        fn _emit_approval_event(&self, _owner: AccountId, _spender: AccountId, _amount: Balance) {}

        fn _do_safe_transfer_check(
            &mut self,
            _from: AccountId,
            _to: AccountId,
            _value: Balance,
            _data: Vec<u8>,
        ) -> Result<(), PSP22Error> {
            Ok(())
        }

        fn _before_token_transfer(
            &mut self,
            _from: Option<&AccountId>,
            _to: Option<&AccountId>,
            _amount: &Balance,
        ) -> Result<(), PSP22Error> {
            if self.return_err_on_before {
                return Err(PSP22Error::Custom(String::from("Error on _before_token_transfer")))
            }
            Ok(())
        }

        fn _after_token_transfer(
            &mut self,
            _from: Option<&AccountId>,
            _to: Option<&AccountId>,
            _amount: &Balance,
        ) -> Result<(), PSP22Error> {
            if self.return_err_on_after {
                return Err(PSP22Error::Custom(String::from("Error on _after_token_transfer")))
            }
            Ok(())
        }
    }

    impl PSP22 for PSP22Struct {}

    impl PSP22Struct {
        #[ink(constructor)]
        pub fn new(total_supply: Balance) -> Self {
            let mut instance = Self::default();
            assert!(instance._mint(instance.env().caller(), total_supply).is_ok());
            instance
        }

        pub fn change_state_err_on_before(&mut self) {
            self.return_err_on_before = !self.return_err_on_before;
        }

        pub fn change_state_err_on_after(&mut self) {
            self.return_err_on_after = !self.return_err_on_after;
        }
    }

    impl PSP22Burnable for PSP22Struct {}

    fn assert_transfer_event(
        event: &ink_env::test::EmittedEvent,
        expected_from: Option<AccountId>,
        expected_to: Option<AccountId>,
        expected_value: Balance,
    ) {
        let decoded_event = <Event as scale::Decode>::decode(&mut &event.data[..])
            .expect("encountered invalid contract event data buffer");

        let Event::Transfer(Transfer { from, to, value }) = decoded_event;
        assert_eq!(from, expected_from, "encountered invalid Transfer.from");
        assert_eq!(to, expected_to, "encountered invalid Transfer.to");
        assert_eq!(value, expected_value, "encountered invalid Trasfer.value");

        let expected_topics = vec![
            encoded_into_hash(&PrefixedValue {
                value: b"PSP22Struct::Transfer",
                prefix: b"",
            }),
            encoded_into_hash(&PrefixedValue {
                prefix: b"PSP22Struct::Transfer::from",
                value: &expected_from,
            }),
            encoded_into_hash(&PrefixedValue {
                prefix: b"PSP22Struct::Transfer::to",
                value: &expected_to,
            }),
            encoded_into_hash(&PrefixedValue {
                prefix: b"PSP22Struct::Transfer::value",
                value: &expected_value,
            }),
        ];
        for (n, (actual_topic, expected_topic)) in event.topics.iter().zip(expected_topics).enumerate() {
            let topic = actual_topic
                .decode::<Hash>()
                .expect("encountered invalid topic encoding");
            assert_eq!(topic, expected_topic, "encountered invalid topic at {}", n);
        }
    }

    // Testing burnable extension

    #[ink::test]
    fn should_not_burn_if_burn_amount_greater_than_account_balance() {
        let initial_balance = 10;
        let mut psp22 = PSP22Struct::new(initial_balance);
        let accounts = accounts();
        let amount_to_burn = 100;

        assert_eq!(
            psp22.burn(accounts.alice, amount_to_burn),
            Err(PSP22Error::InsufficientBalance)
        );
    }

    #[ink::test]
    fn should_emit_transfer_event_after_burn() {
        // Constructor works.
        let initial_amount = 100;
        let mut psp22 = PSP22Struct::new(initial_amount);
        let accounts = accounts();
        // Transfer event triggered during initial construction.
        let amount_to_burn = 10;

        assert!(psp22.burn(accounts.alice, amount_to_burn).is_ok());

        let emitted_events = ink_env::test::recorded_events().collect::<Vec<_>>();
        assert_eq!(emitted_events.len(), 2);
        // Check first transfer event related to PSP-20 instantiation.
        assert_transfer_event(
            &emitted_events[0],
            None,
            Some(AccountId::from([0x01; 32])),
            initial_amount,
        );
        // Check the second transfer event relating to the actual transfer.
        assert_transfer_event(
            &emitted_events[1],
            Some(AccountId::from([0x01; 32])),
            None,
            amount_to_burn,
        );
    }

    #[ink::test]
    fn total_supply_decreases_after_burning() {
        let mut psp22 = PSP22Struct::new(100);
        let accounts = accounts();

        // Contract's total supply before burning
        let total_supply = psp22.total_supply();
        let amount_to_burn = 10;

        assert!(psp22.burn(accounts.alice, amount_to_burn).is_ok());

        // Contract's total supply after burning
        let newtotal_supply = psp22.total_supply();

        assert_eq!(newtotal_supply, total_supply - amount_to_burn);
    }

    #[ink::test]
    fn burn_requested_amount() {
        let mut psp22 = PSP22Struct::new(100);
        let accounts = accounts();

        // Alice's balance before burning
        let alice_balance = psp22.balance_of(accounts.alice);
        let amount_to_burn = 10;

        assert!(psp22.burn(accounts.alice, amount_to_burn).is_ok());

        // Alice's balance after burning
        let new_alice_balance = psp22.balance_of(accounts.alice);

        assert_eq!(new_alice_balance, alice_balance - amount_to_burn);
    }

    #[ink::test]
    fn burn_requested_amount_from() {
        let mut psp22 = PSP22Struct::new(100);
        let accounts = accounts();
        let amount_to_burn = 50;

        let alice_balance = psp22.balance_of(accounts.alice);

        // switch to bob
        change_caller(accounts.bob);

        // Burning some amount from Alice's account
        assert!(psp22.burn(accounts.alice, amount_to_burn).is_ok());

        // Expecting Alice's balance decrease
        assert_eq!(psp22.balance_of(accounts.alice), alice_balance - amount_to_burn);
    }

    #[ink::test]
    fn before_token_transfer_should_fail_burn() {
        // Constructor works.
        let mut psp22 = PSP22Struct::new(100);
        let accounts = accounts();
        // Alice can burn 10 tokens
        assert!(psp22.burn(accounts.alice, 10).is_ok());
        assert_eq!(psp22.balance_of(accounts.alice), 90);
        // Turn on error on _before_token_transfer
        psp22.change_state_err_on_before();
        // Alice gets an error on _before_token_transfer
        assert_eq!(
            psp22.burn(accounts.alice, 10),
            Err(PSP22Error::Custom(String::from("Error on _before_token_transfer")))
        );
    }

    #[ink::test]
    fn after_token_transfer_should_fail_burn() {
        // Constructor works.
        let mut psp22 = PSP22Struct::new(100);
        let accounts = accounts();
        // Alice can burn 10 tokens
        assert!(psp22.burn(accounts.alice, 10).is_ok());
        assert_eq!(psp22.balance_of(accounts.alice), 90);
        // Turn on error on _after_token_transfer
        psp22.change_state_err_on_after();
        // Alice gets an error on _after_token_transfer
        assert_eq!(
            psp22.burn(accounts.alice, 10),
            Err(PSP22Error::Custom(String::from("Error on _after_token_transfer")))
        );
    }
}
