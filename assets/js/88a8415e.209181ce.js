"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[7232],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36329:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={},l=void 0,o={unversionedId:"examples/payment-splitter",id:"version-1.0.0/examples/payment-splitter",title:"payment-splitter",description:"Overview",source:"@site/versioned_docs/version-1.0.0/examples/payment-splitter.md",sourceDirName:"examples",slug:"/examples/payment-splitter",permalink:"/1.0.0/examples/payment-splitter",draft:!1,editUrl:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/docs/versioned_docs/version-1.0.0/examples/payment-splitter.md",tags:[],version:"1.0.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"pausable",permalink:"/1.0.0/examples/pausable"},next:{title:"psp22",permalink:"/1.0.0/examples/psp22"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Steps",id:"steps",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This example shows how you can reuse the implementation of\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/finance/payment-splitter"},"payment-splitter"),"."),(0,a.kt)("h2",{id:"steps"},"Steps"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Include dependencies to ",(0,a.kt)("inlineCode",{parentName:"li"},"payment-splitter")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"brush")," in the cargo file.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},'[dependencies]\nink_primitives = { tag = "v3.0.0-rc4", git = "https://github.com/Supercolony-net/ink", default-features = false }\nink_metadata = { tag = "v3.0.0-rc4", git = "https://github.com/Supercolony-net/ink", default-features = false, features = ["derive"], optional = true }\nink_env = { tag = "v3.0.0-rc4", git = "https://github.com/Supercolony-net/ink", default-features = false }\nink_storage = { tag = "v3.0.0-rc4", git = "https://github.com/Supercolony-net/ink", default-features = false }\nink_lang = { tag = "v3.0.0-rc4", git = "https://github.com/Supercolony-net/ink", default-features = false }\nink_prelude = { tag = "v3.0.0-rc4", git = "https://github.com/Supercolony-net/ink", default-features = false }\n\nscale = { package = "parity-scale-codec", version = "2.1", default-features = false, features = ["derive"] }\nscale-info = { version = "0.6.0", default-features = false, features = ["derive"], optional = true }\n\n# These dependencies\npayment-splitter = { tag = "v1.0.0", git = "https://github.com/Supercolony-net/openbrush-contracts", default-features = false }\nbrush = { tag = "v1.0.0", git = "https://github.com/Supercolony-net/openbrush-contracts", default-features = false }\n\n\n# payment-splitter uses dividing inside, so your version of rust can require you to disable check overflow.\n[profile.dev]\noverflow-checks = false\n\n[profile.release]\noverflow-checks = false\n\n[features]\ndefault = ["std"]\nstd = [\n   "ink_primitives/std",\n   "ink_metadata",\n   "ink_metadata/std",\n   "ink_env/std",\n   "ink_storage/std",\n   "ink_lang/std",\n   "scale/std",\n   "scale-info",\n   "scale-info/std",\n\n   # These dependencies   \n   "payment-splitter/std",\n   "brush/std",\n]\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Replace ",(0,a.kt)("inlineCode",{parentName:"li"},"ink::contract")," macro by ",(0,a.kt)("inlineCode",{parentName:"li"},"brush::contract"),".\nImport ",(0,a.kt)("strong",{parentName:"li"},"everything")," from ",(0,a.kt)("inlineCode",{parentName:"li"},"payment_splitter::traits"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[brush::contract]\npub mod my_payment_splitter {\n   use payment_splitter::traits::*;\n   use ink_prelude::vec::Vec;\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Declare storage struct and declare the field related to ",(0,a.kt)("inlineCode",{parentName:"li"},"PaymentSplitterStorage"),"\nThen you need to derive ",(0,a.kt)("inlineCode",{parentName:"li"},"PaymentSplitterStorage")," trait and mark corresponding field\nwith ",(0,a.kt)("inlineCode",{parentName:"li"},"#[PaymentSplitterStorageField]")," attribute. Deriving this trait allows you to reuse\nthe default implementation of ",(0,a.kt)("inlineCode",{parentName:"li"},"PaymentSplitter"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\n#[derive(Default, PaymentSplitterStorage)]\npub struct SplitterStruct {\n   #[PaymentSplitterStorageField]\n   splitter: PaymentSplitterData,\n}\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Inherit the implementation of ",(0,a.kt)("inlineCode",{parentName:"li"},"PaymentSplitter"),". You can customize (override) methods in this ",(0,a.kt)("inlineCode",{parentName:"li"},"impl")," block.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl PaymentSplitter for SplitterStruct {}\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Define constructor. Your basic version of ",(0,a.kt)("inlineCode",{parentName:"li"},"PaymentSplitter")," contract is ready!")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl SplitterStruct {\n   #[ink(constructor)]\n   pub fn new(payees: Vec<AccountId>, shares: Vec<Balance>) -> Self {\n      let mut instance = Self::default();\n      instance._init(payees, shares);\n      instance\n   }\n}\n")))}u.isMDXComponent=!0}}]);