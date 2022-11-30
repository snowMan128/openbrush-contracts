// Copyright (c) 2012-2022 Supercolony
//
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the"Software"),
// to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

pub use crate::{
    pausable,
    traits::pausable::*,
};
pub use pausable::Internal as _;

use openbrush::{
    modifier_definition,
    modifiers,
    traits::{
        AccountId,
        Storage,
    },
};

pub const STORAGE_KEY: u32 = openbrush::storage_unique_key!(Data);

#[derive(Default, Debug)]
#[openbrush::upgradeable_storage(STORAGE_KEY)]
pub struct Data {
    pub paused: bool,
    pub _reserved: Option<()>,
}

/// Modifier to make a function callable only when the contract is paused.
#[modifier_definition]
pub fn when_paused<T, F, R, E>(instance: &mut T, body: F) -> Result<R, E>
where
    T: Storage<Data>,
    F: FnOnce(&mut T) -> Result<R, E>,
    E: From<PausableError>,
{
    if !instance.data().paused {
        return Err(From::from(PausableError::NotPaused))
    }
    body(instance)
}

/// Modifier to make a function callable only when the contract is not paused.
#[modifier_definition]
pub fn when_not_paused<T, F, R, E>(instance: &mut T, body: F) -> Result<R, E>
where
    T: Storage<Data>,
    F: FnOnce(&mut T) -> Result<R, E>,
    E: From<PausableError>,
{
    if instance.data().paused {
        return Err(From::from(PausableError::Paused))
    }
    body(instance)
}

impl<T: Storage<Data>> Pausable for T {
    default fn paused(&self) -> bool {
        self.data().paused
    }
}

pub trait Internal {
    /// User must override those methods in their contract.
    fn _emit_paused_event(&self, _account: AccountId);
    fn _emit_unpaused_event(&self, _account: AccountId);

    /// Triggers stopped state.
    ///
    /// On success a `Paused` event is emitted.
    #[modifiers(when_not_paused)]
    fn _pause<E: From<PausableError>>(&mut self) -> Result<(), E>;

    /// Returns to normal state.
    ///
    /// On success a `Unpaused` event is emitted.
    #[modifiers(when_paused)]
    fn _unpause<E: From<PausableError>>(&mut self) -> Result<(), E>;

    /// Function which changes state to unpaused if paused and vice versa
    fn _switch_pause<E: From<PausableError>>(&mut self) -> Result<(), E>;
}

impl<T: Storage<Data>> Internal for T {
    default fn _emit_paused_event(&self, _account: AccountId) {}
    default fn _emit_unpaused_event(&self, _account: AccountId) {}

    #[modifiers(when_not_paused)]
    default fn _pause<E: From<PausableError>>(&mut self) -> Result<(), E> {
        self.data().paused = true;
        self._emit_paused_event(Self::env().caller());
        Ok(())
    }

    #[modifiers(when_paused)]
    default fn _unpause<E: From<PausableError>>(&mut self) -> Result<(), E> {
        self.data().paused = false;
        self._emit_unpaused_event(Self::env().caller());
        Ok(())
    }

    default fn _switch_pause<E: From<PausableError>>(&mut self) -> Result<(), E> {
        if self.paused() {
            self._unpause()
        } else {
            self._pause()
        }
    }
}
