"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[308],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7487:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:1,title:"PSP22 Token Timelock"},i=void 0,c={unversionedId:"smart-contracts/PSP22/Utils/token-timelock",id:"version-2.2.0/smart-contracts/PSP22/Utils/token-timelock",title:"PSP22 Token Timelock",description:"This example shows how you can reuse the implementation of PSP22 Token Timelock utility for PSP22. This contract will lock user's PSP22 tokens until the time specified, when they can withdraw them.",source:"@site/versioned_docs/version-2.2.0/smart-contracts/PSP22/Utils/token-timelock.md",sourceDirName:"smart-contracts/PSP22/Utils",slug:"/smart-contracts/PSP22/Utils/token-timelock",permalink:"/smart-contracts/PSP22/Utils/token-timelock",draft:!1,editUrl:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/docs/versioned_docs/version-2.2.0/smart-contracts/PSP22/Utils/token-timelock.md",tags:[],version:"2.2.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"PSP22 Token Timelock"},sidebar:"tutorialSidebar",previous:{title:"PSP22 Pausable",permalink:"/smart-contracts/PSP22/Extensions/pausable"},next:{title:"Timelock Controller",permalink:"/smart-contracts/timelock-controller"}},s={},l=[{value:"Step 1: Add imports and enable unstable feature",id:"step-1-add-imports-and-enable-unstable-feature",level:2},{value:"Step 2: Define storage",id:"step-2-define-storage",level:2},{value:"Step 3: Inherit logic",id:"step-3-inherit-logic",level:2},{value:"Step 4: Define constructor",id:"step-4-define-constructor",level:2},{value:"Final code",id:"final-code",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example shows how you can reuse the implementation of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/src/token/psp22/src/utils/token_timelock.rs"},"PSP22 Token Timelock")," utility for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/src/token/psp22"},"PSP22"),". This contract will lock user's ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP22")," tokens until the time specified, when they can withdraw them."),(0,o.kt)("h2",{id:"step-1-add-imports-and-enable-unstable-feature"},"Step 1: Add imports and enable unstable feature"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"openbrush::contract")," macro instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"ink::contract"),".\nImport ",(0,o.kt)("strong",{parentName:"p"},"everything")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"openbrush::contracts::psp22::utils::token_timelock"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n#![feature(min_specialization)]\n\n#[openbrush::contract]\npub mod my_psp22_token_timelock {\n    use openbrush::contracts::psp22::utils::token_timelock::*;\n...\n')),(0,o.kt)("h2",{id:"step-2-define-storage"},"Step 2: Define storage"),(0,o.kt)("p",null,"Declare storage struct and declare the field related to the timelock module data structure.\nThen you need to derive the ",(0,o.kt)("inlineCode",{parentName:"p"},"Storage")," trait and mark the corresponding field with\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"#[storage_field]")," attribute. Deriving this trait allows you to reuse the\n",(0,o.kt)("inlineCode",{parentName:"p"},"PSP22TokenTimelock"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\n#[derive(Default, SpreadAllocate, Storage)]\npub struct Contract {\n    #[storage_field]\n    timelock: token_timelock::Data,\n}\n")),(0,o.kt)("h2",{id:"step-3-inherit-logic"},"Step 3: Inherit logic"),(0,o.kt)("p",null,"Inherit the implementation of the ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP22TokenTimelock")," trait.\nYou can customize (override) methods in this ",(0,o.kt)("inlineCode",{parentName:"p"},"impl")," block."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"impl PSP22TokenTimelock for Contract {}\n")),(0,o.kt)("h2",{id:"step-4-define-constructor"},"Step 4: Define constructor"),(0,o.kt)("p",null,"Define constructor. Your implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP22TokenTimelock")," contract is ready!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"impl Contract {\n    #[ink(constructor)]\n    pub fn new(token_address: AccountId, beneficiary: AccountId, release_time: Timestamp) -> Self {\n        ink_lang::codegen::initialize_contract(|instance: &mut Self| {\n            assert!(instance._init(token_address, beneficiary, release_time).is_ok());\n        })\n    }\n}\n")),(0,o.kt)("h2",{id:"final-code"},"Final code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n#![feature(min_specialization)]\n\n#[openbrush::contract]\npub mod my_psp22_token_timelock {\n    use ink_storage::traits::SpreadAllocate;\n    use openbrush::{\n        contracts::psp22::utils::token_timelock::*,\n        traits::Storage,\n    };\n\n    #[ink(storage)]\n    #[derive(Default, SpreadAllocate, Storage)]\n    pub struct Contract {\n        #[storage_field]\n        timelock: token_timelock::Data,\n    }\n\n    impl PSP22TokenTimelock for Contract {}\n\n    impl Contract {\n        #[ink(constructor)]\n        pub fn new(token_address: AccountId, beneficiary: AccountId, release_time: Timestamp) -> Self {\n            ink_lang::codegen::initialize_contract(|instance: &mut Self| {\n                assert!(instance._init(token_address, beneficiary, release_time).is_ok());\n            })\n        }\n    }\n}\n')),(0,o.kt)("p",null,"You can check an example of the usage of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/examples/psp22_utils/token_timelock"},"PSP22 Token Timelock"),"."),(0,o.kt)("p",null,"You can also check the documentation for the basic implementation of ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/PSP22"},"PSP22"),"."))}u.isMDXComponent=!0}}]);