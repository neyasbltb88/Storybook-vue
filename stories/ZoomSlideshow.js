import Vue from 'vue';
import {
    storiesOf
} from '@storybook/vue';

storiesOf('Zoom Slideshow', module)
    .add('Desktop mode', () => /* html */ ` 
        <div class="container size85">
            <ZoomSlideshow
                class="zoom-slideshow"
                :slides='[
                    "./slides/DJI_0004.jpg",
                    "./slides/DJI_0006.jpg",
                    "./slides/DJI_0018.jpg",
                    "./slides/DJI_0022.jpg",
                    "./slides/DJI_0036.jpg",
                    "/slides/DJI_0042.jpg"
                ]'
                :from="1.3"
                :to="1"
                :duration="5000"
                :zoomDuration="8000"
                :fadeInDuration="3000"
            ></ZoomSlideshow>
        </div>`)

.add('Mobile mode', () => /* html */ ` 
        <div class="container mobile">
            <ZoomSlideshow
                class="zoom-slideshow"
                :slides='[
                    "./slides/DJI_0004.jpg",
                    "./slides/DJI_0006.jpg",
                    "./slides/DJI_0018.jpg",
                    "./slides/DJI_0022.jpg",
                    "./slides/DJI_0036.jpg",
                    "/slides/DJI_0042.jpg"
                ]'
                :from="1.3"
                :to="1"
                :duration="5000"
                :zoomDuration="8000"
            ></ZoomSlideshow>
        </div>`)

.add('Fullscreen mode', () => /* html */ ` 
        <div class="container">
            <ZoomSlideshow
                class="zoom-slideshow"
                :slides='[
                    "./slides/DJI_0004.jpg",
                    "./slides/DJI_0006.jpg",
                    "./slides/DJI_0018.jpg",
                    "./slides/DJI_0022.jpg",
                    "./slides/DJI_0036.jpg",
                    "/slides/DJI_0042.jpg"
                ]'
                :from="1.3"
                :to="1"
                :duration="5000"
                :zoomDuration="8000"
            ></ZoomSlideshow>
        </div>`)

.add('With content', () => /* html */ ` 
        <div class="container">
            <ZoomSlideshow
                class="zoom-slideshow"
                :slides='[
                    "./slides/DJI_0004.jpg",
                    "./slides/DJI_0006.jpg",
                    "./slides/DJI_0018.jpg",
                    "./slides/DJI_0022.jpg",
                    "./slides/DJI_0036.jpg",
                    "/slides/DJI_0042.jpg"
                ]'
                :from="1.3"
                :to="1"
                :duration="5000"
                :zoomDuration="8000"
            >
                <div class="test-content">Пример Контента внутри блока слайдшоу</div>
            </ZoomSlideshow>
        </div>`)

.add('Zoom in', () => /* html */ ` 
        <div class="container size85">
            <ZoomSlideshow
                class="zoom-slideshow"
                :slides='[
                    "./slides/DJI_0004.jpg",
                    "./slides/DJI_0006.jpg",
                    "./slides/DJI_0018.jpg",
                    "./slides/DJI_0022.jpg",
                    "./slides/DJI_0036.jpg",
                    "/slides/DJI_0042.jpg"
                ]'
                :from="1"
                :to="1.3"
                :duration="5000"
                :zoomDuration="8000"
            >
                <div class="test-content">Пример Контента внутри блока слайдшоу</div>
            </ZoomSlideshow>
        </div>`)

.add('Custom Overlay', () => /* html */ ` 
        <div class="container size85">
            <ZoomSlideshow
                class="zoom-slideshow"
                :slides='[
                    "./slides/DJI_0004.jpg",
                    "./slides/DJI_0006.jpg",
                    "./slides/DJI_0018.jpg",
                    "./slides/DJI_0022.jpg",
                    "./slides/DJI_0036.jpg",
                    "/slides/DJI_0042.jpg"
                ]'
                :from="1"
                :to="1.3"
                :duration="5000"
                :zoomDuration="8000"
                overlayClass="custom-overlay"
            >
                <div class="test-content">Пример Контента внутри блока слайдшоу</div>
            </ZoomSlideshow>
        </div>`)