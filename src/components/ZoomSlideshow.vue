/* ZoomSlideshow - компонент для создания анимированного фона с плавной сменой картинок с эффектом зума
 * props:
 * slides - Массив url картинок
 * from - цифра, начальный зум, при котором начинается анимация появления нового слайда
 * to - цифра, финальный зум, с которым заканчивается анимация появления слайда
 * duration - количество миллисекунд между сменой слайдов
 * zoomDuration - количество миллисекунд, длительность эффекта зума при появлении нового слайда
 * overlayClass - строка, имя класса, который добавится блоку-оверлеею и переопределит его эффект
*/ 

<template>
    <div class="zoom-slideshow-container">
        <div class="slides" :style="computedStyle">
            <div class="slides-overlay" :class="overlayClass"></div>

            <transition name="slideshow" mode="in-out">
                <img class="slide" :src="currentSlideUrl" :key="currentSlideUrl" />
            </transition>
        </div>

        <div class="content-container">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        slides: {
            type: Array,
            required: true
        },
        from: {
            type: Number,
            default: 1.5
        },
        to: {
            type: Number,
            default: 1
        },
        duration: {
            type: Number,
            default: 5000
        },
        zoomDuration: {
            type: Number,
            default: 5000
        },
        fadeInDuration: {
            type: [Number, undefined],
        },
        overlayClass: {
            type: String,
            default: "slides-overlay-effect"
        }
    },
    data() {
        return {
            // Значение текущего слайда до первоначальной инициализации: -1,
            // при первом вызове nextSlide оно будет 0 и возьмет первую картинку
            currentSlide: -1,
            slidesDataUrl: new Map(),
            waitLoadingImg: false,
            currentLoadedUrl: "",
            // Заглушка - один прозрачный пиксель
            emptyImg:
                "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
        };
    },
    computed: {
        _fadeInDuration() {
            console.log('fadeInDuration - this._fadeInDuration:', this.fadeInDuration);
            
            let ms;
            if(this.fadeInDuration) {
                ms = this.fadeInDuration;
            } else {
                ms = this.zoomDuration > 700 ? 700 : this.zoomDuration;
            }

            console.log('fadeInDuration - ms:', ms);

            return ms;
        },
        // Заглушка, чтобы при старте в src не попадал undefined
        currentSlideUrl() {
            return this.slidesDataUrl.has(this.slides[this.currentSlide])
                ? this.slidesDataUrl.get(this.slides[this.currentSlide])
                : this.emptyImg;
        },
        // Получение циклического номера следующего слайда
        nextSlide() {
            return this.currentSlide < this.slides.length - 1
                ? this.currentSlide + 1
                : 0;
        },
        // Передача настроек анимации из пропс в css-переменные, которые подхватят слайды
        computedStyle() {
            return {
                "--toOpacity": 1,
                "--toTransform": `scale(${this.to})`,
                "--transition": `opacity ${this._fadeInDuration}ms ease, transform ${this.zoomDuration}ms ease`,

                "--fromOpacity": 0,
                "--fromTransform": `scale(${this.from})`
            };
        }
    },
    methods: {
        // Загрузка одной картинки и сохранение ее в виде dataUrl
        async loadDataUrl(url) {
            this.currentLoadedUrl = url;
            let rawData = await fetch(url);
            let blob = await rawData.blob();
            let dataUrl = URL.createObjectURL(blob);
            this.slidesDataUrl.set(url, dataUrl);
            this.currentLoadedUrl = "";

            // Если слайдшоу уже ждет эту картинку
            if (this.waitLoadingImg) {
                this.startSlideshow();
            }
        },

        // Рекурсивная загрузка картинок
        async loadDataUrlLoop(url) {
            // Если не передан конкретный url, и не все картинки еще загружены
            if (!url && this.slidesDataUrl.size < this.slides.length) {
                // будем грузить следующую по списку
                url = this.slides[this.slidesDataUrl.size];
            }

            // Если нужная картинка в процессе загрузки, или уже загружена, выходим
            if (url && (this.currentLoadedUrl === url || this.slidesDataUrl.has(url))) return;
            if(!url) return;

            await this.loadDataUrl(url);
            await this.loadDataUrlLoop();
        },

        // Вызывает смену лайдов
        showNextSlide() {
            this.currentSlide = this.nextSlide;
        },

        // Простая задержка для асинхронных функций
        delay(timeout) {
            return new Promise(resolve => setTimeout(resolve, timeout));
        },

        // Запуск рекурсивной смены слайдов с защитой от показа недозагруженных картинок
        async startSlideshow() {
            // Если картинка для следующего слайда уже загружена
            let nextSlideUrl = this.slides[this.nextSlide];            
            if (this.slidesDataUrl.has(nextSlideUrl)) {
                this.waitLoadingImg = false;
                this.showNextSlide();

                // Если нет, делаем отметку что ждем ее
                // и загрузчик по готовности картинки снова вызовет startSlideshow
            } else {
                this.waitLoadingImg = true;
                this.loadDataUrlLoop(nextSlideUrl);
                return;
            }

            // После удачной смены слайда ждем нужное время и вызываем смену следующего слайда
            await this.delay(this.duration);
            this.startSlideshow();
        }
    },
    async created() {
        // Попытка запуска слайдшоу
        // (наткнется на не загруженную картинку следующего слайда и даст команду загрузчику
        // по готовности слайда снова запустить startSlideshow)
        this.startSlideshow();
    }
};
</script>

