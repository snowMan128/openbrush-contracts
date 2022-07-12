"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[606],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7045:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1,title:"PSP34 Metadata"},i=void 0,s={unversionedId:"smart-contracts/PSP34/Extensions/metadata",id:"smart-contracts/PSP34/Extensions/metadata",title:"PSP34 Metadata",description:"This example shows how you can reuse the implementation of PSP34 token with PSP34Metadata extension.",source:"@site/docs/smart-contracts/PSP34/Extensions/metadata.md",sourceDirName:"smart-contracts/PSP34/Extensions",slug:"/smart-contracts/PSP34/Extensions/metadata",permalink:"/smart-contracts/PSP34/Extensions/metadata",draft:!1,editUrl:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/docs/docs/smart-contracts/PSP34/Extensions/metadata.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"PSP34 Metadata"},sidebar:"tutorialSidebar",previous:{title:"PSP34",permalink:"/smart-contracts/PSP34/"},next:{title:"PSP34 Mintable",permalink:"/smart-contracts/PSP34/Extensions/mintable"}},c={},l=[{value:"Step 1: Add imports and enable unstable feature",id:"step-1-add-imports-and-enable-unstable-feature",level:2},{value:"Step 2: Define storage",id:"step-2-define-storage",level:2},{value:"Step 3: Inherit logic",id:"step-3-inherit-logic",level:2},{value:"Step 4: Define constructor",id:"step-4-define-constructor",level:2},{value:"Final code",id:"final-code",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This example shows how you can reuse the implementation of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/src/token/psp34"},"PSP34")," token with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/src/token/psp34/extensions/metadata.rs"},"PSP34Metadata")," extension."),(0,r.kt)("p",null,"First, you should implement basic version of ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/PSP34"},"PSP34"),"."),(0,r.kt)("h2",{id:"step-1-add-imports-and-enable-unstable-feature"},"Step 1: Add imports and enable unstable feature"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"openbrush::contract")," macro instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"ink::contract"),". Import ",(0,r.kt)("strong",{parentName:"p"},"everything")," from\n",(0,r.kt)("inlineCode",{parentName:"p"},"openbrush::contracts::psp34::extensions::metadata"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n#![feature(min_specialization)]\n\n#[openbrush::contract]\npub mod my_psp34_metadata {\n    use openbrush::contracts::psp34::extensions::metadata::*;\n...\n')),(0,r.kt)("h2",{id:"step-2-define-storage"},"Step 2: Define storage"),(0,r.kt)("p",null,"Declare storage struct and declare the field related to the metadata module data structure.\nThen you need to derive the ",(0,r.kt)("inlineCode",{parentName:"p"},"Storage")," trait and mark the corresponding field with\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"#[storage_field]")," attribute. Deriving this trait allows you to reuse the\n",(0,r.kt)("inlineCode",{parentName:"p"},"PSP34Metadata")," extension in your ",(0,r.kt)("inlineCode",{parentName:"p"},"PSP34")," implementation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\n#[derive(Default, SpreadAllocate, Storage)]\npub struct Contract {\n    ...\n    #[storage_field]\n    metadata: metadata::Data,\n}\n")),(0,r.kt)("h2",{id:"step-3-inherit-logic"},"Step 3: Inherit logic"),(0,r.kt)("p",null,"Inherit implementation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"PSP34Metadata")," trait. You can customize (override) methods in this ",(0,r.kt)("inlineCode",{parentName:"p"},"impl")," block."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"impl PSP34Metadata for Contract {}\n")),(0,r.kt)("h2",{id:"step-4-define-constructor"},"Step 4: Define constructor"),(0,r.kt)("p",null,"Define constructor. Your ",(0,r.kt)("inlineCode",{parentName:"p"},"PSP34Metadata")," contract is ready!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'impl Contract {\n    #[ink(constructor)]\n    pub fn new(id: Id, name: String, symbol: String) -> Self {\n        ink_lang::codegen::initialize_contract(|instance: &mut Self| {\n            instance._set_attribute(id.clone(), String::from("name").into_bytes(), name.into_bytes());\n            instance._set_attribute(id, String::from("symbol").into_bytes(), symbol.into_bytes());\n        }\n    }\n}\n')),(0,r.kt)("h2",{id:"final-code"},"Final code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n#![feature(min_specialization)]\n\n#[openbrush::contract]\npub mod my_psp34_metadata {\n    use ink_prelude::{\n        string::String,\n        vec::Vec,\n    };\n    use ink_storage::traits::SpreadAllocate;\n    use openbrush::{\n        contracts::psp34::extensions::metadata::*,\n        traits::Storage,\n    };\n\n    #[derive(Default, SpreadAllocate, Storage)]\n    #[ink(storage)]\n    pub struct Contract {\n        #[storage_field]\n        psp34: psp34::Data,\n        #[storage_field]\n        metadata: metadata::Data,\n    }\n\n    impl PSP34 for Contract {}\n\n    impl PSP34Metadata for Contract {}\n\n    impl Contract {\n        /// A constructor which mints the first token to the owner\n        #[ink(constructor)]\n        pub fn new(id: Id, name: String, symbol: String) -> Self {\n            ink_lang::codegen::initialize_contract(|instance: &mut Self| {\n                let name_key: Vec<u8> = String::from("name").into_bytes();\n                let symbol_key: Vec<u8> = String::from("symbol").into_bytes();\n                instance._set_attribute(id.clone(), name_key, name.into_bytes());\n                instance._set_attribute(id, symbol_key, symbol.into_bytes());\n            })\n        }\n    }\n}\n')),(0,r.kt)("p",null,"You can check an example of the usage of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/examples/psp34_extensions/metadata"},"PSP34 Metadata"),"."),(0,r.kt)("p",null,"You can also check the documentation for the basic implementation of ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/PSP34"},"PSP34"),"."))}u.isMDXComponent=!0}}]);