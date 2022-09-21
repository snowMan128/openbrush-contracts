"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[1794],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,k=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(k,a(a({ref:t},p),{},{components:n})):r.createElement(k,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},25969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const l={sidebar_position:8,title:"Timelock Controller"},a=void 0,i={unversionedId:"smart-contracts/timelock-controller",id:"version-2.1.0/smart-contracts/timelock-controller",title:"Timelock Controller",description:"This example shows how you can reuse the implementation of",source:"@site/versioned_docs/version-2.1.0/smart-contracts/timelock-controller.md",sourceDirName:"smart-contracts",slug:"/smart-contracts/timelock-controller",permalink:"/2.1.0/smart-contracts/timelock-controller",draft:!1,editUrl:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/docs/versioned_docs/version-2.1.0/smart-contracts/timelock-controller.md",tags:[],version:"2.1.0",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Timelock Controller"},sidebar:"tutorialSidebar",previous:{title:"PSP22 Token Timelock",permalink:"/2.1.0/smart-contracts/PSP22/Utils/token-timelock"},next:{title:"PSP34",permalink:"/2.1.0/smart-contracts/PSP34/"}},c={},s=[{value:"Step 1: Include dependencies",id:"step-1-include-dependencies",level:2},{value:"Step 2: Add imports and enable unstable feature",id:"step-2-add-imports-and-enable-unstable-feature",level:2},{value:"Step 3: Define storage",id:"step-3-define-storage",level:2},{value:"Step 4: Inherit logic",id:"step-4-inherit-logic",level:2},{value:"Step 5: Define constructor",id:"step-5-define-constructor",level:2}],p={toc:s};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example shows how you can reuse the implementation of\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/src/governance/timelock_controller"},"timelock-controller"),"."),(0,o.kt)("h2",{id:"step-1-include-dependencies"},"Step 1: Include dependencies"),(0,o.kt)("p",null,"Include ",(0,o.kt)("inlineCode",{parentName:"p"},"openbrush")," as dependency in the cargo file or you can use ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/overview#the-default-toml-of-your-project-with-openbrush"},"default ",(0,o.kt)("inlineCode",{parentName:"a"},"Cargo.toml"))," template.\nAfter you need to enable default implementation of Timelock Controller via ",(0,o.kt)("inlineCode",{parentName:"p"},"openbrush")," features."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'openbrush = { version = "~2.1.0", default-features = false, features = ["timelock_controller"] }\n')),(0,o.kt)("h2",{id:"step-2-add-imports-and-enable-unstable-feature"},"Step 2: Add imports and enable unstable feature"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"openbrush::contract")," macro instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"ink::contract"),". Import ",(0,o.kt)("strong",{parentName:"p"},"everything")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"openbrush::contracts::psp22::utils::token_timelock"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n#![feature(min_specialization)]\n\n#[openbrush::contract]\npub mod my_psp22_token_timelock {\n    use openbrush::contracts::psp22::utils::token_timelock::*;\n    use ink_storage::traits::SpreadAllocate;\n')),(0,o.kt)("h2",{id:"step-3-define-storage"},"Step 3: Define storage"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"TimelockController")," is an extension for ",(0,o.kt)("inlineCode",{parentName:"p"},"AccessControl"),", so you need to impl stuff related to both modules.\nDeclare storage struct and declare the fields related to ",(0,o.kt)("inlineCode",{parentName:"p"},"TimelockControllerStorage")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"AccessControlStorage"),".\nThen you need to derive ",(0,o.kt)("inlineCode",{parentName:"p"},"TimelockControllerStorage")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"AccessControlStorage")," traits and mark corresponding fields\nwith ",(0,o.kt)("inlineCode",{parentName:"p"},"#[TimelockControllerStorageField]")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"#[AccessControlStorageField]")," attributes.\nDeriving these traits allows you to reuse the default implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"TimelockController"),"(and ",(0,o.kt)("inlineCode",{parentName:"p"},"AccessControl"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\n#[derive(Default, SpreadAllocate, TimelockControllerStorage)]\npub struct TimelockStruct {\n   #[TimelockControllerStorageField]\n   timelock: TimelockControllerData,\n}\n")),(0,o.kt)("h2",{id:"step-4-inherit-logic"},"Step 4: Inherit logic"),(0,o.kt)("p",null,"Inherit implementations of ",(0,o.kt)("inlineCode",{parentName:"p"},"TimelockController")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"AccessControl")," traits. You can customize (override) methods in this ",(0,o.kt)("inlineCode",{parentName:"p"},"impl")," block."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"// `TimelockController` is an extension for `AccessControl`, so you need to impl stuff related to both modules.\nimpl AccessControl for TimelockStruct {}\nimpl TimelockController for TimelockStruct {}\n")),(0,o.kt)("h2",{id:"step-5-define-constructor"},"Step 5: Define constructor"),(0,o.kt)("p",null,"Define constructor. Your basic version of ",(0,o.kt)("inlineCode",{parentName:"p"},"TimelockController")," contract is ready!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"impl TimelockStruct {\n   #[ink(constructor)]\n   pub fn new(min_delay: Timestamp, proposers: Vec<AccountId>, executors: Vec<AccountId>) -> Self {\n      ink_lang::codegen::initialize_contract(|instance: &mut Self| {\n            let caller = instance.env().caller();\n            // `TimelockController` and `AccessControl` have `_init_with_admin` methods.\n            // You need to call it for each trait separately, to initialize everything for these traits.\n            AccessControlInternal::_init_with_admin(instance, caller);\n            TimelockControllerInternal::_init_with_admin(instance, caller, min_delay, proposers, executors);\n      })\n   }\n}\n")),(0,o.kt)("p",null,"You can check an example of the usage of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/examples/timelock_controller"},"TimelockController"),"."))}m.isMDXComponent=!0}}]);