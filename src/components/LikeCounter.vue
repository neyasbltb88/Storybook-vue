<template>
    <div class="like-counter" :class="isActive" :style="computedStyle" @click="clickHandler">
        <div class="like-counter-icon" v-if="!noIcon"></div>
        <div class="like-counter-count">{{count}}</div>
    </div>
</template>

<script>
export default {
    name: 'LikeCounter',
    props: {
        noIcon: {
            required: false,
            type: Boolean,
            default: false
        },
        activeIcon: {
            required: false,
            type: String
        },
        inactiveIcon: {
            required: false,
            type: String
        },
        activeColor: {
            required: false,
            type: String
        },
        inactiveColor: {
            required: false,
            type: String
        },
        active: {
            required: true,
            type: Boolean
        },
        count: {
            required: true,
            type: Number
        }
    },
    data() {
        return {
            defaultActiveIcon: './LikeCounter/like-active.svg',
            defaultInactiveIcon: './LikeCounter/like-not-active.svg',
            defaultActiveColor: '#ff3347',
            defaultInactiveColor: '#67707a'
        };
    },
    computed: {
        isActive() {
            return this.active ? 'active' : '';
        },
        iconActive() {
            return this.activeIcon ? this.activeIcon : this.defaultActiveIcon;
        },
        iconInactive() {
            return this.inactiveIcon ? this.inactiveIcon : this.defaultInactiveIcon;
        },
        colorActive() {
            return this.activeColor ? this.activeColor : this.defaultActiveColor;
        },
        colorInactive() {
            return this.inactiveColor ? this.inactiveColor : this.defaultInactiveColor;
        },
        computedStyle() {
            return {
                '--active-icon': `url(${this.iconActive})`,
                '--inactive-icon': `url(${this.iconInactive})`,
                '--active-color': this.colorActive,
                '--inactive-color': this.colorInactive
            };
        }
    },
    methods: {
        clickHandler() {
            this.$emit('click');
        }
    }
};
</script>

<style lang="sass" scoped>
.like-counter
    display: inline-flex
    align-items: center
    cursor: pointer
    &-icon
        width: 24px
        height: 24px
        margin: 5px
        background-size: contain
        background-image: var(--inactive-icon)
        opacity: 0.7
    &-count
        font-weight: bold
        font-family: sans-serif
        margin-top: 4px
        user-select: none
        color: var(--inactive-color)
    &.active
        .like-counter-icon
            background-image: var(--active-icon)
            // .like-counter-animation-like
            animation: like 250ms ease-in-out
            animation-fill-mode: forwards
        .like-counter-count
            color: var(--active-color)

@keyframes like
    0%
        opacity: 0.7
        transform: scale(1)
    25%
        opacity: 1
        transform: scale(1)
    75%
        opacity: 1
        transform: scale(1.15)
    100%
        opacity: 1
        transform: scale(1);
</style>