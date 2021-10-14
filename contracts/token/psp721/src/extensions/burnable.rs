/// Extension of [`PSP721`] that allows token holders to destroy their tokens
use crate::traits::*;

use brush::traits::{
    AccountId,
    ZERO_ADDRESS,
};

#[brush::trait_definition]
pub trait PSP721Burnable: IPSP721 {
    /// Destroys own token with id equal to 'id'.
    ///
    /// See [`PSP721::_burn`].
    #[ink(message)]
    fn burn(&mut self, id: Id) {
        self._burn(id);
    }

    /// Destroys token with id equal to 'id' from 'account'
    ///
    /// caller must be approved to transfer tokens from 'account'
    /// or to transfer token with 'id'
    #[ink(message)]
    fn burn_from(&mut self, account: AccountId, id: Id) {
        let caller = Self::env().caller();

        assert_eq!(
            self.get_approved(id).unwrap_or(ZERO_ADDRESS.into()) == caller || self.is_approved_for_all(account, caller),
            true,
            "{}",
            PSP721Error::NotApproved.as_ref()
        );

        self._burn_from(account, id);
    }
}
