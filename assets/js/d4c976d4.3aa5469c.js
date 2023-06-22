"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2743],{6593:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var a=n(5227);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=A(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,u=p["".concat(s,".").concat(h)]||p[h]||g[h]||o;return n?a.createElement(u,i(i({ref:t},l),{},{components:n})):a.createElement(u,i({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var A={};for(var s in t)hasOwnProperty.call(t,s)&&(A[s]=t[s]);A.originalType=e,A[p]="string"==typeof e?e:r,i[1]=A;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},233:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>A,toc:()=>c});var a=n(373),r=(n(5227),n(6593));const o={title:"First AI Agent"},i=void 0,A={unversionedId:"getting-started/first-ai-agent",id:"getting-started/first-ai-agent",title:"First AI Agent",description:"When you first open Rivet you are presented with a blank canvas. This is where you can create your first AI agent.",source:"@site/docs/getting-started/first-ai-agent.md",sourceDirName:"getting-started",slug:"/getting-started/first-ai-agent",permalink:"/getting-started/first-ai-agent",draft:!1,editUrl:"https://github.com/ironclad/rivet/tree/main/packages/docs/docs/getting-started/first-ai-agent.md",tags:[],version:"current",frontMatter:{title:"First AI Agent"},sidebar:"userGuide",previous:{title:"Setup",permalink:"/getting-started/setup"},next:{title:"Overview of the Interface",permalink:"/user-guide/overview-of-interface"}},s={},c=[],l={toc:c},p="wrapper";function g(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,a.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When you first open Rivet you are presented with a blank canvas. This is where you can create your first AI agent."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Rivet blank canvas",src:n(1458).Z,width:"3248",height:"2112"})),(0,r.kt)("p",null,"Right click to open the ",(0,r.kt)("strong",{parentName:"p"},"Add")," menu, go into ",(0,r.kt)("strong",{parentName:"p"},"Common"),", and select a ",(0,r.kt)("a",{parentName:"p",href:"/node-reference/chat"},"Chat Node"),". This will create a new Chat node where you right clicked."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Rivet add chat node",src:n(3236).Z,width:"908",height:"530"})," ",(0,r.kt)("img",{alt:"Rivet chat node",src:n(8542).Z,width:"524",height:"306"}),"."),(0,r.kt)("p",null,"Do the same thing again, but now create a ",(0,r.kt)("a",{parentName:"p",href:"/node-reference/text"},"Text Node")," (in Common or Text) to the left of the Chat node."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"chat and text node",src:n(8971).Z,width:"1034",height:"278"})),(0,r.kt)("p",null,"Drag from the ",(0,r.kt)("strong",{parentName:"p"},"Output")," port of the Text node to the ",(0,r.kt)("strong",{parentName:"p"},"Prompt")," port of the Chat node. This will connect the two nodes together."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"chat to text node",src:n(1373).Z,width:"942",height:"324"}),"."),(0,r.kt)("p",null,"Next, click the gear on the text node to edit its text."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"edit text node",src:n(334).Z,width:"82",height:"90"})),(0,r.kt)("p",null,'In the editor, change the text to "Hello, AI!". You can then close the editor by clicking the close button in the top right, clicking on any blank space in the graph, or pressing Escape.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"hello ai editor",src:n(561).Z,width:"858",height:"332"})),(0,r.kt)("p",null,"Finally, click the ",(0,r.kt)("strong",{parentName:"p"},"Run"),' button in the top right of the Rivet window! The "Hello, AI" text will be sent to the Chat node, which will then send it to OpenAI to generate a response.'),(0,r.kt)("p",null,"The response from the AI is visible under the Chat node's green bar. By hovering the mouse over the Chat node, you can expand the response."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"hello ai response",src:n(2502).Z,width:"510",height:"428"})),(0,r.kt)("p",null,"If you click the Expand icon in the top right of the response area, you can expand the AI's response to a full screen view. Click outside of the full screen view to close it."),(0,r.kt)("p",null,"Congratulations! You've just created your first AI chain in Rivet! There is a lot more work to enable a full AI Agent, but this is a good start."),(0,r.kt)("p",null,"Next, you can go through the ",(0,r.kt)("a",{parentName:"p",href:"/tutorial"},"tutorial")," to learn more about what nodes are available and how to assemble them into a full AI Agent, or you can continue with the ",(0,r.kt)("a",{parentName:"p",href:"/user-guide/overview-of-interface"},"user guide")," to learn more about Rivet's features in depth."))}g.isMDXComponent=!0},3236:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/add-chat-node-815fd771e7716e07f4375eff9f224903.png"},8971:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/chat-and-text-node-7f89f743342b2ce9bf4dc8eac70a212a.png"},8542:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/chat-node-3efa7edba4f2b2c0cba087ae9abc5035.png"},1373:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/chat-to-text-node-bc1cff3cf4ef51365de32c1cbbb0c512.gif"},334:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAABaCAYAAAArfwH2AAAMPWlDQ1BJQ0MgUHJvZmlsZQAASImVVwdYU8kWnluSkEBoAQSkhN4EkRpASggt9N5EJSQBQokxEFTs6KKCaxcL2NBVEQUrzYIidhbF3hcLKsq6WLArb1JA133le5NvZv78c+Y/Z86dWwYAteMckSgPVQcgX1gojg32pyenpNJJTwEBaMMfDlw53AIRMzo6HMAy1P+9vLsOEGl/xV6q9c/x/1o0ePwCLgBINMQZvAJuPsQHAcCruCJxIQBEKW82pVAkxbACLTEMEOKFUpwlx1VSnCHHe2U28bEsiNsBUFLhcMRZAKhegjy9iJsFNVT7IXYU8gRCANToEPvk50/iQZwOsTW0EUEs1Wdk/KCT9TfNjGFNDidrGMvXIitKAYICUR5n2v+Zjv9d8vMkQz4sYVXJFofEStcM83Yzd1KYFKtA3CfMiIyCWBPiDwKezB5ilJItCUmQ26MG3AIWzBnQgdiRxwkIg9gA4iBhXmS4gs/IFASxIYY7BJ0qKGTHQ6wL8UJ+QWCcwmazeFKswhfakClmMRX8WY5Y5lfq674kN4Gp0H+dzWcr9DHV4uz4JIgpEJsXCRIjIVaF2KEgNy5MYTO2OJsVOWQjlsRK4zeHOJYvDPaX62NFmeKgWIV9WX7B0HqxzdkCdqQC7y/Mjg+R5wdr53Jk8cO1YJf4QmbCkA6/IDl8aC08fkCgfO3YM74wIU6h80FU6B8rn4tTRHnRCnvclJ8XLOVNIXYpKIpTzMUTC+GGlOvjmaLC6Hh5nHhxDic0Wh4PvgyEAxYIAHQggTUDTAI5QNDZ19gH/8lHggAHiEEW4AN7BTM0I0k2IoRtHCgGf0LEBwXD8/xlo3xQBPmvw6y8tQeZstEi2Yxc8ATifBAG8uB/iWyWcNhbIngMGcE/vHNg5cJ482CVjv97foj9zjAhE65gJEMe6WpDlsRAYgAxhBhEtMH1cR/cCw+HrR+sTjgD9xhax3d7whNCF+Eh4Rqhm3BroqBE/FOUEaAb6gcpcpHxYy5wS6jpivvj3lAdKuM6uD6wx12gHybuCz27QpaliFuaFfpP2n9bwQ9XQ2FHdiSj5BFkP7L1zzNVbVVdh1Wkuf4xP/JYM4bzzRoe+dk/64fs82Af9rMlthA7gJ3BTmDnsCNYI6BjrVgT1oEdleLh3fVYtruGvMXK4smFOoJ/+Bu6stJMFjjWOvY6fpGPFfKnSp/RgDVJNE0syMoupDPhG4FPZwu5DqPoTo5OzgBI3y/yx9ebGNl7A9Hp+M7N+wMA79bBwcHD37nQVgD2ucPbv/k7Z82Arw5lAM42cyXiIjmHSxsCfEqowTtNDxgBM2AN1+ME3IAX8AOBIBREgXiQAibA6LPhPheDKWAGmAtKQTlYBlaD9WAT2Ap2gj1gP2gER8AJcBpcAJfANXAH7p4e8AL0g3fgM4IgJISK0BA9xBixQOwQJ4SB+CCBSDgSi6Qg6UgWIkQkyAxkHlKOrEDWI1uQGmQf0oycQM4hXcgt5AHSi7xGPqEYqoJqoYaoJToaZaBMNAyNR8ejWehktBidjy5B16LV6G60AT2BXkCvod3oC3QAA5gypoOZYPYYA2NhUVgqlomJsVlYGVaBVWN1WAu8zlewbqwP+4gTcRpOx+3hDg7BE3AuPhmfhS/G1+M78Qa8Hb+CP8D78W8EKsGAYEfwJLAJyYQswhRCKaGCsJ1wiHAK3ks9hHdEIlGHaEV0h/diCjGHOJ24mLiBWE88TuwiPiIOkEgkPZIdyZsUReKQCkmlpHWk3aRW0mVSD+mDkrKSsZKTUpBSqpJQqUSpQmmX0jGly0pPlT6T1ckWZE9yFJlHnkZeSt5GbiFfJPeQP1M0KFYUb0o8JYcyl7KWUkc5RblLeaOsrGyq7KEcoyxQnqO8Vnmv8lnlB8ofVTRVbFVYKmkqEpUlKjtUjqvcUnlDpVItqX7UVGohdQm1hnqSep/6QZWm6qDKVuWpzlatVG1Qvaz6Uo2sZqHGVJugVqxWoXZA7aJanzpZ3VKdpc5Rn6Veqd6sfkN9QIOmMUYjSiNfY7HGLo1zGs80SZqWmoGaPM35mls1T2o+omE0MxqLxqXNo22jnaL1aBG1rLTYWjla5Vp7tDq1+rU1tV20E7WnaldqH9Xu1sF0LHXYOnk6S3X261zX+TTCcARzBH/EohF1Iy6PeK87UtdPl69bpluve033kx5dL1AvV2+5XqPePX1c31Y/Rn+K/kb9U/p9I7VGeo3kjiwbuX/kbQPUwNYg1mC6wVaDDoMBQyPDYEOR4TrDk4Z9RjpGfkY5RquMjhn1GtOMfYwFxquMW42f07XpTHoefS29nd5vYmASYiIx2WLSafLZ1Mo0wbTEtN70nhnFjGGWabbKrM2s39zYPMJ8hnmt+W0LsgXDIttijcUZi/eWVpZJlgssGy2fWelasa2KrWqt7lpTrX2tJ1tXW1+1IdowbHJtNthcskVtXW2zbSttL9qhdm52ArsNdl2jCKM8RglHVY+6Ya9iz7Qvsq+1f+Cg4xDuUOLQ6PBytPno1NHLR58Z/c3R1THPcZvjnTGaY0LHlIxpGfPaydaJ61TpdNWZ6hzkPNu5yfmVi50L32Wjy01XmmuE6wLXNtevbu5uYrc6t153c/d09yr3GwwtRjRjMeOsB8HD32O2xxGPj55unoWe+z3/8rL3yvXa5fVsrNVY/thtYx95m3pzvLd4d/vQfdJ9Nvt0+5r4cnyrfR/6mfnx/Lb7PWXaMHOYu5kv/R39xf6H/N+zPFkzWccDsIDggLKAzkDNwITA9YH3g0yDsoJqg/qDXYOnBx8PIYSEhSwPucE2ZHPZNez+UPfQmaHtYSphcWHrwx6G24aLw1si0IjQiJURdyMtIoWRjVEgih21MupetFX05OjDMcSY6JjKmCexY2JnxJ6Jo8VNjNsV9y7eP35p/J0E6wRJQluiWmJaYk3i+6SApBVJ3cmjk2cmX0jRTxGkNKWSUhNTt6cOjAsct3pcT5prWmna9fFW46eOPzdBf0LehKMT1SZyJh5IJ6Qnpe9K/8KJ4lRzBjLYGVUZ/VwWdw33Bc+Pt4rXy/fmr+A/zfTOXJH5LMs7a2VWb7ZvdkV2n4AlWC94lROSsynnfW5U7o7cwbykvPp8pfz0/GahpjBX2D7JaNLUSV0iO1GpqHuy5+TVk/vFYeLtBUjB+IKmQi34Id8hsZb8InlQ5FNUWfRhSuKUA1M1pgqndkyznbZo2tPioOLfpuPTudPbZpjMmDvjwUzmzC2zkFkZs9pmm82eP7tnTvCcnXMpc3Pn/l7iWLKi5O28pHkt8w3nz5n/6JfgX2pLVUvFpTcWeC3YtBBfKFjYuch50bpF38p4ZefLHcsryr8s5i4+/+uYX9f+Orgkc0nnUrelG5cRlwmXXV/uu3znCo0VxSserYxY2bCKvqps1dvVE1efq3Cp2LSGskaypntt+Nqmdebrlq37sj57/bVK/8r6KoOqRVXvN/A2XN7ot7Fuk+Gm8k2fNgs239wSvKWh2rK6Yitxa9HWJ9sSt535jfFbzXb97eXbv+4Q7ujeGbuzvca9pmaXwa6ltWitpLZ3d9ruS3sC9jTV2ddtqdepL98L9kr2Pt+Xvu/6/rD9bQcYB+oOWhysOkQ7VNaANExr6G/MbuxuSmnqag5tbmvxajl02OHwjiMmRyqPah9deoxybP6xwdbi1oHjouN9J7JOPGqb2HbnZPLJq+0x7Z2nwk6dPR10+uQZ5pnWs95nj5zzPNd8nnG+8YLbhYYO145Dv7v+fqjTrbPhovvFpksel1q6xnYdu+x7+cSVgCunr7KvXrgWea3resL1mzfSbnTf5N18divv1qvbRbc/35lzl3C37J76vYr7Bver/7D5o77brfvog4AHHQ/jHt55xH304nHB4y89859Qn1Q8NX5a88zp2ZHeoN5Lz8c973khevG5r/RPjT+rXlq/PPiX318d/cn9Pa/ErwZfL36j92bHW5e3bQPRA/ff5b/7/L7sg96HnR8ZH898Svr09POUL6Qva7/afG35Fvbt7mD+4KCII+bIPgUwWNHMTABe7wCAmgIADZ7PKOPk5z9ZQeRnVhkC/wnLz4iy4gZAHfx+j+mDXzc3ANi7DR6/oL5aGgDRVADiPQDq7Dxch85qsnOltBDhOWBz5NeM/Azwb4r8zPlD3D/3QKrqAn7u/wXMMHxwNYHIBwAAAGxlWElmTU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAIdpAAQAAAABAAAATgAAAAAAAACQAAAAAQAAAJAAAAABAAKgAgAEAAAAAQAAAFKgAwAEAAAAAQAAAFoAAAAAxUYtLwAAAAlwSFlzAAAWJQAAFiUBSVIk8AAADKNJREFUeAHtXV2sXUUVXnuffe/tH/2jUGhDC4iaEtNKqQXR8JOmITwQjT4IRqOJJjyIRtNAUhKtmuCD8UUTjD5o+qQJ8aElSk21oKixkiIVxTZUae0v9sf+X/pz9tl+36xZe885Z992F8+591y7h549M2vWrJn17TWzZs+eu4mWvO/OTHxIksSlms2mkXoa/z/LT6IAKktbHBT1JGlyLe6J0ECIybU4KCpN5hZUWnplxETKWi2jXZncS3MPiPzII9kLQDGWy8SU0S6NzZWV9ld+VqpTdw+jSO9o2331XbvSHuqk6NtoE9jd7v9MGS/51dvphrwN3ADNIFmKA+bIoFmfbKOVVnuHxAGUzy4pSAZVAa6BSm05DRS83fonsU0UZPaKhrTuKu+cMgjyW677XlGmPUBOecPS8TBTgGr2xpplgCamHOtG/t6ENNJ7FfovX3vK/rdhYgqAGLt0UZo5TNGzguQx097yGhSZpC4wO5Y/TqoXlNfpWcKmDG2lZ2JzQSaXcakmjhgCwx4RJvxQZmAqcCRQtEoKb02GUUxqhLugvCIY2mTW0PDDXO+SUXsXj6d8VdDUbNehUNlzuQhUm+ZcHmCB1AIYyq+xSdQquHKuAEMyPFw47kaj4VqM0/aGe5UbV/mmcdD5ggTNfcbZJ9LMqp0hdnm13Ia3KpbzyYwxgWXsgkIGizQC4oZCXzAFZb1Ijpt86uF1CfttQ9fB4NFwgCBtwGRgUiPDsAWRw5gAq7G6lBPpq+fik6xVPFe31KVJSMs5e5Doq3xo1i7foAEYSNps6NTwRS7CxWcxjFVJ8jsofBnJpJkpNtMm6pBQ1E3MSkjMBznh7kMYN/mu74UjcAA4E/LKcxiaowCJVictQA0etUKWu3+KglZTorslJKt8XlmcNOKcS2Kfbjj4ydzb0E/5xMnkJ0H/C+3AAaS0CMoTNNSxH9dFLo0LeSiPVumsVKuCJQLedEKo73iKm5VcN4NVNDS8C09xd/oR+i7fD680DfvPtA1El8RFASBwFzGznbkg0gRqnB8zgg06QTT/wbwDDgDGuAP0xWq9LNFJIzr547uZu6rDRaC2ZWdLnns9lX8dg7MBai2CDXPk8odWSSDjRuLS3K8laDqnEnhYaQ1kYUMEZteRTNZvbcr2Ay04LwVJwYQ1NoZyIB24qEqAnVWuefQelyzEXR2poUYmM4czmTMtkxtmZHLz3EgWXxvlS8Af/iGVDa+lAFOXQwSTFpnBei/Ca3OF4KyScCGRvLzfryivDvxKtUzTVEbfPicfXCzy9MPDDszHPtSQQ6dEtu5pSswJk07GQadzrtsZAoCcR1ls82lpA1cLkU9cM6ZPk1cODskj68/J/hO0NZEnVjVkwUxdFgFH52AirGzoXkJ3Rt4aSKKAQAsbGRmWkxemyNeevyBn4cmnD4t8YjnexgA1/iyoZXIZRIrGNZCGjo+Hh4dkz4lEnv2zPvE9uCSWBbN0iRMTNELHiweR1ZisgSQSHWHqlBH53W4d3ixauRgwAS0b0DmOKHM0uO4ayA4QmeUwP3A6gXfWwkVzAJdDj+Dip/+cJTJDC62BVKy6rlHckNPnlTyUL2x0aBNTC2adNZCGSEfciGP/5IICWKA6GKTpvkGwPHMMNZCKQ9eVw/vk2wHZwDTkWMS1pTfPfGcrqFInPQIhZn5nl6apcyMKw/LaIiuajY5oolfA54yRefyrgawEpD5vG4T5phwIfDxkqIe24nDZa+Qs0aDsZq8tshuTsSnA0aCk17Y0qbVFjg1bW0kOm0evAFHZaiDb4CrPcCnEHSIu0m3H3L1y4B4lqmQ+Lq9dU9sQ8NsVbQPaMXjTnBQWOQW9DE8ycJt/9GKbnn3NZNgWT5vYLcejInfGm2nLWaF73QBrZDzwQC6YKfKthy5KeEaJDnTtL4fk4Mm+4pcLV6PD1XlurB6Z5MUtzTUeeK+97MaWzJsmMncqXpuex+YrrOJa5BfPthVcrm9fE4TL4ehacUh6QLXZgbPIGdiVvmVuJodOR3IOw/euRRhG6Ovnf5bIv0FbekMmTz/UlKU3ZvL6WyI8A7bgmpbsPh7nuzWqWp+u7ExJGDggv7G6Ke+9PnNb/eexST0H1nccmwdHz+ruwNHRyL3Mf3hJSz58c8sBOX1I5FW8Pv36rxPB9NWfQAC1C+3yvXEO1NC+a3HLgbjvRCR7jkcyG8P5FztieWrTUA7QQbzZ+/JziWzeFctUAPjmsUgOnxVZMj+Td8GS+xIo1o/rrhY8YWAskpunjy7VYfzd3zdk55Hi9vMl1PKFLQxhkX1wMLuOxvI98PDHwOH/1VWprLmvKY9vGMp3tl1hzy9wMx68ENSBAfLeW1py27xMUvTu4KkCxFthZU/cl8pNs7XbLP/PaCpPwWvzvTPDXw9xYKWyEB7+TgC+dW+/Bhr7UPSNbbsAcr9atCYqx9sPxgBETzo8eX9ThtXY5JN3pHL9NZls/Hss3/5NQ57HUJ83XeTTy4tjxWsf0Dd+r6E+rbXfQW9peyv9b7W9vTFzx0ZxyuEFOAv08v0LcJxkirIugePhnPmjlxvy0u5Yfrq9AYuMZOVNLbckItdS8O/FnLruV4lQTj9CGXhhOwMDJDvF43UEiQEPEi6MYPKh9zZFRpEeSTLh0w6fKBjoqc9iqdQ3j63NuKv1IyC55MAA2UBPPoXhet10XUPSMhn2wxoXYX68/9aWLJ6TyerbWs5b/+2tSE4DeD7xnDonbn7lNEDgJyIMDJAPAKhHluEoHQBctznJF9c/+UtD6NHX3JvKMx9tyhfuSZ1X5hCnBZL/m1sSGYImrH8HnM1EhAm6f92q/mlfLMfPpTJrBH4xcIzb9kWydlMiq9/dkvk4fscnnp/vwEmx04EMb70E9Y0j42kbbFg7OzBA8mX8s7Cyx+5O5XMrmjh/o4+Dm3bG8tKeWL7/R+/G0XUO5wffo082Ow5HcjsW45wKvvNbOqIA4HFMDgyQ1HnLP2L5zIpUVi7K5AP48Vz3VzCkP46F+uMb9NjxHHjzZz7WlJkjKAd4y+CxGfiE07/1o2vikpeBApJ7jF/cOCQfuT2VVw7g0e9MLE/iaWUhnM0UPA6OwrnMn5nJDJy0ffVgJOu3NdyJ2xULM9n8RqPPTzTAUe9ZKaADBSR7yKeVH2wthvGLb0byWXy/ZN2qpuzFcF84Cye/MLRfgPX+E1Yo+G3bV6pbz4kOxzHAHDggO7XnMod/dcAdIf4YmN9/Uif5Tv6Jyg88kDsPx/KljZFbAhlIXPbwaWdiA29q0YeBB5JgTTxol79l47nounxvJjHHpLDIicY3f6+N51h+NQBvuPXVF9IZPB//RrG2yB7dpdoiKwDJP/bkHzXxaB9PWqR+m4npDH9mx79brC2yApBVWGogq6BUgacGsgJIVVhqIKugVIGnBrICSFVYaiCroFSBpwayAkhVWGogq6BUgacGsgJIVVhqIKugVIGnBrICSFVYaiCroFSBJ2na2ZAKzDXL2AgkZ87ilKYP3Hdj4G5HP8Jkkz93Gk66Vgz10K4I1OXYaiAvgRAHJo/BjDVAw5F71QMZgkFMwzxnOr5DHyvYVMXySQWkKWlxp4Jj0Tv5LE/+EAzSw7xZox3qMvkWmxzGkwpIU9LiToWMrgoWDrOdj4fp9Uf+9jJfMxjL7hOIlveIWjth3UkFpKpZXNuBUHCKAzrFCsT4VHF+w0d/lGRlhdTCKimB5bEB7ubL4gaFdQcayPCOh4qG9EIZm8zKrYz1ycvA+ibDYlfgy4wnxdhWXl+K6tZeYaTaHv4XA9aBoiET2us4bKuKbOOnMqaA0cL6pNmPvDG+2WN1VD3VsUxGWI8ymbfYoOFc6f5eG5+e5ce78OlJ916bf6fNT8nyv0nxOtaUo4IEyBR1CU8zOmmWttgAsbzVs5h0a6OTh61ZffJ3lrMeu4QPJGvHTGgZc1jWi3RZm51yjSdUMExbeVhPlep2JGW8YT2my3iaOAbsPg8LjMZ+r41z7xP5Xrus4yGtDDSWhzyXAuNSvGOVdcqmJaLFtkV5yFOkJ/BrfSFQBkhoUaQZj5VXijvANtAKpVWuybZya0/5iunDfUuXo7ZwJUU3ctoAzJGmkPXOwGSeSoV547HYytt4kaF+CohyunwHTUsUVPIaf9EezqhjaOfzY86jXtrVp7MhHZlxXf5YZ9mJIm1ztMZG74xdx7VintRsAUJep42Dw1ODlVu9MPYsbf3iYvwiTvy7JxwwUA5IpWFcvXZofZZmx9xc5Do4Ri+t6545BMSKumLwmjRry0Yi6zua52E6lKlWqN6YMvgJbReC9os6KvW/XaGNZ+gIl14AAAAASUVORK5CYII="},561:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hello-ai-editor-bc1098b7511230df8fdf5d46cfb9e6db.png"},2502:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hello-ai-response-eda5b840d57214a1144554f6e8703eed.png"},1458:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rivet-blank-canvas-9302919a5b4b7b2dc18de9249489d41c.png"}}]);