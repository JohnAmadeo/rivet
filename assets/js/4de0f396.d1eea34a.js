"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2483],{1042:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(3249);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1692:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7396),r=(n(3249),n(1042));const o={},i="LooseDataValue",l={unversionedId:"api-reference/node/LooseDataValue",id:"api-reference/node/LooseDataValue",title:"LooseDataValue",description:"Description",source:"@site/docs/api-reference/node/LooseDataValue.mdx",sourceDirName:"api-reference/node",slug:"/api-reference/node/LooseDataValue",permalink:"/docs/api-reference/node/LooseDataValue",draft:!1,editUrl:"https://github.com/ironclad/rivet/tree/main/packages/docs/docs/api-reference/node/LooseDataValue.mdx",tags:[],version:"current",frontMatter:{},sidebar:"apiReference",previous:{title:"DebuggerEvents",permalink:"/docs/api-reference/node/DebuggerEvents"},next:{title:"RivetDebuggerServer",permalink:"/docs/api-reference/node/RivetDebuggerServer"}},p={},s=[{value:"Description",id:"description",level:2},{value:"Definition",id:"definition",level:2},{value:"Explanation",id:"explanation",level:2},{value:"Usage",id:"usage",level:2},{value:"See Also",id:"see-also",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"loosedatavalue"},"LooseDataValue"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"LooseDataValue")," is a type that represents a loose data value. It can be a ",(0,r.kt)("inlineCode",{parentName:"p"},"DataValue"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"."),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type LooseDataValue = DataValue | string | number | boolean;\n")),(0,r.kt)("h2",{id:"explanation"},"Explanation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DataValue"),": This is a specific type defined in the library. For more details, see the ",(0,r.kt)("a",{parentName:"li",href:"../core/DataValue"},"DataValue")," documentation page."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"string"),": A standard JavaScript string."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"number"),": A standard JavaScript number."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": A standard JavaScript boolean.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"LooseDataValue")," is used in various places across the API, particularly as a type for inputs and context values in the ",(0,r.kt)("inlineCode",{parentName:"p"},"RunGraphOptions")," type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export type RunGraphOptions = {\n  inputs?: Record<string, LooseDataValue>;\n  context?: Record<string, LooseDataValue>;\n  // Other properties...\n};\n")),(0,r.kt)("p",null,"In this example, ",(0,r.kt)("inlineCode",{parentName:"p"},"inputs")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"RunGraphOptions")," can accept an object where the values can be a ",(0,r.kt)("inlineCode",{parentName:"p"},"DataValue"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"."),(0,r.kt)("h2",{id:"see-also"},"See Also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../core/DataValue"},"DataValue")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./RunGraphOptions"},"RunGraphOptions"))))}d.isMDXComponent=!0}}]);