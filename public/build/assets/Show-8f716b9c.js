import{_ as i}from"./AppLayout-295f8bfd.js";import o from"./DeleteTeamForm-317859e4.js";import{S as r}from"./SectionBorder-00c374d5.js";import l from"./TeamMemberManager-463ee794.js";import n from"./UpdateTeamNameForm-fc68893c.js";import{o as a,c,w as s,a as m,b as t,f as p,F as f,g as d}from"./app-863f6a58.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-282cb00d.js";import"./SectionTitle-fcf1da24.js";import"./ConfirmationModal-40e24a96.js";import"./DangerButton-ac6f7a99.js";import"./SecondaryButton-65665dd1.js";import"./ActionMessage-55b9ef21.js";import"./DialogModal-9a839800.js";import"./FormSection-4ebed3f3.js";import"./InputError-f7013a31.js";import"./InputLabel-7d2f42af.js";import"./PrimaryButton-878de7a7.js";import"./TextInput-8d7000a3.js";const u=m("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Team Settings ",-1),x={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},E={__name:"Show",props:{team:Object,availableRoles:Array,permissions:Object},setup(e){return(b,g)=>(a(),c(i,{title:"Team Settings"},{header:s(()=>[u]),default:s(()=>[m("div",null,[m("div",x,[t(n,{team:e.team,permissions:e.permissions},null,8,["team","permissions"]),t(l,{class:"mt-10 sm:mt-0",team:e.team,"available-roles":e.availableRoles,"user-permissions":e.permissions},null,8,["team","available-roles","user-permissions"]),e.permissions.canDeleteTeam&&!e.team.personal_team?(a(),p(f,{key:0},[t(r),t(o,{class:"mt-10 sm:mt-0",team:e.team},null,8,["team"])],64)):d("",!0)])])]),_:1}))}};export{E as default};
