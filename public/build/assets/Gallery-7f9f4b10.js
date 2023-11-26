import{_ as C,k as f,o as m,f as v,b as w,w as g,F as L,i as x,c as z,a as P}from"./app-664144cd.js";import{l as A}from"./lazy-bg-1-41b88f2b.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";/*!
  * PhotoSwipe Lightbox 5.4.2 - https://photoswipe.com
  * (c) 2023 Dmytro Semenov
  */function d(n,t,i){const e=document.createElement(t);return n&&(e.className=n),i&&i.appendChild(e),e}function O(n,t,i){let e=`translate3d(${n}px,${t||0}px,0)`;return i!==void 0&&(e+=` scale3d(${i},${i},1)`),e}function y(n,t,i){n.style.width=typeof t=="number"?`${t}px`:t,n.style.height=typeof i=="number"?`${i}px`:i}const a={IDLE:"idle",LOADING:"loading",LOADED:"loaded",ERROR:"error"};function F(n){return"button"in n&&n.button===1||n.ctrlKey||n.metaKey||n.altKey||n.shiftKey}function p(n,t,i=document){let e=[];if(n instanceof Element)e=[n];else if(n instanceof NodeList||Array.isArray(n))e=Array.from(n);else{const s=typeof n=="string"?n:t;s&&(e=Array.from(i.querySelectorAll(s)))}return e}function M(n){return typeof n=="function"&&n.prototype&&n.prototype.goTo}function S(){return!!(navigator.vendor&&navigator.vendor.match(/apple/i))}class ${constructor(t,i){this.type=t,this.defaultPrevented=!1,i&&Object.assign(this,i)}preventDefault(){this.defaultPrevented=!0}}class k{constructor(){this._listeners={},this._filters={},this.pswp=void 0,this.options=void 0}addFilter(t,i,e=100){var s,l,r;this._filters[t]||(this._filters[t]=[]),(s=this._filters[t])===null||s===void 0||s.push({fn:i,priority:e}),(l=this._filters[t])===null||l===void 0||l.sort((h,o)=>h.priority-o.priority),(r=this.pswp)===null||r===void 0||r.addFilter(t,i,e)}removeFilter(t,i){this._filters[t]&&(this._filters[t]=this._filters[t].filter(e=>e.fn!==i)),this.pswp&&this.pswp.removeFilter(t,i)}applyFilters(t,...i){var e;return(e=this._filters[t])===null||e===void 0||e.forEach(s=>{i[0]=s.fn.apply(this,i)}),i[0]}on(t,i){var e,s;this._listeners[t]||(this._listeners[t]=[]),(e=this._listeners[t])===null||e===void 0||e.push(i),(s=this.pswp)===null||s===void 0||s.on(t,i)}off(t,i){var e;this._listeners[t]&&(this._listeners[t]=this._listeners[t].filter(s=>i!==s)),(e=this.pswp)===null||e===void 0||e.off(t,i)}dispatch(t,i){var e;if(this.pswp)return this.pswp.dispatch(t,i);const s=new $(t,i);return(e=this._listeners[t])===null||e===void 0||e.forEach(l=>{l.call(this,s)}),s}}class R{constructor(t,i){if(this.element=d("pswp__img pswp__img--placeholder",t?"img":"div",i),t){const e=this.element;e.decoding="async",e.alt="",e.src=t,e.setAttribute("role","presentation")}this.element.setAttribute("aria-hidden","true")}setDisplayedSize(t,i){this.element&&(this.element.tagName==="IMG"?(y(this.element,250,"auto"),this.element.style.transformOrigin="0 0",this.element.style.transform=O(0,0,t/250)):y(this.element,t,i))}destroy(){var t;(t=this.element)!==null&&t!==void 0&&t.parentNode&&this.element.remove(),this.element=null}}class N{constructor(t,i,e){this.instance=i,this.data=t,this.index=e,this.element=void 0,this.placeholder=void 0,this.slide=void 0,this.displayedImageWidth=0,this.displayedImageHeight=0,this.width=Number(this.data.w)||Number(this.data.width)||0,this.height=Number(this.data.h)||Number(this.data.height)||0,this.isAttached=!1,this.hasSlide=!1,this.isDecoding=!1,this.state=a.IDLE,this.data.type?this.type=this.data.type:this.data.src?this.type="image":this.type="html",this.instance.dispatch("contentInit",{content:this})}removePlaceholder(){this.placeholder&&!this.keepPlaceholder()&&setTimeout(()=>{this.placeholder&&(this.placeholder.destroy(),this.placeholder=void 0)},1e3)}load(t,i){if(this.slide&&this.usePlaceholder())if(this.placeholder){const e=this.placeholder.element;e&&!e.parentElement&&this.slide.container.prepend(e)}else{const e=this.instance.applyFilters("placeholderSrc",this.data.msrc&&this.slide.isFirstSlide?this.data.msrc:!1,this);this.placeholder=new R(e,this.slide.container)}this.element&&!i||this.instance.dispatch("contentLoad",{content:this,isLazy:t}).defaultPrevented||(this.isImageContent()?(this.element=d("pswp__img","img"),this.displayedImageWidth&&this.loadImage(t)):(this.element=d("pswp__content","div"),this.element.innerHTML=this.data.html||""),i&&this.slide&&this.slide.updateContentSize(!0))}loadImage(t){var i,e;if(!this.isImageContent()||!this.element||this.instance.dispatch("contentLoadImage",{content:this,isLazy:t}).defaultPrevented)return;const s=this.element;this.updateSrcsetSizes(),this.data.srcset&&(s.srcset=this.data.srcset),s.src=(i=this.data.src)!==null&&i!==void 0?i:"",s.alt=(e=this.data.alt)!==null&&e!==void 0?e:"",this.state=a.LOADING,s.complete?this.onLoaded():(s.onload=()=>{this.onLoaded()},s.onerror=()=>{this.onError()})}setSlide(t){this.slide=t,this.hasSlide=!0,this.instance=t.pswp}onLoaded(){this.state=a.LOADED,this.slide&&this.element&&(this.instance.dispatch("loadComplete",{slide:this.slide,content:this}),this.slide.isActive&&this.slide.heavyAppended&&!this.element.parentNode&&(this.append(),this.slide.updateContentSize(!0)),(this.state===a.LOADED||this.state===a.ERROR)&&this.removePlaceholder())}onError(){this.state=a.ERROR,this.slide&&(this.displayError(),this.instance.dispatch("loadComplete",{slide:this.slide,isError:!0,content:this}),this.instance.dispatch("loadError",{slide:this.slide,content:this}))}isLoading(){return this.instance.applyFilters("isContentLoading",this.state===a.LOADING,this)}isError(){return this.state===a.ERROR}isImageContent(){return this.type==="image"}setDisplayedSize(t,i){if(this.element&&(this.placeholder&&this.placeholder.setDisplayedSize(t,i),!this.instance.dispatch("contentResize",{content:this,width:t,height:i}).defaultPrevented&&(y(this.element,t,i),this.isImageContent()&&!this.isError()))){const e=!this.displayedImageWidth&&t;this.displayedImageWidth=t,this.displayedImageHeight=i,e?this.loadImage(!1):this.updateSrcsetSizes(),this.slide&&this.instance.dispatch("imageSizeChange",{slide:this.slide,width:t,height:i,content:this})}}isZoomable(){return this.instance.applyFilters("isContentZoomable",this.isImageContent()&&this.state!==a.ERROR,this)}updateSrcsetSizes(){if(!this.isImageContent()||!this.element||!this.data.srcset)return;const t=this.element,i=this.instance.applyFilters("srcsetSizesWidth",this.displayedImageWidth,this);(!t.dataset.largestUsedSize||i>parseInt(t.dataset.largestUsedSize,10))&&(t.sizes=i+"px",t.dataset.largestUsedSize=String(i))}usePlaceholder(){return this.instance.applyFilters("useContentPlaceholder",this.isImageContent(),this)}lazyLoad(){this.instance.dispatch("contentLazyLoad",{content:this}).defaultPrevented||this.load(!0)}keepPlaceholder(){return this.instance.applyFilters("isKeepingPlaceholder",this.isLoading(),this)}destroy(){this.hasSlide=!1,this.slide=void 0,!this.instance.dispatch("contentDestroy",{content:this}).defaultPrevented&&(this.remove(),this.placeholder&&(this.placeholder.destroy(),this.placeholder=void 0),this.isImageContent()&&this.element&&(this.element.onload=null,this.element.onerror=null,this.element=void 0))}displayError(){if(this.slide){var t,i;let e=d("pswp__error-msg","div");e.innerText=(t=(i=this.instance.options)===null||i===void 0?void 0:i.errorMsg)!==null&&t!==void 0?t:"",e=this.instance.applyFilters("contentErrorElement",e,this),this.element=d("pswp__content pswp__error-msg-container","div"),this.element.appendChild(e),this.slide.container.innerText="",this.slide.container.appendChild(this.element),this.slide.updateContentSize(!0),this.removePlaceholder()}}append(){if(this.isAttached||!this.element)return;if(this.isAttached=!0,this.state===a.ERROR){this.displayError();return}if(this.instance.dispatch("contentAppend",{content:this}).defaultPrevented)return;const t="decode"in this.element;this.isImageContent()?t&&this.slide&&(!this.slide.isActive||S())?(this.isDecoding=!0,this.element.decode().catch(()=>{}).finally(()=>{this.isDecoding=!1,this.appendImage()})):this.appendImage():this.slide&&!this.element.parentNode&&this.slide.container.appendChild(this.element)}activate(){this.instance.dispatch("contentActivate",{content:this}).defaultPrevented||!this.slide||(this.isImageContent()&&this.isDecoding&&!S()?this.appendImage():this.isError()&&this.load(!1,!0),this.slide.holderElement&&this.slide.holderElement.setAttribute("aria-hidden","false"))}deactivate(){this.instance.dispatch("contentDeactivate",{content:this}),this.slide&&this.slide.holderElement&&this.slide.holderElement.setAttribute("aria-hidden","true")}remove(){this.isAttached=!1,!this.instance.dispatch("contentRemove",{content:this}).defaultPrevented&&(this.element&&this.element.parentNode&&this.element.remove(),this.placeholder&&this.placeholder.element&&this.placeholder.element.remove())}appendImage(){this.isAttached&&(this.instance.dispatch("contentAppendImage",{content:this}).defaultPrevented||(this.slide&&this.element&&!this.element.parentNode&&this.slide.container.appendChild(this.element),(this.state===a.LOADED||this.state===a.ERROR)&&this.removePlaceholder()))}}function T(n,t){if(n.getViewportSizeFn){const i=n.getViewportSizeFn(n,t);if(i)return i}return{x:document.documentElement.clientWidth,y:window.innerHeight}}function u(n,t,i,e,s){let l=0;if(t.paddingFn)l=t.paddingFn(i,e,s)[n];else if(t.padding)l=t.padding[n];else{const r="padding"+n[0].toUpperCase()+n.slice(1);t[r]&&(l=t[r])}return Number(l)||0}function G(n,t,i,e){return{x:t.x-u("left",n,t,i,e)-u("right",n,t,i,e),y:t.y-u("top",n,t,i,e)-u("bottom",n,t,i,e)}}const E=4e3;class V{constructor(t,i,e,s){this.pswp=s,this.options=t,this.itemData=i,this.index=e,this.panAreaSize=null,this.elementSize=null,this.fit=1,this.fill=1,this.vFill=1,this.initial=1,this.secondary=1,this.max=1,this.min=1}update(t,i,e){const s={x:t,y:i};this.elementSize=s,this.panAreaSize=e;const l=e.x/s.x,r=e.y/s.y;this.fit=Math.min(1,l<r?l:r),this.fill=Math.min(1,l>r?l:r),this.vFill=Math.min(1,r),this.initial=this._getInitial(),this.secondary=this._getSecondary(),this.max=Math.max(this.initial,this.secondary,this._getMax()),this.min=Math.min(this.fit,this.initial,this.secondary),this.pswp&&this.pswp.dispatch("zoomLevelsUpdate",{zoomLevels:this,slideData:this.itemData})}_parseZoomLevelOption(t){const i=t+"ZoomLevel",e=this.options[i];if(e)return typeof e=="function"?e(this):e==="fill"?this.fill:e==="fit"?this.fit:Number(e)}_getSecondary(){let t=this._parseZoomLevelOption("secondary");return t||(t=Math.min(1,this.fit*3),this.elementSize&&t*this.elementSize.x>E&&(t=E/this.elementSize.x),t)}_getInitial(){return this._parseZoomLevelOption("initial")||this.fit}_getMax(){return this._parseZoomLevelOption("max")||Math.max(1,this.fit*4)}}function D(n,t,i){const e=t.createContentFromData(n,i);let s;const{options:l}=t;if(l){s=new V(l,n,-1);let r;t.pswp?r=t.pswp.viewportSize:r=T(l,t);const h=G(l,r,n,i);s.update(e.width,e.height,h)}return e.lazyLoad(),s&&e.setDisplayedSize(Math.ceil(e.width*s.initial),Math.ceil(e.height*s.initial)),e}function W(n,t){const i=t.getItemData(n);if(!t.dispatch("lazyLoadSlide",{index:n,itemData:i}).defaultPrevented)return D(i,t,n)}class Z extends k{getNumItems(){var t;let i=0;const e=(t=this.options)===null||t===void 0?void 0:t.dataSource;e&&"length"in e?i=e.length:e&&"gallery"in e&&(e.items||(e.items=this._getGalleryDOMElements(e.gallery)),e.items&&(i=e.items.length));const s=this.dispatch("numItems",{dataSource:e,numItems:i});return this.applyFilters("numItems",s.numItems,e)}createContentFromData(t,i){return new N(t,this,i)}getItemData(t){var i;const e=(i=this.options)===null||i===void 0?void 0:i.dataSource;let s={};Array.isArray(e)?s=e[t]:e&&"gallery"in e&&(e.items||(e.items=this._getGalleryDOMElements(e.gallery)),s=e.items[t]);let l=s;l instanceof Element&&(l=this._domElementToItemData(l));const r=this.dispatch("itemData",{itemData:l||{},index:t});return this.applyFilters("itemData",r.itemData,t)}_getGalleryDOMElements(t){var i,e;return(i=this.options)!==null&&i!==void 0&&i.children||(e=this.options)!==null&&e!==void 0&&e.childSelector?p(this.options.children,this.options.childSelector,t)||[]:[t]}_domElementToItemData(t){const i={element:t},e=t.tagName==="A"?t:t.querySelector("a");if(e){i.src=e.dataset.pswpSrc||e.href,e.dataset.pswpSrcset&&(i.srcset=e.dataset.pswpSrcset),i.width=e.dataset.pswpWidth?parseInt(e.dataset.pswpWidth,10):0,i.height=e.dataset.pswpHeight?parseInt(e.dataset.pswpHeight,10):0,i.w=i.width,i.h=i.height,e.dataset.pswpType&&(i.type=e.dataset.pswpType);const l=t.querySelector("img");if(l){var s;i.msrc=l.currentSrc||l.src,i.alt=(s=l.getAttribute("alt"))!==null&&s!==void 0?s:""}(e.dataset.pswpCropped||e.dataset.cropped)&&(i.thumbCropped=!0)}return this.applyFilters("domItemData",i,t,e)}lazyLoadData(t,i){return D(t,this,i)}}class H extends Z{constructor(t){super(),this.options=t||{},this._uid=0,this.shouldOpen=!1,this._preloadedContent=void 0,this.onThumbnailsClick=this.onThumbnailsClick.bind(this)}init(){p(this.options.gallery,this.options.gallerySelector).forEach(t=>{t.addEventListener("click",this.onThumbnailsClick,!1)})}onThumbnailsClick(t){if(F(t)||window.pswp)return;let i={x:t.clientX,y:t.clientY};!i.x&&!i.y&&(i=null);let e=this.getClickedIndex(t);e=this.applyFilters("clickedIndex",e,t,this);const s={gallery:t.currentTarget};e>=0&&(t.preventDefault(),this.loadAndOpen(e,s,i))}getClickedIndex(t){if(this.options.getClickedIndexFn)return this.options.getClickedIndexFn.call(this,t);const i=t.target,s=p(this.options.children,this.options.childSelector,t.currentTarget).findIndex(l=>l===i||l.contains(i));return s!==-1?s:this.options.children||this.options.childSelector?-1:0}loadAndOpen(t,i,e){if(window.pswp||!this.options)return!1;if(!i&&this.options.gallery&&this.options.children){const s=p(this.options.gallery);s[0]&&(i={gallery:s[0]})}return this.options.index=t,this.options.initialPointerPos=e,this.shouldOpen=!0,this.preload(t,i),!0}preload(t,i){const{options:e}=this;i&&(e.dataSource=i);const s=[],l=typeof e.pswpModule;if(M(e.pswpModule))s.push(Promise.resolve(e.pswpModule));else{if(l==="string")throw new Error("pswpModule as string is no longer supported");if(l==="function")s.push(e.pswpModule());else throw new Error("pswpModule is not valid")}typeof e.openPromise=="function"&&s.push(e.openPromise()),e.preloadFirstSlide!==!1&&t>=0&&(this._preloadedContent=W(t,this));const r=++this._uid;Promise.all(s).then(h=>{if(this.shouldOpen){const o=h[0];this._openPhotoswipe(o,r)}})}_openPhotoswipe(t,i){if(i!==this._uid&&this.shouldOpen||(this.shouldOpen=!1,window.pswp))return;const e=typeof t=="object"?new t.default(this.options):new t(this.options);this.pswp=e,window.pswp=e,Object.keys(this._listeners).forEach(s=>{var l;(l=this._listeners[s])===null||l===void 0||l.forEach(r=>{e.on(s,r)})}),Object.keys(this._filters).forEach(s=>{var l;(l=this._filters[s])===null||l===void 0||l.forEach(r=>{e.addFilter(s,r.fn,r.priority)})}),this._preloadedContent&&(e.contentLoader.addToCache(this._preloadedContent),this._preloadedContent=void 0),e.on("destroy",()=>{this.pswp=void 0,delete window.pswp}),e.init()}destroy(){var t;(t=this.pswp)===null||t===void 0||t.destroy(),this.shouldOpen=!1,this._listeners={},p(this.options.gallery,this.options.gallerySelector).forEach(i=>{i.removeEventListener("click",this.onThumbnailsClick,!1)})}}const I='<svg aria-hidden="true" class="pswp__icn" viewBox="0 0 100 125" width="100" height="125"><path d="M5,50L50,5l3,3L11,50l42,42l-3,3L5,50z M92,95l3-3L53,50L95,8l-3-3L47,50L92,95z"/></svg>',B={name:"SimpleGallery",props:{galleryID:String,images:Array},setup(n){return{imagesData:n.images,lazyImage:A}},mounted(){if(!this.lightbox){const n={arrowPrevSVG:I,arrowNextSVG:I,gallery:"#"+this.$props.galleryID,children:"a",mainClass:"pswp--custom-icon-colors",pswpModule:()=>C(()=>import("./photoswipe.esm-1464cdb9.js"),[])};new H(n).init()}},unmounted(){this.lightbox&&(this.lightbox.destroy(),this.lightbox=null)},methods:{}},U=["id"],K=["alt","src"];function j(n,t,i,e,s,l){const r=f("v-card"),h=f("v-col"),o=f("v-row");return m(),v("div",{id:i.galleryID},[w(o,null,{default:g(()=>[(m(!0),v(L,null,x(e.imagesData,(c,_)=>(m(),z(h,{key:_,class:"d-flex child-flex",cols:"12",lg:"3",md:"4",sm:"6"},{default:g(()=>[w(r,{"aspect-ratio":1,"data-pswp-height":c.height,"data-pswp-width":c.width,href:c.url,class:"hover-card overflow-hidden rounded-md h-100",elevation:"10",rel:"noreferrer",target:"_blank"},{default:g(()=>[P("img",{alt:`imagen ${_}`,src:c.url,class:"zoom-in w-100 h-100",style:{"object-fit":"cover",width:"100%",height:"300px"}},null,8,K)]),_:2},1032,["data-pswp-height","data-pswp-width","href"])]),_:2},1024))),128))]),_:1})],8,U)}const J=b(B,[["render",j]]);export{J as default};
