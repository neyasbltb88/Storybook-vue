<template>
    <div class="container">
        <ZoomSlideshow
            class="zoom-slideshow"
            :slides="slideItems"
            :from="1.3"
            :to="1"
            :duration="5000"
            :zoomDuration="8000"
        >
            <div class="test-content">Пример Контента внутри блока слайдшоу</div>
        </ZoomSlideshow>
    </div>
</template>

<script>
import ZoomSlideshow from "./components/ZoomSlideshow.vue";

export default {
    components: {
        ZoomSlideshow
    },
    data() {
        return {
            slideItems: [
                "./slides/DJI_0004.jpg",
                "./slides/DJI_0006.jpg",
                "./slides/DJI_0018.jpg",
                "./slides/DJI_0022.jpg",
                "./slides/DJI_0036.jpg",
                "./slides/DJI_0042.jpg"
            ],
            overlayClass: 'over1'
        };
    }
};
</script>

<style lang="sass">
body
    margin: 0
    width: 100vw
    min-height: 100vh
    box-sizing: border-box
    display: flex
    align-items: center
    justify-content: center
    background-color: #333

.container
    width: 85vw
    height: 85vh
    // width: 100vw
    // height: 100vh
    // width: 30%

.zoom-slideshow
    width: 100%
    height: 100%

.test-content
    color: #fff
    font-size: 24px
    font-family: sans-serif
    border: 1px solid #fff
    height: 100%
    box-sizing: border-box
    display: flex
    justify-content: center
    align-items: center
    text-align: center

.over1
    background-color: rgba(255, 0, 0, 0.3)

</style>