"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[3906],{9613:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(9496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),l=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(a),h=n,m=d["".concat(u,".").concat(h)]||d[h]||p[h]||o;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1846:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=a(7622),n=(a(9496),a(9613));const o={sidebar_position:20,pagination_next:"guides/index"},i="FAQ",s={unversionedId:"get-started/faq",id:"get-started/faq",title:"FAQ",description:"You can ask your question in our Telegram chat, Discord community, and GitHub Discussions.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/get-started/faq.md",sourceDirName:"get-started",slug:"/get-started/faq",permalink:"/docs/get-started/faq",draft:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/get-started/faq.md",tags:[],version:"current",lastUpdatedAt:1696181740,formattedLastUpdatedAt:"Oct 1, 2023",sidebarPosition:20,frontMatter:{sidebar_position:20,pagination_next:"guides/index"},sidebar:"getstartedSidebar",previous:{title:"Decomposition cheatsheet",permalink:"/docs/get-started/cheatsheet"},next:{title:"\ud83c\udfaf Guides",permalink:"/docs/guides/"}},u={},l=[{value:"Is there a toolkit or a linter?",id:"is-there-a-toolkit-or-a-linter",level:3},{value:"Where to store the layout/template of pages?",id:"where-to-store-the-layouttemplate-of-pages",level:3},{value:"What is the difference between a feature and an entity?",id:"what-is-the-difference-between-a-feature-and-an-entity",level:3},{value:"Can I embed pages/features/entities into each other?",id:"can-i-embed-pagesfeaturesentities-into-each-other",level:3},{value:"What about Atomic Design?",id:"what-about-atomic-design",level:3},{value:"Are there any useful resources/articles/etc. about FSD?",id:"are-there-any-useful-resourcesarticlesetc-about-fsd",level:3},{value:"Why do I need Feature-Sliced Design?",id:"why-do-i-need-feature-sliced-design",level:3},{value:"Does a novice developer need an architecture/methodology?",id:"does-a-novice-developer-need-an-architecturemethodology",level:3},{value:"How do I work with the authorization context?",id:"how-do-i-work-with-the-authorization-context",level:3}],c={toc:l},d="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"faq"},"FAQ"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"You can ask your question in our ",(0,n.kt)("a",{parentName:"p",href:"https://t.me/feature_sliced"},"Telegram chat"),", ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/S8MzWTUsmp"},"Discord community"),", and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/feature-sliced/documentation/discussions"},"GitHub Discussions"),".")),(0,n.kt)("h3",{id:"is-there-a-toolkit-or-a-linter"},"Is there a toolkit or a linter?"),(0,n.kt)("p",null,"There is an official ESLint config \u2014 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/feature-sliced/eslint-config"},"@feature-sliced/eslint-config"),", and an ESLint plugin \u2014 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/conarti/eslint-plugin-feature-sliced"},"@conarti/eslint-plugin-feature-sliced"),", created by Aleksandr Belous, a community member. You're welcome to contribute to these projects or start your own!"),(0,n.kt)("h3",{id:"where-to-store-the-layouttemplate-of-pages"},"Where to store the layout/template of pages?"),(0,n.kt)("p",null,"If you need plain markup layouts, you can keep them in ",(0,n.kt)("inlineCode",{parentName:"p"},"shared/ui"),". If you need to use higher layers inside, there are a few options:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Perhaps you don't need layouts at all? If the layout is only a few lines, it might be reasonable to duplicate the code in each page rather than try to abstract it."),(0,n.kt)("li",{parentName:"ul"},"If you do need layouts, you can have them as separate widgets or pages, and compose them in your router configuration in App. Nested routing is another option.")),(0,n.kt)("h3",{id:"what-is-the-difference-between-a-feature-and-an-entity"},"What is the difference between a feature and an entity?"),(0,n.kt)("p",null,"An ",(0,n.kt)("em",{parentName:"p"},"entity")," is a real-life concept that your app is working with. A ",(0,n.kt)("em",{parentName:"p"},"feature")," is an nteraction that provides real-life value to\xa0your app\u2019s users, the thing people want to do with your entities."),(0,n.kt)("p",null,"For more information, along with examples, see the Reference page on ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/layers#entities"},"slices"),"."),(0,n.kt)("h3",{id:"can-i-embed-pagesfeaturesentities-into-each-other"},"Can I embed pages/features/entities into each other?"),(0,n.kt)("p",null,"Yes, but this embedding should happen in higher layers. For example, inside a widget, you can import both features and then insert one feature into another as props/children."),(0,n.kt)("p",null,"You cannot import one feature from another feature, this is prohibited by the ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/layers#import-rule-on-layers"},(0,n.kt)("strong",{parentName:"a"},"import rule on layers")),"."),(0,n.kt)("h3",{id:"what-about-atomic-design"},"What about Atomic Design?"),(0,n.kt)("p",null,"The current version of the methodology does not require nor prohibit the use of Atomic Design together with Feature-Sliced Design."),(0,n.kt)("p",null,"For example, Atomic Design ",(0,n.kt)("a",{parentName:"p",href:"https://t.me/feature_sliced/1653"},"can be applied well")," for the ",(0,n.kt)("inlineCode",{parentName:"p"},"ui")," segment of modules."),(0,n.kt)("h3",{id:"are-there-any-useful-resourcesarticlesetc-about-fsd"},"Are there any useful resources/articles/etc. about FSD?"),(0,n.kt)("p",null,"Yes! ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/feature-sliced/awesome"},"https://github.com/feature-sliced/awesome")),(0,n.kt)("h3",{id:"why-do-i-need-feature-sliced-design"},"Why do I need Feature-Sliced Design?"),(0,n.kt)("p",null,"It helps you and your team to quickly overview the project in terms of its main value-bringing components. A standardized architecture helps to speed up onboarding and resolves debates about code structure. See the ",(0,n.kt)("a",{parentName:"p",href:"/docs/about/motivation"},"motivation")," page to learn more about why FSD was created."),(0,n.kt)("h3",{id:"does-a-novice-developer-need-an-architecturemethodology"},"Does a novice developer need an architecture/methodology?"),(0,n.kt)("p",null,"Rather yes than no"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Usually, when you design and develop a project in one person, everything goes smoothly. But if there are pauses in development, new developers are added to the team - then problems come")),(0,n.kt)("h3",{id:"how-do-i-work-with-the-authorization-context"},"How do I work with the authorization context?"),(0,n.kt)("p",null,"Answered ",(0,n.kt)("a",{parentName:"p",href:"/docs/guides/examples/auth"},"here")))}p.isMDXComponent=!0}}]);