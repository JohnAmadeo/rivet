"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4651],{1042:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(3249);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||l;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5089:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(3249),r=a(2689);const l={tabItem:"tabItem_o9Hs"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:a},t)}},2327:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(7396),r=a(3249),l=a(2689),i=a(5986),o=a(6659),s=a(4532),d=a(5821),u=a(3312);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function c(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=c(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,d]=h({queryString:a,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),f=(()=>{const e=s??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),g(e)}),[d,g,l]),tabValues:l}}var f=a(3072);const N={tabList:"tabList_Dwv5",tabItem:"tabItem_KiUr"};function b(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:d}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),c=e=>{const t=e.currentTarget,a=u.indexOf(t),n=d[a].value;n!==o&&(p(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},d.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:c},i,{className:(0,l.Z)("tabs__item",N.tabItem,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",N.tabList)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(k,(0,n.Z)({},e,t)))}function y(e){const t=(0,f.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},1040:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var n=a(7396),r=(a(3249),a(1042)),l=a(2327),i=a(5089);const o={id:"knn-dataset",title:"KNN Dataset Node",sidebar_label:"KNN Dataset"},s=void 0,d={unversionedId:"node-reference/knn-dataset",id:"node-reference/knn-dataset",title:"KNN Dataset Node",description:"KNN Dataset Node Screenshot",source:"@site/docs/node-reference/knn-dataset.mdx",sourceDirName:"node-reference",slug:"/node-reference/knn-dataset",permalink:"/docs/node-reference/knn-dataset",draft:!1,editUrl:"https://github.com/ironclad/rivet/tree/main/packages/docs/docs/node-reference/knn-dataset.mdx",tags:[],version:"current",frontMatter:{id:"knn-dataset",title:"KNN Dataset Node",sidebar_label:"KNN Dataset"},sidebar:"nodeReference",previous:{title:"Graph Output",permalink:"/docs/node-reference/graph-output"},next:{title:"Load Dataset",permalink:"/docs/node-reference/load-dataset"}},u={},p=[{value:"Overview",id:"overview",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Editor Settings",id:"editor-settings",level:2},{value:"Example 1: Find the nearest neighbors in a dataset",id:"example-1-find-the-nearest-neighbors-in-a-dataset",level:2},{value:"Error Handling",id:"error-handling",level:2},{value:"FAQ",id:"faq",level:2},{value:"See Also",id:"see-also",level:2}],c={toc:p},m="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"KNN Dataset Node Screenshot",src:a(4738).Z,width:"357",height:"170"})),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The KNN (K-Nearest Neighbors) Dataset Node is used to find the k nearest neighbors in a dataset given an embedding. This node is particularly useful when you want to find the most similar items in a dataset to a given item."),(0,r.kt)("p",null,"The node requires a dataset provider to be available in the context when the graph is being run. The dataset provider is responsible for managing the storage and retrieval of datasets. In the Rivet application, the dataset provider is handled for you automatically."),(0,r.kt)("p",null,"For more information on datasets, see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/user-guide/features/data-studio"},"Data Studio")," section of the user guide."),(0,r.kt)(l.Z,{defaultValue:"inputs",values:[{label:"Inputs",value:"inputs"},{label:"Outputs",value:"outputs"},{label:"Editor Settings",value:"settings"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"inputs",mdxType:"TabItem"},(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Embedding"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},"The embedding to use as the reference point for finding the nearest neighbors."),(0,r.kt)("td",{parentName:"tr",align:null},"(required)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dataset ID"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the dataset to search for the nearest neighbors. This input is only available if ",(0,r.kt)("inlineCode",{parentName:"td"},"Use Dataset ID Input")," is enabled."),(0,r.kt)("td",{parentName:"tr",align:null},"(required if if the input toggle for Dataset ID is enabled)"),(0,r.kt)("td",{parentName:"tr",align:null},"The input will be coerced into a string if it is not a string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"K"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of nearest neighbors to find. This input is only available if ",(0,r.kt)("inlineCode",{parentName:"td"},"Use K Input")," is enabled."),(0,r.kt)("td",{parentName:"tr",align:null},"(required if if the input toggle for K is enabled)"),(0,r.kt)("td",{parentName:"tr",align:null},"The input will be coerced into a number if it is not a number."))))),(0,r.kt)(i.Z,{value:"outputs",mdxType:"TabItem"},(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Nearest Neighbors"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object[]")),(0,r.kt)("td",{parentName:"tr",align:null},"An array of the k nearest neighbors. Each object in the array contains the ID, distance, and data of a neighbor."),(0,r.kt)("td",{parentName:"tr",align:null},"The output will be an array of objects. Each object represents a neighbor and contains the ID, distance, and data of the neighbor."))))),(0,r.kt)(i.Z,{value:"settings",mdxType:"TabItem"},(0,r.kt)("h2",{id:"editor-settings"},"Editor Settings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Use Input Toggle"),(0,r.kt)("th",{parentName:"tr",align:null},"Input Data Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the dataset to search for the nearest neighbors."),(0,r.kt)("td",{parentName:"tr",align:null},"(required)"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"K"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of nearest neighbors to find."),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))))))),(0,r.kt)("h2",{id:"example-1-find-the-nearest-neighbors-in-a-dataset"},"Example 1: Find the nearest neighbors in a dataset"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First, in the ",(0,r.kt)("a",{parentName:"li",href:"/docs/user-guide/features/data-studio"},"Data Studio"),", create a new dataset with the name ",(0,r.kt)("inlineCode",{parentName:"li"},"Employees"),"."),(0,r.kt)("li",{parentName:"ol"},"In a new graph, add an ",(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/append-to-dataset"},"Append to Dataset Node")," and set the Dataset ID to ",(0,r.kt)("inlineCode",{parentName:"li"},"Employees"),"."),(0,r.kt)("li",{parentName:"ol"},"Add a ",(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/text"},"Text Node")," and set the value to ",(0,r.kt)("inlineCode",{parentName:"li"},"John Doe"),". We will be getting an embedding for this text node."),(0,r.kt)("li",{parentName:"ol"},"Add a ",(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/get-embedding"},"Get Embedding Node")," and connect the Text Node to it. Connect the ",(0,r.kt)("inlineCode",{parentName:"li"},"Embedding")," output of the Get Embedding Node to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Embedding")," input of the Append to Dataset Node."),(0,r.kt)("li",{parentName:"ol"},"Connect the Text Node to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Data")," input of the Append to Dataset Node."),(0,r.kt)("li",{parentName:"ol"},'Run the graph. This will append "John Doe" and its embedding to the ',(0,r.kt)("inlineCode",{parentName:"li"},"Employees")," dataset."),(0,r.kt)("li",{parentName:"ol"},"Change the value of the Text Node to ",(0,r.kt)("inlineCode",{parentName:"li"},"Jane Doe"),' and run the graph again. This will append "Jane Doe" and its embedding to the ',(0,r.kt)("inlineCode",{parentName:"li"},"Employees")," dataset.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"KNN Dataset Node Example 1",src:a(6244).Z,width:"1158",height:"381"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Next, create a new graph with a KNN Dataset Node and set the Dataset ID to ",(0,r.kt)("inlineCode",{parentName:"li"},"Employees")," and K to 1."),(0,r.kt)("li",{parentName:"ol"},"Add a ",(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/text"},"Text Node")," and set the value to ",(0,r.kt)("inlineCode",{parentName:"li"},"Jane"),". We will be finding the nearest neighbor to this text node."),(0,r.kt)("li",{parentName:"ol"},"Add a ",(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/get-embedding"},"Get Embedding Node")," and connect the Text Node to it. Connect the ",(0,r.kt)("inlineCode",{parentName:"li"},"Embedding")," output of the Get Embedding Node to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Embedding")," input of the KNN Dataset Node."),(0,r.kt)("li",{parentName:"ol"},'Run the graph. This will find the nearest neighbor to "Jane" in the ',(0,r.kt)("inlineCode",{parentName:"li"},"Employees"),' dataset, which is "Jane Doe".')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"KNN Dataset Node Example 1",src:a(8213).Z,width:"933",height:"258"})),(0,r.kt)("h2",{id:"error-handling"},"Error Handling"),(0,r.kt)("p",null,"The KNN Dataset Node will error if the dataset provider is not available in the context when the graph is being run. It will also error if the ",(0,r.kt)("inlineCode",{parentName:"p"},"Embedding")," input is not provided."),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: What is a dataset provider?")),(0,r.kt)("p",null,"A: A dataset provider is an object that is responsible for managing the storage and retrieval of datasets. It is passed to the context when the graph is being run. The dataset provider must implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"DatasetProvider")," interface, which includes methods for getting, putting, and deleting datasets. See the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference"},"API Reference")," for more information."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: Is there any way to get the nearest neighbors without using a dataset?")),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/node-reference/vector-knn"},"Vector KNN Node")," to find the nearest neighbors using other integrations, such as Pinecone."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: What happens if the dataset does not exist?")),(0,r.kt)("p",null,"A: If the dataset does not exist, the KNN Dataset Node will error."),(0,r.kt)("h2",{id:"see-also"},"See Also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/load-dataset"},"Load Dataset Node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/create-dataset"},"Create Dataset Node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/get-all-datasets"},"Get All Datasets Node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/append-to-dataset"},"Append to Dataset Node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/get-dataset-row"},"Get Dataset Row Node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/vector-knn"},"Vector KNN Node"))))}h.isMDXComponent=!0},8213:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/knn-dataset-node-example-01-2-8d6a23ed739609fdc01c71bc87d6be52.png"},6244:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/knn-dataset-node-example-01-4e97b71b03c97b49b195ea10224e5d64.png"},4738:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/knn-dataset-node-30c596e324e3ac32d921b95b5eb2e196.png"}}]);