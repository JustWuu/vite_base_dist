import{r as f,b as n,o as h,c as x,d as e,e as s,f as i,h as d,_ as g}from"./index.3d7aaf87.js";import{A as v}from"./useForum.112dbe34.js";const w={class:"surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden"},b={class:"flex flex-column align-items-center justify-content-center"},y={style:{"border-radius":"56px",padding:"0.3rem",background:"linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)"}},k={class:"w-full surface-card py-8 px-5 sm:px-8",style:{"border-radius":"53px"}},V={class:"text-center mb-4"},B=e("img",{src:g,alt:"Image",height:"50",class:"mb-3"},null,-1),E=e("div",{class:"text-900 text-3xl font-medium mb-3"},"\u5FD8\u8A18\u5BC6\u78BC",-1),I=e("label",{for:"email1",class:"block text-900 text-xl font-medium mb-2"},"\u4FE1\u7BB1",-1),j=e("div",{class:"flex align-items-center justify-content-between mb-4 gap-5"},null,-1),T={__name:"AuthForget",emits:["showSuccess","showInfo","showWarn","showError"],setup(A,{emit:r}){const m=new v,o=f(""),u=l=>{m.sendPassword(l).then(t=>{t&&r("showSuccess","\u5DF2\u5BC4\u51FA\u4FE1\u4EF6")}).catch(t=>{r("showError",t)})};return(l,t)=>{const a=n("router-link"),_=n("InputText"),p=n("Button");return h(),x("div",w,[e("div",b,[e("div",y,[e("div",k,[e("div",V,[B,E,s(a,{class:"font-medium no-underline ml-0 text-right cursor-pointer",style:{color:"var(--primary-color)"},to:"/auth/login"},{default:i(()=>[d("\u5E33\u6236\u767B\u5165")]),_:1}),s(a,{class:"font-medium no-underline ml-2 text-right cursor-pointer",style:{color:"var(--primary-color)"},to:"/auth/register"},{default:i(()=>[d("\u8A3B\u518A\u5E33\u6236")]),_:1})]),e("div",null,[I,s(_,{id:"email1",type:"text",placeholder:"Email address",class:"w-full md:w-30rem mb-4",style:{padding:"1rem"},modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=c=>o.value=c)},null,8,["modelValue"]),j,s(p,{label:"\u767C\u9001\u9A57\u8B49\u4FE1",class:"w-full p-3 text-xl",onClick:t[1]||(t[1]=c=>u(o.value))})])])])])])}}};export{T as default};