<style lang="sass" scoped>

.zoom-slideshow-container
    position: relative
    box-sizing: border-box


.slides, .slide, .slides-overlay, .content-container
    position: absolute
    width: 100%
    height: 100%
    left: 0
    top: 0

.slides
    overflow: hidden
    z-index: 0
    &-overlay
        z-index: 1
        // slides-overlay-effect - Эффект оверлея по умолчанию, имя класса для эффекта 
        // может быть переопределено в пропсе overlayClass
        &-effect 
            background-color: rgba(0, 0, 0, 0.3)
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpEM0QxNjgwRDdDMjdFMzExQjM2REIxMUUxQjNCMDBFRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyNTQyRDIxRTI3N0MxMUUzODMyM0IxOThEOUM5NEFBMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNTQyRDIxRDI3N0MxMUUzODMyM0IxOThEOUM5NEFBMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQ0RDE2ODBEN0MyN0UzMTFCMzZEQjExRTFCM0IwMEVFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQzRDE2ODBEN0MyN0UzMTFCMzZEQjExRTFCM0IwMEVFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+xqq3QAAAAMxJREFUeNrs01ENACEMRMENPs4DMvBvqEcCIhoy/XkVsJOqyr6lPZr7fNqjI+emNqllEqKEEKKEEKKEEKKEEGKZhCghhCghhCghhCghhFgmIUoIIUoIIUoIIUoIIUqIEkKIEkKIEkKIEkKIEqKEEKKEEKKEEKKEEKKEKCGEKCGEKCGEKCGEKCFKCCFKCCFKCCFKCCFKiBJCiBJCiBJCiBJCiBKihBCihBCihBCihBCihCghhCghhCghhCghhCghhFgmIUoIIUrIC/0FGABvLbsFk/yxQwAAAABJRU5ErkJggg==")

.slide
    display: block
    background-size: cover
    background-position: center
    object-fit: cover
    will-change: opacity, transform
    // В переменные попадут значения, переданные в пропс
    opacity: var(--toOpacity)
    transform: var(--toTransform)
    transition: var(--transition)

// Анимация
.slideshow
    &-enter
        opacity: var(--fromOpacity)
        transform: var(--fromTransform)
        &-active
    &-leave
        opacity: 1
        &-active
            opacity: 0.9
            transition: opacity 100ms ease, transform 100ms ease

</style>
