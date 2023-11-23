<template>
    <v-row justify="center">
        <v-expand-transition>
            <v-overlay :opacity=".8" :value="dialog" transition="scale-transition">
                <v-card
                    color="transparent"
                    flat
                    style="height: calc(90vh - 10px);max-height: calc(90vh - 10px);width: calc(90vw - 10px);max-width: calc(90vw - 10px)"
                >
                    <v-fab-transition>
                        <v-btn absolute class="mt-5" dark fab right small top @click="close">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-fab-transition>

                    <v-card class="transparent" flat>
                        <img
                            :src="selectedImage"
                            :style="imageStyle"
                            alt=""
                            style="height: calc(90vh - 10px);max-height: calc(90vh - 10px);
                               aspect-ratio:2;
                               object-fit: contain;
                               z-index: 0 !important;"
                        />
                    </v-card>

                    <div class="mt-n8 d-flex justify-center align-end" style="z-index: 10 !important;">
                        <v-row class="primary rounded-lg mb-2 py-0 " style="max-width: 250px; z-index: 10 !important;">
                            <v-col class="d-flex justify-center align-end my-0">
                                <v-btn icon @click="setScale(-0.1)">
                                    <v-icon color="white">mdi-magnify-minus</v-icon>
                                </v-btn>
                                <v-btn icon @click="setScale(0.1)">
                                    <v-icon>mdi-magnify-plus</v-icon>
                                </v-btn>
                                <v-btn icon @click="resetImage">
                                    <v-icon>mdi-autorenew</v-icon>
                                </v-btn>
                                <v-btn icon @click="setRotation(-10)">
                                    <v-icon color="white">mdi-rotate-right</v-icon>
                                </v-btn>
                                <v-btn icon @click="setRotation(10)">
                                    <v-icon color="white">mdi-rotate-left</v-icon>
                                </v-btn>
                                <a :href="selectedImage" download>
                                    <v-btn icon>
                                        <v-icon color="white">mdi-download</v-icon>
                                    </v-btn>
                                </a>
                            </v-col>
                        </v-row>
                    </div>
                </v-card>
            </v-overlay>
        </v-expand-transition>
    </v-row>
</template>

<script setup>
import {computed, ref} from 'vue';

const dialog = ref(false);
const selectedImage = ref('');
const imageStyle = ref('');
const grade = ref(0);
const scale = ref(1);

const close = () => {
    dialog.value = false;
};

const getImageStyle = computed(() => imageStyle.value);

const resetImage = () => {
    imageStyle.value = 'transform: rotate(0deg) scale(1)';
};

const setRotation = (value) => {
    grade.value += value;
    imageStyle.value = `transform: rotate(${grade.value}deg) scale(${scale.value})`;
};

const setScale = (value) => {
    scale.value += value;
    imageStyle.value = `transform: rotate(${grade.value}deg) scale(${scale.value})`;
};
</script>

<style>
/*zoom en imagenes*/

strong {
    font-weight: bold !important;
}

nav {
    margin-top: 0px;
    padding: 14px;
    text-align: center;
}
</style>
