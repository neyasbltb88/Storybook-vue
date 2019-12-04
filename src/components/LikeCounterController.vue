<template>
    <LikeCounter :active="active" :count="count" @click="clickHandler" />
</template>

<script>
import LikeCounter from './LikeCounter.vue';
export default {
    name: 'LikeCounterController',
    components: {
        LikeCounter
    },
    data() {
        return {
            active: false,
            count: 0
        };
    },
    methods: {
        clickHandler() {
            this.active = !this.active;

            if (this.active) {
                this.count += this.rand(1, 1000);
            } else {
                this.count -= this.rand(1, 1000);
            }
        },
        rand(min, max) {
            return Math.floor(min + Math.random() * (max + 1 - min));
        }
    },
    created() {
        this.count = this.rand(1000, 10000);
    }
};
</script>