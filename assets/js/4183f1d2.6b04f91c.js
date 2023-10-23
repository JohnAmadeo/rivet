"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8319],{1042:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>c});var a=n(3249);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=u(n),g=r,c=d["".concat(p,".").concat(g)]||d[g]||m[g]||l;return n?a.createElement(c,i(i({ref:e},s),{},{components:n})):a.createElement(c,i({ref:e},s))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4398:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(7396),r=(n(3249),n(1042));const l={sidebar_label:"Anthropic"},i="Anthropic Plugin",o={unversionedId:"user-guide/plugins/built-in/anthropic",id:"user-guide/plugins/built-in/anthropic",title:"Anthropic Plugin",description:"The Anthropic plugin provides access to Claude and Claude Instant using the",source:"@site/docs/user-guide/plugins/built-in/anthropic.md",sourceDirName:"user-guide/plugins/built-in",slug:"/user-guide/plugins/built-in/anthropic",permalink:"/docs/user-guide/plugins/built-in/anthropic",draft:!1,editUrl:"https://github.com/ironclad/rivet/tree/main/packages/docs/docs/user-guide/plugins/built-in/anthropic.md",tags:[],version:"current",frontMatter:{sidebar_label:"Anthropic"},sidebar:"userGuide",previous:{title:"All Built-In Plugins",permalink:"/docs/user-guide/plugins/built-in/all"},next:{title:"AssemblyAI",permalink:"/docs/user-guide/plugins/built-in/assemblyai"}},p={},u=[{value:"Configuration",id:"configuration",level:2},{value:"Nodes",id:"nodes",level:2},{value:"Chat (Anthropic) Node",id:"chat-anthropic-node",level:3},{value:"Inputs",id:"inputs",level:4},{value:"Outputs",id:"outputs",level:4},{value:"Editor Settings",id:"editor-settings",level:4}],s={toc:u},d="wrapper";function m(t){let{components:e,...l}=t;return(0,r.kt)(d,(0,a.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"anthropic-plugin"},"Anthropic Plugin"),(0,r.kt)("p",null,"The Anthropic plugin provides access to ",(0,r.kt)("a",{parentName:"p",href:"https://www.anthropic.com/product"},"Claude and Claude Instant")," using the\n",(0,r.kt)("strong",{parentName:"p"},"Chat Anthropic")," node."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"At the moment you must use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/user-guide/executors"},"node executor")," to use the Anthropic plugin in the Rivet UI. You may also use the plugin when embedding Rivet in your own application.")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"You must put your Anthropic API key in the Rivet settings panel once the Anthropic plugin has been enabled. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/setup"},"Settings")," for more information."),(0,r.kt)("h2",{id:"nodes"},"Nodes"),(0,r.kt)("h3",{id:"chat-anthropic-node"},"Chat (Anthropic) Node"),(0,r.kt)("p",null,"The Chat (Anthropic) node allows you to use the Claude API to generate text."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Chat (Anthropic) Node",src:n(4604).Z,width:"654",height:"352"})),(0,r.kt)("h4",{id:"inputs"},"Inputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Prompt"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"string[]")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"chat-message")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"chat-message[]")),(0,r.kt)("td",{parentName:"tr",align:null},"The messages to send to Claude to get a response."),(0,r.kt)("td",{parentName:"tr",align:null},"(Required)"),(0,r.kt)("td",{parentName:"tr",align:null},"Claude does not support a system prompt like GPT does, so you may have to get inventive to place words into Claude's mouth using Prompt nodes set to ",(0,r.kt)("inlineCode",{parentName:"td"},"AI"),".")))),(0,r.kt)("h4",{id:"outputs"},"Outputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Response"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The response message from Claude"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"editor-settings"},"Editor Settings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Use Input Toggle"),(0,r.kt)("th",{parentName:"tr",align:null},"Input Data Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Model"),(0,r.kt)("td",{parentName:"tr",align:null},"The Claude model to use for the request (either Claude 2 or Claude Instant)"),(0,r.kt)("td",{parentName:"tr",align:null},"Claude 2"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Temperature"),(0,r.kt)("td",{parentName:"tr",align:null},'The sampling temperature to use. Lower values are more deterministic. Higher values are more "creative".'),(0,r.kt)("td",{parentName:"tr",align:null},"0.5"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Top P"),(0,r.kt)("td",{parentName:"tr",align:null},"Alternate sampling mode using the top X% of values. 0.1 corresponds to the top 10%."),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Use Top P"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to use the Top P sampling mode."),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Max Tokens"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum number of tokens that GPT is allowed to return. When hitting the max tokens, the response will be cut off."),(0,r.kt)("td",{parentName:"tr",align:null},"1024"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Stop"),(0,r.kt)("td",{parentName:"tr",align:null},"Comma separated list of stop tokens. If any stop token is encountered, the response will end immediately."),(0,r.kt)("td",{parentName:"tr",align:null},"(None)"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string[]"))))))}m.isMDXComponent=!0},4604:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/chat-anthropic-node-0cfd471a721776867e73aa734d301c6c.png"}}]);