import{r as c,b as a,o as w,c as x,e as l,d as t,f as g}from"./index.27a5a0bf.js";import"./user.35d041ca.js";import{F as k}from"./useForum.888ec3c8.js";const F={class:"grid"},B={class:"col-12 py-0 px-2"},C={class:"card"},I=t("h5",null,"\u767C\u8868\u6587\u7AE0",-1),E={class:"grid"},T={class:"col-12 sm:col-4"},U={class:"col-12 sm:col-4"},D={class:"col-12 sm:col-4"},L={class:"field"},M=t("label",{for:"info1"},"\u5167\u5BB9",-1),N={class:"flex justify-content-center"},P={__name:"ForumPublished",emits:["showSuccess","showInfo","showWarn","showError"],setup(R,{emit:i}){const d=new k,r=c([{name:"\u7D9C\u5408\u8A0E\u8AD6\u5340",type:"comprehensive"},{name:"\u904A\u6232\u8A0E\u8AD6\u5340",type:"game"}]),p=c([{name:"\u60C5\u5831",type:"information"},{name:"\u5FC3\u60C5",type:"feeling"},{name:"\u9592\u804A",type:"gossip"},{name:"\u653B\u7565",type:"walkthrough"}]),m=c(null),e=c({title:"",theme:"",content:"",area:""}),_=c({title:"",theme:"",content:"",area:""}),v=()=>{d.published(e.value).then(s=>{m.value.resetForm(),e.value=_.value,i(s[0],s[1])}).catch(s=>{i(s[0],s[1])})};return(s,o)=>{const f=a("back-button"),u=a("Dropdown"),h=a("InputTextIcon"),V=a("TinyMCE"),b=a("Button"),y=a("VForm");return w(),x("div",F,[l(f),t("div",B,[l(y,{ref_key:"formRef",ref:m,onSubmit:o[4]||(o[4]=n=>v())},{default:g(()=>[t("div",C,[I,t("div",E,[t("div",T,[l(u,{modelValue:e.value.area,"onUpdate:modelValue":o[0]||(o[0]=n=>e.value.area=n),options:r.value,optionLabel:"name",placeholder:"\u9078\u64C7\u8A0E\u8AD6\u5340",class:"w-full"},null,8,["modelValue","options"])]),t("div",U,[l(u,{modelValue:e.value.theme,"onUpdate:modelValue":o[1]||(o[1]=n=>e.value.theme=n),options:p.value,optionLabel:"name",placeholder:"\u9078\u64C7\u6216\u586B\u5BEB\u4E3B\u984C",class:"w-full"},null,8,["modelValue","options"])]),t("div",D,[l(h,{modelValue:e.value.title,"onUpdate:modelValue":o[2]||(o[2]=n=>e.value.title=n),name:"title",label:"\u6A19\u984C",icon:"pi-pencil",placeholder:"\u6A19\u984C",rules:"required|min:4|max:16"},null,8,["modelValue"])])]),t("div",L,[M,l(V,{modelValue:e.value.content,"onUpdate:modelValue":o[3]||(o[3]=n=>e.value.content=n)},null,8,["modelValue"])]),t("div",N,[l(b,{label:"\u767C\u5E03",type:"submit"})])])]),_:1},512)])])}}};export{P as default};
