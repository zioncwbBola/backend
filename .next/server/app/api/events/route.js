(()=>{var e={};e.id=301,e.ids=[301],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},49552:(e,r,t)=>{"use strict";t.r(r),t.d(r,{patchFetch:()=>m,routeModule:()=>d,serverHooks:()=>v,workAsyncStorage:()=>l,workUnitAsyncStorage:()=>x});var s={};t.r(s),t.d(s,{GET:()=>p,POST:()=>c});var o=t(42706),n=t(28203),a=t(45994),i=t(39187),u=t(43219);async function p(e){try{let e=await u.A.event.findMany();return i.NextResponse.json(e,{headers:{"Access-Control-Allow-Origin":"*"}})}catch(e){return console.error("Erro ao listar eventos:",e),i.NextResponse.json({error:"Erro ao listar eventos."},{status:500})}}async function c(e){try{let{title:r,date:t,location:s,description:o}=await e.json();if(!r||!t||!s||!o)return i.NextResponse.json({error:"Todos os campos s\xe3o obrigat\xf3rios."},{status:400});let n=await u.A.event.create({data:{title:r,date:new Date(t),location:s,description:o}});return i.NextResponse.json(n)}catch(e){return console.error("Erro ao criar evento:",e),i.NextResponse.json({error:"Erro ao criar evento."},{status:500})}}let d=new o.AppRouteRouteModule({definition:{kind:n.RouteKind.APP_ROUTE,page:"/api/events/route",pathname:"/api/events",filename:"route",bundlePath:"app/api/events/route"},resolvedPagePath:"C:\\xampp\\htdocs\\backend\\src\\app\\api\\events\\route.ts",nextConfigOutput:"",userland:s}),{workAsyncStorage:l,workUnitAsyncStorage:x,serverHooks:v}=d;function m(){return(0,a.patchFetch)({workAsyncStorage:l,workUnitAsyncStorage:x})}},96487:()=>{},78335:()=>{},43219:(e,r,t)=>{"use strict";t.d(r,{A:()=>o});let s=require("@prisma/client"),o=global.prisma||new s.PrismaClient({log:["query","info","warn","error"]})}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[994,452],()=>t(49552));module.exports=s})();