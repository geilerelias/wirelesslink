<script setup>

import PageLayout from "@/Layouts/PageLayout.vue";
import bgLogo from '../../images/bg/bg-logo.png'
import about1 from '../../images/bg/bg-25.png'
import bg25 from '../../images/bg/bg-25.png'
import about2 from '../../images/bg/bg-22.png'
import bgMap from '../../images/bg/bg-map-2.png'
import bg18 from '../../images/bg/bg-18.png'
import team1 from '../../images/avatar/user-1.png'
import team2 from '../../images/avatar/user-2.png'
import team3 from '../../images/avatar/user-3.png'
import team4 from '../../images/avatar/user-4.png'
import team5 from '../../images/avatar/user-5.png'
import team6 from '../../images/avatar/user-6.png'
import team7 from '../../images/avatar/user-7.png'
import bgAllies from '../../images/allies/vista-aerea-equipo-empresarial.jpg'
import imgInfotic from '../../images/allies/Logo_Infotic.png'
import imgAirlink from '../../images/allies/airlink_plus.png'
import imgCeindetec from '../../images/allies/ceindetec.png'


import {useDisplay} from "vuetify";


const arrayPresencia = [
    {
        name: 'ZONAS WIFI',
        description: 'Áreas equipadas con conectividad inalámbrica para proporcionar acceso a internet en ubicaciones específicas, fomentando la conectividad y accesibilidad digital.',
    },
    {
        name: 'ALCALDÍAS MUNICIPALES',
        description: 'Presencia en las oficinas gubernamentales locales encabezadas por alcaldías municipales, ofreciendo soluciones tecnológicas para mejorar la eficiencia administrativa y servicios públicos.',
    },
    {
        name: 'INSTITUCIONES EDUCATIVAS URBANAS Y RURALES',
        description: 'Compromiso con instituciones educativas, tanto en entornos urbanos como rurales, para implementar tecnologías que enriquezcan la experiencia educativa y fomenten el acceso a la educación.',
    },
    {
        name: 'VIVIENDAS URBANAS Y RURALES',
        description: 'Desarrollo de soluciones tecnológicas adaptadas a viviendas en entornos urbanos y rurales, mejorando la calidad de vida y la conectividad en comunidades residenciales.',
    },
];

const allies = [
    {name: 'Infotic', url: 'https://infotic.co/', src: imgInfotic},
    {name: 'Airlink', url: 'https://www.airlinkp.com/', src: imgAirlink},
    {name: 'Ceindetec', url: 'https://ceindetecguajira.com/', src: imgCeindetec},
];

const teamList = [
    {img: team1, name: 'Edinson Amador', rol: 'CEO, Fundador'},
    {img: team2, name: 'Jonathan Torregosa', rol: 'Coordinador General'},
    {img: team3, name: 'Geiler Radillo', rol: 'Coordinador Técnico'},
    {img: team4, name: 'Leiton Amador', rol: 'Técnico Especialista'},
    {img: team5, name: 'Andres Guerra', rol: 'Técnico'},
    {img: team6, name: 'Andreina Amador', rol: 'Agente mesa ayuda'},
    {img: team7, name: 'Gerald Díaz', rol: 'Técnico instalador'},
    // Add more professionals as needed
];


const arrayDepartamentos = [
    'Atlántico',
    'La Guajira',
    'Magdalena',
    'Bolívar',
    'Sucre',
    'Córdoba',
    'Cesar',
    // Agrega más departamentos según sea necesario
];
const {mobile} = useDisplay()

</script>

