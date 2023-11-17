<script setup>
import {ref} from "vue";

import logo from '../../images/logo/logo.png';
import bgLogo from '../../images/bg/bg-logo.png';
import {useDrawerStore} from "../../stores/drawer";

import {useLinksStore} from "../../stores/links";
import {router} from "@inertiajs/vue3";

const linksStore = useLinksStore();

const drawerStore = useDrawerStore();

const group = ref(null)
const authentication = [
    {title: 'Login', icon: 'mdi-account-lock', route: "/login"},
    {title: 'Sign Up', icon: 'mdi-account-plus', route: "/register"},
]

const logout = () => {
    router.post(route('logout'));
};

const redirect = dir => {
    router.get(route(dir))
    drawerStore.drawer = false;
}
</script>

<template>
    <v-navigation-drawer
        expand-on-hover
        v-model="drawerStore.drawer"
        style="box-shadow: rgb(0 0 0 / 20%) -20px 1px 17px 8px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px"
        temporary
    >
        <v-img cover :src="bgLogo"/>
        <v-list>
            <v-list-item
                :prepend-avatar="logo"
                subtitle="tecnico@wirelesslink.com.co"
                title="Juan Amador"
            ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
            <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
            <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<style scoped>

</style>
