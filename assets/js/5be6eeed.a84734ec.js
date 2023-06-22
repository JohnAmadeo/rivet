"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6758],{6593:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var o=n(5227);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),s=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(d.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=s(n),p=r,g=h["".concat(d,".").concat(p)]||h[p]||c[p]||a;return n?o.createElement(g,i(i({ref:t},u),{},{components:n})):o.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[h]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8822:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(373),r=(n(5227),n(6593));const a={title:"Overview of the Interface"},i=void 0,l={unversionedId:"user-guide/overview-of-interface",id:"user-guide/overview-of-interface",title:"Overview of the Interface",description:"interface overview",source:"@site/docs/user-guide/overview-of-interface.md",sourceDirName:"user-guide",slug:"/user-guide/overview-of-interface",permalink:"/user-guide/overview-of-interface",draft:!1,editUrl:"https://github.com/ironclad/rivet/tree/main/packages/docs/docs/user-guide/overview-of-interface.md",tags:[],version:"current",frontMatter:{title:"Overview of the Interface"},sidebar:"userGuide",previous:{title:"First AI Agent",permalink:"/getting-started/first-ai-agent"},next:{title:"Working with Nodes",permalink:"/user-guide/adding-connecting-nodes"}},d={},s=[{value:"1. Sidebar",id:"1-sidebar",level:2},{value:"Project Info Tab",id:"project-info-tab",level:3},{value:"Graphs Tab",id:"graphs-tab",level:3},{value:"1.1 Graph List",id:"11-graph-list",level:4},{value:"Graph Info Tab",id:"graph-info-tab",level:3},{value:"2. Graph",id:"2-graph",level:2},{value:"2.1 Node Title Bar",id:"21-node-title-bar",level:3},{value:"2.2 Edit Node",id:"22-edit-node",level:3},{value:"2.3 Node Body",id:"23-node-body",level:3},{value:"2.4 Resize Handle",id:"24-resize-handle",level:3},{value:"2.5 Ports",id:"25-ports",level:3},{value:"2.6 Canvas",id:"26-canvas",level:3},{value:"3. Node Editor",id:"3-node-editor",level:2},{value:"3.1 Node Title &amp; Description",id:"31-node-title--description",level:3},{value:"3.2 Split Node",id:"32-split-node",level:3},{value:"3.3 Variants",id:"33-variants",level:3},{value:"3.4 Node Data Editor",id:"34-node-data-editor",level:3},{value:"Menu Bar",id:"menu-bar",level:2},{value:"Prompt Designer",id:"prompt-designer",level:3},{value:"Remote Debugging",id:"remote-debugging",level:3},{value:"Executor",id:"executor",level:3},{value:"Run",id:"run",level:3},{value:"Abort",id:"abort",level:3},{value:"Pause/Resume",id:"pauseresume",level:3}],u={toc:s},h="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"interface overview",src:n(3974).Z,width:"3248",height:"2112"})),(0,r.kt)("p",null,"Above is a quick annotated overview of the main Rivet interface. The main areas are:"),(0,r.kt)("h2",{id:"1-sidebar"},"1. Sidebar"),(0,r.kt)("h3",{id:"project-info-tab"},"Project Info Tab"),(0,r.kt)("p",null,"In the project info tab you can set the name and description of your project. This data is saved with your project file and used for documenting your project."),(0,r.kt)("h3",{id:"graphs-tab"},"Graphs Tab"),(0,r.kt)("p",null,"The graphs tab is where you can navigate between all graphs in your project, add new graphs, and delete/duplicate existing graphs."),(0,r.kt)("h4",{id:"11-graph-list"},"1.1 Graph List"),(0,r.kt)("p",null,'Clicking on a graph in the list will open it in the main graph area. To add a new graph, right click in the blank space in the graph list and select "New Graph".'),(0,r.kt)("p",null,'To delete a graph, right click on it and select "Delete Graph". This will delete the graph from your project. (',(0,r.kt)("strong",{parentName:"p"},"Warning")," there is no undo at this time!)"),(0,r.kt)("p",null,'To duplicate a graph, right click on it and select "Duplicate Graph". This will create a new graph with the same nodes and connections as the original graph.'),(0,r.kt)("h3",{id:"graph-info-tab"},"Graph Info Tab"),(0,r.kt)("p",null,"In the graph info tab you can set the name and description of your graph. This data is saved with your project file and used for documenting your graph."),(0,r.kt)("h2",{id:"2-graph"},"2. Graph"),(0,r.kt)("p",null,"You will mainly be working in the Graph area of the interface. It contains all of your nodes in the current graph and the connections between them."),(0,r.kt)("h3",{id:"21-node-title-bar"},"2.1 Node Title Bar"),(0,r.kt)("p",null,"Shows the title of the node. Click and drag on the title bar to move the node around the canvas."),(0,r.kt)("p",null,"Hold shift and click the title bars on multiple nodes to select multiple nodes at once. You can then move all of the selected nodes as a group, or create a subgraph from the selected nodes."),(0,r.kt)("h3",{id:"22-edit-node"},"2.2 Edit Node"),(0,r.kt)("p",null,"Click the edit node icon to edit the current node and open the ",(0,r.kt)("a",{parentName:"p",href:"#3-node-editor"},"Node Editor"),"."),(0,r.kt)("h3",{id:"23-node-body"},"2.3 Node Body"),(0,r.kt)("p",null,"Shows the current configured data on the node, such as the text of a ",(0,r.kt)("a",{parentName:"p",href:"/node-reference/text"},"Text Node")," or the configuration of a ",(0,r.kt)("a",{parentName:"p",href:"/node-reference/chat"},"Chat Node"),"."),(0,r.kt)("p",null,"Right click in the node body or the node title to delete or duplicate the node."),(0,r.kt)("h3",{id:"24-resize-handle"},"2.4 Resize Handle"),(0,r.kt)("p",null,"You can resize the node horizontally by clicking and dragging on the resize handle."),(0,r.kt)("h3",{id:"25-ports"},"2.5 Ports"),(0,r.kt)("p",null,"Ports are the connection points on the node. Ports can be inputs or outputs. Inputs are on the left side of the node and outputs are on the right side of the node."),(0,r.kt)("p",null,"Click and drag from a port to another port to create a connection between the two ports."),(0,r.kt)("p",null,"Click on a connected port to move the connection to a different port, or click and drag to an empty space for an existing connection to delete the connection."),(0,r.kt)("h3",{id:"26-canvas"},"2.6 Canvas"),(0,r.kt)("p",null,"The canvas is the main area of the graph. You can click and drag on the canvas to move the graph around. You can also use the scroll wheel to zoom in and out."),(0,r.kt)("p",null,"Right click to open the context menu to add new nodes."),(0,r.kt)("h2",{id:"3-node-editor"},"3. Node Editor"),(0,r.kt)("p",null,"The node editor is visible when you click the edit node icon on a node. It is used to edit the data on the node."),(0,r.kt)("p",null,"You can close the node editor by clicking the close button in the top right, by pressing the escape key, or by clicking on any blank space in the graph."),(0,r.kt)("h3",{id:"31-node-title--description"},"3.1 Node Title & Description"),(0,r.kt)("p",null,"You can edit the title of the node in the node editor (changes the title shown on the graph). You can also edit the description of the node in the node editor, for documentation purposes."),(0,r.kt)("h3",{id:"32-split-node"},"3.2 Split Node"),(0,r.kt)("p",null,"Toggles whether the node is a split node. For more information on split nodes, see the ",(0,r.kt)("a",{parentName:"p",href:"/user-guide/splitting"},"Splitting")," documentation."),(0,r.kt)("p",null,"When splitting is enabled, the number input next to the split toggle is the ",(0,r.kt)("strong",{parentName:"p"},"maximum split amount"),". This is a safeguard for excessive splitting. If the data exceeds the maximum split amount, only the first N items will be executed, where N is the maximum split amount."),(0,r.kt)("h3",{id:"33-variants"},"3.3 Variants"),(0,r.kt)("p",null,"Variants are used to create multiple versions of the same node. The button on the right allows you to save the current node configuration as a new variant. The dropdown on the left allows you to apply existing variants to the current data on the node."),(0,r.kt)("p",null,"Variants allow you to save slight differences to a node, and test them without losing the data. For example, you may have a ",(0,r.kt)("a",{parentName:"p",href:"/node-reference/text"},"Text Node")," with a message to an LLM. You may want to test different variations of the message to see which one performs better and gives better AI results."),(0,r.kt)("h3",{id:"34-node-data-editor"},"3.4 Node Data Editor"),(0,r.kt)("p",null,"This area contains the editors for the currently selected node. The editor will change depending on the type of node you are editing. For example, the ",(0,r.kt)("a",{parentName:"p",href:"/node-reference/text"},"Text Node")," has a text editor, and the ",(0,r.kt)("a",{parentName:"p",href:"/node-reference/chat"},"Chat Node")," has a chat configuration editor."),(0,r.kt)("h2",{id:"menu-bar"},"Menu Bar"),(0,r.kt)("h3",{id:"prompt-designer"},"Prompt Designer"),(0,r.kt)("p",null,"Toggles whether the Prompt Designer is visible. The Prompt Designer is currently in development."),(0,r.kt)("h3",{id:"remote-debugging"},"Remote Debugging"),(0,r.kt)("p",null,"Clicking the Remote Debugging button will open up the remote debugger connect panel. You can enter a remote debugger URI to connect Rivet as a remote debugger to a server."),(0,r.kt)("p",null,"While connected, click remote debugger button again to disconnect."),(0,r.kt)("h3",{id:"executor"},"Executor"),(0,r.kt)("p",null,"Allows you to select the current executor that Rivet will use. See the ",(0,r.kt)("a",{parentName:"p",href:"./executors"},"Executors")," documentation for more information."),(0,r.kt)("h3",{id:"run"},"Run"),(0,r.kt)("p",null,"Clicking the run button will run the current graph."),(0,r.kt)("h3",{id:"abort"},"Abort"),(0,r.kt)("p",null,"Visible while a graph is running. Clicking the abort button will abort the current graph."),(0,r.kt)("h3",{id:"pauseresume"},"Pause/Resume"),(0,r.kt)("p",null,"Visible while a graph is running. Clicking the pause button will pause the current graph, and clicking the resume button will resume the current graph from where it was paused."))}c.isMDXComponent=!0},3974:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/interface-overview-annotated-fb6e886aefa3e2e5e137c0ed5ac54935.png"}}]);