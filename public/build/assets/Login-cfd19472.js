import{r as k,T as V,j as u,o as c,c as q,w as a,b as t,a as n,h as i,u as s,l as w,f as g,t as C,g as h,m as R,k as B}from"./app-8c06971f.js";import{A as E}from"./AuthenticationCard-1617ce6f.js";import{_ as N}from"./AuthenticationCardLogo-ae9b6feb.js";import{_ as I}from"./AuthLayout-11f75712.js";import{_ as S}from"./SpinnerComponent-1546fe18.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./logo-cc70ed57.js";import"./lazy-bg-1-7fd96a15.js";import"./aos-642706b9.js";import"./bg-1-34b215d9.js";const $=n("h2",{class:"font-weight-bold mt-4 text-blue-grey-darken-2"},"Ingresar",-1),A={class:"text-subtitle-1 mb-2"},K={key:0,class:"mb-4 font-medium text-sm text-green-600"},P=["onSubmit"],U={class:"mt-4"},j={class:"mt-4"},M={class:"d-flex flex-column-reverse flex-sm-row align-center justify-space-between mb-sm-0"},T={key:0,class:"ml-sm-auto mt-1 mt-sm-n6"},X={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(d){const m=k(null);let e=V({email:"",password:"",remember:!1});const p={required:r=>!!r||"E-mail is required",valid:r=>/.+@.+\..+/.test(r)||"E-mail must be valid"},f={required:r=>!!r||"Password is required.",min:r=>r.length>=8||"Min 8 characters"},b=()=>{e.transform(r=>({...r,remember:e.remember?"on":""})).post(route("login"),{onFinish:()=>e.reset("password")})},y=()=>{e.clearErrors(),e.defaults({email:"",password:"",remember:!1}),e.reset()};return(r,o)=>{const _=u("v-text-field"),x=u("v-checkbox"),v=u("v-btn");return c(),q(I,{title:"Ingresar"},{default:a(()=>[t(E,{class:"pa-2 pa-sm-8"},{logo:a(()=>[t(N),$,n("h6",A,[i(" ¿No tienes cuenta? "),t(s(w),{href:"/register"},{default:a(()=>[i(" registrarse ")]),_:1})])]),default:a(()=>[d.status?(c(),g("div",K,C(d.status),1)):h("",!0),n("form",{onSubmit:B(b,["prevent"])},[n("div",U,[t(_,{modelValue:s(e).email,"onUpdate:modelValue":o[0]||(o[0]=l=>s(e).email=l),"error-messages":s(e).errors.email?s(e).errors.email:"",rules:[p.required,p.valid],density:"comfortable",label:"E-mail",name:"email",required:"",variant:"outlined"},null,8,["modelValue","error-messages","rules"])]),n("div",j,[t(_,{modelValue:s(e).password,"onUpdate:modelValue":o[1]||(o[1]=l=>s(e).password=l),"append-inner-icon":m.value?"mdi-eye":"mdi-eye-off","error-messages":s(e).errors.password?s(e).errors.password:"",rules:[f.required,f.min],type:m.value?"text":"password",autocomplete:"new-password",dense:"",density:"comfortable",hint:"At least 8 characters",label:"password",name:"password",required:"",variant:"outlined","onClick:appendInner":o[2]||(o[2]=l=>m.value=!m.value),onKeyup:R(b,["enter"])},null,8,["modelValue","append-inner-icon","error-messages","rules","type","onKeyup"])]),n("div",M,[t(x,{modelValue:s(e).remember,"onUpdate:modelValue":o[3]||(o[3]=l=>s(e).remember=l),label:"Recuérdame"},null,8,["modelValue"]),d.canResetPassword?(c(),g("div",T,[t(s(w),{href:r.route("password.request")},{default:a(()=>[i("Olvidé mi contraseña ")]),_:1},8,["href"])])):h("",!0)]),t(v,{disabled:s(e).processing,block:"",class:"mr-4 mb-4",color:"primary",contained:"",type:"submit"},{default:a(()=>[i(" Ingresar ")]),_:1},8,["disabled"]),t(v,{block:"",class:"mr-4 mb-4",color:"primary",variant:"outlined",onClick:y},{default:a(()=>[i(" Reiniciar formulario ")]),_:1}),t(S,{opacity:.9,value:s(e).processing},null,8,["value"])],40,P)]),_:1})]),_:1})}}};export{X as default};
