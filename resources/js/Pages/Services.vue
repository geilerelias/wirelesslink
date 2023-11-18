<script setup>
import {ref} from "vue";
import Logo from "@/Components/Logo.vue";
import PageLayout from "@/Layouts/PageLayout.vue";
import user1 from "../../images/avatar/user-1.png";
import user2 from "../../images/avatar/user-2.png";
import user3 from "../../images/avatar/user-3.png";
import user4 from "../../images/avatar/user-4.png";
import user5 from "../../images/avatar/user-5.png";
import services1 from "../../images/services/services-1.png";
import services2 from "../../images/services/services-2.png";
import services3 from "../../images/services/services-3.png";
import services41 from "../../images/services/services-4 (1).png";
import services42 from "../../images/services/services-4 (2).png";
import services43 from "../../images/services/services-4 (3).png";
import services5 from "../../images/services/services-5.png";
import services6 from "../../images/services/services-6.png";
import services71 from "../../images/services/services-7 (1).png";
import services72 from "../../images/services/services-7 (2).png";
import bgWirelesslink from "../../images/bg/bg-pexels-fauxels.jpg";
import contact from "../../images/bg/bg-contact.jpg";


const listAvatar = [user1, user2, user3, user4, user5];
const services = [
    {
        title1: 'PROVEEDOR DE',
        title2: 'SERVICIO DE INTERNET',
        title3: '',
        description: `Brindamos el servicio de conexión a Internet, a
        partir de fibra óptica y radio enlaces. Ofrecemos
        planes de internet banda ancha residencial,
        corporativo y dedicado de alta calidad. `,
        img: [services1]
    }, {
        title1: 'DISEÑO, INSTALACIÓN',
        title2: 'Y CONFIGURACIÓN',
        title3: 'DE REDES DE INTERNET Y TELECOMUNICACIONES VÍA WIFI Y CABLEADO ESTRUCTURADO:',
        description: `Podrás compartir los recursos informáticos, Ahorrarás
        en hardware, software, espacio y por ende en dinero,
        mejorando así el rendimiento de tu empresa y la
        atención a los clientes o usuarios. `,
        img: [services2]
    }, {
        title1: 'SUMINISTRO',
        title2: 'DE TELEFONÍA VOIP',
        title3: '',
        description: `Una llamada mediante telefonía VoIP es en la mayoría de
        los casos mucho más económica que su equivalente en
         telefonía convencional, con VoIP es posible realizar
        una llamada desde cualquier lugar con acceso a internet,
        La mayoría de los proveedores de VOIP entregan
        características por las cuales las operadoras de
        telefonía convencional cobran tarifas aparte. Un servicio
        de VOIP incluye: Identificación de llamadas, Servicio de
        llamadas en espera, Servicio de transferencia de llamadas,
        Repetir llamada, Devolver llamada, Llamada de 3 líneas. `,
        img: [services3]
    }, {
        title1: 'SISTEMA',
        title2: 'CCTV',
        title3: '',
        description: `Los sistemas de vigilancia en video se han convertido en
        una verdadera necesidad, estos ofrecen mayor seguridad y
        proporcionará una gran tranquilidad en el lugar de trabajo,
        ayudando en la prevención y resolución de actividades
        ilegales. `,
        img: [services41, services42, services43]
    }, {
        title1: 'SISTEMA DE SEGURIDAD',
        title2: ' Y MONITOREO INALÁMBRICO',
        title3: '',
        description: `Servicio para monitoreo de alarmas con un innovador
        sistema de fácil instalación inalámbrica que se ajusta a las
        necesidades del usuario. Los usuarios podrán administrar la
        seguridad de su hogar y empresa desde cualquier lugar a
        través de un dispositivo electrónico (celular, tablet o computador). `,
        img: [services5]
    }, {
        title1: 'ASESORÍAS CONSULTORÍAS',
        title2: 'SOBRE TECNOLOGÍAS',
        title3: 'DE INFORMACIÓN Y COMUNICACIONES, TANTO EN ENTIDADES PRIVADAS COMO INSTITUCIONALES:',
        description: `Servicio para monitoreo de alarmas con un innovador
        sistema de fácil instalación inalámbrica que se ajusta a las
        necesidades del usuario. Los usuarios podrán administrar la
        seguridad de su hogar y empresa desde cualquier lugar a
        través de un dispositivo electrónico (celular, tablet o computador). `,
        img: [services6]
    }, {
        title1: '',
        title2: 'SUMINISTROS',
        title3: '',
        description: `Servicio para monitoreo de alarmas con un innovador
        sistema de fácil instalación inalámbrica que se ajusta a las
        necesidades del usuario. Los usuarios podrán administrar la
        seguridad de su hogar y empresa desde cualquier lugar a
        través de un dispositivo electrónico (celular, tablet o computador). `,
        img: [services71, services72]
    },
]
const processList = [
    {
        id: 1,
        icon: 'mdi mdi-eye-check-outline',
        title: 'Análisis',
        description: 'Comprender las necesidades del cliente y evaluar los requisitos tecnológicos y de comunicación.',
    },
    {
        id: 2,
        icon: 'mdi mdi-cog-outline',
        title: 'Diseño ',
        description: 'Desarrollar propuestas personalizadas para la infraestructura e implementar soluciones de última milla, wireless y fibra óptica.',
    },
    {
        id: 3,
        icon: 'mdi mdi-wifi',
        title: 'Gestión',
        description: 'Diseñar, implementar y administrar redes Wifi. Administrar servicios IP para garantizar rendimiento y seguridad.',
    },
    {
        id: 4,
        icon: 'mdi mdi-lightbulb-on-outline',
        title: 'Consultoría',
        description: 'Ofrecer asesoramiento estratégico en tecnologías de la información. Realizar auditorías para evaluar seguridad y rendimiento.',
    },
];
const dialog = ref(false)

