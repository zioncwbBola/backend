(()=>{var e={};e.id=733,e.ids=[733],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},87714:(e,r,t)=>{"use strict";t.r(r),t.d(r,{patchFetch:()=>m,routeModule:()=>d,serverHooks:()=>v,workAsyncStorage:()=>l,workUnitAsyncStorage:()=>x});var s={};t.r(s),t.d(s,{DELETE:()=>c,PUT:()=>p});var o=t(42706),n=t(28203),a=t(45994),i=t(39187),u=t(43219);async function p(e){try{let{id:r,title:t,date:s,location:o,description:n}=await e.json();if(!r||!t||!s||!o||!n)return i.NextResponse.json({error:"Todos os campos s\xe3o obrigat\xf3rios."},{status:400});let a=await u.A.event.update({where:{id:r},data:{title:t,date:new Date(s),location:o,description:n}});return i.NextResponse.json(a)}catch(e){return console.error("Erro ao atualizar evento:",e),i.NextResponse.json({error:"Erro ao atualizar evento."},{status:500})}}async function c(e){try{let{id:r}=await e.json();if(!r)return i.NextResponse.json({error:"ID do evento \xe9 obrigat\xf3rio."},{status:400});return await u.A.event.delete({where:{id:r}}),i.NextResponse.json({message:"Evento exclu\xeddo com sucesso."})}catch(e){return console.error("Erro ao excluir evento:",e),i.NextResponse.json({error:"Erro ao excluir evento."},{status:500})}}let d=new o.AppRouteRouteModule({definition:{kind:n.RouteKind.APP_ROUTE,page:"/api/events/[id]/route",pathname:"/api/events/[id]",filename:"route",bundlePath:"app/api/events/[id]/route"},resolvedPagePath:"C:\\xampp\\htdocs\\backend\\src\\app\\api\\events\\[id]\\route.ts",nextConfigOutput:"",userland:s}),{workAsyncStorage:l,workUnitAsyncStorage:x,serverHooks:v}=d;function m(){return(0,a.patchFetch)({workAsyncStorage:l,workUnitAsyncStorage:x})}},96487:()=>{},78335:()=>{},43219:(e,r,t)=>{"use strict";t.d(r,{A:()=>o});let s=require("@prisma/client"),o=global.prisma||new s.PrismaClient({log:["query","info","warn","error"]})}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[994,452],()=>t(87714));module.exports=s})();