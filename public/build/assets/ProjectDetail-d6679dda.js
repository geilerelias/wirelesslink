import{_ as P}from"./PageLayout-d037e720.js";import{bJ as S,r as f,j as T,aD as B,k as r,o as s,c as d,w as a,b as t,a as h,u as n,h as E,t as I,f as _,F as b,i as y}from"./app-ead025f0.js";import $ from"./Gallery-466fcd1a.js";import{_ as F}from"./SpinnerComponent-9d761fc1.js";import{L as H}from"./LoadingComponent-7cf31ef4.js";import"./Logo-cba53118.js";import"./logo-cc70ed57.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./aos-6fde2474.js";import"./lazy-bg-1-41b88f2b.js";const N={class:"text-md-left"},V=["data-aos","innerHTML"],A={class:"border-top"},G={key:0},Z={__name:"ProjectDetail",setup(z){const{props:w}=S(),c=f(w.project),{mobile:x}=T();let i=[],p=f(!0);const u=f([]);B(()=>{k()});const k=async()=>{try{const o=await axios.get("/get/list/projects");console.log(o.data),u.value=await o.data.find(e=>e.folder===c.value),console.log(u.value);const m=u.value.sub;p.value=!1,m.length>0?i=m.map(e=>({url:`/get/img/${c.value}/${e.url}`,width:e.width,height:e.height})):console.log("nada")}catch(o){console.error("Error al obtener la lista de proyectos",o)}},j=o=>{switch(o){case"hidropaneles":return`
                <span class="text-secondary  font-weight-light">
                    Sistema de Hidropaneles para
                </span>
                <br>
                <span class="ml-16 font-weight-bold font-weight-black">
                    Acceso Sostenible al Agua
                </span>`;case"panelsolar":return`
                <span class="text-secondary  font-weight-light">

                    Innovación y Sostenibilidad
                </span>
                <br>
                <span class="ml-16 font-weight-bold font-weight-black">
                    Instalación de Paneles Solares para Energía Fotovoltaica
                </span>`;case"telecomunicacion":return`
                 <span class="text-secondary  font-weight-light">
                        Proyecto de Telecomunicación para
                    </span>
                <br>
                <span class="ml-16 font-weight-bold font-weight-black">
                    Conectividad Mejorada
                </span>`;default:return"Proyecto sin título definido"}},C=o=>{switch(o){case"hidropaneles":return"Encabezamos el desarrollo e implementación de hidropaneles para proporcionar una fuente sostenible y accesible de agua potable en comunidades con limitado acceso a recursos hídricos.";case"panelsolar":return"Contribuimos a la sostenibilidad mediante la instalación de paneles solares para alimentar nuestras operaciones con energía limpia y reducir nuestra huella de carbono.";case"telecomunicacion":return"Colaboramos en un proyecto para mejorar la conectividad en áreas remotas y urbanas, desempeñando un papel clave en la implementación de soluciones tecnológicas.";default:return"Mensaje no definido para este proyecto"}};return(o,m)=>{const e=r("v-col"),g=r("v-row"),v=r("v-container"),D=r("v-skeleton-loader"),L=r("v-card");return s(),d(P,{title:"Galería de imágenes"},{default:a(()=>[t(v,{class:""},{default:a(()=>[t(g,{class:"align-center justify-md-space-between justify-center pb-5 pt-12"},{default:a(()=>[t(e,{class:"v-col-12"},{default:a(()=>[h("div",N,[h("h2",{"data-aos":(n(x),"fade-up"),class:"text-h4 font-weight-bold text-dark text-primary mb-4","data-aos-delay":"200","data-aos-duration":"1000",innerHTML:j(c.value)},null,8,V)])]),_:1}),t(e,{class:"text-justify",cols:"12"},{default:a(()=>[E(I(C(c.value)),1)]),_:1})]),_:1})]),_:1}),h("div",A,[t(v,null,{default:a(()=>[n(p)?(s(),_("div",G,[t(g,null,{default:a(()=>[(s(!0),_(b,null,y(n(i),l=>(s(),d(e,{key:l,class:"d-flex child-flex",cols:"4",md:"3"},{default:a(()=>[t(D,{type:"image"})]),_:2},1024))),128)),(s(!0),_(b,null,y(n(i),(l,M)=>(s(),d(e,{key:M,class:"d-flex child-flex",cols:"12",lg:"3",md:"4",sm:"6"},{default:a(()=>[t(L,{"data-pswp-height":l.height,"data-pswp-width":l.width,href:l.url,class:"hover-card overflow-hidden rounded-md h-100",elevation:"10",rel:"noreferrer",target:"_blank"},{default:a(()=>[t(H)]),_:2},1032,["data-pswp-height","data-pswp-width","href"])]),_:2},1024))),128))]),_:1})])):(s(),d($,{key:1,images:n(i),galleryID:"my-test-gallery"},null,8,["images"]))]),_:1}),t(F,{value:n(p),text:"Procesando imágenes"},null,8,["value"])])]),_:1})}}};export{Z as default};
