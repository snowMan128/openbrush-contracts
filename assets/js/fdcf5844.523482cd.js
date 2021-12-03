"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[466],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,P=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(P,p(p({ref:t},l),{},{components:n})):r.createElement(P,p({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9338:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),p=["components"],i={sidebar_position:4,title:"PSP22 Wrapper"},s=void 0,c={unversionedId:"smart-contracts/PSP22/Extensions/wrapper",id:"smart-contracts/PSP22/Extensions/wrapper",isDocsHomePage:!1,title:"PSP22 Wrapper",description:"This example shows how you can reuse the implementation of PSP22 token with PSP22 Wrapper extension, which allows you to wrap your PSP22 token in a PSP22Wrapper token which can be used for example for governance.",source:"@site/docs/smart-contracts/PSP22/Extensions/wrapper.md",sourceDirName:"smart-contracts/PSP22/Extensions",slug:"/smart-contracts/PSP22/Extensions/wrapper",permalink:"/smart-contracts/PSP22/Extensions/wrapper",editUrl:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/docs/docs/smart-contracts/PSP22/Extensions/wrapper.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"PSP22 Wrapper"},sidebar:"tutorialSidebar",previous:{title:"PSP22 Burnable",permalink:"/smart-contracts/PSP22/Extensions/burnable"},next:{title:"PSP22 FlashMint",permalink:"/smart-contracts/PSP22/Extensions/flashmint"}},l=[{value:"Step 1: Include dependencies and add imports",id:"step-1-include-dependencies-and-add-imports",children:[]},{value:"Step 2: Define storage",id:"step-2-define-storage",children:[]},{value:"Step 3: Inherit logic",id:"step-3-inherit-logic",children:[]},{value:"Step 4: Define constructor",id:"step-4-define-constructor",children:[]}],u={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example shows how you can reuse the implementation of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/token/psp22"},"PSP22")," token with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/token/psp22/extensions/wrapper"},"PSP22 Wrapper")," extension, which allows you to wrap your ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP22")," token in a ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP22Wrapper")," token which can be used for example for governance."),(0,o.kt)("h2",{id:"step-1-include-dependencies-and-add-imports"},"Step 1: Include dependencies and add imports"),(0,o.kt)("p",null,"Include dependencies to ",(0,o.kt)("inlineCode",{parentName:"p"},"psp22")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"brush")," in the cargo file. Then we need to replace ",(0,o.kt)("inlineCode",{parentName:"p"},"ink::contract")," macro by ",(0,o.kt)("inlineCode",{parentName:"p"},"brush::contract")," and import ",(0,o.kt)("strong",{parentName:"p"},"everything")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"psp22::traits")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"psp22::extensions::wrapper"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[brush::contract]\npub mod my_psp22 {\n   use psp22::{\n        extensions::wrapper::*,\n        traits::*,\n    };\n")),(0,o.kt)("h2",{id:"step-2-define-storage"},"Step 2: Define storage"),(0,o.kt)("p",null,"Declare storage struct and declare the fields related to ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP22Storage")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP22WrapperStorage")," traits. Then you need to derive ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP22Storage")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP22WrapperStorage")," traits and mark corresponding fields with ",(0,o.kt)("inlineCode",{parentName:"p"},"#[PSP22StorageField]")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"#[PSP22WrapperStorageField]")," attributes. Deriving these traits allows you to reuse the default implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP22")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP22Wrapper"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\n#[derive(Default, PSP22WrapperStorage, PSP22Storage)]\npub struct MyPSP22Wrapper {\n    #[PSP22StorageField]\n    psp22: PSP22Data,\n    #[PSP22WrapperStorageField]\n    wrapper: PSP22WrapperData,\n}\n")),(0,o.kt)("h2",{id:"step-3-inherit-logic"},"Step 3: Inherit logic"),(0,o.kt)("p",null,"Inherit implementations of ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP22")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP22Wrapper")," traits. You can customize (override) methods in this ",(0,o.kt)("inlineCode",{parentName:"p"},"impl")," block."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"impl PSP22 for MyPSP22Wrapper {}\n\nimpl PSP22Wrapper for MyPSP22Wrapper {}\n")),(0,o.kt)("h2",{id:"step-4-define-constructor"},"Step 4: Define constructor"),(0,o.kt)("p",null,"Define constructor. Your implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP22Wrapper")," contract is ready!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"impl MyPSP22 {\n   #[ink(constructor)]\n   pub fn new(token_address: AccountId) -> Self {\n        let mut instance = Self::default();\n        instance.init(token_address);\n        instance\n    }\n}\n")),(0,o.kt)("p",null,"You can also check the documentation for the basic implementation of ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/PSP22/psp22"},"PSP22"),"."))}d.isMDXComponent=!0}}]);