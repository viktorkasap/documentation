"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[2082],{1867:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>t,toc:()=>o});var i=s(6070),r=s(1100);const l={},c="\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u5206\u96e2",t={id:"reference/isolation/index",title:"\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u5206\u96e2",description:"FSD\u306e\u67a0\u7d44\u307f\u306e\u4e2d\u3067\u3001\u3059\u3079\u3066\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u306f\u8cac\u4efb\u306e\u9818\u57df\uff08\u30ec\u30a4\u30e4\u30fc\u3001\u30b9\u30e9\u30a4\u30b9\u3001\u30bb\u30b0\u30e1\u30f3\u30c8\uff09\u306b\u5206\u914d\u3055\u308c\u3066\u3044\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/reference/isolation/index.md",sourceDirName:"reference/isolation",slug:"/reference/isolation/",permalink:"/ja/docs/reference/isolation/",draft:!1,unlisted:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/ja/docusaurus-plugin-content-docs/current/reference/isolation/index.md",tags:[],version:"current",lastUpdatedAt:1727607766e3,frontMatter:{},sidebar:"referenceSidebar",previous:{title:"\u516c\u958bAPI",permalink:"/ja/docs/reference/public-api"},next:{title:"\u4f4e\u7d50\u5408\u3068\u9ad8\u51dd\u96c6",permalink:"/ja/docs/reference/isolation/coupling-cohesion"}},d={},o=[{value:"\u8981\u4ef6",id:"requirements",level:2},{value:"\u30eb\u30fc\u30eb",id:"rule",level:2},{value:"\u554f\u984c\u306e\u7279\u5b9a",id:"identifying-problems",level:2},{value:"\u53c2\u7167",id:"see-also",level:2}];function h(n){const e={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u5206\u96e2",children:"\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u5206\u96e2"})}),"\n",(0,i.jsx)(e.p,{children:"FSD\u306e\u67a0\u7d44\u307f\u306e\u4e2d\u3067\u3001\u3059\u3079\u3066\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u306f\u8cac\u4efb\u306e\u9818\u57df\uff08\u30ec\u30a4\u30e4\u30fc\u3001\u30b9\u30e9\u30a4\u30b9\u3001\u30bb\u30b0\u30e1\u30f3\u30c8\uff09\u306b\u5206\u914d\u3055\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u30ec\u30a4\u30e4\u30fc\u306f\u7e26\u306b\u7d44\u7e54\u3055\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:'"\u4e0b\u5c64"\u306b\u306f\u518d\u5229\u7528\u53ef\u80fd\u306a\u30e2\u30b8\u30e5\u30fc\u30eb\uff08ui-kit\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u5185\u90e8\u30e9\u30a4\u30d6\u30e9\u30ea\uff09\u304c\u3042\u308a\u3001\u6700\u3082\u62bd\u8c61\u7684\u3067\u3059\u3002'}),"\n",(0,i.jsx)(e.li,{children:'"\u4e0a\u5c64"\u306b\u9032\u3080\u306b\u3064\u308c\u3066\u3001\u3088\u308a\u7279\u5b9a\u7684\u306a\u30e2\u30b8\u30e5\u30fc\u30eb\u304c\u914d\u7f6e\u3055\u308c\u307e\u3059\u3002'}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u3069\u306e\u30b9\u30e9\u30a4\u30b9\u306b\u5c5e\u3057\u3066\u3044\u3066\u3082\u3001\u5404\u30e2\u30b8\u30e5\u30fc\u30eb\u306f",(0,i.jsx)(e.a,{href:"/docs/reference/public-api",children:(0,i.jsx)(e.strong,{children:"\u516c\u958b\u30a2\u30af\u30bb\u30b9\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3092\u63d0\u4f9b\u3059\u308b\u7fa9\u52d9\u304c\u3042\u308a\u307e\u3059"})}),"\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"requirements",children:"\u8981\u4ef6"}),"\n",(0,i.jsx)(e.p,{children:"\u5404\u30e2\u30b8\u30e5\u30fc\u30eb\u304c\u4ed6\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u76f8\u4e92\u4f5c\u7528\u3059\u308b\u969b\u306b\u306f\u3001\u3044\u304f\u3064\u304b\u306e\u8981\u4ef6\u3092\u8003\u616e\u3057\u3066\u8a2d\u8a08\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u4ed6\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u3068\u306e\u5f31\u3044\u7d50\u5408"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.em,{children:"1\u3064\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u5909\u66f4\u306f\u3001\u4ed6\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u306b\u5bfe\u3057\u3066\u5f31\u304f\u4e88\u6e2c\u53ef\u80fd\u306a\u5f71\u97ff\u3092\u4e0e\u3048\u308b\u3079\u304d\u3067\u3059\u3002"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u9ad8\u3044\u7d50\u5408\u6027"})," - \u5404\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u8cac\u4efb\u306f\u300c1\u3064\u306e\u30bf\u30b9\u30af\u300d\u306b\u7126\u70b9\u3092\u5f53\u3066\u3066\u3044\u307e\u3059\u3002","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.em,{children:"\u30e2\u30b8\u30e5\u30fc\u30eb\u304c\u3042\u307e\u308a\u306b\u3082\u591a\u304f\u306e\u8cac\u4efb\u3092\u6301\u3064\u5834\u5408\uff08\u300c\u3084\u308a\u3059\u304e\u308b\u300d\u5834\u5408\uff09\u3001\u305d\u308c\u306f\u3067\u304d\u308b\u3060\u3051\u65e9\u304f\u8a8d\u8b58\u3055\u308c\u308b\u3079\u304d\u3067\u3059\u3002"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5168\u4f53\u3067\u306e\u5faa\u74b0\u4f9d\u5b58\u306e\u4e0d\u5728"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.em,{children:"\u3053\u308c\u306f\u3057\u3070\u3057\u3070\u4e88\u671f\u3057\u306a\u3044\u671b\u307e\u3057\u304f\u306a\u3044\u52d5\u4f5c\u3092\u5f15\u304d\u8d77\u3053\u3059\u305f\u3081\u3001\u5b8c\u5168\u306b\u907f\u3051\u308b\u3079\u304d\u3067\u3059\u3002"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"rule",children:"\u30eb\u30fc\u30eb"}),"\n",(0,i.jsx)(e.p,{children:"\u3053\u308c\u3089\u306e\u8981\u4ef6\u3092\u6e80\u305f\u3059\u305f\u3081\u306b\u3001\u65b9\u6cd5\u8ad6\u306e\u67a0\u7d44\u307f\u306e\u4e2d\u3067\u57fa\u672c\u7684\u306a\u30eb\u30fc\u30eb\u3092\u5b88\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,i.jsx)(e.admonition,{title:"\u91cd\u8981",type:"info",children:(0,i.jsx)(e.p,{children:"\u30e2\u30b8\u30e5\u30fc\u30eb\u306f\u300c\u4e0b\u5c64\u300d\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u306b\u306e\u307f\u4f9d\u5b58\u3067\u304d\u3001\u540c\u3058\u5c64\u307e\u305f\u306f\u305d\u308c\u4ee5\u4e0a\u306e\u5c64\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u306b\u306f\u4f9d\u5b58\u3067\u304d\u307e\u305b\u3093\u3002"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"features/auth"})," ",(0,i.jsx)(e.strong,{children:"\u306f"})," ",(0,i.jsx)(e.code,{children:"features/filters"})," ",(0,i.jsx)(e.strong,{children:"\u306b\u4f9d\u5b58\u3067\u304d\u307e\u305b\u3093"})," ",(0,i.jsx)(e.strong,{children:"\u3057\u3001\u9006\u3082\u540c\u69d8\u3067\u3059\u3002"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"features/auth"})," ",(0,i.jsx)(e.strong,{children:"\u306f"})," ",(0,i.jsx)(e.code,{children:"shared/ui/button"})," ",(0,i.jsx)(e.strong,{children:"\u306b\u4f9d\u5b58\u3067\u304d\u307e\u3059\u304c\u3001\u9006\u306f\u3067\u304d\u307e\u305b\u3093\u3002"})]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u3053\u306e\u30eb\u30fc\u30eb\u306b\u5f93\u3046\u3053\u3068\u3067\u3001\u4f9d\u5b58\u95a2\u4fc2\u3092**\u300c\u4e00\u65b9\u5411\u300d\u306b\u4fdd\u3064",(0,i.jsx)(e.strong,{children:"\u3053\u3068\u304c\u3067\u304d\u3001\u3053\u308c\u306b\u3088\u308a"}),"\u5faa\u74b0\u30a4\u30f3\u30dd\u30fc\u30c8\u3092\u81ea\u52d5\u7684\u306b\u6392\u9664\u3057**\u3001\u30e2\u30b8\u30e5\u30fc\u30eb\u9593\u306e\u4f9d\u5b58\u95a2\u4fc2\u306e\u8ffd\u8de1\u3092\u5927\u5e45\u306b",(0,i.jsx)(e.strong,{children:"\u7c21\u7d20\u5316"}),"\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"identifying-problems",children:"\u554f\u984c\u306e\u7279\u5b9a"}),"\n",(0,i.jsx)(e.p,{children:"\u3053\u306e\u30eb\u30fc\u30eb\u306e\u9055\u53cd\u306f\u554f\u984c\u306e\u4fe1\u53f7\u3067\u3059\u3002"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\u30e2\u30b8\u30e5\u30fc\u30eb\u304c\u81ea\u5c64\u306e\u4ed6\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u304b\u3089",(0,i.jsx)(e.strong,{children:"\u30a4\u30f3\u30dd\u30fc\u30c8\u3092\u6301\u3064"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u30e2\u30b8\u30e5\u30fc\u30eb\u304c",(0,i.jsx)(e.strong,{children:"\u904e\u5270\u306b\u7d30\u5206\u5316\u3055\u308c\u3066\u3044\u308b"}),"\u304b\u3001",(0,i.jsx)(e.strong,{children:"\u4f59\u5206\u306a\u8cac\u4efb\u3092\u6301\u3063\u3066\u3044\u308b"}),"\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["\u30a4\u30f3\u30dd\u30fc\u30c8\u3055\u308c\u305f\u30e2\u30b8\u30e5\u30fc\u30eb\u3068",(0,i.jsx)(e.strong,{children:"\u7d71\u5408\u3059\u308b"}),"\u304b\u3001",(0,i.jsx)(e.strong,{children:"\u90e8\u5206\u7684\u307e\u305f\u306f\u5b8c\u5168\u306b\u4e0b\u5c64\u306b\u79fb\u52d5\u3059\u308b"}),"\u304b\u3001\u4e0a\u5c64\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u306b\u4f9d\u5b58\u95a2\u4fc2\u306e\u30ed\u30b8\u30c3\u30af\u3092\u79fb\u52d5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\u30e2\u30b8\u30e5\u30fc\u30eb\u304c\u81ea\u5c64\u306e\u591a\u304f\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u304b\u3089",(0,i.jsx)(e.strong,{children:"\u30a4\u30f3\u30dd\u30fc\u30c8\u3055\u308c\u308b"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u30e2\u30b8\u30e5\u30fc\u30eb\u304c",(0,i.jsx)(e.strong,{children:"\u4f59\u5206\u306a\u8cac\u4efb\u3092\u6301\u3063\u3066\u3044\u308b"}),"\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u90e8\u5206\u7684\u307e\u305f\u306f\u5b8c\u5168\u306b\u4e0b\u5c64\u306b\u79fb\u52d5\u3059\u308b"}),"\u304b\u3001\u4e0a\u5c64\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u306b\u4f9d\u5b58\u95a2\u4fc2\u306e\u30ed\u30b8\u30c3\u30af\u3092\u79fb\u52d5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\u30e2\u30b8\u30e5\u30fc\u30eb\u304c\u81ea\u5c64\u306e\u591a\u304f\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u304b\u3089",(0,i.jsx)(e.strong,{children:"\u30a4\u30f3\u30dd\u30fc\u30c8\u3092\u6301\u3064"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u30e2\u30b8\u30e5\u30fc\u30eb\u304c",(0,i.jsx)(e.strong,{children:"\u5225\u306e\u8cac\u4efb\u9818\u57df\u306b\u5c5e\u3057\u3066\u3044\u308b"}),"\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u90e8\u5206\u7684\u307e\u305f\u306f\u5b8c\u5168\u306b\u4e0a\u5c64\u306b\u79fb\u52d5\u3059\u308b"}),"\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"see-also",children:"\u53c2\u7167"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"/docs/reference/isolation/coupling-cohesion",children:"(\u30ac\u30a4\u30c9) \u4f4e\u3044\u7d50\u5408\u6027\u306e\u9054\u6210\u306b\u3064\u3044\u3066"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://github.com/feature-sliced/documentation/discussions/49",children:"(\u30c7\u30a3\u30b9\u30ab\u30c3\u30b7\u30e7\u30f3) \u65b9\u6cd5\u8ad6\u306b\u304a\u3051\u308b\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3068\u305d\u306e\u7d50\u5408\u6027"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://github.com/feature-sliced/documentation/discussions/65#discussioncomment-480822",children:"(\u30c7\u30a3\u30b9\u30ab\u30c3\u30b7\u30e7\u30f3) \u30af\u30ed\u30b9\u30a4\u30f3\u30dd\u30fc\u30c8\u3068\u4f9d\u5b58\u95a2\u4fc2\u306e\u5206\u6790\u306b\u3064\u3044\u3066"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsxs)(e.a,{href:"https://ru.wikipedia.org/wiki/GRASP",children:["\u30d1\u30bf\u30fc\u30f3 ",(0,i.jsx)(e.strong,{children:"GRASP"})]})}),"\n"]})]})}function x(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},1100:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>t});var i=s(758);const r={},l=i.createContext(r);function c(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);