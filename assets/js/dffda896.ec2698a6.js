"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[2444],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(n),b=o,P=m["".concat(c,".").concat(b)]||m[b]||u[b]||a;return n?r.createElement(P,s(s({ref:t},p),{},{components:n})):r.createElement(P,s({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21465:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:3,title:"PSP34 Burnable"},s=void 0,i={unversionedId:"smart-contracts/PSP34/Extensions/burnable",id:"version-1.3.0/smart-contracts/PSP34/Extensions/burnable",title:"PSP34 Burnable",description:"This example shows how you can reuse the implementation of PSP34 token with PSP34Burnable extension.",source:"@site/versioned_docs/version-1.3.0/smart-contracts/PSP34/Extensions/burnable.md",sourceDirName:"smart-contracts/PSP34/Extensions",slug:"/smart-contracts/PSP34/Extensions/burnable",permalink:"/1.3.0/smart-contracts/PSP34/Extensions/burnable",draft:!1,editUrl:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/docs/versioned_docs/version-1.3.0/smart-contracts/PSP34/Extensions/burnable.md",tags:[],version:"1.3.0",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"PSP34 Burnable"},sidebar:"tutorialSidebar",previous:{title:"PSP34 Mintable",permalink:"/1.3.0/smart-contracts/PSP34/Extensions/mintable"},next:{title:"PSP1155",permalink:"/1.3.0/smart-contracts/PSP1155/"}},c={},l=[{value:"How to use this extension",id:"how-to-use-this-extension",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example shows how you can reuse the implementation of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/token/psp34"},"PSP34")," token with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/token/psp34/src/extensions/burnable.rs"},"PSP34Burnable")," extension."),(0,o.kt)("h2",{id:"how-to-use-this-extension"},"How to use this extension"),(0,o.kt)("p",null,"For your smart contract to use this extension, you only need to implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP34Burnable")," trait in your ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP34")," smart contract. Add import for ",(0,o.kt)("inlineCode",{parentName:"p"},"brush::contracts::psp34::extensions::burnable::*"),", inherit the implementation for ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP34Burnable")," trait, where you can also customize (override) the original functions from ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP34Burnable"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"use brush::contracts::psp34::extensions::burnable::*;\n\nimpl PSP34Burnable for MyPSP34 {}\n")),(0,o.kt)("p",null,"And that's it! Your ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP34")," is now extended by the ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP34Burnable")," extension and ready to use its functions!\nYou can check an example of the usage of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/examples/psp34_extensions/burnable"},"PSP34 Burnable"),"."),(0,o.kt)("p",null,"You can also check the documentation for the basic implementation of ",(0,o.kt)("a",{parentName:"p",href:"/1.3.0/smart-contracts/PSP34/"},"PSP34"),"."))}u.isMDXComponent=!0}}]);