import{T as f,o as _,c as p,Q as h,w as t,b as m,h as n,u as o,n as v,a as s,t as l}from"./app-8c06971f.js";import{_ as g}from"./ActionMessage-20045361.js";import{_ as T}from"./FormSection-872090c7.js";import{_ as b}from"./InputError-5006b7a7.js";import{_ as c}from"./InputLabel-a759398c.js";import{_ as w}from"./PrimaryButton-6f6df6b3.js";import{_ as x}from"./TextInput-90eef986.js";import"./SectionTitle-5d692b9f.js";import"./_plugin-vue_export-helper-c27b6911.js";const N={class:"col-span-6"},y={class:"flex items-center mt-2"},S=["src","alt"],V={class:"ml-4 leading-tight"},$={class:"text-gray-900"},k={class:"text-gray-700 text-sm"},B={class:"col-span-6 sm:col-span-4"},E={__name:"UpdateTeamNameForm",props:{team:Object,permissions:Object},setup(e){const r=e,a=f({name:r.team.name}),d=()=>{a.put(route("teams.update",r.team),{errorBag:"updateTeamName",preserveScroll:!0})};return(U,i)=>(_(),p(T,{onSubmitted:d},h({title:t(()=>[n(" Team Name ")]),description:t(()=>[n(" The team's name and owner information. ")]),form:t(()=>[s("div",N,[m(c,{value:"Team Owner"}),s("div",y,[s("img",{class:"w-12 h-12 rounded-full object-cover",src:e.team.owner.profile_photo_url,alt:e.team.owner.name},null,8,S),s("div",V,[s("div",$,l(e.team.owner.name),1),s("div",k,l(e.team.owner.email),1)])])]),s("div",B,[m(c,{for:"name",value:"Team Name"}),m(x,{id:"name",modelValue:o(a).name,"onUpdate:modelValue":i[0]||(i[0]=u=>o(a).name=u),type:"text",class:"mt-1 block w-full",disabled:!e.permissions.canUpdateTeam},null,8,["modelValue","disabled"]),m(b,{message:o(a).errors.name,class:"mt-2"},null,8,["message"])])]),_:2},[e.permissions.canUpdateTeam?{name:"actions",fn:t(()=>[m(g,{on:o(a).recentlySuccessful,class:"mr-3"},{default:t(()=>[n(" Saved. ")]),_:1},8,["on"]),m(w,{class:v({"opacity-25":o(a).processing}),disabled:o(a).processing},{default:t(()=>[n(" Save ")]),_:1},8,["class","disabled"])]),key:"0"}:void 0]),1024))}};export{E as default};
