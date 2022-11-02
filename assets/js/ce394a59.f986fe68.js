"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[79737],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},l=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),m=r,f=l["".concat(c,".").concat(m)]||l[m]||d[m]||a;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}l.displayName="MDXCreateElement"},30944:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={sidebar_position:1,title:"Diamond Loupe"},i=void 0,s={unversionedId:"smart-contracts/diamond/Extensions/loupe",id:"version-v2.3.0/smart-contracts/diamond/Extensions/loupe",title:"Diamond Loupe",description:"This example shows how you can reuse the implementation of Diamond Standard with Diamond Loupe extension, which allows you to iterate over diamond contract's facets and available functions.",source:"@site/versioned_docs/version-v2.3.0/smart-contracts/diamond/Extensions/loupe.md",sourceDirName:"smart-contracts/diamond/Extensions",slug:"/smart-contracts/diamond/Extensions/loupe",permalink:"/smart-contracts/diamond/Extensions/loupe",draft:!1,editUrl:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/docs/versioned_docs/version-v2.3.0/smart-contracts/diamond/Extensions/loupe.md",tags:[],version:"v2.3.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Diamond Loupe"},sidebar:"tutorialSidebar",previous:{title:"Diamond Standard",permalink:"/smart-contracts/diamond/"},next:{title:"Pausable",permalink:"/smart-contracts/pausable"}},c={},p=[{value:"How to use this extension",id:"how-to-use-this-extension",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This example shows how you can reuse the implementation of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/src/upgradeability/diamond"},"Diamond Standard")," with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/blob/main/contracts/src/upgradeability/diamond/extensions/diamond_loupe.rs"},"Diamond Loupe")," extension, which allows you to iterate over diamond contract's facets and available functions."),(0,r.kt)("h2",{id:"how-to-use-this-extension"},"How to use this extension"),(0,r.kt)("p",null,"First, you should implement basic version of ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/diamond"},"Diamond standard"),"."),(0,r.kt)("p",null,"For your smart contract to use this extension, you only need to implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"DiamoundLoupe")," trait in your\n",(0,r.kt)("inlineCode",{parentName:"p"},"Diamond")," smart contract. Add import for ",(0,r.kt)("inlineCode",{parentName:"p"},"openbrush::contracts::diamond::extensions::diamond_loupe::*"),",\ninherit the implementation for ",(0,r.kt)("inlineCode",{parentName:"p"},"DiamondLoupe")," trait, where you can also customize (override)\nthe original functions from ",(0,r.kt)("inlineCode",{parentName:"p"},"DiamondLoupe"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use openbrush::contracts::diamond::extensions::diamond_loupe::*;\n\nimpl DiamondLoupe for Contract {}\n")),(0,r.kt)("p",null,"And that's it! Your ",(0,r.kt)("inlineCode",{parentName:"p"},"Diamond")," is now extended by the ",(0,r.kt)("inlineCode",{parentName:"p"},"DiamondLoupe")," extension and ready to use its functions!\nYou can check an example of the usage of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/examples/diamond"},"Diamond Loupe"),"."))}d.isMDXComponent=!0}}]);