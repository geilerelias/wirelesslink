<script>
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import lazyImage from '../../images/bg/lazy-bg-1.png'
import 'photoswipe/style.css';

const leftArrowSVGString = '<svg aria-hidden="true" class="pswp__icn" viewBox="0 0 100 125" width="100" height="125"><path d="M5,50L50,5l3,3L11,50l42,42l-3,3L5,50z M92,95l3-3L53,50L95,8l-3-3L47,50L92,95z"/></svg>';


export default {
    name: 'SimpleGallery',
    props: {
        galleryID: String,
        images: Array,
    },
    setup(props) {
        return {
            imagesData: props.images,
            lazyImage: lazyImage
        };
    },
    mounted() {
        if (!this.lightbox) {
            const options = {
                arrowPrevSVG: leftArrowSVGString,
                arrowNextSVG: leftArrowSVGString,

                gallery: '#' + this.$props.galleryID,
                children: 'a',

                // to apply styles just to this instance of PhotoSwipe
                mainClass: 'pswp--custom-icon-colors',

                // gallery: '#gallery--custom-icon-colors',
                // children: 'a',
                pswpModule: () => import('photoswipe')
            };
            const lightbox = new PhotoSwipeLightbox(options);
            lightbox.init();
        }
    },
    unmounted() {
        if (this.lightbox) {
            this.lightbox.destroy();
            this.lightbox = null;
        }
    },
    methods: {},

};
</script>

<template>
    <div :id="galleryID">
        <v-row>
            <v-col
                v-for="(image, n) in imagesData"
                :key="n"
                class="d-flex child-flex"
                cols="12"
                lg="3"
                md="4"
                sm="6"
            >
                <v-card
                    :aspect-ratio="1"
                    :data-pswp-height="image.height"
                    :data-pswp-width="image.width"
                    :href="image.url"
                    class="hover-card overflow-hidden rounded-md h-100"
                    elevation="10"
                    rel="noreferrer"
                    target="_blank"
                >
                    <img :alt="`imagen ${n}`" :src="image.url"
                         class="zoom-in w-100 h-100" style="object-fit: cover;width: 100%;height: 300px"/>

                    <!--
                                        <img :src="image.url" alt="" class="fill-height" style="object-fit: cover;width: 100%"/>
                    -->
                </v-card>
            </v-col>
        </v-row>

    </div>
</template>


<style>
.pswp--custom-icon-colors {
    --pswp-icon-color: #2ba9e1;
    --pswp-icon-color-secondary: #10578b;
}
</style>

