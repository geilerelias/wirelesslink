// PhotoSwipeService.js
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

export default class PhotoSwipeService {
    constructor(gallerySelector, childrenSelector, getImagesFunction) {
        this.lightbox = new PhotoSwipeLightbox({
            gallery: gallerySelector,
            children: childrenSelector,
            pswpModule: () => import('photoswipe'),
        });

        this.getImages = getImagesFunction;
    }

    init() {
        this.lightbox.init();
    }

    openGallery(index) {
        const images = this.getImages();
        this.lightbox.open(index, images);
    }
}
