"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[4717],{6229:(e,n,i)=>{i.d(n,{ZP:()=>l});var t=i(1527),s=i(6736),o=(i(959),i(646)),r=i(7022);const a=e=>{let{ticket:n}=e;const i=`https://github.com/feature-sliced/documentation/issues/${n}`;return(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:(0,r.I)({id:"shared.wip.title"})}),(0,t.jsx)("p",{children:(0,r.I)({id:"shared.wip.subtitle"})}),(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,r.I)({id:"shared.wip.var.feedback.base"}),(0,t.jsx)(o.Z,{to:i,children:(0,r.I)({id:"shared.wip.var.feedback.link"})})]}),(0,t.jsxs)("li",{children:[(0,r.I)({id:"shared.wip.var.material.base"}),(0,t.jsx)(o.Z,{to:"https://t.me/feature_sliced",children:(0,r.I)({id:"shared.wip.var.material.link"})})]}),(0,t.jsxs)("li",{children:[(0,r.I)({id:"shared.wip.var.contribute.base"}),(0,t.jsx)(o.Z,{to:"https://github.com/feature-sliced/documentation/blob/master/CONTRIBUTING.md",children:(0,r.I)({id:"shared.wip.var.contribute.link"})})]})]}),(0,t.jsx)("br",{}),(0,t.jsx)("p",{children:(0,t.jsx)("i",{children:"\ud83c\udf70 Stay tuned!"})})]})};function c(e){const n={admonition:"admonition",...(0,s.ah)(),...e.components};return(0,t.jsx)(n.admonition,{title:"WIP",type:"caution",children:(0,t.jsx)(a,{ticket:e.ticket})})}function l(e={}){const{wrapper:n}={...(0,s.ah)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},5088:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=i(1527),s=i(6736),o=i(6229);const r={sidebar_position:3,sidebar_class_name:"sidebar-item--wip"},a="Migration from legacy",c={id:"guides/migration/from-legacy",title:"Migration from legacy",description:"The article aggregates the experience of several companies and projects on moving to Feature-Sliced Design with different initial conditions",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guides/migration/from-legacy.mdx",sourceDirName:"guides/migration",slug:"/guides/migration/from-legacy",permalink:"/docs/guides/migration/from-legacy",draft:!1,unlisted:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/guides/migration/from-legacy.mdx",tags:[],version:"current",lastUpdatedAt:1712170248,formattedLastUpdatedAt:"Apr 3, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_class_name:"sidebar-item--wip"},sidebar:"guidesSidebar",previous:{title:"SSR",permalink:"/docs/guides/examples/ssr"},next:{title:"Migration from v1",permalink:"/docs/guides/migration/from-v1"}},l={},d=[{value:"Why?",id:"why",level:2},{value:"What&#39;s the plan?",id:"whats-the-plan",level:2},{value:"1. Unification of the code base",id:"1-unification-of-the-code-base",level:3},{value:"2. Putting together the destructive decoupled",id:"2-putting-together-the-destructive-decoupled",level:3},{value:"3. Allocate scopes of responsibility",id:"3-allocate-scopes-of-responsibility",level:3},{value:"4. Final ?",id:"4-final-",level:3},{value:"See also",id:"see-also",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"migration-from-legacy",children:"Migration from legacy"}),"\n",(0,t.jsx)(o.ZP,{ticket:"166"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"The article aggregates the experience of several companies and projects on moving to Feature-Sliced Design with different initial conditions"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"why",children:"Why?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:'How much does the move need? "Death by a thousand cuts" and those debt. What is missing? How can the methodology help?'}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["See the talk of ",(0,t.jsx)(n.a,{href:"http://youtu.be/aOiJ3k2UvO4",children:"Ilya Klimov about the need and procedure for refactoring"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"approaches-themed-bordered",src:i(7398).Z+"",width:"1572",height:"857"})}),"\n",(0,t.jsx)(n.h2,{id:"whats-the-plan",children:"What's the plan?"}),"\n",(0,t.jsx)(n.h3,{id:"1-unification-of-the-code-base",children:"1. Unification of the code base"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:"- \u251c\u2500\u2500 products/\n- |   \u251c\u2500\u2500 components/\n- |   \u251c\u2500\u2500 containers/\n- |   \u251c\u2500\u2500 store/\n- |   \u251c\u2500\u2500 styles/\n- \u251c\u2500\u2500 checkout/\n- |   \u251c\u2500\u2500 components/\n- |   \u251c\u2500\u2500 containers/\n- |   \u251c\u2500\u2500 helpers/\n- |   \u251c\u2500\u2500 styles/\n+ \u2514\u2500\u2500 src/\n      \u251c\u2500\u2500 actions/\n      \u251c\u2500\u2500 api/\n+     \u251c\u2500\u2500 components/\n+     \u251c\u2500\u2500 containers/\n      \u251c\u2500\u2500 constants/\n      \u251c\u2500\u2500 epics/\n+     \u251c\u2500\u2500 i18n/\n      \u251c\u2500\u2500 modules/\n+     \u251c\u2500\u2500 helpers/\n+     \u251c\u2500\u2500 pages/\n-     \u251c\u2500\u2500 routes/\n-     \u251c\u2500\u2500 utils/\n      \u251c\u2500\u2500 reducers/\n-     \u251c\u2500\u2500 redux/\n      \u251c\u2500\u2500 selectors/\n+     \u251c\u2500\u2500 store\n+     \u251c\u2500\u2500 styles/\n      \u251c\u2500\u2500 App.jsx\n      \u2514\u2500\u2500 index.jsx\n"})}),"\n",(0,t.jsx)(n.h3,{id:"2-putting-together-the-destructive-decoupled",children:"2. Putting together the destructive decoupled"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:"  \u2514\u2500\u2500 src/\n-     \u251c\u2500\u2500 actions/\n      \u251c\u2500\u2500 api/\n-     \u251c\u2500\u2500 components/\n-     \u251c\u2500\u2500 containers/\n-     \u251c\u2500\u2500 constants/\n-     \u251c\u2500\u2500 epics/\n+     \u251c\u2500\u2500 entities/{...}\n+     |     \u251c\u2500\u2500 ui\n+     |     \u251c\u2500\u2500 model/{actions, selectors, ...}\n+     |     \u251c\u2500\u2500 lib\n      \u251c\u2500\u2500 i18n/\n      |   # We can temporarily put the remaining segments here\n+     \u251c\u2500\u2500 modules/{helpers, constants}\n-     \u251c\u2500\u2500 helpers/\n      \u251c\u2500\u2500 pages/\n-     \u251c\u2500\u2500 reducers/\n-     \u251c\u2500\u2500 selectors/\n-     \u251c\u2500\u2500 store/\n      \u251c\u2500\u2500 styles/\n      \u251c\u2500\u2500 App.jsx\n      \u2514\u2500\u2500 index.jsx\n"})}),"\n",(0,t.jsx)(n.h3,{id:"3-allocate-scopes-of-responsibility",children:"3. Allocate scopes of responsibility"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:" \u2514\u2500\u2500 src/\n-    \u251c\u2500\u2500 api/\n+    \u251c\u2500\u2500 app/\n+    |   \u251c\u2500\u2500 index.jsx\n+    |   \u251c\u2500\u2500 style.css\n     \u251c\u2500\u2500 pages/\n+    \u251c\u2500\u2500 features/\n+    |   \u251c\u2500\u2500 add-to-cart/{ui, model, lib}\n+    |   \u251c\u2500\u2500 choose-delivery/{ui, model, lib}\n+    \u251c\u2500\u2500 entities/{...}\n+    |   \u251c\u2500\u2500 delivery/{ui, model, lib}\n+    |   \u251c\u2500\u2500 cart/{ui, model, lib}\n+    |   \u251c\u2500\u2500 product/{ui, model, lib}\n+    \u251c\u2500\u2500 shared/\n+    |   \u251c\u2500\u2500 api/\n+    |   \u251c\u2500\u2500 lib/    # helpers\n+    |   |    \u251c\u2500\u2500 i18n/\n+    |   \u251c\u2500\u2500 config/ # constants\n-    \u251c\u2500\u2500 i18n/\n-    \u251c\u2500\u2500 modules/{helpers, constants}\n     \u2514\u2500\u2500 index.jsx\n"})}),"\n",(0,t.jsx)(n.h3,{id:"4-final-",children:"4. Final ?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"About the remaining problems and how much it is worth eliminating them"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://youtu.be/aOiJ3k2UvO4",children:"(Talk) Ilya Klimov-The Rat Race of endless refactoring: how not to let technical debt kill motivation and product"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://youtu.be/SnzPAr_FJ7w",children:"(Talk) Ilya Azin - Architecture of Frontend projects"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"There is also discussed approaches for architecture and costs of refactoring"}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.ah)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},7398:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/approaches-a6bdea3f5ff95cb01c5d2e1dcaa69375.png"},6736:(e,n,i)=>{i.d(n,{ah:()=>o});var t=i(959);const s=t.createContext({});function o(e){const n=t.useContext(s);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}}}]);