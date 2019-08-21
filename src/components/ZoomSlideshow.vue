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
            slidesDataUrl: [],
            waitLoadingImg: false,
            currentLoadedUrl: "",
            // Заглушка - один прозрачный пиксель
            emptyImg:
                "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
        };
    },
    computed: {
        // Заглушка, чтобы при старте в src не попадал undefined
        currentSlideUrl() {
            return this.slidesDataUrl[this.currentSlide]
                ? this.slidesDataUrl[this.currentSlide]
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
                "--transition": `opacity ${
                    this.zoomDuration > 700 ? 700 : this.zoomDuration
                }ms ease, transform ${this.zoomDuration}ms ease`,

                "--fromOpacity": 0,
                "--fromTransform": `scale(${this.from})`
            };
        }
    },
    methods: {
        // Загрузка одной картинки и сохранение ее в виде dataUrl
        async loadDataUrl(url) {
            console.log("loadDataUrl: ", url);

            this.currentLoadedUrl = url;
            let rawData = await fetch(url);
            let blob = await rawData.blob();
            let dataUrl = URL.createObjectURL(blob);
            this.slidesDataUrl.push(dataUrl);
            this.currentLoadedUrl = "";

            // Если слайдшоу уже ждет эту картинку
            if (this.waitLoadingImg) {
                this.startSlideshow();
            }
        },

        // Рекурсивная загрузка картинок
        async loadDataUrlLoop() {
            if (this.slidesDataUrl.length < this.slides.length) {
                let url = this.slides[this.slidesDataUrl.length];

                // Если нужная картинка уже загружается, выходим
                if (this.currentLoadedUrl === url) return;

                await this.loadDataUrl(url);
                await this.loadDataUrlLoop();
            }
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
            if (this.slidesDataUrl[this.nextSlide]) {
                this.waitLoadingImg = false;
                this.showNextSlide();

                // Если нет, делаем отметку что ждем ее
                // и загрузчик по готовности картинки снова вызовет startSlideshow
            } else {
                this.waitLoadingImg = true;
                this.loadDataUrlLoop();
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
            background-image: url("../assets/overlay.png")

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
    &-leave
        opacity: 1
        &-active
            opacity: 0.9
            transition: opacity 100ms ease, transform 100ms ease

</style>
