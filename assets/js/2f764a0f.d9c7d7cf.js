"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[3458],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,c=p["".concat(l,".").concat(m)]||p[m]||h[m]||r;return n?a.createElement(c,i(i({ref:t},d),{},{components:n})):a.createElement(c,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3886:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(7462),o=(n(7294),n(4137));const r={sidebar_position:2},i="Needs driven",s={unversionedId:"about/understanding/needs-driven",id:"about/understanding/needs-driven",title:"Needs driven",description:"\u2014 Can't you formulate the goal that the new feature will solve? Or maybe the problem is that the task itself is not formulated? **The point is also that the methodology helps to pull out the problematic definition of tasks and goals**",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/about/understanding/needs-driven.md",sourceDirName:"about/understanding",slug:"/about/understanding/needs-driven",permalink:"/docs/about/understanding/needs-driven",draft:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/about/understanding/needs-driven.md",tags:[],version:"current",lastUpdatedAt:1680366638,formattedLastUpdatedAt:"Apr 1, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"aboutSidebar",previous:{title:"About architecture",permalink:"/docs/about/understanding/architecture"},next:{title:"Knowledge types",permalink:"/docs/about/understanding/knowledge-types"}},l={},u=[{value:"Why?",id:"why",level:2},{value:"What tasks are we talking about?",id:"what-tasks-are-we-talking-about",level:2},{value:"How does this affect development?",id:"how-does-this-affect-development",level:2},{value:"Task decomposition",id:"task-decomposition",level:3},{value:"Understanding the essence of the task",id:"understanding-the-essence-of-the-task",level:3},{value:"How to formulate it?",id:"how-to-formulate-it",level:2},{value:"And what is the benefit?",id:"and-what-is-the-benefit",level:2},{value:"1. Understanding user tasks",id:"1-understanding-user-tasks",level:3},{value:"2. Structuring and ordering",id:"2-structuring-and-ordering",level:3},{value:"3. Understanding the feature and its components",id:"3-understanding-the-feature-and-its-components",level:3},{value:"4. Profit",id:"4-profit",level:3},{value:"Back to reality",id:"back-to-reality",level:2},{value:"The role of methodology",id:"the-role-of-methodology",level:2},{value:"Methodology requirements",id:"methodology-requirements",level:3},{value:"See also",id:"see-also",level:2}],d={toc:u};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"needs-driven"},"Needs driven"),(0,o.kt)("admonition",{title:"TL;DR",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u2014 ",(0,o.kt)("em",{parentName:"p"},"Can't you formulate the goal that the new feature will solve? Or maybe the problem is that the task itself is not formulated? ",(0,o.kt)("strong",{parentName:"em"},"The point is also that the methodology helps to pull out the problematic definition of tasks and goals"))),(0,o.kt)("p",{parentName:"admonition"},"\u2014 ",(0,o.kt)("em",{parentName:"p"},"project does not live in static - requirements and functionality are constantly changing. Over time, the code turns into mush, because at the start the project was designed only for the initial impression of wishes. ",(0,o.kt)("strong",{parentName:"em"},"And the task of a good architecture is also to be sharpened for changing development conditions.")))),(0,o.kt)("h2",{id:"why"},"Why?"),(0,o.kt)("p",null,"To choose a clear name for an entity and understand its components, ",(0,o.kt)("strong",{parentName:"p"},"you need to clearly understand what task will be solved with the help of all this code.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"@sergeysova: During development, we try to give each entity or function a name that clearly reflects the intentions and meaning of the code being executed."))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"After all, without understanding the task, it is impossible to write the right tests that cover the most important cases, put down errors that help the user in the right places, even it is banal not to interrupt the user's flow because of fixable non-critical errors.")),(0,o.kt)("h2",{id:"what-tasks-are-we-talking-about"},"What tasks are we talking about?"),(0,o.kt)("p",null,"Frontend develops applications and interfaces for end users, so we solve the tasks of these consumers."),(0,o.kt)("p",null,"When a person comes to us, ",(0,o.kt)("strong",{parentName:"p"},"he wants to solve some of his pain or close a need.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"The task of managers and analysts is to formulate this need, and implement developers taking into account the features of web development (loss of communication, backend error, typo, missed the cursor or finger).")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This very goal, with which the user came, is the task of the developers.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"One small solved problem is a feature in the Feature-Sliced Design methodology \u2014 you need to cut the entire scope of project tasks into small goals."))),(0,o.kt)("h2",{id:"how-does-this-affect-development"},"How does this affect development?"),(0,o.kt)("h3",{id:"task-decomposition"},"Task decomposition"),(0,o.kt)("p",null,"When a developer begins to implement a task, in order to simplify the understanding and support of the code, he mentally ",(0,o.kt)("strong",{parentName:"p"},"cuts it into stages"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"first ",(0,o.kt)("em",{parentName:"li"},"split into top-level entities")," and ",(0,o.kt)("em",{parentName:"li"},"implement them"),","),(0,o.kt)("li",{parentName:"ul"},"then these entities ",(0,o.kt)("em",{parentName:"li"},"split into smaller ones")),(0,o.kt)("li",{parentName:"ul"},"and so on")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"In the process of splitting into entities, the developer is forced to give them a name that would clearly reflect his idea and help to understand what task the code solves when reading the listing"),"\n",(0,o.kt)("em",{parentName:"p"},"At the same time, we do not forget that we are trying to help the user reduce pain or realize needs")),(0,o.kt)("h3",{id:"understanding-the-essence-of-the-task"},"Understanding the essence of the task"),(0,o.kt)("p",null,"But to give a clear name to an entity, ",(0,o.kt)("strong",{parentName:"p"},"the developer must know enough about its purpose")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"how is he going to use this entity,"),(0,o.kt)("li",{parentName:"ul"},"what part of the user's task does it implement, where else can this entity be applied,"),(0,o.kt)("li",{parentName:"ul"},"in what other tasks can it participate,"),(0,o.kt)("li",{parentName:"ul"},"and so on")),(0,o.kt)("p",null,"It is not difficult to draw a conclusion: ",(0,o.kt)("strong",{parentName:"p"},"while the developer will reflect on the name of entities within the framework of the methodology, he will be able to find poorly formulated tasks even before writing the code.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"How to give a name to an entity if you do not understand well what tasks it can solve, how can you even divide a task into entities if you do not understand it well?")),(0,o.kt)("h2",{id:"how-to-formulate-it"},"How to formulate it?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To formulate a task that is solved by features, you need to understand the task itself"),", and this is already the responsibility of the project manager and analysts."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"The methodology can only tell the developer what tasks the product manager should pay close attention to.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},'@sergeysova: the Whole frontend is primarily a display of information, any component in the first turn, displays, and then the task "to show the user something" has no practical value.')),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},'Even without taking into account the specifics of the frontend can ask, "why do I have to show you", so you can continue to ask until\'t get out of pain or the need of the consumer.'))),(0,o.kt)("p",null,"As soon as we were able to get to the basic needs or pains, we can go back and figure out ",(0,o.kt)("strong",{parentName:"p"},"how exactly your product or service can help the user with his goals")),(0,o.kt)("p",null,"Any new task in your tracker is aimed at solving business problems, and the business tries to solve the user's tasks at the same time earning money on it. This means that each task has certain goals, even if they are not spelled out in the description text."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"The developer must clearly understand what goal this or that task is pursuing"),', but not every company can afford to build processes perfectly, although this is a separate conversation, nevertheless, the developer may well "ping" the right managers himself to find out this and do his part of the work effectively.')),(0,o.kt)("h2",{id:"and-what-is-the-benefit"},"And what is the benefit?"),(0,o.kt)("p",null,"Now let's look at the whole process from beginning to end."),(0,o.kt)("h3",{id:"1-understanding-user-tasks"},"1. Understanding user tasks"),(0,o.kt)("p",null,"When a developer understands his pain and how the business closes them, he can offer solutions that are not available to the business due to the specifics of web development."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"But of course, all this can work only if the developer is not indifferent to what he is doing and for what, otherwise ",(0,o.kt)("em",{parentName:"p"},"why then the methodology and some approaches?"))),(0,o.kt)("h3",{id:"2-structuring-and-ordering"},"2. Structuring and ordering"),(0,o.kt)("p",null,"With the understanding of tasks comes ",(0,o.kt)("strong",{parentName:"p"},"a clear structure both in the head and in the tasks along with the code")),(0,o.kt)("h3",{id:"3-understanding-the-feature-and-its-components"},"3. Understanding the feature and its components"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"One feature is one useful functionality for the user")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When several features are implemented in one feature, this is ",(0,o.kt)("strong",{parentName:"li"},"a violation of borders")),(0,o.kt)("li",{parentName:"ul"},"The feature can be indivisible and growing - ",(0,o.kt)("strong",{parentName:"li"},"and this is not bad")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Bad")," - when the feature does not answer the question ",(0,o.kt)("em",{parentName:"li"},'"What is the business value for the user?"')),(0,o.kt)("li",{parentName:"ul"},'There can be no "map-office" feature',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"But ",(0,o.kt)("inlineCode",{parentName:"li"},"booking-meeting-on-the-map"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"search-for-an-employee"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"change-of-workplace")," - ",(0,o.kt)("strong",{parentName:"li"},"yes"))))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"@sergeysova: The point is that the feature contains only code that implements the functionality itself"),", without unnecessary details and internal solutions (ideally)*"),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Open the feature code ",(0,o.kt)("strong",{parentName:"em"},"and see only what relates to the task")," - no more"))),(0,o.kt)("h3",{id:"4-profit"},"4. Profit"),(0,o.kt)("p",null,"Business very rarely turns its course radically in the other direction, which means ",(0,o.kt)("strong",{parentName:"p"},"the reflection of business tasks in the frontend application code is a very significant profit.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Then you don't have to explain to each new team member what this or that code does, and in general why it was added - ",(0,o.kt)("strong",{parentName:"em"},"everything will be explained through the business tasks that are already reflected in the code."))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"What is called ",(0,o.kt)("a",{parentName:"p",href:"https://thedomaindrivendesign.io/developing-the-ubiquitous-language"},'"Business Language" in Domain Driven Development'))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"back-to-reality"},"Back to reality"),(0,o.kt)("p",null,"If business processes are understood and good names are given at the design stage - ",(0,o.kt)("em",{parentName:"p"},"then it is not particularly problematic to transfer this understanding and logic to the code.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"However, in practice"),', tasks and functionality are usually developed "too" iteratively and (or) there is no time to think through the design.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"As a result, the feature makes sense today, and if you expand this feature in a month, you can rewrite the gender of the project.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"[",(0,o.kt)("a",{parentName:"em",href:"https://t.me/sergeysova/318"},"From the discussion"),"]: The developer tries to think 2-3 steps ahead, taking into account future wishes, but here he rests on his own experience")),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Burns experience engineer usually immediately looking 10 steps ahead, and understand where one feature to divide and combine with the other")),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"But sometimes that comes the task which had to face the experience, and nowhere to take the understanding of how literacy to decompose, with the least unfortunate consequences in the future"))),(0,o.kt)("h2",{id:"the-role-of-methodology"},"The role of methodology"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The methodology helps to solve the problems of developers, so that it is easier to solve the problems of users.")),(0,o.kt)("p",null,"There is no solution to the problems of developers only for the sake of developers"),(0,o.kt)("p",null,"But in order for the developer to solve his tasks, ",(0,o.kt)("strong",{parentName:"p"},"you need to understand the user's tasks")," - on the contrary, it will not work"),(0,o.kt)("h3",{id:"methodology-requirements"},"Methodology requirements"),(0,o.kt)("p",null,"It becomes clear that you need to identify at least two requirements for ",(0,o.kt)("strong",{parentName:"p"},"Feature-Sliced Design"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The methodology should tell ",(0,o.kt)("strong",{parentName:"p"},"how to create features, processes and entities")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Which means it should clearly explain ",(0,o.kt)("em",{parentName:"li"},"how to divide the code between them"),", which means that the naming of these entities should also be laid down in the specification."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The methodology should help the architecture ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"architecture#adaptability"},"easily adapt to the changing requirements of the project"))))),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://t.me/sergeysova/318"},"(Post) Stimulation for a clear formulation of tasks (+ discussion)"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"The current article")," is an adaptation of this discussion, you can read the full uncut version at the link")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://t.me/atomicdesign/18972"},"(Discussion) How to break the functionality and what it is")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://alexmngn.medium.com/how-to-better-organize-your-react-applications-2fd3ea1920f1"},'(Article) "How to better organize your applications"'))))}h.isMDXComponent=!0}}]);