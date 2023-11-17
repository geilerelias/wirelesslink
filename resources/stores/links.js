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
                icon: 'mdi-account-question',
                route: "services"
            }, {

                title: "Clientes",
                icon: 'mdi-account',
                route: "clients"
            },
            {

                title: "Contáctenos",
                icon: 'mdi-card-account-phone',
                route: "contact-us"
            }
        ],
    }),
})

