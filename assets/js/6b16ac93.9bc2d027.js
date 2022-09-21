"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[8286],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70615:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:7,title:"Payment Splitter"},i=void 0,l={unversionedId:"smart-contracts/payment-splitter",id:"smart-contracts/payment-splitter",title:"Payment Splitter",description:"This example shows how you can reuse the implementation of",source:"@site/docs/smart-contracts/payment-splitter.md",sourceDirName:"smart-contracts",slug:"/smart-contracts/payment-splitter",permalink:"/next/smart-contracts/payment-splitter",draft:!1,editUrl:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/docs/docs/smart-contracts/payment-splitter.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Payment Splitter"},sidebar:"tutorialSidebar",previous:{title:"Pausable",permalink:"/next/smart-contracts/pausable"},next:{title:"PSP22",permalink:"/next/smart-contracts/PSP22/"}},p={},s=[{value:"Step 1: Import default implementation",id:"step-1-import-default-implementation",level:2},{value:"Step 2: Define constructor",id:"step-2-define-constructor",level:2},{value:"Step 3 (Optional): Customize your contract",id:"step-3-optional-customize-your-contract",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This example shows how you can reuse the implementation of\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/src/finance/payment_splitter"},"payment-splitter"),"."),(0,r.kt)("h2",{id:"step-1-import-default-implementation"},"Step 1: Import default implementation"),(0,r.kt)("p",null,"With ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/overview#the-default-toml-of-your-project-with-openbrush"},"default ",(0,r.kt)("inlineCode",{parentName:"a"},"Cargo.toml")),",\nyou need to import the ",(0,r.kt)("inlineCode",{parentName:"p"},"payment_splitter")," module, enable the corresponding feature, and embed the module data structure\nas described in ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/overview#reuse-implementation-of-traits-from-openbrush"},"that section"),"."),(0,r.kt)("p",null,"The main trait is ",(0,r.kt)("inlineCode",{parentName:"p"},"PaymentSplitter"),"."),(0,r.kt)("h2",{id:"step-2-define-constructor"},"Step 2: Define constructor"),(0,r.kt)("p",null,"Define constructor where you init payees and shares."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'impl Contract {\n   #[ink(constructor)]\n   pub fn new(payees_and_shares: Vec<(AccountId, Balance)>) -> Self {\n      ink_lang::codegen::initialize_contract(|instance: &mut Self| {\n         instance._init(payees_and_shares).expect("Should init");\n      })\n   }\n}\n')),(0,r.kt)("p",null,"You can check an example of the usage of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/examples/payment_splitter"},"PaymentSplitter"),"."),(0,r.kt)("h2",{id:"step-3-optional-customize-your-contract"},"Step 3 (Optional): Customize your contract"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"PaymentSplitter")," trait defines and has default implementations for the core payment splitter functions.\nAdditional functionality with ",(0,r.kt)("em",{parentName:"p"},"some")," predefined functions is available through the ",(0,r.kt)("inlineCode",{parentName:"p"},"payment_splitter::Internal")," trait.\nLikely the most common function to use from this internal trait will be ",(0,r.kt)("inlineCode",{parentName:"p"},"_release_all"),". This allows you to payout all\n",(0,r.kt)("inlineCode",{parentName:"p"},"payees")," stored in the contract at once. To add this function to your contract, simply define a new publicly dispatchable\nfunction (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink(message)]"),") called ",(0,r.kt)("inlineCode",{parentName:"p"},"release_all")," and have it call the internal ",(0,r.kt)("inlineCode",{parentName:"p"},"_release_all")," function using ",(0,r.kt)("inlineCode",{parentName:"p"},"self"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n#![feature(min_specialization)]\n\n#[openbrush::contract]\npub mod my_payment_splitter {\n    use ink_prelude::vec::Vec;\n    use ink_storage::traits::SpreadAllocate;\n    use openbrush::contracts::payment_splitter::*;\n    use openbrush::traits::Storage;\n\n    #[ink(storage)]\n    #[derive(Default, SpreadAllocate, Storage)]\n    pub struct Contract {\n        #[storage_field]\n        splitter: payment_splitter::Data,\n    }\n\n    impl Contract {\n        #[ink(constructor)]\n        pub fn new(payees_and_shares: Vec<(AccountId, Balance)>) -> Self {\n            ink_lang::codegen::initialize_contract(|instance: &mut Self| {\n                instance._init(payees_and_shares).expect("Should init");\n            })\n        }\n\n        /// Payout all payees at once.\n        /// Delete this method if you don\'t want this functionality in your version of the payment splitter.\n        #[ink(message)]\n        pub fn release_all(&mut self) -> Result<(), PaymentSplitterError> {\n            // `_release_all()` is an internal method defined by the `payment_splitter::Internal` trait\n            self._release_all()\n        }\n    }\n\n    impl PaymentSplitter for Contract {}\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"_add_payee")," function is also available in the ",(0,r.kt)("inlineCode",{parentName:"p"},"payment_splitter::Internal")," trait and can be added to\nyour contract in the same way as ",(0,r.kt)("inlineCode",{parentName:"p"},"_release_all"),"."))}u.isMDXComponent=!0}}]);