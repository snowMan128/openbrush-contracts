"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[513],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(a),u=r,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4741:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:5,title:"EVM vs WASM Smart Contracts"},s=void 0,i={unversionedId:"evm-wasm-smart-contracts",id:"evm-wasm-smart-contracts",title:"EVM vs WASM Smart Contracts",description:"This short article describes differences between EVM Smart Contracts & Substrate WASM Smart contracts.",source:"@site/docs/evm-wasm-smart-contracts.md",sourceDirName:".",slug:"/evm-wasm-smart-contracts",permalink:"/evm-wasm-smart-contracts",draft:!1,editUrl:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/docs/docs/evm-wasm-smart-contracts.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"EVM vs WASM Smart Contracts"},sidebar:"tutorialSidebar",previous:{title:"Deployment",permalink:"/deployment"}},c={},l=[{value:"EVM",id:"evm",level:2},{value:"Background",id:"background",level:3},{value:"Bytecode",id:"bytecode",level:3},{value:"Gas model",id:"gas-model",level:3},{value:"Evm process",id:"evm-process",level:3},{value:"Substrate Contract-Pallet",id:"substrate-contract-pallet",level:2},{value:"Intro",id:"intro",level:3},{value:"WASM interpreter",id:"wasm-interpreter",level:3},{value:"Storage rent &amp; Gas",id:"storage-rent--gas",level:3},{value:"Contract code &amp; instance are decoupled",id:"contract-code--instance-are-decoupled",level:3},{value:"EVM vs contract-pallet",id:"evm-vs-contract-pallet",level:2},{value:"Comparing WASM Smart contracts to EVM smart contracts",id:"comparing-wasm-smart-contracts-to-evm-smart-contracts",level:2}],p={toc:l};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This short article describes differences between EVM Smart Contracts & Substrate WASM Smart contracts."),(0,r.kt)("h2",{id:"evm"},"EVM"),(0,r.kt)("h3",{id:"background"},"Background"),(0,r.kt)("p",null,"Ethereum was the first Turing-complete blockchain and was mainly developed because of limitations of Bitcoin's script. In order to execute smart contracts, a sandbox environment is needed. The sandbox environment where Smart contracts are executed in Ethereum is the  ",(0,r.kt)("strong",{parentName:"p"},"Ethereum virtual machine")," (",(0,r.kt)("em",{parentName:"p"},"EVM"),")"),(0,r.kt)("h3",{id:"bytecode"},"Bytecode"),(0,r.kt)("p",null,"EVM uses a stack-based bytecode language called EVM bytecode. EVM bytecode is a series of OP_CODEs (instructions) that are executed by the EVM. These OP_CODEs offer rather limited instructions compared to a full-blown language (Java, WASM, ..)"),(0,r.kt)("p",null,"The primitive of the bytecode is ",(0,r.kt)("em",{parentName:"p"},"256-bit")," integer, which can be a big limitation, as it is needed to use ",(0,r.kt)("em",{parentName:"p"},"256-bit")," integers to do calculations on even small numbers. Moreover, it will take 256 bits of memory for any value that is stored in persistent storage."),(0,r.kt)("p",null,"The main OP_CODEs are ",(0,r.kt)("strong",{parentName:"p"},"SLOAD")," to load data, ",(0,r.kt)("strong",{parentName:"p"},"SSTORE")," to write a ",(0,r.kt)("em",{parentName:"p"},"256-bit")," integer to storage and ",(0,r.kt)("strong",{parentName:"p"},"CALL")," to call another contract ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/crytic/evm-opcodes"},"full list of OP_CODES"),". It's via these instructions that EVMs interact with the chain."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image info",src:a(9923).Z,width:"1129",height:"237"})),(0,r.kt)("h3",{id:"gas-model"},"Gas model"),(0,r.kt)("p",null,"The incentive model of interacting with EVM is gas. It acts like a fee that is calculated for each instruction someone executes. Every instruction has a certain pre-calculated fee amount, and the total gas spent is the sum of all the instructions that were executed."),(0,r.kt)("p",null,"Please check the entire table of ",(0,r.kt)("a",{parentName:"p",href:"https://blockgeeks.com/wp-content/uploads/2018/03/image2-2.png"},"fees"),"\nA gas fee is only due when interacting with EVM. There is no charge for the space you are using for storage, and it results in having a ton of dead code (or non-used contracts) stay on Ethereum chain forever."),(0,r.kt)("h3",{id:"evm-process"},"Evm process"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image info",src:a(3910).Z,width:"1187",height:"647"})),(0,r.kt)("h2",{id:"substrate-contract-pallet"},"Substrate Contract-Pallet"),(0,r.kt)("h3",{id:"intro"},"Intro"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pallet-contract")," is a module in Substrate (the framework to build blockchain on ",(0,r.kt)("inlineCode",{parentName:"p"},"Polkadot"),"). Its purpose is a sandbox environment, which provides WASM interpreter and allows executing WASM smart contracts."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image info",src:a(7697).Z,width:"748",height:"168"})),(0,r.kt)("h3",{id:"wasm-interpreter"},"WASM interpreter"),(0,r.kt)("p",null,"At the moment, contract pallet uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/wasmi"},"wasmi")," as the interpreter. Wasmi is a pure interpreter-type WASM virtual machine. It is used because execution of smart contract needs a high degree of correctness."),(0,r.kt)("h3",{id:"storage-rent--gas"},"Storage rent & Gas"),(0,r.kt)("p",null,"In order to incentive the deletion of unused code on chain, pallet-contract implemented a storage-rent principle.  "),(0,r.kt)("p",null,"Every smart contract will have a rent to pay for its code and on-chain storage (small amount at every block). When the smart contract fails to pay the rent, the contract will become a Tombstone (its storage will be deleted)."),(0,r.kt)("p",null,"The gas system of ethereum (price depending on the complexity of the computation) is still present in Substrate, but the gas is charged after the call is executed, as it is basically a fee on the time of execution (the more time it takes for the node to execute a call, the more caller will pay). The ",(0,r.kt)("inlineCode",{parentName:"p"},"pallet-contract")," defines the ",(0,r.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/smart-contracts/contracts-pallet"},"amount of gas")),(0,r.kt)("h3",{id:"contract-code--instance-are-decoupled"},"Contract code & instance are decoupled"),(0,r.kt)("p",null,"Even though ",(0,r.kt)("inlineCode",{parentName:"p"},"pallet-contract")," uses an account model for its contracts (like ethereum does), there is still one big difference:"),(0,r.kt)("p",null,"When you deploy a WASM smart contract, it will only create a hash of the WASM code, meaning that this contract will have no address, nor will it have some associated storage (so it is impossible to interact with this contract). In Ethereum, though, every contract code deployed on chain has a unique address (instance) and its associated storage."),(0,r.kt)("p",null,"After the WASM hash is deployed, one can create as many instances of this contract as they want. Each instance will have a unique address to interact with, as well as its own associated storage."),(0,r.kt)("p",null,"Why is it useful:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Different contract instances with different ",(0,r.kt)("strong",{parentName:"li"},"constructor parameters")," can be instantiated using the same uploaded code, which reduces the space needed on chain to store WASM code"),(0,r.kt)("li",{parentName:"ul"},"Storage and balance are decoupled from contract code logic, which provides ability ",(0,r.kt)("strong",{parentName:"li"},"patch or upgrade")," the underlying contract code")),(0,r.kt)("h2",{id:"evm-vs-contract-pallet"},"EVM vs contract-pallet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Common point: they both are a sandbox to execute smart contracts"),(0,r.kt)("li",{parentName:"ul"},"The engine which executes contracts is different. In Ethereum, as it was the first blockchain to implement a sandbox environment, it is rather limited and slow, compared to a wasm interpreter\nStorage rent has been introduced in contract-pallet to incentivize the deletion of unused code"),(0,r.kt)("li",{parentName:"ul"},"Contract pallet integrates a ",(0,r.kt)("a",{parentName:"li",href:"https://substrate.dev/docs/en/knowledgebase/smart-contracts/contracts-pallet#two-step-deployment"},"two-step-deployment")," to decouple contract code and contract instances")),(0,r.kt)("h2",{id:"comparing-wasm-smart-contracts-to-evm-smart-contracts"},"Comparing WASM Smart contracts to EVM smart contracts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"WASM is broadly adopted, while EVM bytecode is only used in EVMs -> There is way more tools available for WASM development"),(0,r.kt)("li",{parentName:"ul"},"EVM bytecode can only be compiled from Solidity or Vyper, while WASM can be compiled from a lot of Popular languages (Rust, C/C++, C#, Java, Typescript, Haxe, Kotlin and even from Solidity)"),(0,r.kt)("li",{parentName:"ul"},"Excellent integration of Rust to compile in WASM"),(0,r.kt)("li",{parentName:"ul"},"Lightweight: it produces lightweight binaries that can ship easily"),(0,r.kt)("li",{parentName:"ul"},"performance near native code (2x faster than Javascipt)"),(0,r.kt)("li",{parentName:"ul"},"Continually developed by major companies such as Google, Apple, Microsoft, Mozilla, and Facebook.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://paritytech.github.io/ink-docs/why-webassembly-for-smart-contracts"},"more info here")))}d.isMDXComponent=!0},7697:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/WASM1-6756d42cebd1ac99b3ba95e855d30b3f.png"},9923:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/eth-1-ad987c237ade36ced07edf738d54f0f8.png"},3910:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/eth2-ffa3287e02b17629ea23aeba96d201e0.png"}}]);