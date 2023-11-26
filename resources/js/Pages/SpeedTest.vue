<script setup>
import PageLayout from "@/Layouts/PageLayout.vue";
import {ref} from 'vue';

const vpnWidget = ref(null);
</script>
<template>
    <page-layout title="Prueba de velocidad">


        <!--        <section style="height: 100vh">
                    <iframe class="h-100 w-100" src="https://speed-test.es/"></iframe>
                </section>-->
        <section style="height: 100vh">
            <v-container class="mt-5">
                <iframe class="h-100 w-100" src="https://wirelesslink.speedtestcustom.com/"></iframe>
            </v-container>
        </section>
    </page-layout>
</template>


<style scoped>
element.style {
    font-size: 30px !important;
    overflow-wrap: unset;
}

.stc-wrapper .text-primary {
    font-size: 30px !important;
    color: #10578b;
}
</style>
