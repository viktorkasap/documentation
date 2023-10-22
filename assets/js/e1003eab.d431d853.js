"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[7799],{1109:(e,t,i)=>{i.d(t,{ZP:()=>l});var s=i(1527),n=i(6736),r=(i(959),i(8943)),o=i(4793);const a=e=>{let{ticket:t}=e;const i=`https://github.com/feature-sliced/documentation/issues/${t}`;return(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:(0,o.I)({id:"shared.wip.title"})}),(0,s.jsx)("p",{children:(0,o.I)({id:"shared.wip.subtitle"})}),(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,o.I)({id:"shared.wip.var.feedback.base"}),(0,s.jsx)(r.Z,{to:i,children:(0,o.I)({id:"shared.wip.var.feedback.link"})})]}),(0,s.jsxs)("li",{children:[(0,o.I)({id:"shared.wip.var.material.base"}),(0,s.jsx)(r.Z,{to:"https://t.me/feature_sliced",children:(0,o.I)({id:"shared.wip.var.material.link"})})]}),(0,s.jsxs)("li",{children:[(0,o.I)({id:"shared.wip.var.contribute.base"}),(0,s.jsx)(r.Z,{to:"https://github.com/feature-sliced/documentation/blob/master/CONTRIBUTING.md",children:(0,o.I)({id:"shared.wip.var.contribute.link"})})]})]}),(0,s.jsx)("br",{}),(0,s.jsx)("p",{children:(0,s.jsx)("i",{children:"\ud83c\udf70 Stay tuned!"})})]})};function d(e){const t=Object.assign({admonition:"admonition"},(0,n.ah)(),e.components);return(0,s.jsx)(t.admonition,{title:"WIP",type:"caution",children:(0,s.jsx)(a,{ticket:e.ticket})})}const l=function(e={}){const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},1748:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var s=i(1527),n=i(6736),r=i(1109);const o={sidebar_position:3,sidebar_class_name:"sidebar-item--wip"},a="Routing",d={id:"guides/issues/routes",title:"Routing",description:"Situation",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guides/issues/routes.mdx",sourceDirName:"guides/issues",slug:"/guides/issues/routes",permalink:"/docs/guides/issues/routes",draft:!1,unlisted:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/guides/issues/routes.mdx",tags:[],version:"current",lastUpdatedAt:1697985820,formattedLastUpdatedAt:"Oct 22, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_class_name:"sidebar-item--wip"},sidebar:"guidesSidebar",previous:{title:"Desegemented",permalink:"/docs/guides/issues/desegmented"},next:{title:"Cross-imports",permalink:"/docs/guides/issues/cross-imports"}},l={},c=[{value:"Situation",id:"situation",level:2},{value:"Problem",id:"problem",level:2},{value:"If you ignore it",id:"if-you-ignore-it",level:2},{value:"Solution",id:"solution",level:2},{value:"See also",id:"see-also",level:2}];function u(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",a:"a"},(0,n.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"routing",children:"Routing"}),"\n",(0,s.jsx)(r.ZP,{ticket:"169"}),"\n",(0,s.jsx)(t.h2,{id:"situation",children:"Situation"}),"\n",(0,s.jsx)(t.p,{children:"Urls to pages are hardcoded in the layers below pages"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",metastring:"title=entities/post/card",children:"\n<Card>\n    <Card.Title \n        href={`/post/${data.id}`}\n        title={data.name}\n    />\n    ...\n</Card>\n"})}),"\n",(0,s.jsx)(t.h2,{id:"problem",children:"Problem"}),"\n",(0,s.jsx)(t.p,{children:"Urls are not concentrated in the page layer, where they belong according to the scope of responsibility"}),"\n",(0,s.jsx)(t.h2,{id:"if-you-ignore-it",children:"If you ignore it"}),"\n",(0,s.jsx)(t.p,{children:"Then, when changing urls, you will have to keep in mind that these urls (and the logic of urls/redirects) can be in all layers except pages"}),"\n",(0,s.jsx)(t.p,{children:"And it also means that now even a simple product card takes part of the responsibility from the pages, which smears the logic of the project"}),"\n",(0,s.jsx)(t.h2,{id:"solution",children:"Solution"}),"\n",(0,s.jsx)(t.p,{children:"Determine how to work with urls/redirects from the page level and above"}),"\n",(0,s.jsx)(t.p,{children:"Transfer to the layers below via composition/props/factories"}),"\n",(0,s.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://t.me/feature_sliced/4389",children:'(Thread) What if I "sew up" routing in entities/features/widgets'})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://t.me/feature_sliced/3756",children:"(Thread) Why does it smear the logic of routes only in pages"})}),"\n"]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(u,e)})):u(e)}},6736:(e,t,i)=>{i.d(t,{Zo:()=>a,ah:()=>r});var s=i(959);const n=s.createContext({});function r(e){const t=s.useContext(n);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function a({components:e,children:t,disableParentContext:i}){let a;return a=i?"function"==typeof e?e({}):e||o:r(e),s.createElement(n.Provider,{value:a},t)}}}]);