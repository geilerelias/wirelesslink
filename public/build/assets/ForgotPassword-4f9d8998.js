import{T as c,o as m,c as u,w as a,b as e,u as t,bF as d,f,t as _,g as p,a as o,n as b,h as g,bz as x}from"./app-ead025f0.js";import{A as h}from"./AuthenticationCard-b9ab8047.js";import{_ as v}from"./AuthenticationCardLogo-862e43cf.js";import{_ as y}from"./InputError-ea71e17a.js";import{_ as w}from"./InputLabel-8ff6b0a8.js";import{_ as V}from"./PrimaryButton-40340e2e.js";import{_ as k}from"./TextInput-6c69ac26.js";import{_ as $}from"./AuthLayout-594fcc39.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./logo-cc70ed57.js";import"./aos-6fde2474.js";import"./lazy-bg-1-41b88f2b.js";const N=o("div",{class:"mb-4 text-sm text-gray-600 text-justify"}," ¿Olvidaste tu contraseña? No hay problema. Simplemente háganos saber su dirección de correo electrónico y le enviaremos un enlace de restablecimiento de contraseña que le permitirá elegir una nueva. ",-1),S={key:0,class:"mb-4 font-medium text-sm text-green-600"},B=["onSubmit"],C={class:"flex items-center justify-end mt-4"},U={__name:"ForgotPassword",props:{status:String},setup(i){const s=c({email:""}),l=()=>{s.post(route("password.email"))};return(E,r)=>(m(),u($,null,{default:a(()=>[e(t(d),{title:"Forgot Password"}),e(h,null,{logo:a(()=>[e(v)]),default:a(()=>[N,i.status?(m(),f("div",S,_(i.status),1)):p("",!0),o("form",{onSubmit:x(l,["prevent"])},[o("div",null,[e(w,{for:"email",value:"Email"}),e(k,{id:"email",modelValue:t(s).email,"onUpdate:modelValue":r[0]||(r[0]=n=>t(s).email=n),autocomplete:"username",autofocus:"",class:"mt-1 block w-full",required:"",type:"email"},null,8,["modelValue"]),e(y,{message:t(s).errors.email,class:"mt-2"},null,8,["message"])]),o("div",C,[e(V,{class:b({"opacity-25":t(s).processing}),disabled:t(s).processing},{default:a(()=>[g(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],40,B)]),_:1})]),_:1}))}};export{U as default};