"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[6823],{917:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>h,contentTitle:()=>d,default:()=>t,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var n=i(6070),l=i(1100);const r={sidebar_position:3,sidebar_label:"\u30ab\u30b9\u30bf\u30e0\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u304b\u3089\u306e\u79fb\u884c"},d="\u30ab\u30b9\u30bf\u30e0\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u304b\u3089\u306e\u79fb\u884c",c={id:"guides/migration/from-custom",title:"\u30ab\u30b9\u30bf\u30e0\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u304b\u3089\u306e\u79fb\u884c",description:"\u3053\u306e\u30ac\u30a4\u30c9\u306f\u3001\u30ab\u30b9\u30bf\u30e0\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u304b\u3089Feature-Sliced Design\u3078\u306e\u79fb\u884c\u306b\u5f79\u7acb\u3064\u30a2\u30d7\u30ed\u30fc\u30c1\u3092\u8aac\u660e\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/guides/migration/from-custom.md",sourceDirName:"guides/migration",slug:"/guides/migration/from-custom",permalink:"/ja/docs/guides/migration/from-custom",draft:!1,unlisted:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/ja/docusaurus-plugin-content-docs/current/guides/migration/from-custom.md",tags:[],version:"current",lastUpdatedAt:1727607766e3,sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"\u30ab\u30b9\u30bf\u30e0\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u304b\u3089\u306e\u79fb\u884c"},sidebar:"guidesSidebar",previous:{title:"\u30da\u30fc\u30b8\u30ec\u30a4\u30a2\u30a6\u30c8",permalink:"/ja/docs/guides/examples/page-layout"},next:{title:"v1\u304b\u3089\u306e\u79fb\u884c",permalink:"/ja/docs/guides/migration/from-v1"}},h={},o=[{value:"\u958b\u59cb\u524d\u306b",id:"before-you-start",level:2},{value:"\u30b9\u30c6\u30c3\u30d7\uff11\u3002\u30b3\u30fc\u30c9\u3092\u30da\u30fc\u30b8\u3054\u3068\u306b\u5206\u5272\u3059\u308b",id:"divide-code-by-pages",level:2},{value:"\u30b9\u30c6\u30c3\u30d7\uff12\u3002 \u30da\u30fc\u30b8\u4ee5\u5916\u306e\u3059\u3079\u3066\u3092\u5206\u96e2\u3059\u308b",id:"separate-everything-else-from-pages",level:2},{value:"\u30b9\u30c6\u30c3\u30d7\uff13\u3002 \u30da\u30fc\u30b8\u9593\u306e\u30af\u30ed\u30b9\u30a4\u30f3\u30dd\u30fc\u30c8\u3092\u89e3\u6d88\u3059\u308b",id:"tackle-cross-imports-between-pages",level:2},{value:"\u30b9\u30c6\u30c3\u30d7\uff14\u3002 Shared\u5c64\u3092\u5206\u89e3\u3059\u308b",id:"unpack-shared-layer",level:2},{value:"\u30b9\u30c6\u30c3\u30d7\uff15\u3002 \u30b3\u30fc\u30c9\u3092\u6280\u8853\u7684\u306a\u76ee\u7684\u306b\u57fa\u3065\u3044\u3066\u6574\u7406\u3059\u308b",id:"organize-by-technical-purpose",level:2},{value:"\u4efb\u610f\u306e\u30b9\u30c6\u30c3\u30d7",id:"optional-steps",level:2},{value:"\u30b9\u30c6\u30c3\u30d7\uff16\u3002 \u8907\u6570\u306e\u30da\u30fc\u30b8\u3067\u4f7f\u7528\u3055\u308c\u308bRedux\u30b9\u30e9\u30a4\u30b9\u304b\u3089\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3/\u30d5\u30a3\u30fc\u30c1\u30e3\u30fc\u3092\u5f62\u6210\u3059\u308b",id:"form-entities-features-from-redux",level:3},{value:"\u30b9\u30c6\u30c3\u30d7\uff17\u3002 \u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u30ea\u30d5\u30a1\u30af\u30bf\u30ea\u30f3\u30b0\u3059\u308b",id:"refactor-your-modules",level:3},{value:"\u30b9\u30c6\u30c3\u30d78\u3002 <code>shared/ui</code>\u306bUI\u57fa\u76e4\u3092\u6b63\u3057\u304f\u5f62\u6210\u3059\u308b",id:"form-clean-ui-foundation",level:3}];function x(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components},{Details:i}=s;return i||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"\u30ab\u30b9\u30bf\u30e0\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u304b\u3089\u306e\u79fb\u884c",children:"\u30ab\u30b9\u30bf\u30e0\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u304b\u3089\u306e\u79fb\u884c"})}),"\n",(0,n.jsx)(s.p,{children:"\u3053\u306e\u30ac\u30a4\u30c9\u306f\u3001\u30ab\u30b9\u30bf\u30e0\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u304b\u3089Feature-Sliced Design\u3078\u306e\u79fb\u884c\u306b\u5f79\u7acb\u3064\u30a2\u30d7\u30ed\u30fc\u30c1\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(s.p,{children:"\u4ee5\u4e0b\u306f\u3001\u5178\u578b\u7684\u306a\u30ab\u30b9\u30bf\u30e0\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u306e\u30d5\u30a9\u30eb\u30c0\u69cb\u9020\u3067\u3059\u3002\u3053\u306e\u30ac\u30a4\u30c9\u3067\u306f\u3001\u3053\u308c\u3092\u4f8b\u3068\u3057\u3066\u4f7f\u7528\u3057\u307e\u3059\u3002\u30d5\u30a9\u30eb\u30c0\u306e\u5185\u5bb9\u304c\u898b\u3048\u308b\u3088\u3046\u306b\u3001\u30d5\u30a9\u30eb\u30c0\u306e\u6a2a\u306b\u3042\u308b\u9752\u3044\u77e2\u5370\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,n.jsxs)(i,{className:"file-tree",children:[(0,n.jsx)("summary",{children:"\ud83d\udcc1 src"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsxs)(i,{className:"file-tree",children:[(0,n.jsx)("summary",{children:"\ud83d\udcc1 actions"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"\ud83d\udcc1 product"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 order"})]})]})}),(0,n.jsx)("li",{children:"\ud83d\udcc1 api"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 components"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 containers"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 constants"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 i18n"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 modules"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 helpers"}),(0,n.jsx)("li",{children:(0,n.jsxs)(i,{className:"file-tree",children:[(0,n.jsx)("summary",{children:"\ud83d\udcc1 routes"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"\ud83d\udcc1 products.jsx"}),(0,n.jsx)("li",{children:"\ud83d\udcc4 products.[id].jsx"})]})]})}),(0,n.jsx)("li",{children:"\ud83d\udcc1 utils"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 reducers"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 selectors"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 styles"}),(0,n.jsx)("li",{children:"\ud83d\udcc4 App.jsx"}),(0,n.jsx)("li",{children:"\ud83d\udcc4 index.js"})]})]}),"\n",(0,n.jsx)(s.h2,{id:"before-you-start",children:"\u958b\u59cb\u524d\u306b"}),"\n",(0,n.jsx)(s.p,{children:"Feature-Sliced Design\u3078\u306e\u79fb\u884c\u3092\u691c\u8a0e\u3059\u308b\u969b\u306b\u3001\u30c1\u30fc\u30e0\u306b\u6700\u3082\u91cd\u8981\u306a\u8cea\u554f\u306f\u300c\u672c\u5f53\u306b\u5fc5\u8981\u304b\uff1f\u300d\u3067\u3059\u3002\u79c1\u305f\u3061\u306fFeature-Sliced Design\u304c\u597d\u304d\u3067\u3059\u304c\u3001\u3044\u304f\u3064\u304b\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f\u305d\u308c\u306a\u3057\u3067\u3046\u307e\u304f\u3044\u3051\u308b\u3053\u3068\u3092\u8a8d\u3081\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,n.jsx)(s.p,{children:"\u79fb\u884c\u3092\u691c\u8a0e\u3059\u3079\u304d\u7406\u7531\u306f\u3044\u304f\u3064\u304b\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"\u65b0\u3057\u3044\u30c1\u30fc\u30e0\u30e1\u30f3\u30d0\u30fc\u304c\u751f\u7523\u7684\u306a\u30ec\u30d9\u30eb\u306b\u9054\u3059\u308b\u306e\u304c\u96e3\u3057\u3044\u3068\u4e0d\u6e80\u3092\u8a00\u3046\u3002"}),"\n",(0,n.jsxs)(s.li,{children:["\u30b3\u30fc\u30c9\u306e\u4e00\u90e8\u3092\u5909\u66f4\u3059\u308b\u3068\u3001",(0,n.jsx)(s.strong,{children:"\u3057\u3070\u3057\u3070"}),"\u4ed6\u306e\u7121\u95a2\u4fc2\u306a\u90e8\u5206\u304c\u58ca\u308c\u308b\u3002"]}),"\n",(0,n.jsx)(s.li,{children:"\u5de8\u5927\u306a\u30b3\u30fc\u30c9\u30d9\u30fc\u30b9\u306e\u305f\u3081\u3001\u65b0\u3057\u3044\u6a5f\u80fd\u3092\u8ffd\u52a0\u3059\u308b\u306e\u304c\u96e3\u3057\u3044\u3002"}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"\u540c\u50da\u306e\u610f\u306b\u53cd\u3057\u3066FSD\u306b\u79fb\u884c\u3059\u308b\u3053\u3068\u306f\u907f\u3051\u3066\u304f\u3060\u3055\u3044"}),"\u3002\u305f\u3068\u3048\u3042\u306a\u305f\u304c\u30c1\u30fc\u30e0\u30ea\u30fc\u30c0\u30fc\u3067\u3042\u3063\u3066\u3082\u3001\u307e\u305a\u306f\u540c\u50da\u3092\u8aac\u5f97\u3057\u3001\u79fb\u884c\u306e\u5229\u70b9\u304c\u30b3\u30b9\u30c8\u3092\u4e0a\u56de\u308b\u3053\u3068\u3092\u7406\u89e3\u3055\u305b\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(s.p,{children:"\u307e\u305f\u3001\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u306e\u5909\u66f4\u306f\u3001\u77ac\u6642\u306b\u306f\u7d4c\u55b6\u9663\u306b\u306f\u898b\u3048\u306a\u3044\u3053\u3068\u3092\u899a\u3048\u3066\u304a\u3044\u3066\u304f\u3060\u3055\u3044\u3002\u59cb\u3081\u308b\u524d\u306b\u3001\u7d4c\u55b6\u9663\u304c\u79fb\u884c\u3092\u652f\u6301\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3001\u3053\u306e\u79fb\u884c\u304c\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u3069\u306e\u3088\u3046\u306b\u5f79\u7acb\u3064\u304b\u3092\u8aac\u660e\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,n.jsxs)(s.admonition,{type:"tip",children:[(0,n.jsx)(s.p,{children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u3092FSD\u306e\u6709\u7528\u6027\u306b\u7d0d\u5f97\u3055\u305b\u308b\u305f\u3081\u306e\u30a2\u30a4\u30c7\u30a2\u3092\u3044\u304f\u3064\u304b\u7d39\u4ecb\u3057\u307e\u3059\u3002"}),(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"FSD\u3078\u306e\u79fb\u884c\u306f\u6bb5\u968e\u7684\u306b\u884c\u3048\u308b\u305f\u3081\u3001\u65b0\u6a5f\u80fd\u306e\u958b\u767a\u3092\u6b62\u3081\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u3002"}),"\n",(0,n.jsx)(s.li,{children:"\u826f\u3044\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u306f\u3001\u65b0\u3057\u3044\u958b\u767a\u8005\u304c\u751f\u7523\u6027\u3092\u9054\u6210\u3059\u308b\u306e\u306b\u304b\u304b\u308b\u6642\u9593\u3092\u5927\u5e45\u306b\u77ed\u7e2e\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,n.jsx)(s.li,{children:"FSD\u306f\u6587\u66f8\u5316\u3055\u308c\u305f\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3067\u3042\u308b\u305f\u3081\u3001\u30c1\u30fc\u30e0\u306f\u72ec\u81ea\u306e\u6587\u66f8\u3092\u7dad\u6301\u3059\u308b\u305f\u3081\u306b\u5e38\u306b\u6642\u9593\u3092\u8cbb\u3084\u3059\u5fc5\u8981\u304c\u3042\u308a\u307e\u305b\u3093\u3002"}),"\n"]})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsxs)(s.p,{children:["\u3082\u3057\u79fb\u884c\u3092\u59cb\u3081\u308b\u6c7a\u65ad\u3092\u3057\u305f\u5834\u5408\u3001\u6700\u521d\u306b\u884c\u3046\u3079\u304d\u3053\u3068\u306f",(0,n.jsx)(s.code,{children:"\ud83d\udcc1 src"}),"\u306e\u30a8\u30a4\u30ea\u30a2\u30b9\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3067\u3059\u3002\u3053\u308c\u306f\u3001\u5f8c\u3067\u4e0a\u4f4d\u30d5\u30a9\u30eb\u30c0\u3092\u53c2\u7167\u3059\u308b\u306e\u306b\u4fbf\u5229\u3067\u3059\u3002\u4ee5\u964d\u306e\u30c6\u30ad\u30b9\u30c8\u3067\u306f\u3001",(0,n.jsx)(s.code,{children:"@"}),"\u3092",(0,n.jsx)(s.code,{children:"./src"}),"\u306e\u30a8\u30a4\u30ea\u30a2\u30b9\u3068\u3057\u3066\u6271\u3044\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(s.h2,{id:"divide-code-by-pages",children:"\u30b9\u30c6\u30c3\u30d7\uff11\u3002\u30b3\u30fc\u30c9\u3092\u30da\u30fc\u30b8\u3054\u3068\u306b\u5206\u5272\u3059\u308b"}),"\n",(0,n.jsxs)(s.p,{children:["\u307b\u3068\u3093\u3069\u306e\u30ab\u30b9\u30bf\u30e0\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u306f\u3001\u30ed\u30b8\u30c3\u30af\u306e\u30b5\u30a4\u30ba\u306b\u95a2\u4fc2\u306a\u304f\u3001\u3059\u3067\u306b\u30da\u30fc\u30b8\u3054\u3068\u306b\u5206\u5272\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3082\u3057",(0,n.jsx)(s.code,{children:"\ud83d\udcc1 pages"}),"\u304c\u3059\u3067\u306b\u5b58\u5728\u3059\u308b\u5834\u5408\u306f\u3001\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u3092\u30b9\u30ad\u30c3\u30d7\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u3082\u3057",(0,n.jsx)(s.code,{children:"\ud83d\udcc1 routes"}),"\u3057\u304b\u306a\u3044\u5834\u5408\u306f\u3001",(0,n.jsx)(s.code,{children:"\ud83d\udcc1 pages"}),"\u3092\u4f5c\u6210\u3057\u3001\u3067\u304d\u308b\u3060\u3051\u591a\u304f\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u30b3\u30fc\u30c9\u3092",(0,n.jsx)(s.code,{children:"\ud83d\udcc1 routes"}),"\u304b\u3089\u79fb\u52d5\u3055\u305b\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002\u7406\u60f3\u7684\u306b\u306f\u3001\u5c0f\u3055\u306a\u30eb\u30fc\u30c8\u30d5\u30a1\u30a4\u30eb\u3068\u5927\u304d\u306a\u30da\u30fc\u30b8\u30d5\u30a1\u30a4\u30eb\u304c\u3042\u308b\u3053\u3068\u3067\u3059\u3002\u30b3\u30fc\u30c9\u3092\u79fb\u52d5\u3055\u305b\u308b\u969b\u306b\u306f\u3001\u5404\u30da\u30fc\u30b8\u306e\u305f\u3081\u306e\u30d5\u30a9\u30eb\u30c0\u3092\u4f5c\u6210\u3057\u3001\u305d\u306e\u4e2d\u306b\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u30d5\u30a1\u30a4\u30eb\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsx)(s.p,{children:"\u73fe\u6642\u70b9\u3067\u306f\u3001\u30da\u30fc\u30b8\u540c\u58eb\u304c\u4e92\u3044\u306b\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b\u3053\u3068\u306f\u554f\u984c\u3042\u308a\u307e\u305b\u3093\u3002\u5f8c\u3067\u3053\u308c\u3089\u306e\u4f9d\u5b58\u95a2\u4fc2\u3092\u89e3\u6d88\u3059\u308b\u305f\u3081\u306e\u5225\u306e\u30b9\u30c6\u30c3\u30d7\u304c\u3042\u308a\u307e\u3059\u3002\u4eca\u306f\u30da\u30fc\u30b8\u3054\u3068\u306e\u660e\u78ba\u306a\u5206\u5272\u3092\u78ba\u7acb\u3059\u308b\u3053\u3068\u306b\u96c6\u4e2d\u3057\u307e\u3059\u3002"})}),"\n",(0,n.jsx)(s.p,{children:"\u30eb\u30fc\u30c8\u30d5\u30a1\u30a4\u30eb"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",metastring:'title="src/routes/products.[id].js"',children:'export { ProductPage as default } from "@/pages/product"\n'})}),"\n",(0,n.jsx)(s.p,{children:"\u30da\u30fc\u30b8\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u30d5\u30a1\u30a4\u30eb"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",metastring:'title="src/pages/product/index.js"',children:'export { ProductPage } from "./ProductPage.jsx"\n'})}),"\n",(0,n.jsx)(s.p,{children:"\u30da\u30fc\u30b8\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u30d5\u30a1\u30a4\u30eb"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-jsx",metastring:'title="src/pages/product/ProductPage.jsx"',children:"export function ProductPage(props) {\n  return <div />;\n}\n"})}),"\n",(0,n.jsx)(s.h2,{id:"separate-everything-else-from-pages",children:"\u30b9\u30c6\u30c3\u30d7\uff12\u3002 \u30da\u30fc\u30b8\u4ee5\u5916\u306e\u3059\u3079\u3066\u3092\u5206\u96e2\u3059\u308b"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"\ud83d\udcc1 src/shared"}),"\u30d5\u30a9\u30eb\u30c0\u3092\u4f5c\u6210\u3057\u3001",(0,n.jsx)(s.code,{children:"\ud83d\udcc1 pages"}),"\u3084",(0,n.jsx)(s.code,{children:"\ud83d\udcc1 routes"}),"\u304b\u3089\u30a4\u30f3\u30dd\u30fc\u30c8\u3055\u308c\u306a\u3044\u3059\u3079\u3066\u3092\u305d\u3053\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002",(0,n.jsx)(s.code,{children:"\ud83d\udcc1 src/app"}),"\u30d5\u30a9\u30eb\u30c0\u3092\u4f5c\u6210\u3057\u3001\u30da\u30fc\u30b8\u3084\u30eb\u30fc\u30c8\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b\u3059\u3079\u3066\u3092\u305d\u3053\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(s.p,{children:"Shared\u5c64\u306b\u306f\u30b9\u30e9\u30a4\u30b9\u304c\u306a\u3044\u3053\u3068\u3092\u899a\u3048\u3066\u304a\u3044\u3066\u304f\u3060\u3055\u3044\u3002\u3057\u305f\u304c\u3063\u3066\u3001\u30bb\u30b0\u30e1\u30f3\u30c8\u306f\u4e92\u3044\u306b\u30a4\u30f3\u30dd\u30fc\u30c8\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,n.jsx)(s.p,{children:"\u6700\u7d42\u7684\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306a\u30d5\u30a1\u30a4\u30eb\u69cb\u9020\u306b\u306a\u308b\u306f\u305a\u3067\u3059\u3002"}),"\n",(0,n.jsxs)(i,{className:"file-tree",open:!0,children:[(0,n.jsx)("summary",{children:"\ud83d\udcc1 src"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsxs)(i,{className:"file-tree",children:[(0,n.jsx)("summary",{children:"\ud83d\udcc1 app"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsxs)(i,{className:"file-tree",children:[(0,n.jsx)("summary",{children:"\ud83d\udcc1 routes"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"\ud83d\udcc4 products.jsx"}),(0,n.jsx)("li",{children:"\ud83d\udcc4 products.[id].jsx"})]})]})}),(0,n.jsx)("li",{children:"\ud83d\udcc4 App.jsx"}),(0,n.jsx)("li",{children:"\ud83d\udcc4 index.js"})]})]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(i,{className:"file-tree",children:[(0,n.jsx)("summary",{children:"\ud83d\udcc1 pages"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsxs)(i,{className:"file-tree",children:[(0,n.jsx)("summary",{children:"\ud83d\udcc1 product"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsxs)(i,{className:"file-tree",children:[(0,n.jsx)("summary",{children:"\ud83d\udcc1 ui"}),(0,n.jsx)("ul",{children:(0,n.jsx)("li",{children:"\ud83d\udcc4 ProductPage.jsx"})})]})}),(0,n.jsx)("li",{children:"\ud83d\udcc4 index.js"})]})]})}),(0,n.jsx)("li",{children:"\ud83d\udcc1 catalog"})]})]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(i,{className:"file-tree",children:[(0,n.jsx)("summary",{children:"\ud83d\udcc1 shared"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"\ud83d\udcc1 actions"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 api"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 components"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 containers"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 constants"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 i18n"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 modules"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 helpers"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 utils"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 reducers"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 selectors"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 styles"})]})]})})]})]}),"\n",(0,n.jsx)(s.h2,{id:"tackle-cross-imports-between-pages",children:"\u30b9\u30c6\u30c3\u30d7\uff13\u3002 \u30da\u30fc\u30b8\u9593\u306e\u30af\u30ed\u30b9\u30a4\u30f3\u30dd\u30fc\u30c8\u3092\u89e3\u6d88\u3059\u308b"}),"\n",(0,n.jsx)(s.p,{children:"\u3042\u308b\u30da\u30fc\u30b8\u304c\u4ed6\u306e\u30da\u30fc\u30b8\u304b\u3089\u4f55\u304b\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3066\u3044\u308b\u3059\u3079\u3066\u306e\u7b87\u6240\u3092\u898b\u3064\u3051\u3001\u6b21\u306e\u3044\u305a\u308c\u304b\u3092\u884c\u3044\u307e\u3059\u3002"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"\u30a4\u30f3\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u30b3\u30fc\u30c9\u3092\u4f9d\u5b58\u3059\u308b\u30da\u30fc\u30b8\u306b\u30b3\u30d4\u30fc\u3057\u3066\u3001\u4f9d\u5b58\u95a2\u4fc2\u3092\u53d6\u308a\u9664\u304f\u3002"}),"\n",(0,n.jsxs)(s.li,{children:["\u30b3\u30fc\u30c9\u3092Shared\u5c64\u306e\u9069\u5207\u306a\u30bb\u30b0\u30e1\u30f3\u30c8\u306b\u79fb\u52d5\u3059\u308b","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["UI\u30ad\u30c3\u30c8\u306e\u4e00\u90e8\u3067\u3042\u308c\u3070\u3001",(0,n.jsx)(s.code,{children:"\ud83d\udcc1 shared/ui"}),"\u306b\u79fb\u52d5\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:["\u8a2d\u5b9a\u306e\u5b9a\u6570\u3067\u3042\u308c\u3070\u3001",(0,n.jsx)(s.code,{children:"\ud83d\udcc1 shared/config"}),"\u306b\u79fb\u52d5\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:["\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3068\u306e\u3084\u308a\u53d6\u308a\u3067\u3042\u308c\u3070\u3001",(0,n.jsx)(s.code,{children:"\ud83d\udcc1 shared/api"}),"\u306b\u79fb\u52d5\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.admonition,{type:"note",children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"\u30b3\u30d4\u30fc\u81ea\u4f53\u306f\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u306e\u554f\u984c\u3067\u306f\u3042\u308a\u307e\u305b\u3093"}),"\u3002\u5b9f\u969b\u3001\u6642\u306b\u306f\u65b0\u3057\u3044\u518d\u5229\u7528\u53ef\u80fd\u306a\u30e2\u30b8\u30e5\u30fc\u30eb\u306b\u4f55\u304b\u3092\u62bd\u8c61\u5316\u3059\u308b\u3088\u308a\u3082\u3001\u4f55\u304b\u3092\u8907\u88fd\u3059\u308b\u65b9\u304c\u6b63\u3057\u3044\u5834\u5408\u3082\u3042\u308a\u307e\u3059\u3002\u30da\u30fc\u30b8\u306e\u5171\u901a\u90e8\u5206\u304c\u7570\u306a\u3063\u3066\u304f\u308b\u3053\u3068\u304c\u3042\u308b\u305f\u3081\u3001\u305d\u306e\u5834\u5408\u3001\u4f9d\u5b58\u95a2\u4fc2\u304c\u59a8\u3052\u306b\u306a\u3089\u306a\u3044\u3088\u3046\u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),(0,n.jsx)(s.p,{children:'\u305f\u3060\u3057\u3001DRY\uff08"don\'t repeat yourself" \u2014 "\u7e70\u308a\u8fd4\u3055\u306a\u3044"\uff09\u306e\u539f\u5247\u306b\u306f\u610f\u5473\u304c\u3042\u308b\u305f\u3081\u3001\u30d3\u30b8\u30cd\u30b9\u30ed\u30b8\u30c3\u30af\u3092\u30b3\u30d4\u30fc\u3057\u306a\u3044\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u305d\u3046\u3057\u306a\u3044\u3068\u3001\u30d0\u30b0\u3092\u8907\u6570\u306e\u7b87\u6240\u3067\u4fee\u6b63\u3059\u308b\u3053\u3068\u306b\u306a\u308b\u3053\u3068\u3092\u982d\u306b\u5165\u308c\u3066\u304a\u304f\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002'})]}),"\n",(0,n.jsx)(s.h2,{id:"unpack-shared-layer",children:"\u30b9\u30c6\u30c3\u30d7\uff14\u3002 Shared\u5c64\u3092\u5206\u89e3\u3059\u308b"}),"\n",(0,n.jsx)(s.p,{children:"\u3053\u306e\u6bb5\u968e\u3067\u306f\u3001Shared\u5c64\u306b\u591a\u304f\u306e\u3082\u306e\u304c\u5165\u3063\u3066\u3044\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u304c\u3001\u4e00\u822c\u7684\u306b\u306f\u305d\u306e\u3088\u3046\u306a\u72b6\u6cc1\u3092\u907f\u3051\u308b\u3079\u304d\u3067\u3059\u3002\u7406\u7531\u306f\u3001Shared\u5c64\u306b\u4f9d\u5b58\u3057\u3066\u3044\u308b\u4ed6\u306e\u5c64\u306b\u3042\u308b\u30b3\u30fc\u30c9\u304c\u5b58\u5728\u3057\u3066\u3044\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u305f\u3081\u3001\u305d\u3053\u306b\u5909\u66f4\u3092\u52a0\u3048\u308b\u3053\u3068\u306f\u4e88\u671f\u3057\u306a\u3044\u7d50\u679c\u3092\u5f15\u304d\u8d77\u3053\u3059\u53ef\u80fd\u6027\u304c\u9ad8\u304f\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,n.jsxs)(s.p,{children:["\u7279\u5b9a\u306e\u30da\u30fc\u30b8\u3067\u306e\u307f\u4f7f\u7528\u3055\u308c\u308b\u3059\u3079\u3066\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u898b\u3064\u3051\u3001\u305d\u308c\u3089\u3092\u305d\u306e\u30da\u30fc\u30b8\u306e\u30b9\u30e9\u30a4\u30b9\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002\u305d\u3057\u3066\u3001",(0,n.jsx)(s.em,{children:"\u3053\u308c\u306b\u306f\u30a2\u30af\u30b7\u30e7\u30f3\u3001\u30ea\u30c7\u30e5\u30fc\u30b5\u30fc\u3001\u30bb\u30ec\u30af\u30bf\u30fc\u3082\u542b\u307e\u308c\u307e\u3059"}),"\u3002\u3059\u3079\u3066\u306e\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u4e00\u7dd2\u306b\u30b0\u30eb\u30fc\u30d7\u5316\u3059\u308b\u3053\u3068\u306b\u306f\u610f\u5473\u304c\u3042\u308a\u307e\u305b\u3093\u304c\u3001\u95a2\u9023\u3059\u308b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u305d\u306e\u4f7f\u7528\u5834\u6240\u306e\u8fd1\u304f\u306b\u7f6e\u304f\u3053\u3068\u306b\u306f\u610f\u5473\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(s.p,{children:"\u6700\u7d42\u7684\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306a\u30d5\u30a1\u30a4\u30eb\u69cb\u9020\u306b\u306a\u308b\u306f\u305a\u3067\u3059\u3002"}),"\n",(0,n.jsxs)(i,{className:"file-tree",open:!0,children:[(0,n.jsx)("summary",{children:"\ud83d\udcc1 src"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"\ud83d\udcc1 app (\u5909\u66f4\u306a\u3057)"}),(0,n.jsx)("li",{children:(0,n.jsxs)(i,{className:"file-tree",open:!0,children:[(0,n.jsx)("summary",{children:"\ud83d\udcc1 pages"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsxs)(i,{className:"file-tree",open:!0,children:[(0,n.jsx)("summary",{children:"\ud83d\udcc1 product"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"\ud83d\udcc1 actions"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 reducers"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 selectors"}),(0,n.jsx)("li",{children:(0,n.jsxs)(i,{className:"file-tree",children:[(0,n.jsx)("summary",{children:"\ud83d\udcc1 ui"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"\ud83d\udcc4 Component.jsx"}),(0,n.jsx)("li",{children:"\ud83d\udcc4 Container.jsx"}),(0,n.jsx)("li",{children:"\ud83d\udcc4 ProductPage.jsx"})]})]})}),(0,n.jsx)("li",{children:"\ud83d\udcc4 index.js"})]})]})}),(0,n.jsx)("li",{children:"\ud83d\udcc1 catalog"})]})]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(i,{className:"file-tree",children:[(0,n.jsx)("summary",{children:"\ud83d\udcc1 shared (\u518d\u5229\u7528\u3055\u308c\u308b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u307f)"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"\ud83d\udcc1 actions"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 api"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 components"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 containers"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 constants"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 i18n"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 modules"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 helpers"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 utils"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 reducers"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 selectors"}),(0,n.jsx)("li",{children:"\ud83d\udcc1 styles"})]})]})})]})]}),"\n",(0,n.jsx)(s.h2,{id:"organize-by-technical-purpose",children:"\u30b9\u30c6\u30c3\u30d7\uff15\u3002 \u30b3\u30fc\u30c9\u3092\u6280\u8853\u7684\u306a\u76ee\u7684\u306b\u57fa\u3065\u3044\u3066\u6574\u7406\u3059\u308b"}),"\n",(0,n.jsxs)(s.p,{children:["FSD\u3067\u306f\u3001\u6280\u8853\u7684\u306a\u76ee\u7684\u306b\u57fa\u3065\u304f\u5206\u5272\u304c",(0,n.jsx)("i",{children:"\u30bb\u30b0\u30e1\u30f3\u30c8"}),"\u306b\u3088\u3063\u3066\u884c\u308f\u308c\u307e\u3059\u3002\u3088\u304f\u898b\u3089\u308c\u308b\u30bb\u30b0\u30e1\u30f3\u30c8\u306f\u3044\u304f\u3064\u304b\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"ui"})," \u2014 \u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u306e\u8868\u793a\u306b\u95a2\u9023\u3059\u308b\u3059\u3079\u3066: UI\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3001\u65e5\u4ed8\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3001\u30b9\u30bf\u30a4\u30eb\u306a\u3069\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"api"})," \u2014 \u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3068\u306e\u3084\u308a\u53d6\u308a: \u30ea\u30af\u30a8\u30b9\u30c8\u95a2\u6570\u3001\u30c7\u30fc\u30bf\u578b\u3001\u30de\u30c3\u30d1\u30fc\u306a\u3069\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"model"})," \u2014 \u30c7\u30fc\u30bf\u30e2\u30c7\u30eb: \u30b9\u30ad\u30fc\u30de\u3001\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3001\u30b9\u30c8\u30ec\u30fc\u30b8\u3001\u30d3\u30b8\u30cd\u30b9\u30ed\u30b8\u30c3\u30af\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"lib"})," \u2014 \u4ed6\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u306b\u5fc5\u8981\u306a\u30e9\u30a4\u30d6\u30e9\u30ea\u30b3\u30fc\u30c9\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"config"})," \u2014 \u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3084\u30d5\u30a3\u30fc\u30c1\u30e3\u30fc\u30d5\u30e9\u30b0\u3002"]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u72ec\u81ea\u306e\u30bb\u30b0\u30e1\u30f3\u30c8\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002\u305f\u3060\u3057\u3001\u30b3\u30fc\u30c9\u3092\u305d\u306e\u6027\u8cea\u306b\u3088\u3063\u3066\u30b0\u30eb\u30fc\u30d7\u5316\u3059\u308b\u30bb\u30b0\u30e1\u30f3\u30c8\uff08\u4f8b: ",(0,n.jsx)(s.code,{children:"components"}),"\u3001",(0,n.jsx)(s.code,{children:"actions"}),"\u3001",(0,n.jsx)(s.code,{children:"types"}),"\u3001",(0,n.jsx)(s.code,{children:"utils"}),"\uff09\u3092\u4f5c\u6210\u3057\u306a\u3044\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u4ee3\u308f\u308a\u306b\u3001\u30b3\u30fc\u30c9\u306e\u76ee\u7684\u306b\u57fa\u3065\u3044\u3066\u30b0\u30eb\u30fc\u30d7\u5316\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u30da\u30fc\u30b8\u306e\u30b3\u30fc\u30c9\u3092\u30bb\u30b0\u30e1\u30f3\u30c8\u306b\u518d\u5206\u914d\u3057\u307e\u3059\u3002\u3059\u3067\u306b",(0,n.jsx)(s.code,{children:"ui"}),"\u30bb\u30b0\u30e1\u30f3\u30c8\u304c\u3042\u308b\u306f\u305a\u306a\u306e\u3067\u3001\u4eca\u306f\u4ed6\u306e\u30bb\u30b0\u30e1\u30f3\u30c8\uff08\u4f8b\u3048\u3070\u3001\u30a2\u30af\u30b7\u30e7\u30f3\u3001\u30ea\u30c7\u30e5\u30fc\u30b5\u30fc\u3001\u30bb\u30ec\u30af\u30bf\u30fc\u306e\u305f\u3081\u306e",(0,n.jsx)(s.code,{children:"model"}),"\u3084\u3001\u30b5\u30f3\u30af\u3084\u30df\u30e5\u30fc\u30c6\u30fc\u30b7\u30e7\u30f3\u306e\u305f\u3081\u306e",(0,n.jsx)(s.code,{children:"api"}),"\uff09\u3092\u4f5c\u6210\u3059\u308b\u3068\u304d\u3067\u3059\u3002"]}),"\n",(0,n.jsx)(s.p,{children:"\u307e\u305f\u3001Shared\u5c64\u3092\u518d\u5206\u914d\u3057\u3066\u3001\u6b21\u306e\u30d5\u30a9\u30eb\u30c0\u3092\u524a\u9664\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"\ud83d\udcc1 components"}),"\u3001",(0,n.jsx)(s.code,{children:"\ud83d\udcc1 containers"})," \u2014 \u305d\u306e\u5185\u5bb9\u306e\u307b\u3068\u3093\u3069\u306f",(0,n.jsx)(s.code,{children:"\ud83d\udcc1 shared/ui"}),"\u306b\u306a\u308b\u3079\u304d\u3067\u3059\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"\ud83d\udcc1 helpers"}),"\u3001",(0,n.jsx)(s.code,{children:"\ud83d\udcc1 utils"})," \u2014 \u518d\u5229\u7528\u53ef\u80fd\u306a\u30d8\u30eb\u30d1\u30fc\u95a2\u6570\u304c\u6b8b\u3063\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u76ee\u7684\u306b\u57fa\u3065\u3044\u3066\u30b0\u30eb\u30fc\u30d7\u5316\u3057\u3001\u3053\u308c\u3089\u306e\u30b0\u30eb\u30fc\u30d7\u3092",(0,n.jsx)(s.code,{children:"\ud83d\udcc1 shared/lib"}),"\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"\ud83d\udcc1 constants"})," \u2014 \u540c\u69d8\u306b\u3001\u76ee\u7684\u306b\u57fa\u3065\u3044\u3066\u30b0\u30eb\u30fc\u30d7\u5316\u3057\u3001",(0,n.jsx)(s.code,{children:"\ud83d\udcc1 shared/config"}),"\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"optional-steps",children:"\u4efb\u610f\u306e\u30b9\u30c6\u30c3\u30d7"}),"\n",(0,n.jsx)(s.h3,{id:"form-entities-features-from-redux",children:"\u30b9\u30c6\u30c3\u30d7\uff16\u3002 \u8907\u6570\u306e\u30da\u30fc\u30b8\u3067\u4f7f\u7528\u3055\u308c\u308bRedux\u30b9\u30e9\u30a4\u30b9\u304b\u3089\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3/\u30d5\u30a3\u30fc\u30c1\u30e3\u30fc\u3092\u5f62\u6210\u3059\u308b"}),"\n",(0,n.jsx)(s.p,{children:"\u901a\u5e38\u3001\u3053\u308c\u3089\u306e\u518d\u5229\u7528\u53ef\u80fd\u306aRedux\u30b9\u30e9\u30a4\u30b9\u306f\u3001\u30d3\u30b8\u30cd\u30b9\u306b\u95a2\u9023\u3059\u308b\u4f55\u304b\u3092\u8aac\u660e\u3057\u307e\u3059\uff08\u4f8b\u3048\u3070\u3001\u30d7\u30ed\u30c0\u30af\u30c8\u3084\u30e6\u30fc\u30b6\u30fc\u306a\u3069\uff09\u3002\u3057\u305f\u304c\u3063\u3066\u3001\u305d\u308c\u3089\u3092\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u5c64\u306b\u79fb\u52d5\u3067\u304d\u307e\u3059\u30021\u3064\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306b\u3064\u304d1\u3064\u306e\u30d5\u30a9\u30eb\u30c0\u3067\u3059\u3002Redux\u30b9\u30e9\u30a4\u30b9\u304c\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u5b9f\u884c\u3057\u305f\u3044\u30a2\u30af\u30b7\u30e7\u30f3\u306b\u95a2\u9023\u3057\u3066\u3044\u308b\u5834\u5408\uff08\u4f8b\u3048\u3070\u3001\u30b3\u30e1\u30f3\u30c8\u306a\u3069\uff09\u3001\u305d\u308c\u3092\u30d5\u30a3\u30fc\u30c1\u30e3\u30fc\u5c64\u306b\u79fb\u52d5\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,n.jsxs)(s.p,{children:["\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3068\u30d5\u30a3\u30fc\u30c1\u30e3\u30fc\u306f\u4e92\u3044\u306b\u72ec\u7acb\u3057\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u30d3\u30b8\u30cd\u30b9\u9818\u57df\u306b\u7d44\u307f\u8fbc\u307e\u308c\u305f\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u9593\u306e\u95a2\u4fc2\u304c\u3042\u308b\u5834\u5408\u306f\u3001",(0,n.jsx)(s.a,{href:"/docs/guides/examples/types#business-entities-and-their-cross-references",children:"\u30d3\u30b8\u30cd\u30b9\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306b\u95a2\u3059\u308b\u30ac\u30a4\u30c9"}),"\u3092\u53c2\u7167\u3057\u3066\u3001\u3053\u308c\u3089\u306e\u95a2\u4fc2\u3092\u6574\u7406\u3059\u308b\u65b9\u6cd5\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u3053\u308c\u3089\u306e\u30b9\u30e9\u30a4\u30b9\u306b\u95a2\u9023\u3059\u308bAPI\u95a2\u6570\u306f\u3001",(0,n.jsx)(s.code,{children:"\ud83d\udcc1 shared/api"}),"\u306b\u6b8b\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(s.h3,{id:"refactor-your-modules",children:"\u30b9\u30c6\u30c3\u30d7\uff17\u3002 \u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u30ea\u30d5\u30a1\u30af\u30bf\u30ea\u30f3\u30b0\u3059\u308b"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"\ud83d\udcc1 modules"}),"\u30d5\u30a9\u30eb\u30c0\u306f\u901a\u5e38\u3001\u30d3\u30b8\u30cd\u30b9\u30ed\u30b8\u30c3\u30af\u306b\u4f7f\u7528\u3055\u308c\u308b\u305f\u3081\u3001\u3059\u3067\u306bFSD\u306e\u30d5\u30a3\u30fc\u30c1\u30e3\u30fc\u5c64\u306b\u4f3c\u305f\u6027\u8cea\u3092\u6301\u3063\u3066\u3044\u307e\u3059\u3002\u4e00\u90e8\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5927\u304d\u306a\u90e8\u5206\uff08\u4f8b\u3048\u3070\u3001\u30a2\u30d7\u30ea\u306e\u30d8\u30c3\u30c0\u30fc\u306a\u3069\uff09\u3092\u8aac\u660e\u3059\u308b\u3053\u3068\u3082\u3042\u308a\u307e\u3059\u3002\u3053\u306e\u5834\u5408\u3001\u305d\u308c\u3089\u3092\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u5c64\u306b\u79fb\u52d5\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,n.jsxs)(s.h3,{id:"form-clean-ui-foundation",children:["\u30b9\u30c6\u30c3\u30d78\u3002 ",(0,n.jsx)(s.code,{children:"shared/ui"}),"\u306bUI\u57fa\u76e4\u3092\u6b63\u3057\u304f\u5f62\u6210\u3059\u308b"]}),"\n",(0,n.jsxs)(s.p,{children:["\u7406\u60f3\u7684\u306b\u306f\u3001",(0,n.jsx)(s.code,{children:"\ud83d\udcc1 shared/ui"}),"\u306b\u306f\u30d3\u30b8\u30cd\u30b9\u30ed\u30b8\u30c3\u30af\u304c\u542b\u307e\u308c\u3066\u3044\u306a\u3044UI\u8981\u7d20\u306e\u30bb\u30c3\u30c8\u304c\u542b\u307e\u308c\u308b\u3079\u304d\u3067\u3059\u3002\u307e\u305f\u3001\u975e\u5e38\u306b\u518d\u5229\u7528\u53ef\u80fd\u3067\u3042\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u4ee5\u524d",(0,n.jsx)(s.code,{children:"\ud83d\udcc1 components"}),"\u3084",(0,n.jsx)(s.code,{children:"\ud83d\udcc1 containers"}),"\u306b\u3042\u3063\u305fUI\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u30ea\u30d5\u30a1\u30af\u30bf\u30ea\u30f3\u30b0\u3057\u3066\u3001\u30d3\u30b8\u30cd\u30b9\u30ed\u30b8\u30c3\u30af\u3092\u5206\u96e2\u3057\u307e\u3059\u3002\u3053\u306e\u30d3\u30b8\u30cd\u30b9\u30ed\u30b8\u30c3\u30af\u3092\u4e0a\u4f4d\u5c64\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002\u3042\u307e\u308a\u591a\u304f\u306e\u5834\u6240\u3067\u4f7f\u7528\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001\u30b3\u30d4\u30fc\u3092\u691c\u8a0e\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"]})]})}function t(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},1100:(e,s,i)=>{i.d(s,{R:()=>d,x:()=>c});var n=i(758);const l={},r=n.createContext(l);function d(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);