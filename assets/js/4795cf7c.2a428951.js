"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[92691],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26553:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={},i=void 0,o={unversionedId:"examples/pausable",id:"version-1.0.0/examples/pausable",title:"pausable",description:"Overview",source:"@site/versioned_docs/version-1.0.0/examples/pausable.md",sourceDirName:"examples",slug:"/examples/pausable",permalink:"/1.0.0/examples/pausable",draft:!1,editUrl:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/docs/versioned_docs/version-1.0.0/examples/pausable.md",tags:[],version:"1.0.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ownable",permalink:"/1.0.0/examples/ownable"},next:{title:"payment-splitter",permalink:"/1.0.0/examples/payment-splitter"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Steps",id:"steps",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This example shows how you can reuse the implementation of\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/security/pausable"},"pausable")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"Flipper")," contract to ",(0,r.kt)("inlineCode",{parentName:"p"},"flip")," only if the contract is not paused."),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Include dependencies to ",(0,r.kt)("inlineCode",{parentName:"li"},"pausable")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"brush")," in the cargo file.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},'[dependencies]\nink_primitives = { tag = "v3.0.0-rc4", git = "https://github.com/Supercolony-net/ink", default-features = false }\nink_metadata = { tag = "v3.0.0-rc4", git = "https://github.com/Supercolony-net/ink", default-features = false, features = ["derive"], optional = true }\nink_env = { tag = "v3.0.0-rc4", git = "https://github.com/Supercolony-net/ink", default-features = false }\nink_storage = { tag = "v3.0.0-rc4", git = "https://github.com/Supercolony-net/ink", default-features = false }\nink_lang = { tag = "v3.0.0-rc4", git = "https://github.com/Supercolony-net/ink", default-features = false }\nink_prelude = { tag = "v3.0.0-rc4", git = "https://github.com/Supercolony-net/ink", default-features = false }\n\nscale = { package = "parity-scale-codec", version = "2.1", default-features = false, features = ["derive"] }\nscale-info = { version = "0.6.0", default-features = false, features = ["derive"], optional = true }\n\n# These dependencies\npausable = { tag = "v1.0.0", git = "https://github.com/Supercolony-net/openbrush-contracts", default-features = false }\nbrush = { tag = "v1.0.0", git = "https://github.com/Supercolony-net/openbrush-contracts", default-features = false }\n\n[features]\ndefault = ["std"]\nstd = [\n   "ink_primitives/std",\n   "ink_metadata",\n   "ink_metadata/std",\n   "ink_env/std",\n   "ink_storage/std",\n   "ink_lang/std",\n   "scale/std",\n   "scale-info",\n   "scale-info/std",\n\n   # These dependencies\n   "pausable/std",\n   "brush/std",\n]\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Replace ",(0,r.kt)("inlineCode",{parentName:"li"},"ink::contract")," macro by ",(0,r.kt)("inlineCode",{parentName:"li"},"brush::contract"),".\nImport ",(0,r.kt)("strong",{parentName:"li"},"everything")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"pausable::traits"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[brush::contract]\npub mod my_pausable {\n   use pausable::traits::*;\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Declare storage struct and declare the field related to ",(0,r.kt)("inlineCode",{parentName:"li"},"PausableStorage"),"\nThen you need to derive ",(0,r.kt)("inlineCode",{parentName:"li"},"PausableStorage")," trait and mark corresponding field\nwith ",(0,r.kt)("inlineCode",{parentName:"li"},"#[PausableStorageField]")," attribute. Deriving this trait allows you to reuse\nthe default implementation of ",(0,r.kt)("inlineCode",{parentName:"li"},"Pausable"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\n#[derive(Default, PausableStorage)]\npub struct MyFlipper {\n   #[PausableStorageField]\n   pause: PausableData,\n   flipped: bool,\n}\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Inherit the implementation of ",(0,r.kt)("inlineCode",{parentName:"li"},"Pausable"),". You can customize (override) methods in this ",(0,r.kt)("inlineCode",{parentName:"li"},"impl")," block.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"impl Pausable for MyFlipper {}\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Define constructor. Your basic version of ",(0,r.kt)("inlineCode",{parentName:"li"},"Pausable")," contract is ready!")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"impl MyFlipper {\n   #[ink(constructor)]\n   pub fn new() -> Self {\n      Self::default()\n   }\n}\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Customize it by adding flipper logic. We will implement ",(0,r.kt)("inlineCode",{parentName:"li"},"flip")," method marked with ",(0,r.kt)("inlineCode",{parentName:"li"},"when_not_paused")," modifier.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"impl MyFlipper {\n   #[ink(constructor)]\n   pub fn new() -> Self {\n      Self::default()\n   }\n\n   #[ink(message)]\n   #[brush::modifiers(when_not_paused)]\n   pub fn flip(&mut self) {\n      self.flipped = !self.flipped;\n   }\n\n   #[ink(message)]\n   pub fn pause(&mut self) {\n      self._pause()\n   }\n\n   #[ink(message)]\n   pub fn unpause(&mut self) {\n      self._unpause()\n   }\n}\n\nimpl Pausable for MyFlipper {}\n")))}c.isMDXComponent=!0}}]);