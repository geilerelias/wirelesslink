import{_ as i}from"./AppLayout-d2ab939c.js";import o from"./DeleteTeamForm-3516b881.js";import{S as r}from"./SectionBorder-e7c35a98.js";import l from"./TeamMemberManager-4b483dd9.js";import n from"./UpdateTeamNameForm-33f2e59a.js";import{o as a,c,w as s,a as m,b as t,f as p,F as f,g as d}from"./app-a738596a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-a5cb4825.js";import"./SectionTitle-06eaf799.js";import"./ConfirmationModal-6b3c57d0.js";import"./DangerButton-55223663.js";import"./SecondaryButton-82d30872.js";import"./ActionMessage-f088683f.js";import"./DialogModal-d88cfd3f.js";import"./FormSection-6965ab5b.js";import"./InputError-74cef0f8.js";import"./InputLabel-c64eca6b.js";import"./PrimaryButton-bf5f7e0a.js";import"./TextInput-5fbb973e.js";const u=m("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Team Settings ",-1),x={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},E={__name:"Show",props:{team:Object,availableRoles:Array,permissions:Object},setup(e){return(b,g)=>(a(),c(i,{title:"Team Settings"},{header:s(()=>[u]),default:s(()=>[m("div",null,[m("div",x,[t(n,{team:e.team,permissions:e.permissions},null,8,["team","permissions"]),t(l,{class:"mt-10 sm:mt-0",team:e.team,"available-roles":e.availableRoles,"user-permissions":e.permissions},null,8,["team","available-roles","user-permissions"]),e.permissions.canDeleteTeam&&!e.team.personal_team?(a(),p(f,{key:0},[t(r),t(o,{class:"mt-10 sm:mt-0",team:e.team},null,8,["team"])],64)):d("",!0)])])]),_:1}))}};export{E as default};