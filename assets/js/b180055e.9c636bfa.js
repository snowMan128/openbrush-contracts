"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[49905],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||s;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81197:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const s={sidebar_position:6,title:"PSP22 Pausable"},o=void 0,i={unversionedId:"smart-contracts/PSP22/Extensions/pausable",id:"version-1.1.0/smart-contracts/PSP22/Extensions/pausable",title:"PSP22 Pausable",description:"This example shows how you can implement a PSP22 contract with a Pausable extension. See an example of PSP22Pausable implementation.",source:"@site/versioned_docs/version-1.1.0/smart-contracts/PSP22/Extensions/pausable.md",sourceDirName:"smart-contracts/PSP22/Extensions",slug:"/smart-contracts/PSP22/Extensions/pausable",permalink:"/1.1.0/smart-contracts/PSP22/Extensions/pausable",draft:!1,editUrl:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/docs/versioned_docs/version-1.1.0/smart-contracts/PSP22/Extensions/pausable.md",tags:[],version:"1.1.0",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"PSP22 Pausable"},sidebar:"tutorialSidebar",previous:{title:"PSP22 FlashMint",permalink:"/1.1.0/smart-contracts/PSP22/Extensions/flashmint"},next:{title:"PSP22 Capped",permalink:"/1.1.0/smart-contracts/PSP22/Extensions/capped"}},l={},p=[{value:"Step 1: Include dependencies",id:"step-1-include-dependencies",level:2},{value:"Step 2: Add imports",id:"step-2-add-imports",level:2},{value:"Step 3: Define storage",id:"step-3-define-storage",level:2},{value:"Step 4: Inherit logic and implement Pausable logic",id:"step-4-inherit-logic-and-implement-pausable-logic",level:2},{value:"Step 5: Define constructor",id:"step-5-define-constructor",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This example shows how you can implement a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/token/psp22"},"PSP22")," contract with a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/security/pausable"},"Pausable")," extension. See an example of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/examples/psp22_extensions/pausable"},"PSP22Pausable")," implementation."),(0,r.kt)("h2",{id:"step-1-include-dependencies"},"Step 1: Include dependencies"),(0,r.kt)("p",null,"Include dependencies to ",(0,r.kt)("inlineCode",{parentName:"p"},"psp22"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pausable")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"brush")," in the cargo file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\nink_primitives = { version = "3.0.0-rc6", default-features = false }\nink_metadata = { version = "3.0.0-rc6", default-features = false, features = ["derive"], optional = true }\nink_env = { version = "3.0.0-rc6", default-features = false }\nink_storage = { version = "3.0.0-rc6", default-features = false }\nink_lang = { version = "3.0.0-rc6", default-features = false }\nink_prelude = { version = "3.0.0-rc6", default-features = false }\n\nscale = { package = "parity-scale-codec", version = "2", default-features = false, features = ["derive"] }\nscale-info = { version = "1", default-features = false, features = ["derive"], optional = true }\n\n# These dependencies\npausable = { tag = "v1.0.0", git = "https://github.com/Supercolony-net/openbrush-contracts", default-features = false }\npsp22 = { tag = "v1.0.0", git = "https://github.com/Supercolony-net/openbrush-contracts", default-features = false }\nbrush = { tag = "v1.0.0", git = "https://github.com/Supercolony-net/openbrush-contracts", default-features = false }\n\n[features]\ndefault = ["std"]\nstd = [\n   "ink_primitives/std",\n   "ink_metadata",\n   "ink_metadata/std",\n   "ink_env/std",\n   "ink_storage/std",\n   "ink_lang/std",\n   "scale/std",\n   "scale-info",\n   "scale-info/std",\n\n   # These dependencies   \n   "psp22/std",\n   "brush/std",\n   "pausable/std",\n]\n')),(0,r.kt)("h2",{id:"step-2-add-imports"},"Step 2: Add imports"),(0,r.kt)("p",null,"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"ink::contract")," macro by ",(0,r.kt)("inlineCode",{parentName:"p"},"brush::contract")," and import ",(0,r.kt)("strong",{parentName:"p"},"everything")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"psp22::traits")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"pausable::traits"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[brush::contract]\npub mod my_psp22_pausable {\n    use brush::modifiers;\n    use pausable::traits::*;\n    use psp22::traits::*;\n")),(0,r.kt)("h2",{id:"step-3-define-storage"},"Step 3: Define storage"),(0,r.kt)("p",null,"Declare the storage struct and declare the fields related to the ",(0,r.kt)("inlineCode",{parentName:"p"},"PausableStorage")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PSP22Storage")," traits. Then you need to derive the ",(0,r.kt)("inlineCode",{parentName:"p"},"PausableStorage")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PSP22Storage")," traits and mark the corresponding fields with the ",(0,r.kt)("inlineCode",{parentName:"p"},"#[PausableStorageField]")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"#[PSP22StorageField]")," attributes. Deriving these traits allows you to reuse the ",(0,r.kt)("inlineCode",{parentName:"p"},"PSP22")," implementation with a ",(0,r.kt)("inlineCode",{parentName:"p"},"Pausable")," extension."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\n#[derive(Default, PSP22Storage, PausableStorage)]\npub struct MyPSP22Pausable {\n    #[PSP22StorageField]\n    psp22: PSP22Data,\n    #[PausableStorageField]\n    pause: PausableData,\n}\n")),(0,r.kt)("h2",{id:"step-4-inherit-logic-and-implement-pausable-logic"},"Step 4: Inherit logic and implement Pausable logic"),(0,r.kt)("p",null,"Inherit the implementation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"PSP22")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Pausable")," traits. You can customize (override) methods in this ",(0,r.kt)("inlineCode",{parentName:"p"},"impl")," block. We will implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"Pausable")," logic in this section."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"impl PSP22 for MyPSP22Pausable {\n    /// Return `Paused` error if the token is paused\n    #[modifiers(when_not_paused)]\n    fn _before_token_transfer(\n        &mut self,\n        _from: &AccountId,\n        _to: &AccountId,\n        _amount: &Balance,\n    ) -> Result<(), PSP22Error> {\n        // TODO logic for before token transfer\n        Ok(())\n    }\n}\n\nimpl Pausable for MyPSP22Pausable {}\n")),(0,r.kt)("h2",{id:"step-5-define-constructor"},"Step 5: Define constructor"),(0,r.kt)("p",null,"Define constructor and add contract functions for pausing and unpausing the contract. Your ",(0,r.kt)("inlineCode",{parentName:"p"},"PSP22Pausable")," contract is ready!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"impl MyPSP22Pausable {\n    #[ink(constructor)]\n    pub fn new(total_supply: Balance) -> Self {\n        let mut instance = Self::default();\n        assert!(instance._mint(Self::env().caller(), total_supply).is_ok());\n        instance\n    }\n\n    #[ink(message)]\n    pub fn change_state(&mut self) -> Result<(), PSP22Error> {\n        if self.paused() {\n            self._unpause()\n        } else {\n            self._pause()\n        }\n    }\n}\n")),(0,r.kt)("p",null,"You can also check the documentation for the basic implementation of ",(0,r.kt)("a",{parentName:"p",href:"/1.1.0/smart-contracts/PSP22/"},"PSP22"),"."))}d.isMDXComponent=!0}}]);