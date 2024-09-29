"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[3705],{1928:(e,i,s)=>{s.d(i,{Ay:()=>u,RM:()=>a});var t=s(6070),n=s(1100),r=(s(758),s(6783)),d=s(7765);const o=e=>{let{ticket:i}=e;const s=`https://github.com/feature-sliced/documentation/issues/${i}`;return(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:(0,d.T)({id:"shared.wip.title"})}),(0,t.jsx)("p",{children:(0,d.T)({id:"shared.wip.subtitle"})}),(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,d.T)({id:"shared.wip.var.feedback.base"}),(0,t.jsx)(r.A,{to:s,children:(0,d.T)({id:"shared.wip.var.feedback.link"})})]}),(0,t.jsxs)("li",{children:[(0,d.T)({id:"shared.wip.var.material.base"}),(0,t.jsx)(r.A,{to:"https://t.me/feature_sliced",children:(0,d.T)({id:"shared.wip.var.material.link"})})]}),(0,t.jsxs)("li",{children:[(0,d.T)({id:"shared.wip.var.contribute.base"}),(0,t.jsx)(r.A,{to:"https://github.com/feature-sliced/documentation/blob/master/CONTRIBUTING.md",children:(0,d.T)({id:"shared.wip.var.contribute.link"})})]})]}),(0,t.jsx)("br",{}),(0,t.jsx)("p",{children:(0,t.jsx)("i",{children:"\ud83c\udf70 Stay tuned!"})})]})},a=[];function c(e){const i={admonition:"admonition",...(0,n.R)(),...e.components};return(0,t.jsx)(i.admonition,{title:"WIP",type:"caution",children:(0,t.jsx)(o,{ticket:e.ticket})})}function u(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},4135:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>a,toc:()=>u});var t=s(6070),n=s(1100),r=s(1928);const d={sidebar_position:3,sidebar_class_name:"sidebar-item--wip"},o="\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0",a={id:"guides/issues/routes",title:"\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0",description:"\u72b6\u6cc1",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/guides/issues/routes.mdx",sourceDirName:"guides/issues",slug:"/guides/issues/routes",permalink:"/ja/docs/guides/issues/routes",draft:!1,unlisted:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/ja/docusaurus-plugin-content-docs/current/guides/issues/routes.mdx",tags:[],version:"current",lastUpdatedAt:1727607766e3,sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_class_name:"sidebar-item--wip"},sidebar:"guidesSidebar",previous:{title:"\u30c7\u30bb\u30b0\u30e1\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3",permalink:"/ja/docs/guides/issues/desegmented"},next:{title:"\u30af\u30ed\u30b9\u30a4\u30f3\u30dd\u30fc\u30c8",permalink:"/ja/docs/guides/issues/cross-imports"}},c={},u=[...r.RM,{value:"\u72b6\u6cc1",id:"situation",level:2},{value:"\u554f\u984c",id:"problem",level:2},{value:"\u7121\u8996\u3059\u308b\u5834\u5408",id:"if-you-ignore-it",level:2},{value:"\u89e3\u6c7a\u7b56",id:"solution",level:2}];function l(e){const i={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0",children:"\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0"})}),"\n",(0,t.jsx)(r.Ay,{ticket:"169"}),"\n",(0,t.jsx)(i.h2,{id:"situation",children:"\u72b6\u6cc1"}),"\n",(0,t.jsx)(i.p,{children:"\u30da\u30fc\u30b8\u3078\u306eURL\u304c\u3001pages\u5c64\u3088\u308a\u4e0b\u306e\u5c64\u306b\u30cf\u30fc\u30c9\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u3055\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-tsx",metastring:'title="entities/post/card"',children:"\n<Card>\n    <Card.Title \n        href={`/post/${data.id}`}\n        title={data.name}\n    />\n    ...\n</Card>\n"})}),"\n",(0,t.jsx)(i.h2,{id:"problem",children:"\u554f\u984c"}),"\n",(0,t.jsx)(i.p,{children:"URL\u304c\u30da\u30fc\u30b8\u5c64\u306b\u96c6\u4e2d\u3057\u3066\u304a\u3089\u305a\u3001\u8cac\u4efb\u7bc4\u56f2\u306b\u304a\u3044\u3066\u9069\u5207\u306a\u5834\u6240\u306b\u914d\u7f6e\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002"}),"\n",(0,t.jsx)(i.h2,{id:"if-you-ignore-it",children:"\u7121\u8996\u3059\u308b\u5834\u5408"}),"\n",(0,t.jsx)(i.p,{children:"URL\u3092\u5909\u66f4\u3059\u308b\u969b\u306b\u3001URL\uff08\u304a\u3088\u3073URL/\u30ea\u30c0\u30a4\u30ec\u30af\u30c8\u306e\u30ed\u30b8\u30c3\u30af\uff09\u304cpages\u5c64\u4ee5\u5916\u306e\u3059\u3079\u3066\u306e\u5c64\u306b\u5b58\u5728\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u3053\u3068\u3092\u8003\u616e\u3057\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002"}),"\n",(0,t.jsx)(i.p,{children:"\u307e\u305f\u3001\u3053\u308c\u306f\u5358\u7d14\u306a\u5546\u54c1\u30ab\u30fc\u30c9\u3067\u3055\u3048\u3001\u30da\u30fc\u30b8\u304b\u3089\u306e\u4e00\u90e8\u306e\u8cac\u4efb\u3092\u5f15\u304d\u53d7\u3051\u308b\u3053\u3068\u3092\u610f\u5473\u3057\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5168\u4f53\u306b\u30ed\u30b8\u30c3\u30af\u304c\u5206\u6563\u3057\u3066\u3057\u307e\u3044\u307e\u3059\u3002"}),"\n",(0,t.jsx)(i.h2,{id:"solution",children:"\u89e3\u6c7a\u7b56"}),"\n",(0,t.jsx)(i.p,{children:"URL\u3084\u30ea\u30c0\u30a4\u30ec\u30af\u30c8\u306e\u51e6\u7406\u3092\u30da\u30fc\u30b8\u5c64\u304a\u3088\u3073\u305d\u308c\u4ee5\u4e0a\u306e\u5c64\u3067\u5b9a\u7fa9\u3059\u308b\u3053\u3068\u3067\u3059\u3002"}),"\n",(0,t.jsx)(i.p,{children:"URL\u3092\u4e0b\u5c64\u306e\u5c64\u306b\u306f\u3001\u30b3\u30f3\u30dd\u30b8\u30b7\u30e7\u30f3/\u30d7\u30ed\u30d1\u30c6\u30a3/\u30d5\u30a1\u30af\u30c8\u30ea\u30fc\u3092\u901a\u3058\u3066\u6e21\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"})]})}function p(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1100:(e,i,s)=>{s.d(i,{R:()=>d,x:()=>o});var t=s(758);const n={},r=t.createContext(n);function d(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);