<script setup>

import PageLayout from "@/Layouts/PageLayout.vue";
import {onMounted, ref} from "vue";
import LoadingComponent from "@/Components/LoadingComponent.vue";
import {usePage} from "@inertiajs/vue3";
import {useDisplay} from "vuetify";

const {props} = usePage();
const project = ref(props.project);
const {mobile} = useDisplay()

// Utilizar ref para almacenar los datos
const projects = ref([]);
let selectedProject = ref([]);

const fetchData = async () => {
    try {
        const response = await axios.get('/get/list/projects');
        // Manejar la respuesta, por ejemplo, asignarla a una referencia
        projects.value = response.data.find(item => item.folder === project.value);

    } catch (error) {
        // Manejar errores
        console.error('Error al obtener la lista de proyectos', error);
    }
};


// Llamar fetchData en el evento onMounted
onMounted(() => {
    fetchData();
});

// Definir funciones para obtener título y mensaje según el folder
const getTitle = (folder) => {
    switch (folder) {
        case 'hidropaneles':
            return `
                <span class="text-secondary  font-weight-light">
                    Sistema de Hidropaneles para
                </span>
                <br>
                <span class="ml-16 font-weight-bold font-weight-black">
                    Acceso Sostenible al Agua
                </span>`;
        case 'panelsolar':
            return `
                <span class="text-secondary  font-weight-light">
                    Instalación de Paneles Solares para
                </span>
                <br>
                <span class="ml-16 font-weight-bold font-weight-black">
                    Energía Limpia
                </span>`;
        case 'telecomunicacion':
            return `
                 <span class="text-secondary  font-weight-light">
                        Proyecto de Telecomunicación para
                    </span>
                <br>
                <span class="ml-16 font-weight-bold font-weight-black">
                    Conectividad Mejorada
                </span>`;
        default:
            return 'Proyecto sin título definido';
    }
};

const getMessage = (folder) => {
    switch (folder) {
        case 'hidropaneles':
            return 'Encabezamos el desarrollo e implementación de hidropaneles para proporcionar una fuente sostenible y accesible de agua potable en comunidades con limitado acceso a recursos hídricos.';
        case 'panelsolar':
            return 'Contribuimos a la sostenibilidad mediante la instalación de paneles solares para alimentar nuestras operaciones con energía limpia y reducir nuestra huella de carbono.';
        case 'telecomunicacion':
            return 'Colaboramos en un proyecto para mejorar la conectividad en áreas remotas y urbanas, desempeñando un papel clave en la implementación de soluciones tecnológicas.';
        default:
            return 'Mensaje no definido para este proyecto';
    }
};
</script>

<template>
    <page-layout title="Galería de imágenes">
        <v-container class=" ">


            <v-row class=" align-center justify-md-space-between justify-center pb-5 pt-12">
                <v-col class="v-col-12">
                    <div class="text-md-left">
                        <h2
                            :data-aos="mobile?'fade-up':'fade-up'"
                            class="text-h4 font-weight-bold text-dark text-primary mb-4"
                            data-aos-delay="200" data-aos-duration="1000"
                            v-html="getTitle(project) ">
                        </h2>
                    </div>
                </v-col>
                <v-col class="text-justify" cols="12">
                    {{ getMessage(project) }}
                </v-col>
            </v-row>
        </v-container>


        <div class="pt-md-10 border-top">
            <v-container>
                <v-row>
                    <v-col v-for="img in projects.sub" v-if="projects.sub && projects.sub.length > 0"
                           class="v-col-sm-4 v-col-12">
                        <div class="mb-sm-6">
                            <v-card class="hover-card overflow-hidden lh-10 rounded-md position-relative">

                                <v-img :src="`/get/img/${project}/${img}`"
                                       class="zoom-in w-100"
                                       cover="" style="height: 300px;">
                                    <template v-slot:placeholder>
                                        <loading-component></loading-component>
                                    </template>
                                </v-img>
                            </v-card>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </page-layout>
</template>

<style scoped>

</style>
