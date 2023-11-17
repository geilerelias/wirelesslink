<script setup>

import PageLayout from "@/Layouts/PageLayout.vue";
</script>

<template>
    <page-layout title="Clients">

        <div class="mt-95 border-top">
            <div class="v-container v-locale--is-ltr pb-md-16 pb-8 mb-md-5 pt-10">
                <div
                    class="v-card v-theme--light v-card--density-default v-card--variant-elevated elevation-0 rounded-md mb-8">
                    <!---->
                    <div class="v-card__loader">
                        <div aria-hidden="true" aria-valuemax="100"
                             aria-valuemin="0" class="v-progress-linear v-theme--light v-locale--is-ltr" role="progressbar"
                             style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                            <!---->
                            <div class="v-progress-linear__background" style="width: 100%;"></div>
                            <div class="v-progress-linear__indeterminate">
                                <div class="v-progress-linear__indeterminate long"></div>
                                <div class="v-progress-linear__indeterminate short"></div>
                            </div><!----></div>
                    </div><!----><!---->
                    <div class="">
                        <div class="d-flex justify-space-between">
                            <div class="d-flex py-0 align-center">
                                <svg class="icon-tabler icon-tabler-home mr-3 text-dark"
                                     fill="none" height="20px" stroke="currentColor"
                                     stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"
                                     width="20px" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                                    <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
                                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
                                </svg>
                                <div>
                                    <ul class="v-breadcrumbs v-breadcrumbs--density-default text-h6 font-weight-regular text-dark pa-0 ml-n1">
                                        <!---->
                                        <li class="v-breadcrumbs-item" text="Home"><a class="v-breadcrumbs-item--link"
                                                                                      href="/"><h6
                                            class="text-h6 font-weight-regular">Home</h6></a></li>
                                        <li class="v-breadcrumbs-divider">
                                            <div class="d-flex align-center text-h3">
                                                <svg class="icon-tabler icon-tabler-chevron-right"
                                                     fill="none" height="18px"
                                                     stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                     stroke-width="2" viewBox="0 0 24 24" width="18px"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                                                    <path d="M9 6l6 6l-6 6"></path>
                                                </svg>
                                            </div>
                                        </li>
                                        <li class="v-breadcrumbs-item v-breadcrumbs-item--disabled text-primary"
                                            text="Blog Grid no Sidebar"><a class="v-breadcrumbs-item--link" href="/"><h6
                                            class="text-h6 font-weight-regular">Blog Grid no Sidebar</h6></a></li>
                                        <!----><!----></ul>
                                </div>
                            </div>
                        </div>
                    </div><!----><!----><span class="v-card__underlay"></span></div>
                <div class="v-row align-center">
                    <div class="v-col-md-4 v-col-12"><h2 class="text-h2 text-dark">Blog Grid</h2></div>
                    <div class="v-col-md-3 v-col-12">
                        <div class="d-flex align-center"><a aria-current="page" class="router-link-active router-link-exact-active text-decoration-none text-muted pr-5"
                                                            href="/blog/blog-grid#">
                            <svg class="icon-tabler icon-tabler-list" fill="none" height="24px"
                                 stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"
                                 width="24px" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                                <path d="M9 6l11 0"></path>
                                <path d="M9 12l11 0"></path>
                                <path d="M9 18l11 0"></path>
                                <path d="M5 6l0 .01"></path>
                                <path d="M5 12l0 .01"></path>
                                <path d="M5 18l0 .01"></path>
                            </svg>
                        </a>
                            <div
                                class="v-input v-input--horizontal v-input--center-affix v-input--density-comfortable v-locale--is-ltr v-input--dirty v-text-field v-select v-select--single v-select--selected text-muted">
                                <!---->
                                <div class="v-input__control">
                                    <div
                                        aria-expanded="false"
                                        aria-haspopup="menu" aria-owns="v-menu-1772" class="v-field v-field--active v-field--appended v-field--center-affix v-field--dirty v-field--no-label v-field--variant-outlined v-theme--light v-locale--is-ltr"
                                        role="button">
                                        <div class="v-field__overlay"></div>
                                        <div class="v-field__loader">
                                            <div aria-hidden="true"
                                                 aria-valuemax="100" aria-valuemin="0" class="v-progress-linear v-theme--light v-locale--is-ltr"
                                                 role="progressbar"
                                                 style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                                <!---->
                                                <div class="v-progress-linear__background" style="width: 100%;"></div>
                                                <div class="v-progress-linear__indeterminate">
                                                    <div class="v-progress-linear__indeterminate long"></div>
                                                    <div class="v-progress-linear__indeterminate short"></div>
                                                </div><!----></div>
                                        </div><!---->
                                        <div class="v-field__field" data-no-activator=""><!----><label
                                            class="v-label v-field-label" for="input-1770"><!----><!----></label><!---->
                                            <div class="v-field__input" data-no-activator=""><!----><!---->
                                                <div class="v-select__selection"><span class="v-select__selection-text">All Categories
                                                    <!----></span></div>
                                                <input id="input-1770" aria-describedby="input-1770-messages" aria-label="Open"
                                                       inputmode="none" size="1"
                                                       title="Open" type="text"></div><!----></div><!---->
                                        <div class="v-field__append-inner"><!----><i
                                            aria-hidden="true"
                                            class="mdi-menu-down mdi v-icon notranslate v-theme--light v-icon--size-default v-select__menu-icon"></i><!----></div>
                                        <div class="v-field__outline">
                                            <div class="v-field__outline__start"></div><!---->
                                            <div class="v-field__outline__end"></div><!----></div>
                                    </div>
                                </div><!----><!----></div>
                        </div>
                    </div>
                    <div class="v-col-md-5 v-col-12">
                        <div class="pl-md-2">
                            <div
                                class="v-input v-input--horizontal v-input--center-affix v-input--density-comfortable v-locale--is-ltr v-text-field bg-surface position-relative custom-placeholer-color">
                                <!---->
                                <div class="v-input__control">
                                    <div
                                        class="v-field v-field--center-affix v-field--single-line v-field--no-label v-field--variant-outlined v-theme--light v-locale--is-ltr">
                                        <div class="v-field__overlay"></div>
                                        <div class="v-field__loader">
                                            <div aria-hidden="true"
                                                 aria-valuemax="100" aria-valuemin="0" class="v-progress-linear v-theme--light v-locale--is-ltr"
                                                 role="progressbar"
                                                 style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                                <!---->
                                                <div class="v-progress-linear__background bg-primary"
                                                     style="width: 100%;"></div>
                                                <div class="v-progress-linear__indeterminate">
                                                    <div class="v-progress-linear__indeterminate long bg-primary"></div>
                                                    <div
                                                        class="v-progress-linear__indeterminate short bg-primary"></div>
                                                </div><!----></div>
                                        </div><!---->
                                        <div class="v-field__field" data-no-activator=""><!----><label
                                            class="v-label v-field-label" for="input-1773"><!----><!----></label><!---->
                                            <div class="v-field__input" data-no-activator="">
                                                <button class="v-btn v-theme--light v-btn--density-compact rounded-md v-btn--size-default v-btn--variant-plain no-effect position-absolute right-0 text-primary op-1 mr-n2 mt-n1"
                                                        style="text-transform: capitalize; letter-spacing: 0px;"
                                                        type="button"><span
                                                    class="v-btn__overlay"></span><span class="v-btn__underlay"></span>
                                                    <!----><span class="v-btn__content" data-no-activator=""><svg
                                                        class="icon-tabler icon-tabler-search"
                                                        fill="none" height="20px"
                                                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="3" viewBox="0 0 24 24" width="20px"
                                                        xmlns="http://www.w3.org/2000/svg">   <path d="M0 0h24v24H0z" fill="none"
                                                                                         stroke="none"></path>   <path
                                                        d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>   <path
                                                        d="M21 21l-6 -6"></path> </svg></span><!----><!----></button>
                                                <input id="input-1773" aria-describedby="input-1773-messages" placeholder="Search the blog..."
                                                       size="1" type="text"></div>
                                            <!----></div><!----><!---->
                                        <div class="v-field__outline">
                                            <div class="v-field__outline__start"></div><!---->
                                            <div class="v-field__outline__end"></div><!----></div>
                                    </div>
                                </div><!----><!----></div>
                        </div>
                    </div>
                </div>
                <div class="v-row mt-5">
                    <div class="v-col-sm-6 v-col-md-4 v-col-12">
                        <div
                            class="v-card v-theme--light v-card--density-default elevation-10 rounded-md v-card--variant-elevated aos-init aos-animate"
                            data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"><!---->
                            <div class="v-card__loader">
                                <div aria-hidden="true" aria-valuemax="100"
                                     aria-valuemin="0" class="v-progress-linear v-theme--light v-locale--is-ltr" role="progressbar"
                                     style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                    <!---->
                                    <div class="v-progress-linear__background" style="width: 100%;"></div>
                                    <div class="v-progress-linear__indeterminate">
                                        <div class="v-progress-linear__indeterminate long"></div>
                                        <div class="v-progress-linear__indeterminate short"></div>
                                    </div><!----></div>
                            </div><!----><!---->
                            <div class="hover-card overflow-hidden rounded-md lh-10 position-relative rounded-b-0"><a
                                class="" href="/blog/5-bad-landing-page-examples-how-we-would-fix-them"><img
                                alt="image" class="zoom-in w-100" src="/images/blog-grid/grid-LP.jpg"></a>
                                <div class="text-subtitle-1 position-absolute top-0 right-0 ma-2">
                                    <button class="v-btn v-theme--light v-btn--density-compact rounded-md v-btn--size-default v-btn--variant-plain px-2 py-2 no-effect bg-white text-primary op-1 rounded-circle"
                                            style="height: auto; min-width: auto; text-transform: capitalize; letter-spacing: 0px;"
                                            type="button">
                                        <span class="v-btn__overlay"></span><span class="v-btn__underlay"></span><!----><span
                                        class="v-btn__content" data-no-activator=""><svg
                                        class="icon-tabler icon-tabler-bookmark" color="black"
                                        fill="none" height="20px" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="20px"
                                        xmlns="http://www.w3.org/2000/svg">   <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>   <path
                                        d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2"></path> </svg></span>
                                        <!----><!----></button>
                                </div>
                            </div>
                            <div class="pa-4">
                                <div class="d-flex justify-space-between"><span
                                    class="v-chip v-theme--light v-chip--density-default v-chip--size-small v-chip--variant-tonal bg-lightdarkgray text-surface rounded-md pa-2"
                                    draggable="false" height="auto"><!----><span class="v-chip__underlay"></span><!---->
                                    <!----><div class="v-chip__content">Business</div><!----><!----></span>
                                    <p class="text-muted">May 19, 2023</p></div>
                                <div class="pt-4"><a class="text-decoration-none"
                                                     href="/blog/5-bad-landing-page-examples-how-we-would-fix-them"><h4
                                    class="text-h5 font-weight-medium text-dark hover-primary lh-normal">5 Bad Landing
                                    Page Examples How We Would Fix Them</h4></a></div>
                                <div class="d-flex align-center mt-10 pt-5">
                                    <div
                                        class="v-avatar v-theme--light v-avatar--density-default v-avatar--variant-flat"
                                        style="width: 48px; height: 48px;"><img alt="profile"
                                                                                height="48" src="/images/blog-grid/jerome.jpg" width="48">
                                        <!----><span class="v-avatar__underlay"></span></div>
                                    <h4 class="text-dark ml-3">John Bell</h4></div>
                            </div><!----><!----><span class="v-card__underlay"></span></div>
                    </div>
                    <div class="v-col-sm-6 v-col-md-4 v-col-12">
                        <div
                            class="v-card v-theme--light v-card--density-default elevation-10 rounded-md v-card--variant-elevated aos-init aos-animate"
                            data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"><!---->
                            <div class="v-card__loader">
                                <div aria-hidden="true" aria-valuemax="100"
                                     aria-valuemin="0" class="v-progress-linear v-theme--light v-locale--is-ltr" role="progressbar"
                                     style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                    <!---->
                                    <div class="v-progress-linear__background" style="width: 100%;"></div>
                                    <div class="v-progress-linear__indeterminate">
                                        <div class="v-progress-linear__indeterminate long"></div>
                                        <div class="v-progress-linear__indeterminate short"></div>
                                    </div><!----></div>
                            </div><!----><!---->
                            <div class="hover-card overflow-hidden rounded-md lh-10 position-relative rounded-b-0"><a
                                class="" href="/blog/why-ux-design-matters-and-how-it-affects-ranking"><img
                                alt="image" class="zoom-in w-100" src="/images/blog-grid/grid-uxdesign.jpg"></a>
                                <div class="text-subtitle-1 position-absolute top-0 right-0 ma-2">
                                    <button class="v-btn v-theme--light v-btn--density-compact rounded-md v-btn--size-default v-btn--variant-plain px-2 py-2 no-effect bg-white text-primary op-1 rounded-circle"
                                            style="height: auto; min-width: auto; text-transform: capitalize; letter-spacing: 0px;"
                                            type="button">
                                        <span class="v-btn__overlay"></span><span class="v-btn__underlay"></span><!----><span
                                        class="v-btn__content" data-no-activator=""><svg
                                        class="icon-tabler icon-tabler-bookmark" color="black"
                                        fill="none" height="20px" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="20px"
                                        xmlns="http://www.w3.org/2000/svg">   <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>   <path
                                        d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2"></path> </svg></span>
                                        <!----><!----></button>
                                </div>
                            </div>
                            <div class="pa-4">
                                <div class="d-flex justify-space-between"><span
                                    class="v-chip v-theme--light v-chip--density-default v-chip--size-small v-chip--variant-tonal bg-lightdarkgray text-surface rounded-md pa-2"
                                    draggable="false" height="auto"><!----><span class="v-chip__underlay"></span><!---->
                                    <!----><div class="v-chip__content">Digital</div><!----><!----></span>
                                    <p class="text-muted">May 19, 2023</p></div>
                                <div class="pt-4"><a class="text-decoration-none"
                                                     href="/blog/why-ux-design-matters-and-how-it-affects-ranking"><h4
                                    class="text-h5 font-weight-medium text-dark hover-primary lh-normal">Why UX Design
                                    Matters and How it Affects Ranking</h4></a></div>
                                <div class="d-flex align-center mt-10 pt-5">
                                    <div
                                        class="v-avatar v-theme--light v-avatar--density-default v-avatar--variant-flat"
                                        style="width: 48px; height: 48px;"><img alt="profile"
                                                                                height="48" src="/images/blog/cyrus.jpg" width="48">
                                        <!----><span class="v-avatar__underlay"></span></div>
                                    <h4 class="text-dark ml-3">James Robert</h4></div>
                            </div><!----><!----><span class="v-card__underlay"></span></div>
                    </div>
                    <div class="v-col-sm-6 v-col-md-4 v-col-12">
                        <div
                            class="v-card v-theme--light v-card--density-default elevation-10 rounded-md v-card--variant-elevated aos-init aos-animate"
                            data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"><!---->
                            <div class="v-card__loader">
                                <div aria-hidden="true" aria-valuemax="100"
                                     aria-valuemin="0" class="v-progress-linear v-theme--light v-locale--is-ltr" role="progressbar"
                                     style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                    <!---->
                                    <div class="v-progress-linear__background" style="width: 100%;"></div>
                                    <div class="v-progress-linear__indeterminate">
                                        <div class="v-progress-linear__indeterminate long"></div>
                                        <div class="v-progress-linear__indeterminate short"></div>
                                    </div><!----></div>
                            </div><!----><!---->
                            <div class="hover-card overflow-hidden rounded-md lh-10 position-relative rounded-b-0"><a
                                class="" href="/blog/this-week-in-search-new-limits-and-exciting-features"><img
                                alt="image" class="zoom-in w-100" src="/images/blog-grid/grid-search.jpg"></a>
                                <div class="text-subtitle-1 position-absolute top-0 right-0 ma-2">
                                    <button class="v-btn v-theme--light v-btn--density-compact rounded-md v-btn--size-default v-btn--variant-plain px-2 py-2 no-effect bg-white text-primary op-1 rounded-circle"
                                            style="height: auto; min-width: auto; text-transform: capitalize; letter-spacing: 0px;"
                                            type="button">
                                        <span class="v-btn__overlay"></span><span class="v-btn__underlay"></span><!----><span
                                        class="v-btn__content" data-no-activator=""><svg
                                        class="icon-tabler icon-tabler-bookmark" color="black"
                                        fill="none" height="20px" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="20px"
                                        xmlns="http://www.w3.org/2000/svg">   <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>   <path
                                        d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2"></path> </svg></span>
                                        <!----><!----></button>
                                </div>
                            </div>
                            <div class="pa-4">
                                <div class="d-flex justify-space-between"><span
                                    class="v-chip v-theme--light v-chip--density-default v-chip--size-small v-chip--variant-tonal bg-lightdarkgray text-surface rounded-md pa-2"
                                    draggable="false" height="auto"><!----><span class="v-chip__underlay"></span><!---->
                                    <!----><div class="v-chip__content">Business</div><!----><!----></span>
                                    <p class="text-muted">May 19, 2023</p></div>
                                <div class="pt-4"><a class="text-decoration-none"
                                                     href="/blog/this-week-in-search-new-limits-and-exciting-features"><h4
                                    class="text-h5 font-weight-medium text-dark hover-primary lh-normal">This Week in
                                    Search: New Limits and Exciting Features</h4></a></div>
                                <div class="d-flex align-center mt-10 pt-5">
                                    <div
                                        class="v-avatar v-theme--light v-avatar--density-default v-avatar--variant-flat"
                                        style="width: 48px; height: 48px;"><img alt="profile"
                                                                                height="48" src="/images/blog/cyrus.jpg" width="48">
                                        <!----><span class="v-avatar__underlay"></span></div>
                                    <h4 class="text-dark ml-3">David William</h4></div>
                            </div><!----><!----><span class="v-card__underlay"></span></div>
                    </div>
                    <div class="v-col-sm-6 v-col-md-4 v-col-12">
                        <div
                            class="v-card v-theme--light v-card--density-default elevation-10 rounded-md v-card--variant-elevated aos-init aos-animate"
                            data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"><!---->
                            <div class="v-card__loader">
                                <div aria-hidden="true" aria-valuemax="100"
                                     aria-valuemin="0" class="v-progress-linear v-theme--light v-locale--is-ltr" role="progressbar"
                                     style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                    <!---->
                                    <div class="v-progress-linear__background" style="width: 100%;"></div>
                                    <div class="v-progress-linear__indeterminate">
                                        <div class="v-progress-linear__indeterminate long"></div>
                                        <div class="v-progress-linear__indeterminate short"></div>
                                    </div><!----></div>
                            </div><!----><!---->
                            <div class="hover-card overflow-hidden rounded-md lh-10 position-relative rounded-b-0"><a
                                class="" href="/blog/five-effective-lead-generation-techniques-for-your-business"><img
                                alt="image" class="zoom-in w-100" src="/images/blog-grid/grid-effective-tech.jpg"></a>
                                <div class="text-subtitle-1 position-absolute top-0 right-0 ma-2">
                                    <button class="v-btn v-theme--light v-btn--density-compact rounded-md v-btn--size-default v-btn--variant-plain px-2 py-2 no-effect bg-white text-primary op-1 rounded-circle"
                                            style="height: auto; min-width: auto; text-transform: capitalize; letter-spacing: 0px;"
                                            type="button">
                                        <span class="v-btn__overlay"></span><span class="v-btn__underlay"></span><!----><span
                                        class="v-btn__content" data-no-activator=""><svg
                                        class="icon-tabler icon-tabler-bookmark" color="black"
                                        fill="none" height="20px" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="20px"
                                        xmlns="http://www.w3.org/2000/svg">   <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>   <path
                                        d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2"></path> </svg></span>
                                        <!----><!----></button>
                                </div>
                            </div>
                            <div class="pa-4">
                                <div class="d-flex justify-space-between"><span
                                    class="v-chip v-theme--light v-chip--density-default v-chip--size-small v-chip--variant-tonal bg-lightdarkgray text-surface rounded-md pa-2"
                                    draggable="false" height="auto"><!----><span class="v-chip__underlay"></span><!---->
                                    <!----><div class="v-chip__content">Business</div><!----><!----></span>
                                    <p class="text-muted">April 19, 2023</p></div>
                                <div class="pt-4"><a
                                    class="text-decoration-none"
                                    href="/blog/five-effective-lead-generation-techniques-for-your-business"><h4
                                    class="text-h5 font-weight-medium text-dark hover-primary lh-normal">Five Effective
                                    Lead Generation Techniques For Your Business</h4></a></div>
                                <div class="d-flex align-center mt-10 pt-5">
                                    <div
                                        class="v-avatar v-theme--light v-avatar--density-default v-avatar--variant-flat"
                                        style="width: 48px; height: 48px;"><img alt="profile"
                                                                                height="48" src="/images/blog/cyrus.jpg" width="48">
                                        <!----><span class="v-avatar__underlay"></span></div>
                                    <h4 class="text-dark ml-3">Make Richard</h4></div>
                            </div><!----><!----><span class="v-card__underlay"></span></div>
                    </div>
                    <div class="v-col-sm-6 v-col-md-4 v-col-12">
                        <div
                            class="v-card v-theme--light v-card--density-default elevation-10 rounded-md v-card--variant-elevated aos-init aos-animate"
                            data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"><!---->
                            <div class="v-card__loader">
                                <div aria-hidden="true" aria-valuemax="100"
                                     aria-valuemin="0" class="v-progress-linear v-theme--light v-locale--is-ltr" role="progressbar"
                                     style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                    <!---->
                                    <div class="v-progress-linear__background" style="width: 100%;"></div>
                                    <div class="v-progress-linear__indeterminate">
                                        <div class="v-progress-linear__indeterminate long"></div>
                                        <div class="v-progress-linear__indeterminate short"></div>
                                    </div><!----></div>
                            </div><!----><!---->
                            <div class="hover-card overflow-hidden rounded-md lh-10 position-relative rounded-b-0"><a
                                class="" href="/blog/inclusive-marketing-why-and-how-does-it-work"><img
                                alt="image" class="zoom-in w-100" src="/images/blog-grid/grid-marketing.jpg"></a>
                                <div class="text-subtitle-1 position-absolute top-0 right-0 ma-2">
                                    <button class="v-btn v-theme--light v-btn--density-compact rounded-md v-btn--size-default v-btn--variant-plain px-2 py-2 no-effect bg-white text-primary op-1 rounded-circle"
                                            style="height: auto; min-width: auto; text-transform: capitalize; letter-spacing: 0px;"
                                            type="button">
                                        <span class="v-btn__overlay"></span><span class="v-btn__underlay"></span><!----><span
                                        class="v-btn__content" data-no-activator=""><svg
                                        class="icon-tabler icon-tabler-bookmark" color="black"
                                        fill="none" height="20px" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="20px"
                                        xmlns="http://www.w3.org/2000/svg">   <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>   <path
                                        d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2"></path> </svg></span>
                                        <!----><!----></button>
                                </div>
                            </div>
                            <div class="pa-4">
                                <div class="d-flex justify-space-between"><span
                                    class="v-chip v-theme--light v-chip--density-default v-chip--size-small v-chip--variant-tonal bg-lightdarkgray text-surface rounded-md pa-2"
                                    draggable="false" height="auto"><!----><span class="v-chip__underlay"></span><!---->
                                    <!----><div class="v-chip__content">Business</div><!----><!----></span>
                                    <p class="text-muted">April 20, 2023</p></div>
                                <div class="pt-4"><a class="text-decoration-none"
                                                     href="/blog/inclusive-marketing-why-and-how-does-it-work"><h4
                                    class="text-h5 font-weight-medium text-dark hover-primary lh-normal">Inclusive
                                    Marketing: Why and How Does it Work?</h4></a></div>
                                <div class="d-flex align-center mt-10 pt-5">
                                    <div
                                        class="v-avatar v-theme--light v-avatar--density-default v-avatar--variant-flat"
                                        style="width: 48px; height: 48px;"><img alt="profile"
                                                                                height="48" src="/images/blog/cyrus.jpg" width="48">
                                        <!----><span class="v-avatar__underlay"></span></div>
                                    <h4 class="text-dark ml-3">Joseph Anthony</h4></div>
                            </div><!----><!----><span class="v-card__underlay"></span></div>
                    </div>
                    <div class="v-col-sm-6 v-col-md-4 v-col-12">
                        <div
                            class="v-card v-theme--light v-card--density-default elevation-10 rounded-md v-card--variant-elevated aos-init aos-animate"
                            data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"><!---->
                            <div class="v-card__loader">
                                <div aria-hidden="true" aria-valuemax="100"
                                     aria-valuemin="0" class="v-progress-linear v-theme--light v-locale--is-ltr" role="progressbar"
                                     style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                    <!---->
                                    <div class="v-progress-linear__background" style="width: 100%;"></div>
                                    <div class="v-progress-linear__indeterminate">
                                        <div class="v-progress-linear__indeterminate long"></div>
                                        <div class="v-progress-linear__indeterminate short"></div>
                                    </div><!----></div>
                            </div><!----><!---->
                            <div class="hover-card overflow-hidden rounded-md lh-10 position-relative rounded-b-0"><a
                                class="" href="/blog/how-agile-is-your-forecasting-process"><img
                                alt="image" class="zoom-in w-100" src="/images/blog-grid/grid-agile.jpg"></a>
                                <div class="text-subtitle-1 position-absolute top-0 right-0 ma-2">
                                    <button class="v-btn v-theme--light v-btn--density-compact rounded-md v-btn--size-default v-btn--variant-plain px-2 py-2 no-effect bg-white text-primary op-1 rounded-circle"
                                            style="height: auto; min-width: auto; text-transform: capitalize; letter-spacing: 0px;"
                                            type="button">
                                        <span class="v-btn__overlay"></span><span class="v-btn__underlay"></span><!----><span
                                        class="v-btn__content" data-no-activator=""><svg
                                        class="icon-tabler icon-tabler-bookmark" color="black"
                                        fill="none" height="20px" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="20px"
                                        xmlns="http://www.w3.org/2000/svg">   <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>   <path
                                        d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2"></path> </svg></span>
                                        <!----><!----></button>
                                </div>
                            </div>
                            <div class="pa-4">
                                <div class="d-flex justify-space-between"><span
                                    class="v-chip v-theme--light v-chip--density-default v-chip--size-small v-chip--variant-tonal bg-lightdarkgray text-surface rounded-md pa-2"
                                    draggable="false" height="auto"><!----><span class="v-chip__underlay"></span><!---->
                                    <!----><div class="v-chip__content">Business</div><!----><!----></span>
                                    <p class="text-muted">April 22, 2023</p></div>
                                <div class="pt-4"><a class="text-decoration-none"
                                                     href="/blog/how-agile-is-your-forecasting-process"><h4
                                    class="text-h5 font-weight-medium text-dark hover-primary lh-normal">How Agile is
                                    Your Forecasting Process?</h4></a></div>
                                <div class="d-flex align-center mt-10 pt-5">
                                    <div
                                        class="v-avatar v-theme--light v-avatar--density-default v-avatar--variant-flat"
                                        style="width: 48px; height: 48px;"><img alt="profile"
                                                                                height="48" src="/images/blog-grid/jerome.jpg" width="48">
                                        <!----><span class="v-avatar__underlay"></span></div>
                                    <h4 class="text-dark ml-3">Mark Wood</h4></div>
                            </div><!----><!----><span class="v-card__underlay"></span></div>
                    </div>
                    <div class="v-col-sm-6 v-col-md-4 v-col-12">
                        <div
                            class="v-card v-theme--light v-card--density-default elevation-10 rounded-md v-card--variant-elevated aos-init"
                            data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"><!---->
                            <div class="v-card__loader">
                                <div aria-hidden="true" aria-valuemax="100"
                                     aria-valuemin="0" class="v-progress-linear v-theme--light v-locale--is-ltr" role="progressbar"
                                     style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                    <!---->
                                    <div class="v-progress-linear__background" style="width: 100%;"></div>
                                    <div class="v-progress-linear__indeterminate">
                                        <div class="v-progress-linear__indeterminate long"></div>
                                        <div class="v-progress-linear__indeterminate short"></div>
                                    </div><!----></div>
                            </div><!----><!---->
                            <div class="hover-card overflow-hidden rounded-md lh-10 position-relative rounded-b-0"><a
                                class="" href="/blog/your-guide-to-optimising-a-javascript-enabled-website"><img
                                alt="image" class="zoom-in w-100" src="/images/blog-grid/grid-js.jpg"></a>
                                <div class="text-subtitle-1 position-absolute top-0 right-0 ma-2">
                                    <button class="v-btn v-theme--light v-btn--density-compact rounded-md v-btn--size-default v-btn--variant-plain px-2 py-2 no-effect bg-white text-primary op-1 rounded-circle"
                                            style="height: auto; min-width: auto; text-transform: capitalize; letter-spacing: 0px;"
                                            type="button">
                                        <span class="v-btn__overlay"></span><span class="v-btn__underlay"></span><!----><span
                                        class="v-btn__content" data-no-activator=""><svg
                                        class="icon-tabler icon-tabler-bookmark" color="black"
                                        fill="none" height="20px" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="20px"
                                        xmlns="http://www.w3.org/2000/svg">   <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>   <path
                                        d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2"></path> </svg></span>
                                        <!----><!----></button>
                                </div>
                            </div>
                            <div class="pa-4">
                                <div class="d-flex justify-space-between"><span
                                    class="v-chip v-theme--light v-chip--density-default v-chip--size-small v-chip--variant-tonal bg-lightdarkgray text-surface rounded-md pa-2"
                                    draggable="false" height="auto"><!----><span class="v-chip__underlay"></span><!---->
                                    <!----><div class="v-chip__content">Business</div><!----><!----></span>
                                    <p class="text-muted">April 25, 2023</p></div>
                                <div class="pt-4"><a class="text-decoration-none"
                                                     href="/blog/your-guide-to-optimising-a-javascript-enabled-website"><h4
                                    class="text-h5 font-weight-medium text-dark hover-primary lh-normal">Your Guide to
                                    Optimising A JavaScript-enabled Website</h4></a></div>
                                <div class="d-flex align-center mt-10 pt-5">
                                    <div
                                        class="v-avatar v-theme--light v-avatar--density-default v-avatar--variant-flat"
                                        style="width: 48px; height: 48px;"><img alt="profile"
                                                                                height="48" src="/images/blog/cyrus.jpg" width="48">
                                        <!----><span class="v-avatar__underlay"></span></div>
                                    <h4 class="text-dark ml-3">Kevin Donald</h4></div>
                            </div><!----><!----><span class="v-card__underlay"></span></div>
                    </div>
                    <div class="v-col-sm-6 v-col-md-4 v-col-12">
                        <div
                            class="v-card v-theme--light v-card--density-default elevation-10 rounded-md v-card--variant-elevated aos-init"
                            data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"><!---->
                            <div class="v-card__loader">
                                <div aria-hidden="true" aria-valuemax="100"
                                     aria-valuemin="0" class="v-progress-linear v-theme--light v-locale--is-ltr" role="progressbar"
                                     style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                    <!---->
                                    <div class="v-progress-linear__background" style="width: 100%;"></div>
                                    <div class="v-progress-linear__indeterminate">
                                        <div class="v-progress-linear__indeterminate long"></div>
                                        <div class="v-progress-linear__indeterminate short"></div>
                                    </div><!----></div>
                            </div><!----><!---->
                            <div class="hover-card overflow-hidden rounded-md lh-10 position-relative rounded-b-0"><a
                                class=""
                                href="/blog/a-study-on-smartwatch-design-qualities-and-peoples-preferences"><img alt="image" class="zoom-in w-100"
                                              src="/images/blog-grid/grid-smartwatch.jpg"></a>
                                <div class="text-subtitle-1 position-absolute top-0 right-0 ma-2">
                                    <button class="v-btn v-theme--light v-btn--density-compact rounded-md v-btn--size-default v-btn--variant-plain px-2 py-2 no-effect bg-white text-primary op-1 rounded-circle"
                                            style="height: auto; min-width: auto; text-transform: capitalize; letter-spacing: 0px;"
                                            type="button">
                                        <span class="v-btn__overlay"></span><span class="v-btn__underlay"></span><!----><span
                                        class="v-btn__content" data-no-activator=""><svg
                                        class="icon-tabler icon-tabler-bookmark" color="black"
                                        fill="none" height="20px" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="20px"
                                        xmlns="http://www.w3.org/2000/svg">   <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>   <path
                                        d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2"></path> </svg></span>
                                        <!----><!----></button>
                                </div>
                            </div>
                            <div class="pa-4">
                                <div class="d-flex justify-space-between"><span
                                    class="v-chip v-theme--light v-chip--density-default v-chip--size-small v-chip--variant-tonal bg-lightdarkgray text-surface rounded-md pa-2"
                                    draggable="false" height="auto"><!----><span class="v-chip__underlay"></span><!---->
                                    <!----><div class="v-chip__content">Business</div><!----><!----></span>
                                    <p class="text-muted">April 01, 2023</p></div>
                                <div class="pt-4"><a
                                    class="text-decoration-none"
                                    href="/blog/a-study-on-smartwatch-design-qualities-and-peoples-preferences"><h4
                                    class="text-h5 font-weight-medium text-dark hover-primary lh-normal">A Study on
                                    Smartwatch Design Qualities and People’s Preferences</h4></a></div>
                                <div class="d-flex align-center mt-10 pt-5">
                                    <div
                                        class="v-avatar v-theme--light v-avatar--density-default v-avatar--variant-flat"
                                        style="width: 48px; height: 48px;"><img alt="profile"
                                                                                height="48" src="/images/blog/cyrus.jpg" width="48">
                                        <!----><span class="v-avatar__underlay"></span></div>
                                    <h4 class="text-dark ml-3">Ryan Jecob</h4></div>
                            </div><!----><!----><span class="v-card__underlay"></span></div>
                    </div>
                    <div class="v-col-sm-6 v-col-md-4 v-col-12">
                        <div
                            class="v-card v-theme--light v-card--density-default elevation-10 rounded-md v-card--variant-elevated aos-init"
                            data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"><!---->
                            <div class="v-card__loader">
                                <div aria-hidden="true" aria-valuemax="100"
                                     aria-valuemin="0" class="v-progress-linear v-theme--light v-locale--is-ltr" role="progressbar"
                                     style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
                                    <!---->
                                    <div class="v-progress-linear__background" style="width: 100%;"></div>
                                    <div class="v-progress-linear__indeterminate">
                                        <div class="v-progress-linear__indeterminate long"></div>
                                        <div class="v-progress-linear__indeterminate short"></div>
                                    </div><!----></div>
                            </div><!----><!---->
                            <div class="hover-card overflow-hidden rounded-md lh-10 position-relative rounded-b-0"><a
                                class="" href="/blog/this-long-awaited-technology-may-finally-change-the-world"><img
                                alt="image" class="zoom-in w-100" src="/images/blog-grid/grid-sidelap.jpg"></a>
                                <div class="text-subtitle-1 position-absolute top-0 right-0 ma-2">
                                    <button class="v-btn v-theme--light v-btn--density-compact rounded-md v-btn--size-default v-btn--variant-plain px-2 py-2 no-effect bg-white text-primary op-1 rounded-circle"
                                            style="height: auto; min-width: auto; text-transform: capitalize; letter-spacing: 0px;"
                                            type="button">
                                        <span class="v-btn__overlay"></span><span class="v-btn__underlay"></span><!----><span
                                        class="v-btn__content" data-no-activator=""><svg
                                        class="icon-tabler icon-tabler-bookmark" color="black"
                                        fill="none" height="20px" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="20px"
                                        xmlns="http://www.w3.org/2000/svg">   <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>   <path
                                        d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2"></path> </svg></span>
                                        <!----><!----></button>
                                </div>
                            </div>
                            <div class="pa-4">
                                <div class="d-flex justify-space-between"><span
                                    class="v-chip v-theme--light v-chip--density-default v-chip--size-small v-chip--variant-tonal bg-lightdarkgray text-surface rounded-md pa-2"
                                    draggable="false" height="auto"><!----><span class="v-chip__underlay"></span><!---->
                                    <!----><div class="v-chip__content">digital</div><!----><!----></span>
                                    <p class="text-muted">April 10, 2023</p></div>
                                <div class="pt-4"><a
                                    class="text-decoration-none"
                                    href="/blog/this-long-awaited-technology-may-finally-change-the-world"><h4
                                    class="text-h5 font-weight-medium text-dark hover-primary lh-normal">This
                                    Long-Awaited Technology May Finally Change the World</h4></a></div>
                                <div class="d-flex align-center mt-10 pt-5">
                                    <div
                                        class="v-avatar v-theme--light v-avatar--density-default v-avatar--variant-flat"
                                        style="width: 48px; height: 48px;"><img alt="profile"
                                                                                height="48" src="/images/blog-grid/jerome.jpg" width="48">
                                        <!----><span class="v-avatar__underlay"></span></div>
                                    <h4 class="text-dark ml-3">Scott Brandon</h4></div>
                            </div><!----><!----><span class="v-card__underlay"></span></div>
                    </div>
                    <div class="v-col v-col-12 mt-md-5 mt-3">
                        <nav aria-label="Pagination Navigation" class="v-pagination v-theme--light no-effect"
                             data-test="v-pagination-root" role="navigation">
                            <ul class="v-pagination__list"><!---->
                                <li class="v-pagination__prev" data-test="v-pagination-prev">
                                    <button aria-disabled="true"
                                            aria-label="Previous page"
                                            class="v-btn v-btn--disabled v-btn--icon v-theme--light v-btn--density-comfortable rounded-circle v-btn--size-default v-btn--variant-text" disabled="" type="button"><span
                                        class="v-btn__overlay"></span><span class="v-btn__underlay"></span><!----><span
                                        class="v-btn__content" data-no-activator=""><i
                                        aria-hidden="true"
                                        class="mdi-chevron-left mdi v-icon notranslate v-theme--light v-icon--size-default"></i></span><!----><!----></button>
                                </li>
                                <li class="v-pagination__item v-pagination__item--is-active"
                                    data-test="v-pagination-item">
                                    <button aria-current="true"
                                            aria-label="Page 1, Current page"
                                            class="v-btn v-btn--icon v-theme--light v-btn--density-comfortable rounded-circle v-btn--size-default v-btn--variant-text" ellipsis="false" type="button"><span
                                        class="v-btn__overlay"></span><span class="v-btn__underlay"></span><!----><span
                                        class="v-btn__content" data-no-activator="">1</span><!----><!----></button>
                                </li>
                                <li class="v-pagination__item" data-test="v-pagination-item">
                                    <button aria-current="false"
                                            aria-label="Go to page 2"
                                            class="v-btn v-btn--icon v-theme--light v-btn--density-comfortable rounded-circle v-btn--size-default v-btn--variant-text" ellipsis="false" type="button"><span
                                        class="v-btn__overlay"></span><span class="v-btn__underlay"></span><!----><span
                                        class="v-btn__content" data-no-activator="">2</span><!----><!----></button>
                                </li>
                                <li class="v-pagination__item" data-test="v-pagination-item">
                                    <button aria-current="false"
                                            aria-label="Go to page 3"
                                            class="v-btn v-btn--icon v-theme--light v-btn--density-comfortable rounded-circle v-btn--size-default v-btn--variant-text" ellipsis="false" type="button"><span
                                        class="v-btn__overlay"></span><span class="v-btn__underlay"></span><!----><span
                                        class="v-btn__content" data-no-activator="">3</span><!----><!----></button>
                                </li>
                                <li class="v-pagination__item" data-test="v-pagination-item">
                                    <button aria-current="false"
                                            aria-label="Go to page 4"
                                            class="v-btn v-btn--icon v-theme--light v-btn--density-comfortable rounded-circle v-btn--size-default v-btn--variant-text" ellipsis="false" type="button"><span
                                        class="v-btn__overlay"></span><span class="v-btn__underlay"></span><!----><span
                                        class="v-btn__content" data-no-activator="">4</span><!----><!----></button>
                                </li>
                                <li class="v-pagination__next" data-test="v-pagination-next">
                                    <button aria-disabled="false"
                                            aria-label="Next page"
                                            class="v-btn v-btn--icon v-theme--light v-btn--density-comfortable rounded-circle v-btn--size-default v-btn--variant-text" type="button"><span
                                        class="v-btn__overlay"></span><span class="v-btn__underlay"></span><!----><span
                                        class="v-btn__content" data-no-activator=""><i
                                        aria-hidden="true"
                                        class="mdi-chevron-right mdi v-icon notranslate v-theme--light v-icon--size-default"></i></span><!----><!----></button>
                                </li><!----></ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

    </page-layout>
</template>

<style scoped>

</style>
