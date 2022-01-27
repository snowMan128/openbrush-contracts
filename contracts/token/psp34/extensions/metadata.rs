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
use ink_storage::collections::HashMap as StorageHashMap;

use ink_storage::traits::SpreadLayout;
#[cfg(feature = "std")]
use ink_storage::traits::StorageLayout;


#[derive(Default, Debug, SpreadLayout)]
#[cfg_attr(feature = "std", derive(StorageLayout))]
pub struct PSP34MetadataData {
    pub attributes: StorageHashMap<Vec<u8>, Vec<u8>>,
}

declare_storage_trait!(PSP34MetadataStorage, PSP34MetadataData);

impl<T: PSP34MetadataStorage> PSP34Metadata for T {
    default fn get_attribute(&self, id: Id, key: Vec<u8>) -> Option<Vec<u8>> {
        let mut key: Vec<u8> = key.clone();
        key.append(&mut id.into());
        self.get().attributes.get(&key).cloned()
    }
}

pub trait PSP34MetadataInternal {
    fn _set_attribute(&mut self, id: Id, key: Vec<u8>, value: Vec<u8>);
}

impl<T: PSP34MetadataStorage + PSP34Internal> PSP34MetadataInternal for T {
    fn _set_attribute(&mut self, id: Id, key: Vec<u8>, value: Vec<u8>) {
        let mut key: Vec<u8> = key.clone();
        key.append(&mut id.clone().into());
        self.get_mut().attributes.insert(key.clone(), value.clone());
        self._emit_attribute_set_event(id, key, value);
    }
}
