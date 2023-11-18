<script setup>
import PageLayout from "@/Layouts/PageLayout.vue";
import bgContact from '../../images/bg/bg-contact-2.jpg'
import {useForm} from '@inertiajs/vue3'
import SpinnerComponent from "@/Components/SpinnerComponent.vue";


const form = useForm({
    /*  nombres: 'Geiler ELias',
        apellidos: 'Radillo Sarmiento',
        email: 'geilerelias@gmail.com',
        asunto: 'Ejemplo de mensaje',
        mensaje: 'Este es un ejemplo de mensaje para probar funcionamiento de pagina web',*/
    nombres: '',
    apellidos: '',
    email: '',
    asunto: '',
    mensaje: ''
});

const nameRules = [
    v => !!v || 'El nombre es requerido',
];
const emailRules = [
    v => !!v || 'El E-mail es requerido',
    v => /.+@.+\..+/.test(v) || 'El email debe ser válido',
];

const enviarFormulario = () => {
    // Accede a form.value.nombres, form.value.apellidos, etc.
    // y envía los datos al backend usando Inertia.post
    form.post('/enviar-correo', {
        onSuccess: page => {
            console.log(page)
            //form.reset();
            form.successMessage = '¡Mensaje enviado con éxito!';
        },
        onError: errors => {
            console.log(errors)
            form.errorMessage = 'Hubo un error al enviar el mensaje. Por favor, inténtelo de nuevo.';

        },
        onFinish: visit => {
            console.log(visit)
        },
    })
};
</script>

