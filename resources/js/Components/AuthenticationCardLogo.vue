<script setup>
import {Link} from '@inertiajs/vue3';
import logo from '../../images/logo/logo.png';
</script>

<template>
    <Link :href="route('home')"
          class=" text-decoration-none">
        <v-avatar size="80">
            <v-img :src="logo" alt="logo"/>
        </v-avatar>
    </Link>
</template>
