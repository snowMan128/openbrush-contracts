"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[21],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6149:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1,title:"PSP35"},i=void 0,s={unversionedId:"smart-contracts/PSP35/psp35",id:"smart-contracts/PSP35/psp35",title:"PSP35",description:"This example shows how you can reuse the implementation of PSP35 token. Also, this example shows how you can customize the logic, for example, to track the number of token types with uniqueids, adding a new token type with the addtype function.",source:"@site/docs/smart-contracts/PSP35/psp35.md",sourceDirName:"smart-contracts/PSP35",slug:"/smart-contracts/PSP35/",permalink:"/smart-contracts/PSP35/",draft:!1,editUrl:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/docs/docs/smart-contracts/PSP35/psp35.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"PSP35"},sidebar:"tutorialSidebar",previous:{title:"PSP34 Enumerable",permalink:"/smart-contracts/PSP34/Extensions/enumerable"},next:{title:"PSP35 Enumerable",permalink:"/smart-contracts/PSP35/Extensions/enumerable"}},p={},l=[{value:"Step 1: Include dependencies",id:"step-1-include-dependencies",level:2},{value:"Step 2: Add imports and enable unstable feature",id:"step-2-add-imports-and-enable-unstable-feature",level:2},{value:"Step 3: Define storage",id:"step-3-define-storage",level:2},{value:"Step 4: Inherit logic",id:"step-4-inherit-logic",level:2},{value:"Step 5: Define constructor",id:"step-5-define-constructor",level:2},{value:"Step 6: Customize your contract",id:"step-6-customize-your-contract",level:2}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This example shows how you can reuse the implementation of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/token/psp35"},"PSP35")," token. Also, this example shows how you can customize the logic, for example, to track the number of token types with ",(0,a.kt)("inlineCode",{parentName:"p"},"unique_ids"),", adding a new token type with the ",(0,a.kt)("inlineCode",{parentName:"p"},"add_type")," function."),(0,a.kt)("h2",{id:"step-1-include-dependencies"},"Step 1: Include dependencies"),(0,a.kt)("p",null,"Include ",(0,a.kt)("inlineCode",{parentName:"p"},"openbrush")," as dependency in the cargo file or you can use ",(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/overview#the-default-toml-of-your-project-with-openbrush"},"default ",(0,a.kt)("inlineCode",{parentName:"a"},"Cargo.toml"))," template.\nAfter you need to enable default implementation of PSP35 via ",(0,a.kt)("inlineCode",{parentName:"p"},"openbrush")," feature."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'openbrush = { version = "~2.0.0", default-features = false, features = ["psp35"] }\n')),(0,a.kt)("h2",{id:"step-2-add-imports-and-enable-unstable-feature"},"Step 2: Add imports and enable unstable feature"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"openbrush::contract")," macro instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"ink::contract"),". Import ",(0,a.kt)("strong",{parentName:"p"},"everything")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"openbrush::contracts::psp35"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n#![feature(min_specialization)]\n\n#[openbrush::contract]\npub mod my_psp35 {\n    use openbrush::contracts::psp35::*;\n    use ink_prelude::{\n        string::String,\n        vec,\n    };\n    use ink_storage::{\n        traits::SpreadAllocate,\n        Mapping,\n    };\n...\n')),(0,a.kt)("h2",{id:"step-3-define-storage"},"Step 3: Define storage"),(0,a.kt)("p",null,"Declare storage struct and declare the field related to the ",(0,a.kt)("inlineCode",{parentName:"p"},"PSP35Storage")," trait. Then you need to derive the ",(0,a.kt)("inlineCode",{parentName:"p"},"PSP35Storage")," trait and mark the corresponding field with the ",(0,a.kt)("inlineCode",{parentName:"p"},"#[PSP35StorageField]")," attribute. Deriving this trait allows you to reuse the default implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"PSP35"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Default, SpreadAllocate, PSP35Storage)]\n#[ink(storage)]\npub struct MyPSP35 {\n    #[PSP35StorageField]\n    psp35: PSP35Data,\n}\n")),(0,a.kt)("h2",{id:"step-4-inherit-logic"},"Step 4: Inherit logic"),(0,a.kt)("p",null,"Inherit implementations of the ",(0,a.kt)("inlineCode",{parentName:"p"},"PSP35")," trait. You can customize (override) methods in this ",(0,a.kt)("inlineCode",{parentName:"p"},"impl")," block."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl PSP35 for MyPSP35 {}\n")),(0,a.kt)("h2",{id:"step-5-define-constructor"},"Step 5: Define constructor"),(0,a.kt)("p",null,"Define constructor. Your basic version of the ",(0,a.kt)("inlineCode",{parentName:"p"},"PSP35")," contract is ready!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl MyPSP35 {\n    #[ink(constructor)]\n    pub fn new() -> Self {\n        ink_lang::codegen::initialize_contract(|_instance: &mut Self| {})\n    }\n}\n")),(0,a.kt)("h2",{id:"step-6-customize-your-contract"},"Step 6: Customize your contract"),(0,a.kt)("p",null,"Customize it by adding logic for denying of minting some tokens.\nWe can deny minting of token with id by ",(0,a.kt)("inlineCode",{parentName:"p"},"deny")," function.\nId will be added to ",(0,a.kt)("inlineCode",{parentName:"p"},"denied_ids")," map.\nIf someone tries to mint token with denied id, we will reject transaction."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Default, SpreadAllocate, PSP35Storage)]\n#[ink(storage)]\npub struct MyPSP35 {\n    #[PSP35StorageField]\n    psp35: PSP35Data,\n    denied_ids: Mapping<Id, ()>,\n}\n\nimpl PSP35 for MyPSP35 {}\n\nimpl MyPSP35 {\n    #[ink(constructor)]\n    pub fn new() -> Self {\n        ink_lang::codegen::initialize_contract(|_instance: &mut Self| {})\n    }\n\n    #[ink(message)]\n    pub fn deny(&mut self, id: Id) {\n        self.denied_ids.insert(&id, &());\n    }\n\n    #[ink(message)]\n    pub fn mint_tokens(&mut self, id: Id, amount: Balance) -> Result<(), PSP35Error> {\n        if self.denied_ids.get(&id).is_some() {\n            return Err(PSP35Error::Custom(String::from("Id is denied")))\n        }\n        self._mint_to(Self::env().caller(), vec![(id, amount)])\n    }\n}\n')),(0,a.kt)("p",null,"You can check an example of the usage of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/examples/psp35"},"PSP35"),"."),(0,a.kt)("p",null,"Also you can use extensions for PSP35 token:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/PSP35/extensions/metadata"},"PSP35Metadata"),": metadata for PSP35."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/PSP35/extensions/mintable"},"PSP35Mintable"),": creation of new tokens."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/PSP35/extensions/burnable"},"PSP35Burnable"),": destruction of contract's tokens."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/PSP35/extensions/batch"},"PSP35Batch"),": transfer batch of tokens."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/PSP35/extensions/enumerable"},"PSP35Enumerable"),": iterates over contract's tokens."))}u.isMDXComponent=!0}}]);