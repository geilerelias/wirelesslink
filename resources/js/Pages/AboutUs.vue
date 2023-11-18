<script setup>

import PageLayout from "@/Layouts/PageLayout.vue";
import bgLogo from '../../images/bg/bg-logo.png'
import about1 from '../../images/bg/bg-25.png'
import bg25 from '../../images/bg/bg-25.png'
import about2 from '../../images/bg/bg-22.png'
import bgMap from '../../images/bg/bg-map.png'
import bg18 from '../../images/bg/bg-18.png'
import team1 from '../../images/avatar/user-1.png'
import team2 from '../../images/avatar/user-2.png'
import team3 from '../../images/avatar/user-3.png'
import team4 from '../../images/avatar/user-4.png'
import team5 from '../../images/avatar/user-5.png'


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

const teamList = [
    {img: team1, name: 'Edinson Amador', rol: 'CEO, Fundador'},
    {img: team2, name: 'Jonathan Torregosa', rol: 'Coordinador General'},
    {img: team3, name: 'Geiler Radillo', rol: 'Coordinador Técnico'},
    {img: team4, name: 'Leiton Amador', rol: 'Técnico Especialista'},
    {img: team5, name: 'Andres Guerra', rol: 'Técnico'},
    // Add more professionals as needed
];

</script>

<template>
    <page-layout title="About Us">
        <div class="mt-95 border-top">
            <v-container class=" ">
                <v-row class=" align-center justify-md-space-between justify-center pb-5 pt-12">
                    <v-col class="v-col-md-7 v-col-12">
                        <div class="text-md-left text-center position-relative about-content">
                            <h2
                                class="text-h4 font-weight-bold text-dark text-primary mb-4 aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay="200" data-aos-duration="1000">
                                <span class="text-secondary  font-weight-light">
                                    ¿Quienes
                                </span>
                                <br>
                                <span class="ml-16 font-weight-bold font-weight-black">
                                    Somos?
                                </span>
                            </h2>
                            <p class="text-body-1 text-justify text-muted bg-surface position-relative z-index1 aos-init aos-animate"
                               data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
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
        </div>

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
                            <v-row class="d-flex justify-content-around justify-center">
                                <v-col class="col-12 col-md-6 col-lg-5 col">
                                    <v-card
                                        class="mr-1 fill-height  rounded-lg">
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

                                <v-col class="col-12 col-md-6 col-lg-5 mt-4 mt-md-0">
                                    <v-card
                                        class="mr-1 fill-height rounded-lg">
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
                            <div class="position-relative">
                                <v-img :src="bgMap"
                                       alt="banner" class="w-100 rounded-md aos-init aos-animate"
                                       data-aos="fade-up" data-aos-delay="200"
                                       data-aos-duration="1000">

                                </v-img>
                            </div>
                        </v-col>
                        <v-col class="v-col-md-6 v-col-12">
                            <div class="text-center text-md-start aos-init aos-animate" data-aos="fade-up"
                                 data-aos-delay="200" data-aos-duration="1000">
                                <h2 class="text-h4 text-primary text-dark font-weight-bold mb-4">
                                    <span class="text-secondary  text-h5 font-weight-light">
                                        PRESENCIA A
                                     </span>
                                    <br>
                                    <span class="ml-16 font-weight-bold font-weight-black">
                                        NIVEL NACIONAL
                                    </span>
                                </h2>
                                <p class="text-muted text-body-1 text-justify">
                                    Con orgullo y dedicación, hemos consolidado nuestra presencia a nivel nacional. En
                                    wirelesslink, destacamos por brindar soluciones tecnológicas
                                    excepcionales, extendiendo nuestra influencia de manera significativa para impactar
                                    positivamente a comunidades y empresas en todo el país.
                                </p>
                                <v-row class="mt-6 justify-md-start justify-center">
                                    <v-col v-for="item in arrayPresencia" class="v-col-sm-5 v-col-12">
                                        <div class="d-flex">
                                            <v-avatar
                                                class="me-4"
                                                color="grey-lighten-2"
                                                size="30"
                                                variant="flat">
                                                <svg class="icon-tabler icon-tabler-check text-primary"
                                                     fill="none" height="18px"
                                                     stroke="currentColor" stroke-linecap="round"
                                                     stroke-linejoin="round"
                                                     stroke-width="3" viewBox="0 0 24 24" width="18px"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                                                    <path d="M5 12l5 5l10 -10"></path>
                                                </svg>
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

        <div class="team bg-secondary py-md-12 py-5">
            <div class="py-sm-5">
                <v-container class="">
                    <div class="text-center">
                        <h2 class="text-h2 text-dark mb-3 aos-init aos-animate"
                            data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                            Nuestro equipo
                        </h2>
                        <p class="text-body-1 text-muted aos-init aos-animate" data-aos="fade-left" data-aos-delay="200"
                           data-aos-duration="1000">
                            Profesionales dedicados de wirelesslink
                        </p>
                    </div>


                    <div class="d-flex align-center justify-center flex-wrap mt-sm-8 mt-5">
                        <div
                            v-for="(team, n) in teamList"
                            :key="n"
                            class="ma-2 pa-2"
                        >
                            <div class="hover-card overflow-hidden rounded-md lh-10 mb-7">
                                <v-avatar size="200" variant="elevated">
                                    <img
                                        :alt="team.name"
                                        :src="team.img"
                                        class="zoom-in w-100"/>
                                </v-avatar>
                            </div>
                            <h2 class="text-h5 text-dark font-weight-bold">{{ team.name }}</h2>
                            <p class="text-muted">{{ team.rol }}</p>
                        </div>
                    </div>
                    <div
                        class="bg-primary py-sm-15 py-7 px-lg-16 px-4 mt-12 rounded-md position-relative">
                        <div class="px-sm-6 px-3">
                            <v-row class="v-row">
                                <v-col class="v-col-md-6 v-col-12"><h2
                                    class="text-h4 mb-6 text-sm-start text-center text-white">¿Tengo una pregunta?</h2>
                                    <p class="text-h6 font-weight-regular text-sm-start text-center text-white">
                                        En wirelesslink la dedicación y el talento se unen para formar un equipo
                                        excepcional. Con liderazgo visionario y la pasión de cada miembro, trabajamos de
                                        la mano para ofrecer soluciones tecnológicas innovadoras y servicios de calidad.

                                    </p>
                                </v-col>
                                <v-col class="v-col-md-6 v-col-12">
                                    <div class="d-sm-flex text-center justify-md-end justify-center">
                                        <v-img
                                            :src="bg18"
                                            alt="contact"
                                            class="rounded-xl mr-2"
                                            cover="" height="300" width="100"/>
                                        <v-img

                                            :src="bg25"
                                            alt="professional"
                                            class="rounded-xl"
                                            cover="" height="300" width="100"/>
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
                                            <div class="text-uppercase text-14 mt-sm-0 mt-4">EMAIL</div>
                                            <div class="d-flex">
                                                <a class="text-decoration-none"
                                                   href="mailto:contacto@wirelesslink.com.co"
                                                   target="_blank">
                                                    <v-icon color="white">mdi-email</v-icon>
                                                </a>

                                                <a class="font-weight-medium text-h5 text-white ml-2"
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
