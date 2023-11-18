<script setup>
import {useDrawerStore} from "../../stores/drawer";
import {useLinksStore} from "../../stores/links";
import {useDisplay} from 'vuetify'
import Logo from "./../Components/Logo.vue";
import name from "../../images/logo/name-primary.png"
import {Link} from '@inertiajs/vue3';
import {computed, onMounted, onUnmounted, ref} from "vue";
/*import SettingsDropdown from "../Components/SettingsDropdown.vue";*/

const drawerStore = useDrawerStore();
const linksStore = useLinksStore();


const {xsOnly, xs, mdAndDown, mdAndUp, lgAndUp, smAndUp, smAndDown} = useDisplay()

const isHomePage = computed(() => route().current('home'));

const isTransparent = ref(true);

// Función para manejar el evento de scroll
const handleScroll = () => {
    isTransparent.value = window.scrollY < 320;
};

// Registra el evento de scroll al montar el componente
onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

// Elimina el evento de scroll al desmontar el componente para evitar pérdidas de memoria
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

const changeDrawer = (value) => {
    drawerStore.change(!value)
}

const back = () => {
    window.history.back();
}

</script>
<template>
    <v-app-bar
        :class="{ 'bg-transparent white--text': isTransparent && isHomePage, 'bg-white': !isTransparent || !isHomePage }"
        class="px-sm-12 px-auto py-4"
        scroll-behavior="elevate">

        <template v-slot:prepend>
            <transition mode="out-in" name="custom-transition">
                <div v-if="!(isTransparent && isHomePage)" key="logo-section" class="d-flex align-center"
                     style="max-width: 170px">
                    <logo></logo>
                    <img :src="name" alt="WirelessLink" style="object-fit: contain; height: 30px"/>
                </div>
            </transition>
        </template>


        <v-spacer v-if="!(isTransparent && isHomePage)"></v-spacer>

        <Link
            v-for="item in linksStore.links"
            :key="item.id"
            :href="route(item.route)"
            class="text-decoration-none d-md-flex d-none  py-0  menu text-capitalize justify-center"

        >
            <div>
                <v-btn
                    :class="{
                        'active text-primary font-weight-black': route().current(item.route) &&!(isTransparent && isHomePage) ,
                        'active text-white font-weight-black': (isTransparent && isHomePage) && route().current(item.route),
                        'text-secondary': !route().current(item.route) && (!isTransparent || !isHomePage),
                        'text-white': isTransparent && isHomePage
                      }"


                    class="overline font-weight-bold rounded-lg"
                >
                    {{ item.title }}
                </v-btn>
                <transition name="fade">
                    <v-responsive v-if="route().current(item.route)"
                                  :class="{
                                      'bg-white': isTransparent && isHomePage,
                                      'bg-gradient': !(isTransparent && isHomePage)
                                    }"
                                  class="rounded-lg   mx-auto">
                        <v-divider class="pb-0.5 rounded-lg" light/>
                    </v-responsive>
                </transition>
            </div>
        </Link>
        <v-spacer></v-spacer>
        <Link :href="route('login')">
            <v-btn :color="isTransparent && isHomePage ? 'white' : 'primary'"
                   class="rounded-md d-md-flex d-none white-outline"
                   size="large"
                   variant="outlined">
                <v-icon class="mr-1" icon="mdi-account-circle"></v-icon>
                login
            </v-btn>
        </Link>

        <Link :href="route('register')">
            <v-btn class="bg-secondary bg-primary ml-2 d-lg-flex d-none" color="white" size="large">
                register
            </v-btn>
        </Link>
        <v-btn
            :class="{ 'text-white bg-primary': isTransparent && isHomePage}"
            class="d-md-none d-flex "
            icon tile
            @click="changeDrawer(drawerStore.drawer)"
        >
            <v-icon dark icon="mdi-menu" size="30"></v-icon>
        </v-btn>
    </v-app-bar>

</template>

<style scoped>
.bg-gradient {
    background: linear-gradient(to bottom, #10578b, #2ba9e1);
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */
{
    opacity: 0;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}

custom-transition-enter-active, .custom-transition-leave-active {
    transition: opacity 0.5s, transform 0.5s;
}

.custom-transition-enter, .custom-transition-leave-to {
    opacity: 0;
    transform: scale(0);
}

.custom-transition-enter-to, .custom-transition-leave {
    opacity: 1;
    transform: scale(1);
}
</style>
