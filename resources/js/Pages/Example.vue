<script setup>
import Gallery from './Gallery.vue';
import PageLayout from "@/Layouts/PageLayout.vue";
import {onMounted, ref} from "vue";
import SpinnerComponent from "@/Components/SpinnerComponent.vue";

const project = ref('hidropaneles');

let isLoading = ref(true);
let processedImages = [];
const projects = ref([]);

// Llamar fetchData en el evento onMounted
onMounted(() => {
    fetchData();
});

const fetchData = async () => {
    try {
        const response = await axios.get('/get/list/projects');
        // Manejar la respuesta, por ejemplo, asignarla a una referencia
        console.log(response.data)
        projects.value = await response.data.find(item => item.folder === project.value);
        console.log(projects.value)
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

</script>

<template>
    <page-layout>
        <v-container class="mt-10">
            <div v-if="isLoading">
                <v-row>
                    <v-col
                        v-for="n in processedImages"
                        :key="n"
                        class="d-flex child-flex"
                        cols="4"
                    >
                        <v-skeleton-loader type="image"></v-skeleton-loader>
                    </v-col>
                </v-row>
            </div>
            <Gallery v-else :images="processedImages" galleryID="my-test-gallery"/>
        </v-container>
        <spinner-component :value="isLoading" text="Procesando imágenes"/>
    </page-layout>
</template>


