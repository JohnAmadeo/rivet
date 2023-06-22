"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1478],{6593:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var o=n(5227);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=l(n),g=r,h=p["".concat(c,".").concat(g)]||p[g]||u[g]||i;return n?o.createElement(h,a(a({ref:t},s),{},{components:n})):o.createElement(h,a({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=g;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[p]="string"==typeof e?e:r,a[1]=d;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6964:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var o=n(373),r=(n(5227),n(6593));const i={title:"Working with Nodes"},a=void 0,d={unversionedId:"user-guide/adding-connecting-nodes",id:"user-guide/adding-connecting-nodes",title:"Working with Nodes",description:"Adding Nodes",source:"@site/docs/user-guide/adding-connecting-nodes.md",sourceDirName:"user-guide",slug:"/user-guide/adding-connecting-nodes",permalink:"/user-guide/adding-connecting-nodes",draft:!1,editUrl:"https://github.com/ironclad/rivet/tree/main/packages/docs/docs/user-guide/adding-connecting-nodes.md",tags:[],version:"current",frontMatter:{title:"Working with Nodes"},sidebar:"userGuide",previous:{title:"Overview of the Interface",permalink:"/user-guide/overview-of-interface"},next:{title:"Working with Graphs",permalink:"/user-guide/working-with-graphs"}},c={},l=[{value:"Adding Nodes",id:"adding-nodes",level:2},{value:"Moving Nodes",id:"moving-nodes",level:2},{value:"Deleting Nodes",id:"deleting-nodes",level:2},{value:"Connecting Nodes",id:"connecting-nodes",level:2},{value:"Disconnecting Nodes",id:"disconnecting-nodes",level:2},{value:"Creating a Subgraph",id:"creating-a-subgraph",level:2},{value:"Editing a Node",id:"editing-a-node",level:2}],s={toc:l},p="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,o.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"adding-nodes"},"Adding Nodes"),(0,r.kt)("p",null,"To add a node to the current graph, right click in the empty space on the graph, and enter the Add menu."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add Menu",src:n(5550).Z,width:"996",height:"748"})),(0,r.kt)("p",null,"Nodes are grouped by their category. Selecting a node will add it to the graph where you right clicked."),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"../node-reference"},"Node Reference")," for more information about all possible nodes that can be added."),(0,r.kt)("h2",{id:"moving-nodes"},"Moving Nodes"),(0,r.kt)("p",null,"Click and drag on the title bar of a node to move it on the node canvas. You can also select multiple nodes by holding shift and clicking on the title bars of multiple nodes. You can then move all of the selected nodes as a group."),(0,r.kt)("h2",{id:"deleting-nodes"},"Deleting Nodes"),(0,r.kt)("p",null,"Right click on a node and select ",(0,r.kt)("strong",{parentName:"p"},"Delete")," to delete it. ",(0,r.kt)("strong",{parentName:"p"},"Warning: There is no undo at this time!")),(0,r.kt)("h2",{id:"connecting-nodes"},"Connecting Nodes"),(0,r.kt)("p",null,"Nodes are connected by clicking and dragging from a port on one node to a port on another node. Ports are the connection points on the node. Ports can be inputs or outputs. Inputs are on the left side of the node and outputs are on the right side of the node."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"connecting a node",src:n(1373).Z,width:"942",height:"324"})),(0,r.kt)("p",null,"The output port of a node can connect to multiple input ports on other nodes."),(0,r.kt)("p",null,"The input port of a node can only connect to one output port on another node."),(0,r.kt)("p",null,"The data type of every port is available in the documentation for each node in the ",(0,r.kt)("a",{parentName:"p",href:"../node-reference"},"Node Reference"),"."),(0,r.kt)("h2",{id:"disconnecting-nodes"},"Disconnecting Nodes"),(0,r.kt)("p",null,"Click and drag on a connected port to move the connection to a different port, or click and drag to an empty space for an existing connection to delete the connection."),(0,r.kt)("h2",{id:"creating-a-subgraph"},"Creating a Subgraph"),(0,r.kt)("p",null,"To create a subgraph, select multiple nodes by holding shift and clicking on the title bars of multiple nodes. Then right click on one of the selected nodes and select ",(0,r.kt)("strong",{parentName:"p"},"Create Subgraph"),". This will create a new (",(0,r.kt)("em",{parentName:"p"},"unsaved!"),") graph containing the nodes you selected, as well as additional input and output nodes to connect the subgraph to the parent graph."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"creating a subgraph",src:n(4971).Z,width:"2334",height:"908"})),(0,r.kt)("p",null,"Make sure you go into the graph info section for the subgraph and give it a name and description, or else it will be Untitled Graph."),(0,r.kt)("p",null,"Make sure you save your new graph! (CMD+S or CTRL+S)"),(0,r.kt)("p",null,"The source nodes will ",(0,r.kt)("strong",{parentName:"p"},"not")," be removed from the parent graph at this time. It is up to you to replace them with your newly created subgraph."),(0,r.kt)("h2",{id:"editing-a-node"},"Editing a Node"),(0,r.kt)("p",null,"Click the gear icon on the top right of a node to edit it. This will open the Node Editor. See the ",(0,r.kt)("a",{parentName:"p",href:"./overview-of-interface"},"interface overview")," for more information about the Node Editor."))}u.isMDXComponent=!0},1373:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/chat-to-text-node-bc1cff3cf4ef51365de32c1cbbb0c512.gif"},5550:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/add-menu-a5f03d4775c754ef263bed9fe8ced31e.png"},4971:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/create-subgraph-8bba7f6fdb198e551ab57bfa4018fb57.gif"}}]);