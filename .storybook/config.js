import {
    configure
} from '@storybook/vue';

import Vue from 'vue';

import ZoomSlideshow from "../src/components/ZoomSlideshow.vue";
Vue.component('ZoomSlideshow', ZoomSlideshow);


// function loadStories() {
//     require('../stories/ZoomSlideshow.js');
//     // You can require as many stories as you need.
// }

const req = require.context('../stories', true, /\.js$/);

function loadStories() {
    req.keys().forEach(filename => {
        console.log('filename', filename);

        return req(filename);
    });

}


configure(loadStories, module);