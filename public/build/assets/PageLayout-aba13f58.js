import{H as B,j as a,o as d,c as h,w as o,b as e,u as r,l as k,s as q,d as R,r as L,q as D,I as H,J as V,f as g,a as t,g as S,F as z,i as I,n as C,h as v,t as P,z as Y,A as O,Z as U,x as J}from"./app-8c06971f.js";import{l as T}from"./logo-cc70ed57.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";import{A as Z}from"./aos-642706b9.js";const W=B("drawer",{state:()=>({drawer:null}),actions:{change(l){this.drawer=l}}}),A=B("links",{state:()=>({links:[{title:"Inicio",icon:"mdi-home",route:"home"},{title:"Nosotros",icon:"mdi-account-question",route:"about-us"},{title:"Servicios",icon:"mdi-account-question",route:"services"},{title:"Clientes",icon:"mdi-account",route:"clients"},{title:"Contáctenos",icon:"mdi-card-account-phone",route:"contact-us"}]})}),$={__name:"Logo",props:{color:{default:"white",type:String},circle:{default:!0,type:Boolean},transparent:{default:!1,type:Boolean},size:{default:55,type:Number}},setup(l){return(u,f)=>{const i=a("v-img"),s=a("v-avatar");return d(),h(r(k),{class:"d-flex align-center text-decoration-none router-link-exact-active router-link-active",href:"/"},{default:o(()=>[e(s,{color:l.color,size:l.size},{default:o(()=>[e(i,{src:l.transparent?r(T):r(T),alt:"logo"},null,8,["src"])]),_:1},8,["color","size"])]),_:1})}}},M="/build/assets/name-primary-4ac80d3a.png";const G={key:"logo-section",class:"d-flex align-center",style:{"max-width":"170px"}},K=["src"],Q={__name:"PageHeader",setup(l){const u=W(),f=A();q();const i=R(()=>route().current("home")),s=L(!0),n=()=>{s.value=window.scrollY<320};D(()=>{window.addEventListener("scroll",n)}),H(()=>{window.removeEventListener("scroll",n)});const m=c=>{u.change(!c)};return(c,x)=>{const b=a("v-spacer"),p=a("v-btn"),y=a("v-divider"),N=a("v-responsive"),E=a("v-icon"),j=a("v-app-bar");return d(),h(j,{class:C([{"bg-transparent white--text":s.value&&i.value,"bg-white":!s.value||!i.value},"px-sm-12 px-auto py-4"]),"scroll-behavior":"elevate","scroll-threshold":"320",tyle:"top: 0px; z-index: 1004; transform: translateY(0%); position: fixed; left: 0px; width: calc((100% - 0px) - 0px);"},{prepend:o(()=>[e(V,{mode:"out-in",name:"custom-transition"},{default:o(()=>[s.value&&i.value?S("",!0):(d(),g("div",G,[e($),t("img",{src:r(M),alt:"WirelessLink",style:{"object-fit":"contain",height:"30px"}},null,8,K)]))]),_:1})]),default:o(()=>[s.value&&i.value?S("",!0):(d(),h(b,{key:0})),(d(!0),g(z,null,I(r(f).links,_=>(d(),h(r(k),{key:_.id,href:c.route(_.route),class:"text-decoration-none d-md-flex d-none py-0 menu text-capitalize justify-center"},{default:o(()=>[t("div",null,[e(p,{class:C([{"active text-primary font-weight-black":c.route().current(_.route)&&!(s.value&&i.value),"active text-white font-weight-black":s.value&&i.value&&c.route().current(_.route),"text-secondary":!c.route().current(_.route)&&(!s.value||!i.value),"text-white":s.value&&i.value},"overline font-weight-bold rounded-lg"])},{default:o(()=>[v(P(_.title),1)]),_:2},1032,["class"]),e(V,{name:"fade"},{default:o(()=>[c.route().current(_.route)?(d(),h(N,{key:0,class:C([{"bg-white":s.value&&i.value,"bg-gradient":!(s.value&&i.value)},"rounded-lg mx-auto"])},{default:o(()=>[e(y,{class:"pb-0.5 rounded-lg",light:""})]),_:1},8,["class"])):S("",!0)]),_:2},1024)])]),_:2},1032,["href"]))),128)),e(b),e(r(k),{href:c.route("login")},{default:o(()=>[e(p,{color:s.value&&i.value?"white":"primary",class:"rounded-md d-md-flex d-none white-outline",size:"large",variant:"outlined"},{default:o(()=>[e(E,{class:"mr-1",icon:"mdi-account-circle"}),v(" login ")]),_:1},8,["color"])]),_:1},8,["href"]),e(r(k),{href:c.route("register")},{default:o(()=>[e(p,{class:"bg-secondary bg-primary ms-3 sticky-border d-lg-flex d-none",color:"white",size:"large"},{default:o(()=>[v(" register ")]),_:1})]),_:1},8,["href"]),e(p,{class:"d-md-none d-flex drawer-icon no-effect ml-auto mr-0",icon:"",tile:"",onClick:x[0]||(x[0]=_=>m(r(u).drawer))},{default:o(()=>[e(E,{dark:"",icon:"mdi-menu",size:"30"})]),_:1})]),_:1},8,["class"])}}},X=F(Q,[["__scopeId","data-v-86979c5e"]]);const w=l=>(Y("data-v-5077e981"),l=l(),O(),l),ee={class:"pt-md-16 pt-8 pb-md-10 pb-5"},te={class:"py-md-4 py-sm-3"},oe={class:"border-bottom z-index1"},ae={class:"logo d-flex align-center flex-column"},ie=["src"],se={class:"d-flex align-center justify-end"},ne={class:"ml-4"},re={class:"text-decoration-none",href:"tel:+573003551477",target:"_blank"},le={class:"ml-4"},ce={href:"https://wa.me/573003551477",target:"_blank"},de={class:"ml-4"},ue={href:"https://www.instagram.com/wirelesslink_/",target:"_blank"},me=w(()=>t("div",{class:"font-weight-medium mb-5 text-h6"},"Características",-1)),pe={"aria-current":"page",class:"router-link-active router-link-exact-active text-muted text-decoration-none text-capitalize font-weight-regular position-relative",href:"/#"},_e=w(()=>t("div",{class:"font-weight-medium mb-5 text-h6"},"Recursos",-1)),ve=w(()=>t("ul",null,[t("li",{class:"mb-2"},[t("a",{class:"text-muted text-decoration-none text-capitalize font-weight-regular position-relative",href:"/docs/index.html",rel:"noopener noreferrer"}," Documentación ")]),t("li",{class:"mb-2"},[t("a",{"aria-current":"page",class:"router-link-active router-link-exact-active text-muted text-decoration-none text-capitalize font-weight-regular position-relative",href:"/#"}," Terminos y condiciones ")]),t("li",{class:"mb-2"},[t("a",{"aria-current":"page",class:"router-link-active router-link-exact-active text-muted text-decoration-none text-capitalize font-weight-regular position-relative",href:"/#"}," Licencias ")]),t("li",{class:"mb-2"},[t("a",{"aria-current":"page",class:"router-link-active router-link-exact-active text-muted text-decoration-none text-capitalize font-weight-regular position-relative",href:"/#"}," Soporte ")]),t("li",{class:"mb-2"},[t("a",{"aria-current":"page",class:"router-link-active router-link-exact-active text-muted text-decoration-none text-capitalize font-weight-regular position-relative",href:"/#"}," Ayuda ")])],-1)),fe=w(()=>t("div",{class:"font-weight-medium mb-5 text-h6"},"Enlaces",-1)),ge=["href"],he={class:"newsletter"},xe=w(()=>t("div",{class:"mb-6 font-weight-medium text-h6"},"Regístrese para recibir actualizaciones",-1)),be={class:"d-flex align-center flex-fill"},we=w(()=>t("p",{class:"text-muted mt-6"},"© Copyright 2023. Todos los derechos reservados por Wirelesslink.",-1)),ye={__name:"PageFooter",setup(l){const u={nombre:"WirelessLink",caracteristicas:["Enfoque Personalizado","Amplio Portafolio de Servicios","Presencia Nacional","Compromiso con la Calidad y la Innovación","Equipo Multidisciplinario y Experimentado"],servicios:{infraestructura:{ultimaMilla:"Diseño y Suministro de Infraestructura en Ultima Milla",wirelessYFibraOptica:"Wireless y Fibra Óptica"},administracionIP:"Administración de Servicios IP",redesWifi:"Diseño, Implementación y Administración de Redes Wifi",consultoriaAuditoriasTIC:"Servicios de Consultoría y Auditorias en TICS",internet:{conexion:"Brindamos el servicio de conexión a Internet",fibraOpticaYRadio:"a partir de fibra óptica y radio enlaces",planes:["Banda ancha residencial","Corporativo","Dedicado de alta calidad"]},telefoniaVoIP:"Servicio de Telefonía VoIP",sistemasVigilancia:"SISTEMACCTV - Sistemas de Vigilancia en Video",monitoreoAlarmas:"Sistema de Seguridad y Monitoreo Inalámbrico",asesoriasConsultoriasTIC:"Asesorías y Consultorías sobre Tecnologías de Información y Comunicaciones",suministros:{computadoresTablet:"Computadores, Tablet, Portátiles, Accesorios y Partes",dispositivosRed:"Dispositivo y Accesorios de Red y Conexiones de Wifi",respaldoEnergia:"Sistemas de respaldo de Energía a partir de Paneles Solares",torreTelecomunicaciones:"Estudio diseño y construcción de torre de telecomunicaciones"}},contacto:{direccion:"Calle 85 B # 71 A-30, Barrio El Limoncito, Barranquilla, Atlántico",telefono:"300 355 1477",whatsapp:"300 355 1477",correo:"wirelesslinksas@gmail.com",instagram:"wirelesslink_"}},f=A();return(i,s)=>{const n=a("v-col"),m=a("v-icon"),c=a("v-row"),x=a("v-text-field"),b=a("v-container");return d(),g("div",ee,[t("div",te,[e(b,{class:"pb-3"},{default:o(()=>[t("div",oe,[e(c,{class:"justify-space-between align-center","no-gutters":""},{default:o(()=>[e(n,{class:"v-col-sm-6 v-col-3 d-flex justify-start"},{default:o(()=>[t("div",ae,[e($,{size:100}),t("img",{src:r(M),alt:"logo name",class:"img-fluid h-14",style:{"max-height":"40px"}},null,8,ie)])]),_:1}),e(n,{class:"v-col-sm-6 v-col-9"},{default:o(()=>[t("ul",se,[v("   "),t("li",ne,[t("a",re,[e(m,{color:"info"},{default:o(()=>[v("mdi-phone")]),_:1})]),v("   ")]),t("li",le,[t("a",ce,[e(m,{color:"success"},{default:o(()=>[v("mdi-whatsapp")]),_:1})])]),t("li",de,[t("a",ue,[e(m,{color:"pink"},{default:o(()=>[v("mdi-instagram")]),_:1})])])])]),_:1})]),_:1})]),e(c,{class:"pt-md-10 pt-6"},{default:o(()=>[e(n,{class:"v-col-sm-4 v-col-md-3 v-col-lg-3 v-col-6"},{default:o(()=>[me,t("ul",null,[(d(!0),g(z,null,I(u.caracteristicas,(p,y)=>(d(),g("li",{key:y,class:"mb-2"},[t("a",pe,P(p),1)]))),128))])]),_:1}),e(n,{class:"v-col-sm-4 v-col-md-2 v-col-lg-2 v-col-6"},{default:o(()=>[_e,ve]),_:1}),e(n,{class:"v-col-sm-4 v-col-md-3 v-col-lg-3 v-col-6"},{default:o(()=>[fe,t("ul",null,[(d(!0),g(z,null,I(r(f).links,(p,y)=>(d(),g("li",{key:y,class:"mb-2"},[t("a",{href:i.route(p.route),"aria-current":"page",class:"router-link-active router-link-exact-active text-muted text-decoration-none text-capitalize font-weight-regular position-relative",target:"_blank"},P(p.title),9,ge)]))),128))])]),_:1}),e(n,{class:"v-col-sm-12 v-col-md-4 v-col-lg-4 v-col-12"},{default:o(()=>[t("div",he,[xe,t("div",be,[e(x,{"append-inner-icon":"mdi-send",density:"comfortable",label:"Email address",variant:"outlined"})]),we])]),_:1})]),_:1})]),_:1})])])}}},ke=F(ye,[["__scopeId","data-v-5077e981"]]),Se="/build/assets/bg-logo-f796469f.png",Ce={__name:"PageDrawer",setup(l){A();const u=W();return L(null),(f,i)=>{const s=a("v-img"),n=a("v-list-item"),m=a("v-list"),c=a("v-divider"),x=a("v-navigation-drawer");return d(),h(x,{"expand-on-hover":"",modelValue:r(u).drawer,"onUpdate:modelValue":i[0]||(i[0]=b=>r(u).drawer=b),style:{"box-shadow":"rgb(0 0 0 / 20%) -20px 1px 17px 8px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px"},temporary:""},{default:o(()=>[e(s,{cover:"",src:r(Se)},null,8,["src"]),e(m,null,{default:o(()=>[e(n,{"prepend-avatar":r(T),subtitle:"tecnico@wirelesslink.com.co",title:"Juan Amador"},null,8,["prepend-avatar"])]),_:1}),e(c),e(m,{density:"compact",nav:""},{default:o(()=>[e(n,{"prepend-icon":"mdi-folder",title:"My Files",value:"myfiles"}),e(n,{"prepend-icon":"mdi-account-multiple",title:"Shared with me",value:"shared"}),e(n,{"prepend-icon":"mdi-star",title:"Starred",value:"starred"})]),_:1})]),_:1},8,["modelValue"])}}},Ae={__name:"PageLayout",props:{title:String},setup(l){function u(){window.scrollTo({top:0,behavior:"smooth"})}return D(()=>{Z.init()}),(f,i)=>{const s=a("v-btn"),n=a("v-main"),m=a("v-app");return d(),h(m,null,{default:o(()=>[e(r(U),{title:l.title},null,8,["title"]),e(Ce),e(X),e(n,null,{default:o(()=>[J(f.$slots,"default"),e(s,{class:"bg-primary rounded-circle position-fixed right-0 bottom-0 mb-10 mr-5 z-index1",fab:"",icon:"mdi-chevron-up","scroll-to":"'#scrolltop'",variant:"elevated",onClick:u})]),_:3}),e(ke)]),_:3})}}};export{Ae as _,$ as a,Se as b,M as n};
