import{T as c,o as f,c as _,w as l,b as o,a as t,u as e,n as w,h as V,bz as b}from"./app-ead025f0.js";import{A as g}from"./AuthenticationCard-b9ab8047.js";import{_ as k}from"./AuthenticationCardLogo-862e43cf.js";import{_ as m}from"./InputError-ea71e17a.js";import{_ as i}from"./InputLabel-8ff6b0a8.js";import{_ as v}from"./PrimaryButton-40340e2e.js";import{_ as n}from"./TextInput-6c69ac26.js";import{_ as $}from"./AuthLayout-594fcc39.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./logo-cc70ed57.js";import"./aos-6fde2474.js";import"./lazy-bg-1-41b88f2b.js";const x=["onSubmit"],y={class:"mt-4"},h={class:"mt-4"},C={class:"flex items-center justify-end mt-4"},M={__name:"ResetPassword",props:{email:String,token:String},setup(p){const d=p,s=c({token:d.token,email:d.email,password:"",password_confirmation:""}),u=()=>{s.post(route("password.update"),{onFinish:()=>s.reset("password","password_confirmation")})};return(P,a)=>(f(),_($,{title:"Restablecer contraseña"},{default:l(()=>[o(g,null,{logo:l(()=>[o(k)]),default:l(()=>[t("form",{onSubmit:b(u,["prevent"])},[t("div",null,[o(i,{for:"email",value:"Email"}),o(n,{id:"email",modelValue:e(s).email,"onUpdate:modelValue":a[0]||(a[0]=r=>e(s).email=r),autocomplete:"username",autofocus:"",class:"mt-1 block w-full",required:"",type:"email"},null,8,["modelValue"]),o(m,{message:e(s).errors.email,class:"mt-2"},null,8,["message"])]),t("div",y,[o(i,{for:"password",value:"Password"}),o(n,{id:"password",modelValue:e(s).password,"onUpdate:modelValue":a[1]||(a[1]=r=>e(s).password=r),autocomplete:"new-password",class:"mt-1 block w-full",required:"",type:"password"},null,8,["modelValue"]),o(m,{message:e(s).errors.password,class:"mt-2"},null,8,["message"])]),t("div",h,[o(i,{for:"password_confirmation",value:"Confirm Password"}),o(n,{id:"password_confirmation",modelValue:e(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=r=>e(s).password_confirmation=r),autocomplete:"new-password",class:"mt-1 block w-full",required:"",type:"password"},null,8,["modelValue"]),o(m,{message:e(s).errors.password_confirmation,class:"mt-2"},null,8,["message"])]),t("div",C,[o(v,{class:w({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:l(()=>[V(" Reset Password ")]),_:1},8,["class","disabled"])])],40,x)]),_:1})]),_:1}))}};export{M as default};
