import{_ as i}from"./AppLayout-f64190b8.js";import o from"./DeleteTeamForm-1439028f.js";import{S as r}from"./SectionBorder-e3bc0778.js";import l from"./TeamMemberManager-674e4842.js";import n from"./UpdateTeamNameForm-a6c6350f.js";import{o as a,c,w as s,a as m,b as t,f as p,F as f,g as d}from"./app-ead025f0.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-8d99a5a7.js";import"./SectionTitle-4d205b08.js";import"./ConfirmationModal-6e0107ee.js";import"./DangerButton-30be8c93.js";import"./SecondaryButton-a43825ce.js";import"./ActionMessage-7cf639bc.js";import"./DialogModal-77cb7492.js";import"./FormSection-37a428a2.js";import"./InputError-ea71e17a.js";import"./InputLabel-8ff6b0a8.js";import"./PrimaryButton-40340e2e.js";import"./TextInput-6c69ac26.js";const u=m("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Team Settings ",-1),x={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},E={__name:"Show",props:{team:Object,availableRoles:Array,permissions:Object},setup(e){return(b,g)=>(a(),c(i,{title:"Team Settings"},{header:s(()=>[u]),default:s(()=>[m("div",null,[m("div",x,[t(n,{team:e.team,permissions:e.permissions},null,8,["team","permissions"]),t(l,{class:"mt-10 sm:mt-0",team:e.team,"available-roles":e.availableRoles,"user-permissions":e.permissions},null,8,["team","available-roles","user-permissions"]),e.permissions.canDeleteTeam&&!e.team.personal_team?(a(),p(f,{key:0},[t(r),t(o,{class:"mt-10 sm:mt-0",team:e.team},null,8,["team"])],64)):d("",!0)])])]),_:1}))}};export{E as default};