import{A as x,F as A}from"./useForum.9eb1f759.js";import{C as T}from"./useDate.08bd623a.js";import{a5 as D,r as F,X as I,b as i,o as N,c as S,e as s,d as a,f as o,h as d,t as l,j as k,a6 as E,a7 as j}from"./index.e72bd00b.js";const p=r=>(E("data-v-3663ac0a"),r=r(),j(),r),B={class:"grid"},V={class:"col-12 py-0 px-2"},L={class:"card"},O=p(()=>a("h5",null,"\u7D9C\u5408\u8A0E\u8AD6\u5340",-1)),R=p(()=>a("p",null,"\u9EDE\u64CA\u8A72\u6587\u7AE0\u6A19\u984C\u53EF\u4EE5\u67E5\u770B\u6587\u7AE0\u3002",-1)),U=["onClick"],$={class:"flex align-items-center justify-content-start"},H={class:"p-avatar p-component p-avatar-image p-avatar-circle p-avatar-lg"},K=["alt","src"],W={style:{"margin-left":"0.5em","vertical-align":"middle"},class:"image-text"},X={__name:"ForumComprehensive",emits:["showSuccess","showInfo","showWarn","showError"],setup(r,{emit:_}){const h=k(),u=new T,m=new A,v=new x,{user:w}=v.getUser(),c=F([]),f=t=>u.convertDate(t),y=t=>{h.push(`/forum/${t}`)},g=()=>{m.getAreaArticle("comprehensive").then(t=>{c.value=t,c.value=Object.values(t)}).catch(t=>{c.value=null,_("showError",t)})};return I(()=>{w.value!==null&&g()}),(t,q)=>{const b=i("all-banner"),n=i("Column"),C=i("DataTable");return N(),S("div",B,[s(b),a("div",V,[a("div",L,[O,R,s(C,{value:c.value,paginator:!0,class:"p-datatable-gridlines w-full",rows:10,dataKey:"uid",rowHover:!0,responsiveLayout:"scroll",sortOrder:-1},{empty:o(()=>[d(" No customers found. ")]),default:o(()=>[s(n,{header:"\u4E3B\u984C",field:"theme",sortable:"",dataType:"theme",style:{width:"10%"},class:"white-space-nowrap"},{body:o(({data:e})=>[d(l(e.theme.name),1)]),_:1}),s(n,{header:"\u6A19\u984C",field:"title",sortable:"",dataType:"title",style:{width:"40%"},class:"white-space-nowrap"},{body:o(({data:e})=>[a("a",{class:"cursor-pointer",onClick:z=>y(e.id)},l(e.title),9,U)]),_:1}),s(n,{header:"\u767C\u5E03\u65E5\u671F",field:"date",sortable:"",dataType:"date",style:{width:"20%"},class:"white-space-nowrap"},{body:o(({data:e})=>[d(l(f(e.date)),1)]),_:1}),s(n,{header:"\u767C\u5E03\u8005",field:"author",sortable:"",dataType:"author",style:{width:"30%"},class:"white-space-nowrap"},{body:o(({data:e})=>[a("div",$,[a("div",H,[a("img",{alt:e.name,src:e.author.photoURL,width:"32",style:{"vertical-align":"middle"}},null,8,K)]),a("span",W,l(e.author.displayName),1)])]),_:1})]),_:1},8,["value"])])])])}}},P=D(X,[["__scopeId","data-v-3663ac0a"]]);export{P as default};
