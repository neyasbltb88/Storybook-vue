import { configure } from '@storybook/vue';

import Vue from 'vue';

import ZoomSlideshow from '../src/components/ZoomSlideshow.vue';
Vue.component('ZoomSlideshow', ZoomSlideshow);

import LikeCounterController from '../src/components/LikeCounter/LikeCounterController.vue';
Vue.component('LikeCounterController', LikeCounterController);

const req = require.context('../stories', true, /\.js$/);

function loadStories() {
    req.keys().forEach(filename => {
        console.log('filename', filename);

        return req(filename);
    });
}

configure(loadStories, module);