<template>
    <page-layout title="About Us">

        <v-container class=" ">
            <v-row class=" align-center justify-md-space-between justify-center pb-5 pt-12">
                <v-col class="v-col-md-7 v-col-12">
                    <div class="text-md-left">
                        <h2
                            :data-aos="mobile?'fade-up':'fade-up'"
                            class="text-h4 font-weight-bold text-dark text-primary mb-4"
                            data-aos-delay="200" data-aos-duration="1000">
                                <span class="text-secondary  font-weight-light">
                                    ¿Quienes
                                </span>
                            <br>
                            <span class="ml-16 font-weight-bold font-weight-black">
                                    Somos?
                                </span>
                        </h2>
                        <p :data-aos="mobile?'fade-up':'fade-up'"
                           class="text-body-1 text-justify text-muted bg-surface position-relative z-index1"
                           data-aos-delay="400" data-aos-duration="1000">
                            Es una empresa dedicada a la prestación de servicios relacionados
                            con las tecnologías de la información y la comunicación a pequeñas
                            y medianas empresas y en general a la comunidad, ejecutando
                            proyectos a la medida de las necesidades de nuestros clientes,
                            mostrando así los mejores resultados.
                            <br>
                            Construimos de manera personalizada con cada uno de nuestros
                            clientes soluciones tecnológicas como: Diseño y Suministro de
                            Infraestructura en Ultima Milla, Wireless y Fibra Óptica
                            administración de servicios IP, Diseño, Implementación y
                            Administración de Redes Wifi, Diseño y Suministro Redes de datos
                            LAN, WAN Servicios de Consultoría y Auditorias en TICS.
                            <br>
                            Nuestro equipo de Trabajo está compuesto por personas con
                            conocimiento en diferentes disciplinas, con experiencia en
                            soluciones informáticas que puedan mejorar la calidad y el
                            rendimiento de su empresa (sin importar el sector económico al que
                            pertenezca), además manejamos una variedad de equipos de
                            tecnología, con las mejores marcas y a los mejores precios del
                            mercado.
                        </p>
                    </div>
                </v-col>
                <v-col class="v-col-md-4 v-col-12">
                    <div class="pl-sm-6">
                        <v-card class=" elevation-10"
                                variant="elevated">
                            <v-img :src="bgLogo"></v-img>
                        </v-card>
                    </div>
                </v-col>
            </v-row>
            <div class="py-sm-16 py-6">
                <v-row>
                    <v-col class="v-col-sm-5 v-col-12">
                        <div class="hover-card overflow-hidden rounded-md h-100">
                            <v-img :src="about1"
                                   alt="about1" class="zoom-in w-100 h-100" cover=""/>
                        </div>
                    </v-col>
                    <v-col class="v-col-sm-7 v-col-12">
                        <div class="hover-card overflow-hidden rounded-md h-100">
                            <v-img
                                :src="about2" alt="about2" class="zoom-in w-100 h-100"/>
                        </div>
                    </v-col>
                </v-row>
            </div>
        </v-container>


        <section class="history bg-secondary bg-dark py-md-12 py-5">
            <div class="py-md-10 py-sm-5">
                <v-container class="">
                    <v-row class=" justify-space-between">
                        <div class="v-col-md-4 v-col-12">
                            <h2 class="text-h4 text-dark font-weight-bold pr-sm-10">
                                Misión y visión empresarial
                            </h2>
                            <p class="text-body-1 text-muted my-4">
                                Apuntamos a liderar en tecnologías de la información con soluciones personalizadas para
                                potenciar el rendimiento empresarial. Nuestra visión es ser referentes en innovación y
                                excelencia, contribuyendo al desarrollo sostenible de las comunidades que atendemos.
                            </p>
                        </div>
                        <v-col class="v-col-md-7 v-col-12">
                            <v-row class="d-flex flex-column flex-sm-row justify-content-around justify-center">
                                <v-col class="col-12 col-sm-12 col-md-6 col-lg-5 ">
                                    <v-card
                                        :data-aos="mobile?'fade-up':'fade-right'"
                                        class="mr-1 fill-height  rounded-lg"
                                        data-aos-delay="400"
                                        data-aos-duration="1000">
                                        <v-card-title>
                                            <h4
                                                class="d-flex justify-start text-h4 font-weight-black  text-primary pt-2  fill-width"
                                                style="width: 100%;"> Misión
                                            </h4>
                                        </v-card-title>
                                        <v-card-text>
                                            <p class="mx-2 my-3 text-subtitle-1 text-justify">
                                                Somos una Empresa especializada en
                                                tecnologías informáticas, que brinda
                                                un excelente servicio, con calidad y
                                                efectividad a nuestros clientes,
                                                innovando en el mercado en una alta
                                                gama de productos y Servicios,
                                                aprovechando los recursos
                                                tecnológicos para mejorar el nivel de
                                                competitividad actual de nuestros
                                                clientes, con el fin de alcanzar y
                                                superar su expectativas.
                                            </p>
                                        </v-card-text>
                                    </v-card>
                                </v-col>

                                <v-col class="col-12 col-sm-12 col-md-6 col-lg-5 mt-4 mt-sm-0">
                                    <v-card
                                        :data-aos="mobile?'fade-up':'fade-left'"
                                        class="mr-1 fill-height rounded-lg"
                                        data-aos-delay="400"
                                        data-aos-duration="1000">
                                        <v-card-title>
                                            <h4
                                                class="text-primary d-flex justify-start rounded-lg text-h4 font-weight-bold font-weight-black pt-2  white--text fill-width"
                                                style="width: 100%;">
                                                Visión
                                            </h4>
                                        </v-card-title>
                                        <v-card-text class="v-card__text"><p
                                            class="mx-2 my-3 text-subtitle-1 text-justify">
                                            Será reconocida como una empresa
                                            líder en el sector de las tecnologías de
                                            la información y las comunicaciones,
                                            por su alto nivel de servicio al cliente y
                                            resultados a la hora de la ejecución de
                                            proyectos, en la Costa Caribe
                                            Colombiana, centrándose en la
                                            confianza, credibilidad y las garantías
                                            de los servicios prestados.
                                        </p>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </section>


        <section class="py-md-12 py-5">
            <div class="py-md-10 py-sm-5">
                <v-container>
                    <v-row class="justify-space-between align-center">
                        <v-col class="v-col-md-5 v-col-12">
                            <div class=" ">
                                <v-img :aspect-ratio="9/16"
                                       :data-aos="mobile?'fade-up':'fade-up'"
                                       :src="bgMap"
                                       alt="banner" class="rounded-md  w-100 h-100"
                                       data-aos-delay="200"
                                       data-aos-duration="1000">

                                </v-img>
                            </div>
                        </v-col>
                        <v-col class="v-col-md-6 v-col-12">
                            <div :data-aos="mobile?'fade-up':'fade-up'"
                                 class="text-center text-md-start aos-init aos-animate"
                                 data-aos-delay="200" data-aos-duration="1000">
                                <h2 class="text-h4 text-primary text-dark font-weight-bold mb-4">
                                    <span class="text-secondary  text-h5 font-weight-light">
                                        Nuestra
                                     </span>
                                    <br>
                                    <span class="ml-16 font-weight-bold font-weight-black">
                                        Cobertura Geográfica
                                    </span>
                                </h2>
                                <p class="text-muted text-body-1 text-justify mb-3">
                                    Estamos comprometidos a brindar nuestros servicios de alta calidad en diversas
                                    regiones. A continuación, te presentamos los departamentos donde ofrecemos nuestra
                                    cobertura:
                                </p>
                                <v-row>
                                    <v-col v-for="departamento in arrayDepartamentos"
                                           class="v-col-sm-5 v-col-md-4 v-col-12">
                                        <p class="text-left text-primary text-decoration-none text-capitalize font-weight-bold"
                                           style="text-transform: capitalize;
