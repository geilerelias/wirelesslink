<script setup>

import PageLayout from "@/Layouts/PageLayout.vue";
import {useDisplay} from "vuetify";
import {Link} from '@inertiajs/vue3'
import user1 from './../../images/avatar/user-1.png'
import user2 from './../../images/avatar/user-2.png'
import user3 from './../../images/avatar/user-3.png'
import user4 from './../../images/avatar/user-4.png'

import bg22 from './../../images/bg/bg-16.png'
import bg3 from './../../images/bg/bg-3.png'
import bg11 from './../../images/bg/bg-11.png'
import bg1 from './../../images/bg/bg-1.png'
import lazyBg1 from './../../images/bg/lazy-bg-1.png'
import bg2 from './../../images/bg/bg-2.png'
import name from "../../images/logo/name.png";
import logo from "../../images/logo/logo.png";


const {mobile} = useDisplay()


const pilaresCorporativos = [
    {
        title: 'Compromiso',
        description: 'Nos comprometemos a superar expectativas con entregas precisas, calidad inquebrantable y dedicación constante. Trabajamos con responsabilidad y excelencia para construir relaciones sólidas basadas en la confianza mutua.',
        icon: 'mdi-handshake-outline'
    },
    {
        title: 'Innovación',
        description: 'Abrazamos la innovación como motor de crecimiento constante. Exploramos nuevas ideas y tecnologías para ofrecer soluciones TIC vanguardistas. Fomentamos la creatividad para adaptarnos a un entorno en evolución.',
        icon: 'mdi-lightbulb-on-outline'
    },
    {
        title: 'Confiabilidad',
        description: 'La confiabilidad es la base de nuestra reputación. Construimos relaciones sólidas con transparencia e integridad. Nos esforzamos por ofrecer servicios confiables, respaldando continuamente a nuestros clientes.',
        icon: 'mdi-shield-check-outline'
    }
];

</script>

