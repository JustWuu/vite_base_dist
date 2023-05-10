import{r,b as n,o as g,c as b,d as t,e as i,g as v,_ as w,j as y}from"./index.1524d3d1.js";import{A as V,M as k}from"./useForum.37c7a8cd.js";const j={class:"surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden"},B={class:"flex flex-column align-items-center justify-content-center"},M={style:{"border-radius":"56px",padding:"0.3rem",background:"linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)"}},C={class:"w-full surface-card py-8 px-5 sm:px-8",style:{"border-radius":"53px"}},E=v('<div class="text-center mb-4"><img src="'+w+'" alt="Image" height="50" class="mb-3"><div class="text-900 text-3xl font-medium mb-3">\u5E33\u6236\u8A3B\u518A</div><a class="font-medium no-underline ml-0 text-right cursor-pointer" style="color:var(--primary-color);" href="/#/auth/login">\u5E33\u6236\u767B\u5165</a><a class="font-medium no-underline ml-2 text-right cursor-pointer" style="color:var(--primary-color);" href="/#/auth/register">\u5E33\u6236\u8A3B\u518A</a></div>',1),I=t("label",{for:"email1",class:"block text-900 text-xl font-medium mb-2"},"\u4FE1\u7BB1",-1),L=t("label",{for:"password1",class:"block text-900 font-medium text-xl mb-2"},"\u5BC6\u78BC",-1),N=t("div",{class:"flex align-items-center justify-content-between mb-4 gap-5"},null,-1),P={__name:"AuthRegister",emits:["showSuccess","showInfo","showWarn","showError"],setup(S,{emit:c}){const m=y(),u=new V,p=new k,l=r(""),a=r("zRz7XMC3vN2j8bU"),f=r({title:"\u6B64\u4FE1\u4EF6\u70BA\u6E2C\u8A66\u7528\u4FE1\u4EF6",content:"\u6B64\u4FE1\u4EF6\u70BA\u6E2C\u8A66\u7528\u4FE1\u4EF6\uFF0C\u8ACB\u52FF\u56DE\u8986\u3002",type:"system"}),h=(d,e)=>{u.createUser(d,e).then(s=>{s&&(c("showSuccess","\u5B8C\u6210\u8A3B\u518A\uFF0C\u767B\u5165\u6210\u529F"),p.sendSystemMail(f.value),m.push("/"))}).catch(s=>{c("showError",s)})};return(d,e)=>{const s=n("InputText"),x=n("Password"),_=n("Button");return g(),b("div",j,[t("div",B,[t("div",M,[t("div",C,[E,t("div",null,[I,i(s,{id:"email1",type:"text",placeholder:"Email address",class:"w-full md:w-30rem mb-4",style:{padding:"1rem"},modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=o=>l.value=o)},null,8,["modelValue"]),L,i(x,{id:"password1",modelValue:a.value,"onUpdate:modelValue":e[1]||(e[1]=o=>a.value=o),placeholder:"Password",toggleMask:!0,class:"w-full mb-3",inputClass:"w-full",promptLabel:"\u8ACB\u8F38\u5165\u5BC6\u78BC",weakLabel:"\u975E\u5E38\u7C21\u55AE",mediumLabel:"\u4E2D\u7B49\u8907\u96DC",strongLabel:"\u8907\u96DC\u7684\u5BC6\u78BC"},null,8,["modelValue"]),N,i(_,{label:"\u8A3B\u518A",class:"w-full p-3 text-xl",onClick:e[2]||(e[2]=o=>h(l.value,a.value))})])])])])])}}};export{P as default};
