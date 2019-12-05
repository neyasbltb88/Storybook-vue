<template>
    <div class="like-counter" :class="isActive" :style="computedStyle" @click="clickHandler">
        <!-- <div>startPosition - {{ startPosition }} |</div>
        <div>oldCount - {{ oldCount.join('') }} |</div> -->

        <div class="like-counter-icon" v-if="!noIcon"></div>

        <div class="like-counter-count">
            <div class="like-counter-count-new">
                <transition
                    v-for="(digit, index) in maxLength"
                    :key="keyGenerator(index)"
                    name="fade"
                    mode="out-in"
                    @after-enter="afterEnterHandler"
                    @before-enter="beforeEnterHandler"
                >
                    <div
                        :key="keyGenerator(index)"
                        :data-key="keys[index]"
                        class="like-counter-count-digit"
                        :style="`--delay: ${getPosition(index)};`"
                    >
                        {{ newCount[index] || '&nbsp;' }}
                    </div>
                </transition>
            </div>
            <div class="like-counter-count-old">
                <transition v-for="(digit, index) in maxLength" :key="keyGenerator(index)" name="fade" mode="out-in">
                    <div
                        :key="keyGenerator(index)"
                        :data-key="keys[index]"
                        class="like-counter-count-digit"
                        :style="`--delay: ${getPosition(index)};`"
                    >
                        <!-- {{ oldCount[index] || '&nbsp;' }} -->
                        {{ newCount[index] || '&nbsp;' }}
                    </div>
                </transition>
            </div>
        </div>
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
            newCount: '',
            stoppedDigit: 0,
            keys: []
        };
    },
    computed: {
        maxLength() {
            return this.oldCount.length > this._count.length ? this.oldCount.length : this._count.length;
        },
        startPosition() {
            let result = this.maxLength;

            for (let i = 0; i < this.maxLength; i++) {
                if (this.oldCount[i] !== this.newCount[i]) {
                    // result = this.getPosition(i);
                    result = i;
                    break;
                }
            }

            // this.oldCount = this.newCount;

            return result;
        },
        _count() {
            this.newCount = this.count.toString().split('');

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
        randomString() {
            let id = '';
            for (let i = 0; i < 10; i++) {
                id += String.fromCharCode(this.rand(97, 122));
            }

            return id;
        },
        keyGenerator(index) {
            let key;
            if (index < this.startPosition) {
                key = this.keys[index];
            }

            if (!key || index >= this.startPosition) {
                key = this.randomString();
                this.keys[index] = key;
            }

            return key;
        },
        afterEnterHandler() {
            console.log('afterEnterHandler');
            // this.oldCount = this.newCount;

            this.stoppedDigit++;
            let needAmount = this.newCount.length - this.startPosition;
            console.log(`stoppedDigit: ${this.stoppedDigit}| needAmount: ${needAmount}`);

            if (this.stoppedDigit >= needAmount) {
                this.stoppedDigit = 0;
                // this.oldCount = this.newCount;
                console.log('Animation stop');
            }
        },
        beforeEnterHandler() {
            this.oldCount = this.newCount;
        },
        getPosition(index) {
            return Math.abs(index - this.maxLength) - 1;
        },
        clickHandler() {
            this.$emit('click');
        }
    },
    created() {
        window.LikeCounter = this;
        this.oldCount = this._count;
        this.newCount = this._count;
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
        flex-direction: column
        font-weight: bold
        font-family: sans-serif
        margin-bottom: -3px
        user-select: none
        color: var(--inactive-color)
        height: 18px
        overflow: hidden
        // border: 1px solid #00f
        &-new
            display: flex
            transform: translateY(-100%)
        &-old
            display: flex
            transform: translateY(-100%)
            // opacity: 0
        &-digit
            // transform: translateY(0%)
            // transition: transform 5s calc(1000ms * var(--delay))

.like-counter.active
    .like-counter
        &-icon
            background-image: var(--active-icon)
            animation: like 250ms ease-in-out
            animation-fill-mode: forwards
        &-count
            color: var(--active-color)


.like-counter-count-new
    .fade-enter
        transform: translateY(100%)

    .fade-enter-active
        transition: transform 0.25s calc(100ms * var(--delay))
        transform: translateY(0%)

    .fade-enter-to
        transform: translateY(100%)

// --------
.like-counter-count-old
    .fade-leave
        transform: translateY(100%)
    .fade-leave-active
        transition: transform 0.25s calc(100ms * var(--delay))
        transform: translateY(0%)
    .fade-leave-to
        transform: translateY(100%)

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
