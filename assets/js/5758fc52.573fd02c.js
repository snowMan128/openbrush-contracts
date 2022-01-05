"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[329],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5799:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],s={sidebar_position:2,title:"Access Control"},i=void 0,l={unversionedId:"smart-contracts/access-control",id:"smart-contracts/access-control",isDocsHomePage:!1,title:"Access Control",description:"This example shows how you can use the implementation of access-control to provide rights for usage of specific smart contract functions.",source:"@site/docs/smart-contracts/access-control.md",sourceDirName:"smart-contracts",slug:"/smart-contracts/access-control",permalink:"/smart-contracts/access-control",editUrl:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/docs/docs/smart-contracts/access-control.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Access Control"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/smart-contracts/overview"},next:{title:"Ownable",permalink:"/smart-contracts/ownable"}},u=[{value:"Step 1: Include dependencies",id:"step-1-include-dependencies",children:[]},{value:"Step 2: Add imports and enable unstable feature",id:"step-2-add-imports-and-enable-unstable-feature",children:[]},{value:"Step 3: Define storage",id:"step-3-define-storage",children:[]},{value:"Step 4: Inherit logic",id:"step-4-inherit-logic",children:[]},{value:"Step 5: Define constructor",id:"step-5-define-constructor",children:[]},{value:"Step 6: Customize your contract",id:"step-6-customize-your-contract",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This example shows how you can use the implementation of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/access/access_control"},"access-control")," to provide rights for usage of specific smart contract functions."),(0,a.kt)("h2",{id:"step-1-include-dependencies"},"Step 1: Include dependencies"),(0,a.kt)("p",null,"Include ",(0,a.kt)("inlineCode",{parentName:"p"},"brush")," as dependency in the cargo file or you can use ",(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/overview#the-default-toml-of-your-project-with-openbrush"},"default ",(0,a.kt)("inlineCode",{parentName:"a"},"Cargo.toml"))," template.\nAfter you need to enable default implementation of Access Control via ",(0,a.kt)("inlineCode",{parentName:"p"},"brush")," features."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'brush = { tag = "v1.2.0", git = "https://github.com/Supercolony-net/openbrush-contracts", default-features = false, features = ["access_control"] }\n')),(0,a.kt)("h2",{id:"step-2-add-imports-and-enable-unstable-feature"},"Step 2: Add imports and enable unstable feature"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"brush::contract")," macro instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"ink::contract"),". Import ",(0,a.kt)("strong",{parentName:"p"},"everything")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"brush::contracts::access_control"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n#![feature(min_specialization)]\n\n#[brush::contract]\npub mod my_access_control {\n    use brush::{\n        contracts::access_control::*,\n        modifiers,\n    };\n...\n')),(0,a.kt)("h2",{id:"step-3-define-storage"},"Step 3: Define storage"),(0,a.kt)("p",null,"Declare storage struct and declare the field related to and ",(0,a.kt)("inlineCode",{parentName:"p"},"AccessControlStorage")," trait. Then you need to derive ",(0,a.kt)("inlineCode",{parentName:"p"},"AccessControlStorage")," trait and mark the corresponding field with ",(0,a.kt)("inlineCode",{parentName:"p"},"#[AccessControlStorageField]")," attribute. Deriving this trait allows you to reuse the default implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"AccessControl"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\n#[derive(Default, AccessControlStorage)]\npub struct MyAccessControl {\n    #[AccessControlStorageField]\n    access: AccessControlData,\n}\n")),(0,a.kt)("h2",{id:"step-4-inherit-logic"},"Step 4: Inherit logic"),(0,a.kt)("p",null,"Inherit implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"AccessControl")," trait. You can customize (override) functions in this ",(0,a.kt)("inlineCode",{parentName:"p"},"impl")," block."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl AccessControl for MyAccessControl {}\n")),(0,a.kt)("h2",{id:"step-5-define-constructor"},"Step 5: Define constructor"),(0,a.kt)("p",null,"Define constructor. Your basic version of ",(0,a.kt)("inlineCode",{parentName:"p"},"AccessControl")," contract is ready!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl MyAccessControl {\n    #[ink(constructor)]\n    pub fn new() -> Self {\n        Self::default()\n    }\n}\n")),(0,a.kt)("h2",{id:"step-6-customize-your-contract"},"Step 6: Customize your contract"),(0,a.kt)("p",null,"Customize it by adding access control logic. We will add a ",(0,a.kt)("inlineCode",{parentName:"p"},"restricted_function")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"MyAccessControl")," implemenation, which will use the ",(0,a.kt)("inlineCode",{parentName:"p"},"only_role")," modifier with ",(0,a.kt)("inlineCode",{parentName:"p"},"CALLER")," parameter, which verifies that the caller has the ",(0,a.kt)("inlineCode",{parentName:"p"},"CALLER")," role. Also, we need to update the constructor to grant the ",(0,a.kt)("inlineCode",{parentName:"p"},"CALLER")," role to the caller by default."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n#![feature(min_specialization)]\n\n#[brush::contract]\npub mod my_access_control {\n    use brush::{\n        contracts::access_control::*,\n        modifiers,\n    };\n\n    #[ink(storage)]\n    #[derive(Default, AccessControlStorage)]\n    pub struct MyAccessControl {\n        #[AccessControlStorageField]\n        access: AccessControlData,\n    }\n\n    // You can manually set the number for the role.\n    // But better to use a hash of the variable name.\n    // It will generate a unique identifier of this role.\n    // And will reduce the chance to have overlapping roles.\n    const CALLER: RoleType = ink_lang::selector_id!("CALLER");\n\n    impl AccessControl for MyAccessControl {}\n\n    impl MyAccessControl {\n        #[ink(constructor)]\n        pub fn new() -> Self {\n            let mut instance = Self::default();\n            let caller = instance.env().caller();\n            instance._init_with_admin(caller);\n            // We grant counter role to caller in constructor, so they can increase the count\n            instance.grant_role(CALLER, caller).expect("Should grant the role");\n            instance\n        }\n\n        #[ink(message)]\n        #[modifiers(only_role(CALLER))]\n        pub fn restricted_function(&mut self) -> Result<(), AccessControlError> {\n            todo!()\n        }\n    }\n}\n')),(0,a.kt)("p",null,"You can check an example of the usage of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/examples/access_control"},"Access Control"),"."))}d.isMDXComponent=!0}}]);