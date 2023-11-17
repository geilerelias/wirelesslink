<script setup>

import PageHeader from "@/Base/PageHeader.vue";
import PageFooter from "@/Base/PageFooter.vue";
import {Head} from "@inertiajs/vue3";
import PageDrawer from "@/Base/PageDrawer.vue";

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

defineProps({
    title: String,
});
</script>

<template>
    <v-app>
        <Head :title="title"/>
        <page-drawer>
        </page-drawer>
        <page-header>

        </page-header>
        <v-main>
            <slot></slot>

            <v-btn class="bg-primary rounded-circle position-fixed right-0 bottom-0 mb-10 mr-5 z-index1"
                   fab
                   icon="mdi-chevron-up"
                   scroll-to="'#scrolltop'"
                   variant="elevated"
                   @click="scrollToTop">

            </v-btn>
        </v-main>
        <page-footer></page-footer>
    </v-app>
</template>

<style scoped>

</style>
