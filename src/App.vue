<template>
<div class="container">
    <ZoomSlideshow class="zoom-slideshow"></ZoomSlideshow>
</div>
    
</template>

<script>
import ZoomSlideshow from './components/ZoomSlideshow.vue';

export default {
    components: {
        ZoomSlideshow
    }
}
</script>

<style lang="sass">
body
    margin: 0
    width: 100vw
    height: 100vh
    box-sizing: border-box
    display: flex
    align-items: center
    justify-content: center
    background-color: #333

.container
    width: 90vw
    height: 90vh

.zoom-slideshow
    width: 100%
    height: 100%

</style>