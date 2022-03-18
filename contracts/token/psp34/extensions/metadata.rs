pub use crate::{
    psp34::*,
    traits::psp34::extensions::metadata::*,
};
use brush::declare_storage_trait;
pub use derive::{
    PSP34MetadataStorage,
    PSP34Storage,
};
use ink_prelude::vec::Vec;
use ink_storage::Mapping;

pub const STORAGE_KEY: [u8; 32] = ink_lang::blake2x256!("brush::PSP32MetadataData");

#[derive(Default, Debug)]
#[brush::storage(STORAGE_KEY)]
pub struct PSP34MetadataData {
    pub attributes: Mapping<(Id, Vec<u8>), Vec<u8>>,
}

declare_storage_trait!(PSP34MetadataStorage, PSP34MetadataData);

impl<T: PSP34MetadataStorage> PSP34Metadata for T {
    default fn get_attribute(&self, id: Id, key: Vec<u8>) -> Option<Vec<u8>> {
        self.get().attributes.get((&id, &key))
    }
}

pub trait PSP34MetadataInternal {
    fn _set_attribute(&mut self, id: Id, key: Vec<u8>, value: Vec<u8>);
}

impl<T: PSP34MetadataStorage + PSP34Internal> PSP34MetadataInternal for T {
    default fn _set_attribute(&mut self, id: Id, key: Vec<u8>, value: Vec<u8>) {
        self.get_mut().attributes.insert((&id, &key), &value);
        self._emit_attribute_set_event(id, key, value);
    }
}
