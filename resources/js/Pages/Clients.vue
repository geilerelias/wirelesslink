<script setup>

import PageLayout from "@/Layouts/PageLayout.vue";
import bg1 from '../../images/bg/bg-1.png'
import imgAlcaldia from '../../images/client/riohacha.jpg'
import imgInstituciones from '../../images/client/instituciones.jpg'
import imgViviendas from '../../images/client/viviendas.jpg'
import nameWireless from '../../images/logo/name-primary.png'
import Logo from "@/Components/Logo.vue";

import {Link} from '@inertiajs/vue3'

const clientes = [
    {type: 'ALCALDÍAS MUNICIPALES', icon: 'mdi mdi-city', img: imgAlcaldia},
    {type: 'INSTITUCIONES EDUCATIVAS', icon: 'mdi mdi-school', img: imgInstituciones},
    {type: 'VIVIENDAS URBANAS Y RURALES', icon: 'mdi mdi-home', img: imgViviendas},
    // Agrega más elementos según sea necesario
];
</script>

<template>
    <page-layout title="Clients">
        <section>
            <v-container>
                <div class="pb-md-15 pb-0 ">
                    <v-container class="">
                        <v-card :src="bg1"
                                class="elevation-0 mt-5   px-sm-8  rounded-md"
                                variant="elevated">
                            <v-img :aspect-ratio="16/9" :src="bg1"
                                   class="rounded-xl" cover=""
                                   gradient="to top right, rgb(21 92 138 / 75%), rgb(4 16 35 / 82%)" width="100%">
                                <v-row class="align-end  fill-height justify-space-between px-md-7 px-0 py-md-10 py-0">
                                    <div class="v-col-md-7 v-col-12 text-md-left text-center">
                                        <h1
                                            class="text-h3 font-weight-bold font-weight-black mb-7 text-white lh-60 "
                                            data-aos="fade-up"
                                            data-aos-delay="200" data-aos-duration="1000">
                                            Nuestros clientes
                                        </h1>
                                        <v-btn
                                            class="bg-secondary rounded-md  px-10 aos-init aos-animate"
                                            data-aos="fade-up"

                                            data-aos-delay="400"
                                            data-aos-duration="1000"
                                            href="#clients" size="large">
                                            Ver clientes
                                        </v-btn>
                                    </div>
                                </v-row>
                            </v-img>
                        </v-card>
                    </v-container>
                </div>

            </v-container>
            <section class="bg-accent">
                <v-container>
                    <v-row id="clients" class="mt-5 ">
                        <v-col v-for="client in clientes" class="v-col-sm-6 v-col-md-4 v-col-12">
                            <v-card
                                class="elevation-10 rounded-md aos-init aos-animate fill-height"
                                data-aos="fade-up"
                                data-aos-delay="200" data-aos-duration="1000" variant="elevated">
                                <div class="hover-card overflow-hidden rounded-md lh-10 position-relative rounded-b-0">
                                    <a
                                        class="" href="#">
                                        <img :src="client.img" alt="image" class="zoom-in w-100"/>
                                    </a>
                                    <div class="text-subtitle-1 position-absolute top-0 right-0 ma-2">
                                        <v-btn
                                            class="rounded-md px-2 py-2 no-effect bg-white text-primary op-1 rounded-circle"
                                            density="compact"
                                            style="height: auto; min-width: auto; text-transform: capitalize; letter-spacing: 0px;"
                                            type="button"
                                            variant="plain">
                                            <svg
                                                class="icon-tabler icon-tabler-bookmark"
                                                color="black"
                                                fill="none" height="20px"
                                                stroke="currentColor" stroke-linecap="round"
                                                stroke-linejoin="round" stroke-width="1.5"
                                                viewBox="0 0 24 24"
                                                width="20px" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                                                <path
                                                    d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                                            </svg>
                                        </v-btn>
                                    </div>
                                </div>
                                <div class="pa-4">
                                    <div class="d-flex justify-space-between">
                                        <v-chip
                                            class="bg-primary text-surface rounded-md pa-2"
                                            draggable="false"
                                            height="auto"
                                            size="small" variant="tonal">
                                            Clientes
                                        </v-chip>
                                    </div>
                                    <div class="d-flex flex-column fill-height">
                                        <div class="pt-4">
                                            <Link class="text-decoration-none"
                                                  href="#">
                                                <h4 class="text-h6 font-weight-bold font-weight-black text-dark hover-primary">
                                                    {{ client.type }}
                                                </h4>
                                            </Link>
                                        </div>

                                        <div class="d-flex align-center justify-end mt-3 pt-5">
                                            <img :src="nameWireless" alt="Wirelesslink" class="mr-3" height="20">
                                            <logo></logo>
                                        </div>
                                    </div>
                                </div>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </section>

        </section>
    </page-layout>
</template>

<style scoped>

</style>
