"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[754],{1042:(e,t,a)=>{a.d(t,{Zo:()=>A,kt:()=>h});var n=a(3249);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},A=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,A=i(e,["components","mdxType","originalType","parentName"]),c=s(a),d=r,h=c["".concat(u,".").concat(d)]||c[d]||p[d]||l;return a?n.createElement(h,o(o({ref:t},A),{},{components:a})):n.createElement(h,o({ref:t},A))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5089:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(3249),r=a(2689);const l={tabItem:"tabItem_o9Hs"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:a},t)}},2327:(e,t,a)=>{a.d(t,{Z:()=>b});var n=a(7396),r=a(3249),l=a(2689),o=a(5986),i=a(6659),u=a(4532),s=a(5821),A=a(3312);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=p(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[u,s]=h({queryString:a,groupId:n}),[c,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,A.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),f=(()=>{const e=u??c;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),m(e)}),[s,m,l]),tabValues:l}}var f=a(3072);const g={tabList:"tabList_Dwv5",tabItem:"tabItem_KiUr"};function v(e){let{className:t,block:a,selectedValue:i,selectValue:u,tabValues:s}=e;const A=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),p=e=>{const t=e.currentTarget,a=A.indexOf(t),n=s[a].value;n!==i&&(c(t),u(n))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=A.indexOf(e.currentTarget)+1;t=A[a]??A[0];break}case"ArrowLeft":{const a=A.indexOf(e.currentTarget)-1;t=A[a]??A[A.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>A.push(e),onKeyDown:d,onClick:p},o,{className:(0,l.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=m(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(k,(0,n.Z)({},e,t)))}function b(e){const t=(0,f.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},1232:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>A,contentTitle:()=>u,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(7396),r=(a(3249),a(1042)),l=a(2327),o=a(5089);const i={id:"hash",title:"Hash Node",sidebar_label:"Hash"},u=void 0,s={unversionedId:"node-reference/hash",id:"node-reference/hash",title:"Hash Node",description:"Hash Node Screenshot",source:"@site/docs/node-reference/hash.mdx",sourceDirName:"node-reference",slug:"/node-reference/hash",permalink:"/docs/node-reference/hash",draft:!1,editUrl:"https://github.com/ironclad/rivet/tree/main/packages/docs/docs/node-reference/hash.mdx",tags:[],version:"current",frontMatter:{id:"hash",title:"Hash Node",sidebar_label:"Hash"},sidebar:"nodeReference",previous:{title:"Bool",permalink:"/docs/node-reference/bool"},next:{title:"Image",permalink:"/docs/node-reference/image"}},A={},c=[{value:"Overview",id:"overview",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Editor Settings",id:"editor-settings",level:2},{value:"Example 1: Hash a string",id:"example-1-hash-a-string",level:2},{value:"Error Handling",id:"error-handling",level:2},{value:"FAQ",id:"faq",level:2},{value:"See Also",id:"see-also",level:2}],p={toc:c},d="wrapper";function h(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Hash Node Screenshot",src:a(2769).Z,width:"334",height:"152"})),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The Hash Node computes a hash of the input value using the configured hash function. It supports MD5, SHA-1, SHA-256, and SHA-512 hash algorithms. This node can be useful for generating unique IDs, checksums, and other purposes."),(0,r.kt)(l.Z,{defaultValue:"inputs",values:[{label:"Inputs",value:"inputs"},{label:"Outputs",value:"outputs"},{label:"Editor Settings",value:"settings"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"inputs",mdxType:"TabItem"},(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Input"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The string to be hashed."),(0,r.kt)("td",{parentName:"tr",align:null},"(required)"),(0,r.kt)("td",{parentName:"tr",align:null},"The input will be coerced into a string if it is not a string."))))),(0,r.kt)(o.Z,{value:"outputs",mdxType:"TabItem"},(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hash"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The hash of the input string."),(0,r.kt)("td",{parentName:"tr",align:null}))))),(0,r.kt)(o.Z,{value:"settings",mdxType:"TabItem"},(0,r.kt)("h2",{id:"editor-settings"},"Editor Settings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Use Input Toggle"),(0,r.kt)("th",{parentName:"tr",align:null},"Input Data Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Algorithm"),(0,r.kt)("td",{parentName:"tr",align:null},"The hash algorithm to use. Options are MD5, SHA-1, SHA-256, and SHA-512."),(0,r.kt)("td",{parentName:"tr",align:null},"SHA-256"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")))))),(0,r.kt)("h2",{id:"example-1-hash-a-string"},"Example 1: Hash a string"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a ",(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/text"},"Text Node")," and set the value to ",(0,r.kt)("inlineCode",{parentName:"li"},"Hello, World!"),"."),(0,r.kt)("li",{parentName:"ol"},"Create a Hash Node and connect the Text Node to its ",(0,r.kt)("inlineCode",{parentName:"li"},"Input")," port."),(0,r.kt)("li",{parentName:"ol"},"Run the graph. The ",(0,r.kt)("inlineCode",{parentName:"li"},"Hash")," output of the Hash Node should contain the hash of the string ",(0,r.kt)("inlineCode",{parentName:"li"},"Hello, World!"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Hash Node Example 1",src:a(5623).Z,width:"709",height:"203"})),(0,r.kt)("h2",{id:"error-handling"},"Error Handling"),(0,r.kt)("p",null,"The Hash Node will error if the ",(0,r.kt)("inlineCode",{parentName:"p"},"Input")," is not provided or if an unsupported hash algorithm is specified."),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: Can I use the Hash Node to hash a number or other non-string value?")),(0,r.kt)("p",null,"A: Yes, you can. The Hash Node will automatically convert non-string inputs into strings before hashing them."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: Can I use the Hash Node to hash a password?")),(0,r.kt)("p",null,"A: It is not recommended to have passwords in Rivet. If you need to hash a password, you should do so outside of Rivet."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: Can I use the Hash Node to generate a unique ID for a piece of data?")),(0,r.kt)("p",null,"A: Yes, you can use the Hash Node to generate a unique repeatable ID for a piece of data by hashing the data. This can be used with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/node-reference/vector-store"},"Vector Store Node")," to store the data in a vector store with the ID as the key."),(0,r.kt)("h2",{id:"see-also"},"See Also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/text"},"Text Node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/number"},"Number Node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/vector-store"},"Vector Store Node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/RNG"},"RNG Node"))))}h.isMDXComponent=!0},5623:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hash-node-example-01-034acc285e36f7deb565163c70f33ff3.png"},2769:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);