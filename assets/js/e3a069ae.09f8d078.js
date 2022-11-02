"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[71234],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=i(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,p(p({ref:t},l),{},{components:n})):a.createElement(f,p({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,p[1]=s;for(var i=2;i<o;i++)p[i]=n[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51274:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:7,title:"PSP22 Capped"},p=void 0,s={unversionedId:"smart-contracts/PSP22/Extensions/capped",id:"version-1.6.0/smart-contracts/PSP22/Extensions/capped",title:"PSP22 Capped",description:"This example shows how you can implement a PSP22 contract with a supply cap, analogue to ERC20Capped.",source:"@site/versioned_docs/version-1.6.0/smart-contracts/PSP22/Extensions/capped.md",sourceDirName:"smart-contracts/PSP22/Extensions",slug:"/smart-contracts/PSP22/Extensions/capped",permalink:"/1.6.0/smart-contracts/PSP22/Extensions/capped",draft:!1,editUrl:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/docs/versioned_docs/version-1.6.0/smart-contracts/PSP22/Extensions/capped.md",tags:[],version:"1.6.0",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"PSP22 Capped"},sidebar:"tutorialSidebar",previous:{title:"PSP22 Pausable",permalink:"/1.6.0/smart-contracts/PSP22/Extensions/pausable"},next:{title:"PSP22 Token Timelock",permalink:"/1.6.0/smart-contracts/PSP22/Utils/token-timelock"}},c={},i=[{value:"Step 1: Include dependencies",id:"step-1-include-dependencies",level:2},{value:"Step 2: Add imports and enable unstable feature",id:"step-2-add-imports-and-enable-unstable-feature",level:2},{value:"Step 3: Define storage",id:"step-3-define-storage",level:2},{value:"Step 4: Define constructor and contract functions",id:"step-4-define-constructor-and-contract-functions",level:2}],l={toc:i};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This example shows how you can implement a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/token/psp22"},"PSP22")," contract with a supply cap, analogue to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/extensions/ERC20Capped.sol"},"ERC20Capped"),"."),(0,r.kt)("h2",{id:"step-1-include-dependencies"},"Step 1: Include dependencies"),(0,r.kt)("p",null,"Include ",(0,r.kt)("inlineCode",{parentName:"p"},"brush")," as dependency in the cargo file or you can use ",(0,r.kt)("a",{parentName:"p",href:"../../overview#the-default-toml-of-your-project-with-openbrush"},"default ",(0,r.kt)("inlineCode",{parentName:"a"},"Cargo.toml"))," template.\nAfter you need to enable default implementation of PSP22 via ",(0,r.kt)("inlineCode",{parentName:"p"},"brush")," features."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'brush = { tag = "v1.6.0", git = "https://github.com/Supercolony-net/openbrush-contracts", default-features = false, features = ["psp22"] }\n')),(0,r.kt)("h2",{id:"step-2-add-imports-and-enable-unstable-feature"},"Step 2: Add imports and enable unstable feature"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"brush::contract")," macro instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"ink::contract"),". Import ",(0,r.kt)("strong",{parentName:"p"},"everything")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"brush::contracts::psp22"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n#![feature(min_specialization)]\n\n#[brush::contract]\npub mod my_psp22_capped {\n    use brush::contracts::psp22::*;\n    use ink_prelude::string::String;\n    use ink_storage::traits::SpreadAllocate;\n...\n')),(0,r.kt)("h2",{id:"step-3-define-storage"},"Step 3: Define storage"),(0,r.kt)("p",null,"Declare the storage struct and the field related to the ",(0,r.kt)("inlineCode",{parentName:"p"},"PSP22Storage")," trait, derive the ",(0,r.kt)("inlineCode",{parentName:"p"},"PSP22Storage")," trait and mark the corresponding field with the ",(0,r.kt)("inlineCode",{parentName:"p"},"#[PSP22StorageField]")," attribute. Also add the storage variable for cap."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\n#[derive(Default, SpreadAllocate, PSP22Storage)]\npub struct MyPSP22Capped {\n    #[PSP22StorageField]\n    psp22: PSP22Data,\n    cap: Balance,\n}\n")),(0,r.kt)("h2",{id:"step-4-define-constructor-and-contract-functions"},"Step 4: Define constructor and contract functions"),(0,r.kt)("p",null,"Define constructor, inherit ",(0,r.kt)("inlineCode",{parentName:"p"},"PSP22"),", and override the basic functions for capped implementation. Your ",(0,r.kt)("inlineCode",{parentName:"p"},"PSP22Capped")," contract is ready!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'impl PSP22 for MyPSP22Capped {}\n\nimpl MyPSP22Capped {\n    /// Constructor which mints `initial_supply` of the token to sender\n    /// Will set the token\'s cap to `cap`\n    #[ink(constructor)]\n    pub fn new(inital_supply: Balance, cap: Balance) -> Self {\n        ink_lang::codegen::initialize_contract(|instance: &mut Self| {\n            assert!(instance.init_cap(cap).is_ok());\n            assert!(instance._mint(instance.env().caller(), inital_supply).is_ok());\n        })\n    }\n\n    /// Expose the `_mint` function\n    #[ink(message)]\n    pub fn mint(&mut self, account: AccountId, amount: Balance) -> Result<(), PSP22Error> {\n        self._mint(account, amount)\n    }\n\n    #[ink(message)]\n    /// Returns the token\'s cap\n    pub fn cap(&self) -> Balance {\n        self.cap\n    }\n\n    /// Overrides the `_mint` function to check for cap overflow before minting tokens\n    /// Performs `PSP22::_mint` after the check succeeds\n    fn _mint(&mut self, account: AccountId, amount: Balance) -> Result<(), PSP22Error> {\n        if (self.total_supply() + amount) > self.cap() {\n            return Err(PSP22Error::Custom(String::from("Cap exceeded")))\n        }\n        PSP22Internal::_mint(self, account, amount)\n    }\n\n    /// Initializes the token\'s cap\n    fn init_cap(&mut self, cap: Balance) -> Result<(), PSP22Error> {\n        if cap <= 0 {\n            return Err(PSP22Error::Custom(String::from("Cap must be above 0")))\n        }\n        self.cap = cap;\n        Ok(())\n    }\n}\n')),(0,r.kt)("p",null,"You can check an implementation example of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/examples/psp22_extensions/capped"},"PSP22 Capped"),"."),(0,r.kt)("p",null,"You can also check the documentation for the basic implementation of ",(0,r.kt)("a",{parentName:"p",href:"/1.6.0/smart-contracts/PSP22/"},"PSP22"),"."))}u.isMDXComponent=!0}}]);