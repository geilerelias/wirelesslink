import{H as j,k as a,o as r,c as g,w as o,b as e,u as i,m as C,j as R,d as H,r as L,s as A,I as O,J as D,f as w,a as t,g as z,F as I,i as P,n as S,h as f,t as E,z as q,A as U,O as Y,L as J,Z,x as G}from"./app-96be83f2.js";import{l as B}from"./logo-cc70ed57.js";import{_ as W}from"./_plugin-vue_export-helper-c27b6911.js";import{b as K,n as Q,A as X}from"./aos-5f2a9189.js";const F=j("drawer",{state:()=>({drawer:null}),actions:{change(c){this.drawer=c}}}),V=j("links",{state:()=>({links:[{title:"Inicio",icon:"mdi-home",route:"home"},{title:"Nosotros",icon:"mdi-account-question",route:"about-us"},{title:"Servicios",icon:"mdi-tools",route:"services"},{title:"Clientes",icon:"mdi-account-multiple",route:"clients"},{title:"Contáctenos",icon:"mdi-card-account-phone",route:"contact-us"}]})}),N={__name:"Logo",props:{color:{default:"white",type:String},circle:{default:!0,type:Boolean},transparent:{default:!1,type:Boolean},size:{default:55,type:Number}},setup(c){return(m,u)=>{const n=a("v-img"),s=a("v-avatar");return r(),g(i(C),{class:"d-flex align-center text-decoration-none router-link-exact-active router-link-active",href:"/"},{default:o(()=>[e(s,{color:c.color,size:c.size},{default:o(()=>[e(n,{src:c.transparent?i(B):i(B),alt:"logo"},null,8,["src"])]),_:1},8,["color","size"])]),_:1})}}},M="/build/assets/name-primary-4ac80d3a.png";const ee={key:"logo-section",class:"d-flex align-center",style:{"max-width":"170px"}},te=["src"],oe={__name:"PageHeader",setup(c){const m=F(),u=V();R();const n=H(()=>route().current("home")),s=L(!0),d=()=>{s.value=window.scrollY<320};A(()=>{window.addEventListener("scroll",d)}),O(()=>{window.removeEventListener("scroll",d)});const p=l=>{m.change(!l)};return(l,h)=>{const y=a("v-spacer"),_=a("v-btn"),b=a("v-divider"),T=a("v-responsive"),v=a("v-icon"),$=a("v-app-bar");return r(),g($,{class:S([{"bg-transparent white--text":s.value&&n.value,"bg-white":!s.value||!n.value},"px-sm-12 px-auto py-4"]),"scroll-behavior":"elevate"},{prepend:o(()=>[e(D,{mode:"out-in",name:"custom-transition"},{default:o(()=>[s.value&&n.value?z("",!0):(r(),w("div",ee,[e(N),t("img",{src:i(M),alt:"WirelessLink",style:{"object-fit":"contain",height:"30px"}},null,8,te)]))]),_:1})]),default:o(()=>[s.value&&n.value?z("",!0):(r(),g(y,{key:0})),(r(!0),w(I,null,P(i(u).links,x=>(r(),g(i(C),{key:x.id,href:l.route(x.route),class:"text-decoration-none d-md-flex d-none py-0 menu text-capitalize justify-center"},{default:o(()=>[t("div",null,[e(_,{class:S([{"active text-primary font-weight-black":l.route().current(x.route)&&!(s.value&&n.value),"active text-white font-weight-black":s.value&&n.value&&l.route().current(x.route),"text-secondary":!l.route().current(x.route)&&(!s.value||!n.value),"text-white":s.value&&n.value},"overline font-weight-bold rounded-lg"])},{default:o(()=>[f(E(x.title),1)]),_:2},1032,["class"]),e(D,{name:"fade"},{default:o(()=>[l.route().current(x.route)?(r(),g(T,{key:0,class:S([{"bg-white":s.value&&n.value,"bg-gradient":!(s.value&&n.value)},"rounded-lg mx-auto"])},{default:o(()=>[e(b,{class:"pb-0.5 rounded-lg",light:""})]),_:1},8,["class"])):z("",!0)]),_:2},1024)])]),_:2},1032,["href"]))),128)),e(y),e(i(C),{href:l.route("login")},{default:o(()=>[e(_,{color:s.value&&n.value?"white":"primary",class:"rounded-md d-md-flex d-none white-outline",size:"large",variant:"outlined"},{default:o(()=>[e(v,{class:"mr-1",icon:"mdi-account-circle"}),f(" login ")]),_:1},8,["color"])]),_:1},8,["href"]),e(i(C),{href:l.route("register")},{default:o(()=>[e(_,{class:"bg-secondary bg-primary ml-2 d-lg-flex d-none",color:"white",size:"large"},{default:o(()=>[f(" register ")]),_:1})]),_:1},8,["href"]),e(_,{class:S([{"text-white bg-primary":s.value&&n.value},"d-md-none d-flex"]),icon:"",tile:"",onClick:h[0]||(h[0]=x=>p(i(m).drawer))},{default:o(()=>[e(v,{dark:"",icon:"mdi-menu",size:"30"})]),_:1},8,["class"])]),_:1},8,["class"])}}},ae=W(oe,[["__scopeId","data-v-3f860e63"]]);const k=c=>(q("data-v-1e1eb25a"),c=c(),U(),c),se={class:"pt-md-16 pt-8 pb-md-10 pb-5"},ne={class:"py-md-4 py-sm-3"},ie={class:"border-bottom z-index1"},re={class:"logo d-flex align-center flex-column"},le=["src"],ce={class:"d-flex align-center justify-end"},de={class:"ml-4"},ue={class:"text-decoration-none",href:"tel:+573003551477",target:"_blank"},_e={class:"ml-4"},me={href:"https://wa.me/573003551477",target:"_blank"},pe={class:"ml-4"},ve={href:"https://www.instagram.com/wirelesslink_/",target:"_blank"},fe=k(()=>t("div",{class:"font-weight-medium mb-5 text-h6"},"Características",-1)),ge={"aria-current":"page",class:"router-link-active router-link-exact-active text-muted text-decoration-none text-capitalize font-weight-regular position-relative",href:"/#"},he=k(()=>t("div",{class:"font-weight-medium mb-5 text-h6"},"Recursos",-1)),xe=k(()=>t("ul",null,[t("li",{class:"mb-2"},[t("a",{class:"text-muted text-decoration-none text-capitalize font-weight-regular position-relative",href:"/docs/index.html",rel:"noopener noreferrer"}," Documentación ")]),t("li",{class:"mb-2"},[t("a",{"aria-current":"page",class:"router-link-active router-link-exact-active text-muted text-decoration-none text-capitalize font-weight-regular position-relative",href:"/#"}," Terminos y condiciones ")]),t("li",{class:"mb-2"},[t("a",{"aria-current":"page",class:"router-link-active router-link-exact-active text-muted text-decoration-none text-capitalize font-weight-regular position-relative",href:"/#"}," Licencias ")]),t("li",{class:"mb-2"},[t("a",{"aria-current":"page",class:"router-link-active router-link-exact-active text-muted text-decoration-none text-capitalize font-weight-regular position-relative",href:"/#"}," Soporte ")]),t("li",{class:"mb-2"},[t("a",{"aria-current":"page",class:"router-link-active router-link-exact-active text-muted text-decoration-none text-capitalize font-weight-regular position-relative",href:"/#"}," Ayuda ")])],-1)),we=k(()=>t("div",{class:"font-weight-medium mb-5 text-h6"},"Enlaces",-1)),be={class:"newsletter"},ye=k(()=>t("div",{class:"mb-6 font-weight-medium text-h6"},"Regístrese para recibir actualizaciones",-1)),ke={class:"d-flex align-center flex-fill"},Se=k(()=>t("p",{class:"text-muted mt-6"},"© Copyright 2023. Todos los derechos reservados por Wirelesslink.",-1)),Ce={__name:"PageFooter",setup(c){const m={nombre:"WirelessLink",caracteristicas:["Enfoque Personalizado","Amplio Portafolio de Servicios","Presencia Nacional","Compromiso con la Calidad y la Innovación","Equipo Multidisciplinario y Experimentado"],servicios:{infraestructura:{ultimaMilla:"Diseño y Suministro de Infraestructura en Ultima Milla",wirelessYFibraOptica:"Wireless y Fibra Óptica"},administracionIP:"Administración de Servicios IP",redesWifi:"Diseño, Implementación y Administración de Redes Wifi",consultoriaAuditoriasTIC:"Servicios de Consultoría y Auditorias en TICS",internet:{conexion:"Brindamos el servicio de conexión a Internet",fibraOpticaYRadio:"a partir de fibra óptica y radio enlaces",planes:["Banda ancha residencial","Corporativo","Dedicado de alta calidad"]},telefoniaVoIP:"Servicio de Telefonía VoIP",sistemasVigilancia:"SISTEMACCTV - Sistemas de Vigilancia en Video",monitoreoAlarmas:"Sistema de Seguridad y Monitoreo Inalámbrico",asesoriasConsultoriasTIC:"Asesorías y Consultorías sobre Tecnologías de Información y Comunicaciones",suministros:{computadoresTablet:"Computadores, Tablet, Portátiles, Accesorios y Partes",dispositivosRed:"Dispositivo y Accesorios de Red y Conexiones de Wifi",respaldoEnergia:"Sistemas de respaldo de Energía a partir de Paneles Solares",torreTelecomunicaciones:"Estudio diseño y construcción de torre de telecomunicaciones"}},contacto:{direccion:"Calle 85 B # 71 A-30, Barrio El Limoncito, Barranquilla, Atlántico",telefono:"300 355 1477",whatsapp:"300 355 1477",correo:"wirelesslinksas@gmail.com",instagram:"wirelesslink_"}},u=V();return(n,s)=>{const d=a("v-col"),p=a("v-icon"),l=a("v-row"),h=a("v-text-field"),y=a("v-container");return r(),w("div",se,[t("div",ne,[e(y,{class:"pb-3"},{default:o(()=>[t("div",ie,[e(l,{class:"justify-space-between align-center","no-gutters":""},{default:o(()=>[e(d,{class:"v-col-sm-6 v-col-3 d-flex justify-start"},{default:o(()=>[t("div",re,[e(N,{size:100}),t("img",{src:i(M),alt:"logo name",class:"img-fluid h-14",style:{"max-height":"40px"}},null,8,le)])]),_:1}),e(d,{class:"v-col-sm-6 v-col-9"},{default:o(()=>[t("ul",ce,[f("   "),t("li",de,[t("a",ue,[e(p,{color:"info"},{default:o(()=>[f("mdi-phone")]),_:1})]),f("   ")]),t("li",_e,[t("a",me,[e(p,{color:"success"},{default:o(()=>[f("mdi-whatsapp")]),_:1})])]),t("li",pe,[t("a",ve,[e(p,{color:"pink"},{default:o(()=>[f("mdi-instagram")]),_:1})])])])]),_:1})]),_:1})]),e(l,{class:"pt-md-10 pt-6"},{default:o(()=>[e(d,{class:"v-col-sm-4 v-col-md-3 v-col-lg-3 v-col-6"},{default:o(()=>[fe,t("ul",null,[(r(!0),w(I,null,P(m.caracteristicas,(_,b)=>(r(),w("li",{key:b,class:"mb-2"},[t("a",ge,E(_),1)]))),128))])]),_:1}),e(d,{class:"v-col-sm-4 v-col-md-2 v-col-lg-2 v-col-6"},{default:o(()=>[he,xe]),_:1}),e(d,{class:"v-col-sm-4 v-col-md-3 v-col-lg-3 v-col-6"},{default:o(()=>[we,t("ul",null,[(r(!0),w(I,null,P(i(u).links,(_,b)=>(r(),w("li",{key:b,class:"mb-2"},[e(i(C),{href:n.route(_.route),"aria-current":"page",class:"router-link-active router-link-exact-active text-muted text-decoration-none text-capitalize font-weight-regular position-relative",target:"_blank"},{default:o(()=>[f(E(_.title),1)]),_:2},1032,["href"])]))),128))])]),_:1}),e(d,{class:"v-col-sm-12 v-col-md-4 v-col-lg-4 v-col-12"},{default:o(()=>[t("div",be,[ye,t("div",ke,[e(h,{"append-inner-icon":"mdi-send",density:"comfortable",label:"Email address",variant:"outlined"})]),Se])]),_:1})]),_:1})]),_:1})])])}}},ze=W(Ce,[["__scopeId","data-v-1e1eb25a"]]),Ie={class:"d-flex align-center flex-column mt-12"},Pe=["src"],Te=["src"],Ae={__name:"PageDrawer",setup(c){const m=V(),u=F();L(null);function n(s){Y.get(route(s)),u.drawer=!1}return(s,d)=>{const p=a("v-col"),l=a("v-row"),h=a("v-img"),y=a("v-divider"),_=a("v-list-item"),b=a("v-list"),T=a("v-navigation-drawer");return r(),g(T,{modelValue:i(u).drawer,"onUpdate:modelValue":d[0]||(d[0]=v=>i(u).drawer=v),"expand-on-hover":"",style:{"box-shadow":"rgb(0 0 0 / 20%) -20px 1px 17px 8px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px"},temporary:""},{default:o(()=>[e(h,{src:i(K),cover:"",gradient:"to top right, rgb(21 92 138 / 75%), rgb(4 16 35 / 82%)"},{default:o(()=>[e(l,{class:"d-flex fill-height align-center justify-center"},{default:o(()=>[e(p,{class:"d-flex justify-center"},{default:o(()=>[t("div",Ie,[t("img",{src:i(B),alt:"logo","data-aos":"fade-up","data-aos-delay":"200","data-aos-duration":"1000",style:{height:"100px"}},null,8,Pe),t("img",{src:i(Q),alt:"logo name",class:"h-14 mt-4","data-aos":"fade-down","data-aos-delay":"200","data-aos-duration":"1000",style:{"object-fit":"contain",width:"80%"}},null,8,Te)])]),_:1})]),_:1})]),_:1},8,["src"]),e(y),e(b,{density:"compact",nav:""},{default:o(()=>[(r(!0),w(I,null,P(i(m).links,v=>(r(),g(_,{class:S({"v-list-item--active text-primary font-weight-black":s.route().current(v.route)}),"prepend-icon":v.icon,title:v.title,onClick:$=>n(v.route)},null,8,["class","prepend-icon","title","onClick"]))),256))]),_:1})]),_:1},8,["modelValue"])}}},Ee={class:"position-fixed right-0 bottom-0 mb-10 mr-5 z-index1"},De={__name:"PageLayout",props:{title:String},setup(c){function m(){window.scrollTo({top:0,behavior:"smooth"})}A(()=>{X.init()});const u=L(!1),n=()=>{u.value=window.scrollY>100};return A(()=>{window.addEventListener("scroll",n)}),J(()=>{window.removeEventListener("scroll",n)}),(s,d)=>{const p=a("v-btn"),l=a("v-main"),h=a("v-app");return r(),g(h,null,{default:o(()=>[e(i(Z),{title:c.title},null,8,["title"]),e(Ae),e(ae),e(l,null,{default:o(()=>[G(s.$slots,"default"),t("div",Ee,[u.value?(r(),g(p,{key:0,class:"bg-primary rounded-circle",fab:"",icon:"mdi-chevron-up","scroll-to":"'#scrolltop'",variant:"elevated",onClick:m})):z("",!0)])]),_:3}),e(ze)]),_:3})}}};export{De as _,N as a,M as n};