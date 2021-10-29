---
sidebar_position: 1
title: PSP1155 Metadata
---

This example shows how you can reuse the implementation of [PSP1155](https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/token/psp1155) token with [PSP1155Metadata](https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/token/psp1155/src/extensions/metadata.rs) extension.

## Step 1: Add imports

Import **everything** from `psp1155::extensions::metadata`.

```rust
#[brush::contract]
pub mod my_psp1155 {
   use psp1155::extensions::metadata::*;
```

## Step 2: Define storage

Declare storage struct and declare the field related to `PSP1155MetadataStorage` trait in addition to your `PSP1155Storage` field. Then you need to derive `PSP1155MetadataStorage` trait and mark the corresponding field with `#[PSP1155MetadataStorageField]` attribute. Deriving this trait allows you to reuse the `PSP1155Metadata` extension in your `PSP1155` implementation.

```rust
#[derive(Default, PSP1155Storage, PSP1155MetadataStorage)]
#[ink(storage)]
pub struct MyPSP1155 {
    #[PSP1155StorageField]
    psp1155: PSP1155Data,
    #[PSP1155MetadataStorageField]
    metadata: PSP1155MetadataData,
}
```

## Step 3: Inherit logic

Inherit implementation of `PSP1155Metadata` trait. You can customize (override) methods in this `impl` block.

```rust
impl PSP1155Metadata for MyPSP1155 {}
```

## Step 4: Define constructor

Define constructor. Your `PSP1155Metadata` contract is ready!

```rust
impl MyPSP1155 {
    #[ink(constructor)]
    pub fn new(uri: Option<String>) -> Self {
        let mut instance = Self::default();
        instance.metadata.uri = uri;
        instance
    }
}
```