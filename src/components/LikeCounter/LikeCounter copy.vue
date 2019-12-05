<template>
    <div class="like-counter" :class="isActive" :style="computedStyle" @click="clickHandler">
        <div>startPosition - {{ startPosition }} |</div>
        <div>oldCount - {{ oldCount.join('') }} |</div>

        <div class="like-counter-icon" v-if="!noIcon"></div>

        <transition-group tag="div" name="fade" class="like-counter-count" @after-enter="afterEnterHandler">
            <div
                v-for="(digit, pos) in _count"
                :key="`${pos}_${digit}`"
                class="like-counter-count-digit"
                :style="`--delay: ${getPosition(pos)}; --offset: ${startPosition}; --leave-offset: ${pos}`"
            >
                {{ digit }}
            </div>

            <!-- <div v-for="digit in maxLength" :key="`${digit}`">
                {{ getPosition(digit) }}
            </div> -->
        </transition-group>
    </div>
</template>

<script>
import defaultActiveIcon from './like-active.svg';
import defaultInactiveIcon from './like-not-active.svg';

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
            type: [Number, String]
        }
    },
    data() {
        return {
            showTransition: false,
            defaultActiveIcon,
            defaultInactiveIcon,
            defaultActiveColor: '#ff3347',
            defaultInactiveColor: '#67707a',
            oldCount: '',
            stoppedDigit: 0
        };
    },
    computed: {
        maxLength() {
            return this.oldCount.length > this._count.length ? this.oldCount.length : this._count.length;
        },
        startPosition() {
            let result = 0;

            for (let i = 0; i < this._count.length; i++) {
                if (this.oldCount[i] !== this._count[i]) {
                    result = this.getPosition(i);
                    break;
                }
            }

            return result;
        },
        _count() {
            // this.showTransition = !this.showTransition;

            // this.oldCount = this.count.toString().split('');

            return this.count.toString().split('');
        },
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
        rand(min, max) {
            let rand = Math.floor(min + Math.random() * (max + 1 - min));
            return rand;
        },
        keyGenerator() {
            let id = '';
            for (let i = 0; i < 10; i++) {
                id += String.fromCharCode(this.rand(97, 122));
            }

            return id;
        },
        afterEnterHandler() {
            console.log('afterEnterHandler');
            this.stoppedDigit++;
        },
        afterLeaveHandler() {
            console.log('afterLeaveHandler');
            this.stoppedDigit++;
        },
        getPosition(index) {
            return Math.abs(index - this.maxLength);
        },
        clickHandler() {
            this.$emit('click');
        }
    },
    created() {
        this.oldCount = this._count;
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
        display: flex
        font-weight: bold
        font-family: sans-serif
        margin-top: 3px
        user-select: none
        color: var(--inactive-color)
        &-digit
            // transition-delay: calc(1000ms * var(--offset))
            will-change: transform
            // transform: translateX(calc(100% * var(--offset)))
            // position: absolute
            // transform: translateX(calc(100% * var(--leave-offset)))

.like-counter.active
    .like-counter
        &-icon
            background-image: var(--active-icon)
            animation: like 250ms ease-in-out
            animation-fill-mode: forwards
        &-count
            color: var(--active-color)


.fade-enter-active, .fade-leave-active
    transition: transform 20s calc(5000ms * var(--delay)) linear

.fade-enter
    // transform: translate(calc(-100% * var(--offset)), -100%)
    transform: translateY(-100%)

.fade-leave
    transition: none
    position: absolute
    transform: translateX(calc(100% * var(--leave-offset)))

.fade-leave-to
    // transform: translateY(100%)
    position: absolute
    transform: translate(calc(100% * var(--leave-offset)), 100%)

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
