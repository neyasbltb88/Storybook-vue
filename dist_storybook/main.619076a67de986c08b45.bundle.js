(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{139:function(module,exports,__webpack_require__){var content=__webpack_require__(727);"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__(732).default)("0be35aa0",content,!0,{})},348:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(26),__webpack_require__(22),__webpack_require__(290),__webpack_require__(312),__webpack_require__(30),__webpack_require__(313),__webpack_require__(33),__webpack_require__(38),__webpack_require__(657),__webpack_require__(318);var _created,_startSlideshow,_loadDataUrlLoop,_loadDataUrl,asyncToGenerator=__webpack_require__(90),components_ZoomSlideshowvue_type_script_lang_js_=(__webpack_require__(696),__webpack_require__(709),__webpack_require__(711),__webpack_require__(722),{props:{slides:{type:Array,required:!0},from:{type:Number,default:1.5},to:{type:Number,default:1},duration:{type:Number,default:5e3},zoomDuration:{type:Number,default:5e3},overlayClass:{type:String,default:"slides-overlay-effect"}},data:function data(){return{currentSlide:-1,slidesDataUrl:new Map,waitLoadingImg:!1,currentLoadedUrl:"",emptyImg:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="}},computed:{currentSlideUrl:function currentSlideUrl(){return this.slidesDataUrl.has(this.slides[this.currentSlide])?this.slidesDataUrl.get(this.slides[this.currentSlide]):this.emptyImg},nextSlide:function nextSlide(){return this.currentSlide<this.slides.length-1?this.currentSlide+1:0},computedStyle:function computedStyle(){return{"--toOpacity":1,"--toTransform":"scale(".concat(this.to,")"),"--transition":"opacity ".concat(700<this.zoomDuration?700:this.zoomDuration,"ms ease, transform ").concat(this.zoomDuration,"ms ease"),"--fromOpacity":0,"--fromTransform":"scale(".concat(this.from,")")}}},methods:{loadDataUrl:(_loadDataUrl=Object(asyncToGenerator.a)(regeneratorRuntime.mark(function _callee(url){var rawData,blob,dataUrl;return regeneratorRuntime.wrap(function(_context){for(;;)switch(_context.prev=_context.next){case 0:return this.currentLoadedUrl=url,_context.next=3,fetch(url);case 3:return rawData=_context.sent,_context.next=6,rawData.blob();case 6:blob=_context.sent,dataUrl=URL.createObjectURL(blob),this.slidesDataUrl.set(url,dataUrl),this.currentLoadedUrl="",this.waitLoadingImg&&this.startSlideshow();case 11:case"end":return _context.stop()}},_callee,this)})),function loadDataUrl(){return _loadDataUrl.apply(this,arguments)}),loadDataUrlLoop:(_loadDataUrlLoop=Object(asyncToGenerator.a)(regeneratorRuntime.mark(function _callee2(url){return regeneratorRuntime.wrap(function(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:if(!url&&this.slidesDataUrl.size<this.slides.length&&(url=this.slides[this.slidesDataUrl.size]),!url||this.currentLoadedUrl!==url&&!this.slidesDataUrl.has(url)){_context2.next=3;break}return _context2.abrupt("return");case 3:if(url){_context2.next=5;break}return _context2.abrupt("return");case 5:return _context2.next=7,this.loadDataUrl(url);case 7:return _context2.next=9,this.loadDataUrlLoop();case 9:case"end":return _context2.stop()}},_callee2,this)})),function loadDataUrlLoop(){return _loadDataUrlLoop.apply(this,arguments)}),showNextSlide:function showNextSlide(){this.currentSlide=this.nextSlide},delay:function delay(timeout){return new Promise(function(resolve){return setTimeout(resolve,timeout)})},startSlideshow:(_startSlideshow=Object(asyncToGenerator.a)(regeneratorRuntime.mark(function _callee3(){var nextSlideUrl;return regeneratorRuntime.wrap(function(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:if(nextSlideUrl=this.slides[this.nextSlide],!this.slidesDataUrl.has(nextSlideUrl)){_context3.next=6;break}this.waitLoadingImg=!1,this.showNextSlide(),_context3.next=9;break;case 6:return this.waitLoadingImg=!0,this.loadDataUrlLoop(nextSlideUrl),_context3.abrupt("return");case 9:return _context3.next=11,this.delay(this.duration);case 11:this.startSlideshow();case 12:case"end":return _context3.stop()}},_callee3,this)})),function startSlideshow(){return _startSlideshow.apply(this,arguments)})},created:(_created=Object(asyncToGenerator.a)(regeneratorRuntime.mark(function _callee4(){return regeneratorRuntime.wrap(function(_context4){for(;;)switch(_context4.prev=_context4.next){case 0:this.startSlideshow();case 1:case"end":return _context4.stop()}},_callee4,this)})),function created(){return _created.apply(this,arguments)})}),componentNormalizer=(__webpack_require__(726),__webpack_require__(347)),component=Object(componentNormalizer.a)(components_ZoomSlideshowvue_type_script_lang_js_,function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("div",{staticClass:"zoom-slideshow-container"},[_c("div",{staticClass:"slides",style:this.computedStyle},[_c("div",{staticClass:"slides-overlay",class:this.overlayClass}),this._v(" "),_c("transition",{attrs:{name:"slideshow",mode:"in-out"}},[_c("img",{key:this.currentSlideUrl,staticClass:"slide",attrs:{src:this.currentSlideUrl}})])],1),this._v(" "),_c("div",{staticClass:"content-container"},[this._t("default")],2)])},[],!1,null,"65b02de4",null);__webpack_exports__.a=component.exports},349:function(module,exports,__webpack_require__){__webpack_require__(350),__webpack_require__(454),module.exports=__webpack_require__(455)},455:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(140),vue__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(89),_src_components_ZoomSlideshow_vue__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(348);vue__WEBPACK_IMPORTED_MODULE_1__.default.component("ZoomSlideshow",_src_components_ZoomSlideshow_vue__WEBPACK_IMPORTED_MODULE_2__.a),Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_0__.configure)(function loadStories(){__webpack_require__(731)},module)}.call(this,__webpack_require__(235)(module))},726:function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ZoomSlideshow_vue_vue_type_style_index_0_id_65b02de4_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(139);__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ZoomSlideshow_vue_vue_type_style_index_0_id_65b02de4_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__).a},727:function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(728)(!1);var ___CSS_LOADER_URL___0___=__webpack_require__(729)(__webpack_require__(730));exports.push([module.i,".zoom-slideshow-container[data-v-65b02de4]{position:relative;box-sizing:border-box}.slides[data-v-65b02de4],.slide[data-v-65b02de4],.slides-overlay[data-v-65b02de4],.content-container[data-v-65b02de4]{position:absolute;width:100%;height:100%;left:0;top:0}.slides[data-v-65b02de4]{overflow:hidden;z-index:0}.slides-overlay[data-v-65b02de4]{z-index:1}.slides-overlay-effect[data-v-65b02de4]{background-color:rgba(0,0,0,0.3);background-image:url("+___CSS_LOADER_URL___0___+")}.slide[data-v-65b02de4]{display:block;background-size:cover;background-position:center;object-fit:cover;will-change:opacity, transform;opacity:var(--toOpacity);transform:var(--toTransform);transition:var(--transition)}.slideshow-enter[data-v-65b02de4]{opacity:var(--fromOpacity);transform:var(--fromTransform)}.slideshow-leave[data-v-65b02de4]{opacity:1}.slideshow-leave-active[data-v-65b02de4]{opacity:0.9;transition:opacity 100ms ease, transform 100ms ease}\n",""])},730:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/overlay.f438f107.png"},731:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(140);Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Zoom Slideshow",module).add("Desktop mode",function(){return' \n        <div class="container size85">\n            <ZoomSlideshow\n                class="zoom-slideshow"\n                :slides=\'[\n                    "./slides/DJI_0004.jpg",\n                    "./slides/DJI_0006.jpg",\n                    "./slides/DJI_0018.jpg",\n                    "./slides/DJI_0022.jpg",\n                    "./slides/DJI_0036.jpg",\n                    "/slides/DJI_0042.jpg"\n                ]\'\n                :from="1.3"\n                :to="1"\n                :duration="5000"\n                :zoomDuration="8000"\n            ></ZoomSlideshow>\n        </div>'}).add("Mobile mode",function(){return' \n        <div class="container mobile">\n            <ZoomSlideshow\n                class="zoom-slideshow"\n                :slides=\'[\n                    "./slides/DJI_0004.jpg",\n                    "./slides/DJI_0006.jpg",\n                    "./slides/DJI_0018.jpg",\n                    "./slides/DJI_0022.jpg",\n                    "./slides/DJI_0036.jpg",\n                    "/slides/DJI_0042.jpg"\n                ]\'\n                :from="1.3"\n                :to="1"\n                :duration="5000"\n                :zoomDuration="8000"\n            ></ZoomSlideshow>\n        </div>'}).add("Fullscreen mode",function(){return' \n        <div class="container">\n            <ZoomSlideshow\n                class="zoom-slideshow"\n                :slides=\'[\n                    "./slides/DJI_0004.jpg",\n                    "./slides/DJI_0006.jpg",\n                    "./slides/DJI_0018.jpg",\n                    "./slides/DJI_0022.jpg",\n                    "./slides/DJI_0036.jpg",\n                    "/slides/DJI_0042.jpg"\n                ]\'\n                :from="1.3"\n                :to="1"\n                :duration="5000"\n                :zoomDuration="8000"\n            ></ZoomSlideshow>\n        </div>'}).add("With content",function(){return' \n        <div class="container">\n            <ZoomSlideshow\n                class="zoom-slideshow"\n                :slides=\'[\n                    "./slides/DJI_0004.jpg",\n                    "./slides/DJI_0006.jpg",\n                    "./slides/DJI_0018.jpg",\n                    "./slides/DJI_0022.jpg",\n                    "./slides/DJI_0036.jpg",\n                    "/slides/DJI_0042.jpg"\n                ]\'\n                :from="1.3"\n                :to="1"\n                :duration="5000"\n                :zoomDuration="8000"\n            >\n                <div class="test-content">Пример Контента внутри блока слайдшоу</div>\n            </ZoomSlideshow>\n        </div>'}).add("Zoom in",function(){return' \n        <div class="container size85">\n            <ZoomSlideshow\n                class="zoom-slideshow"\n                :slides=\'[\n                    "./slides/DJI_0004.jpg",\n                    "./slides/DJI_0006.jpg",\n                    "./slides/DJI_0018.jpg",\n                    "./slides/DJI_0022.jpg",\n                    "./slides/DJI_0036.jpg",\n                    "/slides/DJI_0042.jpg"\n                ]\'\n                :from="1"\n                :to="1.3"\n                :duration="5000"\n                :zoomDuration="8000"\n            >\n                <div class="test-content">Пример Контента внутри блока слайдшоу</div>\n            </ZoomSlideshow>\n        </div>'}).add("Custom Overlay",function(){return' \n        <div class="container size85">\n            <ZoomSlideshow\n                class="zoom-slideshow"\n                :slides=\'[\n                    "./slides/DJI_0004.jpg",\n                    "./slides/DJI_0006.jpg",\n                    "./slides/DJI_0018.jpg",\n                    "./slides/DJI_0022.jpg",\n                    "./slides/DJI_0036.jpg",\n                    "/slides/DJI_0042.jpg"\n                ]\'\n                :from="1"\n                :to="1.3"\n                :duration="5000"\n                :zoomDuration="8000"\n                overlayClass="custom-overlay"\n            >\n                <div class="test-content">Пример Контента внутри блока слайдшоу</div>\n            </ZoomSlideshow>\n        </div>'})}.call(this,__webpack_require__(235)(module))}},[[349,1,2]]]);
//# sourceMappingURL=main.619076a67de986c08b45.bundle.js.map