<script setup>
import logo from "@/Components/Logo.vue";
import name from './../../images/logo/name-primary.png'
import {useLinksStore} from "../../stores/links.js";
import {Link} from '@inertiajs/vue3'

const empresa = {
    nombre: "WirelessLink",
    caracteristicas: [
        "Enfoque Personalizado",
        "Amplio Portafolio de Servicios",
        "Presencia Nacional",
        "Compromiso con la Calidad y la Innovación",
        "Equipo Multidisciplinario y Experimentado"
    ],
    servicios: {
        infraestructura: {
            ultimaMilla: "Diseño y Suministro de Infraestructura en Ultima Milla",
            wirelessYFibraOptica: "Wireless y Fibra Óptica"
        },
        administracionIP: "Administración de Servicios IP",
        redesWifi: "Diseño, Implementación y Administración de Redes Wifi",
        consultoriaAuditoriasTIC: "Servicios de Consultoría y Auditorias en TICS",
        internet: {
            conexion: "Brindamos el servicio de conexión a Internet",
            fibraOpticaYRadio: "a partir de fibra óptica y radio enlaces",
            planes: [
                "Banda ancha residencial",
                "Corporativo",
                "Dedicado de alta calidad"
            ]
        },
        telefoniaVoIP: "Servicio de Telefonía VoIP",
        sistemasVigilancia: "SISTEMACCTV - Sistemas de Vigilancia en Video",
        monitoreoAlarmas: "Sistema de Seguridad y Monitoreo Inalámbrico",
        asesoriasConsultoriasTIC: "Asesorías y Consultorías sobre Tecnologías de Información y Comunicaciones",
        suministros: {
            computadoresTablet: "Computadores, Tablet, Portátiles, Accesorios y Partes",
            dispositivosRed: "Dispositivo y Accesorios de Red y Conexiones de Wifi",
            respaldoEnergia: "Sistemas de respaldo de Energía a partir de Paneles Solares",
            torreTelecomunicaciones: "Estudio diseño y construcción de torre de telecomunicaciones"
        }
    },
    contacto: {
        direccion: "Calle 85 B # 71 A-30, Barrio El Limoncito, Barranquilla, Atlántico",
        telefono: "300 355 1477",
        whatsapp: "300 355 1477",
        correo: "wirelesslinksas@gmail.com",
        instagram: "wirelesslink_"
    }
}
const linksStore = useLinksStore();


</script>

<template>
    <div class="pt-md-16 pt-8 pb-md-10 pb-5">
        <div class="py-md-4 py-sm-3">
            <v-container class="pb-3">
                <div class="border-bottom z-index1">
                    <v-row class="justify-space-between align-center" no-gutters>
                        <v-col class="v-col-sm-6 v-col-3 d-flex justify-start">
                            <div class="logo d-flex align-center flex-column">
                                <logo :size="100"></logo>
                                <img :src="name" alt="logo name" class="img-fluid h-14" style="max-height: 40px">
                            </div>
                        </v-col>
                        <v-col class="v-col-sm-6 v-col-9">

                            <ul class="d-flex align-center justify-end">

                                &nbsp;
                                <li class="ml-4">
                                    <a class="text-decoration-none" href="tel:+573003551477" target="_blank">
                                        <v-icon color="info">mdi-phone</v-icon>
                                    </a> &nbsp;
                                </li>
                                <li class="ml-4">
                                    <a href='https://wa.me/573003551477' target="_blank">
                                        <v-icon color="success">mdi-whatsapp</v-icon>
                                    </a>
                                </li>
                                <li class="ml-4">
                                    <a href='https://www.instagram.com/wirelesslink_/' target="_blank">
                                        <v-icon color="pink">mdi-instagram</v-icon>
                                    </a>
                                </li>
                            </ul>

                        </v-col>
                    </v-row>
                </div>

                <v-row class="pt-md-10 pt-6">
                    <v-col class="v-col-sm-4 v-col-md-3 v-col-lg-3 v-col-6">
                        <div class="font-weight-medium mb-5 text-h6">Características</div>
                        <ul>
                            <li v-for="(value, key) in empresa.caracteristicas"
                                :key="key" class="mb-2">
                                <a aria-current="page"
                                   class="router-link-active router-link-exact-active text-muted text-decoration-none text-capitalize font-weight-regular position-relative"
                                   href="/#">{{ value }}</a>
                            </li>
                        </ul>
                    </v-col>
                    <v-col class="v-col-sm-4 v-col-md-2 v-col-lg-2 v-col-6">
                        <div class="font-weight-medium mb-5 text-h6">Recursos</div>
                        <ul>
                            <li class="mb-2">
                                <a
                                    class="text-muted text-decoration-none text-capitalize font-weight-regular position-relative"
                                    href="/docs/index.html"
                                    rel="noopener noreferrer">
                                    Documentación
                                </a>
                            </li>
                            <li class="mb-2">
                                <a aria-current="page"
                                   class="router-link-active router-link-exact-active text-muted text-decoration-none text-capitalize font-weight-regular position-relative"
                                   href="/#">
                                    Terminos y condiciones
                                </a>
                            </li>
                            <li class="mb-2">
                                <a aria-current="page"
                                   class="router-link-active router-link-exact-active text-muted text-decoration-none text-capitalize font-weight-regular position-relative"
                                   href="/#">
                                    Licencias
                                </a>
                            </li>

                            <li class="mb-2">
                                <a aria-current="page"
                                   class="router-link-active router-link-exact-active text-muted text-decoration-none text-capitalize font-weight-regular position-relative"
                                   href="/#">
                                    Soporte
                                </a>
                            </li>
                            <li class="mb-2">
                                <a aria-current="page"
                                   class="router-link-active router-link-exact-active text-muted text-decoration-none text-capitalize font-weight-regular position-relative"
                                   href="/#">
                                    Ayuda
                                </a>
                            </li>
                        </ul>
                    </v-col>
                    <v-col class="v-col-sm-4 v-col-md-3 v-col-lg-3 v-col-6">
                        <div class="font-weight-medium mb-5 text-h6">Enlaces</div>

                        <ul>
                            <li v-for="(item, i) in linksStore.links" :key="i"
                                class="mb-2">
                                <Link :href="route(item.route)"
                                   aria-current="page"
                                   class="router-link-active router-link-exact-active text-muted text-decoration-none text-capitalize font-weight-regular position-relative"
                                   target="_blank">
                                    {{ item.title }}
                                </Link>
                            </li>
                        </ul>
                    </v-col>
                    <v-col class="v-col-sm-12 v-col-md-4 v-col-lg-4 v-col-12">
                        <div class="newsletter">
                            <div class="mb-6 font-weight-medium text-h6">Regístrese para recibir actualizaciones</div>
                            <div class="d-flex align-center flex-fill">
                                <v-text-field append-inner-icon="mdi-send" density="comfortable" label="Email address"
                                              variant="outlined"></v-text-field>
                            </div>
                            <p class="text-muted mt-6">© Copyright 2023. Todos los derechos reservados por
                                Wirelesslink.</p>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>

<style scoped>


.border-bottom {
    border-bottom: 1px solid rgb(var(--v-theme-lightborder));
}
</style>