</script>

<template>
    <page-layout title="Services">
        <div class="pb-sm-16 pb-8  border-top">
            <v-container class="">
                <v-row class="align-center justify-md-space-between justify-center pb-5 pt-4">
                    <v-col class="v-col-md-6 v-col-12">
                        <div class="text-left position-relative about-content">
                            <h2
                                class="text-h4 font-weight-bold text-dark text-primary mb-4 aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay="200" data-aos-duration="1000">
                                <span class="text-secondary  font-weight-light">
                                    Nuestros
                                </span>
                                <br>
                                <span class="ml-16 font-weight-bold font-weight-black">
                                    Servicios
                                </span>
                            </h2>
                            <p class="text-body-1 text-justify text-muted bg-surface position-relative z-index1 aos-init aos-animate"
                               data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                                En wirelesslink, nos enorgullece ofrecer una gama completa de servicios diseñados para
                                satisfacer tus necesidades más exigentes. Desde soluciones tecnológicas personalizadas
                                hasta asesoramiento estratégico, nuestro compromiso es brindarte resultados
                                excepcionales. Ya sea que estés buscando optimizar tu infraestructura, implementar
                                soluciones innovadoras o mejorar la eficiencia operativa, nuestro equipo de expertos
                                está aquí para ayudarte en cada paso del camino. Descubre cómo nuestros servicios pueden
                                impulsar tu éxito empresarial.

                            </p>
                        </div>
                    </v-col>
                    <v-col class="v-col-md-4 v-col-12">
                        <v-card class="rounded-md grey-lighten-2 position-relative z-index1 mt-md-6 mb-md-n16"
                                color="blue-grey-lighten-5" elevation="10"
                                variant="elevated">
                            <v-card-item class=" px-lg-15 px-8 py-sm-11 py-5">
                                <logo></logo>
                                <div class="font-weight-bold text-dark mt-2 mb-1">Servicios fantásticos</div>
                                <p class="text-h6 font-weight-regular text-muted mb-4 text-justify">
                                    Nuestros servicios se destacan por soluciones tecnológicas de calidad que superan
                                    expectativas, impulsando el éxito de nuestros clientes.
                                </p>
                                <p class="text-muted">Recomendado por </p>
                                <div class="d-flex align-center mt-6">

                                    <v-avatar v-for="avatar in listAvatar" class="mr-n2" color="white" flat
                                              size="48"
                                              variant="outlined">
                                        <img :src="avatar"
                                             alt="profile"
                                             height="48"
                                             width="48">
                                    </v-avatar>
                                    <v-avatar class="bg-primary mr-n2" color="white"
                                              flat
                                              size="48"
                                              variant="outlined"> 16k
                                    </v-avatar>
                                    <p class="text-subtitle-1 text-grey100 ml-2"></p></div>
                            </v-card-item>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
            <v-container class="service-video mt-12 mx-auto">
                <div class="video-bg  rounded-md overflow-hidden lh-10">
                    <v-img
                        :src="bgWirelesslink"
                        alt="banner"
                        cover=""
                        gradient="to top right, rgb(21 92 138 / 47%), rgb(4 16 35 / 52%)" height="500">
                        <div class="d-flex justify-center align-center fill-height">


                            <v-dialog
                                v-model="dialog"
                                width="1024"
                            >
                                <template v-slot:activator="{ props }">

                                    <v-btn class="rounded-circle bg-white" elevation="10"
                                           icon size="70"
                                           v-bind="props">
                                        <v-icon color="primary" icon="mdi-play" size="34"></v-icon>
                                    </v-btn>
                                </template>
                                <v-card>
                                    <iframe
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen
                                        frameborder="0"
                                        height="400"
                                        src="https://www.youtube.com/embed/bjokCxALGBg"
                                        title="FLYING OVER COLOMBIA (4K UHD) - Relaxing Music Along With Beautiful Nature Videos - 4K Video UltraHD"
                                        width="100%"></iframe>
                                </v-card>
                            </v-dialog>

                        </div>
                    </v-img>
                </div>
                <v-container>
                    <p class="text-muted text-body-1 mt-sm-8 mt-4">
                        En wirelesslink, no solo ofrecemos productos y servicios excepcionales, sino que
                        también creamos experiencias memorables. Somos más que una empresa; somos una comunidad dedicada
                        a la innovación, la excelencia y el éxito mutuo. Descubre cómo wirelesslink puede
                        transformar tu visión en realidad.
                    </p>
                </v-container>
            </v-container>
        </div>

        <div v-for="(service, s) in services" :class="{'bg-accent':s%2===0}"
             class="py-md-12 py-5">
            <div class="py-md-10 py-sm-5">
                <v-container>
                    <v-row>
                        <v-col class="v-col-md-5 v-col-12">
                            <div class="service-speciality-content mb-13 mb-lg-0" data-aos="fade-up"
                                 data-aos-delay="200" data-aos-duration="1000">
                                <h2 class="text-primary mb-4">
                                    <span v-if="service.title1" class="text-secondary  text-h5 font-weight-light">
                                            {{ service.title1 }}
                                    </span>
                                    <br>
                                    <span v-if="service.title2" class=" text-h4 font-weight-bold font-weight-black">
                                            {{ service.title2 }}
                                    </span>
                                    <br>
                                    <span v-if="service.title3" class="text-body-1 font-weight-black">
                                            {{ service.title3 }}
                                    </span>

                                </h2>

                                <p class="text-muted text-body-1 mb-13">
                                    {{ service.description }}
                                </p>
                                <v-btn
                                    class="bg-primary rounded-md"
                                    size="large"
                                    style="text-transform: capitalize; letter-spacing: 0px;"
                                    variant="flat">
                                    Empezar
                                </v-btn>
                            </div>
                        </v-col>
                        <v-col :order="s%2!==0?'first':''" class="v-col-md-7 v-col-12">
                            <v-row class="d-flex justify-center align-center fill-height">
                                <v-col v-for="img in service.img">
                                    <div :key="img"
                                         class="hover-card overflow-hidden rounded-md h-100">
                                        <img :alt="service.title2"
                                             :src="img"
                                             class=" w-100 zoom-in w-100 h-100 rounded-lg"
                                             style="max-height: 300px;object-fit: contain"
                                        />
                                    </div>

                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </div>


        <div class="border-bottom">
            <div class="py-md-12 py-5">
                <div class="py-md-10 py-sm-5">
                    <v-container class="">
                        <v-row class="v-row justify-center">
                            <div class="v-col-md-7 v-col-12">
                                <h2
                                    class="text-h2 text-center text-dark mb-4 aos-init aos-animate"
                                    data-aos="fade-right"
                                    data-aos-delay="200" data-aos-duration="1000">
                                    Proceso de trabajo
                                </h2>
                                <p class="text-body-1 text-center text-muted aos-init aos-animate" data-aos="fade-left"
                                   data-aos-delay="200" data-aos-duration="1000">
                                    Te ofrecemos una nueva generación de tareas.
                                    y proyecto
                                </p>
                            </div>
                            <v-col class="v-col-12 mt-8">
                                <v-row>
                                    <v-col v-for="process in processList" class="v-col-sm-6 v-col-md-3 v-col-12">
                                        <div class="aos-init aos-animate" data-aos="fade-up" data-aos-delay="200"
                                             data-aos-duration="1000">
                                            <div class="text-sm-left text-center">
                                                <v-avatar
                                                    class="bg-primary mb-5"
                                                    size="55"
                                                    variant="flat">
                                                    <v-icon :icon="process.icon"></v-icon>
                                                </v-avatar>
                                                <h4 class="text-h6 text-sm-left text-center font-weight-bold mb-4"
                                                    v-text="process.title">
                                                </h4>
                                            </div>
                                            <p class="text-body-1 text-sm-left  text-center text-muted  mb-sm-0 mb-3"
                                               v-text="process.description">

                                            </p>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-container>
                </div>
            </div>
        </div>

        <div class="profile bg-accent py-md-12 py-5">
            <div class="py-md-10 py-sm-5">
                <v-container class="">
                    <v-row class="justify-space-between">
                        <v-col class="v-col-md-6 v-col-12">
                            <div class="position-relative">
                                <img :src="contact"
                                     alt="banner de perfil" class="w-100 rounded-md"/>
                            </div>
                        </v-col>
                        <v-col class="v-col-md-5 v-col-12">
                            <div>
                                <h2 class="text-h5 text-dark mb-sm-5 mb-3">
                                    Iniciar un
                                    nuevo
                                    proyecto
                                </h2>
                                <p class="text-muted text-body-1">
                                    Bienvenido al comienzo de un emocionante viaje hacia la materialización de tu
                                    visión. En wirelesslink, estamos listos para colaborar contigo en cada
                                    paso del camino. Desde la concepción de ideas hasta la implementación práctica,
                                    nuestro equipo dedicado trabajará incansablemente para convertir tus sueños en una
                                    realidad palpable. Con una combinación de creatividad, experiencia y compromiso,
                                    juntos crearemos algo extraordinario. ¡Vamos a empezar!
                                </p>
                                <div class="mt-sm-10 mt-5 border-top pt-3">
                                    <div class="d-flex align-center mb-2">
                                        <a class="text-decoration-none" href="tel:+573003551477" target="_blank">
                                            <v-icon color="primary">mdi-phone</v-icon>
                                        </a> &nbsp;
                                        <a href='https://wa.me/573003551477' target="_blank">
                                            <v-icon color="primary">mdi-whatsapp</v-icon>
                                        </a> &nbsp;
                                        <a href="tel:+573003551477">
                                            <h5 class="font-weight-medium text-h5 text-primary">
                                                +57 300 355 1477</h5>
                                        </a>
                                    </div>
                                    <div class="d-flex align-center">
                                        <a class="text-decoration-none" href="mailto:contacto@wirelesslink.com.co"
                                           target="_blank">
                                            <v-icon color="primary">mdi-email</v-icon>
                                        </a>

                                        <a class="font-weight-medium text-h5 text-primary ml-2"
                                           href="mailto:contacto@wirelesslink.com.co">
                                            contacto@wirelesslink.com.co
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </div>
    </page-layout>
</template>

<style scoped>

</style>
