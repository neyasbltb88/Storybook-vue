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
                let newCount = this.count - this.rand(1, 1000);
                this.count = newCount >= 0 ? newCount : 0;
            }

            // if (this.active) {
            //     this.count += 1;
            // } else {
            //     this.count -= 1;
            // }
        },
        rand(min, max) {
            return Math.floor(min + Math.random() * (max + 1 - min));
        },
        tick() {
            setInterval(() => {
                // this.active = !this.active;
                this.clickHandler();
            }, 2000);
        }
    },
    // created() {
    //     this.count = 9999;

    //     // this.tick();
    // }
    created() {
        this.count = this.rand(1000, 10000);
        // this.tick();
    }
};
</script>
