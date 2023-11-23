<script setup>

import PageLayout from "@/Layouts/PageLayout.vue";
import {onMounted, ref} from "vue";
import LoadingComponent from "@/Components/LoadingComponent.vue";
import {router} from '@inertiajs/vue3'
import {useDisplay} from "vuetify";


const fetchData = async () => {
    try {
        const response = await axios.get('/get/list/projects');
        // Manejar la respuesta, por ejemplo, asignarla a una referencia
        projects.value = response.data; // Corregir aquí
        console.log(projects.value);
    } catch (error) {
        // Manejar errores
        console.error('Error al obtener la lista de proyectos', error);
    }
};

// Utilizar ref para almacenar los datos
const projects = ref([]);
const {mobile} = useDisplay()


function redirect(projectFolder) {
    // Verificar si projectsUser es un objeto antes de buscar en sus propiedades
    if (typeof projects === 'object' && projects !== null) {
        // Buscar el proyecto con el folder correspondiente en las propiedades de projectsUser

        const selectedProject = projects.value.find(project => project.folder === projectFolder);
        console.log(selectedProject)

        if (selectedProject) {
            // Redirigir a la ruta con el folder del proyecto
            router.get(`/project/detail/${projectFolder}`, projectFolder)
        } else {
            console.error('Proyecto no encontrado en los proyectos del usuario');
            // Manejar el caso en el que el proyecto no se encuentra en los proyectos del usuario
        }
    } else {
        console.error('projectsUser no es un objeto');
        // Manejar el caso en el que projectsUser no es un objeto
    }
}

// Llamar fetchData en el evento onMounted
onMounted(() => {
    fetchData();
});

// Definir funciones para obtener título y mensaje según el folder
const getTitle = (folder) => {
    switch (folder) {
        case 'hidropaneles':
            return 'Sistema de Hidropaneles para Acceso Sostenible al Agua';
        case 'panelsolar':
            return 'Instalación de Paneles Solares para Energía Limpia';
        case 'telecomunicacion':
            return 'Proyecto de Telecomunicación para Conectividad Mejorada';
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
                <v-col class="v-col-md-7 v-col-12">
                    <div class="text-md-left">
                        <h2
                            :data-aos="mobile?'fade-up':'fade-up'"
                            class="text-h4 font-weight-bold text-dark text-primary mb-4"
                            data-aos-delay="200" data-aos-duration="1000">
                                <span class="text-secondary  font-weight-light">
                                    Proyectos que
                                </span>
                            <br>
                            <span class="ml-16 font-weight-bold font-weight-black">
                                    Transforman
                                </span>
                        </h2>
                    </div>
                </v-col>
                <v-col class="text-justify text-h6" cols="12">
                    Sumérgete en la historia de nuestra empresa a través de proyectos emblemáticos que han dejado una
                    huella duradera en la innovación y sostenibilidad. Desde liderar el desarrollo de hidropaneles hasta
                    impulsar la adopción de energía solar, cada proyecto cuenta una historia única de compromiso y
                    progreso. Descubre cómo hemos estado vinculados a iniciativas que no solo transforman comunidades,
                    sino que también definen nuestro compromiso con un futuro sostenible.
                </v-col>
            </v-row>
        </v-container>

        <div class="pt-md-6">
            <v-container>
                <v-row>
                    <v-col v-for="project in projects" v-if="projects && projects.length > 0"
                           class="v-col-sm-4 v-col-12">
                        <div class="mb-sm-6">
                            <v-card class="hover-card overflow-hidden lh-10 rounded-md position-relative"
                                    href="" @click="redirect(project.folder)">
                                <v-img :src="`/get/img/${project.folder}/`"
                                       class="zoom-in w-100"
                                       cover="" style="height: 300px;">
                                    <template v-slot:placeholder>
                                        <loading-component></loading-component>
                                    </template>
                                </v-img>
                            </v-card>
                            <div class="mt-4">
                                <h5 class="text-h5 font-weight-bold text-13">
                                    <a class="text-decoration-none text-dark hover-primary"
                                       href="">
                                        {{ getTitle(project.folder) }}
                                    </a>
                                </h5>
                                <p class="text-muted  font-weight-regular text-justify">
                                    {{ getMessage(project.folder) }}</p>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </page-layout>
</template>

<style scoped>

</style>
