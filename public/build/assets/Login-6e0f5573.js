import{r as k,T as V,k as u,o as c,c as q,w as o,b as t,a as n,h as i,u as s,m as w,f as g,t as C,g as h,p as R,l as B}from"./app-96be83f2.js";import{A as E}from"./AuthenticationCard-b3d48a95.js";import{_ as N}from"./AuthenticationCardLogo-2eae9f89.js";import{_ as I}from"./AuthLayout-622bac95.js";import{_ as S}from"./SpinnerComponent-72e59201.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./logo-cc70ed57.js";import"./aos-5f2a9189.js";import"./lazy-bg-1-41b88f2b.js";const $=n("h2",{class:"font-weight-bold mt-4 text-blue-grey-darken-2"},"Ingresar",-1),A={class:"text-subtitle-1 mb-2"},K={key:0,class:"mb-4 font-medium text-sm text-green-600"},P=["onSubmit"],U={class:"mt-4"},M={class:"mt-4"},T={class:"d-flex flex-column-reverse flex-sm-row align-center justify-space-between mb-sm-0"},j={key:0,class:"ml-sm-auto mt-1 mt-sm-n6"},W={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(d){const m=k(null);let e=V({email:"",password:"",remember:!1});const p={required:r=>!!r||"E-mail is required",valid:r=>/.+@.+\..+/.test(r)||"E-mail must be valid"},f={required:r=>!!r||"Password is required.",min:r=>r.length>=8||"Min 8 characters"},b=()=>{e.transform(r=>({...r,remember:e.remember?"on":""})).post(route("login"),{onFinish:()=>e.reset("password")})},y=()=>{e.clearErrors(),e.defaults({email:"",password:"",remember:!1}),e.reset()};return(r,a)=>{const _=u("v-text-field"),x=u("v-checkbox"),v=u("v-btn");return c(),q(I,{title:"Ingresar"},{default:o(()=>[t(E,{class:"pa-2 pa-sm-8"},{logo:o(()=>[t(N),$,n("h6",A,[i(" ¿No tienes cuenta? "),t(s(w),{href:"/register"},{default:o(()=>[i(" registrarse ")]),_:1})])]),default:o(()=>[d.status?(c(),g("div",K,C(d.status),1)):h("",!0),n("form",{onSubmit:B(b,["prevent"])},[n("div",U,[t(_,{modelValue:s(e).email,"onUpdate:modelValue":a[0]||(a[0]=l=>s(e).email=l),"error-messages":s(e).errors.email?s(e).errors.email:"",rules:[p.required,p.valid],density:"comfortable",label:"E-mail",name:"email",required:"",variant:"outlined"},null,8,["modelValue","error-messages","rules"])]),n("div",M,[t(_,{modelValue:s(e).password,"onUpdate:modelValue":a[1]||(a[1]=l=>s(e).password=l),"append-inner-icon":m.value?"mdi-eye":"mdi-eye-off","error-messages":s(e).errors.password?s(e).errors.password:"",rules:[f.required,f.min],type:m.value?"text":"password",autocomplete:"new-password",dense:"",density:"comfortable",hint:"At least 8 characters",label:"password",name:"password",required:"",variant:"outlined","onClick:appendInner":a[2]||(a[2]=l=>m.value=!m.value),onKeyup:R(b,["enter"])},null,8,["modelValue","append-inner-icon","error-messages","rules","type","onKeyup"])]),n("div",T,[t(x,{modelValue:s(e).remember,"onUpdate:modelValue":a[3]||(a[3]=l=>s(e).remember=l),label:"Recuérdame"},null,8,["modelValue"]),d.canResetPassword?(c(),g("div",j,[t(s(w),{href:r.route("password.request")},{default:o(()=>[i("Olvidé mi contraseña ")]),_:1},8,["href"])])):h("",!0)]),t(v,{disabled:s(e).processing,block:"",class:"mr-4 mb-4",color:"primary",contained:"",type:"submit"},{default:o(()=>[i(" Ingresar ")]),_:1},8,["disabled"]),t(v,{block:"",class:"mr-4 mb-4",color:"primary",variant:"outlined",onClick:y},{default:o(()=>[i(" Reiniciar formulario ")]),_:1}),t(S,{opacity:.9,value:s(e).processing},null,8,["value"])],40,P)]),_:1})]),_:1})}}};export{W as default};