<template>
    <page-layout title="Inicio">

        <v-img
            :lazy-src="lazyBg1"
            :src="bg1"
            alt="bg lg"
            class="z-index2 mt-n16"
            cover=""
            gradient="to top right, rgb(21 92 138 / 75%), rgb(4 16 35 / 82%)"
            height="100vh" width="100%">
            <v-row class="d-flex fill-height align-center justify-center">
                <v-col class="d-flex justify-center">
                    <div class="d-flex align-center flex-column mt-12">
                        <img :data-aos="mobile?'fade-up':'fade-up'" :src="logo" alt="logo"
                             data-aos-delay="200" data-aos-duration="1000" style="height: 300px;"/>
                        <img :data-aos="mobile?'fade-down':'fade-down'" :src="name" alt="logo name" class="h-14 mt-4"
                             data-aos-delay="200" data-aos-duration="1000"
                             style="height: 100px;object-fit: contain;width: 80vw"/>
                    </div>
                </v-col>
            </v-row>

        </v-img>


        <section class="pt-md-16 pt-8 pb-md-12 pb-8">
            <v-container class="">
                <v-row class="align-center justify-space-between pt-md-7">
                    <v-col :data-aos="mobile?'fade-up':'fade-right'"
                           class="v-col-md-5 v-col-12" data-aos-delay="200"
                           data-aos-duration="1000">
                        <div class="d-flex align-center mb-6">
                            <span class="bg-success pa-2 rounded-circle mr-2"></span>
                            <h6 class="text-subtitle-1 text-dark font-weight-bold">Conexión Total</h6>
                        </div>
                        <h1 class="text-h5 text-lg-h4 font-weight-bold text-dark mb-6">
                            Expertos en TIC, soluciones innovadoras, eficientes y personalizadas.
                        </h1>
                        <p class="text-body-1 text-muted mb-8">
                            Diseñamos, implementamos y gestionamos soluciones TIC personalizadas para empresas,
                            optimizando rendimiento tecnológico
                        </p>

                        <v-btn class="bg-primary px-9 rounded-lg"
                               flat=""
                               size="large">
                            Empezar
                        </v-btn>
                        <div class="d-flex align-center mt-11 mb-md-0 mb-sm-5 mb-8">
                            <div class="d-flex align-center">
                                <v-avatar class="mr-n2" flat
                                          size="48"
                                          variant="outlined">
                                    <img :src="user1"
                                         alt="profile"
                                         height="48"
                                         width="48">
                                </v-avatar>
                                <v-avatar class="mr-n2" flat
                                          size="48"
                                          variant="outlined">
                                    <img :src="user2"
                                         alt="profile"
                                         height="48"
                                         width="48">
                                </v-avatar>
                                <v-avatar class="mr-n2" flat
                                          size="48"
                                          variant="outlined">
                                    <img :src="user3"
                                         alt="profile"
                                         height="48"
                                         width="48">
                                </v-avatar>
                                <v-avatar class="mr-n2" flat
                                          size="48"
                                          variant="outlined">
                                    <img :src="user4"
                                         alt="profile"
                                         height="48"
                                         width="48">
                                </v-avatar>
                            </div>
                            <p class="text-subtitle-1 ml-6">
                                ¿Necesitas ayuda?
                                Link
                                <Link class="text-decoration-none" href="/contact-us">
                                    <a aria-current="page"
                                       class="router-link-active router-link-exact-active text-decoration-none text-primary">
                                        Contacta con nuestros expertos
                                    </a>
                                </Link>
                                <br> Háblanos de tu proyecto
                            </p>
                        </div>
                    </v-col>
                    <v-col v-if="!mobile" class="v-col-md-6 v-col-12">
                        <div class="mt-12 rounded-md d-flex justify-center text-center ">

                            <div :data-aos="mobile?'fade-up':'fade-left'"
                                 class="position-relative text-center text-lg-start mt-12"
                            >
                                <img
                                    :data-aos="mobile?'fade-up':'fade-down-left'"
                                    :src="bg3"
                                    alt="shape"
                                    class="img-fluid position-absolute top-0 right-0 mt-n10 mr-n16 h-25 rounded-lg z-index2"
                                    data-aos-delay="200"
                                    data-aos-duration="1000"/>

                                <div :data-aos="mobile?'fade-up':'zoom-in'"
                                     class="position-relative z-index1 rounded-xl overflow-hidden"
                                     data-aos-delay="200"
                                     data-aos-duration="1000">
                                    <img :src="bg11"
                                         alt="banner" class="img-fluid rounded-lg"/>
                                </div>

                                <img :data-aos="mobile?'fade-up':'fade-down-right'" :src="bg22"
                                     alt="bg"
                                     class="img-fluid position-absolute bottom-0 left-0 mb-n12 ml-n12 h-25 rounded-lg z-index2"
                                     data-aos-delay="200"
                                     data-aos-duration="1000"/>
                            </div>
                        </div>

                    </v-col>
                </v-row>
            </v-container>
        </section>

        <div class="bg-gray-100 py-md-15 py-8">
            <div class="py-md-15 py-sm-8">
                <v-container>
                    <v-row class="justify-center">
                        <v-col class="v-col-sm-8 v-col-12">
                            <div class="text-center">
                                <div :data-aos="mobile?'fade-up':'fade-right'"
                                     :data-aos-delay="200" class="d-flex align-center mb-5 justify-center "
                                     data-aos-duration="1000"><span
                                    class="bg-success pa-2 rounded-circle mr-2"></span><h6
                                    class="text-subtitle-1 text-dark font-weight-bold">pilares corporativos</h6></div>
                                <h2 :data-aos="mobile?'fade-up':'fade-left'"
                                    class="text-h4 font-weight-bold text-dark mb-md-12 mb-6"
                                    data-aos-delay="200" data-aos-duration="1000">
                                    La esencia de nuestra misión se encuentra en los pilares que sustentan cada aspecto
                                </h2>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row class=" justify-center">

                        <v-col v-for="(pilar) in pilaresCorporativos" class="v-col-sm-6 v-col-md-4 v-col-12">
                            <v-card
                                :data-aos="mobile?'fade-up':'fade-up'"
                                class=" elevation-0  text-center py-md-15 py-6 px-md-8 px-4 rounded-md aos-init aos-animate"
                                data-aos-delay="200" data-aos-duration="1000"><!---->

                                <v-avatar color="secondary" size="68">
                                    <v-icon :icon="pilar.icon" size="40">

                                    </v-icon>
                                </v-avatar>
                                <h4
                                    class="text-h5 text-dark font-weight-bold my-sm-6 my-4 px-md-6">
                                    {{ pilar.title }}
                                </h4>
                                <p class="text-muted mb-sm-6 mb-4">
                                    {{ pilar.description }}
                                </p>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </div>


        <div class="py-md-15 py-8">
            <div class="py-md-15 py-sm-8">
                <v-container class="">
                    <v-row class="justify-center">
                        <v-col class="v-col-md-8 v-col-12">
                            <div class="text-center">
                                <div :data-aos="mobile?'fade-up':'zoom-out-up'" class="rounded-lg d-flex justify-center"
                                     data-aos-delay="200"
                                     data-aos-duration="1000">
                                    <img :src="bg2" alt=""
                                         class="mb-md-15 img-fluid rounded-xl" style="max-height: 300px">
                                </div>
                                <p class="mb-sm-11 mb-6 text-h5 font-weight-medium">
                                    cada desafío es una oportunidad para crecer. Hoy, superemos obstáculos con una
                                    sonrisa y enfoquémonos en alcanzar nuevos logros. Juntos, somos imparables. ¡Vamos a
                                    brillar!

                                    #EquipoImparable 💪✨
                                </p>
                                <v-avatar class=" mb-3"
                                          style="width: 64px; height: 64px;"
                                          variant="flat">
                                    <img :src="user2"
                                         alt="profile"
                                         height="64"
                                         width="64">
                                </v-avatar>
                                <h3 class="text-body-1 font-weight-bold text-dark">Jonathan</h3>
                                <p class="lh-normal text-muted">Trabajador feliz, Wirelesslink</p></div>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </div>

        <div class="bg-primary py-md-15 py-8">
            <div class="py-md-8 py-sm-5">
                <v-container class="">
                    <v-row class="align-center justify-space-between">
                        <v-col class="v-col-md-5 v-col-12">
                            <div>
                                <div class="d-flex align-center mb-5">
                                    <span
                                        class="bg-success pa-2 rounded-circle mr-2">
                                    </span>
                                    <h6
                                        class="text-subtitle-1 text-white font-weight-bold">
                                        Podemos ayudar
                                    </h6>
                                </div>
                                <h2 class="text-h4 py-6 text-white">
                                    Discutamos sobre su proyecto y llevémoslo al siguiente nivel.
                                </h2>
                                <v-row>
                                    <v-col class="v-col-12"><h6
                                        class="text-body-1 text-muted font-weight-regular">Teléfono</h6>
                                        <div class="d-flex align-center">
                                            <a class="text-decoration-none" href="tel:+573003551477" target="_blank">
                                                <v-icon color="white">mdi-phone</v-icon>
                                            </a> &nbsp;
                                            <a href='https://wa.me/573003551477' target="_blank">
                                                <v-icon color="white">mdi-whatsapp</v-icon>
                                            </a> &nbsp;
                                            <a class="font-weight-medium text-h5 text-white" href="tel:+573003551477">
                                                +57 300 355 1477
                                            </a>
                                        </div>
                                    </v-col>
                                    <v-col class="v-col-12">

                                        <h6 class="text-body-1 text-muted font-weight-regular">Email</h6>
                                        <div class="d-flex align-center">
                                            <a class="text-decoration-none" href="mailto:contacto@wirelesslink.com.co"
                                               target="_blank">
                                                <v-icon color="white">mdi-email</v-icon>
                                            </a>

                                            <a class="font-weight-medium text-h5 text-white ml-2"
                                               href="mailto:contacto@wirelesslink.com.co">
                                                contacto@wirelesslink.com.co
                                            </a>
                                        </div>
                                    </v-col>
                                    <v-col class="v-col-12">

                                        <h6 class="text-body-1 text-muted font-weight-regular">
                                            Localización
                                        </h6>
                                        <div class="d-flex ">
                                            <a class="text-decoration-none" href="#"
                                               target="_blank">
                                                <v-icon color="white">mdi-map-marker</v-icon>
                                            </a>
                                            <h5 class="font-weight-medium text-h5 text-white ml-2">
                                                Calle 85 B # 71 A-30 Barrio El Limoncito / Barranquilla Atlántico
                                            </h5></div>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-col>

                        <v-col class="v-col-md-5 v-col-12">
                            <v-card class="elevation-0   rounded-md"
                                    variant="elevated">
                                <div class="pa-md-11 pa-sm-8 pa-4">
                                    <h4
                                        class="text-dark text-h4 font-weight-bold mb-7">
                                        Iniciar el proyecto
                                    </h4>
                                    <v-form class="project-form" novalidate="">
                                        <v-row class="v-row">
                                            <v-col class="v-col-sm-6 v-col-12 pb-1">

                                                <v-text-field density="comfortable"
                                                              label="Nombres" variant="outlined">

                                                </v-text-field>
                                            </v-col>
                                            <v-col class="v-col-sm-6 v-col-12 pb-1">
                                                <v-text-field density="comfortable"
                                                              label="Apellidos" variant="outlined">

                                                </v-text-field>
                                            </v-col>
                                            <v-col class="v-col-sm-12 v-col-12 pb-1">
                                                <v-text-field
                                                    color="primary"
                                                    density="comfortable"
                                                    label="Email"
                                                    variant="outlined"
                                                ></v-text-field>
                                            </v-col>
                                            <v-col class="v-col-sm-12 v-col-12 pb-1">
                                                <v-text-field
                                                    color="primary"
                                                    density="comfortable"
                                                    label="País o región"
                                                    variant="outlined"
                                                ></v-text-field>
                                            </v-col>
                                            <v-col class="v-col-sm-12 v-col-12 pb-1">
                                                <v-textarea
                                                    color="primary"
                                                    density="comfortable"
                                                    label="Cuéntanos sobre el proyecto"
                                                    variant="outlined"
                                                ></v-textarea>
                                            </v-col>
                                            <v-col class="v-col-12 mb-md-3 mb-1">
                                                <div class="ml-n2">
                                                    <div class="d-flex align-center">
                                                        <v-checkbox-btn></v-checkbox-btn>
                                                        <div class="text-muted pl-2">
                                                            I have read and acknowledge
                                                            the
                                                            <a aria-current="page"
                                                               class="router-link-active router-link-exact-active opacity-1 text-decoration-none text-primary"
                                                               href="/">
                                                                Terms and Conditions
                                                            </a>
                                                        </div>
                                                    </div>

                                                </div>
                                            </v-col>
                                            <v-col class="v-col v-col-12 pt-0">
                                                <v-btn block="" class="bg-primary rounded-md" size="large"
                                                       style="text-transform: capitalize; letter-spacing: 0px;"
                                                       variant="flat">enviar consulta
                                                </v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-form>
                                </div>
                            </v-card>

                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </div>
    </page-layout>
</template>

<style scoped>
.z-index1 {
    z-index: 2;
}

.z-index2 {
    z-index: 4;
}
</style>
