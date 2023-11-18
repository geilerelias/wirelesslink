import{T as B,j as n,o as p,c as b,w as s,a as e,b as t,h as i,k as O,u as a,t as y,g as x}from"./app-863f6a58.js";import{_ as A}from"./PageLayout-f8db46e8.js";import{_ as M}from"./SpinnerComponent-6133b44f.js";import"./logo-cc70ed57.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./aos-47f9db2b.js";const q="/build/assets/bg-contact-2-2b72d2c3.jpg",R={class:"pt-md-16 pt-5 border-top"},S={class:"border-bottom"},U={class:"mb-sm-16 mb-8 pb-md-5"},$=e("h2",{class:"text-h4 font-weight-bold text-dark text-primary mb-10 aos-init aos-animate","data-aos":"fade-up","data-aos-delay":"200","data-aos-duration":"1000"},[e("span",{class:"text-secondary font-weight-light"}," COLOCATE EN "),e("br"),e("span",{class:"ml-16 font-weight-bold font-weight-black"}," CONTACTO CON NOSOTROS ")],-1),T={class:"d-sm-flex d-block align-start text-md-start text-center"},L={class:"ml-md-12 ml-sm-5"},D=e("h3",{class:"text-h5 font-weight-bold text-dark mb-2"}," ENVÍANOS UN CORREO ",-1),F=e("p",{class:"text-body-1 text-muted mb-md-10 mb-sm-5 mb-3"}," No dude en escribirnos. Responderemos lo antes posible. ",-1),H={"aria-current":"page",class:"router-link-active router-link-exact-active text-decoration-none text-primary text-body-1 font-weight-medium d-flex align-center justify-center justify-sm-start",href:"#contact_form"},P={class:"d-sm-flex d-block align-start mt-md-0 mt-3 text-md-start text-center"},G={class:"ml-md-12 ml-sm-5"},I=e("h3",{class:"text-h5 font-weight-bold text-dark mb-2"}," Dirección ",-1),J=e("p",{class:"text-body-1 text-muted mb-md-10 mb-sm-5 mb-3"}," No dude en escribirnos. Responderemos lo antes posible. ",-1),K={"aria-current":"page",class:"router-link-active router-link-exact-active text-decoration-none text-primary text-body-1 font-weight-medium d-flex align-center justify-center justify-sm-start",href:"#map_marker"},Q={id:"map_marker",class:"mb-sm-16 mb-10 pb-md-5"},W=e("iframe",{allowfullscreen:"",height:"450",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1958.1412546686038!2d-74.81199653844546!3d11.01741767785567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42db9412b5a7f%3A0x252e4ee638a0e40a!2sCl.%2085B%20%2371a-30%2C%20Riomar%2C%20Barranquilla%2C%20Atl%C3%A1ntico!5e0!3m2!1ses-419!2sco!4v1700268064035!5m2!1ses-419!2sco",style:{border:"0"},width:"100%"},null,-1),X={id:"contact_form",class:"py-md-15 py-8"},Y={class:"py-md-9"},Z=e("h2",{class:"text-h4 text-dark mb-md-10 mb-6"},"Obtenga información en línea",-1),ee={class:"v-col-12 py-0"},te={class:"v-col-12 py-0"},se={class:"v-col-md-6 v-col-12"},oe={class:"text-center text-lg-end mt-md-0 mt-5"},ae={class:"bg-primary py-md-15 py-sm-8 py-8"},le={class:"py-md-9 py-2"},re={class:"pt-2 mb-0 d-flex align-center"},ne={class:"d-inline-flex mb-3 align-self-start"},ie=e("div",{class:"d-flex justify-center align-center"},[e("div",{class:"d-inline ml-3"},[e("h4",{class:"text-left text-h6 mb-1 secondary--text"},"Visítanos"),e("h5",{class:"font-weight-medium text-body-1 text-white ml-2"}," Calle 85 B # 71 A-30 Barrio El Limoncito / Barranquilla Atlántico ")])],-1),de={class:"pt-2 mb-0 d-flex align-center"},ce={class:"base-avatar d-inline-flex mb-3 align-self-start"},me=e("div",{class:"d-flex flex-column justify-center align-center"},[e("div",{class:"d-inline ml-3"},[e("h4",{class:"text-left text-h6 mb-1 secondary--text"},"Llámanos"),e("a",{href:"tel:+573003551477"},[e("h5",{class:"font-weight-medium text-body-1 text-white"}," +57 300 355 1477")])])],-1),ue={class:"pt-2 mb-0 d-flex align-center"},_e={class:"base-avatar d-inline-flex mb-3 align-self-start"},fe=e("div",{class:"d-flex flex-column justify-center align-center"},[e("div",{class:"d-inline ml-3"},[e("h4",{class:"text-left text-h6 mb-1 secondary--text"},"Escríbenos"),e("div",{class:"d-flex"},[e("a",{class:"text-decoration-none font-weight-medium text-body-1 text-white",href:"mailto:contacto@wirelesslink.com.co"}," contacto@wirelesslink.com.co ")])])],-1),we={__name:"ContactUs",setup(ve){const o=B({nombres:"",apellidos:"",email:"",asunto:"",mensaje:""}),w=[d=>!!d||"El E-mail es requerido",d=>/.+@.+\..+/.test(d)||"El email debe ser válido"],k=()=>{o.post("/enviar-correo",{onSuccess:d=>{console.log(d),o.successMessage="¡Mensaje enviado con éxito!"},onError:d=>{console.log(d),o.errorMessage="Hubo un error al enviar el mensaje. Por favor, inténtelo de nuevo."},onFinish:d=>{console.log(d)}})};return(d,r)=>{const m=n("v-icon"),u=n("v-avatar"),c=n("v-col"),f=n("v-row"),j=n("v-card"),g=n("v-container"),_=n("v-label"),v=n("v-text-field"),V=n("v-textarea"),E=n("v-btn"),C=n("v-form"),h=n("v-alert"),z=n("v-progress-linear"),N=n("v-img");return p(),b(A,{title:"Contact"},{default:s(()=>[e("div",R,[e("div",S,[t(g,null,{default:s(()=>[e("div",U,[$,t(f,{class:"v-row"},{default:s(()=>[t(c,{class:"v-col-md-5 v-col-12"},{default:s(()=>[e("div",T,[t(u,{class:"bg-accent mb-sm-0 mb-4",size:"64",variant:"flat"},{default:s(()=>[t(m,{color:"primary",icon:"mdi-mail",size:"32"})]),_:1}),e("div",L,[D,F,e("a",H,[i(" Dejar un mensaje "),t(m,{class:"ml-2",icon:"mdi-arrow-right",size:"26"})])])])]),_:1}),t(c,{class:"v-col-md-5 v-col-12"},{default:s(()=>[e("div",P,[t(u,{class:"bg-accent mb-sm-0 mb-4",size:"64",variant:"flat"},{default:s(()=>[t(m,{color:"primary",icon:"mdi-map-marker",size:"32"})]),_:1}),e("div",G,[I,J,e("a",K,[i(" Ver ubicación "),t(m,{class:"ml-2",icon:"mdi-arrow-right",size:"26"})])])])]),_:1})]),_:1})]),e("div",Q,[t(j,{class:"pa-0",height:"450"},{default:s(()=>[W]),_:1})])]),_:1})])]),e("div",X,[e("div",Y,[t(g,{class:""},{default:s(()=>[t(f,{class:"align-center"},{default:s(()=>[t(c,{class:"v-col-md-6 v-col-12"},{default:s(()=>[e("div",null,[Z,t(C,{novalidate:"",onSubmit:O(k,["prevent"])},{default:s(()=>[t(f,null,{default:s(()=>[t(c,{class:"v-col-sm-6 v-col-12 py-0"},{default:s(()=>[t(_,{class:"text-muted mb-2"},{default:s(()=>[i(" Nombres* ")]),_:1}),t(v,{modelValue:a(o).nombres,"onUpdate:modelValue":r[0]||(r[0]=l=>a(o).nombres=l),"error-messages":a(o).errors.nombres,rules:[l=>!!l||"El nombre es requerido"],density:"comfortable",variant:"outlined",onBlur:r[1]||(r[1]=l=>a(o).clearErrors("nombres"))},null,8,["modelValue","error-messages","rules"])]),_:1}),t(c,{class:"v-col-sm-6 v-col-12 py-0"},{default:s(()=>[t(_,{class:"text-muted mb-2"},{default:s(()=>[i(" Apellidos* ")]),_:1}),t(v,{modelValue:a(o).apellidos,"onUpdate:modelValue":r[2]||(r[2]=l=>a(o).apellidos=l),"error-messages":a(o).errors.apellidos,rules:[l=>!!l||"Los apellidos son requeridos"],density:"comfortable",variant:"outlined",onBlur:r[3]||(r[3]=l=>a(o).clearErrors("apellidos"))},null,8,["modelValue","error-messages","rules"])]),_:1}),e("div",ee,[t(_,{class:"text-muted mb-2"},{default:s(()=>[i(" Email* ")]),_:1}),t(v,{modelValue:a(o).email,"onUpdate:modelValue":r[4]||(r[4]=l=>a(o).email=l),"error-messages":a(o).errors.email,rules:w,density:"comfortable",variant:"outlined",onBlur:r[5]||(r[5]=l=>a(o).clearErrors("email"))},null,8,["modelValue","error-messages"])]),e("div",te,[t(_,{class:"text-muted mb-2"},{default:s(()=>[i(" Asunto* ")]),_:1}),t(v,{modelValue:a(o).asunto,"onUpdate:modelValue":r[6]||(r[6]=l=>a(o).asunto=l),"error-messages":a(o).errors.asunto,rules:[l=>!!l||"El asunto es requerido"],density:"comfortable",variant:"outlined",onBlur:r[7]||(r[7]=l=>a(o).clearErrors("asunto"))},null,8,["modelValue","error-messages","rules"])]),t(c,{class:"v-col v-col-12 py-0"},{default:s(()=>[t(_,{class:"text-muted mb-2"},{default:s(()=>[i(" Mensaje* ")]),_:1}),t(V,{modelValue:a(o).mensaje,"onUpdate:modelValue":r[8]||(r[8]=l=>a(o).mensaje=l),"error-messages":a(o).errors.mensaje,rules:[l=>!!l||"El mensaje es requerido"],density:"comfortable",variant:"outlined",onBlur:r[9]||(r[9]=l=>a(o).clearErrors("mensaje"))},null,8,["modelValue","error-messages","rules"])]),_:1}),t(c,{class:"v-col v-col-12 text-md-start text-center"},{default:s(()=>[t(E,{disabled:a(o).processing,class:"bg-primary rounded-md",size:"large",style:{"text-transform":"capitalize","letter-spacing":"0px"},type:"submit",variant:"flat"},{default:s(()=>[i(" Enviar mensaje ")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["onSubmit"]),a(o).successMessage?(p(),b(h,{key:0,class:"mt-4",type:"success"},{default:s(()=>[i(y(a(o).successMessage),1)]),_:1})):x("",!0),a(o).errorMessage?(p(),b(h,{key:1,class:"mt-4",type:"error"},{default:s(()=>[i(y(a(o).errorMessage),1)]),_:1})):x("",!0),a(o).processing?(p(),b(z,{key:2,class:"mt-4",indeterminate:""})):x("",!0),t(M,{opacity:.9,value:a(o).processing},null,8,["value"])])]),_:1}),e("div",se,[e("div",oe,[t(N,{"aspect-ratio":1,src:a(q),alt:"contact banner",class:"img-fluid rounded-md overflow-hidden",cover:""},null,8,["src"])])])]),_:1})]),_:1})])]),e("div",ae,[e("div",le,[t(g,null,{default:s(()=>[t(f,{class:"justify-space-between"},{default:s(()=>[t(c,{class:"v-col-md-3 v-col-12 pb-sm-4 pb-1"},{default:s(()=>[e("div",re,[e("div",ne,[t(u,{class:"secondary lighten-2",color:"secondary",size:"72"},{default:s(()=>[t(m,{color:"white ",size:"36"},{default:s(()=>[i("mdi-map-marker")]),_:1})]),_:1})]),ie])]),_:1}),t(c,{class:"v-col-md-3 v-col-12 pb-sm-4 pb-1"},{default:s(()=>[e("div",de,[e("div",ce,[t(u,{class:"grey lighten-2",color:"secondary",size:"72"},{default:s(()=>[t(m,{color:"white ",size:"36"},{default:s(()=>[i("mdi-phone")]),_:1})]),_:1})]),me])]),_:1}),t(c,{class:"v-col-md-4 v-col-12"},{default:s(()=>[e("div",ue,[e("div",_e,[t(u,{class:"grey lighten-2",color:"secondary",size:"72"},{default:s(()=>[t(m,{color:"white ",size:"36"},{default:s(()=>[i("mdi-email")]),_:1})]),_:1})]),fe])]),_:1})]),_:1})]),_:1})])])]),_:1})}}};export{we as default};