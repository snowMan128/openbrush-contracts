"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[943],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,P=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(P,i(i({ref:t},l),{},{components:n})):r.createElement(P,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4458:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:2,title:"PSP22 Mintable"},c=void 0,p={unversionedId:"smart-contracts/PSP22/Extensions/mintable",id:"smart-contracts/PSP22/Extensions/mintable",isDocsHomePage:!1,title:"PSP22 Mintable",description:"This example shows how you can reuse the implementation of",source:"@site/docs/smart-contracts/PSP22/Extensions/mintable.md",sourceDirName:"smart-contracts/PSP22/Extensions",slug:"/smart-contracts/PSP22/Extensions/mintable",permalink:"/smart-contracts/PSP22/Extensions/mintable",editUrl:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/docs/docs/smart-contracts/PSP22/Extensions/mintable.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"PSP22 Mintable"},sidebar:"tutorialSidebar",previous:{title:"PSP22 Metadata",permalink:"/smart-contracts/PSP22/Extensions/metadata"},next:{title:"PSP22 Burnable",permalink:"/smart-contracts/PSP22/Extensions/burnable"}},l=[{value:"How to use this extension",id:"how-to-use-this-extension",children:[]}],u={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This example shows how you can reuse the implementation of\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/token/psp22"},"PSP22")," token with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/token/psp22/src/extensions/mintable.rs"},"PSP22Mintable")," extension."),(0,a.kt)("h2",{id:"how-to-use-this-extension"},"How to use this extension"),(0,a.kt)("p",null,"For your smart contract to use this extension, you only need to implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"PSP22Mintable")," trait in your ",(0,a.kt)("inlineCode",{parentName:"p"},"PSP22")," smart contract. Add import for  ",(0,a.kt)("inlineCode",{parentName:"p"},"psp22::extensions::mintable::*"),", inherit the implementation for ",(0,a.kt)("inlineCode",{parentName:"p"},"PSP22Mintable")," trait, where you can also customize (override) the original functions from ",(0,a.kt)("inlineCode",{parentName:"p"},"PSP22Mintable"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"use psp22::extensions::mintable::*;\n\nimpl PSP22Mintable for MyPSP22 {}\n")),(0,a.kt)("p",null,"And that's it! Your ",(0,a.kt)("inlineCode",{parentName:"p"},"PSP22")," is now extended by the ",(0,a.kt)("inlineCode",{parentName:"p"},"PSP22Mintable")," extension and ready to use its functions!"),(0,a.kt)("p",null,"You can also check the documentation for the basic implementation of ",(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/PSP22/psp22"},"PSP22"),"."))}m.isMDXComponent=!0}}]);