">
                                            <v-icon color="primary" icon="mdi-check-circle"></v-icon>
                                            {{ departamento }}

                                        </p>

                                    </v-col>
                                </v-row>
                                <p class=" mt-3 text-muted text-body-1 text-justify">
                                    Nuestra destacada reputación se fundamenta en la entrega de soluciones tecnológicas
                                    excepcionales, extendiendo nuestra influencia de manera significativa para impactar
                                    positivamente a comunidades y empresas en nuestra zona de cobertura. Estamos
                                    comprometidos a proporcionar servicios de alta calidad que no solo satisfacen, sino
                                    que superan las expectativas de nuestros clientes, contribuyendo así al crecimiento
                                    y desarrollo de las regiones que servimos.
                                </p>
                                <v-row class="mt-6 justify-md-start justify-center">
                                    <v-col v-for="item in arrayPresencia" class="v-col-sm-5 v-col-12">
                                        <div class="d-flex">
                                            <v-avatar
                                                class="me-4"
                                                color="grey-lighten-2"
                                                size="30"
                                                variant="flat">
                                                <v-icon color="success" icon="mdi-check"></v-icon>
                                            </v-avatar>
                                            <div>
                                                <p class="text-left text-primary text-decoration-none text-capitalize"
                                                   style="text-transform: capitalize;
