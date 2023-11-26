import{r as d,T as h,o as s,f as r,b as o,u as t,w as m,F as c,bF as x,a as i,h as n,bz as y,n as C,au as w}from"./app-ead025f0.js";import{A as V}from"./AuthenticationCard-b9ab8047.js";import{_ as T}from"./AuthenticationCardLogo-862e43cf.js";import{_ as p}from"./InputError-ea71e17a.js";import{_ as v}from"./InputLabel-8ff6b0a8.js";import{_ as $}from"./PrimaryButton-40340e2e.js";import{_ as g}from"./TextInput-6c69ac26.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./logo-cc70ed57.js";const F={class:"mb-4 text-sm text-gray-600"},I=["onSubmit"],U={key:0},B={key:1},N={class:"flex items-center justify-end mt-4"},z=["onClick"],G={__name:"TwoFactorChallenge",setup(A){const a=d(!1),e=h({code:"",recovery_code:""}),f=d(null),_=d(null),b=async()=>{a.value^=!0,await w(),a.value?(f.value.focus(),e.code=""):(_.value.focus(),e.recovery_code="")},k=()=>{e.post(route("two-factor.login"))};return(P,l)=>(s(),r(c,null,[o(t(x),{title:"Two-factor Confirmation"}),o(V,null,{logo:m(()=>[o(T)]),default:m(()=>[i("div",F,[a.value?(s(),r(c,{key:1},[n(" Please confirm access to your account by entering one of your emergency recovery codes. ")],64)):(s(),r(c,{key:0},[n(" Please confirm access to your account by entering the authentication code provided by your authenticator application. ")],64))]),i("form",{onSubmit:y(k,["prevent"])},[a.value?(s(),r("div",B,[o(v,{for:"recovery_code",value:"Recovery Code"}),o(g,{id:"recovery_code",ref_key:"recoveryCodeInput",ref:f,modelValue:t(e).recovery_code,"onUpdate:modelValue":l[1]||(l[1]=u=>t(e).recovery_code=u),type:"text",class:"mt-1 block w-full",autocomplete:"one-time-code"},null,8,["modelValue"]),o(p,{class:"mt-2",message:t(e).errors.recovery_code},null,8,["message"])])):(s(),r("div",U,[o(v,{for:"code",value:"Code"}),o(g,{id:"code",ref_key:"codeInput",ref:_,modelValue:t(e).code,"onUpdate:modelValue":l[0]||(l[0]=u=>t(e).code=u),type:"text",inputmode:"numeric",class:"mt-1 block w-full",autofocus:"",autocomplete:"one-time-code"},null,8,["modelValue"]),o(p,{class:"mt-2",message:t(e).errors.code},null,8,["message"])])),i("div",N,[i("button",{type:"button",class:"text-sm text-gray-600 hover:text-gray-900 underline cursor-pointer",onClick:y(b,["prevent"])},[a.value?(s(),r(c,{key:1},[n(" Use an authentication code ")],64)):(s(),r(c,{key:0},[n(" Use a recovery code ")],64))],8,z),o($,{class:C(["ml-4",{"opacity-25":t(e).processing}]),disabled:t(e).processing},{default:m(()=>[n(" Log in ")]),_:1},8,["class","disabled"])])],40,I)]),_:1})],64))}};export{G as default};
