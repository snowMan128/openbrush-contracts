pub use crate::{
    ownable::*,
    traits::proxy::*,
};
use brush::{
    declare_storage_trait,
    modifiers,
    traits::Hash,
};

pub use derive::ProxyStorage;
use ink_env::call::DelegateCall;

pub const STORAGE_KEY: [u8; 32] = ink_lang::blake2x256!("brush::ProxyData");

#[derive(Default, Debug)]
#[brush::storage(STORAGE_KEY)]
pub struct ProxyData {
    pub forward_to: Hash,
}

declare_storage_trait!(ProxyStorage, ProxyData);

impl<T: ProxyStorage + OwnableStorage> Proxy for T {
    default fn get_delegate_code(&self) -> Hash {
        ProxyStorage::get(self).forward_to
    }

    #[modifiers(only_owner)]
    default fn change_delegate_code(&mut self, new_code_hash: Hash) -> Result<(), OwnableError> {
        let old_code_hash = ProxyStorage::get(self).forward_to.clone();
        ProxyStorage::get_mut(self).forward_to = new_code_hash;
        self._emit_delegate_code_changed_event(Some(old_code_hash), Some(new_code_hash));
        Ok(())
    }
}

pub trait ProxyInternal {
    fn _emit_delegate_code_changed_event(&self, _previous_code_hash: Option<Hash>, _new_code_hash: Option<Hash>);

    fn _init_with_forward_to(&mut self, forward_to: Hash);

    fn _fallback(&self) -> !;
}

impl<T: ProxyStorage + OwnableStorage> ProxyInternal for T {
    default fn _emit_delegate_code_changed_event(
        &self,
        _previous_code_hash: Option<Hash>,
        _new_code_hash: Option<Hash>,
    ) {
    }

    default fn _init_with_forward_to(&mut self, forward_to: Hash) {
        ProxyStorage::get_mut(self).forward_to = forward_to;
        self._emit_delegate_code_changed_event(None, Some(forward_to));
    }

    default fn _fallback(&self) -> ! {
        ink_env::call::build_call::<ink_env::DefaultEnvironment>()
            .call_type(DelegateCall::new().code_hash(self.get_delegate_code()))
            .call_flags(
                ink_env::CallFlags::default()
                // We don't plan to use the input data after the delegated call, so the 
                // input data can be forwarded to delegated contract to reduce the gas usage.
                .set_forward_input(true)
                // We don't plan to return back to that contract after execution, so we 
                // marked delegated call as "tail", to end the execution of the contract.
                .set_tail_call(true),
            )
            .fire()
            .unwrap_or_else(|err| {
                panic!(
                    "delegate call to {:?} failed due to {:?}",
                    self.get_delegate_code(),
                    err
                )
            });
        unreachable!("the _fallback call will never return since `tail_call` was set");
    }
}