">
                                                    {{ item.name }}

                                                </p>
                                                <p class="text-justify">
                                                    {{ item.description }}
                                                </p>
                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </section>


        <div class="py-md-15 py-8">
            <v-parallax
                :src="bgAllies"
                gradient="to top right, rgb(21 92 138 / 75%), rgb(4 16 35 / 82%)"
                height="50vh"
            >
                <v-container class="d-flex flex-column fill-height justify-center align-center">
                    <div class=" d-flex flex-column fill-height justify-center align-center text-white">
                        <h2 :data-aos="mobile?'fade-up':'fade-right'"
                            class="text-h2 text-dark font-weight-bold mb-4" data-aos-delay="400"
                            data-aos-duration="1000">
                            <span class="text-h3 font-weight-light">
                                Nuestros
                             </span>
                            <br>
                            <span class="ml-sm-16 font-weight-bold font-weight-black">
                               Aliados
                            </span>
                        </h2>
                        <h1 class="text-h5 font-weight-thin mb-4">
                            Trabajamos con diversos aliados estratégicos que fortalecen nuestra capacidad para ofrecer
                            soluciones innovadoras. A continuación, te presentamos algunos de ellos:
                        </h1>
                    </div>
                </v-container>
            </v-parallax>
            <v-container>
                <v-row style="height: 50vh">
                    <v-col v-for="ally in allies"
                           class="v-col-md-4 v-col-12 mb-sm-0 mb-4 d-flex justify-center align-center">
                        <v-card :href="ally.url" class="align-center d-flex justify-center align-center pa-4"
                                data-aos="fade-up" data-aos-delay="200"
                                data-aos-duration="1000"
                                variant="outlined" width="100%">

                            <v-img :src="ally.src"
                                   alt="blog image"
                                   height="100"/>

                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>

        <div class="bg-accent py-md-12 py-5">
            <div class="py-sm-5">
                <v-container>
                    <div class="text-center">
                        <h2 :data-aos="mobile?'fade-up':'fade-right'"
                            class="text-h2 text-dark mb-3 aos-init aos-animate" data-aos-delay="200"
                            data-aos-duration="1000">
                            Nuestro equipo
                        </h2>
                        <p :data-aos="mobile?'fade-up':'fade-left'" class="text-body-1 text-muted aos-init aos-animate"
                           data-aos-delay="200"
                           data-aos-duration="1000">
                            Profesionales dedicados de wirelesslink
                        </p>
                    </div>


                    <div class="d-flex align-center justify-center flex-wrap mt-sm-8 mt-5">
                        <div
                            v-for="(team, n) in teamList"
                            :key="n"
                            class="pa-2 d-flex flex-column align-center"
                        >
                            <v-card class="hover-card overflow-hidden rounded-md lh-10 mb-7 rounded-circle" width="200">

                                <!--                                <v-img
                                                                    :alt="team.name"
                                                                    :aspect-ratio="4/5"
                                                                    :src="team.img"
                                                                    class="zoom-in w-100"
                                                                    cover=""
                                                                />-->

                                <v-avatar size="200" variant="elevated">
                                    <img
                                        :alt="team.name"
                                        :src="team.img"
                                        class="zoom-in w-100"/>
                                </v-avatar>
                            </v-card>
                            <h2 class="text-h5 text-dark font-weight-bold">{{ team.name }}</h2>
                            <p class="text-muted">{{ team.rol }}</p>
                        </div>
                    </div>
                    <div
                        class="bg-secondary py-sm-15 py-7 px-lg-16 px-4 mt-12 rounded-md">
                        <div class="px-sm-6 px-3">
                            <v-row>
                                <v-col class="v-col-md-6 v-col-12"><h2
                                    class="text-h4 mb-6 text-sm-start text-center text-white">¿Tengo una pregunta?</h2>
                                    <p class="text-h6 font-weight-regular text-sm-start text-center text-white">
                                        En wirelesslink la dedicación y el talento se unen para formar un equipo
                                        excepcional. Con liderazgo visionario y la pasión de cada miembro, trabajamos de
                                        la mano para ofrecer soluciones tecnológicas innovadoras y servicios de calidad.

                                    </p>
                                </v-col>
                                <v-col class="v-col-md-6 v-col-12">
                                    <div
                                        class="d-sm-flex d-flex flex-column flex-sm-row  text-center justify-md-end justify-center">
                                        <v-img
                                            :src="bg18"
                                            alt="contact"
                                            class="rounded-xl mr-2 mb-sm-0 mb-2"
                                            cover="" height="300"/>
                                        <v-img
                                            :src="bg25"
                                            alt="professional"
                                            class="rounded-xl"
                                            cover="" height="300"/>
                                    </div>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col class="v-col-12">
                                    <div
                                        class="d-sm-flex justify-md-end justify-sm-start justify-center position-relative">
                                        <div class="mr-sm-13">
                                            <div class="text-uppercase text-body-1">Phone</div>
                                            <div class="d-flex align-center">
                                                <a class="text-decoration-none" href="tel:+573003551477"
                                                   target="_blank">
                                                    <v-icon color="white">mdi-phone</v-icon>
                                                </a> &nbsp;
                                                <a href='https://wa.me/573003551477' target="_blank">
                                                    <v-icon color="white">mdi-whatsapp</v-icon>
                                                </a> &nbsp;
                                                <a href="tel:+573003551477">
                                                    <h5 class="font-weight-medium text-h5 text-white">
                                                        +57 300 355 1477</h5>
                                                </a>
                                            </div>
                                        </div>

                                        <div>
                                            <div class="text-uppercase text-sm-14 text-body-1 mt-sm-0 mt-4">EMAIL</div>
                                            <div class="d-flex align-center">
                                                <a class="text-decoration-none"
                                                   href="mailto:contacto@wirelesslink.com.co"
                                                   target="_blank">
                                                    <v-icon color="white">mdi-email</v-icon>
                                                </a>

                                                <a class="font-weight-medium text-md-h5 text-white ml-2 text-truncate"
                                                   href="mailto:contacto@wirelesslink.com.co">
                                                    contacto@wirelesslink.com.co
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </v-col>
                            </v-row>
                        </div>
                    </div>
                </v-container>
            </div>
        </div>
    </page-layout>
</template>

<style scoped>

</style>
