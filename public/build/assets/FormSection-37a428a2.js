import{d as m,bi as n,o as a,f as i,b as l,w as r,aT as e,a as t,bz as c,n as p,g as u}from"./app-ead025f0.js";import{S as g}from"./SectionTitle-4d205b08.js";const b={class:"md:grid md:grid-cols-3 md:gap-6"},_={class:"mt-5 md:mt-0 md:col-span-2"},h={class:"grid grid-cols-6 gap-6"},f={key:0,class:"flex items-center justify-end px-4 py-3 bg-gray-50 dark:bg-gray-800 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md"},$={__name:"FormSection",emits:["submitted"],setup(v){const o=m(()=>!!n().actions);return(s,d)=>(a(),i("div",b,[l(g,null,{title:r(()=>[e(s.$slots,"title")]),description:r(()=>[e(s.$slots,"description")]),_:3}),t("div",_,[t("form",{onSubmit:d[0]||(d[0]=c(y=>s.$emit("submitted"),["prevent"]))},[t("div",{class:p(["px-4 py-5 bg-white dark:bg-gray-800 sm:p-6 shadow",o.value?"sm:rounded-tl-md sm:rounded-tr-md":"sm:rounded-md"])},[t("div",h,[e(s.$slots,"form")])],2),o.value?(a(),i("div",f,[e(s.$slots,"actions")])):u("",!0)],32)])]))}};export{$ as _};
