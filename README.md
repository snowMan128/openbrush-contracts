# ![logo-2](https://user-images.githubusercontent.com/18346821/127667990-a85453d6-8ded-470e-80c7-e2b6153a5eaf.png)

[![Docs](https://img.shields.io/badge/docs-%F0%9F%93%84-blue)](https://supercolony-net.github.io/openbrush-contracts)

Our mission with this project is to make ink! development faster, safer and easier.

## Summary
**OpenBrush is a library for smart contract development on ink!.**

Why use this library?
- To make contracts **interoperable** to do **safe** cross-contracts calls (by having the same functions signature among every contracts)
- To ensure the usage of [Polkadot Standards Proposals](https://github.com/w3f/PSPs) *[WIP]*
- To ensure the usage of the **latest & most secure** implementation
- Useful contracts that provide custom logic to be implemented in contracts
- To **save time** by not writing boilerplate code
- Useful features which can simplify development

Which Standard tokens & useful contracts does it provide?
- **Fungible Token** *ERC20 equivalent*
- **Non-Fungible Token** *ERC721 equivalent*
- **Multi-Token** *ERC1155 equivalent*
- **Ownable** Restrict access to action for non-owners
- **Roles** Define set of roles and restrict access to action by roles
- **Reentrancy guard** Prevent reentrant calls to a function
- **Pausable** Pause/Unpause the contract to disable/enable some operations
- **Timelock Controller** Execute transactions with some delay
- **Payment Splitter** Split amount of native tokens between participants

### Modifiers

Solidity smart contracts provides modifiers to restrain function call to certain pre-defined parameters. OpenBrush provides attribute macros to use standardised modifiers.
You can use our useful contracts to use as modifiers, or define your own modifiers.

```rust
#[modifiers(only_owner)]
fn mint(&mut self, to: AccountId, id: Id, amount: Balance) {
    self._mint(to, id, amount);
}
```

### How to use it?
Read our **documentation** in [doc](https://supercolony-net.github.io/openbrush-contracts).

Go through our **examples** in [examples](examples)

## Ink version

At the moment library is using own version of ink!, but it is the same as [ink!-3.0-rc4](https://github.com/paritytech/ink/releases/tag/v3.0.0-rc4)
with additional fixes:

- [A new `metadata_name` attribute](https://github.com/paritytech/ink/pull/859)

So if you want to use this library in the project, you must use custom version of ink! in the whole project.

### Events
‼️ Important ‼️

Events are not supported currently due to how ink! currently handles them.  
The identifiers of events must be based on the name of the trait. At the moment, ink! doesn't support it,
but it must be fixed with this [issue](https://github.com/paritytech/ink/issues/809).

### Issues to be resolved before the library becomes production-ready:
* [Standard token naming convention](https://github.com/Supercolony-net/openbrush-contracts/issues/1)
* [Event's identifiers are based on the naming of the storage structure](https://github.com/Supercolony-net/openbrush-contracts/issues/2)

### Other Issues open:

* [Returning of error doesn't mean revert of transaction](https://github.com/Supercolony-net/openbrush-contracts/issues/3)
* [#[ink::trait_definition] doesn't support generics and default implementation](https://github.com/Supercolony-net/openbrush-contracts/issues/4)
* [Library provides implementation on Rust level instead of ink! level](https://github.com/Supercolony-net/openbrush-contracts/issues/5)
* [List of issues, solving each of them can simplify usage of library](https://github.com/Supercolony-net/openbrush-contracts/issues/8)

The upgradable contract will be available after resolving of
this [issue](https://github.com/Supercolony-net/openbrush-contracts/issues/7)

## Roadmap 🚗

------- Release 0.1.0

- [x] Implement fungible, non-fungible, and multi tokens.
- [x] Implement AccessControl and Ownable.
- [x] Add examples of how to reuse ERC20, ERC721, AccessControl implementations.
- [x] Stub implementations for `token` and `access` folders.
- [x] Add base description of project

------- Release 0.2.0

- [x] Remove the boilerplate to make the internal implementation external.
- - [x] Implement `brush::contract` macro to consume all brush's stuff before ink!.
- - [x] Implement `brush::trait_definition` which stores definition of trait and allow to use it in `brush::contract` macro.
- - [x] Implement `impl_trait!` macro which reuse internal implementation in external impl section.
- [x] Refactor examples and tests with new macros.
- [x] Decide how to handle errors and implement it in library (Decided to use `panic!` and `assert!`).

------- Release 0.3.0

- [x] Create derive macro for storage traits. This macro must adds fields to contract's struct.
- [x] Cover all contracts with unit tests and integration tests.
- [x] Create documentation based on readme. Add comments to macros with example of usage.
- [x] Add `Ownable` + `ERC1155` example.
- [x] Support simple modifiers (which can only call functions without code injection).
- [x] Instead of `impl_trait!` macro add support of default implementation in external trait definition.

------- Release 1.0.0

- [x] Add Pausable, TimelockController and PaymentSplitter contracts.
- [x] Support code injection in modifiers.
- [x] Implement a reentrancy guard and example of usage.
- [x] Add more examples and documentation on how to use the library.

------- Pre-release 2.0.0

- [ ] Finalize PSP for fungible tokens. Refactor of implementation.
- [ ] PSPs for NFT and multi-token.
- [ ] Add extensions: AccessControlEnumerable, ERC721Enumerable.
- [ ] Refactor NFT and multi-token according to final decisions in PSPs.

------- Release 2.0.0 - Production ready

- [ ] Force/help ink! to create new independent events. During this task decide how ink! can generate metadata for
  events/traits from other crates.
- [ ] Cover everything with UT and integration tests.
- [ ] More documentation and examples.
- [ ] Audit.

------- Release 3.0.0

- [ ] All extensions for tokens.
- [ ] Improve ink! to allow code injection to have default implementation on ink! level instead Rust level.
- [ ] Refactor the library according to new changes.

------- Release 4.0.0

- [ ] Add support of upgradable contracts to ink!/contract-pallet level.
- [ ] Create upgradable contracts.

## Testing
You can run unit tests by `cargo test` command from the root of the directory.

To run integration test you need to install ink! toolchain, NodeJS's dependencies and start the node with contract-pallet.
- [ink! toolchain](https://docs.substrate.io/tutorials/v3/ink-workshop/pt1/#prerequisites)
- [Setup and start the node with contract-pallet](https://docs.patract.io/en/redspot/intro/installation#setup-local-test-node)
- NodeJS deps you can install via `npm run install` command

After you can run tests by `npm run test` command. It will build all contracts required for integration tests and run them.

## History behind

- [OpenZeppelin in ink!](https://medium.com/supercolony/ink-has-most-of-the-features-required-for-usage-however-the-usability-of-ink-is-low-95f4bc974e22)
- [Openbrush was born](https://supercolony.medium.com/openbrush-an-early-alpha-of-our-openzeppelin-library-for-ink-a0c3f4f9432)

## FAQ

### Why IntelliJ rust plugin doesn't autocomplete the library's derive macros?

It requires enabling of several experimental features:

* `org.rust.cargo.evaluate.build.scripts` - enables building and collecting build artefacts including proc-macro
  libraries during importing of project structure
* `org.rust.macros.proc` - enables expansion of procedural macros

To enable an experimental feature, type `Experimental feature` in the dialog of `Help | Find Action` action and enabled
the corresponding item.

### Was it audited?

Contracts in this repository have not yet been audited. But it is in plans.

## License

OpenBrush is released under the [MIT License](LICENSE).
