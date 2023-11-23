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


const {xsOnly, xs, md, mdAndDown, mdAndUp, lgAndUp, smAndUp, smAndDown} = useDisplay()

const isHomePage = computed(() => route().current('home'));

const isTransparent = ref(true);

// Función para manejar el evento de scroll
const handleScroll = () => {
    isTransparent.value = window.scrollY < 320;
};
const isCurrentRoute = ((item) => {
    return route().current(item)
})

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


const showText = ref({});

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
                    <logo :size="45"></logo>
                    <img :src="name" alt="WirelessLink" style="object-fit: contain; height: 25px"/>
                </div>
            </transition>
        </template>


        <v-spacer v-if="!(isTransparent && isHomePage)"></v-spacer>

        <Link
            v-for="(item, index) in linksStore.links"
            :key="item.id"
            :href="route(item.route)"
            class="text-decoration-none d-md-flex d-none  py-0  menu text-capitalize justify-center"

        >
            <div>
                <v-btn
                    :class="{
                        'active text-primary font-weight-black': isCurrentRoute(item.route) &&!(isTransparent && isHomePage) ,
                        'active text-white font-weight-black': (isTransparent && isHomePage) && isCurrentRoute(item.route),
                        'text-secondary': !isCurrentRoute(item.route) && (!isTransparent || !isHomePage),
                        'text-white': isTransparent && isHomePage
                      }"
                    :icon="item.fab"
                    class="overline font-weight-bold rounded-lg custom-btn"
                    variant="text"
                    @mouseleave="showText[index] = false"
                    @mouseover="showText[index] = true"
                >

                    <span v-if="(!showText[index] && md && !isCurrentRoute(item.route)) || item.fab ">
                        <v-icon :icon="item.icon"></v-icon>
                    </span>
                    <span v-else class="d-flex align-center justify-space-between">
                        <v-icon v-if="md" :icon="item.icon" class="mr-1"></v-icon> {{ item.title }}
                    </span>
                    <v-tooltip v-if="(showText[index] && md) || item.fab" activator="parent" location="bottom">
                        {{ item.title }}
                    </v-tooltip>

                </v-btn>
                <transition name="fade">
                    <v-responsive v-if="isCurrentRoute(item.route)"
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

        <Link :href="route('login')" class="text-decoration-none ">
            <v-btn :color="isTransparent && isHomePage ? 'white' : 'primary'"
                   class="rounded-md d-md-flex d-none white-outline"
                   size="large"
                   variant="outlined">
                <v-icon class="mr-1" icon="mdi-account-circle"></v-icon>
                login
            </v-btn>
        </Link>

        <Link :href="route('register')" class="text-decoration-none ">
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


.custom-btn {
}

.custom-btn span {
    white-space: nowrap;
    transition: opacity 0.3s ease-in-out;
}

.custom-btn:hover span {
    opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