<template>
    <page-layout title="Contact">
        <div class="pt-md-16 pt-5 border-top">
            <div class="border-bottom">
                <v-container>
                    <div class="mb-sm-16 mb-8 pb-md-5">
                        <h2
                            class="text-h4 font-weight-bold text-dark text-primary mb-10 aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-delay="200" data-aos-duration="1000">
                                <span class="text-secondary  font-weight-light">
                                    COLOCATE EN
                                </span>
                            <br>
                            <span class="ml-16 font-weight-bold font-weight-black">
                                    CONTACTO CON NOSOTROS
                                </span>
                        </h2>
                        <v-row class="v-row">
                            <v-col class="v-col-md-5 v-col-12">
                                <div class="d-sm-flex d-block align-start text-md-start text-center">
                                    <v-avatar class="bg-accent mb-sm-0 mb-4" size="64"
                                              variant="flat">
                                        <v-icon color="primary" icon="mdi-mail" size="32"></v-icon>
                                    </v-avatar>
                                    <div class="ml-md-12 ml-sm-5">
                                        <h3 class="text-h5 font-weight-bold text-dark mb-2">
                                            ENVÍANOS UN CORREO
                                        </h3>
                                        <p class="text-body-1 text-muted mb-md-10 mb-sm-5 mb-3">
                                            No dude en escribirnos. Responderemos lo antes posible.
                                        </p>
                                        <a aria-current="page"
                                           class="router-link-active router-link-exact-active text-decoration-none text-primary text-body-1 font-weight-medium d-flex align-center justify-center justify-sm-start"
                                           href="#contact_form">
                                            Dejar un mensaje
                                            <v-icon class="ml-2" icon="mdi-arrow-right" size="26"></v-icon>
                                        </a>
                                    </div>
                                </div>
                            </v-col>

                            <v-col class="v-col-md-5 v-col-12">
                                <div class="d-sm-flex d-block align-start mt-md-0 mt-3 text-md-start text-center">
                                    <v-avatar class="bg-accent mb-sm-0 mb-4" size="64"
                                              variant="flat">
                                        <v-icon color="primary" icon="mdi-map-marker" size="32"></v-icon>
                                    </v-avatar>
                                    <div class="ml-md-12 ml-sm-5">
                                        <h3 class="text-h5 text-uppercase font-weight-bold text-dark mb-2">
                                            Dirección
                                        </h3>
                                        <p class="text-body-1 text-muted mb-md-10 mb-sm-5 mb-3">
                                            Puedes localizarnos en nuestra oficina principal.
                                        </p>
                                        <a aria-current="page"
                                           class="router-link-active router-link-exact-active text-decoration-none text-primary text-body-1 font-weight-medium d-flex align-center justify-center justify-sm-start"
                                           href="#map_marker">
                                            Ver ubicación
                                            <v-icon class="ml-2" icon="mdi-arrow-right" size="26"></v-icon>
                                        </a>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </div>
                    <div id="map_marker" class="mb-sm-16 mb-10 pb-md-5">
                        <v-card class="pa-0" height="450">
                            <iframe
                                allowfullscreen=""
                                height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1958.1412546686038!2d-74.81199653844546!3d11.01741767785567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42db9412b5a7f%3A0x252e4ee638a0e40a!2sCl.%2085B%20%2371a-30%2C%20Riomar%2C%20Barranquilla%2C%20Atl%C3%A1ntico!5e0!3m2!1ses-419!2sco!4v1700268064035!5m2!1ses-419!2sco"
                                style="border:0;"
                                width="100%"></iframe>
                        </v-card>
                    </div>
                </v-container>
            </div>
        </div>

        <div id="contact_form" class="py-md-15 py-8">
            <div class="py-md-9">
                <v-container class="">
                    <v-row class="align-center">
                        <v-col class="v-col-md-6 v-col-12">
                            <div><h2 class="text-h4 text-dark mb-md-10 mb-6">Obtenga información en línea</h2>
                                <v-form novalidate @submit.prevent="enviarFormulario">
                                    <v-row>
                                        <v-col class="v-col-sm-6 v-col-12 py-0">
                                            <v-label class="text-muted mb-2">
                                                Nombres*
                                            </v-label>
                                            <v-text-field v-model="form.nombres"
                                                          :error-messages="form.errors.nombres"
                                                          :rules="[v => !!v || 'El nombre es requerido']"
                                                          density="comfortable" variant="outlined"
                                                          @blur="form.clearErrors('nombres')"/>
                                        </v-col>
                                        <v-col class="v-col-sm-6 v-col-12 py-0">
                                            <v-label class="text-muted mb-2">
                                                Apellidos*
                                            </v-label>
                                            <v-text-field v-model="form.apellidos"
                                                          :error-messages="form.errors.apellidos"
                                                          :rules="[v => !!v || 'Los apellidos son requeridos']"
                                                          density="comfortable" variant="outlined"
                                                          @blur="form.clearErrors('apellidos')"/>
                                        </v-col>
                                        <div class="v-col-12 py-0">
                                            <v-label class="text-muted mb-2">
                                                Email*
                                            </v-label>
                                            <v-text-field v-model="form.email"
                                                          :error-messages="form.errors.email"
                                                          :rules="emailRules" density="comfortable" variant="outlined"
                                                          @blur="form.clearErrors('email')"/>
                                        </div>
                                        <div class="v-col-12 py-0">
                                            <v-label class="text-muted mb-2">
                                                Asunto*
                                            </v-label>
                                            <v-text-field v-model="form.asunto"
                                                          :error-messages="form.errors.asunto"
                                                          :rules="[v => !!v || 'El asunto es requerido']"
                                                          density="comfortable" variant="outlined"
                                                          @blur="form.clearErrors('asunto')"/>
                                        </div>
                                        <v-col class="v-col v-col-12 py-0">
                                            <v-label class="text-muted mb-2">
                                                Mensaje*
                                            </v-label>
                                            <v-textarea v-model="form.mensaje"
                                                        :error-messages="form.errors.mensaje"
                                                        :rules="[v => !!v || 'El mensaje es requerido']"
                                                        density="comfortable" variant="outlined"
                                                        @blur="form.clearErrors('mensaje')"/>
                                        </v-col>

                                        <v-col class="v-col v-col-12 text-md-start text-center">
                                            <v-btn :disabled="form.processing" class="bg-primary rounded-md"
                                                   size="large"
                                                   style="text-transform: capitalize; letter-spacing: 0px;"
                                                   type="submit" variant="flat">
                                                Enviar mensaje
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-form>

                                <!-- Mostrar mensajes de éxito o error -->
                                <v-alert v-if="form.successMessage" class="mt-4" type="success">
                                    {{ form.successMessage }}
                                </v-alert>
                                <v-alert v-if="form.errorMessage" class="mt-4" type="error">
                                    {{ form.errorMessage }}
                                </v-alert>

                                <!-- Barra de progreso durante la carga -->
                                <v-progress-linear v-if="form.processing" class="mt-4"
                                                   indeterminate></v-progress-linear>

                                <spinner-component :opacity="0.9" :value="form.processing"></spinner-component>
                            </div>
                        </v-col>
                        <div class="v-col-md-6 v-col-12">
                            <div class="text-center text-lg-end mt-md-0 mt-5">
                                <v-img :aspect-ratio="1" :src="bgContact"
                                       alt="contact banner" class="img-fluid rounded-md overflow-hidden"
                                       cover=""/>
                            </div>
                        </div>
                    </v-row>
                </v-container>
            </div>
        </div>

        <div class="bg-primary py-md-15 py-sm-8 py-8">
            <div class="py-md-9 py-2">
                <v-container>
                    <v-row class="justify-space-between">
                        <v-col class="v-col-md-3 v-col-12 pb-sm-4 pb-1">
                            <div class="pt-2 mb-0 d-flex align-center">
                                <div class="d-inline-flex mb-3 align-self-start">
                                    <v-avatar class="secondary lighten-2" color="secondary" size="72">
                                        <v-icon color="white " size="36">mdi-map-marker</v-icon>
                                    </v-avatar>
                                </div>
                                <div class="d-flex justify-center align-center">
                                    <div class="d-inline ml-3">
                                        <h4 class="text-left text-h6  mb-1 secondary--text">Visítanos</h4>
                                        <h5 class="font-weight-medium text-body-1 text-white ml-2">
                                            Calle 85 B # 71 A-30 Barrio El Limoncito / Barranquilla Atlántico
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                        <v-col class="v-col-md-3 v-col-12 pb-sm-4 pb-1">
                            <div class="pt-2 mb-0 d-flex align-center">
                                <div class="base-avatar d-inline-flex mb-3 align-self-start">
                                    <v-avatar class="grey lighten-2" color="secondary" size="72">
                                        <v-icon color="white " size="36">mdi-phone</v-icon>
                                    </v-avatar>
                                </div>

                                <div class="d-flex flex-column justify-center align-center">
                                    <div class="d-inline ml-3">
                                        <h4 class="text-left text-h6  mb-1 secondary--text">Llámanos</h4>
                                        <a href="tel:+573003551477">
                                            <h5 class="font-weight-medium text-body-1 text-white">
                                                +57 300 355 1477</h5>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                        <v-col class="v-col-md-4 v-col-12">
                            <div class="pt-2 mb-0 d-flex align-center">
                                <div class="base-avatar d-inline-flex mb-3 align-self-start">
                                    <v-avatar class="grey lighten-2" color="secondary" size="72">
                                        <v-icon color="white " size="36">mdi-email</v-icon>
                                    </v-avatar>
                                </div>
                                <div class="d-flex flex-column justify-center  align-center">
                                    <div class="d-inline ml-3">
                                        <h4 class="text-left text-h6  mb-1 secondary--text">Escríbenos</h4>
                                        <div class="d-flex">
                                            <a class="text-decoration-none font-weight-medium text-body-1 text-white"
                                               href="mailto:contacto@wirelesslink.com.co">
                                                contacto@wirelesslink.com.co
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </div>
    </page-layout>
</template>

<style scoped>

</style>
