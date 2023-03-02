"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[88751],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63041:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:1,title:"Access Control"},c=void 0,s={unversionedId:"smart-contracts/access-control/access-control",id:"smart-contracts/access-control/access-control",title:"Access Control",description:"This example shows how you can use the implementation of access-control to provide rights for usage of specific smart contract functions.",source:"@site/docs/smart-contracts/access-control/access-control.md",sourceDirName:"smart-contracts/access-control",slug:"/smart-contracts/access-control/",permalink:"/next/smart-contracts/access-control/",draft:!1,editUrl:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/docs/docs/smart-contracts/access-control/access-control.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Access Control"},sidebar:"tutorialSidebar",previous:{title:"Upgradeable contract",permalink:"/next/smart-contracts/upgradeable"},next:{title:"AccessControl Enumerable",permalink:"/next/smart-contracts/access-control/Extensions/enumerable"}},i={},l=[{value:"Step 1: Import default implementation",id:"step-1-import-default-implementation",level:2},{value:"Step 2: Define constructor",id:"step-2-define-constructor",level:2},{value:"Step 3: Customize your contract",id:"step-3-customize-your-contract",level:2}],p={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example shows how you can use the implementation of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/src/access/access_control"},"access-control")," to provide rights for usage of specific smart contract functions."),(0,o.kt)("h2",{id:"step-1-import-default-implementation"},"Step 1: Import default implementation"),(0,o.kt)("p",null,"With ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/overview#the-default-toml-of-your-project-with-openbrush"},"default ",(0,o.kt)("inlineCode",{parentName:"a"},"Cargo.toml")),",\nyou need to import the ",(0,o.kt)("inlineCode",{parentName:"p"},"access_control")," module, enable the corresponding feature, and embed the module data structure\nas described in ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/overview#reuse-implementation-of-traits-from-openbrush"},"that section"),"."),(0,o.kt)("p",null,"The main trait is ",(0,o.kt)("inlineCode",{parentName:"p"},"AccessControl"),"."),(0,o.kt)("h2",{id:"step-2-define-constructor"},"Step 2: Define constructor"),(0,o.kt)("p",null,"Define constructor where you grant ",(0,o.kt)("inlineCode",{parentName:"p"},"CALLER")," role(or any another role) to the caller."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'// You can manually set the number for the role.\n// But better to use a hash of the variable name.\n// It will generate a unique identifier of this role.\n// And will reduce the chance to have overlapping roles.\nconst CALLER: RoleType = ink_lang::selector_id!("CALLER");\n\nimpl Contract {\n    #[ink(constructor)]\n    pub fn new() -> Self {\n        ink_lang::codegen::initialize_contract(|instance: &mut Self| {\n            let caller = instance.env().caller();\n            instance._init_with_admin(caller);\n            instance.grant_role(CALLER, caller).expect("Should grant CALLER role");\n        })\n    }\n}\n')),(0,o.kt)("h2",{id:"step-3-customize-your-contract"},"Step 3: Customize your contract"),(0,o.kt)("p",null,"Customize it by adding access control logic. We will add a ",(0,o.kt)("inlineCode",{parentName:"p"},"restricted_function")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"Contract")," implementation,\nwhich will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"only_role")," modifier with ",(0,o.kt)("inlineCode",{parentName:"p"},"CALLER")," parameter, which verifies that the caller has the ",(0,o.kt)("inlineCode",{parentName:"p"},"CALLER")," role. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n#![feature(min_specialization)]\n\n#[openbrush::contract]\npub mod my_access_control {\n    use ink_storage::traits::SpreadAllocate;\n    use openbrush::{\n        contracts::access_control::*,\n        modifiers,\n        traits::Storage,\n    };\n\n    #[ink(storage)]\n    #[derive(Default, SpreadAllocate, Storage)]\n    pub struct Contract {\n        #[storage_field]\n        access: access_control::Data,\n    }\n\n    // You can manually set the number for the role.\n    // But better to use a hash of the variable name.\n    // It will generate a unique identifier of this role.\n    // And will reduce the chance to have overlapping roles.\n    const CALLER: RoleType = ink_lang::selector_id!("CALLER");\n\n    impl AccessControl for Contract {}\n\n    impl Contract {\n        #[ink(constructor)]\n        pub fn new() -> Self {\n            ink_lang::codegen::initialize_contract(|instance: &mut Self| {\n                let caller = instance.env().caller();\n                instance._init_with_admin(caller);\n                instance.grant_role(CALLER, caller).expect("Should grant the role");\n            })\n        }\n\n        #[ink(message)]\n        #[modifiers(only_role(CALLER))]\n        pub fn restricted_function(&mut self) -> Result<(), AccessControlError> {\n            todo!()\n        }\n    }\n}\n')),(0,o.kt)("p",null,"You can check an example of the usage of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/examples/access_control"},"Access Control"),"."))}m.isMDXComponent=!0}}]);