import{r as p,T as V,j as c,o as f,c as x,w as l,b as t,a as n,h as i,u as s,l as C,f as q,g as R,n as $,k as E}from"./app-863f6a58.js";import{A as U}from"./AuthenticationCard-441fa327.js";import{_ as B}from"./AuthenticationCardLogo-086506d6.js";import{_ as N}from"./InputError-f7013a31.js";import{_ as T}from"./InputLabel-7d2f42af.js";import{_ as A}from"./AuthLayout-bf9ca892.js";import{_ as I}from"./PrimaryButton-878de7a7.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./logo-cc70ed57.js";import"./lazy-bg-1-7fd96a15.js";import"./aos-47f9db2b.js";import"./bg-1-34b215d9.js";const L=n("h2",{class:"font-weight-bold mt-4 blue-grey--text text--darken-2"},"Registrarse",-1),P={class:"mb-4 text-body-1"},j=["onSubmit"],F={class:"mt-4"},M={class:"mt-4"},S={class:"mt-4"},z={key:0,class:"mt-4"},D={class:"flex items-center"},Y={class:"ml-2 text-wrap"},G=["href"],H=["href"],ne={__name:"Register",setup(J){const m=p(!1),d=p(null),e=V({name:"",email:"",password:"",password_confirmation:"",terms:!1}),_=[r=>!!r||"El nombre es requerido"],v=[r=>!!r||"El E-mail es requerido",r=>/.+@.+\..+/.test(r)||"El email debe ser válido"],w=[r=>!!r||"La contraseña es requerida.",r=>r.length>=8||"Mínimo 8 caracteres"],g=[r=>!!r||"La confirmación de contraseña es requerida",r=>r===e.password||"Las contraseñas no coinciden"],b=()=>{e.post(route("register"),{onFinish:()=>e.reset("password","password_confirmation")})};function y(){}return(r,o)=>{const u=c("v-text-field"),k=c("v-checkbox"),h=c("v-btn");return f(),x(A,{title:"Register"},{default:l(()=>[t(U,null,{logo:l(()=>[t(B),L,n("h6",P,[i(" ¿Ya tienes cuenta? "),t(s(C),{href:"/login"},{default:l(()=>[i("Inicia sesión")]),_:1})])]),default:l(()=>[n("form",{onSubmit:E(b,["prevent"])},[n("div",null,[t(u,{id:"name",modelValue:s(e).name,"onUpdate:modelValue":o[0]||(o[0]=a=>s(e).name=a),"error-messages":s(e).errors.name,rules:_,autocomplete:"name",autofocus:"",class:"mt-1 block w-full",label:"Nombres",required:"",type:"text",variant:"outlined"},null,8,["modelValue","error-messages"])]),n("div",F,[t(u,{id:"email",modelValue:s(e).email,"onUpdate:modelValue":o[1]||(o[1]=a=>s(e).email=a),"error-messages":s(e).errors.email,rules:v,autocomplete:"username",class:"mt-1 block w-full",label:"Email",required:"",type:"email",variant:"outlined",onBlur:o[2]||(o[2]=a=>s(e).clearErrors("email"))},null,8,["modelValue","error-messages"])]),n("div",M,[t(u,{id:"password",modelValue:s(e).password,"onUpdate:modelValue":o[3]||(o[3]=a=>s(e).password=a),"append-inner-icon":m.value?"mdi-eye":"mdi-eye-off","error-messages":s(e).errors.password,rules:w,type:m.value?"text":"password",autocomplete:"new-password",class:"mt-1 block w-full",label:"Contraseña",required:"",variant:"outlined","onClick:appendInner":o[4]||(o[4]=a=>m.value=!m.value)},null,8,["modelValue","append-inner-icon","error-messages","type"])]),n("div",S,[t(u,{id:"password_confirmation",modelValue:s(e).password_confirmation,"onUpdate:modelValue":o[5]||(o[5]=a=>s(e).password_confirmation=a),"append-inner-icon":d.value?"mdi-eye":"mdi-eye-off","error-messages":s(e).errors.password_confirmation,rules:g,type:d.value?"text":"password",autocomplete:"new-password",class:"mt-1 block w-full",label:"Confirmar Contraseña",required:"",variant:"outlined","onClick:appendInner":o[6]||(o[6]=a=>d.value=!d.value)},null,8,["modelValue","append-inner-icon","error-messages","type"])]),r.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature?(f(),q("div",z,[t(T,{for:"terms"},{default:l(()=>[n("div",D,[t(k,{id:"terms",modelValue:s(e).terms,"onUpdate:modelValue":o[7]||(o[7]=a=>s(e).terms=a),checked:s(e).terms,"onUpdate:checked":o[8]||(o[8]=a=>s(e).terms=a),rules:[a=>!!a||"¡Debes estar de acuerdo para continuar!"],name:"terms",required:""},{label:l(()=>[n("div",Y,[i(" Estoy de acuerdo con los "),n("a",{href:r.route("terms.show"),class:"underline text-sm rounded-md focus:outline-none",target:"_blank"}," Términos de servicio ",8,G),i(" y "),n("a",{href:r.route("policy.show"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",target:"_blank"}," política de privacidad ",8,H)])]),_:1},8,["modelValue","checked","rules"])]),t(N,{message:s(e).errors.terms,class:"mt-2"},null,8,["message"])]),_:1})])):R("",!0),t(I,{class:$({"opacity-25":s(e).processing}),disabled:s(e).processing,block:"",variant:"elevated"},{default:l(()=>[i(" Registrarse ")]),_:1},8,["class","disabled"]),t(h,{block:"",class:"my-4",color:"primary",variant:"outlined",onClick:y},{default:l(()=>[i(" Reiniciar formulario ")]),_:1})],40,j)]),_:1})]),_:1})}}};export{ne as default};