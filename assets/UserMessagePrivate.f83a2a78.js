import{r,T as C,b as f,o as u,c as _,d as s,Z as p,$ as F,e as B,f as g,t as c,X as N,a0 as $}from"./index.588223ac.js";import{A as P,M as V}from"./useForum.572502a9.js";const A={class:"col-12 py-0 px-2"},I={class:"card"},K=s("h5",null,"\u79C1\u4EBA\u4FE1\u4EF6",-1),S={class:"flex flex-column-reverse"},Z={__name:"UserMessagePrivate",emits:["showSuccess","showInfo","showWarn","showError"],setup(L,{emit:v}){const w=new $,i=new V,b=new P,{user:x}=b.getUser(),l=r(!1),n=r({}),d=r([]),o=r({}),h=e=>w.convertDate(e),D=e=>{i.getMail(e).then(t=>{n.value=t,l.value=!l.value}).catch(t=>{v("showError",t)})},m=e=>o.value[e]?o.value[e]:e,k=()=>{i.getPrivateMail().then(e=>{d.value=e}).catch(e=>{v("showError",e)})},y=()=>{i.getFriends().then(e=>{for(let t in e)e[t].name===""||e[t].name===void 0?o.value[t]=t:o.value[t]=e[t].name})};return C(()=>{x.value!==null&&(k(),y())}),(e,t)=>{const E=f("Fieldset"),M=f("Dialog");return u(),_(p,null,[s("div",A,[s("div",I,[K,s("div",S,[(u(!0),_(p,null,F(d.value,(a,U)=>(u(),N(E,{key:U,legend:`${a.title} - ${h(a.date)}`,class:"mb-3 cursor-pointer hover:surface-ground",onClick:T=>D(a.mailKey)},{default:g(()=>[s("div",null,[s("p",null,"\u5BC4\u4EF6\u8005\uFF1A"+c(m(a.fromUid)),1)])]),_:2},1032,["legend","onClick"]))),128))])])]),B(M,{visible:l.value,"onUpdate:visible":t[0]||(t[0]=a=>l.value=a),modal:"",header:n.value.title,style:{"min-width":"50vw",margin:"2rem"}},{default:g(()=>[s("p",null,"\u5BC4\u4EF6\u8005\uFF1A"+c(m(n.value.fromUid)),1),s("p",null,c(n.value.content),1),s("p",null,"\u5BC4\u4EF6\u65E5\u671F\uFF1A"+c(h(n.value.date)),1)]),_:1},8,["visible","header"])],64)}}};export{Z as default};
