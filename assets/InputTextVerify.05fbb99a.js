import{b as t,o as s,c,e as a,f as d,a2 as i,F as p}from"./index.e0ef0c6a.js";const x={__name:"InputTextVerify",props:{modelValue:String,label:{type:String,default:"-"},name:{type:String,default:"-"},placeholder:{type:String},rules:{type:String}},emits:["update:modelValue"],setup(e,{emit:g}){return(r,n)=>{const o=t("InputText"),u=t("VField"),m=t("ErrorMessage");return s(),c(p,null,[a(u,{name:e.name,label:e.label,class:"p-inputtext p-component",rules:e.rules,value:e.modelValue,onInput:n[0]||(n[0]=l=>r.$emit("update:modelValue",l.target.value))},{default:d(({field:l,errors:V})=>[a(o,i({class:"w-full"},l,{value:e.modelValue,placeholder:e.placeholder,id:e.name,type:"text"}),null,16,["value","placeholder","id"])]),_:1},8,["name","label","rules","value"]),a(m,{name:e.name,class:"p-error"},null,8,["name"])],64)}}};export{x as _};
