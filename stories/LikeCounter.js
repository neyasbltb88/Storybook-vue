import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

storiesOf('Like Counter', module).add(
    'Normal mode',
    () => /* html */ ` 
        <div class="container center" style="--bg-color: #fff">
            <LikeCounterController/>
        </div>`
);
