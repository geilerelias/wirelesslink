<script setup>

import PageLayout from "@/Layouts/PageLayout.vue";
import {onMounted, ref} from "vue";
import {router, usePage} from "@inertiajs/vue3";
import {useDisplay} from "vuetify";

import Gallery from './Gallery.vue';
import SpinnerComponent from "@/Components/SpinnerComponent.vue";
import LoadingComponent from "@/Components/LoadingComponent.vue";

const {props} = usePage();
const project = ref(props.project);
const {mobile} = useDisplay()

// Utilizar ref para almacenar los datos
let processedImages = [];
let isLoading = ref(true);
const projects = ref([]);
const value = ref(1)

const listProject = [
    {name: 'hidropaneles', icon: 'mdi-solar-panel', title: 'Hidropaneles'},
    {name: 'panelsolar', icon: 'mdi-solar-power-variant', title: 'Paneles Solares'},
    {name: 'telecomunicacion', icon: 'mdi-radio-tower', title: 'Telecomunicaciones'}
];

function redirect(projectFolder) {
    router.get(`/project/detail/${projectFolder}`, projectFolder)
}

// Llamar fetchData en el evento onMounted
onMounted(() => {
    fetchData();
    value.value = listProject.findIndex(item => item.name === project.value);
});

const fetchData = async () => {
    try {
        const response = await axios.get('/get/list/projects');
        // Manejar la respuesta, por ejemplo, asignarla a una referencia
        //console.log(response.data)
        projects.value = await response.data.find(item => item.folder === project.value);
        //console.log(projects.value)
        const array = projects.value.sub
        isLoading.value = false; // Set loading to false once processing is done
        if (array.length > 0) {
            processedImages = array.map(item => (
                {
                    url: `/get/img/${project.value}/${item.url}`,
                    width: item.width,
                    height: item.height,
                }
            ));
        } else {
            console.log('nada')
        }
    } catch (error) {
        // Manejar errores
        console.error('Error al obtener la lista de proyectos', error);
    }
};

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

                    Innovación y Sostenibilidad
                </span>
                <br>
                <span class="ml-16 font-weight-bold font-weight-black">
                    Instalación de Paneles Solares para Energía Fotovoltaica
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

        <div class=" border-top">
            <v-container>
                <div v-if="isLoading">
                    <v-row>
                        <v-col
                            v-for="n in processedImages"
                            :key="n"
                            class="d-flex child-flex"
                            cols="4"
                            md="3"
                        >
                            <v-skeleton-loader type="image"></v-skeleton-loader>
                        </v-col>

                        <v-col
                            v-for="(image, n) in processedImages"
                            :key="n"
                            class="d-flex child-flex"
                            cols="12"
                            lg="3"
                            md="4"
                            sm="6"
                        >
                            <v-card
                                :data-pswp-height="image.height"
                                :data-pswp-width="image.width"
                                :href="image.url"
                                class="hover-card overflow-hidden rounded-md h-100"
                                elevation="10"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <loading-component></loading-component>
                            </v-card>
                        </v-col>
                    </v-row>
                </div>
                <Gallery v-else :images="processedImages" galleryID="my-test-gallery"/>
                <v-bottom-navigation
                    v-model="value"
                    :grow="true"
                    color="primary"
                >
                    <v-btn v-for="item in listProject" @click="redirect(item.name)">
                        <v-icon :icon="item.icon"></v-icon>
                        {{ item.title }}
                    </v-btn>
                </v-bottom-navigation>
            </v-container>
        </div>
        <spinner-component :value="isLoading" text="Procesando imágenes"/>
    </page-layout>
</template>

<style scoped>

</style>
