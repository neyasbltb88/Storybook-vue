(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{143:function(module,exports,__webpack_require__){var content=__webpack_require__(735);"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__(358).default)("7585d579",content,!0,{})},144:function(module,exports,__webpack_require__){var content=__webpack_require__(746);"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__(358).default)("a5d7f912",content,!0,{})},359:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/like-active.8af4fca1.svg"},360:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/like-not-active.6dac4afc.svg"},361:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(25),__webpack_require__(16),__webpack_require__(85),__webpack_require__(202),__webpack_require__(21),__webpack_require__(68),__webpack_require__(86),__webpack_require__(283),__webpack_require__(26),__webpack_require__(161),__webpack_require__(736),__webpack_require__(738),__webpack_require__(355);var like_active=__webpack_require__(359),like_active_default=__webpack_require__.n(like_active),like_not_active=__webpack_require__(360),like_not_active_default=__webpack_require__.n(like_not_active),LikeCounter_LikeCountervue_type_script_lang_js_={name:"LikeCounter",props:{noIcon:{required:!1,type:Boolean,default:!1},activeIcon:{required:!1,type:String},inactiveIcon:{required:!1,type:String},activeColor:{required:!1,type:String},inactiveColor:{required:!1,type:String},active:{required:!0,type:Boolean},count:{required:!0,type:[Number,String]}},data:function data(){return{showTransition:!1,defaultActiveIcon:like_active_default.a,defaultInactiveIcon:like_not_active_default.a,defaultActiveColor:"#ff3347",defaultInactiveColor:"#67707a",oldCount:"",newCount:"",stoppedDigit:0,keys:[]}},computed:{maxLength:function maxLength(){return this.oldCount.length>this._count.length?this.oldCount.length:this._count.length},startPosition:function startPosition(){for(var result=this.maxLength,i=0;i<this.maxLength;i++)if(this.oldCount[i]!==this.newCount[i]){result=i;break}return result},_count:function _count(){return this.newCount=this.count.toString().split(""),this.count.toString().split("")},isActive:function isActive(){return this.active?"active":""},iconActive:function iconActive(){return this.activeIcon?this.activeIcon:this.defaultActiveIcon},iconInactive:function iconInactive(){return this.inactiveIcon?this.inactiveIcon:this.defaultInactiveIcon},colorActive:function colorActive(){return this.activeColor?this.activeColor:this.defaultActiveColor},colorInactive:function colorInactive(){return this.inactiveColor?this.inactiveColor:this.defaultInactiveColor},computedStyle:function computedStyle(){return{"--active-icon":"url(".concat(this.iconActive,")"),"--inactive-icon":"url(".concat(this.iconInactive,")"),"--active-color":this.colorActive,"--inactive-color":this.colorInactive}}},methods:{rand:function(min,max){return Math.floor(min+Math.random()*(max+1-min))},randomString:function randomString(){for(var id="",i=0;10>i;i++)id+=String.fromCharCode(this.rand(97,122));return id},keyGenerator:function keyGenerator(index){var key;return index<this.startPosition&&(key=this.keys[index]),(!key||index>=this.startPosition)&&(key=this.randomString(),this.keys[index]=key),key},afterEnterHandler:function afterEnterHandler(){console.log("afterEnterHandler"),this.stoppedDigit++;var needAmount=this.newCount.length-this.startPosition;console.log("stoppedDigit: ".concat(this.stoppedDigit,"| needAmount: ").concat(needAmount)),this.stoppedDigit>=needAmount&&(this.stoppedDigit=0,console.log("Animation stop"))},beforeEnterHandler:function beforeEnterHandler(){this.oldCount=this.newCount},getPosition:function getPosition(index){return Math.abs(index-this.maxLength)-1},clickHandler:function clickHandler(){this.$emit("click")}},created:function created(){window.LikeCounter=this,this.oldCount=this._count,this.newCount=this._count}},componentNormalizer=(__webpack_require__(745),__webpack_require__(72)),LikeCounter_LikeCounterControllervue_type_script_lang_js_={name:"LikeCounterController",components:{LikeCounter:Object(componentNormalizer.a)(LikeCounter_LikeCountervue_type_script_lang_js_,function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"like-counter",class:_vm.isActive,style:_vm.computedStyle,on:{click:_vm.clickHandler}},[_vm.noIcon?_vm._e():_c("div",{staticClass:"like-counter-icon"}),_vm._v(" "),_c("div",{staticClass:"like-counter-count"},[_c("div",{staticClass:"like-counter-count-new"},_vm._l(_vm.maxLength,function(digit,index){return _c("transition",{key:_vm.keyGenerator(index),attrs:{name:"fade",mode:"out-in"},on:{"after-enter":_vm.afterEnterHandler,"before-enter":_vm.beforeEnterHandler}},[_c("div",{key:_vm.keyGenerator(index),staticClass:"like-counter-count-digit",style:"--delay: "+_vm.getPosition(index)+";",attrs:{"data-key":_vm.keys[index]}},[_vm._v("\n                    "+_vm._s(_vm.newCount[index]||" ")+"\n                ")])])}),1),_vm._v(" "),_c("div",{staticClass:"like-counter-count-old"},_vm._l(_vm.maxLength,function(digit,index){return _c("transition",{key:_vm.keyGenerator(index),attrs:{name:"fade",mode:"out-in"}},[_c("div",{key:_vm.keyGenerator(index),staticClass:"like-counter-count-digit",style:"--delay: "+_vm.getPosition(index)+";",attrs:{"data-key":_vm.keys[index]}},[_vm._v("\n                    "+_vm._s(_vm.newCount[index]||" ")+"\n                ")])])}),1)])])},[],!1,null,"432f90ab",null).exports},data:function data(){return{active:!1,count:0}},methods:{clickHandler:function clickHandler(){if(this.active=!this.active,this.active)this.count+=this.rand(1,1e3);else{var newCount=this.count-this.rand(1,1e3);this.count=0<=newCount?newCount:0}},rand:function rand(min,max){return Math.floor(min+Math.random()*(max+1-min))},tick:function tick(){var _this=this;setInterval(function(){_this.clickHandler()},2e3)}},created:function created(){this.count=this.rand(1e3,1e4)}},LikeCounterController_component=Object(componentNormalizer.a)(LikeCounter_LikeCounterControllervue_type_script_lang_js_,function(){var _h=this.$createElement;return(this._self._c||_h)("LikeCounter",{attrs:{active:this.active,count:this.count},on:{click:this.clickHandler}})},[],!1,null,null,null);__webpack_exports__.a=LikeCounterController_component.exports},362:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(25),__webpack_require__(16),__webpack_require__(305),__webpack_require__(202),__webpack_require__(21),__webpack_require__(327),__webpack_require__(38),__webpack_require__(26),__webpack_require__(681),__webpack_require__(332);var _created,_startSlideshow,_loadDataUrlLoop,_loadDataUrl,asyncToGenerator=__webpack_require__(95),components_ZoomSlideshowvue_type_script_lang_js_=(__webpack_require__(161),__webpack_require__(720),__webpack_require__(721),__webpack_require__(355),{props:{slides:{type:Array,required:!0},from:{type:Number,default:1.5},to:{type:Number,default:1},duration:{type:Number,default:5e3},zoomDuration:{type:Number,default:5e3},fadeInDuration:{type:[Number,void 0]},overlayClass:{type:String,default:"slides-overlay-effect"}},data:function data(){return{currentSlide:-1,slidesDataUrl:new Map,waitLoadingImg:!1,currentLoadedUrl:"",emptyImg:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="}},computed:{_fadeInDuration:function _fadeInDuration(){var ms;return console.log("fadeInDuration - this._fadeInDuration:",this.fadeInDuration),ms=this.fadeInDuration?this.fadeInDuration:700<this.zoomDuration?700:this.zoomDuration,console.log("fadeInDuration - ms:",ms),ms},currentSlideUrl:function currentSlideUrl(){return this.slidesDataUrl.has(this.slides[this.currentSlide])?this.slidesDataUrl.get(this.slides[this.currentSlide]):this.emptyImg},nextSlide:function nextSlide(){return this.currentSlide<this.slides.length-1?this.currentSlide+1:0},computedStyle:function computedStyle(){return{"--toOpacity":1,"--toTransform":"scale(".concat(this.to,")"),"--transition":"opacity ".concat(this._fadeInDuration,"ms ease, transform ").concat(this.zoomDuration,"ms ease"),"--fromOpacity":0,"--fromTransform":"scale(".concat(this.from,")")}}},methods:{loadDataUrl:(_loadDataUrl=Object(asyncToGenerator.a)(regeneratorRuntime.mark(function _callee(url){var rawData,blob,dataUrl;return regeneratorRuntime.wrap(function(_context){for(;;)switch(_context.prev=_context.next){case 0:return this.currentLoadedUrl=url,_context.next=3,fetch(url);case 3:return rawData=_context.sent,_context.next=6,rawData.blob();case 6:blob=_context.sent,dataUrl=URL.createObjectURL(blob),this.slidesDataUrl.set(url,dataUrl),this.currentLoadedUrl="",this.waitLoadingImg&&this.startSlideshow();case 11:case"end":return _context.stop()}},_callee,this)})),function loadDataUrl(){return _loadDataUrl.apply(this,arguments)}),loadDataUrlLoop:(_loadDataUrlLoop=Object(asyncToGenerator.a)(regeneratorRuntime.mark(function _callee2(url){return regeneratorRuntime.wrap(function(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:if(!url&&this.slidesDataUrl.size<this.slides.length&&(url=this.slides[this.slidesDataUrl.size]),!url||this.currentLoadedUrl!==url&&!this.slidesDataUrl.has(url)){_context2.next=3;break}return _context2.abrupt("return");case 3:if(url){_context2.next=5;break}return _context2.abrupt("return");case 5:return _context2.next=7,this.loadDataUrl(url);case 7:return _context2.next=9,this.loadDataUrlLoop();case 9:case"end":return _context2.stop()}},_callee2,this)})),function loadDataUrlLoop(){return _loadDataUrlLoop.apply(this,arguments)}),showNextSlide:function showNextSlide(){this.currentSlide=this.nextSlide},delay:function delay(timeout){return new Promise(function(resolve){return setTimeout(resolve,timeout)})},startSlideshow:(_startSlideshow=Object(asyncToGenerator.a)(regeneratorRuntime.mark(function _callee3(){var nextSlideUrl;return regeneratorRuntime.wrap(function(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:if(nextSlideUrl=this.slides[this.nextSlide],!this.slidesDataUrl.has(nextSlideUrl)){_context3.next=6;break}this.waitLoadingImg=!1,this.showNextSlide(),_context3.next=9;break;case 6:return this.waitLoadingImg=!0,this.loadDataUrlLoop(nextSlideUrl),_context3.abrupt("return");case 9:return _context3.next=11,this.delay(this.duration);case 11:this.startSlideshow();case 12:case"end":return _context3.stop()}},_callee3,this)})),function startSlideshow(){return _startSlideshow.apply(this,arguments)})},created:(_created=Object(asyncToGenerator.a)(regeneratorRuntime.mark(function _callee4(){return regeneratorRuntime.wrap(function(_context4){for(;;)switch(_context4.prev=_context4.next){case 0:this.startSlideshow();case 1:case"end":return _context4.stop()}},_callee4,this)})),function created(){return _created.apply(this,arguments)})}),componentNormalizer=(__webpack_require__(734),__webpack_require__(72)),component=Object(componentNormalizer.a)(components_ZoomSlideshowvue_type_script_lang_js_,function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("div",{staticClass:"zoom-slideshow-container"},[_c("div",{staticClass:"slides",style:this.computedStyle},[_c("div",{staticClass:"slides-overlay",class:this.overlayClass}),this._v(" "),_c("transition",{attrs:{name:"slideshow",mode:"in-out"}},[_c("img",{key:this.currentSlideUrl,staticClass:"slide",attrs:{src:this.currentSlideUrl}})])],1),this._v(" "),_c("div",{staticClass:"content-container"},[this._t("default")],2)])},[],!1,null,"6387bd9b",null);__webpack_exports__.a=component.exports},363:function(module,exports,__webpack_require__){__webpack_require__(364),__webpack_require__(468),module.exports=__webpack_require__(469)},469:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(43),__webpack_require__(16),__webpack_require__(21),__webpack_require__(44),__webpack_require__(26),__webpack_require__(161);var _storybook_vue__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(71),vue__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(59),_src_components_ZoomSlideshow_vue__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(362),_src_components_LikeCounter_LikeCounterController_vue__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(361);vue__WEBPACK_IMPORTED_MODULE_7__.default.component("ZoomSlideshow",_src_components_ZoomSlideshow_vue__WEBPACK_IMPORTED_MODULE_8__.a),vue__WEBPACK_IMPORTED_MODULE_7__.default.component("LikeCounterController",_src_components_LikeCounter_LikeCounterController_vue__WEBPACK_IMPORTED_MODULE_9__.a);var req=__webpack_require__(747);Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_6__.configure)(function loadStories(){req.keys().forEach(function(filename){return console.log("filename",filename),req(filename)})},module)}.call(this,__webpack_require__(157)(module))},734:function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ZoomSlideshow_vue_vue_type_style_index_0_id_6387bd9b_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(143);__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ZoomSlideshow_vue_vue_type_style_index_0_id_6387bd9b_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__).a},735:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(356)(!1)).push([module.i,'.zoom-slideshow-container[data-v-6387bd9b]{position:relative;box-sizing:border-box}.slides[data-v-6387bd9b],.slide[data-v-6387bd9b],.slides-overlay[data-v-6387bd9b],.content-container[data-v-6387bd9b]{position:absolute;width:100%;height:100%;left:0;top:0}.slides[data-v-6387bd9b]{overflow:hidden;z-index:0}.slides-overlay[data-v-6387bd9b]{z-index:1}.slides-overlay-effect[data-v-6387bd9b]{background-color:rgba(0,0,0,0.3);background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpEM0QxNjgwRDdDMjdFMzExQjM2REIxMUUxQjNCMDBFRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyNTQyRDIxRTI3N0MxMUUzODMyM0IxOThEOUM5NEFBMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNTQyRDIxRDI3N0MxMUUzODMyM0IxOThEOUM5NEFBMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQ0RDE2ODBEN0MyN0UzMTFCMzZEQjExRTFCM0IwMEVFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQzRDE2ODBEN0MyN0UzMTFCMzZEQjExRTFCM0IwMEVFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+xqq3QAAAAMxJREFUeNrs01ENACEMRMENPs4DMvBvqEcCIhoy/XkVsJOqyr6lPZr7fNqjI+emNqllEqKEEKKEEKKEEKKEEGKZhCghhCghhCghhCghhFgmIUoIIUoIIUoIIUoIIUqIEkKIEkKIEkKIEkKIEqKEEKKEEKKEEKKEEKKEKCGEKCGEKCGEKCGEKCFKCCFKCCFKCCFKCCFKiBJCiBJCiBJCiBJCiBKihBCihBCihBCihBCihCghhCghhCghhCghhCghhFgmIUoIIUrIC/0FGABvLbsFk/yxQwAAAABJRU5ErkJggg==")}.slide[data-v-6387bd9b]{display:block;background-size:cover;background-position:center;object-fit:cover;will-change:opacity, transform;opacity:var(--toOpacity);transform:var(--toTransform);transition:var(--transition)}.slideshow-enter[data-v-6387bd9b]{opacity:var(--fromOpacity);transform:var(--fromTransform)}.slideshow-leave[data-v-6387bd9b]{opacity:1}.slideshow-leave-active[data-v-6387bd9b]{opacity:0.9;transition:opacity 100ms ease, transform 100ms ease}\n',""])},745:function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LikeCounter_vue_vue_type_style_index_0_id_432f90ab_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(144);__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LikeCounter_vue_vue_type_style_index_0_id_432f90ab_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__).a},746:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(356)(!1)).push([module.i,".like-counter[data-v-432f90ab]{display:inline-flex;align-items:center;cursor:pointer}.like-counter-icon[data-v-432f90ab]{width:24px;height:24px;margin:5px;background-size:contain;background-image:var(--inactive-icon);opacity:0.7}.like-counter-count[data-v-432f90ab]{display:flex;flex-direction:column;font-weight:bold;font-family:sans-serif;margin-bottom:-3px;user-select:none;color:var(--inactive-color);height:18px;overflow:hidden}.like-counter-count-new[data-v-432f90ab]{display:flex;transform:translateY(-100%)}.like-counter-count-old[data-v-432f90ab]{display:flex;transform:translateY(-100%)}.like-counter.active .like-counter-icon[data-v-432f90ab]{background-image:var(--active-icon);animation:like-data-v-432f90ab 250ms ease-in-out;animation-fill-mode:forwards}.like-counter.active .like-counter-count[data-v-432f90ab]{color:var(--active-color)}.like-counter-count-new .fade-enter[data-v-432f90ab]{transform:translateY(100%)}.like-counter-count-new .fade-enter-active[data-v-432f90ab]{transition:transform 0.25s calc(100ms * var(--delay));transform:translateY(0%)}.like-counter-count-new .fade-enter-to[data-v-432f90ab]{transform:translateY(100%)}.like-counter-count-old .fade-leave[data-v-432f90ab]{transform:translateY(100%)}.like-counter-count-old .fade-leave-active[data-v-432f90ab]{transition:transform 0.25s calc(100ms * var(--delay));transform:translateY(0%)}.like-counter-count-old .fade-leave-to[data-v-432f90ab]{transform:translateY(100%)}@keyframes like-data-v-432f90ab{0%{opacity:0.7;transform:scale(1)}25%{opacity:1;transform:scale(1)}75%{opacity:1;transform:scale(1.15)}100%{opacity:1;transform:scale(1)}}\n",""])},747:function(module,exports,__webpack_require__){var map={"./LikeCounter.js":748,"./ZoomSlideshow.js":749};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=747},748:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(71);Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Like Counter",module).add("Normal mode",function(){return' \n        <div class="container center" style="--bg-color: #fff">\n            <LikeCounterController/>\n        </div>'})}.call(this,__webpack_require__(157)(module))},749:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(71);Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Zoom Slideshow",module).add("Desktop mode",function(){return' \n        <div class="container size85">\n            <ZoomSlideshow\n                class="zoom-slideshow"\n                :slides=\'[\n                    "./slides/DJI_0004.jpg",\n                    "./slides/DJI_0006.jpg",\n                    "./slides/DJI_0018.jpg",\n                    "./slides/DJI_0022.jpg",\n                    "./slides/DJI_0036.jpg",\n                    "/slides/DJI_0042.jpg"\n                ]\'\n                :from="1.3"\n                :to="1"\n                :duration="5000"\n                :zoomDuration="8000"\n                :fadeInDuration="3000"\n            ></ZoomSlideshow>\n        </div>'}).add("Mobile mode",function(){return' \n        <div class="container mobile">\n            <ZoomSlideshow\n                class="zoom-slideshow"\n                :slides=\'[\n                    "./slides/DJI_0004.jpg",\n                    "./slides/DJI_0006.jpg",\n                    "./slides/DJI_0018.jpg",\n                    "./slides/DJI_0022.jpg",\n                    "./slides/DJI_0036.jpg",\n                    "/slides/DJI_0042.jpg"\n                ]\'\n                :from="1.3"\n                :to="1"\n                :duration="5000"\n                :zoomDuration="8000"\n            ></ZoomSlideshow>\n        </div>'}).add("Fullscreen mode",function(){return' \n        <div class="container">\n            <ZoomSlideshow\n                class="zoom-slideshow"\n                :slides=\'[\n                    "./slides/DJI_0004.jpg",\n                    "./slides/DJI_0006.jpg",\n                    "./slides/DJI_0018.jpg",\n                    "./slides/DJI_0022.jpg",\n                    "./slides/DJI_0036.jpg",\n                    "/slides/DJI_0042.jpg"\n                ]\'\n                :from="1.3"\n                :to="1"\n                :duration="5000"\n                :zoomDuration="8000"\n            ></ZoomSlideshow>\n        </div>'}).add("With content",function(){return' \n        <div class="container">\n            <ZoomSlideshow\n                class="zoom-slideshow"\n                :slides=\'[\n                    "./slides/DJI_0004.jpg",\n                    "./slides/DJI_0006.jpg",\n                    "./slides/DJI_0018.jpg",\n                    "./slides/DJI_0022.jpg",\n                    "./slides/DJI_0036.jpg",\n                    "/slides/DJI_0042.jpg"\n                ]\'\n                :from="1.3"\n                :to="1"\n                :duration="5000"\n                :zoomDuration="8000"\n            >\n                <div class="test-content">Пример Контента внутри блока слайдшоу</div>\n            </ZoomSlideshow>\n        </div>'}).add("Zoom in",function(){return' \n        <div class="container size85">\n            <ZoomSlideshow\n                class="zoom-slideshow"\n                :slides=\'[\n                    "./slides/DJI_0004.jpg",\n                    "./slides/DJI_0006.jpg",\n                    "./slides/DJI_0018.jpg",\n                    "./slides/DJI_0022.jpg",\n                    "./slides/DJI_0036.jpg",\n                    "/slides/DJI_0042.jpg"\n                ]\'\n                :from="1"\n                :to="1.3"\n                :duration="5000"\n                :zoomDuration="8000"\n            >\n                <div class="test-content">Пример Контента внутри блока слайдшоу</div>\n            </ZoomSlideshow>\n        </div>'}).add("Custom Overlay",function(){return' \n        <div class="container size85">\n            <ZoomSlideshow\n                class="zoom-slideshow"\n                :slides=\'[\n                    "./slides/DJI_0004.jpg",\n                    "./slides/DJI_0006.jpg",\n                    "./slides/DJI_0018.jpg",\n                    "./slides/DJI_0022.jpg",\n                    "./slides/DJI_0036.jpg",\n                    "/slides/DJI_0042.jpg"\n                ]\'\n                :from="1"\n                :to="1.3"\n                :duration="5000"\n                :zoomDuration="8000"\n                overlayClass="custom-overlay"\n            >\n                <div class="test-content">Пример Контента внутри блока слайдшоу</div>\n            </ZoomSlideshow>\n        </div>'})}.call(this,__webpack_require__(157)(module))}},[[363,1,2]]]);
//# sourceMappingURL=main.b806cb4ff905048bd67d.bundle.js.map