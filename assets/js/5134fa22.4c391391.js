"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3758],{6593:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(1644);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,m=d["".concat(l,".").concat(p)]||d[p]||h[p]||i;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8172:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(373),r=(n(1644),n(6593));const i={sidebar_label:"03 - Matching & Conditionals"},a="Matching & Conditionals",s={unversionedId:"tutorial/matching-conditionals",id:"tutorial/matching-conditionals",title:"Matching & Conditionals",description:"In the sidebar you should see the graphs tab with a list of numbered folders with graphs. These are the graphs that are included in the tutorial project.",source:"@site/docs/tutorial/03-matching-conditionals.md",sourceDirName:"tutorial",slug:"/tutorial/matching-conditionals",permalink:"/docs/tutorial/matching-conditionals",draft:!1,editUrl:"https://github.com/ironclad/rivet/tree/main/packages/docs/docs/tutorial/03-matching-conditionals.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"03 - Matching & Conditionals"},sidebar:"tutorial",previous:{title:"02 - Interpolation & More Node Types",permalink:"/docs/tutorial/interpolation-more-node-types"},next:{title:"04 - YAML",permalink:"/docs/tutorial/yaml"}},l={},c=[],u={toc:c},d="wrapper";function h(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"matching--conditionals"},"Matching & Conditionals"),(0,r.kt)("p",null,"In the sidebar you should see the graphs tab with a list of numbered folders with graphs. These are the graphs that are included in the tutorial project."),(0,r.kt)("p",null,"Inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"3. Matching and Conditionals")," folder you should see an ",(0,r.kt)("inlineCode",{parentName:"p"},"Matching and Conditionals")," graph. Click on the graph to open it."),(0,r.kt)("p",null,"You should see the following graph:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Overview",src:n(8463).Z,width:"1906",height:"833"})),(0,r.kt)("p",null,"We can use this example NDA generated from the previous tutorial!"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Non-Disclosure Agreement"),(0,r.kt)("p",{parentName:"blockquote"},'This Non-Disclosure Agreement (the "Agreement") is entered into between ',"[Disclosing Party]",', located at 111 St, and Receiver, Inc, located at 222 St, collectively referred to as the "Parties".'),(0,r.kt)("p",{parentName:"blockquote"},'Purpose The Parties desire to explore a potential business relationship (the "Purpose") and, in connection with this Purpose, may need to disclose certain confidential information to each other.'),(0,r.kt)("p",{parentName:"blockquote"},'Definition of Confidential Information Confidential Information refers to any information, data, or materials, in any form, whether oral, written, or electronic, that is disclosed by one Party (the "Disclosing Party") to the other Party (the "Receiving Party") and is marked as "confidential" or reasonably understood to be confidential based on its nature.'),(0,r.kt)("p",{parentName:"blockquote"},"Obligations of the Receiving Party The Receiving Party agrees to: a. Maintain the confidentiality of the Disclosing Party's Confidential Information with the same degree of care it uses to protect its own confidential information, but not less than a reasonable standard of care. b. Use the Confidential Information solely for the Purpose and not for any other purpose without the prior written consent of the Disclosing Party. c. Not disclose the Confidential Information to any third party without the prior written consent of the Disclosing Party, except as required by law or as necessary for the Purpose, provided that the Receiving Party ensures that any recipients are bound by confidentiality obligations at least as restrictive as those set forth in this Agreement. d. Promptly notify the Disclosing Party of any unauthorized disclosure or use of the Confidential Information and assist in any actions to prevent or stop such unauthorized disclosure or use."),(0,r.kt)("p",{parentName:"blockquote"},"Term and Termination This Agreement shall be effective as of the date of signing and shall continue until Jan 2025. Either Party may terminate this Agreement upon written notice to the other Party. The obligations of confidentiality shall survive the termination of this Agreement."),(0,r.kt)("p",{parentName:"blockquote"},"Remedies The Parties acknowledge that any unauthorized use or disclosure of the Confidential Information may cause irreparable harm to the Disclosing Party, for which monetary damages may not be an adequate remedy. In such cases, the Disclosing Party shall be entitled to seek injunctive relief or any other appropriate equitable remedies."),(0,r.kt)("p",{parentName:"blockquote"},"Governing Law and Jurisdiction This Agreement shall be governed by and construed in accordance with the laws of New England. Any disputes arising out of or in connection with this Agreement shall be subject to the exclusive jurisdiction of the courts of New England."),(0,r.kt)("p",{parentName:"blockquote"},"Entire Agreement This Agreement constitutes the entire understanding between the Parties concerning the subject matter hereof and supersedes all prior agreements, understandings, and communications, whether oral or written, between the Parties relating to the Confidential Information."),(0,r.kt)("p",{parentName:"blockquote"},"IN WITNESS WHEREOF, the Parties have executed this Non-Disclosure Agreement as of the date first written above."),(0,r.kt)("p",{parentName:"blockquote"},"Discloser, Inc"),(0,r.kt)("p",{parentName:"blockquote"},"Name: Mr. Discloser"),(0,r.kt)("p",{parentName:"blockquote"},"Title: CEO"),(0,r.kt)("p",{parentName:"blockquote"},"Receiver, Inc"),(0,r.kt)("p",{parentName:"blockquote"},"Name: Mr. Receiver"),(0,r.kt)("p",{parentName:"blockquote"},"Title: CEO")))}h.isMDXComponent=!0},8463:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/03-overview-f05e495f831b3c38460ca49c1658bfe9.png"}}]);