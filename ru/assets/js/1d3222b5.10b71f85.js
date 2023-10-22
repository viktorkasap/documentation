"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[8855],{1109:(e,t,i)=>{i.d(t,{ZP:()=>d});var n=i(1527),s=i(6736),r=(i(959),i(8943)),c=i(4793);const o=e=>{let{ticket:t}=e;const i=`https://github.com/feature-sliced/documentation/issues/${t}`;return(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,c.I)({id:"shared.wip.title"})}),(0,n.jsx)("p",{children:(0,c.I)({id:"shared.wip.subtitle"})}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,c.I)({id:"shared.wip.var.feedback.base"}),(0,n.jsx)(r.Z,{to:i,children:(0,c.I)({id:"shared.wip.var.feedback.link"})})]}),(0,n.jsxs)("li",{children:[(0,c.I)({id:"shared.wip.var.material.base"}),(0,n.jsx)(r.Z,{to:"https://t.me/feature_sliced",children:(0,c.I)({id:"shared.wip.var.material.link"})})]}),(0,n.jsxs)("li",{children:[(0,c.I)({id:"shared.wip.var.contribute.base"}),(0,n.jsx)(r.Z,{to:"https://github.com/feature-sliced/documentation/blob/master/CONTRIBUTING.md",children:(0,c.I)({id:"shared.wip.var.contribute.link"})})]})]}),(0,n.jsx)("br",{}),(0,n.jsx)("p",{children:(0,n.jsx)("i",{children:"\ud83c\udf70 Stay tuned!"})})]})};function a(e){const t=Object.assign({admonition:"admonition"},(0,s.ah)(),e.components);return(0,n.jsx)(t.admonition,{title:"WIP",type:"caution",children:(0,n.jsx)(o,{ticket:e.ticket})})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(a,e)})):a(e)}},144:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var n=i(1527),s=i(6736),r=i(1109);const c={sidebar_position:2,sidebar_class_name:"sidebar-item--wip"},o="Decouple entities",a={id:"reference/isolation/decouple-entities",title:"Decouple entities",description:"\u041f\u0440\u043e \u043a\u0440\u043e\u0441\u0441-\u0438\u043c\u043f\u043e\u0440\u0442\u044b \u0442\u0438\u043f\u043e\u0432, \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u044b \u0438 \u043f\u0440\u043e \u0442\u043e - \u043a\u0430\u043a \u044f\u0432\u043d\u043e \u0432\u044b\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c \u0441\u0432\u044f\u0437\u0438 \u043c\u0435\u0436\u0434\u0443 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044f\u043c\u0438",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/reference/isolation/decouple-entities.mdx",sourceDirName:"reference/isolation",slug:"/reference/isolation/decouple-entities",permalink:"/ru/docs/reference/isolation/decouple-entities",draft:!1,unlisted:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/ru/docusaurus-plugin-content-docs/current/reference/isolation/decouple-entities.mdx",tags:[],version:"current",lastUpdatedAt:1697985820,formattedLastUpdatedAt:"22 \u043e\u043a\u0442. 2023 \u0433.",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_class_name:"sidebar-item--wip"},sidebar:"referenceSidebar",previous:{title:"Low Coupling & High Cohesion",permalink:"/ru/docs/reference/isolation/coupling-cohesion"}},d={},l=[{value:"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435",id:"see-also",level:2}];function u(e){const t=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",h2:"h2",ul:"ul",li:"li",a:"a"},(0,s.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"decouple-entities",children:"Decouple entities"}),"\n",(0,n.jsx)(r.ZP,{ticket:"202"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"\u041f\u0440\u043e \u043a\u0440\u043e\u0441\u0441-\u0438\u043c\u043f\u043e\u0440\u0442\u044b \u0442\u0438\u043f\u043e\u0432, \u0430\u0434\u0430\u043f\u0442\u0435\u0440\u044b \u0438 \u043f\u0440\u043e \u0442\u043e - \u043a\u0430\u043a \u044f\u0432\u043d\u043e \u0432\u044b\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c \u0441\u0432\u044f\u0437\u0438 \u043c\u0435\u0436\u0434\u0443 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044f\u043c\u0438"}),"\n"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"\u0422\u0430\u043a\u0436\u0435 \u043f\u0440\u043e \u043c\u0438\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0435 absolutely-decoupled entities"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"see-also",children:"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://t.me/feature_sliced/3633",children:"(\u0422\u0440\u0435\u0434) \u041f\u0430\u043c\u044f\u0442\u043a\u0430 \u043f\u0440\u043e \u0434\u0435\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044e \u043f\u043e \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044f\u043c \u0438 \u0432\u044b\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u043d\u0438\u0435 \u044f\u0432\u043d\u044b\u0445 \u0441\u0432\u044f\u0437\u0435\u0439 \u043c\u0435\u0436\u0434\u0443 \u043d\u0438\u043c\u0438"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://t.me/feature_sliced/3316",children:'(\u0422\u0440\u0435\u0434) \u041f\u0440\u0438\u043c\u0435\u0440 \u0434\u0435\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0438 \u0434\u043b\u044f "\u0441\u0432\u044f\u0437\u043d\u044b\u0445 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439" (users/pets/friends)'})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://t.me/feature_sliced/4276",children:"(\u0422\u0440\u0435\u0434) \u041f\u0440\u043e \u043a\u0440\u043e\u0441\u0441-\u0438\u043c\u043f\u043e\u0440\u0442\u044b \u0442\u0438\u043f\u043e\u0432/\u0430\u0434\u0430\u043f\u0442\u0435\u0440\u043e\u0432 \u0432 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044f\u0445"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://t.me/feature_sliced/4521",children:"(\u0422\u0440\u0435\u0434) \u041f\u0440\u043e \u0433\u0440\u0430\u043d\u0438\u0446\u044b \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439 \u0438 \u0444\u0438\u0447"})}),"\n"]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(u,e)})):u(e)}},6736:(e,t,i)=>{i.d(t,{Zo:()=>o,ah:()=>r});var n=i(959);const s=n.createContext({});function r(e){const t=n.useContext(s);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function o({components:e,children:t,disableParentContext:i}){let o;return o=i?"function"==typeof e?e({}):e||c:r(e),n.createElement(s.Provider,{value:o},t)}}}]);