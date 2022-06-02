"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[939],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5102:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:1,title:"PSP22 Token Timelock"},l=void 0,s={unversionedId:"smart-contracts/PSP22/Utils/token-timelock",id:"smart-contracts/PSP22/Utils/token-timelock",title:"PSP22 Token Timelock",description:"This example shows how you can reuse the implementation of PSP22 Token Timelock utility for PSP22. This contract will lock user's PSP22 tokens until the time specified, when they can withdraw them.",source:"@site/docs/smart-contracts/PSP22/Utils/token-timelock.md",sourceDirName:"smart-contracts/PSP22/Utils",slug:"/smart-contracts/PSP22/Utils/token-timelock",permalink:"/smart-contracts/PSP22/Utils/token-timelock",draft:!1,editUrl:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/docs/docs/smart-contracts/PSP22/Utils/token-timelock.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"PSP22 Token Timelock"},sidebar:"tutorialSidebar",previous:{title:"PSP22 Capped",permalink:"/smart-contracts/PSP22/Extensions/capped"},next:{title:"Timelock Controller",permalink:"/smart-contracts/timelock-controller"}},p={},u=[{value:"Step 1: Include dependencies",id:"step-1-include-dependencies",level:2},{value:"Step 2: Add imports and enable unstable feature",id:"step-2-add-imports-and-enable-unstable-feature",level:2},{value:"Step 3: Define storage",id:"step-3-define-storage",level:2},{value:"Step 4: Inherit logic",id:"step-4-inherit-logic",level:2},{value:"Step 5: Define constructor",id:"step-5-define-constructor",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This example shows how you can reuse the implementation of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/src/token/psp22/src/utils/token_timelock.rs"},"PSP22 Token Timelock")," utility for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/src/token/psp22"},"PSP22"),". This contract will lock user's ",(0,a.kt)("inlineCode",{parentName:"p"},"PSP22")," tokens until the time specified, when they can withdraw them."),(0,a.kt)("h2",{id:"step-1-include-dependencies"},"Step 1: Include dependencies"),(0,a.kt)("p",null,"Include ",(0,a.kt)("inlineCode",{parentName:"p"},"openbrush")," as dependency in the cargo file or you can use ",(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/overview#the-default-toml-of-your-project-with-openbrush"},"default ",(0,a.kt)("inlineCode",{parentName:"a"},"Cargo.toml"))," template.\nAfter you need to enable default implementation of PSP22 via ",(0,a.kt)("inlineCode",{parentName:"p"},"openbrush")," features."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'openbrush = { version = "~2.0.0", default-features = false, features = ["psp22"] }\n')),(0,a.kt)("h2",{id:"step-2-add-imports-and-enable-unstable-feature"},"Step 2: Add imports and enable unstable feature"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"openbrush::contract")," macro instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"ink::contract"),". Import ",(0,a.kt)("strong",{parentName:"p"},"everything")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"openbrush::contracts::psp22::utils::token_timelock"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n#![feature(min_specialization)]\n\n#[openbrush::contract]\npub mod my_psp22_token_timelock {\n    use openbrush::contracts::psp22::utils::token_timelock::*;\n    use ink_storage::traits::SpreadAllocate;\n...\n')),(0,a.kt)("h2",{id:"step-3-define-storage"},"Step 3: Define storage"),(0,a.kt)("p",null,"Declare storage struct and declare the field related to the ",(0,a.kt)("inlineCode",{parentName:"p"},"PSP22TokenTimelockStorage")," trait. Then you need to derive the ",(0,a.kt)("inlineCode",{parentName:"p"},"PSP22TokenTimelockStorage")," trait and mark the corresponding field with ",(0,a.kt)("inlineCode",{parentName:"p"},"#[PSP22TokenTimelockStorageField]")," attribute. Deriving this trait allows you to reuse the default implementation of and ",(0,a.kt)("inlineCode",{parentName:"p"},"PSP22TokenTimelock"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\n#[derive(Default, SpreadAllocate, PSP22TokenTimelockStorage)]\npub struct MyPSP22TokenTimelock {\n    #[PSP22TokenTimelockStorageField]\n    timelock: PSP22TokenTimelockData\n}\n")),(0,a.kt)("h2",{id:"step-4-inherit-logic"},"Step 4: Inherit logic"),(0,a.kt)("p",null,"Inherit the implementation of the ",(0,a.kt)("inlineCode",{parentName:"p"},"PSP22TokenTimelock")," trait. You can customize (override) methods in this ",(0,a.kt)("inlineCode",{parentName:"p"},"impl")," block."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl PSP22TokenTimelock for MyPSP22TokenTimelock {}\n")),(0,a.kt)("h2",{id:"step-5-define-constructor"},"Step 5: Define constructor"),(0,a.kt)("p",null,"Define constructor. Your implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"PSP22TokenTimelock")," contract is ready!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl MyPSP22TokenTimelock {\n    #[ink(constructor)]\n    pub fn new(token_address: AccountId, beneficiary: AccountId, release_time: Timestamp) -> Self {\n        ink_lang::codegen::initialize_contract(|instance: &mut Self| {\n            assert!(instance._init(token_address, beneficiary, release_time).is_ok());\n        })\n    }\n}\n")),(0,a.kt)("p",null,"You can check an example of the usage of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/examples/psp22_utils/token_timelock"},"PSP22 Token Timelock"),"."),(0,a.kt)("p",null,"You can also check the documentation for the basic implementation of ",(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/PSP22"},"PSP22"),"."))}d.isMDXComponent=!0}}]);