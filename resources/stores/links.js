import {defineStore} from "pinia";

export const useLinksStore = defineStore("links", {
    state: () => ({
        links: [
            {

                title: "Inicio",
                icon: 'mdi-home',
                route: "home"
            },
            {

                title: "Nosotros",
                icon: 'mdi-account-question',
                route: "about-us"
            }, {

                title: "Servicios",
                icon: 'mdi-face-agent',
                route: "services"
            }, {

                title: "Clientes",
                icon: 'mdi-account-multiple',
                route: "clients"
            },
            {

                title: "Contacto",
                icon: 'mdi-card-account-phone',
                route: "contact-us"
            },
            {
                fab: true,
                title: "Test",
                text: 'Test de velocidad',
                icon: 'mdi-speedometer',
                route: "speed-test"
            }
        ],
    }),
})

