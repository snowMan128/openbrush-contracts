"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[4353],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),h=r,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||o;return n?a.createElement(d,s(s({ref:t},c),{},{components:n})):a.createElement(d,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6843:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1,title:"Overview"},s=void 0,i={unversionedId:"smart-contracts/overview",id:"smart-contracts/overview",title:"Overview",description:"This doc contains description of how the OpenBrush library can be imported and used.",source:"@site/docs/smart-contracts/overview.md",sourceDirName:"smart-contracts",slug:"/smart-contracts/overview",permalink:"/smart-contracts/overview",draft:!1,editUrl:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/docs/docs/smart-contracts/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview"},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/"},next:{title:"Upgradeable contract",permalink:"/smart-contracts/upgradeable"}},l={},p=[{value:"The default <code>toml</code> of your project with OpenBrush:",id:"the-default-toml-of-your-project-with-openbrush",level:4},{value:"Reuse implementation of traits from OpenBrush",id:"reuse-implementation-of-traits-from-openbrush",level:4}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This doc contains description of how the OpenBrush library can be imported and used. "),(0,r.kt)("p",null,"The OpenBrush is using ink! stable release ",(0,r.kt)("inlineCode",{parentName:"p"},"3.3.0")," at the moment.\nSo you should use the same version of the ink! across your project.\nIf you use an old version of ink, you need to use the old version of OpenBrush.\nOpenBrush had several significant changes in API, so you check the ",(0,r.kt)("a",{parentName:"p",href:"https://openbrush.io"},"Wizard"),"\nto study how to use different versions of OpenBrush."),(0,r.kt)("p",null,"The documentation describes the latest available OpenBrush and how to use it.\nIt doesn't contain ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/issues/127"},"versioning")," yet."),(0,r.kt)("h4",{id:"the-default-toml-of-your-project-with-openbrush"},"The default ",(0,r.kt)("inlineCode",{parentName:"h4"},"toml")," of your project with OpenBrush:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\n# Import of all ink! crates\nink_primitives = { version = "~3.3.0", default-features = false }\nink_metadata = { version = "~3.3.0", default-features = false, features = ["derive"], optional = true }\nink_env = { version = "~3.3.0", default-features = false }\nink_storage = { version = "~3.3.0", default-features = false }\nink_lang = { version = "~3.3.0", default-features = false }\nink_prelude = { version = "~3.3.0", default-features = false }\nink_engine = { version = "~3.3.0", default-features = false, optional = true }\n\nscale = { package = "parity-scale-codec", version = "3", default-features = false, features = ["derive"] }\nscale-info = { version = "2", default-features = false, features = ["derive"], optional = true }\n\n# Brush dependency\nopenbrush = { version = "~2.2.0", default-features = false }\n\n[features]\ndefault = ["std"]\nstd = [\n  "ink_primitives/std",\n  "ink_metadata",\n  "ink_metadata/std",\n  "ink_env/std",\n  "ink_storage/std",\n  "ink_lang/std",\n  "scale/std",\n  "scale-info",\n  "scale-info/std",\n\n  # Brush dependency\n  "openbrush/std",\n]\nink-as-dependency = []\n')),(0,r.kt)("p",null,"To avoid unexpected compilation errors better to always import all ink! crates until resolving\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/issues/825"},"issue"),"."),(0,r.kt)("p",null,"By default, the ",(0,r.kt)("inlineCode",{parentName:"p"},"openbrush")," crate provides ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/blob/main/lang/macro/src/lib.rs"},"macros"),"\nfor simplification of the development and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/src/traits"},"traits")," of\ncontracts(you can implement them by yourself, and you can use them for a cross-contract calls). "),(0,r.kt)("p",null,"The OpenBrush also provides the default implementation of traits that can be enabled via crate features.\nA list of all available features you can find ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/blob/main/Cargo.toml#L51"},"here"),".\nThe default implementation of traits requires the usage of the unstable feature ",(0,r.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/beta/unstable-book/language-features/min-specialization.html"},"min-specialization"),".\nYou can enable it by adding ",(0,r.kt)("inlineCode",{parentName:"p"},"#![feature(min_specialization)]")," at the top of your root module(for more information check ",(0,r.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/rustdoc/unstable-features.html"},"rust official documentation"),"). "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Note:")),"  ink! requires put ",(0,r.kt)("inlineCode",{parentName:"p"},'#![cfg_attr(not(feature = "std"), no_std)]')," at the top of root crate.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Note:")),"  Some default implementations for traits provide additional methods that can be overridden.\nThese methods are defined in a separate internal trait. It has the name ",(0,r.kt)("inlineCode",{parentName:"p"},"Internal"),".\nIf you want to override them you need to do that in the impl section of the internal trait.\nIf you imported several internal traits, you could specify which one you want to use, ",(0,r.kt)("inlineCode",{parentName:"p"},"psp22::Internal")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"psp34::Internal"),".")),(0,r.kt)("h4",{id:"reuse-implementation-of-traits-from-openbrush"},"Reuse implementation of traits from OpenBrush"),(0,r.kt)("p",null,"The doc contains links to the examples of how to reuse and customize the default implementation of traits."),(0,r.kt)("p",null,"All default implementations of the traits provided by OpenBursh have the same pattern.\nConsequently, the re-usage of each implementation in your contract also has the same pattern."),(0,r.kt)("p",null,"Each implementation of the contract has its module and its feature that enables that\nmodule. A list of available modules you can find ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/blob/main/contracts/src/lib.rs#L33"},"here"),",\na list of available features ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/blob/main/Cargo.toml#L51"},"here"),".\nEach module can be reached via the ",(0,r.kt)("inlineCode",{parentName:"p"},"openbrush::contracts::")," namespace. For example,\nto use the ",(0,r.kt)("inlineCode",{parentName:"p"},"psp22")," module, you need to import ",(0,r.kt)("inlineCode",{parentName:"p"},"openbrush::contracts::psp22"),";\nto use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ownable")," module, you need to import ",(0,r.kt)("inlineCode",{parentName:"p"},"openbrush::contracts::ownable"),"."),(0,r.kt)("p",null,"Before importing each module, first you need to enable the corresponding feature in your ",(0,r.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),".\nThe name of the feature is the same as the name of the module. For example:"),(0,r.kt)("p",null,"To enable ",(0,r.kt)("inlineCode",{parentName:"p"},"psp22"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'openbrush = { version = "~2.2.0", default-features = false, features = ["psp22"] }\n')),(0,r.kt)("p",null,"To enable ",(0,r.kt)("inlineCode",{parentName:"p"},"ownable"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'openbrush = { version = "~2.2.0", default-features = false, features = ["ownable"] }\n')),(0,r.kt)("p",null,"To enable both:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'openbrush = { version = "~2.2.0", default-features = false, features = ["psp22", "ownable"] }\n')),(0,r.kt)("p",null,"After enabling the feature and importing the corresponding module, you need to embed the module\ndata structure into your contract as a field and implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"openbrush::traits::Storage"),"\ntrait for that field. In most cases, the data structure of each module is named ",(0,r.kt)("inlineCode",{parentName:"p"},"Data"),".\nIf importing several modules, you can specify which data you want to use via namespaces like\n",(0,r.kt)("inlineCode",{parentName:"p"},"psp22::Data")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ownable::Data"),"."),(0,r.kt)("p",null,"Embedding of data structures looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use openbrush::contracts::ownable::*;\nuse openbrush::contracts::psp22::*;\n\n#[ink(storage)]\npub struct Contract {\n    foo: psp22::Data,\n    bar: ownable::Data,\n}\n")),(0,r.kt)("p",null,"Each contract that wants to reuse implementation should implement the\n",(0,r.kt)("inlineCode",{parentName:"p"},"openbrush::traits::Storage")," with the corresponding data structure.\nThe easiest way to implement that trait is via the derive macro by adding\n",(0,r.kt)("inlineCode",{parentName:"p"},"#[derive(Storage)]")," and marking the corresponding fields with the ",(0,r.kt)("inlineCode",{parentName:"p"},"#[storage_field]"),"\nattribute."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use openbrush::contracts::ownable::*;\nuse openbrush::contracts::psp22::*;\nuse openbrush::traits::Storage;\n\n#[ink(storage)]\n#[derive(Storage)]\npub struct Contract {\n    #[storage_field]\n    foo: psp22::Data,\n    #[storage_field]\n    bar: ownable::Data,\n}\n")),(0,r.kt)("p",null,"Now your contract has access to default implementation on the Rust level.\nIt is on the Rust level so you can call methods only inside your contract\n(in the example, it is methods of ",(0,r.kt)("inlineCode",{parentName:"p"},"PSP22"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"psp22::Internal"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Ownable"),", and\n",(0,r.kt)("inlineCode",{parentName:"p"},"ownable::Internal")," traits). If you want to make all methods of some trait public,\nyou should explicitly implement the corresponding trait. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use openbrush::contracts::ownable::*;\nuse openbrush::contracts::psp22::*;\nuse openbrush::traits::Storage;\n\n#[ink(storage)]\n#[derive(Storage)]\npub struct Contract {\n    #[storage_field]\n    foo: psp22::Data,\n    #[storage_field]\n    bar: ownable::Data,\n}\n\nimpl PSP22 for Contract {}\nimpl Ownable for Contract {}\n")),(0,r.kt)("p",null,"Remember, only traits with ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink(message)]")," methods can be public. ",(0,r.kt)("inlineCode",{parentName:"p"},"psp22::Internal"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"ownable::Internal")," can't be exposed. It is for internal usage only."),(0,r.kt)("p",null,'The implementation in OpenBrush is called "default" because you can customize(override) it.\nYou can override one method, or several, as you wish. For example:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use openbrush::contracts::ownable::*;\nuse openbrush::contracts::psp22::*;\nuse openbrush::traits::Storage;\n\n#[ink(storage)]\n#[derive(Storage)]\npub struct Contract {\n    #[storage_field]\n    foo: psp22::Data,\n    #[storage_field]\n    bar: ownable::Data,\n}\n\nimpl PSP22 for Contract {\n    fn balance_of(&self, owner: AccountId) -> Balance {\n        // For example you can break `balance_of` method and return always zero\n        return 0\n    }\n}\n\nimpl Ownable for Contract {\n    fn owner(&self) -> AccountId {\n        // For example you can return always zero owner\n        openbrush::traits::ZERO_ADDRESS.into()\n    }\n}\n\nimpl psp22::Internal for Contract {\n  fn _mint(&mut self, account: AccountId, amount: Balance) -> Result<(), PSP22Error> {\n    return Err(PSP22Error::Custom("I don\'t want to mint anything".to_string()));\n  }\n}\n\nimpl ownable::Internal for Contract {\n  fn _init_with_owner(&mut self, owner: AccountId) {\n    // Maybe you want to change something during initialization of the owner\n  }\n}\n')),(0,r.kt)("p",null,"Work with each module has the same pattern. The difference is only in the naming of\nthe module and main trait. Some contract extensions require additional steps, so below,\nyou can find instructions on how to work with them:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/smart-contracts/PSP22/"},"PSP22")," is an example of how you can reuse the implementation of\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/src/token/psp22"},"psp22"),". You also can find examples of how to reuse extensions.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/smart-contracts/PSP22/Extensions/metadata"},"PSP22Metadata"),": metadata for PSP22."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/smart-contracts/PSP22/Extensions/mintable"},"PSP22Mintable"),": creation of new tokens."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/smart-contracts/PSP22/Extensions/burnable"},"PSP22Burnable"),": destruction of own tokens."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/smart-contracts/PSP22/Extensions/wrapper"},"PSP22Wrapper"),": wrapper for PSP22 token (useful for governance tokens etc.)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/smart-contracts/PSP22/Extensions/flashmint"},"PSP22FlashMint"),": extension which allows performing flashloans of the token by minting and burning the token."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/smart-contracts/PSP22/Extensions/pausable"},"PSP22Pausable"),": example of using pausable extension in the PSP22 contract."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/smart-contracts/PSP22/Utils/token-timelock"},"PSP22TokenTimelock"),": Utility which allows token holders to lock their tokens for a specified amount of time."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/smart-contracts/PSP34/"},"PSP34")," is an example of how you can reuse the implementation of\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/src/token/psp34"},"psp34"),". You also can find examples of how to reuse extensions.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/smart-contracts/PSP34/Extensions/metadata"},"PSP34Metadata"),": metadata for PSP34."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/smart-contracts/PSP34/Extensions/mintable"},"PSP34Mintable"),": creation of new tokens."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/smart-contracts/PSP34/Extensions/burnable"},"PSP34Burnable"),": destruction of own tokens."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/smart-contracts/PSP34/Extensions/enumerable"},"PSP34Enumerable"),": iterating over contract's tokens."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/smart-contracts/PSP35/"},"PSP35")," is an example of how you can reuse the implementation of\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/token/psp35"},"psp35"),". You also can find examples of how to reuse extensions.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/smart-contracts/PSP35/Extensions/metadata"},"PSP35Metadata"),": metadata for PSP35."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/smart-contracts/PSP35/Extensions/mintable"},"PSP35Mintable"),": creation of new tokens."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/smart-contracts/PSP35/Extensions/burnable"},"PSP35Burnable"),": destruction of own tokens."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/smart-contracts/PSP35/Extensions/batch"},"PSP35Batch"),": batch transferring of tokens."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/smart-contracts/PSP35/Extensions/enumerable"},"PSP35Enumerable"),": iterating over contract's tokens."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/smart-contracts/access-control/"},"Access Control")," shows how you can use the implementation of\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/src/access/access_control"},"access-control")," and\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/src/token/psp34"},"psp34")," together to provide rights to mint and burn NFT tokens.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/smart-contracts/access-control/Extensions/enumerable"},"AccessControlEnumerable"),": iterating over contract's roles."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/smart-contracts/ownable"},"Ownable")," shows how you can use the implementation of\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/access/ownable"},"ownable")," and\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/token/psp35"},"psp35")," together to provide rights to mint and burn tokens."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/src/security/reentrancy_guard"},"ReentrancyGuard"),"\nmodifier to prevent reentrancy during certain functions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/smart-contracts/pausable"},"Pausable")," shows how you can use the implementation of\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/src/security/pausable"},"pausable"),"\ncontract and modifiers."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/smart-contracts/timelock-controller"},"TimelockController")," shows how you can use the implementation of\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/src/governance/timelock_controller"},"timelock-controller"),"\nto execute a transaction with some delay via governance."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/smart-contracts/payment-splitter"},"PaymentSplitter")," shows how you can use the implementation of\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/src/finance/payment_splitter"},"payment-splitter"),"\nto split received native tokens between participants of the contract."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/smart-contracts/diamond/"},"Diamond")," shows how you can use the implementation of\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/src/upgradeability/diamond"},"diamond"),"\npattern to split your contract into small parts and support upgradeability.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/smart-contracts/diamond/Extensions/loupe"},"DiamondLoupe"),": iterating over contract's facets."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/smart-contracts/proxy"},"Proxy")," shows how you can use the implementation of\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/src/upgradeability/proxy"},"proxy"),"\npattern to support upgradeability of your contract.")))}u.isMDXComponent=!0}}]);