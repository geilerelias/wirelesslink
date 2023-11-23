import{_ as x}from"./PageLayout-84bc572f.js";import{L as j}from"./LoadingComponent-cfa27272.js";import{K as k,r as l,j as C,s as L,k as o,o as i,c as m,w as e,b as a,a as r,u as M,h as T,t as B,f as D,i as E,F as N,g as P}from"./app-ee3b6ffb.js";import"./logo-cc70ed57.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./aos-d3d2cac4.js";const S={class:"text-md-left"},V=["data-aos","innerHTML"],H={class:"pt-md-10 border-top"},$={class:"mb-sm-6"},J={__name:"ProjectDetail",setup(z){const{props:_}=k(),s=l(_.project),{mobile:f}=C(),n=l([]);l([]);const h=async()=>{try{const t=await axios.get("/get/list/projects");n.value=t.data.find(d=>d.folder===s.value)}catch(t){console.error("Error al obtener la lista de proyectos",t)}};L(()=>{h()});const g=t=>{switch(t){case"hidropaneles":return`
                <span class="text-secondary  font-weight-light">
                    Sistema de Hidropaneles para
                </span>
                <br>
                <span class="ml-16 font-weight-bold font-weight-black">
                    Acceso Sostenible al Agua
                </span>`;case"panelsolar":return`
                <span class="text-secondary  font-weight-light">
                    Instalación de Paneles Solares para
                </span>
                <br>
                <span class="ml-16 font-weight-bold font-weight-black">
                    Energía Limpia
                </span>`;case"telecomunicacion":return`
                 <span class="text-secondary  font-weight-light">
                        Proyecto de Telecomunicación para
                    </span>
                <br>
                <span class="ml-16 font-weight-bold font-weight-black">
                    Conectividad Mejorada
                </span>`;default:return"Proyecto sin título definido"}},v=t=>{switch(t){case"hidropaneles":return"Encabezamos el desarrollo e implementación de hidropaneles para proporcionar una fuente sostenible y accesible de agua potable en comunidades con limitado acceso a recursos hídricos.";case"panelsolar":return"Contribuimos a la sostenibilidad mediante la instalación de paneles solares para alimentar nuestras operaciones con energía limpia y reducir nuestra huella de carbono.";case"telecomunicacion":return"Colaboramos en un proyecto para mejorar la conectividad en áreas remotas y urbanas, desempeñando un papel clave en la implementación de soluciones tecnológicas.";default:return"Mensaje no definido para este proyecto"}};return(t,d)=>{const c=o("v-col"),p=o("v-row"),u=o("v-container"),b=o("v-img"),y=o("v-card");return i(),m(x,{title:"Galería de imágenes"},{default:e(()=>[a(u,{class:""},{default:e(()=>[a(p,{class:"align-center justify-md-space-between justify-center pb-5 pt-12"},{default:e(()=>[a(c,{class:"v-col-12"},{default:e(()=>[r("div",S,[r("h2",{"data-aos":(M(f),"fade-up"),class:"text-h4 font-weight-bold text-dark text-primary mb-4","data-aos-delay":"200","data-aos-duration":"1000",innerHTML:g(s.value)},null,8,V)])]),_:1}),a(c,{class:"text-justify",cols:"12"},{default:e(()=>[T(B(v(s.value)),1)]),_:1})]),_:1})]),_:1}),r("div",H,[a(u,null,{default:e(()=>[a(p,null,{default:e(()=>[n.value.sub&&n.value.sub.length>0?(i(!0),D(N,{key:0},E(n.value.sub,w=>(i(),m(c,{class:"v-col-sm-4 v-col-12"},{default:e(()=>[r("div",$,[a(y,{class:"hover-card overflow-hidden lh-10 rounded-md position-relative"},{default:e(()=>[a(b,{src:`/get/img/${s.value}/${w}`,class:"zoom-in w-100",cover:"",style:{height:"300px"}},{placeholder:e(()=>[a(j)]),_:2},1032,["src"])]),_:2},1024)])]),_:2},1024))),256)):P("",!0)]),_:1})]),_:1})])]),_:1})}}};export{J as default};
