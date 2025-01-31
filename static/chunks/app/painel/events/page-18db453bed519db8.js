(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[158],{8414:(e,t,r)=>{Promise.resolve().then(r.bind(r,6252))},6252:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var s=r(5155),a=r(2115),n=r(3312),o=r(3900),i=r(1567);let l=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("textarea",{className:(0,i.cn)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",r),ref:t,...a})});l.displayName="Textarea";let d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("div",{ref:t,className:(0,i.cn)("rounded-xl border bg-card text-card-foreground shadow",r),...a})});d.displayName="Card";let c=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("div",{ref:t,className:(0,i.cn)("flex flex-col space-y-1.5 p-6",r),...a})});c.displayName="CardHeader";let u=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("div",{ref:t,className:(0,i.cn)("font-semibold leading-none tracking-tight",r),...a})});u.displayName="CardTitle",a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("div",{ref:t,className:(0,i.cn)("text-sm text-muted-foreground",r),...a})}).displayName="CardDescription";let f=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("div",{ref:t,className:(0,i.cn)("p-6 pt-0",r),...a})});function p(){let[e,t]=(0,a.useState)([]),[r,i]=(0,a.useState)({title:"",date:"",location:"",description:""}),p=async()=>{try{let e=await fetch("/api/events"),r=await e.json();t(r)}catch(e){console.error("Erro ao listar eventos:",e)}};(0,a.useEffect)(()=>{p()},[]);let x=async()=>{if(!r.title||!r.date||!r.location||!r.description){console.error("Todos os campos s\xe3o obrigat\xf3rios.");return}let e=await fetch("/api/events",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(e.ok)i({title:"",date:"",location:"",description:""}),p();else{let{error:t}=await e.json();console.error(t)}};return(0,s.jsxs)("div",{className:"p-8",children:[(0,s.jsx)("h1",{className:"text-2xl font-bold mb-4",children:"Gerenciamento de Eventos"}),(0,s.jsxs)(d,{className:"mb-8",children:[(0,s.jsx)(c,{children:(0,s.jsx)(u,{children:"Criar Novo Evento"})}),(0,s.jsxs)(f,{className:"space-y-4",children:[(0,s.jsx)(o.p,{placeholder:"T\xedtulo do Evento",value:r.title,onChange:e=>i({...r,title:e.target.value})}),(0,s.jsx)(o.p,{type:"datetime-local",value:r.date,onChange:e=>i({...r,date:e.target.value})}),(0,s.jsx)(o.p,{placeholder:"Localiza\xe7\xe3o",value:r.location,onChange:e=>i({...r,location:e.target.value})}),(0,s.jsx)(l,{placeholder:"Descri\xe7\xe3o",value:r.description,onChange:e=>i({...r,description:e.target.value})}),(0,s.jsx)(n.$,{onClick:x,children:"Criar Evento"})]})]}),(0,s.jsx)("h2",{className:"text-xl font-semibold mb-4",children:"Lista de Eventos"}),(0,s.jsx)("div",{className:"space-y-4",children:e.map(e=>(0,s.jsxs)(d,{children:[(0,s.jsx)(c,{children:(0,s.jsx)(u,{children:e.title})}),(0,s.jsxs)(f,{children:[(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{children:"Data:"})," ",new Date(e.date).toLocaleString()]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{children:"Local:"})," ",e.location]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{children:"Descri\xe7\xe3o:"})," ",e.description]})]})]},e.id))})]})}f.displayName="CardContent",a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("div",{ref:t,className:(0,i.cn)("flex items-center p-6 pt-0",r),...a})}).displayName="CardFooter"},3312:(e,t,r)=>{"use strict";r.d(t,{$:()=>d});var s=r(5155),a=r(2115),n=r(2317),o=r(1027),i=r(1567);let l=(0,o.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef((e,t)=>{let{className:r,variant:a,size:o,asChild:d=!1,...c}=e,u=d?n.DX:"button";return(0,s.jsx)(u,{className:(0,i.cn)(l({variant:a,size:o,className:r})),ref:t,...c})});d.displayName="Button"},3900:(e,t,r)=>{"use strict";r.d(t,{p:()=>o});var s=r(5155),a=r(2115),n=r(1567);let o=a.forwardRef((e,t)=>{let{className:r,type:a,...o}=e;return(0,s.jsx)("input",{type:a,className:(0,n.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",r),ref:t,...o})});o.displayName="Input"},1567:(e,t,r)=>{"use strict";r.d(t,{cn:()=>n});var s=r(3463),a=r(9795);function n(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.QP)((0,s.$)(t))}}},e=>{var t=t=>e(e.s=t);e.O(0,[365,441,517,358],()=>t(8414)),_N_E=e.O()}]);