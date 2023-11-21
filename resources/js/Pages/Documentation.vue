<script setup>
import {Head} from '@inertiajs/vue3';
import AuthenticationCardLogo from '@/Components/AuthenticationCardLogo.vue';
import {usePDF, VuePDF} from '@tato30/vue-pdf'
import file from '../../docs/brochure_wirelessLink.pdf'
import {ref} from "vue";

const {pdf, pages} = usePDF(file)

const page = ref(1)
const vuePDFRef = ref(null)
const scale = ref(1)


function onLoaded(value) {
}

</script>

<template>
    <Head title="Terms of Service"/>

    <div class="font-sans text-gray-900 dark:text-gray-100 antialiased">
        <div class="pt-4 bg-gray-100 dark:bg-gray-900">
            <div class="min-h-screen flex flex-col items-center pt-6 sm:pt-0">
                <div>
                    <AuthenticationCardLogo/>
                </div>

                <div
                    class="w-full sm:max-w-2xl mt-6 p-6 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg prose dark:prose-invert">
                    <div v-for="page in pages" :key="page">
                        <VuePDF ref="vuePDFRef" :page="page" :pdf="pdf" :scale="scale" @loaded="onLoaded"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

