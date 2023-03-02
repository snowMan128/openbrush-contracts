"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[72291],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},89717:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:2,title:"Setup the project"},i=void 0,l={unversionedId:"smart-contracts/example/setup_project",id:"version-v2.3.0/smart-contracts/example/setup_project",title:"Setup the project",description:"In the first step, we will define the structure of the project.",source:"@site/versioned_docs/version-v2.3.0/smart-contracts/example/setup_project.md",sourceDirName:"smart-contracts/example",slug:"/smart-contracts/example/setup_project",permalink:"/smart-contracts/example/setup_project",draft:!1,editUrl:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/docs/versioned_docs/version-v2.3.0/smart-contracts/example/setup_project.md",tags:[],version:"v2.3.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Setup the project"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/smart-contracts/example/overview"},next:{title:"Implement PSP22 contract",permalink:"/smart-contracts/example/psp22"}},s={},c=[],p={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the first step, we will define the structure of the project.\nWe suggest using that structure during development for the following reasons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The interface of the contracts is defined separately from the contracts. That allows others to communicate with these contracts without knowledge about the implementation and these interfaces can easily be imported to another project(that allows others to communicate with these contracts)."),(0,o.kt)("li",{parentName:"ul"},"Resolves the problem with cyclic dependencies across the project. To call the methods of the contract from the project you enough to have an interface."),(0,o.kt)("li",{parentName:"ul"},"The usage of the ",(0,o.kt)("inlineCode",{parentName:"li"},"ink-as-dependency")," feature is minimized. That can resolve a lot of headaches in the future."),(0,o.kt)("li",{parentName:"ul"},"The implementation of big contracts can be split into small parts to simplify the development."),(0,o.kt)("li",{parentName:"ul"},"The body of the contract doesn't contain the whole implementation of the contract. That improves the readability of the contracts.")),(0,o.kt)("p",null,"The project will contain the following directories:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"traits")," - contains all traits(interfaces) of the contracts developed in the project.\nTraits describe the functionality of each contract and allow to do cross-contracts calls\nwithout knowledge about the implementation(no need to import the contract, using a trait is enough)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"impls")," - contains the implementations of traits for the contracts.\nIf the contract contains several simple functions, better to implement\nthem in the body of the contract. But if the contract contains a lot of logic\nand methods, better to move(and maybe split on parts) the implementation to that directory.\nBetter to store the implementation of one contract in its own directory and not mix it with others."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contracts")," - contains the bodies of the contracts. Each contract should be defined\nin its own crate(it is a rule of the ink!). Each folder in that directory is a\ncrate(contract). These contracts can have the implementation inside themselves\nor they can import the implementation from ",(0,o.kt)("inlineCode",{parentName:"li"},"impls"),".")),(0,o.kt)("p",null,"In that structure ",(0,o.kt)("inlineCode",{parentName:"p"},"traits")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"impls")," directories are the parts of on ",(0,o.kt)("inlineCode",{parentName:"p"},"PROJECT_NAME")," crate.\nEach contract in the ",(0,o.kt)("inlineCode",{parentName:"p"},"contracts")," directory imports the crate ",(0,o.kt)("inlineCode",{parentName:"p"},"PROJECT_NAME")," and use it inside."),(0,o.kt)("p",null,"Based on the rules above the structure will look like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"\u251c\u2500\u2500 traits\n\u2502\xa0\xa0 \u251c\u2500\u2500 lending.rs\n\u2502\xa0\xa0 \u251c\u2500\u2500 loan.rs\n\u2502\xa0\xa0 \u251c\u2500\u2500 mod.rs\n\u2502\xa0\xa0 \u251c\u2500\u2500 shares.rs\n\u2502\xa0\xa0 \u2514\u2500\u2500 stable_coin.rs\n\u251c\u2500\u2500 impls\n\u2502\xa0\xa0 \u251c\u2500\u2500 lending\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 data.rs\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 lending.rs\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 lending_permissioned.rs\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 mod.rs\n\u2502\xa0\xa0 \u2514\u2500\u2500 mod.rs\n\u251c\u2500\u2500 contracts\n\u2502\xa0\xa0 \u251c\u2500\u2500 lending\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 Cargo.toml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 lib.rs\n\u2502\xa0\xa0 \u251c\u2500\u2500 loan\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 Cargo.toml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 lib.rs\n\u2502\xa0\xa0 \u251c\u2500\u2500 shares\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 Cargo.toml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 lib.rs\n\u2502\xa0\xa0 \u2514\u2500\u2500 stable_coin\n\u2502\xa0\xa0     \u251c\u2500\u2500 Cargo.toml\n\u2502\xa0\xa0     \u2514\u2500\u2500 lib.rs\n\u251c\u2500\u2500 lib.rs\n\u251c\u2500\u2500 Cargo.toml\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"traits")," directory contains 4 traits with logic from the ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/example/overview"},"overview"),".\nIn the example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"LendingContract")," is a big contract and we moved the main logic into ",(0,o.kt)("inlineCode",{parentName:"li"},"impls/lending")," folder. That logic is split into two traits(",(0,o.kt)("inlineCode",{parentName:"li"},"Lending")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"LendingPermissione"),") to show how it can be done."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"LoanContract")," contains few methods, so the implementation is defined directly in the body of the contract."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SharesContract")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"PSP22")," token with public ",(0,o.kt)("inlineCode",{parentName:"li"},"mint")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"burn")," functions that require ownership."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"StableCoinContract")," is a pure ",(0,o.kt)("inlineCode",{parentName:"li"},"PSP22")," token.")))}d.isMDXComponent=!0}}]);