(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_qiuqian_qiuqian_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/qiuqian/qiuqian.component */ "./src/app/components/qiuqian/qiuqian.component.ts");
/* harmony import */ var _components_bazi_bazi_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/bazi/bazi.component */ "./src/app/components/bazi/bazi.component.ts");
/* harmony import */ var _components_gongfo_gongfo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/gongfo/gongfo.component */ "./src/app/components/gongfo/gongfo.component.ts");
/* harmony import */ var _components_xiuxing_xiuxing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/xiuxing/xiuxing.component */ "./src/app/components/xiuxing/xiuxing.component.ts");
/* harmony import */ var _components_gongde_gongde_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/gongde/gongde.component */ "./src/app/components/gongde/gongde.component.ts");
/* harmony import */ var _components_xiuxing_xinde_xinde_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/xiuxing/xinde/xinde.component */ "./src/app/components/xiuxing/xinde/xinde.component.ts");
/* harmony import */ var _components_xiuxing_xinde_addxinde_addxinde_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/xiuxing/xinde/addxinde/addxinde.component */ "./src/app/components/xiuxing/xinde/addxinde/addxinde.component.ts");
/* harmony import */ var _components_bazi_suanming_suanming_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/bazi/suanming/suanming.component */ "./src/app/components/bazi/suanming/suanming.component.ts");
/* harmony import */ var _components_bazi_result_result_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/bazi/result/result.component */ "./src/app/components/bazi/result/result.component.ts");
/* harmony import */ var _components_gongde_zhuyinjingshu_zhuyinjingshu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/gongde/zhuyinjingshu/zhuyinjingshu.component */ "./src/app/components/gongde/zhuyinjingshu/zhuyinjingshu.component.ts");
/* harmony import */ var _components_gongfo_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/gongfo/dialog/dialog.component */ "./src/app/components/gongfo/dialog/dialog.component.ts");
/* harmony import */ var _components_xiuxing_library_library_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/xiuxing/library/library.component */ "./src/app/components/xiuxing/library/library.component.ts");
/* harmony import */ var _components_xiuxing_library_fojing_fojing_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/xiuxing/library/fojing/fojing.component */ "./src/app/components/xiuxing/library/fojing/fojing.component.ts");
/* harmony import */ var _components_xiuxing_library_fozhou_fozhou_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/xiuxing/library/fozhou/fozhou.component */ "./src/app/components/xiuxing/library/fozhou/fozhou.component.ts");
/* harmony import */ var _components_bazi_detail_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/bazi/detail/detail.component */ "./src/app/components/bazi/detail/detail.component.ts");
/* harmony import */ var _components_xiuxing_library_fozhou_zhou_general_zhou_general_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/xiuxing/library/fozhou/zhou-general/zhou-general.component */ "./src/app/components/xiuxing/library/fozhou/zhou-general/zhou-general.component.ts");
/* harmony import */ var _components_xiuxing_library_fojing_jing_general_jing_general_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/xiuxing/library/fojing/jing-general/jing-general.component */ "./src/app/components/xiuxing/library/fojing/jing-general/jing-general.component.ts");
/* harmony import */ var _components_xiuxing_library_fojing_jingGeneral_jingyuanwen_jingyuanwen_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/xiuxing/library/fojing/jingGeneral/jingyuanwen/jingyuanwen.component */ "./src/app/components/xiuxing/library/fojing/jingGeneral/jingyuanwen/jingyuanwen.component.ts");
/* harmony import */ var _components_xiuxing_library_fojing_jingGeneral_jingyiwen_jingyiwen_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/xiuxing/library/fojing/jingGeneral/jingyiwen/jingyiwen.component */ "./src/app/components/xiuxing/library/fojing/jingGeneral/jingyiwen/jingyiwen.component.ts");
/* harmony import */ var _components_gongde_juanxianghuo_juanxianghuo_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/gongde/juanxianghuo/juanxianghuo.component */ "./src/app/components/gongde/juanxianghuo/juanxianghuo.component.ts");
/* harmony import */ var _components_xiuxing_simiao_simiao_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/xiuxing/simiao/simiao.component */ "./src/app/components/xiuxing/simiao/simiao.component.ts");
/* harmony import */ var _components_xiuxing_simiao_simiaotwo_simiaotwo_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/xiuxing/simiao/simiaotwo/simiaotwo.component */ "./src/app/components/xiuxing/simiao/simiaotwo/simiaotwo.component.ts");
/* harmony import */ var _components_xiuxing_simiao_simiaothree_simiaothree_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/xiuxing/simiao/simiaothree/simiaothree.component */ "./src/app/components/xiuxing/simiao/simiaothree/simiaothree.component.ts");
/* harmony import */ var _components_xiuxing_foyin_foyin_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/xiuxing/foyin/foyin.component */ "./src/app/components/xiuxing/foyin/foyin.component.ts");
/* harmony import */ var _components_xiuxing_foyin_xuange_xuange_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/xiuxing/foyin/xuange/xuange.component */ "./src/app/components/xiuxing/foyin/xuange/xuange.component.ts");
/* harmony import */ var _components_qiuqian_jieqian_jieqian_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/qiuqian/jieqian/jieqian.component */ "./src/app/components/qiuqian/jieqian/jieqian.component.ts");
/* harmony import */ var _components_xiuxing_library_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/xiuxing/library/search-result/search-result.component */ "./src/app/components/xiuxing/library/search-result/search-result.component.ts");
/* harmony import */ var _components_gongfo_qifu_qifu_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/gongfo/qifu/qifu.component */ "./src/app/components/gongfo/qifu/qifu.component.ts");
/* harmony import */ var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/welcome/welcome.component */ "./src/app/components/welcome/welcome.component.ts");

































var routes = [
    { path: '', redirectTo: "welcome", pathMatch: 'full' },
    { path: 'welcome', component: _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_32__["WelcomeComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'bazi', component: _components_bazi_bazi_component__WEBPACK_IMPORTED_MODULE_5__["BaziComponent"] },
    { path: 'qiuqian', component: _components_qiuqian_qiuqian_component__WEBPACK_IMPORTED_MODULE_4__["QiuqianComponent"] },
    { path: 'gongfo', component: _components_gongfo_gongfo_component__WEBPACK_IMPORTED_MODULE_6__["GongfoComponent"] },
    { path: 'xiuxing', component: _components_xiuxing_xiuxing_component__WEBPACK_IMPORTED_MODULE_7__["XiuxingComponent"] },
    { path: 'gongde', component: _components_gongde_gongde_component__WEBPACK_IMPORTED_MODULE_8__["GongdeComponent"] },
    // 子页面路由写在下方
    { path: 'suanming', component: _components_bazi_suanming_suanming_component__WEBPACK_IMPORTED_MODULE_11__["SuanmingComponent"] },
    { path: 'xiuxing/xinde', component: _components_xiuxing_xinde_xinde_component__WEBPACK_IMPORTED_MODULE_9__["XindeComponent"] },
    { path: 'xiuxing/foyin', component: _components_xiuxing_foyin_foyin_component__WEBPACK_IMPORTED_MODULE_27__["FoyinComponent"] },
    { path: 'xiuxing/foyin/xuange', component: _components_xiuxing_foyin_xuange_xuange_component__WEBPACK_IMPORTED_MODULE_28__["XuangeComponent"] },
    { path: 'gongde/zhuyinjingshu', component: _components_gongde_zhuyinjingshu_zhuyinjingshu_component__WEBPACK_IMPORTED_MODULE_13__["ZhuyinjingshuComponent"] },
    { path: 'gongde/juanxianghuo', component: _components_gongde_juanxianghuo_juanxianghuo_component__WEBPACK_IMPORTED_MODULE_23__["JuanxianghuoComponent"] },
    { path: 'gongfo/dialog', component: _components_gongfo_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_14__["DialogComponent"] },
    {
        path: 'library', component: _components_xiuxing_library_library_component__WEBPACK_IMPORTED_MODULE_15__["LibraryComponent"],
        children: [
            { path: '', redirectTo: 'fozhou', pathMatch: 'full' },
            { path: 'fojing', component: _components_xiuxing_library_fojing_fojing_component__WEBPACK_IMPORTED_MODULE_16__["FojingComponent"] },
            { path: 'fozhou', component: _components_xiuxing_library_fozhou_fozhou_component__WEBPACK_IMPORTED_MODULE_17__["FozhouComponent"] }
        ]
    },
    { path: 'searchResult', component: _components_xiuxing_library_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_30__["SearchResultComponent"] },
    { path: 'detail', component: _components_bazi_detail_detail_component__WEBPACK_IMPORTED_MODULE_18__["DetailComponent"] },
    { path: 'zhouGeneral', component: _components_xiuxing_library_fozhou_zhou_general_zhou_general_component__WEBPACK_IMPORTED_MODULE_19__["ZhouGeneralComponent"] },
    { path: 'jingGeneral', component: _components_xiuxing_library_fojing_jing_general_jing_general_component__WEBPACK_IMPORTED_MODULE_20__["JingGeneralComponent"] },
    { path: 'jingyuanwen', component: _components_xiuxing_library_fojing_jingGeneral_jingyuanwen_jingyuanwen_component__WEBPACK_IMPORTED_MODULE_21__["JingyuanwenComponent"] },
    { path: 'jingyiwen', component: _components_xiuxing_library_fojing_jingGeneral_jingyiwen_jingyiwen_component__WEBPACK_IMPORTED_MODULE_22__["JingyiwenComponent"] },
    { path: 'result', component: _components_bazi_result_result_component__WEBPACK_IMPORTED_MODULE_12__["ResultComponent"] },
    { path: 'simiao', component: _components_xiuxing_simiao_simiao_component__WEBPACK_IMPORTED_MODULE_24__["SimiaoComponent"] },
    { path: 'simiaotwo', component: _components_xiuxing_simiao_simiaotwo_simiaotwo_component__WEBPACK_IMPORTED_MODULE_25__["SimiaotwoComponent"] },
    { path: 'simiaothree', component: _components_xiuxing_simiao_simiaothree_simiaothree_component__WEBPACK_IMPORTED_MODULE_26__["SimiaothreeComponent"] },
    { path: 'xiuxing/xinde/addxinde', component: _components_xiuxing_xinde_addxinde_addxinde_component__WEBPACK_IMPORTED_MODULE_10__["AddxindeComponent"] },
    { path: 'jieqian', component: _components_qiuqian_jieqian_jieqian_component__WEBPACK_IMPORTED_MODULE_29__["JieqianComponent"] },
    { path: 'qifu', component: _components_gongfo_qifu_qifu_component__WEBPACK_IMPORTED_MODULE_31__["QifuComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        // 设置body高度为窗口高度
        document.body.style.height = String(window.innerHeight) + "px";
        // var agent = navigator.userAgent.toLowerCase()
        // if (/iphone|ipod|ipad|ios|android/.test(agent)) {
        //   document.body.style.height = String(window.innerHeight) + "px"
        // } else {
        //   console.log(agent)
        //   document.body.style.width = "375px"
        //   document.body.style.height = "650px"
        // }
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_qiuqian_qiuqian_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/qiuqian/qiuqian.component */ "./src/app/components/qiuqian/qiuqian.component.ts");
/* harmony import */ var _components_bazi_bazi_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/bazi/bazi.component */ "./src/app/components/bazi/bazi.component.ts");
/* harmony import */ var _components_gongfo_gongfo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/gongfo/gongfo.component */ "./src/app/components/gongfo/gongfo.component.ts");
/* harmony import */ var _components_xiuxing_xiuxing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/xiuxing/xiuxing.component */ "./src/app/components/xiuxing/xiuxing.component.ts");
/* harmony import */ var _components_gongde_gongde_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/gongde/gongde.component */ "./src/app/components/gongde/gongde.component.ts");
/* harmony import */ var _components_common_modal_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/common/modal/modal.component */ "./src/app/components/common/modal/modal.component.ts");
/* harmony import */ var _components_xiuxing_xinde_xinde_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/xiuxing/xinde/xinde.component */ "./src/app/components/xiuxing/xinde/xinde.component.ts");
/* harmony import */ var _components_bazi_result_result_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/bazi/result/result.component */ "./src/app/components/bazi/result/result.component.ts");
/* harmony import */ var _components_bazi_detail_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/bazi/detail/detail.component */ "./src/app/components/bazi/detail/detail.component.ts");
/* harmony import */ var _components_bazi_detail2_detail2_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/bazi/detail2/detail2.component */ "./src/app/components/bazi/detail2/detail2.component.ts");
/* harmony import */ var _components_gongde_zhuyinjingshu_zhuyinjingshu_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/gongde/zhuyinjingshu/zhuyinjingshu.component */ "./src/app/components/gongde/zhuyinjingshu/zhuyinjingshu.component.ts");
/* harmony import */ var _components_bazi_suanming_suanming_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/bazi/suanming/suanming.component */ "./src/app/components/bazi/suanming/suanming.component.ts");
/* harmony import */ var _components_gongfo_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/gongfo/dialog/dialog.component */ "./src/app/components/gongfo/dialog/dialog.component.ts");
/* harmony import */ var _components_xiuxing_library_library_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/xiuxing/library/library.component */ "./src/app/components/xiuxing/library/library.component.ts");
/* harmony import */ var _components_xiuxing_library_fozhou_fozhou_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/xiuxing/library/fozhou/fozhou.component */ "./src/app/components/xiuxing/library/fozhou/fozhou.component.ts");
/* harmony import */ var _components_xiuxing_library_fojing_fojing_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/xiuxing/library/fojing/fojing.component */ "./src/app/components/xiuxing/library/fojing/fojing.component.ts");
/* harmony import */ var _components_xiuxing_library_fozhou_zhou_general_zhou_general_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/xiuxing/library/fozhou/zhou-general/zhou-general.component */ "./src/app/components/xiuxing/library/fozhou/zhou-general/zhou-general.component.ts");
/* harmony import */ var _components_xiuxing_library_fojing_jing_general_jing_general_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/xiuxing/library/fojing/jing-general/jing-general.component */ "./src/app/components/xiuxing/library/fojing/jing-general/jing-general.component.ts");
/* harmony import */ var _components_xiuxing_library_fojing_jingGeneral_jingyuanwen_jingyuanwen_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/xiuxing/library/fojing/jingGeneral/jingyuanwen/jingyuanwen.component */ "./src/app/components/xiuxing/library/fojing/jingGeneral/jingyuanwen/jingyuanwen.component.ts");
/* harmony import */ var _components_xiuxing_library_fojing_jingGeneral_jingyiwen_jingyiwen_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/xiuxing/library/fojing/jingGeneral/jingyiwen/jingyiwen.component */ "./src/app/components/xiuxing/library/fojing/jingGeneral/jingyiwen/jingyiwen.component.ts");
/* harmony import */ var _components_gongde_juanxianghuo_juanxianghuo_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/gongde/juanxianghuo/juanxianghuo.component */ "./src/app/components/gongde/juanxianghuo/juanxianghuo.component.ts");
/* harmony import */ var _components_xiuxing_simiao_simiao_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/xiuxing/simiao/simiao.component */ "./src/app/components/xiuxing/simiao/simiao.component.ts");
/* harmony import */ var _components_xiuxing_simiao_simiaotwo_simiaotwo_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/xiuxing/simiao/simiaotwo/simiaotwo.component */ "./src/app/components/xiuxing/simiao/simiaotwo/simiaotwo.component.ts");
/* harmony import */ var _components_xiuxing_simiao_simiaothree_simiaothree_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/xiuxing/simiao/simiaothree/simiaothree.component */ "./src/app/components/xiuxing/simiao/simiaothree/simiaothree.component.ts");
/* harmony import */ var _components_xiuxing_xinde_addxinde_addxinde_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/xiuxing/xinde/addxinde/addxinde.component */ "./src/app/components/xiuxing/xinde/addxinde/addxinde.component.ts");
/* harmony import */ var _components_qiuqian_jieqian_jieqian_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/qiuqian/jieqian/jieqian.component */ "./src/app/components/qiuqian/jieqian/jieqian.component.ts");
/* harmony import */ var _components_gongfo_qifu_qifu_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/gongfo/qifu/qifu.component */ "./src/app/components/gongfo/qifu/qifu.component.ts");
/* harmony import */ var _components_xiuxing_foyin_foyin_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/xiuxing/foyin/foyin.component */ "./src/app/components/xiuxing/foyin/foyin.component.ts");
/* harmony import */ var _components_gongde_zhuyinjingshu_page_page_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/gongde/zhuyinjingshu/page/page.component */ "./src/app/components/gongde/zhuyinjingshu/page/page.component.ts");
/* harmony import */ var _components_xiuxing_foyin_xuange_xuange_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/xiuxing/foyin/xuange/xuange.component */ "./src/app/components/xiuxing/foyin/xuange/xuange.component.ts");
/* harmony import */ var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/welcome/welcome.component */ "./src/app/components/welcome/welcome.component.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _components_xiuxing_library_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/xiuxing/library/search-result/search-result.component */ "./src/app/components/xiuxing/library/search-result/search-result.component.ts");








































//引入服务，并配置服务



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _components_qiuqian_qiuqian_component__WEBPACK_IMPORTED_MODULE_9__["QiuqianComponent"],
                _components_bazi_bazi_component__WEBPACK_IMPORTED_MODULE_10__["BaziComponent"],
                _components_gongfo_gongfo_component__WEBPACK_IMPORTED_MODULE_11__["GongfoComponent"],
                _components_xiuxing_xiuxing_component__WEBPACK_IMPORTED_MODULE_12__["XiuxingComponent"],
                _components_gongde_gongde_component__WEBPACK_IMPORTED_MODULE_13__["GongdeComponent"],
                _components_xiuxing_xinde_xinde_component__WEBPACK_IMPORTED_MODULE_15__["XindeComponent"],
                _components_common_modal_modal_component__WEBPACK_IMPORTED_MODULE_14__["ModalComponent"],
                _components_xiuxing_xinde_xinde_component__WEBPACK_IMPORTED_MODULE_15__["XindeComponent"],
                _components_bazi_result_result_component__WEBPACK_IMPORTED_MODULE_16__["ResultComponent"],
                _components_bazi_detail_detail_component__WEBPACK_IMPORTED_MODULE_17__["DetailComponent"],
                _components_bazi_detail2_detail2_component__WEBPACK_IMPORTED_MODULE_18__["Detail2Component"],
                _components_xiuxing_xinde_xinde_component__WEBPACK_IMPORTED_MODULE_15__["XindeComponent"],
                _components_gongde_zhuyinjingshu_zhuyinjingshu_component__WEBPACK_IMPORTED_MODULE_19__["ZhuyinjingshuComponent"],
                _components_bazi_suanming_suanming_component__WEBPACK_IMPORTED_MODULE_20__["SuanmingComponent"],
                _components_gongfo_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_21__["DialogComponent"],
                _components_xiuxing_library_library_component__WEBPACK_IMPORTED_MODULE_22__["LibraryComponent"],
                _components_xiuxing_library_fozhou_fozhou_component__WEBPACK_IMPORTED_MODULE_23__["FozhouComponent"],
                _components_xiuxing_library_fojing_fojing_component__WEBPACK_IMPORTED_MODULE_24__["FojingComponent"],
                _components_xiuxing_library_fozhou_zhou_general_zhou_general_component__WEBPACK_IMPORTED_MODULE_25__["ZhouGeneralComponent"],
                _components_xiuxing_library_fojing_jing_general_jing_general_component__WEBPACK_IMPORTED_MODULE_26__["JingGeneralComponent"],
                _components_xiuxing_library_fojing_jingGeneral_jingyuanwen_jingyuanwen_component__WEBPACK_IMPORTED_MODULE_27__["JingyuanwenComponent"],
                _components_xiuxing_library_fojing_jingGeneral_jingyiwen_jingyiwen_component__WEBPACK_IMPORTED_MODULE_28__["JingyiwenComponent"],
                _components_gongde_juanxianghuo_juanxianghuo_component__WEBPACK_IMPORTED_MODULE_29__["JuanxianghuoComponent"],
                _components_xiuxing_simiao_simiao_component__WEBPACK_IMPORTED_MODULE_30__["SimiaoComponent"],
                _components_xiuxing_simiao_simiaotwo_simiaotwo_component__WEBPACK_IMPORTED_MODULE_31__["SimiaotwoComponent"],
                _components_xiuxing_simiao_simiaothree_simiaothree_component__WEBPACK_IMPORTED_MODULE_32__["SimiaothreeComponent"],
                _components_xiuxing_xinde_addxinde_addxinde_component__WEBPACK_IMPORTED_MODULE_33__["AddxindeComponent"],
                _components_qiuqian_jieqian_jieqian_component__WEBPACK_IMPORTED_MODULE_34__["JieqianComponent"],
                _components_xiuxing_library_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_41__["SearchResultComponent"],
                _components_gongfo_qifu_qifu_component__WEBPACK_IMPORTED_MODULE_35__["QifuComponent"],
                _components_xiuxing_foyin_foyin_component__WEBPACK_IMPORTED_MODULE_36__["FoyinComponent"],
                _components_gongde_zhuyinjingshu_page_page_component__WEBPACK_IMPORTED_MODULE_37__["PageComponent"],
                _components_xiuxing_foyin_xuange_xuange_component__WEBPACK_IMPORTED_MODULE_38__["XuangeComponent"],
                _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_39__["WelcomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesModule"]
            ],
            providers: [_services_storage_service__WEBPACK_IMPORTED_MODULE_40__["StorageService"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/bazi/bazi.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/bazi/bazi.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmF6aS9iYXppLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/bazi/bazi.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/bazi/bazi.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n  "

/***/ }),

/***/ "./src/app/components/bazi/bazi.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/bazi/bazi.component.ts ***!
  \***************************************************/
/*! exports provided: BaziComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaziComponent", function() { return BaziComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BaziComponent = /** @class */ (function () {
    function BaziComponent() {
    }
    BaziComponent.prototype.ngOnInit = function () {
    };
    BaziComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bazi',
            template: __webpack_require__(/*! ./bazi.component.html */ "./src/app/components/bazi/bazi.component.html"),
            styles: [__webpack_require__(/*! ./bazi.component.css */ "./src/app/components/bazi/bazi.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BaziComponent);
    return BaziComponent;
}());



/***/ }),

/***/ "./src/app/components/bazi/detail/detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/bazi/detail/detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n    background-color: #E6E6A0;\n    background-size: 100%;\n    height: 100%;\n    width: 100%;\n    overflow: auto;\n}\n\n.titlefont{\n    font-family: \"楷体\";\n    color: #333399;\n    font-size: 28px;\n    text-indent: 5%;\n}\n\n#quanjie{\n    text-align: center;\n    font-weight: bold;\n}\n\nhr{\n    margin: 0% 100% 0% 0%;\n    height: 2px;\n    width:50%;\n    border:none;\n}\n\n#hra{\n    background-color: red;\n}\n\n#hrb{\n    background-color: green;\n}\n\n#hrc{\n    background-color: yellow;\n}\n\n#hrd{\n    background-color: pink;\n}\n\n.longtext{\n    word-wrap: break-word;\n    word-break: normal;\n    text-indent: 5%;\n    padding:5%;\n    margin:auto;\n}\n\n#modal{\n    z-index: 1003;\n    position: fixed;\n    left:0%;\n    top:50%;\n    right:0%;\n    bottom: 0%;\n    width: 100%;\n    height: 50%;\n    background: linear-gradient(#abe587,#90efb6,#7df6d7,#6ffcf0);\n    opacity:0.5;\n}\n\n#content {\n \n    position: fixed;\n    left:0%;\n    top:50%;\n    right:0%;\n    bottom: 0%;\n    z-index: 1003;\n    overflow: auto;\n\n}\n\n#lock{\n    z-index: 1003;\n    height: 30%;\n    width: 30%;\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top:0;\n    margin: auto;\n   z-index:1003;\n\n}\n\n#text{\n    z-index: 1003;\n    position: relative;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top:75%;\n    text-align: center;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYXppL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFLQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixPQUFPO0lBQ1AsT0FBTztJQUNQLFFBQVE7SUFDUixVQUFVO0lBQ1YsV0FBVztJQUNYLFdBQVc7SUFDWCw0REFBNEQ7SUFDNUQsV0FBVztBQUNmOztBQUVBOztJQUVJLGVBQWU7SUFDZixPQUFPO0lBQ1AsT0FBTztJQUNQLFFBQVE7SUFDUixVQUFVO0lBQ1YsYUFBYTtJQUNiLGNBQWM7O0FBRWxCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULEtBQUs7SUFDTCxZQUFZO0dBQ2IsWUFBWTs7QUFFZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztJQUNQLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmF6aS9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNkU2QTA7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnRpdGxlZm9udHtcbiAgICBmb250LWZhbWlseTogXCLmpbfkvZNcIjtcbiAgICBjb2xvcjogIzMzMzM5OTtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgdGV4dC1pbmRlbnQ6IDUlO1xufVxuXG5cblxuXG4jcXVhbmppZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmhye1xuICAgIG1hcmdpbjogMCUgMTAwJSAwJSAwJTtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICB3aWR0aDo1MCU7XG4gICAgYm9yZGVyOm5vbmU7XG59XG5cbiNocmF7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4jaHJie1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuXG4jaHJje1xuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbn1cblxuI2hyZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xufVxuXG4ubG9uZ3RleHR7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgICB0ZXh0LWluZGVudDogNSU7XG4gICAgcGFkZGluZzo1JTtcbiAgICBtYXJnaW46YXV0bztcbn1cblxuI21vZGFse1xuICAgIHotaW5kZXg6IDEwMDM7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6MCU7XG4gICAgdG9wOjUwJTtcbiAgICByaWdodDowJTtcbiAgICBib3R0b206IDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTAlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjYWJlNTg3LCM5MGVmYjYsIzdkZjZkNywjNmZmY2YwKTtcbiAgICBvcGFjaXR5OjAuNTtcbn1cblxuI2NvbnRlbnQge1xuIFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OjAlO1xuICAgIHRvcDo1MCU7XG4gICAgcmlnaHQ6MCU7XG4gICAgYm90dG9tOiAwJTtcbiAgICB6LWluZGV4OiAxMDAzO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuXG59XG4gIFxuI2xvY2t7XG4gICAgei1pbmRleDogMTAwMztcbiAgICBoZWlnaHQ6IDMwJTtcbiAgICB3aWR0aDogMzAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB0b3A6MDtcbiAgICBtYXJnaW46IGF1dG87XG4gICB6LWluZGV4OjEwMDM7XG5cbn1cblxuI3RleHR7XG4gICAgei1pbmRleDogMTAwMztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgdG9wOjc1JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/bazi/detail/detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/bazi/detail/detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <div id=\"modal\" *ngIf=\"jiaofei==false\"></div>\n    <div id=\"content\"  *ngIf=\"jiaofei==false\">\n      <img src=\"../../../../assets/u24.png\" id=\"lock\" (click)=\"money()\">\n      <div id=\"text\">点击锁查看所有精解</div>\n    </div>\n  \n  \n    \n  \n    <div id=\"quanjie\" class=\"titlefont\">命格全解</div>\n    \n    <div class=\"titlefont\">财运</div>\n    <hr id=\"hra\">\n      <div class=\"longtext\" [ngSwitch]=\"jiaofei\">\n          <p *ngSwitchCase=\"true\" >\n            {{caiyun}}\n          </p>\n          <p *ngSwitchCase=\"false\">\n            {{caiyun | slice:0:10}}... \n          </p>\n      </div>\n    \n    <div class=\"titlefont\">健康</div>\n    <hr id=\"hrb\">\n      <div class=\"longtext\" [ngSwitch]=\"jiaofei\">\n        <p *ngSwitchCase=\"true\">\n          {{jiankang}}\n        </p>\n        <p *ngSwitchCase=\"false\">\n          {{jiankang | slice:0:10}}... \n        </p>\n      </div>\n    <div class=\"titlefont\">事业</div>\n    <hr id=\"hrc\">\n      <div class=\"longtext\" [ngSwitch]=\"jiaofei\">\n        <p *ngSwitchCase=\"true\">\n         {{shiye}}\n        </p>\n        <p *ngSwitchCase=\"false\">\n          {{shiye | slice:0:10}}... \n        </p>\n      </div>\n    <div class=\"titlefont\" >爱情</div>\n    <hr id=\"hrd\">\n      <div class=\"longtext\" [ngSwitch]=\"jiaofei\">\n        <p *ngSwitchCase=\"true\">\n          {{aiqing}}\n        </p>\n        <p id=\"aiqing\" *ngSwitchCase=\"false\">\n          {{aiqing | slice:0:10}}... \n        </p>\n      </div>\n  </body>\n  \n  "

/***/ }),

/***/ "./src/app/components/bazi/detail/detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/bazi/detail/detail.component.ts ***!
  \************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DetailComponent = /** @class */ (function () {
    function DetailComponent(http, route) {
        this.http = http;
        this.route = route;
        this.caiyun = '';
        this.jiankang = '';
        this.shiye = '';
        this.aiqing = '';
        this.jiaofei = false;
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (data) {
            _this.year = data.year;
            _this.month = data.month;
            _this.date = data.day;
            _this.sex = data.sex;
        });
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        var api = "/api/bazi/bazhidetail";
        this.http.post(api, { year: this.year, month: this.month, date: this.date, sex: this.sex }, httpOptions).subscribe(function (response) {
            _this.caiyun = response.caiyun;
            _this.jiankang = response.jiankang;
            _this.shiye = response.shiye;
            _this.aiqing = response.aiqing;
        });
    };
    DetailComponent.prototype.money = function () {
        this.close();
        this.jiaofei = true;
    };
    DetailComponent.prototype.close = function () {
        document.getElementById('modal').style.display = 'none';
        document.getElementById('content').style.display = 'none';
    };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! ./detail.component.html */ "./src/app/components/bazi/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.css */ "./src/app/components/bazi/detail/detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/components/bazi/detail2/detail2.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/bazi/detail2/detail2.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmF6aS9kZXRhaWwyL2RldGFpbDIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/bazi/detail2/detail2.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/bazi/detail2/detail2.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  detail2 works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/bazi/detail2/detail2.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/bazi/detail2/detail2.component.ts ***!
  \**************************************************************/
/*! exports provided: Detail2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Detail2Component", function() { return Detail2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Detail2Component = /** @class */ (function () {
    function Detail2Component() {
    }
    Detail2Component.prototype.ngOnInit = function () {
    };
    Detail2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail2',
            template: __webpack_require__(/*! ./detail2.component.html */ "./src/app/components/bazi/detail2/detail2.component.html"),
            styles: [__webpack_require__(/*! ./detail2.component.css */ "./src/app/components/bazi/detail2/detail2.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Detail2Component);
    return Detail2Component;
}());



/***/ }),

/***/ "./src/app/components/bazi/result/result.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/bazi/result/result.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headline{\n    text-align: left;\n    color: rgb(255, 251, 0);\n    font-size: 30px;\n    font-family: 华文楷体;\n}\nb{\n    font-size: 22px;\n    color: rgb(255, 94, 0);\n   \n}\n.res{\n    height: 100%;\n    width: 100%;\n    background-size: 100%;\n    background-color: rgb(243, 200, 59);\n}\n.xian{\n    height:0px;\n    width:100%;\n    border-top:1px solid rgba(0, 0, 0, 0.055);\n    margin: 1.5%;\n}\n.mas{\n    width: 60%;\n    border: 2px solid rgba(252, 139, 33, 0.932);\n    float: left;\n    height: 43%;\n    margin-left: 1%;\n    font-size: 22px;\n    font-family: 楷体;\n    background-color: rgba(181, 253, 255, 0.692);\n}\nbutton{\n    border-radius: 10px;\n    box-shadow: 3px 3px 3px #6600FF;\n    height: 35px;\n    width: 90%;\n    background-color: #6666FF;\n}\n.clo{\n    color: #0000FF;\n    font-size: 110%;\n    font-family: 华文宋体;\n    font-weight:bold;\n}\n.cho{\n    float: right;\n    width: 33%;\n    height: 43%;\n    border: 1px solid black;\n    text-align: center;\n    margin-right: 1%;\n    background-color:#ECA646;\n    \n}\n.po{\n    font-family: 华文仿宋;\n    font-size: 75%;\n    color: #FFFF99;\n    font-weight:bold;\n    margin: 1%;\n}\n.wordsize{\n    font-size: 22px;\n    font-family: 楷体;\n    margin: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYXppL3Jlc3VsdC9yZXN1bHQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjs7QUFFMUI7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksVUFBVTtJQUNWLFVBQVU7SUFDVix5Q0FBeUM7SUFDekMsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLDJDQUEyQztJQUMzQyxXQUFXO0lBQ1gsV0FBVztJQUNYLGVBQWU7SUFDZixlQUFlO0lBQ2YsZUFBZTtJQUNmLDRDQUE0QztBQUNoRDtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osVUFBVTtJQUNWLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQix3QkFBd0I7O0FBRTVCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkO0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmF6aS9yZXN1bHQvcmVzdWx0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGxpbmV7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjUxLCAwKTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC1mYW1pbHk6IOWNjuaWh+alt+S9kztcbn1cbmJ7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGNvbG9yOiByZ2IoMjU1LCA5NCwgMCk7XG4gICBcbn1cblxuLnJlc3tcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDIwMCwgNTkpO1xufVxuLnhpYW57XG4gICAgaGVpZ2h0OjBweDtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGJvcmRlci10b3A6MXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNTUpO1xuICAgIG1hcmdpbjogMS41JTtcbn1cbi5tYXN7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1MiwgMTM5LCAzMywgMC45MzIpO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGhlaWdodDogNDMlO1xuICAgIG1hcmdpbi1sZWZ0OiAxJTtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZm9udC1mYW1pbHk6IOalt+S9kztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4MSwgMjUzLCAyNTUsIDAuNjkyKTtcbn1cbmJ1dHRvbntcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggM3B4ICM2NjAwRkY7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjZGRjtcbn1cbiAgICBcbi5jbG97XG4gICAgY29sb3I6ICMwMDAwRkY7XG4gICAgZm9udC1zaXplOiAxMTAlO1xuICAgIGZvbnQtZmFtaWx5OiDljY7mloflrovkvZM7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbn1cbiAgICBcbi5jaG97XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHdpZHRoOiAzMyU7XG4gICAgaGVpZ2h0OiA0MyU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogMSU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRUNBNjQ2O1xuICAgIFxufVxuLnBve1xuICAgIGZvbnQtZmFtaWx5OiDljY7mlofku7/lros7XG4gICAgZm9udC1zaXplOiA3NSU7XG4gICAgY29sb3I6ICNGRkZGOTk7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICBtYXJnaW46IDElO1xufVxuXG4ud29yZHNpemV7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtZmFtaWx5OiDmpbfkvZM7XG4gICAgbWFyZ2luOiAzJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/bazi/result/result.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/bazi/result/result.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"res\">\n  <b class=\"headline\">\n    &nbsp;八字论命\n  </b>\n  <div class=\"wordsize\">\n    \n    <b>姓名</b> {{people.name}}\n    &nbsp;&nbsp;\n    <b>性别</b> {{people.sex}}\n    <br>\n    <div class=\"xian\"></div>\n    <b>公历</b> {{people.birthday}}\n    <br>\n    <div class=\"xian\"></div>\n    <b>阴历</b> {{people.yinli}}\n    <br>\n    <div class=\"xian\"></div>\n    <b>生肖</b> {{people.animal}}\n    &nbsp;&nbsp; &nbsp;\n    <b>命卦</b> {{people.divinesign}}命\n    <br>\n    <div class=\"xian\"></div>\n    <div style=\"background-color: white;\">\n      <table border=\"1\" style=\"width:100%;height: 100%; text-align:center;\">\n          <thead>\n              <tr>                           \n                <th>年柱</th>&nbsp;&nbsp;\n                <th>月柱</th>&nbsp;&nbsp;\n                <th>日柱</th>\n              </tr>\n          </thead>\n          <tbody>\n              <tr>\n                  <td>{{people.nianzhu}}</td>&nbsp;&nbsp;\n                  <td>{{people.yuezhu}}</td>&nbsp;&nbsp;\n                  <td>{{people.rizhu}}</td>\n              </tr>\n            </tbody>\n      </table>\n     </div>\n</div>\n    <div class=\"mas\"> \n      <b>&nbsp;年命</b> 纳音{{people.fateforyear}}\n      <br>\n      <b>&nbsp;天运</b> 五行属{{people.luckfromgod}}\n      <br>\n      <b>&nbsp;本命</b> {{people.fate}}\n      <br>\n      <p>\n      <b>&nbsp;五行个数:</b><br>&nbsp;&nbsp;{{people.mu}}个木&nbsp;&nbsp;{{people.huo}}个火<br>&nbsp;&nbsp;{{people.shui}}个水&nbsp;&nbsp;{{people.tu}}个土<br>&nbsp;&nbsp;{{people.jin}}个金\n      </p>\n    </div>\n    \n    <div class=\"cho\">\n      <p class=\"clo\">\n        算财运<br><br>\n        算健康<br><br>\n        算事业<br><br>\n        算爱情<br>\n      </p>\n      <button (click)=\"moremessage()\">\n        <p class=\"po\">更多精准详批</p>\n      </button>\n      <br>\n    </div>\n  \n</div>"

/***/ }),

/***/ "./src/app/components/bazi/result/result.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/bazi/result/result.component.ts ***!
  \************************************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var ResultComponent = /** @class */ (function () {
    function ResultComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.people = {
            name: "",
            sex: "",
            birthday: "",
            yinli: "",
            nianzhu: "",
            yuezhu: "",
            rizhu: "",
            fateforyear: "",
            luckfromgod: "",
            animal: "",
            fate: "",
            divinesign: "",
            jin: "",
            mu: "",
            shui: "",
            huo: "",
            tu: ""
        };
    }
    ResultComponent.prototype.moremessage = function () {
        var queryParams = {
            queryParams: { 'name': this.people.name, 'sex': this.sex, 'year': this.year, 'month': this.month, 'day': this.day }
        };
        this.router.navigate(['/detail'], queryParams);
    };
    ResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (data) {
            console.log(data);
            _this.people.name = data.name;
            _this.sex = data.sex;
            if (data.sex == 1) {
                _this.people.sex = "男";
            }
            else {
                _this.people.sex = "女";
            }
            _this.year = data.year;
            _this.month = data.month;
            _this.day = data.day;
        });
        this.people.birthday = this.year + "年" + this.month + "月" + this.day + "日";
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        var api = "/api/result";
        this.http.post(api, { "year": this.year, "month": this.month, "day": this.day, "sex": this.people.sex }, httpOptions).subscribe(function (response) {
            console.log(response);
            var b = response;
            var a = b.split(" ");
            _this.people.fateforyear = a[0];
            _this.people.luckfromgod = a[1];
            _this.people.animal = a[2];
            _this.people.fate = a[3];
            _this.people.divinesign = a[4];
            _this.people.yinli = a[5] + "   " + a[6] + "   " + a[7];
            _this.people.nianzhu = a[8];
            _this.people.yuezhu = a[9];
            _this.people.rizhu = a[10];
            _this.people.mu = a[11];
            _this.people.jin = a[12];
            _this.people.shui = a[13];
            _this.people.huo = a[14];
            _this.people.tu = a[15];
        });
    };
    ResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-result',
            template: __webpack_require__(/*! ./result.component.html */ "./src/app/components/bazi/result/result.component.html"),
            styles: [__webpack_require__(/*! ./result.component.css */ "./src/app/components/bazi/result/result.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ResultComponent);
    return ResultComponent;
}());



/***/ }),

/***/ "./src/app/components/bazi/suanming/suanming.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/bazi/suanming/suanming.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".class1 {\n    background-color: rgb(243, 178, 59);\n    height: 100%;\n    width: 100%;\n    background-size: 100%;\n    overflow: auto;\n   \n}\nhr{\n    width:98%;\n}\nh2{\n    text-align: center;\n    font-size: 30px;\n    font-family: 楷体;\n    color:rgb(255, 251, 0);\n}\nul{\n    list-style-type: none;\n}\n.ziti{\n    font-size: 130%;\n    font-family: 楷体;\n}\n.jiexi{\n    text-indent: 35px;\n    color:red;\n    font-size: 20px;\n    font-family: Arial;\n    text-align: center;\n    \n}\n.class2{\n  margin :2%;\n  background-color: white;\n  border-radius: 5%;\n  width: 95%;\n  height: 35%;\n  \n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYXppL3N1YW5taW5nL3N1YW5taW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsY0FBYzs7QUFFbEI7QUFDQTtJQUNJLFNBQVM7QUFDYjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGVBQWU7SUFDZixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsU0FBUztJQUNULGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCOztBQUV0QjtBQUNBO0VBQ0UsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFdBQVc7O0FBRWIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Jhemkvc3Vhbm1pbmcvc3Vhbm1pbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGFzczEge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDE3OCwgNTkpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICBcbn1cbmhye1xuICAgIHdpZHRoOjk4JTtcbn1cbmgye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC1mYW1pbHk6IOalt+S9kztcbiAgICBjb2xvcjpyZ2IoMjU1LCAyNTEsIDApO1xufVxudWx7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuLnppdGl7XG4gICAgZm9udC1zaXplOiAxMzAlO1xuICAgIGZvbnQtZmFtaWx5OiDmpbfkvZM7XG59XG4uamlleGl7XG4gICAgdGV4dC1pbmRlbnQ6IDM1cHg7XG4gICAgY29sb3I6cmVkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LWZhbWlseTogQXJpYWw7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFxufVxuLmNsYXNzMntcbiAgbWFyZ2luIDoyJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUlO1xuICB3aWR0aDogOTUlO1xuICBoZWlnaHQ6IDM1JTtcbiAgXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/bazi/suanming/suanming.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/bazi/suanming/suanming.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"class1\">\n  <br>\n  <h2>八字算命</h2>\n\n  <div>\n    \n      <ul>\n        <hr>\n        <li>\n            <b class=\"ziti\">您的姓名：</b>\n            <input type=\"text\" placeholder=\"请输入2-5个汉字\"  maxlength=\"5\" style=\"width:50% ;height:50%\" [(ngModel)]=\"username\" onkeydown=\"if(event.keyCode==32){return false;}\" />\n        </li>\n         <hr>\n        <li>\n            <b class=\"ziti\">您的性别：</b>\n            <input type=\"radio\"  style=\" width:15px ;height:15px\" value=\"1\" name=\"sex\" id=\"sex1\" [(ngModel)]=\"sex\" ><label for=\"sex1\" style=\"font-size: 18px; font-family: 楷体\">男</label>\n            &nbsp;\n            <input type=\"radio\" style=\"width:15px ;height:15px\" value=\"2\" name=\"sex\" id=\"sex2\" [(ngModel)]=\"sex\"><label for=\"sex2\" style=\"font-size: 18px; font-family: 楷体\">女</label>\n        </li>\n         <hr>\n        <li>\n            <b class=\"ziti\">出生日期：</b>\n            <input type=\"date\" style=\"width:50% ;height:50%\" [(ngModel)]=\"riqi\" >\n        </li>\n      </ul> \n         <hr>\n  </div>\n\n  <div (click)=\"cesuan()\">\n      <img src=\"assets/cesuan02.jpg\" style=\"width: 40%; height:7%;margin-left: 30%; \">\n  </div>\n\n  <br>\n\n  <div class=\"class2\"> \n      <p style=\"text-align:center; font-size:150%; font-family:楷体; color:red;\">八字命理对人的影响</p>\n      <p style=\"font-size:100%; font-family:宋体;margin:2%;\">&nbsp;&nbsp;八字算命，是指根据人的出生时间（生辰）排成命局，共有八个字（即生辰八字），结合八字的阴阳五行生克情况进行分析一个人的运势，所以称为生辰八字测算，是命理测算方法之中最正统的一种。</p>\n  </div>\n  \n</div>"

/***/ }),

/***/ "./src/app/components/bazi/suanming/suanming.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/bazi/suanming/suanming.component.ts ***!
  \****************************************************************/
/*! exports provided: SuanmingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuanmingComponent", function() { return SuanmingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SuanmingComponent = /** @class */ (function () {
    function SuanmingComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    SuanmingComponent.prototype.ngOnInit = function () {
    };
    SuanmingComponent.prototype.cesuan = function () {
        if (this.username == null) {
            alert("请输入你的姓名");
        }
        else {
            if ((this.username.length < 2) || (!(/^[\u3220-\uFA29]+$/.test(this.username)))) {
                alert("请输入2-5个汉字的名字");
            }
            else {
                if (this.sex == null) {
                    alert("请选择性别");
                }
                else {
                    var now = new Date(this.riqi); //获取date类型数据
                    this.year = now.getFullYear();
                    this.month = now.getMonth() + 1; //获取月份是从0-11的
                    this.day = now.getDate();
                    if ((isNaN(this.year)) || (this.year == null)) {
                        alert("请选择出生日期");
                    }
                    else {
                        console.log(this.username, this.sex, this.year, this.month, this.day);
                        var queryParams = {
                            queryParams: { 'name': this.username, 'sex': this.sex, 'year': this.year, 'month': this.month, 'day': this.day }
                        };
                        this.router.navigate(['/result'], queryParams);
                    }
                }
            }
        }
    };
    SuanmingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-suanming',
            template: __webpack_require__(/*! ./suanming.component.html */ "./src/app/components/bazi/suanming/suanming.component.html"),
            styles: [__webpack_require__(/*! ./suanming.component.css */ "./src/app/components/bazi/suanming/suanming.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SuanmingComponent);
    return SuanmingComponent;
}());



/***/ }),

/***/ "./src/app/components/common/modal/modal.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/common/modal/modal.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* 背景遮罩层 */\n\n.overlay {\n  display: none;\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(8, 8, 8, 0.3);\n  z-index: 1001;\n}\n\n/* 模态弹窗区域 */\n\n.modal {\n  display: none;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: 70%;\n  height: 25%;\n  padding: 10px;\n  border-radius: 30px;\n  background-color: rgb(236, 239, 240);\n  z-index: 1002;\n  overflow: auto;\n  -webkit-animation: scaleIn .3s;\n          animation: scaleIn .3s;\n}\n\n/* 从上往下淡入 */\n\n@-webkit-keyframes fadeInDown {\n  0% {\n    -webkit-transform: translate3d(0, -20%, 0);\n            transform: translate3d(0, -20%, 0);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform: none;\n            transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes fadeInDown {\n  0% {\n    -webkit-transform: translate3d(0, -20%, 0);\n            transform: translate3d(0, -20%, 0);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform: none;\n            transform: none;\n    opacity: 1;\n  }\n}\n\n/* 缩放淡入 */\n\n@-webkit-keyframes scaleIn {\n  0% {\n    -webkit-transform: scale(0.2);\n            transform: scale(0.2);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n\n@keyframes scaleIn {\n  0% {\n    -webkit-transform: scale(0.2);\n            transform: scale(0.2);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n\n/* 缩放淡出 */\n\n@-webkit-keyframes scaleOut {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform: scale(0.2);\n            transform: scale(0.2);\n    opacity: 0;\n  }\n}\n\n@keyframes scaleOut {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform: scale(0.2);\n            transform: scale(0.2);\n    opacity: 0;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vbW9kYWwvbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxVQUFVOztBQUVWO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGFBQWE7QUFDZjs7QUFFQSxXQUFXOztBQUVYO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtFQUNaLFVBQVU7RUFDVixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLGNBQWM7RUFDZCw4QkFBc0I7VUFBdEIsc0JBQXNCO0FBQ3hCOztBQUVBLFdBQVc7O0FBRVg7RUFDRTtJQUNFLDBDQUFrQztZQUFsQyxrQ0FBa0M7SUFDbEMsVUFBVTtFQUNaOztFQUVBO0lBQ0UsdUJBQWU7WUFBZixlQUFlO0lBQ2YsVUFBVTtFQUNaO0FBQ0Y7O0FBVkE7RUFDRTtJQUNFLDBDQUFrQztZQUFsQyxrQ0FBa0M7SUFDbEMsVUFBVTtFQUNaOztFQUVBO0lBQ0UsdUJBQWU7WUFBZixlQUFlO0lBQ2YsVUFBVTtFQUNaO0FBQ0Y7O0FBR0EsU0FBUzs7QUFFVDtFQUNFO0lBQ0UsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQixVQUFVO0VBQ1o7O0VBRUE7SUFDRSwyQkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLFVBQVU7RUFDWjtBQUNGOztBQVZBO0VBQ0U7SUFDRSw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLDJCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsVUFBVTtFQUNaO0FBQ0Y7O0FBR0EsU0FBUzs7QUFFVDtFQUNFO0lBQ0UsMkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixVQUFVO0VBQ1o7O0VBRUE7SUFDRSw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLFVBQVU7RUFDWjtBQUNGOztBQVZBO0VBQ0U7SUFDRSwyQkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLFVBQVU7RUFDWjs7RUFFQTtJQUNFLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsVUFBVTtFQUNaO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbW1vbi9tb2RhbC9tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyog6IOM5pmv6YGu572p5bGCICovXG5cbi5vdmVybGF5IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAlO1xuICBsZWZ0OiAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4LCA4LCA4LCAwLjMpO1xuICB6LWluZGV4OiAxMDAxO1xufVxuXG4vKiDmqKHmgIHlvLnnqpfljLrln58gKi9cblxuLm1vZGFsIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiAyNSU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIzOSwgMjQwKTtcbiAgei1pbmRleDogMTAwMjtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGFuaW1hdGlvbjogc2NhbGVJbiAuM3M7XG59XG5cbi8qIOS7juS4iuW+gOS4i+a3oeWFpSAqL1xuXG5Aa2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjAlLCAwKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuXG4vKiDnvKnmlL7mt6HlhaUgKi9cblxuQGtleWZyYW1lcyBzY2FsZUluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4yKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cblxuLyog57yp5pS+5reh5Ye6ICovXG5cbkBrZXlmcmFtZXMgc2NhbGVPdXQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjIpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/common/modal/modal.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/common/modal/modal.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 遮罩 -->\n<div id=\"overlay\" class=\"overlay\" (click)=\"close()\"></div>\n\n<!-- 模态弹窗区域 -->\n<div id=\"modal\" class=\"modal\">\n\n  <ng-content></ng-content>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/common/modal/modal.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/common/modal/modal.component.ts ***!
  \************************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
    }
    ModalComponent.prototype.ngOnInit = function () {
        document.getElementById('modal').style.height = this.height;
    };
    ModalComponent.prototype.open = function () {
        document.getElementById('modal').style.display = 'block';
        document.getElementById('overlay').style.display = 'block';
    };
    ModalComponent.prototype.close = function () {
        document.getElementById('modal').style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalComponent.prototype, "height", void 0);
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/components/common/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.css */ "./src/app/components/common/modal/modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/components/gongde/gongde.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/gongde/gongde.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\n    background-image: url('gongde-bg.jpg');\n    height: 100%;\n    width: 100%;\n    background-size: 100%;\n  }\n  /*标题*/\n  .nav h2{\n    text-align:center;\n    margin: 15% 0%;\n    color: rgb(99, 95, 92);\n  }\n  /* 功能按键 */\n  .nav {\n    display: flex;\n    flex-direction: column;\n    bottom: 3%;\n    width: 100%;\n  }\n  .nav-line {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n  }\n  .nav-line a {\n    display: flex;\n    justify-content: center;\n    padding: 35px;\n    width: 55%;\n  }\n  button {\n    width: 100%;\n    height: 50px;\n    border-radius: 25px;\n    margin: 0 5px;\n    font-size: 20px;\n    font-weight: 700;\n    color: rgb(238, 212, 191);\n    /* 去除button默认外边框 */\n    outline: 0;\n    border: 1px solid rgb(197, 97, 16);\n    background-color: rgb(197, 97, 16);\n    box-shadow: 5px 5px 5px rgb(156, 156, 156)\n  }\n  \n\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nb25nZGUvZ29uZ2RlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQ0FBc0Q7SUFDdEQsWUFBWTtJQUNaLFdBQVc7SUFDWCxxQkFBcUI7RUFDdkI7RUFDQSxLQUFLO0VBQ0w7SUFDRSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLHNCQUFzQjtFQUN4QjtFQUVBLFNBQVM7RUFDVDtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFdBQVc7RUFDYjtFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7RUFDekI7RUFFQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLFVBQVU7RUFDWjtFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0NBQWtDO0lBQ2xDLGtDQUFrQztJQUNsQztFQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nb25nZGUvZ29uZ2RlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2dvbmdkZS1iZy5qcGdcIik7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgfVxuICAvKuagh+mimCovXG4gIC5uYXYgaDJ7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgbWFyZ2luOiAxNSUgMCU7XG4gICAgY29sb3I6IHJnYig5OSwgOTUsIDkyKTtcbiAgfVxuICBcbiAgLyog5Yqf6IO95oyJ6ZSuICovXG4gIC5uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3R0b206IDMlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAubmF2LWxpbmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBcbiAgLm5hdi1saW5lIGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMzVweDtcbiAgICB3aWR0aDogNTUlO1xuICB9XG4gIFxuICBidXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIG1hcmdpbjogMCA1cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6IHJnYigyMzgsIDIxMiwgMTkxKTtcbiAgICAvKiDljrvpmaRidXR0b27pu5jorqTlpJbovrnmoYYgKi9cbiAgICBvdXRsaW5lOiAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxOTcsIDk3LCAxNik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NywgOTcsIDE2KTtcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2IoMTU2LCAxNTYsIDE1NilcbiAgfVxuICBcblxuICAiXX0= */"

/***/ }),

/***/ "./src/app/components/gongde/gongde.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/gongde/gongde.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"body\">\n  \n  <div class=\"nav\">\n    <h2>若有功德 普皆向善</h2>\n    <div class=\"nav-line\">\n      <a [routerLink]=\"[ '/gongde/zhuyinjingshu' ]\">\n        <button>\n          <div>助印经书</div>\n        </button>\n      </a>\n    </div>\n    <!-- 增添香火功能可以在下面自行修改路由 -->\n    <div class=\"nav-line\">\n       <a [routerLink]=\"[ '/gongde/juanxianghuo' ]\">\n        <button>\n          <div>增添香火</div>\n        </button>\n      </a>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/gongde/gongde.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/gongde/gongde.component.ts ***!
  \*******************************************************/
/*! exports provided: GongdeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GongdeComponent", function() { return GongdeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GongdeComponent = /** @class */ (function () {
    function GongdeComponent() {
    }
    GongdeComponent.prototype.ngOnInit = function () {
    };
    GongdeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gongde',
            template: __webpack_require__(/*! ./gongde.component.html */ "./src/app/components/gongde/gongde.component.html"),
            styles: [__webpack_require__(/*! ./gongde.component.css */ "./src/app/components/gongde/gongde.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GongdeComponent);
    return GongdeComponent;
}());



/***/ }),

/***/ "./src/app/components/gongde/juanxianghuo/juanxianghuo.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/gongde/juanxianghuo/juanxianghuo.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " /*背景*/\n .body {\n  background-image: url('juanxianghuo-bg.jpg');\n   height: 100%;\n  width: 100%; \n  /*背景图垂直，水平居中*/\n  background-position: center center;\n  /*背景图不平铺*/\n  background-repeat: no-repeat;\n  /*基于容器大小伸缩*/\n  background-size: cover;\n  text-align: center;\n  font-family:微软雅黑;\n}\n /* 选择香类型的总div大小 */\n .xiang{\n  width:43% ;\n  height: 40px;\n  border-radius: 15px;\n \n}\n .xiang input{\n  width:80%;\nheight:100%;\nborder-radius: 8px;\noutline: 0;\nborder: 1px solid rgb(248, 232, 193);\nbackground-color:#ffc952;\n/* box-shadow: 2px 2px 2px rgb(156, 156, 156) */\ncolor: #3f4040;\n}\n .xiang_area{\n  width:60%;\n  height:25%;\n\n  display:flex;\n  flex-wrap: wrap;\n  position: absolute;\n  left:8%;\n  top:63.5%;\n}\n .zhifu_area{\n  width:28%;\n  height:20%;\n  display:flex;\n  flex-wrap: wrap;\n  position: absolute;\n  left:65%;\n  top:70.5%;\n}\n .juzi{\n    position: absolute;\n    top:89%;\n    left:20%;\n    font-weight: 600;\n    color:#fc913a;\n    font-size: 19px;\n}\n .input_name{\n  position: absolute;\n  left:5%;\n  top:57%;\n  font-weight:600;\n  color:#fc913a;\n  font-size: 130%;\n  border:0px;\n  outline: none;\n}\n .input_name input{\n  width:53%;\n  height:29px;\n  background-color:rgb(248, 223, 114);\n  border:0px;outline: none;border-radius:2px;\n  font-size: 80%;\n}\n .gundongkuang{\n  position:absolute;\n  width:100%;\n  height:6%;\n  top:94%;\n  border:3px solid #F6B352;\n  border-radius: 6px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nb25nZGUvanVhbnhpYW5naHVvL2p1YW54aWFuZ2h1by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFDLEtBQUs7Q0FDTDtFQUNDLDRDQUErRDtHQUM5RCxZQUFZO0VBQ2IsV0FBVztFQUNYLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsU0FBUztFQUNULDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7Q0FDRSxpQkFBaUI7Q0FDbkI7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLG1CQUFtQjs7QUFFckI7Q0FDQTtFQUNFLFNBQVM7QUFDWCxXQUFXO0FBQ1gsa0JBQWtCO0FBQ2xCLFVBQVU7QUFDVixvQ0FBb0M7QUFDcEMsd0JBQXdCO0FBQ3hCLCtDQUErQztBQUMvQyxjQUFjO0FBQ2Q7Q0FDQTtFQUNFLFNBQVM7RUFDVCxVQUFVOztFQUVWLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxTQUFTO0FBQ1g7Q0FFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7QUFDWDtDQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1IsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixlQUFlO0FBQ25CO0NBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE9BQU87RUFDUCxlQUFlO0VBQ2YsYUFBYTtFQUNiLGVBQWU7RUFDZixVQUFVO0VBQ1YsYUFBYTtBQUNmO0NBQ0E7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLG1DQUFtQztFQUNuQyxVQUFVLENBQUMsYUFBYSxDQUFDLGlCQUFpQjtFQUMxQyxjQUFjO0FBQ2hCO0NBQ0E7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFNBQVM7RUFDVCxPQUFPO0VBQ1Asd0JBQXdCO0VBQ3hCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ29uZ2RlL2p1YW54aWFuZ2h1by9qdWFueGlhbmdodW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAvKuiDjOaZryovXG4gLmJvZHkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvanVhbnhpYW5naHVvLWJnLmpwZ1wiKTtcbiAgIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7IFxuICAvKuiDjOaZr+WbvuWeguebtO+8jOawtOW5s+WxheS4rSovXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIC8q6IOM5pmv5Zu+5LiN5bmz6ZO6Ki9cbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgLyrln7rkuo7lrrnlmajlpKflsI/kvLjnvKkqL1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OuW+rui9r+mbhem7kTtcbn0gXG4gIC8qIOmAieaLqemmmeexu+Wei+eahOaAu2RpduWkp+WwjyAqL1xuLnhpYW5ne1xuICB3aWR0aDo0MyUgO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gXG59XG4ueGlhbmcgaW5wdXR7XG4gIHdpZHRoOjgwJTtcbmhlaWdodDoxMDAlO1xuYm9yZGVyLXJhZGl1czogOHB4O1xub3V0bGluZTogMDtcbmJvcmRlcjogMXB4IHNvbGlkIHJnYigyNDgsIDIzMiwgMTkzKTtcbmJhY2tncm91bmQtY29sb3I6I2ZmYzk1Mjtcbi8qIGJveC1zaGFkb3c6IDJweCAycHggMnB4IHJnYigxNTYsIDE1NiwgMTU2KSAqL1xuY29sb3I6ICMzZjQwNDA7XG59XG4ueGlhbmdfYXJlYXtcbiAgd2lkdGg6NjAlO1xuICBoZWlnaHQ6MjUlO1xuXG4gIGRpc3BsYXk6ZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6OCU7XG4gIHRvcDo2My41JTtcbn1cblxuLnpoaWZ1X2FyZWF7XG4gIHdpZHRoOjI4JTtcbiAgaGVpZ2h0OjIwJTtcbiAgZGlzcGxheTpmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDo2NSU7XG4gIHRvcDo3MC41JTtcbn1cbi5qdXppe1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6ODklO1xuICAgIGxlZnQ6MjAlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6I2ZjOTEzYTtcbiAgICBmb250LXNpemU6IDE5cHg7XG59XG4uaW5wdXRfbmFtZXtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OjUlO1xuICB0b3A6NTclO1xuICBmb250LXdlaWdodDo2MDA7XG4gIGNvbG9yOiNmYzkxM2E7XG4gIGZvbnQtc2l6ZTogMTMwJTtcbiAgYm9yZGVyOjBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5pbnB1dF9uYW1lIGlucHV0e1xuICB3aWR0aDo1MyU7XG4gIGhlaWdodDoyOXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNDgsIDIyMywgMTE0KTtcbiAgYm9yZGVyOjBweDtvdXRsaW5lOiBub25lO2JvcmRlci1yYWRpdXM6MnB4O1xuICBmb250LXNpemU6IDgwJTtcbn1cbi5ndW5kb25na3Vhbmd7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6NiU7XG4gIHRvcDo5NCU7XG4gIGJvcmRlcjozcHggc29saWQgI0Y2QjM1MjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/gongde/juanxianghuo/juanxianghuo.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/gongde/juanxianghuo/juanxianghuo.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<style>\n  input::-webkit-input-placeholder{\n    color:#333030;\n    font-size:60%;\n  }\n  </style>\n  <div class=\"body\">\n    <div class=\"xiang_area\">\n    <div class=\"xiang\"><input type=\"button\" name=\"xiang_type\" value=\"平安香\"  id=\"button1\"  (click)=\"pinganxiang()\" ></div>\n    <div class=\"xiang\"><input type=\"button\" name=\"xiang_type\" value=\"消灾香\"  id=\"button2\" (click)=\"xiaozaixiang()\"></div>\n    <div class=\"xiang\"><input type=\"button\" name=\"xiang_type\" value=\"富贵香\"  id=\"button3\" (click)=\"fuguixiang()\"></div>\n    <div class=\"xiang\"><input type=\"button\" name=\"xiang_type\" value=\"求子香\"  id=\"button4\" (click)=\"qiuzixiang()\"></div>\n    <div class=\"xiang\"><input type=\"button\" name=\"xiang_type\" value=\"增财香\"  id=\"button5\" (click)=\"zengcaixiang()\"></div>\n    <div class=\"xiang\"><input type=\"button\" name=\"xiang_type\" value=\"智慧香\"  id=\"button6\" (click)=\"zhihuixiang()\"></div>\n  </div>\n    <div class=\"input_name\">\n    芳名：<input type=\"text\" id=\"name\" placeholder=\"请输入您的名字\" [(ngModel)]=\"record1.name\" value=\"form_input\" />\n    </div>\n    <div class=\"zhifu_area\">\n    <div style=\"width:100%;height:45%\">\n    <button type=\"button\" style=\"width:85%;height:60%;background-color: #33CC00;border-radius: 8px;color:white\" (click)=\"pay()\">微信支付</button>\n    </div>\n    <div style=\"width:100%;height: 45%\">\n    <button type=\"button\" style=\"width:85%;height:60%;background-color:#0080ff;border-radius: 8px;color:white; \" (click)=\"pay()\">支付宝</button>  \n    </div>\n    </div>\n    <select style=\"position: absolute;left:67%;top:64%\" name=\"price\" id=\"price\" (change)=\"getChange($event.target.value)\">\n      <option value =\"15\" >15支 3元</option>\n      <option value =\"21\" >21支 5元</option>\n      <option value =\"33\" >33支 7元</option>\n      <option value =\"66\" >66支 10元</option>\n    </select>\n    <p class=\"juzi\">捐赠香火后将由法师为您点香</p>\n    <div class=\"gundongkuang\">\n    <marquee style=\"position:absolute;left:19%;top:20%;\" direction=up behavior=\"scroll\" scrollamount=1 scrolldelay=1   height=70% width=70%   onmouseover=this.stop() onmouseout=this.start()> \n    <div  *ngFor=\"let infos of record2\">\n    <p style=\"font-family:微软雅黑;font-size:110%;font-weight:500;color:#FFFFF3;\"> {{infos.Name}} 刚刚捐赠了 {{infos.Number}} 支 {{infos.Leixing}} </p>\n    </div>\n  </marquee>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/gongde/juanxianghuo/juanxianghuo.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/gongde/juanxianghuo/juanxianghuo.component.ts ***!
  \**************************************************************************/
/*! exports provided: JuanxianghuoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuanxianghuoComponent", function() { return JuanxianghuoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var JuanxianghuoComponent = /** @class */ (function () {
    function JuanxianghuoComponent(http) {
        this.http = http;
        //record用于记录用户选择的香的类型和购买的数量
        this.record1 = {
            wechatid: '匿名',
            name: '',
            number: '',
            type: '',
        };
        this.record2 = {};
    }
    JuanxianghuoComponent.prototype.ngOnInit = function () {
        this.dodisplay();
    };
    //选择香的按钮被点击，给香的type赋值对应的香名
    JuanxianghuoComponent.prototype.pinganxiang = function () {
        this.record1.type = '平安香';
        console.log(this.record1.type);
        console.log(this.record1.name);
        var but1 = document.getElementById('button1');
        var but2 = document.getElementById('button2');
        var but3 = document.getElementById('button3');
        var but4 = document.getElementById('button4');
        var but5 = document.getElementById('button5');
        var but6 = document.getElementById('button6');
        but1.style.backgroundColor = '#f9a11b'; //改变当前按钮颜色
        but2.style.backgroundColor = '#ffc952';
        but3.style.backgroundColor = '#ffc952';
        but4.style.backgroundColor = '#ffc952';
        but5.style.backgroundColor = '#ffc952';
        but6.style.backgroundColor = '#ffc952';
    };
    JuanxianghuoComponent.prototype.xiaozaixiang = function () {
        this.record1.type = '消灾香';
        var but1 = document.getElementById('button1');
        var but2 = document.getElementById('button2');
        var but3 = document.getElementById('button3');
        var but4 = document.getElementById('button4');
        var but5 = document.getElementById('button5');
        var but6 = document.getElementById('button6');
        but1.style.backgroundColor = '#ffc952';
        but2.style.backgroundColor = '#f9a11b'; //改变当前按钮颜色
        but3.style.backgroundColor = '#ffc952';
        but4.style.backgroundColor = '#ffc952';
        but5.style.backgroundColor = '#ffc952';
        but6.style.backgroundColor = '#ffc952';
    };
    JuanxianghuoComponent.prototype.fuguixiang = function () {
        this.record1.type = '富贵香';
        var but1 = document.getElementById('button1');
        var but2 = document.getElementById('button2');
        var but3 = document.getElementById('button3');
        var but4 = document.getElementById('button4');
        var but5 = document.getElementById('button5');
        var but6 = document.getElementById('button6');
        but1.style.backgroundColor = '#ffc952';
        but2.style.backgroundColor = '#ffc952';
        but3.style.backgroundColor = '#f9a11b'; //改变当前按钮颜色
        but4.style.backgroundColor = '#ffc952';
        but5.style.backgroundColor = '#ffc952';
        but6.style.backgroundColor = '#ffc952';
    };
    JuanxianghuoComponent.prototype.qiuzixiang = function () {
        this.record1.type = '求子香';
        var but1 = document.getElementById('button1');
        var but2 = document.getElementById('button2');
        var but3 = document.getElementById('button3');
        var but4 = document.getElementById('button4');
        var but5 = document.getElementById('button5');
        var but6 = document.getElementById('button6');
        but1.style.backgroundColor = '#ffc952';
        but2.style.backgroundColor = '#ffc952';
        but3.style.backgroundColor = '#ffc952';
        but4.style.backgroundColor = '#f9a11b'; //改变当前按钮颜色
        but5.style.backgroundColor = '#ffc952';
        but6.style.backgroundColor = '#ffc952';
    };
    JuanxianghuoComponent.prototype.zengcaixiang = function () {
        this.record1.type = '增财香';
        var but1 = document.getElementById('button1');
        var but2 = document.getElementById('button2');
        var but3 = document.getElementById('button3');
        var but4 = document.getElementById('button4');
        var but5 = document.getElementById('button5');
        var but6 = document.getElementById('button6');
        but1.style.backgroundColor = '#ffc952';
        but2.style.backgroundColor = '#ffc952';
        but3.style.backgroundColor = '#ffc952';
        but4.style.backgroundColor = '#ffc952';
        but5.style.backgroundColor = '#f9a11b'; //改变当前按钮颜色
        but6.style.backgroundColor = '#ffc952';
    };
    JuanxianghuoComponent.prototype.zhihuixiang = function () {
        this.record1.type = '智慧香';
        var but1 = document.getElementById('button1');
        var but2 = document.getElementById('button2');
        var but3 = document.getElementById('button3');
        var but4 = document.getElementById('button4');
        var but5 = document.getElementById('button5');
        var but6 = document.getElementById('button6');
        but1.style.backgroundColor = '#ffc952';
        but2.style.backgroundColor = '#ffc952';
        but3.style.backgroundColor = '#ffc952';
        but4.style.backgroundColor = '#ffc952';
        but5.style.backgroundColor = '#ffc952';
        but6.style.backgroundColor = '#f9a11b'; //改变当前按钮颜色
    };
    //select框选择时将数值赋值给record.number
    JuanxianghuoComponent.prototype.getChange = function (uid) {
        console.log('=====');
        console.log(uid);
        this.record1.number = uid;
    };
    //后端还未完成
    JuanxianghuoComponent.prototype.pay = function () {
        console.log(this.record1);
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        var api = "/api/gongde/juanxianghuo";
        this.http.post(api, this.record1, httpOptions).subscribe(function (response) {
            console.log(response);
            //判断姓名是否已经填写，香是否已选择
            if (response == true) {
                alert("支付成功");
            }
            else {
                alert("请填写您的名字及选择香型");
            }
        });
        //清空消息
        this.record1 = {};
        this.record1.wechatid = '匿名';
    };
    //获取数据库记录的数据
    JuanxianghuoComponent.prototype.dodisplay = function () {
        var _this = this;
        var api = "/api/gongde/juanxianghuo/display";
        this.http.get(api).subscribe(function (response) {
            console.log(response);
            _this.record2 = response;
            //this.record2 = Array.of(this.record2); 
        });
        // console.log(this.record2.Name)
    };
    JuanxianghuoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-juanxianghuo',
            template: __webpack_require__(/*! ./juanxianghuo.component.html */ "./src/app/components/gongde/juanxianghuo/juanxianghuo.component.html"),
            styles: [__webpack_require__(/*! ./juanxianghuo.component.css */ "./src/app/components/gongde/juanxianghuo/juanxianghuo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], JuanxianghuoComponent);
    return JuanxianghuoComponent;
}());



/***/ }),

/***/ "./src/app/components/gongde/zhuyinjingshu/page/page.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/gongde/zhuyinjingshu/page/page.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--分页组件的标签内容-->\n<nav aria-label=\"Page navigation\">\n    <ul class=\"pagination pagination-sm\">\n        <li class=\"page-item\" [ngClass]=\"{disabled:pagination.currentPage === 1}\">\n            <a class=\"page-link\" href=\"javascript:void(0);\" (click)=\"prePage()\" aria-label=\"Previous\">\n                <span aria-hidden=\"true\">&laquo;</span>\n            </a>\n        </li>\n        <li class=\"page-item\" *ngFor=\"let item of pageList;let trackBy = index\" [ngClass]=\"{active:item === pagination.currentPage}\">\n            <a class=\"page-link\" href=\"javascript:void(0);\" (click)=\"changeCurrentPage(item)\">{{item}}</a>\n        </li>\n        <li class=\"page-item\" [ngClass]=\"{disabled:pagination.currentPage === pageNum}\">\n            <a class=\"page-link\" href=\"javascript:void(0);\" (click)=\"nextPage()\" aria-label=\"Next\">\n                <span aria-hidden=\"true\">&raquo;</span>\n            </a>\n        </li>\n    </ul>\n</nav>"

/***/ }),

/***/ "./src/app/components/gongde/zhuyinjingshu/page/page.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/gongde/zhuyinjingshu/page/page.component.ts ***!
  \************************************************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _page_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page/pagination */ "./src/app/components/gongde/zhuyinjingshu/page/pagination.ts");

//分页组件定义


var PageComponent = /** @class */ (function () {
    function PageComponent() {
        this.oldTotalItems = 0;
    }
    PageComponent.prototype.changeCurrentPage = function (item) {
        if (typeof item === 'number') {
            this.pagination.currentPage = item;
            this.pagination.changePage();
        }
    };
    PageComponent.prototype.prePage = function () {
        if (this.pagination.currentPage != 1) {
            this.changeCurrentPage(this.pagination.currentPage - 1);
        }
    };
    PageComponent.prototype.nextPage = function () {
        if (this.pagination.currentPage < this.pageNum) {
            this.changeCurrentPage(this.pagination.currentPage + 1);
        }
    };
    PageComponent.prototype.initPageList = function () {
        //偏移量（因为要除去首页和尾页，所以要-1）
        var offset = Math.floor(this.pagination.pageLength / 2) - 1;
        //如果没有数据显示一页
        this.pagination.totalItems = this.pagination.totalItems > 0 ? this.pagination.totalItems : 1;
        //总页数
        this.pageNum = Math.ceil(this.pagination.totalItems / this.pagination.pageItems);
        this.pageList = [];
        if (this.pageNum <= this.pagination.pageLength) {
            for (var i = 1; i <= this.pageNum; i++) {
                this.pageList.push(i);
            }
        }
        else {
            //左边没有'...'
            if (this.pagination.currentPage < this.pagination.pageLength - offset) {
                for (var i = 1; i < this.pagination.pageLength; i++) {
                    this.pageList.push(i);
                }
                this.pageList.push('...');
                this.pageList.push(this.pageNum);
                //右边没有'...'
            }
            else if (this.pagination.currentPage >= this.pageNum - offset - 1) {
                this.pageList.push(1);
                this.pageList.push('...');
                for (var i = this.pagination.pageLength - 2; i >= 0; i--) {
                    this.pageList.push(this.pageNum - i);
                }
                //两边都有'...'
            }
            else {
                this.pageList.push(1);
                this.pageList.push('...');
                for (var i = this.pagination.currentPage - offset; i <= this.pagination.currentPage + offset; i++) {
                    this.pageList.push(i);
                }
                this.pageList.push('...');
                this.pageList.push(this.pageNum);
            }
        }
    };
    PageComponent.prototype.ngDoCheck = function () {
        if (this.pagination.totalItems != this.oldTotalItems) {
            this.initPageList();
            this.oldTotalItems = this.pagination.totalItems;
        }
        if (this.pagination.currentPage > this.pageNum) {
            this.pagination.currentPage = this.pageNum;
            this.pagination.changePage();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _page_pagination__WEBPACK_IMPORTED_MODULE_2__["Pagination"])
    ], PageComponent.prototype, "pagination", void 0);
    PageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page',
            template: __webpack_require__(/*! ./page.component.html */ "./src/app/components/gongde/zhuyinjingshu/page/page.component.html")
        })
    ], PageComponent);
    return PageComponent;
}());



/***/ }),

/***/ "./src/app/components/gongde/zhuyinjingshu/page/pagination.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/gongde/zhuyinjingshu/page/pagination.ts ***!
  \********************************************************************/
/*! exports provided: Pagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return Pagination; });
//分页组件所需配置信息的对象
var Pagination = /** @class */ (function () {
    /**
        * 构造函数，同时设置属性，初始值
        * @param pageLength 显示的页码数，奇数，默认6
        * @param currentPage 当前页码数，默认1
        * @param totalItems 总条数 默认0
        * @param pageItems 每页显示条数，默认1
        * @param changePage 翻页时调用的方法
    */
    function Pagination(pageLength, currentPage, totalItems, pageItems, changePage) {
        if (pageLength === void 0) { pageLength = 6; }
        if (currentPage === void 0) { currentPage = 1; }
        if (totalItems === void 0) { totalItems = 0; }
        if (pageItems === void 0) { pageItems = 1; }
        this.pageLength = pageLength;
        this.currentPage = currentPage;
        this.totalItems = totalItems;
        this.pageItems = pageItems;
        this.changePage = changePage;
    }
    Pagination.defaultPagination = new Pagination(6, 1, 0, 1, function () { });
    return Pagination;
}());



/***/ }),

/***/ "./src/app/components/gongde/zhuyinjingshu/zhuyinjingshu.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/gongde/zhuyinjingshu/zhuyinjingshu.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/* 进度条 */\nprogress\n{\n  width: 80%;\n   color:rgb(190, 125, 64); /*兼容IE10和chorme的已完成进度背景*/\n   border:none;\n   border-radius: 25px;\n   background:rgb(216, 211, 207);/*这个属性也可当作Chrome的已完成进度背景，只不过被下面的::progress-bar覆盖了*/      \n   overflow: hidden;\n}\nprogress::-webkit-progress-bar\n{ \n    /* 进度条背景颜色 */\n    background:rgb(216, 211, 207); \n}\nprogress::-webkit-progress-value \n{\n    border-radius: 25px;\n    /* 进度条颜色 */\n    background:rgba(158, 111, 50, 0.89); \n}\n/* 方形按钮 */\n.buttonk{\n  margin-left:auto;\n   margin-right:auto;\n  margin-bottom: 3%;\n  margin-top: -3%\n}\n.button1 {\n    height: 100%;\n    margin-top: -5%;\n    margin-bottom: 5%;\n    margin-left: 30%;\n    margin-right: 30%;\n    border-radius: 2px;\n    font-size: 15px;\n    font-weight: 700;\n    color: #e6e6e6;\n    /* 去除button默认外边框 */\n    border: 1px solid rgb(119, 75, 46);\n    background-color: rgb(119, 75, 46);\n  }\n/* 卡片样式 */\n.card {\n      position: relative;\n      top:3px;\n      padding: 8%;\n      margin: 5% 3%;\n      border-radius: 3px;\n      height: 40%vh;\n      border:2px #9c9c9c;\n      border-style:none none solid none;\n      box-shadow: 0px 0px 4px  rgb(156, 156, 156);\n  }\n.card1 {\n    position: relative;\n    top:3px;\n    padding: 8% 5%;\n    margin-left: 3%;\n    margin-right: 3%;\n    margin-top:5%;\n    border-radius: 3px;\n    height: 80%vh;\n    border:2px #9c9c9c;\n    border-style:none none solid none;\n    box-shadow: 0px 0px 4px  rgb(156, 156, 156);\n}\n/* 标题 */\np.head1{\n    font-size: 125%;\n    color: rgb(100, 100, 100);\n    text-align: center;\n   }\np.head2{\n  font-size: 125%;\n  color: rgb(100, 100, 100);\n  font-weight: bold;\n  text-align: center;\n }\n/* 表格 */\ntable {\n   margin: 8% 0%;\n   width: 100%;\n }\nth{\n  width: 30%vw;\n}\nthead {\n  text-align:center ;\n\n }\ntd {\n  font-size: 17px;\n  width: 30%;\n  text-align:center ;\n }\ntd.middle {\n  font-size: 17px;\n  width: 40%;\n  padding: 4%;\n  text-align:center ;\n }\ntd.left {\n  font-size: 17px;\n  width: 25%;\n  padding: 4%;\n  text-align:left ;\n }\ntd.right{\n  font-size: 17px;\n  width: 25%;\n  padding: 4%;\n  text-align:right ;\n }\n/* 不换行 */\n.nowrap {\n  white-space:nowrap;\n  width:25%;\n  margin-left: 10%;\n  margin-right: 10%;\n  margin-top: 10%;\n  margin-bottom: 0%;\n}\n/* 单选按钮 */\ndiv.select {\n  margin-top:0%;\n}\nlabel {\n  position: relative;\n  left: -5%;\n  top: 21px;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: #ffffff;\n  border: 2px solid #999;\n}\ninput[type=\"radio\"] {\n  width: 40px;\n  height: 40px;\n  opacity: 0;\n}\ninput:checked+label { \n  background-color: #fe6d32;\n  border: 1px solid #fe6d32;\n}\ninput:checked+label::after {\n  position: absolute;\n  content: \"\";\n  width: 10px;\n  height: 20px;\n  top: 6px;\n  left: 14px;\n  border: 4px solid #fff;\n  border-top: none;\n  border-left: none;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg)\n}\n/* 支付按钮 */\ndiv.pay{\n  white-space:nowrap;\n  margin-top: 5%;\n  height: 13%;\n}\n.weixin {\n  width: 30%;\n  height: 100%;\n  margin-left: 10%;\n  margin-right: 10%;\n  border-radius: 2px;\n  font-size: 15px;\n  font-weight: 700;\n  color: #ffffff;\n  /* 去除button默认外边框 */\n  border: 1px solid rgb(71, 209, 59);\n  background-color: rgb(71, 209, 59);\n}\n.zhifubao {\n  width: 30%;\n  height: 100%;\n  margin-left: 10%;\n  margin-right: 10%;\n  border-radius: 2px;\n  font-size: 15px;\n  font-weight: 700;\n  color: #ffffff;\n  /* 去除button默认外边框 */\n  border: 1px solid rgb(62, 182, 238);\n  background-color: rgb(62, 182, 238);\n}\n/* 背景遮罩层 */\n.overlay {\n  display: none;\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(8, 8, 8, 0.3);\n  z-index: 1001;\n}\n/* 模态弹窗区域 */\n.modal {\n  display: none;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: 80%;\n  height: 50%;\n  padding: 10px;\n  border-radius: 30px;\n  background-color: rgb(251, 241, 230);\n  z-index: 1002;\n  overflow: auto;\n  -webkit-animation: scaleIn .3s;\n          animation: scaleIn .3s;\n}\n/* 从上往下淡入 */\n@-webkit-keyframes fadeInDown {\n  0% {\n    -webkit-transform: translate3d(0, -20%, 0);\n            transform: translate3d(0, -20%, 0);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform: none;\n            transform: none;\n    opacity: 1;\n  }\n}\n@keyframes fadeInDown {\n  0% {\n    -webkit-transform: translate3d(0, -20%, 0);\n            transform: translate3d(0, -20%, 0);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform: none;\n            transform: none;\n    opacity: 1;\n  }\n}\n/* 缩放淡入 */\n@-webkit-keyframes scaleIn {\n  0% {\n    -webkit-transform: scale(0.2);\n            transform: scale(0.2);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes scaleIn {\n  0% {\n    -webkit-transform: scale(0.2);\n            transform: scale(0.2);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n/* 缩放淡出 */\n@-webkit-keyframes scaleOut {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform: scale(0.2);\n            transform: scale(0.2);\n    opacity: 0;\n  }\n}\n@keyframes scaleOut {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform: scale(0.2);\n            transform: scale(0.2);\n    opacity: 0;\n  }\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nb25nZGUvemh1eWluamluZ3NodS96aHV5aW5qaW5nc2h1LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFFBQVE7QUFDUjs7RUFFRSxVQUFVO0dBQ1QsdUJBQXVCLEVBQUUsd0JBQXdCO0dBQ2pELFdBQVc7R0FDWCxtQkFBbUI7R0FDbkIsNkJBQTZCLENBQUMsa0RBQWtEO0dBQ2hGLGdCQUFnQjtBQUNuQjtBQUNBOztJQUVJLFlBQVk7SUFDWiw2QkFBNkI7QUFDakM7QUFDQTs7SUFFSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLG1DQUFtQztBQUN2QztBQUdBLFNBQVM7QUFDVDtFQUNFLGdCQUFnQjtHQUNmLGlCQUFpQjtFQUNsQixpQkFBaUI7RUFDakI7QUFDRjtBQUdFO0lBQ0UsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxrQ0FBa0M7RUFDcEM7QUFFQSxTQUFTO0FBQ1Q7TUFDSSxrQkFBa0I7TUFDbEIsT0FBTztNQUNQLFdBQVc7TUFDWCxhQUFhO01BQ2Isa0JBQWtCO01BQ2xCLGFBQWE7TUFDYixrQkFBa0I7TUFDbEIsaUNBQWlDO01BQ2pDLDJDQUEyQztFQUMvQztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDLDJDQUEyQztBQUMvQztBQUNFLE9BQU87QUFDUDtJQUNFLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsa0JBQWtCO0dBQ25CO0FBRUY7RUFDQyxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixrQkFBa0I7Q0FDbkI7QUFFQSxPQUFPO0FBQ1A7R0FDRSxhQUFhO0dBQ2IsV0FBVztDQUNiO0FBRUE7RUFDQyxZQUFZO0FBQ2Q7QUFJQztFQUNDLGtCQUFrQjs7Q0FFbkI7QUFFQTtFQUNDLGVBQWU7RUFDZixVQUFVO0VBQ1Ysa0JBQWtCO0NBQ25CO0FBRUE7RUFDQyxlQUFlO0VBQ2YsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7Q0FDbkI7QUFFQTtFQUNDLGVBQWU7RUFDZixVQUFVO0VBQ1YsV0FBVztFQUNYLGdCQUFnQjtDQUNqQjtBQUVBO0VBQ0MsZUFBZTtFQUNmLFVBQVU7RUFDVixXQUFXO0VBQ1gsaUJBQWlCO0NBQ2xCO0FBR0EsUUFBUTtBQUNUO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFDQSxTQUFTO0FBQ1Q7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtBQUNaO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osUUFBUTtFQUNSLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQ0FBdUI7VUFBdkI7QUFDRjtBQUNBLFNBQVM7QUFDVDtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztBQUNiO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsa0NBQWtDO0FBQ3BDO0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsbUNBQW1DO0FBQ3JDO0FBQ0UsVUFBVTtBQUVaO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGFBQWE7QUFDZjtBQUVBLFdBQVc7QUFFWDtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7RUFDWixVQUFVO0VBQ1YsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixjQUFjO0VBQ2QsOEJBQXNCO1VBQXRCLHNCQUFzQjtBQUN4QjtBQUVBLFdBQVc7QUFFWDtFQUNFO0lBQ0UsMENBQWtDO1lBQWxDLGtDQUFrQztJQUNsQyxVQUFVO0VBQ1o7O0VBRUE7SUFDRSx1QkFBZTtZQUFmLGVBQWU7SUFDZixVQUFVO0VBQ1o7QUFDRjtBQVZBO0VBQ0U7SUFDRSwwQ0FBa0M7WUFBbEMsa0NBQWtDO0lBQ2xDLFVBQVU7RUFDWjs7RUFFQTtJQUNFLHVCQUFlO1lBQWYsZUFBZTtJQUNmLFVBQVU7RUFDWjtBQUNGO0FBRUEsU0FBUztBQUVUO0VBQ0U7SUFDRSw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLDJCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsVUFBVTtFQUNaO0FBQ0Y7QUFWQTtFQUNFO0lBQ0UsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQixVQUFVO0VBQ1o7O0VBRUE7SUFDRSwyQkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLFVBQVU7RUFDWjtBQUNGO0FBR0EsU0FBUztBQUVUO0VBQ0U7SUFDRSwyQkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLFVBQVU7RUFDWjs7RUFFQTtJQUNFLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsVUFBVTtFQUNaO0FBQ0Y7QUFWQTtFQUNFO0lBQ0UsMkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixVQUFVO0VBQ1o7O0VBRUE7SUFDRSw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLFVBQVU7RUFDWjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nb25nZGUvemh1eWluamluZ3NodS96aHV5aW5qaW5nc2h1LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIOi/m+W6puadoSAqL1xucHJvZ3Jlc3NcbntcbiAgd2lkdGg6IDgwJTtcbiAgIGNvbG9yOnJnYigxOTAsIDEyNSwgNjQpOyAvKuWFvOWuuUlFMTDlkoxjaG9ybWXnmoTlt7LlrozmiJDov5vluqbog4zmma8qL1xuICAgYm9yZGVyOm5vbmU7XG4gICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgYmFja2dyb3VuZDpyZ2IoMjE2LCAyMTEsIDIwNyk7Lyrov5nkuKrlsZ7mgKfkuZ/lj6/lvZPkvZxDaHJvbWXnmoTlt7LlrozmiJDov5vluqbog4zmma/vvIzlj6rkuI3ov4fooqvkuIvpnaLnmoQ6OnByb2dyZXNzLWJhcuimhuebluS6hiovICAgICAgXG4gICBvdmVyZmxvdzogaGlkZGVuO1xufVxucHJvZ3Jlc3M6Oi13ZWJraXQtcHJvZ3Jlc3MtYmFyXG57IFxuICAgIC8qIOi/m+W6puadoeiDjOaZr+minOiJsiAqL1xuICAgIGJhY2tncm91bmQ6cmdiKDIxNiwgMjExLCAyMDcpOyBcbn1cbnByb2dyZXNzOjotd2Via2l0LXByb2dyZXNzLXZhbHVlIFxue1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgLyog6L+b5bqm5p2h6aKc6ImyICovXG4gICAgYmFja2dyb3VuZDpyZ2JhKDE1OCwgMTExLCA1MCwgMC44OSk7IFxufVxuXG5cbi8qIOaWueW9ouaMiemSriAqL1xuLmJ1dHRvbmt7XG4gIG1hcmdpbi1sZWZ0OmF1dG87XG4gICBtYXJnaW4tcmlnaHQ6YXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMyU7XG4gIG1hcmdpbi10b3A6IC0zJVxufVxuXG5cbiAgLmJ1dHRvbjEge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAtNSU7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwJTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICNlNmU2ZTY7XG4gICAgLyog5Y676ZmkYnV0dG9u6buY6K6k5aSW6L655qGGICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDExOSwgNzUsIDQ2KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE5LCA3NSwgNDYpO1xuICB9XG5cbiAgLyog5Y2h54mH5qC35byPICovXG4gIC5jYXJkIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDozcHg7XG4gICAgICBwYWRkaW5nOiA4JTtcbiAgICAgIG1hcmdpbjogNSUgMyU7XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICBoZWlnaHQ6IDQwJXZoO1xuICAgICAgYm9yZGVyOjJweCAjOWM5YzljO1xuICAgICAgYm9yZGVyLXN0eWxlOm5vbmUgbm9uZSBzb2xpZCBub25lO1xuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggIHJnYigxNTYsIDE1NiwgMTU2KTtcbiAgfVxuXG4gIC5jYXJkMSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDozcHg7XG4gICAgcGFkZGluZzogOCUgNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xuICAgIG1hcmdpbi1yaWdodDogMyU7XG4gICAgbWFyZ2luLXRvcDo1JTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgaGVpZ2h0OiA4MCV2aDtcbiAgICBib3JkZXI6MnB4ICM5YzljOWM7XG4gICAgYm9yZGVyLXN0eWxlOm5vbmUgbm9uZSBzb2xpZCBub25lO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4ICByZ2IoMTU2LCAxNTYsIDE1Nik7XG59XG4gIC8qIOagh+mimCAqL1xuICBwLmhlYWQxe1xuICAgIGZvbnQtc2l6ZTogMTI1JTtcbiAgICBjb2xvcjogcmdiKDEwMCwgMTAwLCAxMDApO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIH1cblxuIHAuaGVhZDJ7XG4gIGZvbnQtc2l6ZTogMTI1JTtcbiAgY29sb3I6IHJnYigxMDAsIDEwMCwgMTAwKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiB9XG5cbiAvKiDooajmoLwgKi9cbiB0YWJsZSB7XG4gICBtYXJnaW46IDglIDAlO1xuICAgd2lkdGg6IDEwMCU7XG4gfVxuXG4gdGh7XG4gIHdpZHRoOiAzMCV2dztcbn1cblxuXG5cbiB0aGVhZCB7XG4gIHRleHQtYWxpZ246Y2VudGVyIDtcblxuIH1cblxuIHRkIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICB3aWR0aDogMzAlO1xuICB0ZXh0LWFsaWduOmNlbnRlciA7XG4gfVxuXG4gdGQubWlkZGxlIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICB3aWR0aDogNDAlO1xuICBwYWRkaW5nOiA0JTtcbiAgdGV4dC1hbGlnbjpjZW50ZXIgO1xuIH1cbiBcbiB0ZC5sZWZ0IHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICB3aWR0aDogMjUlO1xuICBwYWRkaW5nOiA0JTtcbiAgdGV4dC1hbGlnbjpsZWZ0IDtcbiB9XG5cbiB0ZC5yaWdodHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICB3aWR0aDogMjUlO1xuICBwYWRkaW5nOiA0JTtcbiAgdGV4dC1hbGlnbjpyaWdodCA7XG4gfVxuIFxuXG4gLyog5LiN5o2i6KGMICovXG4ubm93cmFwIHtcbiAgd2hpdGUtc3BhY2U6bm93cmFwO1xuICB3aWR0aDoyNSU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIG1hcmdpbi1ib3R0b206IDAlO1xufVxuLyog5Y2V6YCJ5oyJ6ZKuICovXG5kaXYuc2VsZWN0IHtcbiAgbWFyZ2luLXRvcDowJTtcbn1cblxubGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC01JTtcbiAgdG9wOiAyMXB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5OTk7XG59XG5cbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG9wYWNpdHk6IDA7XG59XG5cbmlucHV0OmNoZWNrZWQrbGFiZWwgeyBcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlNmQzMjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZlNmQzMjtcbn1cblxuaW5wdXQ6Y2hlY2tlZCtsYWJlbDo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHRvcDogNnB4O1xuICBsZWZ0OiAxNHB4O1xuICBib3JkZXI6IDRweCBzb2xpZCAjZmZmO1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpXG59XG4vKiDmlK/ku5jmjInpkq4gKi9cbmRpdi5wYXl7XG4gIHdoaXRlLXNwYWNlOm5vd3JhcDtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGhlaWdodDogMTMlO1xufVxuLndlaXhpbiB7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgLyog5Y676ZmkYnV0dG9u6buY6K6k5aSW6L655qGGICovXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig3MSwgMjA5LCA1OSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MSwgMjA5LCA1OSk7XG59XG5cbi56aGlmdWJhbyB7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgLyog5Y676ZmkYnV0dG9u6buY6K6k5aSW6L655qGGICovXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig2MiwgMTgyLCAyMzgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjIsIDE4MiwgMjM4KTtcbn1cbiAgLyog6IOM5pmv6YGu572p5bGCICovXG5cbi5vdmVybGF5IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAlO1xuICBsZWZ0OiAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4LCA4LCA4LCAwLjMpO1xuICB6LWluZGV4OiAxMDAxO1xufVxuXG4vKiDmqKHmgIHlvLnnqpfljLrln58gKi9cblxuLm1vZGFsIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTEsIDI0MSwgMjMwKTtcbiAgei1pbmRleDogMTAwMjtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGFuaW1hdGlvbjogc2NhbGVJbiAuM3M7XG59XG5cbi8qIOS7juS4iuW+gOS4i+a3oeWFpSAqL1xuXG5Aa2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjAlLCAwKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLyog57yp5pS+5reh5YWlICovXG5cbkBrZXlmcmFtZXMgc2NhbGVJbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMik7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5cbi8qIOe8qeaUvua3oeWHuiAqL1xuXG5Aa2V5ZnJhbWVzIHNjYWxlT3V0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4yKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/gongde/zhuyinjingshu/zhuyinjingshu.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/gongde/zhuyinjingshu/zhuyinjingshu.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ctrl+shift+i整理代码 -->\n<div class=\"card\">\n    <p class=\"head1\">{{book.scripturename}}</p>\n    <!-- 进度条显示进度，max是总任务量，value是已经完成任务量 -->\n    <nav style=\"margin-left:24%; margin-right:10%; margin-bottom: -5%;margin-top: 0%; \">\n        <progress max=\"20000\" value=\"{{book.nownum}}\"></progress>\n    </nav>\n\n    <table>\n        <thead>\n            <th>已达成</th>\n            <th>目标</th>\n            <th>助印人</th>\n        </thead>\n        <tr>\n            <td>{{book.nownum}}</td>\n            <td>{{book.targetnum}}</td>\n            <td>{{book.donatornum}}</td>\n        </tr>\n    </table>\n\n    <button class=\"button1\" (click)=\"this.open()\">点击参与助印</button>\n    <div style=\"margin-left:auto; margin-right: auto\">\n        <page [(pagination)]=\"pagination\"> </page>\n    </div>\n</div>\n\n<div class=\"card1\">\n    <div>\n        <h5>助印功德榜芳名</h5>\n    </div>\n\n    <body>\n        <table>\n            <thead>\n                <th>芳名</th>\n                <th>经书</th>\n                <th>助印</th>\n            </thead>\n            <tr *ngFor=\"let donator of donators\">\n                <td class=\"left\"> {{donator.donatorid}} </td>\n                <td class=\"middle\">{{donator.scripturename}}</td>\n                <td class=\"right\">{{donator.donatenum}}本</td>\n            </tr>\n        </table>\n    </body>\n\n\n\n</div>\n\n<div>\n    <!-- 遮罩 -->\n    <div id=\"overlay\" class=\"overlay\" (click)=\"this.close()\"></div>\n    <!-- 弹窗 -->\n    <div id=\"modal\" class=\"modal\">\n        <p class=\"head2\">助印经书</p>\n        <div class=\"nowrap\">\n            <span style=\"margin-right:29%; font-size:120%; color:rgb(133, 132, 132)\">功德芳名</span>\n            <input style=\"width:165%;\" [(ngModel)]=\"user.wechatid\">\n        </div>\n        <div class=\"select\">\n            <input id=\"item1\" type=\"radio\" name=\"radio\" value=\"10\" (click)=\"select(10)\" checked>\n            <label for=\"item1\"></label>\n            <span style=\"font-size:20px\">10本</span>\n            <input id=\"item2\" type=\"radio\" name=\"radio\" value=\"20\" (click)=\"select(20)\">\n            <label for=\"item2\"></label>\n            <span style=\"font-size:20px\">20本</span>\n        </div>\n        <div class=\"select\">\n            <input id=\"item3\" type=\"radio\" name=\"radio\" value=\"50\" (click)=\"select(50)\">\n            <label for=\"item3\"></label>\n            <span style=\"font-size:20px\">50本</span>\n            <input id=\"item4\" type=\"radio\" name=\"radio\" value=\"100\" (click)=\"select(100)\">\n            <label for=\"item4\"></label>\n            <span style=\"font-size:20px\">100本</span>\n        </div>\n        <div style=\"text-align:center; margin-top:5%; font-size:17px\">共{{this.user.donatenum*3}}元</div>\n        <div class=\"pay\">\n            <button class=\"weixin\" (click)=\"this.donation()\">微信</button>\n            <button class=\"zhifubao\" (click)=\"this.donation()\">支付宝</button>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/gongde/zhuyinjingshu/zhuyinjingshu.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/gongde/zhuyinjingshu/zhuyinjingshu.component.ts ***!
  \****************************************************************************/
/*! exports provided: ZhuyinjingshuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZhuyinjingshuComponent", function() { return ZhuyinjingshuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _zhuyinjingshu_page_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../zhuyinjingshu/page/pagination */ "./src/app/components/gongde/zhuyinjingshu/page/pagination.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ZhuyinjingshuComponent = /** @class */ (function () {
    function ZhuyinjingshuComponent(http) {
        this.http = http;
        //印书数量
        this.booknum = 10;
        //多种经书种类
        this.book = {
            scripturename: "",
            targetnum: 20000,
            nownum: 0,
            donatornum: 0,
        };
        //分页码
        this.pagenum = 1;
        //用户
        this.user = {
            wechatid: "匿名",
            scripturename: "",
            donatenum: 10,
            do: "donate"
        };
        this.init = JSON.stringify({ "do": "init" });
        this.pagination = _zhuyinjingshu_page_pagination__WEBPACK_IMPORTED_MODULE_2__["Pagination"].defaultPagination;
    }
    ZhuyinjingshuComponent.prototype.initList = function () {
        var _this = this;
        this.http.post('/api/yinjingshu', this.init, httpOptions).subscribe(function (data) {
            var booksbuff1 = JSON.stringify(data);
            var booksbuff2 = JSON.parse(booksbuff1);
            _this.booksbuff = booksbuff2.slist;
            _this.donators = booksbuff2.dlist;
            console.log("组件初始化,获取助印者列表和经书列表为：");
            console.log(_this.donators);
            console.log(_this.booksbuff);
            var page = _this.pagination.currentPage - 1;
            _this.pagination.totalItems = 6;
            var head = page;
            _this.book = _this.booksbuff[head];
        });
    };
    ZhuyinjingshuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initList();
        this.pagination.changePage = (function () {
            _this.initList();
            _this.pagenum = _this.pagination.currentPage;
            console.log(_this.pagenum);
        });
    };
    // 弹窗的开关函数
    ZhuyinjingshuComponent.prototype.open = function () {
        document.getElementById('modal').style.display = 'block';
        document.getElementById('overlay').style.display = 'block';
    };
    ZhuyinjingshuComponent.prototype.close = function () {
        document.getElementById('modal').style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
    };
    //改变助印书籍数量的函数
    ZhuyinjingshuComponent.prototype.select = function (num) {
        this.user.donatenum = num;
    };
    ZhuyinjingshuComponent.prototype.donation = function () {
        //根据页码改变捐赠经书类型
        switch (this.pagenum) {
            case 1:
                this.user.scripturename = this.booksbuff[0].scripturename;
                console.log(this.booksbuff[0].scripturename);
                break;
            case 2:
                this.user.scripturename = this.booksbuff[1].scripturename;
                console.log(this.booksbuff[1].scripturename);
                break;
            case 3:
                this.user.scripturename = this.booksbuff[2].scripturename;
                console.log(this.booksbuff[2].scripturename);
                break;
            case 4:
                this.user.scripturename = this.booksbuff[3].scripturename;
                console.log(this.booksbuff[3].scripturename);
                break;
            case 5:
                this.user.scripturename = this.booksbuff[4].scripturename;
                console.log(this.booksbuff[4].scripturename);
                break;
            case 6:
                this.user.scripturename = this.booksbuff[5].scripturename;
                console.log(this.booksbuff[5].scripturename);
                break;
        }
        this.SendDonator(this.user);
        this.close();
        this.initList();
        // location.reload();刷新网页的代码   
    };
    //发送捐赠请求
    ZhuyinjingshuComponent.prototype.SendDonator = function (user) {
        if (this.user.wechatid == "") {
            this.user.wechatid = "匿名";
        }
        var todonate = JSON.stringify(this.user);
        console.log("发送捐赠请求,发送列表为：");
        console.log(todonate);
        this.http.post('/api/yinjingshu', todonate, httpOptions).subscribe(function (data) { console.log(data); });
    };
    ZhuyinjingshuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-zhuyinjingshu',
            template: __webpack_require__(/*! ./zhuyinjingshu.component.html */ "./src/app/components/gongde/zhuyinjingshu/zhuyinjingshu.component.html"),
            styles: [__webpack_require__(/*! ./zhuyinjingshu.component.css */ "./src/app/components/gongde/zhuyinjingshu/zhuyinjingshu.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ZhuyinjingshuComponent);
    return ZhuyinjingshuComponent;
}());

var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};


/***/ }),

/***/ "./src/app/components/gongfo/dialog/dialog.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/gongfo/dialog/dialog.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg {\n  background-image: url('bg_provider2.jpg');\n  margin: 0px;\n  padding: 0px;\n  background-repeat: no-repeat;\n  position: absolute;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n  display: none;\n  overflow:auto;\n  overflow-wrap: break-word;\n  text-align: center;\n  z-index: 10;\n  -webkit-animation: fadeInDown .5s;\n          animation: fadeInDown .5s;\n}\n\n@-webkit-keyframes fadeInDown {\n  0% {\n    -webkit-transform: translate3d(0, -20%, 0);\n            transform: translate3d(0, -20%, 0);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform: none;\n            transform: none;\n    opacity: 1;\n  }\n}\n\n@keyframes fadeInDown {\n  0% {\n    -webkit-transform: translate3d(0, -20%, 0);\n            transform: translate3d(0, -20%, 0);\n    opacity: 0;\n  }\n\n  100% {\n    -webkit-transform: none;\n            transform: none;\n    opacity: 1;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nb25nZm8vZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQW1FO0VBQ25FLFdBQVc7RUFDWCxZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGlDQUF5QjtVQUF6Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTtJQUNFLDBDQUFrQztZQUFsQyxrQ0FBa0M7SUFDbEMsVUFBVTtFQUNaOztFQUVBO0lBQ0UsdUJBQWU7WUFBZixlQUFlO0lBQ2YsVUFBVTtFQUNaO0FBQ0Y7O0FBVkE7RUFDRTtJQUNFLDBDQUFrQztZQUFsQyxrQ0FBa0M7SUFDbEMsVUFBVTtFQUNaOztFQUVBO0lBQ0UsdUJBQWU7WUFBZixlQUFlO0lBQ2YsVUFBVTtFQUNaO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dvbmdmby9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvZ29uZ2ZvL2JnX3Byb3ZpZGVyMi5qcGdcIik7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogbm9uZTtcbiAgb3ZlcmZsb3c6YXV0bztcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB6LWluZGV4OiAxMDtcbiAgYW5pbWF0aW9uOiBmYWRlSW5Eb3duIC41cztcbn1cblxuQGtleWZyYW1lcyBmYWRlSW5Eb3duIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwJSwgMCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/gongfo/dialog/dialog.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/gongfo/dialog/dialog.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"dialog\" class=\"bg\">\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "./src/app/components/gongfo/dialog/dialog.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/gongfo/dialog/dialog.component.ts ***!
  \**************************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DialogComponent = /** @class */ (function () {
    function DialogComponent() {
    }
    DialogComponent.prototype.ngOnInit = function () {
    };
    DialogComponent.prototype.open = function () {
        document.getElementById("dialog").style.display = 'flex';
    };
    DialogComponent.prototype.close = function () {
        document.getElementById("dialog").style.display = 'none';
    };
    DialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__(/*! ./dialog.component.html */ "./src/app/components/gongfo/dialog/dialog.component.html"),
            styles: [__webpack_require__(/*! ./dialog.component.css */ "./src/app/components/gongfo/dialog/dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/components/gongfo/gongfo.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/gongfo/gongfo.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.bg {\n  background-image: url('bg_provider2.jpg');\n  background-repeat: no-repeat;\n  position: fixed;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n  padding-bottom:0;\n}\n\n.main{\n  height: 100%;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n}\n\n.top {\n  height: 10%;\n  width: 100%;\n  top:0px;\n}\n\n.fo {\n  height: 300px;\n  width: 220px;\n  position: absolute;\n  left: 50%;\n  top: 8%;\n  margin-left: -110px;\n}\n\n.desk {\n  width: 100%;\n  height: 200px;\n  position: fixed;\n  left: 0;\n  bottom: 20%;\n}\n\n.lazhu {\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n}\n\n.lazhuset {\n  display: flex;\n  flex-direction: row;\n  position: fixed;\n  bottom: 50%;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 0;\n}\n\n.xiang {\n  -webkit-transform: scale(0.4);\n          transform: scale(0.4);\n}\n\n.flower {\n  height: 0;\n  display: flex;\n  flex-direction: row;\n  position: fixed;\n  bottom: 50%;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n\n.flowerset {\n  -webkit-transform: scale(0.4);\n          transform: scale(0.4);\n}\n\n.fruit {\n  width: 120px;\n  z-index: 100;\n  position: fixed;\n  left: 50%;\n  margin-left: -60px;\n  bottom: 25%;\n}\n\n.button {\n  position:absolute;\n  bottom: 40px;\n  width: 100%;\n  text-align: center;\n}\n\nbutton{\n  width: 100px;\n  height: 50px;\n  border-radius: 25px;\n  margin: 0 5px;\n  font-size: 20px;\n  font-weight: 700;\n  color: #666666;\n  /* 去除button默认外边框 */\n  outline: 0;\n  border: 1px solid rgba(255, 204, 0, 1);\n  background-color: rgba(255, 204, 0, 1);\n}\n\n.fo1 {\n  height: 280px;\n  width: 200px;\n  position: absolute;\n  bottom: 45%;\n  left: 50%;\n  margin-left: -100px;\n}\n\n.intro {\n  text-align: center;\n  border: 2px solid rgb(240, 119, 7);\n  background-color: rgb(255, 200, 98);\n  width: 80%;\n  height: 40%;\n  position: absolute;\n  bottom: 5%;\n  left: 10%;\n  border-radius: 1em;\n}\n\n.details {\n  width: 90%;\n  height: 60%;\n  position: relative;\n  left: 5%;\n  overflow: auto;\n}\n\n.request {\n  position: relative;\n  width: 65%;\n  height: 16%;\n  margin: 5%;\n  border-radius: 1em;\n  border: 1px solid rgb(241, 154, 24);\n}\n\n.right {\n  position: absolute;\n  bottom: 60%;\n  left: 85%;\n}\n\n.left {\n  position: absolute;\n  bottom: 60%;\n  left: 5%;\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.flower1 {\n  width: 60%;\n  position: relative;\n}\n\n.dialog {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.cp {\n  width: 118px;\n  height: 170px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 20%;\n}\n\n.font {\n  background-color: rgb(248, 196, 53);\n  color: rgb(53, 49, 43);\n  width: 50%;\n  height: 20px;\n  margin-top: 5%;\n  border-radius: 1em;\n  text-align: center;\n  position: relative;\n  bottom: 8px;\n}\n\n.xiang1{\n  width: 100%;\n}\n\n.fruit1{\n  width: 100%;\n}\n\n.fruit_cp {\n  width: 33%;\n  height: 30%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n} \n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nb25nZm8vZ29uZ2ZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UseUNBQWdFO0VBQ2hFLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZUFBZTtFQUNmLE9BQU87RUFDUCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsNkJBQXFCO1VBQXJCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysc0NBQXNDO0VBQ3RDLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtDQUFrQztFQUNsQyxtQ0FBbUM7RUFDbkMsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFFBQVE7RUFDUixpQ0FBeUI7VUFBekIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7QUFHQTtFQUNFLG1DQUFtQztFQUNuQyxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dvbmdmby9nb25nZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmJnIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2dvbmdmby9iZ19wcm92aWRlcjIuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOjA7XG59XG5cbi5tYWlue1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi50b3Age1xuICBoZWlnaHQ6IDEwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDowcHg7XG59XG5cbi5mbyB7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiAyMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogOCU7XG4gIG1hcmdpbi1sZWZ0OiAtMTEwcHg7XG59XG5cbi5kZXNrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAyMCU7XG59XG5cbi5sYXpodSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcbn1cblxuLmxhemh1c2V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDUwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDA7XG59XG5cbi54aWFuZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC40KTtcbn1cblxuLmZsb3dlciB7XG4gIGhlaWdodDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDUwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmxvd2Vyc2V0IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjQpO1xufVxuXG4uZnJ1aXQge1xuICB3aWR0aDogMTIwcHg7XG4gIHotaW5kZXg6IDEwMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtNjBweDtcbiAgYm90dG9tOiAyNSU7XG59XG5cbi5idXR0b24ge1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgYm90dG9tOiA0MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5idXR0b257XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBtYXJnaW46IDAgNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjNjY2NjY2O1xuICAvKiDljrvpmaRidXR0b27pu5jorqTlpJbovrnmoYYgKi9cbiAgb3V0bGluZTogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDIwNCwgMCwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMDQsIDAsIDEpO1xufVxuXG4uZm8xIHtcbiAgaGVpZ2h0OiAyODBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNDUlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XG59XG5cbi5pbnRybyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDI0MCwgMTE5LCA3KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjAwLCA5OCk7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogNDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNSU7XG4gIGxlZnQ6IDEwJTtcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xufVxuXG4uZGV0YWlscyB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNjAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDUlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnJlcXVlc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA2NSU7XG4gIGhlaWdodDogMTYlO1xuICBtYXJnaW46IDUlO1xuICBib3JkZXItcmFkaXVzOiAxZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNDEsIDE1NCwgMjQpO1xufVxuXG4ucmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNjAlO1xuICBsZWZ0OiA4NSU7XG59XG5cbi5sZWZ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDYwJTtcbiAgbGVmdDogNSU7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbi5mbG93ZXIxIHtcbiAgd2lkdGg6IDYwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZGlhbG9nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uY3Age1xuICB3aWR0aDogMTE4cHg7XG4gIGhlaWdodDogMTcwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiAyMCU7XG59XG5cblxuLmZvbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAxOTYsIDUzKTtcbiAgY29sb3I6IHJnYig1MywgNDksIDQzKTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiA4cHg7XG59XG5cbi54aWFuZzF7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZnJ1aXQxe1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZydWl0X2NwIHtcbiAgd2lkdGg6IDMzJTtcbiAgaGVpZ2h0OiAzMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSBcblxuIl19 */"

/***/ }),

/***/ "./src/app/components/gongfo/gongfo.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/gongfo/gongfo.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg\">\n  <div class=\"main\">\n    <img class=\"top\" src=\"../../../assets/gongfo/gy_top.png\" alt=\"\">\n    <img class=\"fo\" (click)=\"dialog.open()\" (click)=\"fo()\" src={{fo_list[fo_index].url}} alt=\"\">\n    <div class=\"button\">\n      <button [routerLink]=\"[ '/qifu']\">祈福</button>\n    </div>\n\n    <img class=\"desk\" src=\"../../../assets/gongfo/gy_desk.jpg\" alt=\"\">\n\n    <div class=\"lazhuset\">\n      <img class=\"lazhu\" src=\"../../../assets/gongfo/gy_lazhu.png\" alt=\"\">\n      <img class=\"xiang\" (click)=\"dialog.open()\" (click)=\"xiang()\" src={{xiang_list[xiang_index].url}} alt=\"\">\n      <img class=\"lazhu\" src=\"../../../assets/gongfo/gy_lazhu.png\" alt=\"\">\n    </div>\n\n    <div class=\"flower\">\n      <img class=\"flowerset\" (click)=\"dialog.open()\" (click)=\"flower()\" src={{flower_list[flower_index].url}} alt=\"\">\n      <img class=\"flowerset\" (click)=\"dialog.open()\" (click)=\"flower()\" src={{flower_list[flower_index].url}} alt=\"\">\n    </div>\n\n\n    <img class=\"fruit\" (click)=\"dialog.open()\" (click)=\"fruit()\" src={{fruit_list[fruit_index].url}} alt=\"\">\n  </div>\n</div>\n\n<app-dialog #dialog>\n\n  <div *ngIf=\"status==1\">\n    <img class=\"fo1\" src={{fo_list[fo_index].url}} ngm alt=\"\">\n    <img class=\"right\" (click)=\"next()\" src=\"../../../assets/gongfo/icon_arrowli.png\" alt=\"\">\n    <img class=\"left\" (click)=\"pre()\" src=\"../../../assets/gongfo/icon_arrowli.png\" alt=\"\">\n    <div class=\"intro\">\n      <h3>{{fo_list[fo_index].name}}</h3>\n      <div class=\"details\">{{fo_list[fo_index].details}}</div>\n      <button class=\"request\" (click)=\"dialog.close()\">请佛</button>\n    </div>\n  </div>\n\n  <div class=\"dialog\" *ngIf=\"status==2\">\n    <ng-container class=\"row\" *ngFor=\"let item of flower_list; let i=index\">\n      <div class=\"cp\">\n        <img (click)=\"flower_change(i)\" (click)=\"dialog.close()\" class=\"flower1\" [src]=\"item.url\" alt=\"\">\n        <div class=\"font\">{{item.name}}</div>\n      </div>\n    </ng-container>\n  </div>\n\n  <div class=\"dialog\" *ngIf=\"status==3\">\n    <ng-container class=\"row\" *ngFor=\"let item of xiang_list; let i=index\">\n      <div class=\"cp\">\n        <img (click)=\"xiang_change(i)\" (click)=\"dialog.close()\" class=\"xiang1\" [src]=\"item.url\" alt=\"\">\n        <div class=\"font\">{{item.name}}</div>\n      </div>\n    </ng-container>\n  </div>\n\n  <div class=\"dialog\" *ngIf=\"status==4\">\n    <ng-container class=\"row\" *ngFor=\"let item of fruit_list; let i=index\">\n      <div class=\"fruit_cp\">\n        <img (click)=\"fruit_change(i)\" (click)=\"dialog.close()\" class=\"fruit1\" [src]=\"item.url\" alt=\"\">\n        <div class=\"font\">{{item.name}}</div>\n      </div>\n    </ng-container>\n  </div>\n\n</app-dialog>"

/***/ }),

/***/ "./src/app/components/gongfo/gongfo.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/gongfo/gongfo.component.ts ***!
  \*******************************************************/
/*! exports provided: GongfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GongfoComponent", function() { return GongfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");


 //引入第三方模块进行数据请求

var GongfoComponent = /** @class */ (function () {
    function GongfoComponent(storage) {
        this.storage = storage;
        this.Listlength = 0;
        this.fo_index = 0;
        this.xiang_index = 0;
        this.flower_index = 0;
        this.fruit_index = 0;
        this.fo_list = new Array({
            url: "http://api10.buddhaheart.cn/webfiles/sys/201710/171015001922d66c.png",
            name: '',
            details: ''
        });
        this.xiang_list = new Array({
            url: "http://api10.buddhaheart.cn/webfiles/sys/201710/171013142225d175.png",
            name: '',
            details: ''
        });
        this.flower_list = new Array({
            url: "http://api10.buddhaheart.cn/webfiles/sys/201710/1710142350470a8e.png",
            name: '',
            details: ''
        });
        this.fruit_list = new Array({
            url: "http://api10.buddhaheart.cn/webfiles/sys/201710/171013142539eb07.png",
            name: '',
            details: ''
        });
    }
    GongfoComponent.prototype.ngOnInit = function () {
        if (this.storage.get("fo_list")) {
            this.fo_list = this.storage.get("fo_list");
        }
        if (this.storage.get("xiang_list")) {
            this.xiang_list = this.storage.get("xiang_list");
        }
        if (this.storage.get("flower_list")) {
            this.flower_list = this.storage.get("flower_list");
        }
        if (this.storage.get("fruit_list")) {
            this.fruit_list = this.storage.get("fruit_list");
        }
        if (this.storage.get("fo_index")) {
            this.fo_index = this.storage.get("fo_index");
        }
        if (this.storage.get("xiang_index")) {
            this.xiang_index = this.storage.get("xiang_index");
        }
        if (this.storage.get("flower_index")) {
            this.flower_index = this.storage.get("flower_index");
        }
        if (this.storage.get("fruit_index")) {
            this.fruit_index = this.storage.get("fruit_index");
        }
    };
    GongfoComponent.prototype.flower = function () {
        var _this = this;
        this.status = 2;
        var url = "/api/gongfo/flower";
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url).then(function (res) {
            console.log(res);
            _this.flower_list = res.data;
            console.log(_this.flower_list);
            _this.storage.set("flower_list", _this.flower_list);
        });
    };
    //换花
    GongfoComponent.prototype.flower_change = function (i) {
        this.flower_index = i;
        this.storage.set("flower_index", this.flower_index);
    };
    GongfoComponent.prototype.fo = function () {
        var _this = this;
        this.status = 1;
        var url = "/api/gongfo/fo";
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url).then(function (res) {
            console.log(res);
            _this.fo_list = res.data;
            _this.Listlength = res.data.length;
            console.log(_this.Listlength);
            _this.storage.set("fo_list", _this.fo_list);
        });
    };
    //下一个佛
    GongfoComponent.prototype.next = function () {
        this.fo_index++;
        if (this.fo_index == this.Listlength) {
            this.fo_index = 0;
        }
        this.storage.set("fo_index", this.fo_index);
    };
    //上一个佛
    GongfoComponent.prototype.pre = function () {
        this.fo_index--;
        if (this.fo_index < 0) {
            this.fo_index = this.Listlength - 1;
        }
        this.storage.set("fo_index", this.fo_index);
    };
    GongfoComponent.prototype.xiang = function () {
        var _this = this;
        this.status = 3;
        var url = "/api/gongfo/xiang";
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url).then(function (res) {
            console.log(res);
            _this.xiang_list = res.data;
            _this.storage.set("xiang_list", _this.xiang_list);
        });
    };
    //换香
    GongfoComponent.prototype.xiang_change = function (i) {
        this.xiang_index = i;
        this.storage.set("xiang_index", this.xiang_index);
    };
    GongfoComponent.prototype.fruit = function () {
        var _this = this;
        this.status = 4;
        var url = "/api/gongfo/fruit";
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url).then(function (res) {
            console.log(res);
            _this.fruit_list = res.data;
            _this.storage.set("fruit_list", _this.fruit_list);
        });
    };
    //换水果
    GongfoComponent.prototype.fruit_change = function (i) {
        this.fruit_index = i;
        this.storage.set("fruit_index", this.fruit_index);
    };
    GongfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gongfo',
            template: __webpack_require__(/*! ./gongfo.component.html */ "./src/app/components/gongfo/gongfo.component.html"),
            styles: [__webpack_require__(/*! ./gongfo.component.css */ "./src/app/components/gongfo/gongfo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
    ], GongfoComponent);
    return GongfoComponent;
}());



/***/ }),

/***/ "./src/app/components/gongfo/qifu/qifu.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/gongfo/qifu/qifu.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg{\n    width: 100%;\n    height: 100%;\n    background-image: url('u154.jpg');\n    position: fixed;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n textarea{\n    width: 64%;\n    height: 30%;\n    position: absolute;\n    top: 260px;\n    left: 18%;\n    background:rgba(0,0, 0, 0) ;\n    border-radius: 1em;\n    color: black;\n    border: 0px;\t\n}\n\n textarea::-webkit-input-placeholder{\n\tcolor: rgba(19, 18, 18, 0.884);\n}\n\n textarea::-ms-input-placeholder{\n\tcolor: rgba(19, 18, 18, 0.884);\n}\n\n textarea::placeholder{\n\tcolor: rgba(19, 18, 18, 0.884);\n}\n\n .voiceposition{\n\tposition:absolute;\n\tmax-width: 250px;\n\theight: 26px;\n\ttop: 470px;\n\tleft: 20%;\n}\n\n .time{\n\tfloat: right;\n\tcolor: white;\n}\n\n .voice{\n\tposition:absolute;\n\theight: 26px;\n\tmax-width: 220px;\n\tfloat: left;\n\ttext-align: center;\n\tbackground-color:rgb(123, 237, 159);\n\tborder-radius: 2px;\n}\n\n .voice:before {\n\tposition: absolute;\n\tleft: -16px;\n\ttop: 5px;\n\tcontent: '';\n\tdisplay: inline-block;\n\twidth: 0;\n\theight: 0;\n\tborder-style: solid;\n\tborder-width: 8px;\n\tborder-color: transparent  rgba(123, 237, 159, 0.85) transparent transparent;\n}\n\n .voice span {\n\t/* animation: wink 1s ease infinite; */\n\t/* color: rgba(255, 255, 255, 1); */\n\tcolor:rgba(0, 0, 0, 1);\n\tdisplay: inline-block;\n\t-webkit-transform-origin: center;\n\t        transform-origin: center;\n}\n\n .voice span:nth-child(3) {\n\t-webkit-transform: scale(1);\n\t        transform: scale(1);\n\tfont-weight: 400;\n}\n\n .voice span:nth-child(2) {\n\t-webkit-transform: scale(0.8);\n\t        transform: scale(0.8);\n\tfont-weight: 500;\n}\n\n .voice span:nth-child(1) {\n\t-webkit-transform: scale(0.5);\n\t        transform: scale(0.5);\n\tfont-weight: 700;\n}\n\n .phone-operate {\n\tposition: absolute;\n\tbottom: 8%;\n\tleft: 32%;\n\twidth: 150px;\n\theight: 40px;\n\tbackground-color: rgb(56, 56, 247);\n\tborder-radius: 1em;\n\tcolor: white;\n\tline-height: 40px;\n\ttext-align: center;\n\tcursor: pointer;\n\tfont-weight: bold;\n\tbox-shadow: 0 -1px 1px rgba(0, 0, 0, .1);\n}\n\n .phone-operate:active {\n\tbackground-color: #95a5a6;\n}\n\n .phone-operate:active:before {\n\tposition: absolute;\n\tleft: 50%;\n\t-webkit-transform: translate(-50%, 0);\n\t        transform: translate(-50%, 0);\n\ttop: -2px;\n\tcontent: '';\n\twidth: 0%;\n\theight: 2px;\n\tbackground-color: #7bed9f;\n\t-webkit-animation: loading 1s ease-in-out infinite backwards;\n\t        animation: loading 1s ease-in-out infinite backwards;\n}\n\n @-webkit-keyframes loading {\n\tfrom {\n\t\twidth: 0%;\n\t}\n\tto {\n\t\twidth: 90%;\n\t}\n}\n\n @keyframes loading {\n\tfrom {\n\t\twidth: 0%;\n\t}\n\tto {\n\t\twidth: 90%;\n\t}\n}\n\n @-webkit-keyframes wink {\n\tfrom {\n\t\tcolor: rgba(0, 0, 0, .9);\n\t}\n\tto {\n\t\tcolor: rgba(0, 0, 0, .1);\n\t}\n}\n\n @keyframes wink {\n\tfrom {\n\t\tcolor: rgba(0, 0, 0, .9);\n\t}\n\tto {\n\t\tcolor: rgba(0, 0, 0, .1);\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nb25nZm8vcWlmdS9xaWZ1LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlDQUEyRDtJQUMzRCxlQUFlO0lBQ2YsNEJBQTRCO0lBQzVCLHNCQUFzQjtBQUMxQjs7Q0FFQztJQUNHLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztBQUNmOztDQUVBO0NBQ0MsOEJBQThCO0FBQy9COztDQUZBO0NBQ0MsOEJBQThCO0FBQy9COztDQUZBO0NBQ0MsOEJBQThCO0FBQy9COztDQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1osVUFBVTtDQUNWLFNBQVM7QUFDVjs7Q0FFQTtDQUNDLFlBQVk7Q0FDWixZQUFZO0FBQ2I7O0NBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLG1DQUFtQztDQUNuQyxrQkFBa0I7QUFDbkI7O0NBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLFFBQVE7Q0FDUixXQUFXO0NBQ1gscUJBQXFCO0NBQ3JCLFFBQVE7Q0FDUixTQUFTO0NBQ1QsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQiw0RUFBNEU7QUFDN0U7O0NBRUE7Q0FDQyxzQ0FBc0M7Q0FDdEMsbUNBQW1DO0NBQ25DLHNCQUFzQjtDQUN0QixxQkFBcUI7Q0FDckIsZ0NBQXdCO1NBQXhCLHdCQUF3QjtBQUN6Qjs7Q0FFQTtDQUNDLDJCQUFtQjtTQUFuQixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0FBQ2pCOztDQUNBO0NBQ0MsNkJBQXFCO1NBQXJCLHFCQUFxQjtDQUNyQixnQkFBZ0I7QUFDakI7O0NBQ0E7Q0FDQyw2QkFBcUI7U0FBckIscUJBQXFCO0NBQ3JCLGdCQUFnQjtBQUNqQjs7Q0FFQTtDQUNDLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsU0FBUztDQUNULFlBQVk7Q0FDWixZQUFZO0NBQ1osa0NBQWtDO0NBQ2xDLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLHdDQUF3QztBQUN6Qzs7Q0FDQTtDQUNDLHlCQUF5QjtBQUMxQjs7Q0FDQTtDQUNDLGtCQUFrQjtDQUNsQixTQUFTO0NBQ1QscUNBQTZCO1NBQTdCLDZCQUE2QjtDQUM3QixTQUFTO0NBQ1QsV0FBVztDQUNYLFNBQVM7Q0FDVCxXQUFXO0NBQ1gseUJBQXlCO0NBQ3pCLDREQUFvRDtTQUFwRCxvREFBb0Q7QUFDckQ7O0NBRUE7Q0FDQztFQUNDLFNBQVM7Q0FDVjtDQUNBO0VBQ0MsVUFBVTtDQUNYO0FBQ0Q7O0NBUEE7Q0FDQztFQUNDLFNBQVM7Q0FDVjtDQUNBO0VBQ0MsVUFBVTtDQUNYO0FBQ0Q7O0NBQ0E7Q0FDQztFQUNDLHdCQUF3QjtDQUN6QjtDQUNBO0VBQ0Msd0JBQXdCO0NBQ3pCO0FBQ0Q7O0NBUEE7Q0FDQztFQUNDLHdCQUF3QjtDQUN6QjtDQUNBO0VBQ0Msd0JBQXdCO0NBQ3pCO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dvbmdmby9xaWZ1L3FpZnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2dvbmdmby91MTU0LmpwZ1wiKTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4gdGV4dGFyZWF7XG4gICAgd2lkdGg6IDY0JTtcbiAgICBoZWlnaHQ6IDMwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyNjBweDtcbiAgICBsZWZ0OiAxOCU7XG4gICAgYmFja2dyb3VuZDpyZ2JhKDAsMCwgMCwgMCkgO1xuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyOiAwcHg7XHRcbn1cblxudGV4dGFyZWE6OnBsYWNlaG9sZGVye1xuXHRjb2xvcjogcmdiYSgxOSwgMTgsIDE4LCAwLjg4NCk7XG59IFxuXG4udm9pY2Vwb3NpdGlvbntcblx0cG9zaXRpb246YWJzb2x1dGU7XG5cdG1heC13aWR0aDogMjUwcHg7XG5cdGhlaWdodDogMjZweDtcblx0dG9wOiA0NzBweDtcblx0bGVmdDogMjAlO1xufVxuXG4udGltZXtcblx0ZmxvYXQ6IHJpZ2h0O1xuXHRjb2xvcjogd2hpdGU7XG59XG5cbi52b2ljZXtcblx0cG9zaXRpb246YWJzb2x1dGU7XG5cdGhlaWdodDogMjZweDtcblx0bWF4LXdpZHRoOiAyMjBweDtcblx0ZmxvYXQ6IGxlZnQ7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0YmFja2dyb3VuZC1jb2xvcjpyZ2IoMTIzLCAyMzcsIDE1OSk7XG5cdGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLnZvaWNlOmJlZm9yZSB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0bGVmdDogLTE2cHg7XG5cdHRvcDogNXB4O1xuXHRjb250ZW50OiAnJztcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHR3aWR0aDogMDtcblx0aGVpZ2h0OiAwO1xuXHRib3JkZXItc3R5bGU6IHNvbGlkO1xuXHRib3JkZXItd2lkdGg6IDhweDtcblx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAgcmdiYSgxMjMsIDIzNywgMTU5LCAwLjg1KSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbn1cblxuLnZvaWNlIHNwYW4ge1xuXHQvKiBhbmltYXRpb246IHdpbmsgMXMgZWFzZSBpbmZpbml0ZTsgKi9cblx0LyogY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7ICovXG5cdGNvbG9yOnJnYmEoMCwgMCwgMCwgMSk7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0dHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xufVxuXG4udm9pY2Ugc3BhbjpudGgtY2hpbGQoMykge1xuXHR0cmFuc2Zvcm06IHNjYWxlKDEpO1xuXHRmb250LXdlaWdodDogNDAwO1xufVxuLnZvaWNlIHNwYW46bnRoLWNoaWxkKDIpIHtcblx0dHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuXHRmb250LXdlaWdodDogNTAwO1xufVxuLnZvaWNlIHNwYW46bnRoLWNoaWxkKDEpIHtcblx0dHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuXHRmb250LXdlaWdodDogNzAwO1xufVxuXG4ucGhvbmUtb3BlcmF0ZSB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ym90dG9tOiA4JTtcblx0bGVmdDogMzIlO1xuXHR3aWR0aDogMTUwcHg7XG5cdGhlaWdodDogNDBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDU2LCA1NiwgMjQ3KTtcblx0Ym9yZGVyLXJhZGl1czogMWVtO1xuXHRjb2xvcjogd2hpdGU7XG5cdGxpbmUtaGVpZ2h0OiA0MHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdGJveC1zaGFkb3c6IDAgLTFweCAxcHggcmdiYSgwLCAwLCAwLCAuMSk7XG59XG4ucGhvbmUtb3BlcmF0ZTphY3RpdmUge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjOTVhNWE2O1xufVxuLnBob25lLW9wZXJhdGU6YWN0aXZlOmJlZm9yZSB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0bGVmdDogNTAlO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcblx0dG9wOiAtMnB4O1xuXHRjb250ZW50OiAnJztcblx0d2lkdGg6IDAlO1xuXHRoZWlnaHQ6IDJweDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzdiZWQ5Zjtcblx0YW5pbWF0aW9uOiBsb2FkaW5nIDFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGJhY2t3YXJkcztcbn1cblxuQGtleWZyYW1lcyBsb2FkaW5nIHtcblx0ZnJvbSB7XG5cdFx0d2lkdGg6IDAlO1xuXHR9XG5cdHRvIHtcblx0XHR3aWR0aDogOTAlO1xuXHR9XG59XG5Aa2V5ZnJhbWVzIHdpbmsge1xuXHRmcm9tIHtcblx0XHRjb2xvcjogcmdiYSgwLCAwLCAwLCAuOSk7XG5cdH1cblx0dG8ge1xuXHRcdGNvbG9yOiByZ2JhKDAsIDAsIDAsIC4xKTtcblx0fVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/gongfo/qifu/qifu.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/gongfo/qifu/qifu.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg\">\n  <audio id=\"audio\"></audio>\n  <div class=\"voiceposition\" id=\"voiceposition\">\n    <div *ngIf=\"!ishide\" class=\"voice\" id=\"voice\" (click)=\"play()\">\n      <span class=\"span\">)</span><span class=\"span\">)</span><span class=\"span\">)</span>\n    </div>\n    <span class=\"time\" id=\"time\"></span>\n  </div>\n  <textarea placeholder=\"向佛祖说出你的愿望。。。\" [(ngModel)]=\"text\"></textarea>\n  <div id=\"btntext\" class=\"phone-operate\" (touchstart)=\"gtouchstart()\" (touchmove)=\"gtouchmove()\" (touchend)=\"gtouchend()\"\n    ng-model=\"btnText\">{{btnText}}</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/gongfo/qifu/qifu.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/gongfo/qifu/qifu.component.ts ***!
  \**********************************************************/
/*! exports provided: QifuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QifuComponent", function() { return QifuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



 //引入第三方模块进行数据请求
var QifuComponent = /** @class */ (function () {
    function QifuComponent(render2) {
        this.render2 = render2;
        this.chunks = [];
        this.chunkList = {
            duration: 0,
            stream: ''
        };
        this.btnText = '按住说话';
        this.ishide = true;
        this.text = '123';
        this.timeOutEvent = 0; //定时器   
    }
    QifuComponent.prototype.ngOnInit = function () {
        this.mounted();
    };
    QifuComponent.prototype.requestAudioAccess = function () {
        var _this = this;
        navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
            _this.recorder = new window.MediaRecorder(stream);
            _this.bindEvents();
        }, function (error) {
            alert('出错，请确保已允许浏览器获取录音权限');
        });
    };
    //开始按   
    QifuComponent.prototype.gtouchstart = function () {
        var _this = this;
        document.getElementById('btntext').innerHTML = '松开结束';
        this.timeOutEvent = window.setTimeout(function () {
            _this.timeOutEvent = 0;
            //执行长按要执行的内容，如弹出菜单   
            console.log("长按事件触发发");
            _this.onStart();
        }, 500); //这里设置定时器，定义长按500毫秒触发长按事件，时间可以自己改，个人感觉500毫秒非常合适   
        document.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        });
    };
    ;
    //手释放，如果在500毫秒内就释放，则取消长按事件，此时可以执行onclick应该执行的事件   
    QifuComponent.prototype.gtouchend = function () {
        document.getElementById('btntext').innerHTML = '开始录音';
        this.onStop();
        clearTimeout(this.timeOutEvent); //清除定时器  
        if (this.timeOutEvent != 0) {
            //这里写要执行的内容（尤如onclick事件）   
            console.log("你这是点击，不是长按");
        }
        this.ishide = false;
    };
    ;
    //如果手指有移动，则取消所有事件，此时说明用户只是要移动而不是长按   
    QifuComponent.prototype.gtouchmove = function () {
        clearTimeout(this.timeOutEvent); //清除定时器   
    };
    ;
    QifuComponent.prototype.onStart = function () {
        this.recorder.start();
    };
    QifuComponent.prototype.onStop = function () {
        this.recorder.stop();
    };
    QifuComponent.prototype.play = function () {
        console.log(this.chunkList);
        var audio = this.render2.selectRootElement("#audio");
        audio.src = this.chunkList.stream;
        audio.play();
        var x = document.getElementsByClassName("span");
        var _loop_1 = function (i) {
            x[i].style.animation = "wink " + 1 + "s ease infinite";
            window.setTimeout(function () { x[i].style.animationPlayState = "running"; }, 0);
            window.setTimeout(function () { x[i].style.animationPlayState = "paused"; }, this_1.chunkList.duration * 1000 - 1);
        };
        var this_1 = this;
        for (var i = 0; i < 3; i++) {
            _loop_1(i);
        }
    };
    QifuComponent.prototype.bindEvents = function () {
        var _this = this;
        this.recorder.ondataavailable = function (e) {
            _this.chunks.push(e.data);
            console.log(e);
            console.log(_this.chunks);
        };
        this.recorder.onstop = function () {
            console.log(_this.chunks);
            //let blob = new Blob(this.chunks, { 'type': 'audio/ogg; codecs=opus' }),
            var blob = new Blob(_this.chunks, { 'type': 'audio; codecs=opus' }), 
            //let blob = new Blob(this.chunks, { 'type': 'audio/mpeg; codecs=opus' }),
            audioStream = URL.createObjectURL(blob), 
            //估算时长
            duration = Math.round(blob.size / 6600);
            console.log(blob);
            if (duration <= 0) {
                //alert('说话时间太短');
                return;
            }
            if (duration > 60) {
                duration = 60;
            }
            _this.chunkList = { duration: duration, stream: audioStream };
            _this.chunks = [];
            document.getElementById('voiceposition').style.width = (_this.chunkList.duration * 20 + 30) + 'px'; //更新录音框外层div的宽度
            document.getElementById('time').innerHTML = String(_this.chunkList.duration) + '"'; //更新录音时长
            document.getElementById('voice').style.width = _this.chunkList.duration * 20 + 'px'; //更新录音框宽度
            console.log(_this.chunkList);
            //上传文件
            var formData = new FormData();
            formData.append('file', blob, 'voice.mp3');
            console.log(formData);
            var that = _this;
            axios__WEBPACK_IMPORTED_MODULE_2___default()({
                method: 'post',
                // url: '/api/gongfo/qifu',
                url: 'http://buddhism.cst.ifeel.vip:9000/gongfo/qifu',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(function (res) {
                console.log('上传成功！');
                console.log(res.data);
                that.text = res.data;
            })
                .catch(function (err) {
                console.log('上传失败！');
                that.text = "请求失败";
            });
        };
    };
    QifuComponent.prototype.mounted = function () {
        if (!navigator.mediaDevices) {
            alert('您的浏览器不支持获取用户设备');
            return;
        }
        if (!window.MediaRecorder) {
            alert('您的浏览器不支持录音');
            return;
        }
        this.audio = this.render2.selectRootElement("#audio");
        this.requestAudioAccess();
    };
    QifuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-qifu',
            template: __webpack_require__(/*! ./qifu.component.html */ "./src/app/components/gongfo/qifu/qifu.component.html"),
            styles: [__webpack_require__(/*! ./qifu.component.css */ "./src/app/components/gongfo/qifu/qifu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], QifuComponent);
    return QifuComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\n    background-image: url('home-bg.jpg');\n    height: 100%;\n    width: 100%;\n    background-size: 100%;\n}\n\n\n/* 底部功能按键 */\n\n\n.nav {\n    display: flex;\n    flex-direction: column;\n    position: fixed;\n    bottom: 3%;\n    width: 100%;\n}\n\n\n.nav-line {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n}\n\n\n.nav-line a {\n    display: flex;\n    justify-content: center;\n    padding: 5px;\n    width: 35%;\n}\n\n\nbutton {\n    width: 100%;\n    height: 50px;\n    border-radius: 25px;\n    margin: 0 5px;\n    font-size: 20px;\n    font-weight: 700;\n    color: #666666;\n    /* 去除button默认外边框 */\n    outline: 0;\n    border: 1px solid rgba(255, 204, 0, 1);\n    background-color: rgba(255, 204, 0, 1);\n    box-shadow: 5px 5px 5px rgb(156, 156, 156)\n}\n\n\n/* 弹窗 */\n\n\napp-modal .modal-context {\n    height: 100%;\n    display: flex;\n    align-items: center\n}\n\n\n.modal-context div {\n    width: 100%\n}\n\n\napp-modal div a {\n    width: 100%;\n    margin: 15px auto;\n    display: flex;\n    justify-content: center;\n}\n\n\n.body button {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n}\n\n\n.icon {\n    width: 40px;\n    height: 40px;\n}\n\n\n.body button div {\n    margin: 0px 5px\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvRDtJQUNwRCxZQUFZO0lBQ1osV0FBVztJQUNYLHFCQUFxQjtBQUN6Qjs7O0FBR0EsV0FBVzs7O0FBRVg7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixVQUFVO0lBQ1YsV0FBVztBQUNmOzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFVBQVU7QUFDZDs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBQ3RDO0FBQ0o7OztBQUdBLE9BQU87OztBQUVQO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYjtBQUNKOzs7QUFFQTtJQUNJO0FBQ0o7OztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7O0FBRUE7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaG9tZS1iZy5qcGdcIik7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbn1cblxuXG4vKiDlupXpg6jlip/og73mjInplK4gKi9cblxuLm5hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDMlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubmF2LWxpbmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm5hdi1saW5lIGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHdpZHRoOiAzNSU7XG59XG5cbmJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgbWFyZ2luOiAwIDVweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzY2NjY2NjtcbiAgICAvKiDljrvpmaRidXR0b27pu5jorqTlpJbovrnmoYYgKi9cbiAgICBvdXRsaW5lOiAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyMDQsIDAsIDEpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMDQsIDAsIDEpO1xuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYigxNTYsIDE1NiwgMTU2KVxufVxuXG5cbi8qIOW8ueeqlyAqL1xuXG5hcHAtbW9kYWwgLm1vZGFsLWNvbnRleHQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcbn1cblxuLm1vZGFsLWNvbnRleHQgZGl2IHtcbiAgICB3aWR0aDogMTAwJVxufVxuXG5hcHAtbW9kYWwgZGl2IGEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMTVweCBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ib2R5IGJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pY29uIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5ib2R5IGJ1dHRvbiBkaXYge1xuICAgIG1hcmdpbjogMHB4IDVweFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 在ts文件定义高度，传入弹窗组件，默认高度为25% -->\r\n<app-modal [height]=\"height\" #modal>\r\n\t<div class=\"modal-context\">\r\n\t\t<div>\r\n\t\t\t<a [routerLink]=\"[ '/suanming' ]\">\r\n\t\t\t\t<button style=\"width:50%\">\r\n\t\t\t\t\t<div>生辰八字</div>\r\n\t\t\t\t</button>\r\n\t\t\t</a>\r\n\t\t\t<a [routerLink]=\"[ '/qiuqian' ]\">\r\n\t\t\t\t<button style=\"width:50%\">\r\n\t\t\t\t\t<div>求签卜卦</div>\r\n\t\t\t\t</button>\r\n\t\t\t</a>\r\n\t\t</div>\r\n\t</div>\r\n</app-modal>\r\n\r\n<div class=\"body\">\r\n\t<div class=\"nav\">\r\n\t\t<div class=\"nav-line\">\r\n\t\t\t<a (click)=\"modal.open()\">\r\n\t\t\t\t<button>\n\t\t\t\t\t<img class=\"icon\" src=\"/assets/icon/jiehuo.png\">\r\n\t\t\t\t\t<div>解惑</div>\r\n\t\t\t\t</button>\r\n\t\t\t</a>\r\n\t\t\t<a [routerLink]=\"[ '/gongfo' ]\">\r\n\t\t\t\t<button>\n\t\t\t\t\t<img class=\"icon\" src=\"/assets/icon/gongfo.png\">\r\n\t\t\t\t\t<div>供佛</div>\r\n\t\t\t\t</button>\r\n\t\t\t</a>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"nav-line\">\r\n\t\t\t<a [routerLink]=\"[ '/xiuxing' ]\">\r\n\t\t\t\t<button>\n\t\t\t\t\t<img class=\"icon\" src=\"/assets/icon/xiuxing.png\">\r\n\t\t\t\t\t<div>修行</div>\r\n\t\t\t\t</button>\r\n\t\t\t</a>\r\n\t\t\t<a [routerLink]=\"[ '/gongde' ]\">\r\n\t\t\t\t<button>\n\t\t\t\t\t<img class=\"icon\" src=\"/assets/icon/gongde.png\">\r\n\t\t\t\t\t<div>功德</div>\r\n\t\t\t\t</button>\r\n\t\t\t</a>\r\n\t\t</div>\r\n\r\n\t</div>\r\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        // 弹窗高度
        this.height = "25%";
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/qiuqian/jieqian/jieqian.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/qiuqian/jieqian/jieqian.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    position: absolute;\n    background-image: url('jieguo.jpg');\n    background-size:100% 100%;\n    background-repeat:no-repeat;\n    background-attachment:fixed;\n    width:100%;\n    height: 100%;\n          \n                \n}\n.container{\n    position: fixed;\n    background-image: url('jieguo.jpg');\n    background-size:100% 100%;\n    background-repeat:no-repeat;\n    background-attachment:fixed;\n    width:100%;\n    height: 100%;\n          \n                \n}\n.p1{\n    position: relative;\n    top: 3%;\n    width: 100%;\n    text-align: center;\n    font-size:30px;\n    color:rgb(221, 188, 127);\n    font-weight:bold;\n    text-shadow: 2px 2px 2px rgb(180, 48, 81);\n}\n.jieguo{\n    position: relative;\n    top: 3%;\n    width: 100%;\n    color:white;\n    margin-left: 5%;\n    font-size:22px;\n}\n.p2{\n    position: absolute;\n    bottom: 2%;\n    left: 30%;\n    width: 40%;\n    text-align: center;\n    font-size:40px;\n    background-color: white;\n    color:rgb(216, 183, 122);\n    border-radius: 20px;\n\n\n}\n.span{\n\n    font-size:24px;\n    font-weight:bold;\n}\n.div1{\n    position: relative;\n    top: 3%;\n    width: 80%;\n    color:white;\n    margin-left:5%;\n    font-size:24px;\n    font-weight:bold;\n\n}\n.div2{\n    position: relative;\n    top: 3%;\n    width: 80%;\n    color:white;\n    margin-left:5%;\n    font-size:24px;\n    font-weight:bold;\n   \n\n}\n.p1{\n    position: relative;\n    top: 3%;\n    width: 100%;\n    text-align: center;\n    font-size:30px;\n    color:rgb(221, 188, 127);\n    font-weight:bold;\n    text-shadow: 2px 2px 2px rgb(180, 48, 81);\n}\n.jieguo{\n    position: relative;\n    top: 3%;\n    width: 100%;\n    color:white;\n    margin-left: 5%;\n    font-size:22px;\n}\n.p2{\n    position: absolute;\n    bottom: 2%;\n    left: 30%;\n    width: 40%;\n    text-align: center;\n    font-size:40px;\n    background-color: white;\n    color:rgb(216, 183, 122);\n    border-radius: 20px;\n\n\n}\n.span{\n\n    font-size:24px;\n    font-weight:bold;\n}\n.div1{\n    position: relative;\n    top: 3%;\n    width: 80%;\n    color:white;\n    margin-left:5%;\n    font-size:24px;\n    font-weight:bold;\n\n}\n.div2{\n    position: relative;\n    top: 3%;\n    width: 80%;\n    color:white;\n    margin-left:5%;\n    font-size:24px;\n    font-weight:bold;\n   \n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9xaXVxaWFuL2ppZXFpYW4vamllcWlhbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1DQUE4RDtJQUM5RCx5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQixVQUFVO0lBQ1YsWUFBWTs7O0FBR2hCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsbUNBQThEO0lBQzlELHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLFVBQVU7SUFDVixZQUFZOzs7QUFHaEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQix5Q0FBeUM7QUFDN0M7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixtQkFBbUI7OztBQUd2QjtBQUNBOztJQUVJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsVUFBVTtJQUNWLFdBQVc7SUFDWCxjQUFjO0lBQ2QsY0FBYztJQUNkLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsVUFBVTtJQUNWLFdBQVc7SUFDWCxjQUFjO0lBQ2QsY0FBYztJQUNkLGdCQUFnQjs7O0FBR3BCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIseUNBQXlDO0FBQzdDO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsbUJBQW1COzs7QUFHdkI7QUFDQTs7SUFFSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFVBQVU7SUFDVixXQUFXO0lBQ1gsY0FBYztJQUNkLGNBQWM7SUFDZCxnQkFBZ0I7O0FBRXBCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFVBQVU7SUFDVixXQUFXO0lBQ1gsY0FBYztJQUNkLGNBQWM7SUFDZCxnQkFBZ0I7OztBQUdwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcWl1cWlhbi9qaWVxaWFuL2ppZXFpYW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3FpdXFpYW4vamllZ3VvLmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZToxMDAlIDEwMCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDpmaXhlZDtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbn1cbi5jb250YWluZXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3FpdXFpYW4vamllZ3VvLmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZToxMDAlIDEwMCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDpmaXhlZDtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbn1cblxuLnAxe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDMlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6MzBweDtcbiAgICBjb2xvcjpyZ2IoMjIxLCAxODgsIDEyNyk7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggcmdiKDE4MCwgNDgsIDgxKTtcbn1cbi5qaWVndW97XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMyU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIGZvbnQtc2l6ZToyMnB4O1xufVxuLnAye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDIlO1xuICAgIGxlZnQ6IDMwJTtcbiAgICB3aWR0aDogNDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6NDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjpyZ2IoMjE2LCAxODMsIDEyMik7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcblxuXG59XG4uc3BhbntcblxuICAgIGZvbnQtc2l6ZToyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG59XG4uZGl2MXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAzJTtcbiAgICB3aWR0aDogODAlO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OjUlO1xuICAgIGZvbnQtc2l6ZToyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG5cbn1cbi5kaXYye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDMlO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6NSU7XG4gICAgZm9udC1zaXplOjI0cHg7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgIFxuXG59XG4ucDF7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMyU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTozMHB4O1xuICAgIGNvbG9yOnJnYigyMjEsIDE4OCwgMTI3KTtcbiAgICBmb250LXdlaWdodDpib2xkO1xuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDJweCByZ2IoMTgwLCA0OCwgODEpO1xufVxuLmppZWd1b3tcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAzJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgZm9udC1zaXplOjIycHg7XG59XG4ucDJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMiU7XG4gICAgbGVmdDogMzAlO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTo0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOnJnYigyMTYsIDE4MywgMTIyKTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuXG5cbn1cbi5zcGFue1xuXG4gICAgZm9udC1zaXplOjI0cHg7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbn1cbi5kaXYxe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDMlO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6NSU7XG4gICAgZm9udC1zaXplOjI0cHg7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcblxufVxuLmRpdjJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMyU7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDo1JTtcbiAgICBmb250LXNpemU6MjRweDtcbiAgICBmb250LXdlaWdodDpib2xkO1xuICAgXG5cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/qiuqian/jieqian/jieqian.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/qiuqian/jieqian/jieqian.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- <img  class=\"img\" src=\"assets/imgs/jieguo.jpg\"  > -->\n  <p class=\"p1\">观音灵签</p>\n  <div class=\"jieguo\">\n    <p>您刚才抽得<span style=\"color:rgb(185, 226, 34)\">观音灵签第<span class=\"span\" >{{qiuqian.numbers}}</span>签！</span></p>\n    <p style=\" font-weight:bold;\">{{qiuqian.types}}</p>\n    <p style=\"color:rgb(241, 228, 207)\">签语：</p>\n    <div class=\"div1\">{{qiuqian.qianyu}}</div>\n    <p style=\"color:rgb(241, 228, 207)\">解签：</p>\n    <div class=\"div2\">{{qiuqian.jieqian}}</div>\n   \n  </div>  \n  <p class=\"p2\" (click)=\"suanmi()\">算一卦</p>\n\n</div>"

/***/ }),

/***/ "./src/app/components/qiuqian/jieqian/jieqian.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/qiuqian/jieqian/jieqian.component.ts ***!
  \*****************************************************************/
/*! exports provided: JieqianComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JieqianComponent", function() { return JieqianComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var JieqianComponent = /** @class */ (function () {
    function JieqianComponent(router, http) {
        this.router = router;
        this.http = http;
        this.qiuqian = {};
    }
    JieqianComponent.prototype.ngOnInit = function () {
        var _this = this;
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': "application/x-www-form-urlencoded" }) };
        var api = "/api/jieqian";
        this.http.post(api, '1', httpOptions).subscribe(function (response) {
            _this.qiuqian = response;
            console.log(_this.qiuqian);
        });
    };
    JieqianComponent.prototype.suanmi = function () {
        this.router.navigate(['suanming']);
    };
    JieqianComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jieqian',
            template: __webpack_require__(/*! ./jieqian.component.html */ "./src/app/components/qiuqian/jieqian/jieqian.component.html"),
            styles: [__webpack_require__(/*! ./jieqian.component.css */ "./src/app/components/qiuqian/jieqian/jieqian.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], JieqianComponent);
    return JieqianComponent;
}());



/***/ }),

/***/ "./src/app/components/qiuqian/qiuqian.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/qiuqian/qiuqian.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".p1{\n    position: absolute;\n    top:6%;\n    text-align: center;\n    left: 0;\n    right: 0;\n    font-size:32px;\n    color:rgb(73, 87, 87);\n    font-family:\"STXingkai\";\n\n}\n.img{\n    position:absolute;\n    top:40%;\n    left:35%;\n    width:30%;\n    height:40%;\n    -webkit-animation:0;\n            animation:0;\n}\n@-webkit-keyframes mymove\n{\n    0% {-webkit-transform:  translate(0px) rotate(0deg);transform:  translate(0px) rotate(0deg);}\n    25% {-webkit-transform: translateY(15px)  rotate(38deg);transform: translateY(15px)  rotate(38deg);}\n    75% {-webkit-transform:  translate(-13px) rotate(-15deg);transform:  translate(-13px) rotate(-15deg);}\n    100% {-webkit-transform: translate(3px) rotate(0deg);transform: translate(3px) rotate(0deg);}\n}\n@keyframes mymove\n{\n    0% {-webkit-transform:  translate(0px) rotate(0deg);transform:  translate(0px) rotate(0deg);}\n    25% {-webkit-transform: translateY(15px)  rotate(38deg);transform: translateY(15px)  rotate(38deg);}\n    75% {-webkit-transform:  translate(-13px) rotate(-15deg);transform:  translate(-13px) rotate(-15deg);}\n    100% {-webkit-transform: translate(3px) rotate(0deg);transform: translate(3px) rotate(0deg);}\n}\n.p2{\n    position: absolute;\n    bottom:4%;\n    left: 30%;\n    width: 40%;\n    text-align: center;\n    font-size:40px;\n    background-color: rgb(216, 203, 25);\n    color:rgb(73, 87, 87);\n    border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9xaXVxaWFuL3FpdXFpYW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1IsY0FBYztJQUNkLHFCQUFxQjtJQUNyQix1QkFBdUI7O0FBRTNCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtJQUNWLG1CQUFXO1lBQVgsV0FBVztBQUNmO0FBQ0E7O0lBRUksSUFBSSwrQ0FBdUMsQ0FBdkMsdUNBQXVDLENBQUM7SUFDNUMsS0FBSyxrREFBMEMsQ0FBMUMsMENBQTBDLENBQUM7SUFDaEQsS0FBSyxtREFBMkMsQ0FBM0MsMkNBQTJDLENBQUM7SUFDakQsTUFBTSw4Q0FBc0MsQ0FBdEMsc0NBQXNDLENBQUM7QUFDakQ7QUFOQTs7SUFFSSxJQUFJLCtDQUF1QyxDQUF2Qyx1Q0FBdUMsQ0FBQztJQUM1QyxLQUFLLGtEQUEwQyxDQUExQywwQ0FBMEMsQ0FBQztJQUNoRCxLQUFLLG1EQUEyQyxDQUEzQywyQ0FBMkMsQ0FBQztJQUNqRCxNQUFNLDhDQUFzQyxDQUF0QyxzQ0FBc0MsQ0FBQztBQUNqRDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTO0lBQ1QsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsbUNBQW1DO0lBQ25DLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3FpdXFpYW4vcWl1cWlhbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnAxe1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6NiU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgZm9udC1zaXplOjMycHg7XG4gICAgY29sb3I6cmdiKDczLCA4NywgODcpO1xuICAgIGZvbnQtZmFtaWx5OlwiU1RYaW5na2FpXCI7XG5cbn1cbi5pbWd7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgdG9wOjQwJTtcbiAgICBsZWZ0OjM1JTtcbiAgICB3aWR0aDozMCU7XG4gICAgaGVpZ2h0OjQwJTtcbiAgICBhbmltYXRpb246MDtcbn1cbkBrZXlmcmFtZXMgbXltb3ZlXG57XG4gICAgMCUge3RyYW5zZm9ybTogIHRyYW5zbGF0ZSgwcHgpIHJvdGF0ZSgwZGVnKTt9XG4gICAgMjUlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTVweCkgIHJvdGF0ZSgzOGRlZyk7fVxuICAgIDc1JSB7dHJhbnNmb3JtOiAgdHJhbnNsYXRlKC0xM3B4KSByb3RhdGUoLTE1ZGVnKTt9XG4gICAgMTAwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGUoM3B4KSByb3RhdGUoMGRlZyk7fVxufVxuLnAye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206NCU7XG4gICAgbGVmdDogMzAlO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTo0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDIwMywgMjUpO1xuICAgIGNvbG9yOnJnYig3MywgODcsIDg3KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/qiuqian/qiuqian.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/qiuqian/qiuqian.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div style=\"position: fixed; width:100%; height: 100%;background-image: url('../../../../assets/qiuqian/yaoyiyao.jpg');background-size:100% 100%;background-repeat:no-repeat;background-attachment:fixed;\">\n    <p class=\"p1\">佛祖在上&nbsp;&nbsp;心诚则灵</p>\n    <img  class=\"img\" id=\"img\" src=\"assets/qiuqian/qian.png\"  [ngStyle]=\"{'animation': kongzhidonghuaxiaoguo=='1'?'mymove.6s linear infinite alternate':'0'}\">\n    <p class=\"p2\" (click)=\"jieqian()\" >求一签</p>\n</div>"

/***/ }),

/***/ "./src/app/components/qiuqian/qiuqian.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/qiuqian/qiuqian.component.ts ***!
  \*********************************************************/
/*! exports provided: QiuqianComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QiuqianComponent", function() { return QiuqianComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var QiuqianComponent = /** @class */ (function () {
    function QiuqianComponent(router) {
        this.router = router;
        this.kongzhidonghuaxiaoguo = ''; //控制动画样式
        this.playData1 = {
            Url: '../../../../assets/qiuqian/yaoyiyao.mp3'
        };
        this.playData2 = {
            Url: '../../../../assets/qiuqian/jieguo.mp3'
        };
        this._audio1 = document.createElement("audio");
        this._audio1.src = this.playData1.Url;
        this._audio2 = document.createElement("audio");
        this._audio2.src = this.playData2.Url;
    }
    QiuqianComponent.prototype.ngOnInit = function () {
    };
    QiuqianComponent.prototype.jieqian = function () {
        var _this = this;
        var element = document.getElementById('img');
        element.src = "assets/qiuqian/qian.gif";
        this.kongzhidonghuaxiaoguo = '1';
        this._audio1.play();
        setTimeout(function () {
            _this.router.navigate(['jieqian']);
            _this._audio2.play();
        }, 1500);
        //2s动画，然后跳到解签界面
    };
    QiuqianComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-qiuqian',
            template: __webpack_require__(/*! ./qiuqian.component.html */ "./src/app/components/qiuqian/qiuqian.component.html"),
            styles: [__webpack_require__(/*! ./qiuqian.component.css */ "./src/app/components/qiuqian/qiuqian.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], QiuqianComponent);
    return QiuqianComponent;
}());



/***/ }),

/***/ "./src/app/components/welcome/welcome.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/welcome/welcome.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#renderCanvas {\n    width: 100%;\n    height: 100%;\n    touch-action: none;\n}\n\n.play-control {\n    position: fixed;\n    top: 20px;\n    right: 20px;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    background: rgba(172, 170, 170, 0.8);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.play-control img {\n    width: 40px;\n    height: 40px;\n}\n\n.enter {\n    position: fixed;\n    bottom: 40px;\n    right: 0;\n    left: 0;\n    margin: 0 35%;\n    padding: 10px;\n    border-radius: 10px;\n    background: rgba(255, 204, 0, 1);\n    color: rgb(240, 238, 238);\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFFBQVE7SUFDUixPQUFPO0lBQ1AsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0NBQWdDO0lBQ2hDLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3JlbmRlckNhbnZhcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRvdWNoLWFjdGlvbjogbm9uZTtcbn1cblxuLnBsYXktY29udHJvbCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMjBweDtcbiAgICByaWdodDogMjBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTcyLCAxNzAsIDE3MCwgMC44KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wbGF5LWNvbnRyb2wgaW1nIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5lbnRlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogNDBweDtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIG1hcmdpbjogMCAzNSU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMDQsIDAsIDEpO1xuICAgIGNvbG9yOiByZ2IoMjQwLCAyMzgsIDIzOCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/welcome/welcome.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/welcome/welcome.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<canvas id=\"renderCanvas\"></canvas>\n\n<div class=\"play-control\">\n    <img (click)=\"playMusic()\" src=\"{{src}}\">\n</div>\n\n\n<a class=\"enter\" [routerLink]=\"[ '/home']\">点击进入</a>"

/***/ }),

/***/ "./src/app/components/welcome/welcome.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/welcome/welcome.component.ts ***!
  \*********************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_components_xiuxing_foyin_service_audio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/xiuxing/foyin/service/audio.service */ "./src/app/components/xiuxing/foyin/service/audio.service.ts");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_3__);




var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(audio) {
        this.audio = audio;
        this.src = "/assets/icon/play.png";
        this.playing = true;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        this.buddhism();
        this.playList = this.audio.PlayList();
        this.playData = this.audio.PlayData();
        this.audio.Next();
        this.audio.Prev();
    };
    // 点击播放和暂停背景音乐
    WelcomeComponent.prototype.playMusic = function () {
        if (this.playing) {
            this.src = "/assets/icon/abort.png";
            this.abort();
        }
        else {
            this.src = "/assets/icon/play.png";
            this.play();
        }
        this.playing = !this.playing;
    };
    // 播放音乐
    WelcomeComponent.prototype.play = function () {
        this.audio.Toggle();
    };
    // 暂停音乐
    WelcomeComponent.prototype.abort = function () {
        this.audio.Toggle();
    };
    // 引擎(engine), 场景(scene), 花布(canvas), 网格(mesh), 光源(light), 相机(camera),
    // 三元向量(Vector3), 三元颜色(Color3), 动作管理器(ActionManager), 和动画(Animation)
    WelcomeComponent.prototype.buddhism = function () {
        // 获得canvas元素
        var canvas = document.getElementById("renderCanvas");
        // 使用该canvas元素创建babylon渲染引擎
        var engine = new babylonjs__WEBPACK_IMPORTED_MODULE_3__["Engine"](canvas, true, { preserveDrawingBuffer: true, stencil: true });
        var createScene = function () {
            // 创建一个基本的Scene对象，用于容纳其它对象 
            var scene = new babylonjs__WEBPACK_IMPORTED_MODULE_3__["Scene"](engine);
            // scene.clearColor = new BABYLON.Color4(0, 191, 255);
            // 添加半球光源，由上往下照射
            var light = new babylonjs__WEBPACK_IMPORTED_MODULE_3__["HemisphericLight"]("Hemi", new babylonjs__WEBPACK_IMPORTED_MODULE_3__["Vector3"](0, 1, 0), scene);
            // 创建弧度旋转相机  参数：纵向旋转角度alpha、横向旋转角度beta、半径、目标位置、所属场景
            var camera = new babylonjs__WEBPACK_IMPORTED_MODULE_3__["ArcRotateCamera"]("Camera", -0.3, 1.5, 100, new babylonjs__WEBPACK_IMPORTED_MODULE_3__["Vector3"](0, 15, 2), scene);
            // 相机与画布关联，可以控制场景视角变化
            camera.attachControl(canvas, true);
            // 导入3D网格素材，第一个参数 "" 表示导入的所有网格，rootUrl、sceneFilename
            babylonjs__WEBPACK_IMPORTED_MODULE_3__["SceneLoader"].ImportMesh("", "/assets/babylon/", "buddhism.babylon", scene, function (newMeshes) {
                // 获取返回的网格
                var buddhism = newMeshes[0];
                // 简单上色参考
                var Material = new babylonjs__WEBPACK_IMPORTED_MODULE_3__["StandardMaterial"]("groundMaterial", scene);
                Material.diffuseColor = new babylonjs__WEBPACK_IMPORTED_MODULE_3__["Color3"](1, 0.9, 0.1);
                buddhism.material = Material;
                //创建一个立方体，取消背面剔除
                var skybox = babylonjs__WEBPACK_IMPORTED_MODULE_3__["Mesh"].CreateBox("skyBox", 1000, scene);
                var skyboxMaterial = new babylonjs__WEBPACK_IMPORTED_MODULE_3__["StandardMaterial"]("skyBox", scene);
                skyboxMaterial.backFaceCulling = false;
                skyboxMaterial.disableLighting = true;
                skybox.material = skyboxMaterial;
                //设置infiniteDistance属性,让天空盒随我们的相机移动
                skybox.infiniteDistance = true;
                //移除立方体上所有的光线反射(太阳光不在天空里反射!)
                skyboxMaterial.disableLighting = true;
                //特殊天空纹理贴到立方体上
                skyboxMaterial.reflectionTexture = new babylonjs__WEBPACK_IMPORTED_MODULE_3__["CubeTexture"]("/assets/babylon/riverside", scene);
                skyboxMaterial.reflectionTexture.coordinatesMode = babylonjs__WEBPACK_IMPORTED_MODULE_3__["Texture"].SKYBOX_MODE;
            });
            var sphere = babylonjs__WEBPACK_IMPORTED_MODULE_3__["MeshBuilder"].CreateSphere("sphere", { diameter: 3 }, scene);
            // 添加高亮层.
            var hl = new babylonjs__WEBPACK_IMPORTED_MODULE_3__["HighlightLayer"]("hl1", scene);
            hl.addMesh(sphere, babylonjs__WEBPACK_IMPORTED_MODULE_3__["Color3"].White());
            sphere.position.x = 4;
            sphere.position.y = 11;
            sphere.position.z = 0.5;
            return scene;
        };
        var scene = createScene();
        // 持续渲染场景
        engine.runRenderLoop(function () {
            if (scene) {
                scene.render();
            }
        });
        // 建监听事件使得场景自适应屏幕大小变化
        window.addEventListener("resize", function () {
            engine.resize();
        });
    };
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/components/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/components/welcome/welcome.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_components_xiuxing_foyin_service_audio_service__WEBPACK_IMPORTED_MODULE_2__["AudioService"]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/components/xiuxing/foyin/foyin.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/xiuxing/foyin/foyin.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\n  /* background-image: url(\"../../../../assets/foyin/img/bacg.jpg\"); */\n  height: 100%;\n  width: 100%;\n  /* background-size: 100%; */\n}\n\n.mar {\n  margin: 50px;\n  text-align: center;\n\n}\n\n#Ifplay{\n  -webkit-animation: play 10s linear infinite;\n          animation: play 10s linear infinite;\n}\n\n@-webkit-keyframes play{\n  0%{-webkit-transform: rotate(0deg);}\n  100%{-webkit-transform: rotate(360deg);transform: rotate(360deg);}\n}\n\n@keyframes play{\n  0%{-webkit-transform: rotate(0deg);transform: rotate(0deg);}\n  100%{-webkit-transform: rotate(360deg);transform: rotate(360deg);}\n}\n\n.play-ctrl {\n  bottom: 3%;\n  position: fixed;\n  margin: 0.3rem 0.5rem;\n  /* height: 1rem; */\n  width: 95%;\n}\n\n.time {\n  position: absolute;\n  z-index: 8;\n  top: 0.3rem;\n  left: 0.3rem;\n  font-size: 0.3rem;\n}\n\n.left {\n  position: absolute;\n  z-index: 8;\n  top: 0.3rem;\n  right: 0.3rem;\n  font-size: 0.3rem;\n}\n\n.circle {\n  width: 15px;\n  height: 15px;\n  /* top: 540px; */\n  background-color: rgb(172, 131, 131);\n  border-radius: 50%;\n  -moz-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  position: absolute;\n  z-index: 3;\n}\n\n.total {\n  margin-top: 5px;\n  height: 5px;\n  background: rgb(211, 208, 208);\n\n}\n\n.current {\n  margin-top: 5px;\n  position: absolute;\n  top: 0;\n  height: 5px;\n  background: rgb(247, 226, 156);\n  z-index: 2;\n}\n\n.data {\n  margin-top: 5px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 6;\n  height: 5px;\n  background: rgb(187, 187, 187);\n  border-radius: 0.5rem;\n  position: absolute;\n  z-index: 1;\n}\n\n.title {\n  font-size: 14px;\n}\n\n.item {\n  padding: 0.2rem 0.3rem;\n  color: sienna;\n  font-size: 0.45rem;\n  position: relative;\n}\n\n.play-bar {\n  /* top: 150px; */\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  margin: 0px 5%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy94aXV4aW5nL2ZveWluL2ZveWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvRUFBb0U7RUFDcEUsWUFBWTtFQUNaLFdBQVc7RUFDWCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCOztBQUVwQjs7QUFHQTtFQUNFLDJDQUEyQztVQUVuQyxtQ0FBbUM7QUFDN0M7O0FBQ0E7RUFDRSxHQUFHLCtCQUErQixDQUFDO0VBQ25DLEtBQUssaUNBQXlCLENBQXpCLHlCQUF5QixDQUFDO0FBQ2pDOztBQUtBO0VBQ0UsR0FBRywrQkFBdUIsQ0FBdkIsdUJBQXVCLENBQUM7RUFDM0IsS0FBSyxpQ0FBeUIsQ0FBekIseUJBQXlCLENBQUM7QUFDakM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsOEJBQThCOztBQUVoQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFVBQVU7RUFDVixXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy94aXV4aW5nL2ZveWluL2ZveWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keSB7XG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9mb3lpbi9pbWcvYmFjZy5qcGdcIik7ICovXG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIGJhY2tncm91bmQtc2l6ZTogMTAwJTsgKi9cbn1cblxuLm1hciB7XG4gIG1hcmdpbjogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG59XG5cblxuI0lmcGxheXtcbiAgLXdlYmtpdC1hbmltYXRpb246IHBsYXkgMTBzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgLW1vei1hbmltYXRpb246IHBsYXkgMTBzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICBhbmltYXRpb246IHBsYXkgMTBzIGxpbmVhciBpbmZpbml0ZTtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBwbGF5e1xuICAwJXstd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO31cbiAgMTAwJXt0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO31cbn1cbkAtbW96LWtleWZyYW1lcyBwbGF5IHtcbiAgMCV7LW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTt9XG4gIDEwMCV7dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTt9XG59XG5Aa2V5ZnJhbWVzIHBsYXl7XG4gIDAle3RyYW5zZm9ybTogcm90YXRlKDBkZWcpO31cbiAgMTAwJXt0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO31cbn1cblxuLnBsYXktY3RybCB7XG4gIGJvdHRvbTogMyU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbWFyZ2luOiAwLjNyZW0gMC41cmVtO1xuICAvKiBoZWlnaHQ6IDFyZW07ICovXG4gIHdpZHRoOiA5NSU7XG59XG5cbi50aW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA4O1xuICB0b3A6IDAuM3JlbTtcbiAgbGVmdDogMC4zcmVtO1xuICBmb250LXNpemU6IDAuM3JlbTtcbn1cblxuLmxlZnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDg7XG4gIHRvcDogMC4zcmVtO1xuICByaWdodDogMC4zcmVtO1xuICBmb250LXNpemU6IDAuM3JlbTtcbn1cblxuLmNpcmNsZSB7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIC8qIHRvcDogNTQwcHg7ICovXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzIsIDEzMSwgMTMxKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMztcbn1cblxuLnRvdGFsIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBoZWlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZDogcmdiKDIxMSwgMjA4LCAyMDgpO1xuXG59XG5cbi5jdXJyZW50IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQ6IHJnYigyNDcsIDIyNiwgMTU2KTtcbiAgei1pbmRleDogMjtcbn1cblxuLmRhdGEge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA2O1xuICBoZWlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZDogcmdiKDE4NywgMTg3LCAxODcpO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaXRlbSB7XG4gIHBhZGRpbmc6IDAuMnJlbSAwLjNyZW07XG4gIGNvbG9yOiBzaWVubmE7XG4gIGZvbnQtc2l6ZTogMC40NXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucGxheS1iYXIge1xuICAvKiB0b3A6IDE1MHB4OyAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgbWFyZ2luOiAwcHggNSU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/xiuxing/foyin/foyin.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/xiuxing/foyin/foyin.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <head>\n  <link rel=\"stylesheet\" href=\"https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\n  <link rel=\"stylesheet\" href=\"http://www.bootcss.com/p/buttons/css/buttons.css\">\n  <link href=\"http://cdn.bootcss.com/font-awesome/4.2.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n  <script src=\"http://g.tbcdn.cn/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js\"></script>\n</head>\n\n<body>\n  <script src=\"http://cdn.bootcss.com/jquery/1.11.2/jquery.min.js\"></script>\n      <script type=\"text/javascript\" src=\"http://www.bootcss.com/p/buttons/js/buttons.js\"></script>\n  <script src=\"https://cdn.bootcss.com/jquery/3.2.1/jquery.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\"\n    crossorigin=\"anonymous\"></script>\n  <script src=\"https://cdn.bootcss.com/popper.js/1.12.9/umd/popper.min.js\" integrity=\"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q\"\n    crossorigin=\"anonymous\"></script>\n  <script src=\"https://cdn.bootcss.com/bootstrap/4.0.0/js/bootstrap.min.js\" integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\"\n    crossorigin=\"anonymous\"></script>\n\n</body> -->\n\n\n\n<div class=\"body\">\n  <div class=\"card-header\">\n    <h3 class=\"text-muted\">佛音</h3>\n</div>     \n\n  <div class=\"mar\">\n    <h2 class=\"text-muted \">{{audio.PlayList()[audio.PlayData().Index].Title}}</h2>\n    <img style=\"width:80%;margin-top:30px\" src=\"/assets/foyin/img/music-pic.png\" id=\"Ifplay\" alt=\"\">\n  </div>\n\n  <div class=\"play-ctrl\">\n    <div class=\"circle\" (click)=\"Skip($event)\" [ngStyle]=\"{'left': audio.PlayData().Current/audio.PlayData().During * 100 + '%'}\"></div>\n    <div class=\"total\" id=\"audio-total\"></div>\n    <div class=\"current \" (click)=\"Skip($event)\" [ngStyle]=\"{'width': audio.PlayData().Current/audio.PlayData().During * 100 + '%'}\"></div>\n    <div class=\"data\" (click)=\"Skip($event)\" [ngStyle]=\"{'width': audio.PlayData().Data/audio.PlayData().During * 100 + '%'}\"></div>\n\n    <br>\n    <div class=\"play-bar\">\n      <div class=\"btn2\" (click)=\"audio.Toggle();imageR() \">\n        <img height=\"85px\" src=\"{{audio.PlayData().IsPlaying ? '/assets/foyin/icon/icon_pause2.png' : '/assets/foyin/icon/icon_play2.png'}}\">\n      </div>\n\n      <div class=\"btn1\" (click)=\"audio.Prev()\">\n        <img height=\"75px\" src=\"/assets/foyin/icon/icon_prev2.png \" alt=\"\">\n      </div>\n\n      <div class=\"btn3\" (click)=\"audio.Next()\">\n        <img height=\"75px\" src=\"/assets/foyin/icon/icon_next2.png\" alt=\"\">\n      </div>\n\n      <div class=\"btn3\" (click)=\"xuange()\">\n        <img height=\"75px\" src=\"/assets/foyin/icon/xuange.png\" alt=\"\">\n      </div>\n    </div>\n\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/xiuxing/foyin/foyin.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/xiuxing/foyin/foyin.component.ts ***!
  \*************************************************************/
/*! exports provided: FoyinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoyinComponent", function() { return FoyinComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_audio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/audio.service */ "./src/app/components/xiuxing/foyin/service/audio.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var FoyinComponent = /** @class */ (function () {
    function FoyinComponent(audio, route) {
        this.audio = audio;
        this.route = route;
        this.disp = 'off';
    }
    FoyinComponent.prototype.ngOnInit = function () {
        this.playList = this.audio.PlayList();
        this.playData = this.audio.PlayData();
        this.audio.Next();
        this.audio.Prev();
    };
    FoyinComponent.prototype.xuange = function () {
        this.route.navigate(['/xiuxing/foyin/xuange']);
    };
    FoyinComponent.prototype.audioSwiped = function (e) {
        switch (e) {
            case 'up':
                this.disp = 'off';
                return;
            case 'down':
                this.disp = 'on';
                return;
            default:
                return;
        }
    };
    FoyinComponent.prototype.Skip = function (e) {
        this.audio.Skip(e.layerX /
            document.getElementById('audio-total').getBoundingClientRect().width);
    };
    FoyinComponent.prototype.imageR = function () {
        var x = document.getElementById("Ifplay");
        this.audio.PlayData().IsPlaying ? x.style.animationPlayState = "running" : x.style.animationPlayState = "paused";
    };
    FoyinComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-foyin',
            template: __webpack_require__(/*! ./foyin.component.html */ "./src/app/components/xiuxing/foyin/foyin.component.html"),
            styles: [__webpack_require__(/*! ./foyin.component.css */ "./src/app/components/xiuxing/foyin/foyin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_audio_service__WEBPACK_IMPORTED_MODULE_2__["AudioService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FoyinComponent);
    return FoyinComponent;
}());



/***/ }),

/***/ "./src/app/components/xiuxing/foyin/service/audio.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/xiuxing/foyin/service/audio.service.ts ***!
  \*******************************************************************/
/*! exports provided: AudioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioService", function() { return AudioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AudioService = /** @class */ (function () {
    function AudioService() {
        var _this = this;
        //初始化音频
        this._audio = document.createElement("audio");
        this._audio.autoplay = false;
        this._audio.onplay = function () {
            var that = _this;
            //window对象 setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。
            _this.listenInterval = window.setInterval(function () {
                that.playData.Current = that._audio.currentTime; //播放到
                that.playData.Url = that._audio.src; //图片地址
                that.playData.During = that._audio.duration; //音频全长
                that.playData.Data = that._audio.buffered && //已缓冲
                    that._audio.buffered.length ?
                    (that._audio.buffered.end(0) || 0) : 0;
            }, 1000);
            _this.playData.IsPlaying = true;
        };
        //音频播放结束之后执行
        this._audio.onended = function () {
            window.clearInterval(_this.listenInterval);
            _this.playData.Current = _this._audio.currentTime;
            _this.playData.Url = _this._audio.src;
            _this.playData.During = _this._audio.duration;
            _this.playData.Data = _this._audio.buffered &&
                _this._audio.buffered.length ?
                (_this._audio.buffered.end(0) || 0) : 0;
            _this.playData.IsPlaying = false;
        };
        //音频暂停播放时执行
        this._audio.onpause = function () {
            window.clearInterval(_this.listenInterval); //先停止
            _this.playData.Current = _this._audio.currentTime;
            _this.playData.Url = _this._audio.src;
            _this.playData.During = _this._audio.duration;
            _this.playData.Data = _this._audio.buffered &&
                _this._audio.buffered.length ?
                (_this._audio.buffered.end(0) || 0) : 0;
            _this.playData.IsPlaying = false;
        };
        this.playData = { Style: 0, Index: 0 };
        this.playList = [
            { Url: 'https://cst-1256261760.cos.ap-guangzhou.myqcloud.com/audio/%E8%88%AC%E8%8B%A5%E6%B3%A2%E7%BD%97%E8%9C%9C%E5%A4%9A%E5%BF%83%E7%BB%8F_01.mp3', Title: '般若波罗蜜多心经' },
            { Url: 'https://cst-1256261760.cos.ap-guangzhou.myqcloud.com/audio/%E5%A4%A7%E6%82%B2%E5%92%92_01.mp3', Title: '大悲咒' },
            { Url: 'https://cst-1256261760.cos.ap-guangzhou.myqcloud.com/audio/%E5%8D%97%E6%97%A0%E9%98%BF%E5%BC%A5%E9%99%80%E4%BD%9B_01.mp3', Title: '南无阿弥陀佛' },
            { Url: 'https://cst-1256261760.cos.ap-guangzhou.myqcloud.com/audio/%E5%85%AD%E5%AD%97%E7%9C%9F%E8%A8%80%E9%A2%82_01.mp3', Title: '六字真言' },
            { Url: 'https://cst-1256261760.cos.ap-guangzhou.myqcloud.com/audio/%E6%B6%88%E7%81%BE%E5%90%89%E7%A5%A5%E7%A5%9E%E5%92%92_01.mp3', Title: '消灾吉祥神咒' },
            { Url: 'https://cst-1256261760.cos.ap-guangzhou.myqcloud.com/audio/%E8%8E%B2%E8%8A%B1%E7%94%9F%E5%A4%A7%E5%A3%AB%E5%BF%83%E5%92%92_01.mp3', Title: '莲花生大士心咒' },
            { Url: 'https://cst-1256261760.cos.ap-guangzhou.myqcloud.com/audio/%E8%88%AC%E8%8B%A5%E6%B3%A2%E7%BD%97%E8%9C%9C%E5%A4%9A%E5%BF%83%E7%BB%8F_01.mp3', Title: '般若波罗蜜多心经' },
            { Url: 'https://cst-1256261760.cos.ap-guangzhou.myqcloud.com/audio/%E5%A4%A7%E6%82%B2%E5%92%92_01.mp3', Title: '大悲咒' },
            { Url: 'https://cst-1256261760.cos.ap-guangzhou.myqcloud.com/audio/%E5%8D%97%E6%97%A0%E9%98%BF%E5%BC%A5%E9%99%80%E4%BD%9B_01.mp3', Title: '南无阿弥陀佛' },
            { Url: 'https://cst-1256261760.cos.ap-guangzhou.myqcloud.com/audio/%E5%85%AD%E5%AD%97%E7%9C%9F%E8%A8%80%E9%A2%82_01.mp3', Title: '六字真言' },
            { Url: 'https://cst-1256261760.cos.ap-guangzhou.myqcloud.com/audio/%E6%B6%88%E7%81%BE%E5%90%89%E7%A5%A5%E7%A5%9E%E5%92%92_01.mp3', Title: '消灾吉祥神咒' },
            { Url: 'https://cst-1256261760.cos.ap-guangzhou.myqcloud.com/audio/%E8%8E%B2%E8%8A%B1%E7%94%9F%E5%A4%A7%E5%A3%AB%E5%BF%83%E5%92%92_01.mp3', Title: '莲花生大士心咒' },
        ];
    }
    //添加音频
    AudioService.prototype.add = function (audio) {
        this.playList.push(audio);
        if (this.playList.length === 1) {
            this.PlayIndex(0);
        }
    };
    //进度条
    AudioService.prototype.Skip = function (percent) {
        this._audio.currentTime = this._audio.duration * percent;
        this.playData.Current = this._audio.currentTime;
    };
    //上一首
    AudioService.prototype.Prev = function () {
        switch (this.playData.Style) {
            case 0:
                if (this.playData.Index > 0) {
                    this.playData.Index--;
                    this.PlayIndex(this.playData.Index);
                }
                break;
            case 1:
                this.playData.Index = (this.playData.Index - 1) < 0 ?
                    (this.playList.length - 1) :
                    (this.playData.Index - 1);
                this.PlayIndex(this.playData.Index);
                break;
            case 2:
                this.playData.Index = (this.playData.Index - 1) < 0 ?
                    (this.playList.length - 1) :
                    (this.playData.Index - 1);
                this.PlayIndex(this.playData.Index);
                console.log('暂不考虑随机播放将视为列表循环播放');
                break;
            case 3:
                this._audio.currentTime = 0;
                break;
            default:
                if (this.playData.Index > 0) {
                    this.playData.Index--;
                    this.PlayIndex(this.playData.Index);
                }
                break;
        }
    };
    AudioService.prototype.Toggle = function (audio) {
        var tryGet = audio ?
            this.playList.findIndex(function (p) { return p.Url === audio.Url; }) :
            this.playData.Index;
        if (tryGet < 0) {
            this.playList.push(audio);
            this.PlayIndex(this.playList.length);
        }
        else {
            if (tryGet === this.playData.Index) {
                if (this._audio.paused) {
                    this._audio.play();
                    this.playData.IsPlaying = true;
                }
                else {
                    this._audio.pause();
                    this.playData.IsPlaying = false;
                }
            }
            else {
                this.PlayIndex(tryGet);
            }
        }
    };
    //下一首
    AudioService.prototype.Next = function () {
        switch (this.playData.Style) {
            case 0:
                if (this.playData.Index < this.playList.length) {
                    this.playData.Index++;
                    this.PlayIndex(this.playData.Index);
                }
                break;
            case 1:
                this.playData.Index = (this.playData.Index + 1) % this.playList.length;
                this.PlayIndex(this.playData.Index);
                break;
            case 2:
                this.playData.Index = (this.playData.Index + 1) % this.playList.length;
                this.PlayIndex(this.playData.Index);
                console.log('暂不考虑随机播放将视为列表循环播放');
                break;
            case 3:
                this._audio.currentTime = 0;
                break;
            default:
                if (this.playData.Index < this.playList.length) {
                    this.playData.Index++;
                    this.PlayIndex(this.playData.Index);
                }
                break;
        }
    };
    //播放指定索引的音频
    AudioService.prototype.PlayIndex = function (index) {
        index = this.playList[index] ? index :
            this.playList[index + 1] ? (index + 1) :
                this.playList[index - 1] ? (index - 1) : -1;
        if (index !== -1) {
            this._audio.src = this.playList[index].Url;
            if (this._audio.paused) {
                this._audio.play();
                this.playData.IsPlaying = true;
            }
            this.playData.Index = index;
        }
        else {
            console.log("nothing to be played.");
        }
    };
    AudioService.prototype.PlayList = function () {
        return this.playList;
    };
    AudioService.prototype.PlayData = function () {
        return this.playData;
    };
    AudioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AudioService);
    return AudioService;
}());



/***/ }),

/***/ "./src/app/components/xiuxing/foyin/xuange/xuange.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/xiuxing/foyin/xuange/xuange.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".SongsList{\n    position: relative;\n    display: block;\n    padding: 18px 18px;\n    margin-bottom: -1px;\n    font-size:150%;\n    background-color: rgb(243, 234, 215);\n    border: 1px solid #ddd;\n   \n  }\n  .SongsList:first-child {\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy94aXV4aW5nL2ZveWluL3h1YW5nZS94dWFuZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2Qsb0NBQW9DO0lBQ3BDLHNCQUFzQjs7RUFFeEI7RUFDQTtJQUNFLDJCQUEyQjtJQUMzQiw0QkFBNEI7RUFDOUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3hpdXhpbmcvZm95aW4veHVhbmdlL3h1YW5nZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLlNvbmdzTGlzdHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMThweCAxOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gICAgZm9udC1zaXplOjE1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjM0LCAyMTUpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICBcbiAgfVxuICAuU29uZ3NMaXN0OmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/xiuxing/foyin/xuange/xuange.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/xiuxing/foyin/xuange/xuange.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n  <head>\n    <meta charset=\"utf-8\"> \n    <link rel=\"stylesheet\" href=\"https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css\">\n    <script src=\"https://cdn.staticfile.org/jquery/2.1.1/jquery.min.js\"></script>\n    <script src=\"https://cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n  </head>\n  <body>\n  \n    <div class=\"card-header\">\n      <h3 class=\"text-muted\">佛音</h3>\n    </div>  \n     \n  <div *ngFor=\"let item of playList,let key=index\">\n  <a class=\"SongsList\" (click)=\"xuange(key)\">{{item.Title}}</a>\n  </div>\n  </body>\n  </html>"

/***/ }),

/***/ "./src/app/components/xiuxing/foyin/xuange/xuange.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/xiuxing/foyin/xuange/xuange.component.ts ***!
  \*********************************************************************/
/*! exports provided: XuangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuangeComponent", function() { return XuangeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_audio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/audio.service */ "./src/app/components/xiuxing/foyin/service/audio.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var XuangeComponent = /** @class */ (function () {
    function XuangeComponent(audio, route) {
        this.audio = audio;
        this.route = route;
    }
    XuangeComponent.prototype.ngOnInit = function () {
        this.playList = this.audio.PlayList();
    };
    XuangeComponent.prototype.xuange = function (index) {
        this.audio.PlayIndex(index);
        this.route.navigate(['/xiuxing/foyin']);
    };
    XuangeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-xuange',
            template: __webpack_require__(/*! ./xuange.component.html */ "./src/app/components/xiuxing/foyin/xuange/xuange.component.html"),
            styles: [__webpack_require__(/*! ./xuange.component.css */ "./src/app/components/xiuxing/foyin/xuange/xuange.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_audio_service__WEBPACK_IMPORTED_MODULE_2__["AudioService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], XuangeComponent);
    return XuangeComponent;
}());



/***/ }),

/***/ "./src/app/components/xiuxing/library/fojing/fojing.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/xiuxing/library/fojing/fojing.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    margin:0;\n    padding:0;\n    list-style:none;\n}\n\n.list li {\n    display:block;\n    width:100%;\n    height:6em;\n    border-bottom: 0.05rem solid grey;\n}\n\n.item {\n    width:100%;\n    height:95%;\n    display:flex;\n    flex-direction: row;\n   \n}\n\n.iLeft {\n    flex:1;\n   \n}\n\n.iLeft img {\n    width:100%;\n    height:100%;\n}\n\n.iMiddle {\n    flex:3;\n\n}\n\n.bName {\n    height:60%;\n    font-size:1.2em;\n    text-align: center;\n}\n\n.iRight {\n    flex:0.6;\n    display:flex;\n    align-items: center;\n    font-size:3rem; \n    background-color: white;\n    border:none;\n \n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy94aXV4aW5nL2xpYnJhcnkvZm9qaW5nL2ZvamluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksUUFBUTtJQUNSLFNBQVM7SUFDVCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixVQUFVO0lBQ1YsaUNBQWlDO0FBQ3JDOztBQUNBO0lBQ0ksVUFBVTtJQUNWLFVBQVU7SUFDVixZQUFZO0lBQ1osbUJBQW1COztBQUV2Qjs7QUFDQTtJQUNJLE1BQU07O0FBRVY7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUNBO0lBQ0ksTUFBTTs7QUFFVjs7QUFDQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksUUFBUTtJQUNSLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixXQUFXOztBQUVmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy94aXV4aW5nL2xpYnJhcnkvZm9qaW5nL2ZvamluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgbWFyZ2luOjA7XG4gICAgcGFkZGluZzowO1xuICAgIGxpc3Qtc3R5bGU6bm9uZTtcbn1cblxuLmxpc3QgbGkge1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6NmVtO1xuICAgIGJvcmRlci1ib3R0b206IDAuMDVyZW0gc29saWQgZ3JleTtcbn1cbi5pdGVtIHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDo5NSU7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICBcbn1cbi5pTGVmdCB7XG4gICAgZmxleDoxO1xuICAgXG59XG4uaUxlZnQgaW1nIHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xufVxuLmlNaWRkbGUge1xuICAgIGZsZXg6MztcblxufVxuLmJOYW1lIHtcbiAgICBoZWlnaHQ6NjAlO1xuICAgIGZvbnQtc2l6ZToxLjJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaVJpZ2h0IHtcbiAgICBmbGV4OjAuNjtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6M3JlbTsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOm5vbmU7XG4gXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/xiuxing/library/fojing/fojing.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/xiuxing/library/fojing/fojing.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"list\">\n  <li *ngFor=\"let item of jingList\">\n    <div class=\"item\">\n       <div class=\"iLeft\">\n           <img src=\"../../../../../assets/fojing.png\">\n        </div>\n        <div class=\"iMiddle\">\n          <p class=\"bName\">{{item[\"bookname\"]}}</p>\n          <p class=\"rNum\">修读人数：{{item[\"readnumber\"]}}</p> \n        </div>\n        <button class=\"iRight\" (click)=\"readFJ(item)\">&gt;</button>\n    </div>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/components/xiuxing/library/fojing/fojing.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/xiuxing/library/fojing/fojing.component.ts ***!
  \***********************************************************************/
/*! exports provided: FojingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FojingComponent", function() { return FojingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/storage.service */ "./src/app/services/storage.service.ts");





var FojingComponent = /** @class */ (function () {
    function FojingComponent(router, http, storage) {
        this.router = router;
        this.http = http;
        this.storage = storage;
        this.jingList = [];
    }
    FojingComponent.prototype.ngOnInit = function () {
        var _this = this;
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
        this.http.post("/api/library", { "booktype": "佛经" }, httpOptions).subscribe(function (response) {
            _this.jingList = response;
        });
    };
    FojingComponent.prototype.readFJ = function (item) {
        var tempI = parseInt(item["readnumber"]) + 1;
        var tempS = String(tempI);
        var addReadNum = {
            "booktype": "fojing",
            "bookname": item["bookname"],
            "readnumber": tempS
        };
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
        this.http.post("/api/changeNumber", addReadNum, httpOptions).subscribe();
        this.storage.set("jingInf", item);
        this.router.navigate(['/jingGeneral']);
    };
    FojingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fojing',
            template: __webpack_require__(/*! ./fojing.component.html */ "./src/app/components/xiuxing/library/fojing/fojing.component.html"),
            styles: [__webpack_require__(/*! ./fojing.component.css */ "./src/app/components/xiuxing/library/fojing/fojing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]])
    ], FojingComponent);
    return FojingComponent;
}());



/***/ }),

/***/ "./src/app/components/xiuxing/library/fojing/jing-general/jing-general.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/xiuxing/library/fojing/jing-general/jing-general.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\n    width:100%;\n    height:100%;\n    display:flex;\n    flex-direction: column;\n    font-family: KaiTi;\n}\n* {\n    padding:0;\n    margin:0;\n    list-style: none;\n}\n.top {\n    flex:0.5;\n}\n.title {\n\n    font-size: 2rem;\n    text-align: center;\n    font-weight: bold;\n}\n.central {\n    flex:2.5;\n    display:flex;\n    flex-direction: column;\n}\n.up {\n    flex:4;\n    display:flex;\n    flex:row;\n}\nimg {\n    flex:1;\n}\n.introduce {\n    flex:1.5;\n}\n.bookName {\n    font-size:1.5rem;\n    text-align: center;\n}\n.bookIntroduce {\n    height:80%;\n    overflow: auto;\n}\n.down {\n    flex:1;\n}\nbutton {\n    display:block;\n    float:right;\n    font-size:1.2rem;\n    border-radius: 4%;\n    background-color: orange;\n    margin-right:1rem;\n    margin-top:0.5rem;\n}\n.bottom {\n    flex:5;\n    margin-top:5px;\n    overflow: hidden;\n    \n}\n.bottom p {\n    font-size:1.5rem;\n}\n.bottom .contentIntroduce {\n    height: calc(100% - 1.7rem);\n    overflow: auto;\n    /* padding-left: 0.2rem;\n    padding-right: 0.2rem; */\n    text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy94aXV4aW5nL2xpYnJhcnkvZm9qaW5nL2ppbmctZ2VuZXJhbC9qaW5nLWdlbmVyYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFNBQVM7SUFDVCxRQUFRO0lBQ1IsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxRQUFRO0FBQ1o7QUFDQTs7SUFFSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksUUFBUTtJQUNSLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLE1BQU07SUFDTixZQUFZO0lBQ1osUUFBUTtBQUNaO0FBQ0E7SUFDSSxNQUFNO0FBQ1Y7QUFDQTtJQUNJLFFBQVE7QUFDWjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7QUFDbEI7QUFFQTtJQUNJLE1BQU07QUFDVjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxNQUFNO0lBQ04sY0FBYztJQUNkLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLGNBQWM7SUFDZDs0QkFDd0I7SUFDeEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy94aXV4aW5nL2xpYnJhcnkvZm9qaW5nL2ppbmctZ2VuZXJhbC9qaW5nLWdlbmVyYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZvbnQtZmFtaWx5OiBLYWlUaTtcbn1cbioge1xuICAgIHBhZGRpbmc6MDtcbiAgICBtYXJnaW46MDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuLnRvcCB7XG4gICAgZmxleDowLjU7XG59XG4udGl0bGUge1xuXG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jZW50cmFsIHtcbiAgICBmbGV4OjIuNTtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi51cCB7XG4gICAgZmxleDo0O1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4OnJvdztcbn1cbmltZyB7XG4gICAgZmxleDoxO1xufVxuLmludHJvZHVjZSB7XG4gICAgZmxleDoxLjU7XG59XG4uYm9va05hbWUge1xuICAgIGZvbnQtc2l6ZToxLjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJvb2tJbnRyb2R1Y2Uge1xuICAgIGhlaWdodDo4MCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5kb3duIHtcbiAgICBmbGV4OjE7XG59XG5idXR0b24ge1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgZmxvYXQ6cmlnaHQ7XG4gICAgZm9udC1zaXplOjEuMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gICAgbWFyZ2luLXJpZ2h0OjFyZW07XG4gICAgbWFyZ2luLXRvcDowLjVyZW07XG59XG4uYm90dG9tIHtcbiAgICBmbGV4OjU7XG4gICAgbWFyZ2luLXRvcDo1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBcbn1cbi5ib3R0b20gcCB7XG4gICAgZm9udC1zaXplOjEuNXJlbTtcbn1cbi5ib3R0b20gLmNvbnRlbnRJbnRyb2R1Y2Uge1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMS43cmVtKTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICAvKiBwYWRkaW5nLWxlZnQ6IDAuMnJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjJyZW07ICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/xiuxing/library/fojing/jing-general/jing-general.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/xiuxing/library/fojing/jing-general/jing-general.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n    <div class=\"top\">\n      <p class=\"title\">经书详情</p>\n    </div>\n    <div class=\"central\">\n      <div class=\"up\">\n        <img src=\"../../../../../../assets/fojing.png\">\n        <div class=\"introduce\">\n          <p class=\"bookName\">{{jingInf.bookname}}</p>\n          <div  #bookintroduce class=\"bookIntroduce\" >\n          </div>\n        </div>\n      </div>\n      <div class=\"down\">\n        <button (click)=\"translation()\">查看译文</button>\n        <button (click)=\"read()\">立即修读</button>     \n      </div>\n    </div>\n    <div class=\"bottom\">\n      <p>内容介绍:</p>\n      <div  #contentintroduce class=\"contentIntroduce\" >\n      </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/components/xiuxing/library/fojing/jing-general/jing-general.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/xiuxing/library/fojing/jing-general/jing-general.component.ts ***!
  \******************************************************************************************/
/*! exports provided: JingGeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JingGeneralComponent", function() { return JingGeneralComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/storage.service */ "./src/app/services/storage.service.ts");





var JingGeneralComponent = /** @class */ (function () {
    function JingGeneralComponent(router, http, storage) {
        this.router = router;
        this.http = http;
        this.storage = storage;
    }
    JingGeneralComponent.prototype.ngOnInit = function () {
        this.jingInf = this.storage.get("jingInf");
        this.bookintroduce.nativeElement.innerHTML = this.jingInf.bookintroduce;
        this.contentintroduce.nativeElement.innerHTML = this.jingInf.contentintroduce;
    };
    JingGeneralComponent.prototype.read = function () {
        this.storage.set("yuanwen", { "bookname": this.jingInf.bookname, "yuanwen": this.jingInf.yuanwen });
        this.router.navigate(['/jingyuanwen']);
    };
    JingGeneralComponent.prototype.translation = function () {
        this.storage.set("yiwen", { "bookname": this.jingInf.bookname, "yiwen": this.jingInf.yiwen });
        this.router.navigate(['/jingyiwen']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("bookintroduce"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], JingGeneralComponent.prototype, "bookintroduce", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("contentintroduce"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], JingGeneralComponent.prototype, "contentintroduce", void 0);
    JingGeneralComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jing-general',
            template: __webpack_require__(/*! ./jing-general.component.html */ "./src/app/components/xiuxing/library/fojing/jing-general/jing-general.component.html"),
            styles: [__webpack_require__(/*! ./jing-general.component.css */ "./src/app/components/xiuxing/library/fojing/jing-general/jing-general.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]])
    ], JingGeneralComponent);
    return JingGeneralComponent;
}());



/***/ }),

/***/ "./src/app/components/xiuxing/library/fojing/jingGeneral/jingyiwen/jingyiwen.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/xiuxing/library/fojing/jingGeneral/jingyiwen/jingyiwen.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\n    width:100%;\n    height:100%;\n    display:flex;\n    flex-direction: column;\n    font-family: KaiTi;\n}\n* {\n    padding:0;\n    margin:0;\n    list-style: none;\n}\n.bookName {\n    font-size: 2rem;\n    text-align: center;\n    font-weight: bold;\n    display:fixed;\n    top:0;\n}\n.content {\n    overflow: auto;\n    padding:0.7rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy94aXV4aW5nL2xpYnJhcnkvZm9qaW5nL2ppbmdHZW5lcmFsL2ppbmd5aXdlbi9qaW5neWl3ZW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFNBQVM7SUFDVCxRQUFRO0lBQ1IsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsS0FBSztBQUNUO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMveGl1eGluZy9saWJyYXJ5L2ZvamluZy9qaW5nR2VuZXJhbC9qaW5neWl3ZW4vamluZ3lpd2VuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keSB7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmb250LWZhbWlseTogS2FpVGk7XG59XG4qIHtcbiAgICBwYWRkaW5nOjA7XG4gICAgbWFyZ2luOjA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5ib29rTmFtZSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBkaXNwbGF5OmZpeGVkO1xuICAgIHRvcDowO1xufVxuLmNvbnRlbnQge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHBhZGRpbmc6MC43cmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/xiuxing/library/fojing/jingGeneral/jingyiwen/jingyiwen.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/xiuxing/library/fojing/jingGeneral/jingyiwen/jingyiwen.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <p class=\"bookName\">{{yiwen.bookname}}</p>\n  <div class=\"content\" #yiwentext>\n \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/xiuxing/library/fojing/jingGeneral/jingyiwen/jingyiwen.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/components/xiuxing/library/fojing/jingGeneral/jingyiwen/jingyiwen.component.ts ***!
  \************************************************************************************************/
/*! exports provided: JingyiwenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JingyiwenComponent", function() { return JingyiwenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/storage.service */ "./src/app/services/storage.service.ts");



var JingyiwenComponent = /** @class */ (function () {
    function JingyiwenComponent(storage) {
        this.storage = storage;
    }
    JingyiwenComponent.prototype.ngOnInit = function () {
        this.yiwen = this.storage.get("yiwen");
        this.yiwentext.nativeElement.innerHTML = this.yiwen.yiwen;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("yiwentext"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], JingyiwenComponent.prototype, "yiwentext", void 0);
    JingyiwenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jingyiwen',
            template: __webpack_require__(/*! ./jingyiwen.component.html */ "./src/app/components/xiuxing/library/fojing/jingGeneral/jingyiwen/jingyiwen.component.html"),
            styles: [__webpack_require__(/*! ./jingyiwen.component.css */ "./src/app/components/xiuxing/library/fojing/jingGeneral/jingyiwen/jingyiwen.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]])
    ], JingyiwenComponent);
    return JingyiwenComponent;
}());



/***/ }),

/***/ "./src/app/components/xiuxing/library/fojing/jingGeneral/jingyuanwen/jingyuanwen.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/xiuxing/library/fojing/jingGeneral/jingyuanwen/jingyuanwen.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\n    width:100%;\n    height:100%;\n    display:flex;\n    flex-direction: column;\n    font-family: KaiTi;\n}\n* {\n    padding:0;\n    margin:0;\n    list-style: none;\n}\n.bookName {\n    font-size: 2rem;\n    text-align: center;\n    font-weight: bold;\n    display:fixed;\n    top:0;\n}\n.content {\n    overflow: auto;\n    padding:0.7rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy94aXV4aW5nL2xpYnJhcnkvZm9qaW5nL2ppbmdHZW5lcmFsL2ppbmd5dWFud2VuL2ppbmd5dWFud2VuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsUUFBUTtJQUNSLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLEtBQUs7QUFDVDtBQUNBO0lBQ0ksY0FBYztJQUNkLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3hpdXhpbmcvbGlicmFyeS9mb2ppbmcvamluZ0dlbmVyYWwvamluZ3l1YW53ZW4vamluZ3l1YW53ZW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZvbnQtZmFtaWx5OiBLYWlUaTtcbn1cbioge1xuICAgIHBhZGRpbmc6MDtcbiAgICBtYXJnaW46MDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmJvb2tOYW1lIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGRpc3BsYXk6Zml4ZWQ7XG4gICAgdG9wOjA7XG59XG4uY29udGVudCB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgcGFkZGluZzowLjdyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/components/xiuxing/library/fojing/jingGeneral/jingyuanwen/jingyuanwen.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/xiuxing/library/fojing/jingGeneral/jingyuanwen/jingyuanwen.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n    <p class=\"bookName\">{{yuanwen.bookname}}</p>\n    <div class=\"content\" #yuanwentext>\n    \n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/xiuxing/library/fojing/jingGeneral/jingyuanwen/jingyuanwen.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/xiuxing/library/fojing/jingGeneral/jingyuanwen/jingyuanwen.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: JingyuanwenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JingyuanwenComponent", function() { return JingyuanwenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/storage.service */ "./src/app/services/storage.service.ts");



var JingyuanwenComponent = /** @class */ (function () {
    function JingyuanwenComponent(storage) {
        this.storage = storage;
    }
    JingyuanwenComponent.prototype.ngOnInit = function () {
        this.yuanwen = this.storage.get("yuanwen");
        this.yuanwentext.nativeElement.innerHTML = this.yuanwen.yuanwen;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("yuanwentext"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], JingyuanwenComponent.prototype, "yuanwentext", void 0);
    JingyuanwenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jingyuanwen',
            template: __webpack_require__(/*! ./jingyuanwen.component.html */ "./src/app/components/xiuxing/library/fojing/jingGeneral/jingyuanwen/jingyuanwen.component.html"),
            styles: [__webpack_require__(/*! ./jingyuanwen.component.css */ "./src/app/components/xiuxing/library/fojing/jingGeneral/jingyuanwen/jingyuanwen.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]])
    ], JingyuanwenComponent);
    return JingyuanwenComponent;
}());



/***/ }),

/***/ "./src/app/components/xiuxing/library/fozhou/fozhou.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/xiuxing/library/fozhou/fozhou.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    margin:0;\n    padding:0;\n    list-style:none;\n}\n\n.list li {\n    display:block;\n    width:100%;\n    height:6em;\n    border-bottom: 0.05rem solid grey;\n}\n\n.item {\n    width:100%;\n    height:95%;\n    display:flex;\n    flex-direction: row;\n   \n}\n\n.iLeft {\n    flex:1;\n   \n}\n\n.iLeft img {\n    width:100%;\n    height:100%;\n}\n\n.iMiddle {\n    flex:3;\n\n}\n\n.bName {\n    height:60%;\n    font-size:1.2em;\n    text-align: center;\n}\n\n.iRight {\n    flex:0.6;\n    display:flex;\n    align-items: center;\n    font-size:3rem; \n    background-color: white;\n    border:none;\n \n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy94aXV4aW5nL2xpYnJhcnkvZm96aG91L2ZvemhvdS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksUUFBUTtJQUNSLFNBQVM7SUFDVCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixVQUFVO0lBQ1YsaUNBQWlDO0FBQ3JDOztBQUNBO0lBQ0ksVUFBVTtJQUNWLFVBQVU7SUFDVixZQUFZO0lBQ1osbUJBQW1COztBQUV2Qjs7QUFDQTtJQUNJLE1BQU07O0FBRVY7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUNBO0lBQ0ksTUFBTTs7QUFFVjs7QUFDQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksUUFBUTtJQUNSLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixXQUFXOztBQUVmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy94aXV4aW5nL2xpYnJhcnkvZm96aG91L2ZvemhvdS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgbWFyZ2luOjA7XG4gICAgcGFkZGluZzowO1xuICAgIGxpc3Qtc3R5bGU6bm9uZTtcbn1cblxuLmxpc3QgbGkge1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6NmVtO1xuICAgIGJvcmRlci1ib3R0b206IDAuMDVyZW0gc29saWQgZ3JleTtcbn1cbi5pdGVtIHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDo5NSU7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICBcbn1cbi5pTGVmdCB7XG4gICAgZmxleDoxO1xuICAgXG59XG4uaUxlZnQgaW1nIHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xufVxuLmlNaWRkbGUge1xuICAgIGZsZXg6MztcblxufVxuLmJOYW1lIHtcbiAgICBoZWlnaHQ6NjAlO1xuICAgIGZvbnQtc2l6ZToxLjJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaVJpZ2h0IHtcbiAgICBmbGV4OjAuNjtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6M3JlbTsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOm5vbmU7XG4gXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/xiuxing/library/fozhou/fozhou.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/xiuxing/library/fozhou/fozhou.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"list\">\n  <li *ngFor=\"let item of zhouList\">\n    <div class=\"item\">\n       <div class=\"iLeft\">\n           <img src=\"../../../../../assets/fozhou.png\">\n        </div>\n        <div class=\"iMiddle\">\n          <p class=\"bName\">{{item[\"bookname\"]}}</p>\n          <p class=\"rNum\">修读人数：{{item[\"readnumber\"]}}</p> \n        </div>\n        <button class=\"iRight\" (click)=\"readFZ(item)\">&gt;</button>\n    </div>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/components/xiuxing/library/fozhou/fozhou.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/xiuxing/library/fozhou/fozhou.component.ts ***!
  \***********************************************************************/
/*! exports provided: FozhouComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FozhouComponent", function() { return FozhouComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/storage.service */ "./src/app/services/storage.service.ts");





var FozhouComponent = /** @class */ (function () {
    function FozhouComponent(http, router, storage) {
        this.http = http;
        this.router = router;
        this.storage = storage;
        this.zhouList = [];
    }
    FozhouComponent.prototype.ngOnInit = function () {
        var _this = this;
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
        this.http.post("/api/library", { "booktype": "佛咒" }, httpOptions).subscribe(function (response) {
            _this.zhouList = response;
        });
    };
    FozhouComponent.prototype.readFZ = function (item) {
        var tempI = parseInt(item["readnumber"]) + 1;
        var tempS = String(tempI);
        var addReadNum = {
            "booktype": "fozhou",
            "bookname": item["bookname"],
            "readnumber": tempS
        };
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
        this.http.post("/api/changeNumber", addReadNum, httpOptions).subscribe();
        this.storage.set("zhouInf", item);
        this.router.navigate(['/zhouGeneral']);
    };
    FozhouComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fozhou',
            template: __webpack_require__(/*! ./fozhou.component.html */ "./src/app/components/xiuxing/library/fozhou/fozhou.component.html"),
            styles: [__webpack_require__(/*! ./fozhou.component.css */ "./src/app/components/xiuxing/library/fozhou/fozhou.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]])
    ], FozhouComponent);
    return FozhouComponent;
}());



/***/ }),

/***/ "./src/app/components/xiuxing/library/fozhou/zhou-general/zhou-general.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/xiuxing/library/fozhou/zhou-general/zhou-general.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\n    width:100%;\n    height:100%;\n    display:flex;\n    flex-direction: column;\n    font-family: KaiTi;\n}\n* {\n    padding:0;\n    margin:0;\n    list-style: none;\n}\n.top {\n    flex:0.5;\n}\n.title {\n\n    font-size: 2rem;\n    text-align: center;\n    font-weight: bold;\n}\n.central {\n    flex:2.5;\n}\n.up {\n    display:flex;\n    flex:row;\n}\nimg {\n    flex:1;\n}\n.introduce {\n    flex:1.5;\n}\n.bookName {\n    font-size:1.5rem;\n    text-align: center;\n}\n.bookIntroduce {\n    height:calc(100%-1.5rem);\n    overflow:auto;\n}\n.bottom {\n    flex:5;\n    display:flex;\n    flex-direction: column;\n    overflow: hidden;\n    \n}\n.contral {\n    flex:0.5;\n    display:flex;\n    flex:row;\n    justify-content:center;\n\n}\nbutton {\n    display:block;\n    font-size:1.3rem;\n    border-radius: 4%;\n    background-color: orange;\n    margin-right:0.2rem;\n    width:20%;\n}\n.main {\n    flex:6;\n    padding:0.5rem;\n    margin-top:0.6rem;\n    border-top:0.07rem solid grey;\n    overflow:auto;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy94aXV4aW5nL2xpYnJhcnkvZm96aG91L3pob3UtZ2VuZXJhbC96aG91LWdlbmVyYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFNBQVM7SUFDVCxRQUFRO0lBQ1IsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxRQUFRO0FBQ1o7QUFDQTs7SUFFSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksUUFBUTtBQUNaO0FBQ0E7SUFDSSxZQUFZO0lBQ1osUUFBUTtBQUNaO0FBQ0E7SUFDSSxNQUFNO0FBQ1Y7QUFDQTtJQUNJLFFBQVE7QUFDWjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7QUFDakI7QUFFQTtJQUNJLE1BQU07SUFDTixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLFFBQVE7SUFDUixZQUFZO0lBQ1osUUFBUTtJQUNSLHNCQUFzQjs7QUFFMUI7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiO0FBQ0E7SUFDSSxNQUFNO0lBQ04sY0FBYztJQUNkLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMveGl1eGluZy9saWJyYXJ5L2ZvemhvdS96aG91LWdlbmVyYWwvemhvdS1nZW5lcmFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keSB7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmb250LWZhbWlseTogS2FpVGk7XG59XG4qIHtcbiAgICBwYWRkaW5nOjA7XG4gICAgbWFyZ2luOjA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi50b3Age1xuICAgIGZsZXg6MC41O1xufVxuLnRpdGxlIHtcblxuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY2VudHJhbCB7XG4gICAgZmxleDoyLjU7XG59XG4udXAge1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4OnJvdztcbn1cbmltZyB7XG4gICAgZmxleDoxO1xufVxuLmludHJvZHVjZSB7XG4gICAgZmxleDoxLjU7XG59XG4uYm9va05hbWUge1xuICAgIGZvbnQtc2l6ZToxLjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJvb2tJbnRyb2R1Y2Uge1xuICAgIGhlaWdodDpjYWxjKDEwMCUtMS41cmVtKTtcbiAgICBvdmVyZmxvdzphdXRvO1xufVxuXG4uYm90dG9tIHtcbiAgICBmbGV4OjU7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBcbn1cbi5jb250cmFsIHtcbiAgICBmbGV4OjAuNTtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleDpyb3c7XG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcblxufVxuXG5idXR0b24ge1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgZm9udC1zaXplOjEuM3JlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gICAgbWFyZ2luLXJpZ2h0OjAuMnJlbTtcbiAgICB3aWR0aDoyMCU7XG59XG4ubWFpbiB7XG4gICAgZmxleDo2O1xuICAgIHBhZGRpbmc6MC41cmVtO1xuICAgIG1hcmdpbi10b3A6MC42cmVtO1xuICAgIGJvcmRlci10b3A6MC4wN3JlbSBzb2xpZCBncmV5O1xuICAgIG92ZXJmbG93OmF1dG87XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/xiuxing/library/fozhou/zhou-general/zhou-general.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/xiuxing/library/fozhou/zhou-general/zhou-general.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n    <div class=\"top\">\n      <p class=\"title\">咒书详情</p>\n    </div>\n    <div class=\"central\">\n      <div class=\"up\">\n        <img src=\"../../../../../../assets/fozhou.png\">\n        <div class=\"introduce\">\n          <p class=\"bookName\">{{zhouInf.bookname}}</p>\n          <div #bookintroduce class=\"bookIntroduce\">\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"bottom\">\n      <div class=\"contral\">\n        <button (click)=\"readIntroduce()\">简介</button>\n        <button (click)=\"readContent()\">原文</button>\n      </div>\n      <div #displaytext class=\"main\">\n        \n      </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/components/xiuxing/library/fozhou/zhou-general/zhou-general.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/xiuxing/library/fozhou/zhou-general/zhou-general.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ZhouGeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZhouGeneralComponent", function() { return ZhouGeneralComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ZhouGeneralComponent = /** @class */ (function () {
    function ZhouGeneralComponent(router, http, storage) {
        this.router = router;
        this.http = http;
        this.storage = storage;
    }
    ZhouGeneralComponent.prototype.ngOnInit = function () {
        this.zhouInf = this.storage.get("zhouInf");
        this.displayInf = this.zhouInf.contentintroduce;
        this.bookintroduce.nativeElement.innerHTML = this.zhouInf.bookintroduce;
        this.displaytext.nativeElement.innerHTML = this.displayInf;
    };
    ZhouGeneralComponent.prototype.readIntroduce = function () {
        this.displayInf = this.zhouInf.contentintroduce;
        this.displaytext.nativeElement.innerHTML = this.displayInf;
    };
    ZhouGeneralComponent.prototype.readContent = function () {
        this.displayInf = this.zhouInf.yuanwen;
        this.displaytext.nativeElement.innerHTML = this.displayInf;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("bookintroduce"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ZhouGeneralComponent.prototype, "bookintroduce", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("displaytext"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ZhouGeneralComponent.prototype, "displaytext", void 0);
    ZhouGeneralComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-zhou-general',
            template: __webpack_require__(/*! ./zhou-general.component.html */ "./src/app/components/xiuxing/library/fozhou/zhou-general/zhou-general.component.html"),
            styles: [__webpack_require__(/*! ./zhou-general.component.css */ "./src/app/components/xiuxing/library/fozhou/zhou-general/zhou-general.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
    ], ZhouGeneralComponent);
    return ZhouGeneralComponent;
}());



/***/ }),

/***/ "./src/app/components/xiuxing/library/library.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/xiuxing/library/library.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\n    width:100%;\n    height:100%;\n    display:flex;\n    flex-direction: column;\n    font-family: KaiTi;\n}\n* {\n    padding:0;\n    margin:0;\n    list-style: none;\n}\n.top {\n    flex:0.5;\n}\n.title {\n\n    font-size: 2rem;\n    text-align: center;\n    font-weight: bold;\n}\n.central {\n    flex:2.5;\n    background:url('library-img.jpg') no-repeat;\n    background-size: 100%;\n}\n.sBox {\n    float:right;\n    width:60%;\n    height:15%;\n  \n}\n.sBox input {\n    width: 77%;\n    height:90%;\n    border-radius: 4%;\n    padding-left: 1rem;\n}\n.sBox button {\n    width:20%;\n    height:90%;  \n    border-radius: 6%; \n    \n}\nimg {\n    width:30%;\n    height:30%; \n}\n.bottom {\n    flex:5;\n    display:flex;\n    flex-direction: rwo;\n    margin-top:5px;\n}\n.left {\n    float:left;\n    flex:1;\n    text-align: center;\n    margin-right: 2px;\n}\n.bBtn {\n    width:100%;\n    background-color: rgb(152, 152, 235);\n    font-size:2rem;\n    font-family: KaiTi;\n}\n.bBtn:hover {\n    background-color: grey;\n}\n.right {\n    float:right;\n    flex:2.5;\n    text-align: center;\n    overflow:auto;\n    height:86%;\n    border-left: 0.05rem solid black;\n    border-bottom: 0.05rem solid black;\n    border-top:0.05rem solid black;\n    padding-top:1%;\n    padding-bottom:1%;\n  \n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy94aXV4aW5nL2xpYnJhcnkvbGlicmFyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksU0FBUztJQUNULFFBQVE7SUFDUixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFFBQVE7QUFDWjtBQUNBOztJQUVJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxRQUFRO0lBQ1IsMkNBQThEO0lBQzlELHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVOztBQUVkO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsaUJBQWlCOztBQUVyQjtBQUNDO0lBQ0csU0FBUztJQUNULFVBQVU7QUFDZDtBQUNBO0lBQ0ksTUFBTTtJQUNOLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLE1BQU07SUFDTixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysb0NBQW9DO0lBQ3BDLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFVBQVU7SUFDVixnQ0FBZ0M7SUFDaEMsa0NBQWtDO0lBQ2xDLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2QsaUJBQWlCOztBQUVyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMveGl1eGluZy9saWJyYXJ5L2xpYnJhcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZvbnQtZmFtaWx5OiBLYWlUaTtcbn1cbioge1xuICAgIHBhZGRpbmc6MDtcbiAgICBtYXJnaW46MDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuLnRvcCB7XG4gICAgZmxleDowLjU7XG59XG4udGl0bGUge1xuXG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jZW50cmFsIHtcbiAgICBmbGV4OjIuNTtcbiAgICBiYWNrZ3JvdW5kOnVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9saWJyYXJ5LWltZy5qcGdcIikgbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbn1cbi5zQm94IHtcbiAgICBmbG9hdDpyaWdodDtcbiAgICB3aWR0aDo2MCU7XG4gICAgaGVpZ2h0OjE1JTtcbiAgXG59XG4uc0JveCBpbnB1dCB7XG4gICAgd2lkdGg6IDc3JTtcbiAgICBoZWlnaHQ6OTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDQlO1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbn1cbi5zQm94IGJ1dHRvbiB7XG4gICAgd2lkdGg6MjAlO1xuICAgIGhlaWdodDo5MCU7ICBcbiAgICBib3JkZXItcmFkaXVzOiA2JTsgXG4gICAgXG59XG4gaW1nIHtcbiAgICB3aWR0aDozMCU7XG4gICAgaGVpZ2h0OjMwJTsgXG59XG4uYm90dG9tIHtcbiAgICBmbGV4OjU7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByd287XG4gICAgbWFyZ2luLXRvcDo1cHg7XG59XG4ubGVmdCB7XG4gICAgZmxvYXQ6bGVmdDtcbiAgICBmbGV4OjE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogMnB4O1xufVxuLmJCdG4ge1xuICAgIHdpZHRoOjEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MiwgMTUyLCAyMzUpO1xuICAgIGZvbnQtc2l6ZToycmVtO1xuICAgIGZvbnQtZmFtaWx5OiBLYWlUaTtcbn1cbi5iQnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xufVxuLnJpZ2h0IHtcbiAgICBmbG9hdDpyaWdodDtcbiAgICBmbGV4OjIuNTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6YXV0bztcbiAgICBoZWlnaHQ6ODYlO1xuICAgIGJvcmRlci1sZWZ0OiAwLjA1cmVtIHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1ib3R0b206IDAuMDVyZW0gc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXRvcDowLjA1cmVtIHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmctdG9wOjElO1xuICAgIHBhZGRpbmctYm90dG9tOjElO1xuICBcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/xiuxing/library/library.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/xiuxing/library/library.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n   <div class=\"top\">\n     <p class=\"title\">藏经阁</p>\n   </div>\n   <div class=\"central\">\n     <div class=\"sBox\">\n        <input type=\"text\" placeholder=\"请输入搜索的书名\" [(ngModel)]=\"searchInf\"><button class=\"sBtn\" (click)=\"search()\">搜索</button>\n      </div>\n   </div>\n   <div class=\"bottom\">\n     <div class=\"left\">     \n       <button class=\"bBtn\" (click)=\"fozhou()\">佛咒</button>\n       <button class=\"bBtn\" (click)=\"fojing()\">佛经</button>\n       <!-- <a [routerLink]=\"[ '/library/fozhou' ]\" class=\"bBtn\">佛咒</a>\n       <a [routerLink]=\"[ '/library/fojing' ]\" class=\"bBtn\">佛经</a> -->\n     </div>\n     <div class=\"right\">\n       <router-outlet></router-outlet>\n       \n     </div>\n   </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/xiuxing/library/library.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/xiuxing/library/library.component.ts ***!
  \*****************************************************************/
/*! exports provided: LibraryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryComponent", function() { return LibraryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/storage.service */ "./src/app/services/storage.service.ts");





var LibraryComponent = /** @class */ (function () {
    function LibraryComponent(router, http, storage) {
        this.router = router;
        this.http = http;
        this.storage = storage;
        this.list = [];
    }
    LibraryComponent.prototype.ngOnInit = function () {
    };
    LibraryComponent.prototype.fozhou = function () {
        this.router.navigate(['/library/fozhou']);
    };
    LibraryComponent.prototype.fojing = function () {
        this.router.navigate(['/library/fojing']);
    };
    LibraryComponent.prototype.search = function () {
        if (this.searchInf.length > 0) {
            this.storage.remove("searchInf");
            this.storage.set("searchInf", this.searchInf);
            this.router.navigate(['/searchResult']);
        }
    };
    LibraryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-library',
            template: __webpack_require__(/*! ./library.component.html */ "./src/app/components/xiuxing/library/library.component.html"),
            styles: [__webpack_require__(/*! ./library.component.css */ "./src/app/components/xiuxing/library/library.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]])
    ], LibraryComponent);
    return LibraryComponent;
}());



/***/ }),

/***/ "./src/app/components/xiuxing/library/search-result/search-result.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/xiuxing/library/search-result/search-result.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\n    width:100%;\n    height:100%;\n    display:flex;\n    flex-direction: column;\n    font-family: KaiTi;\n}\n * {\n     margin:0;\n     padding:0;\n     list-style: none;\n }\n .top {\n    flex:0.6;\n\n}\n .sBox {\n    margin:1rem auto;\n    width:64%;\n    height:50%;\n}\n .sBox input {\n    width:77%;\n    height:90%;\n    border-radius: 4%;\n    padding-left: 1rem;\n}\n .sBox button {\n    width:20%;\n    height:90%;  \n    border-radius: 10%; \n    font-weight: bold;\n    background-color: orange;\n}\n .central {\n    flex:0.3;\n    font-size: 1.3rem;\n    font-weight: bold;\n    border-bottom: 0.01rem solid grey;\n}\n .bottom {\n    flex:5;\n    text-align: center;\n    overflow:auto;\n    width:90%;\n    height:80%;\n    margin:0 auto;\n    border-bottom: 0.1rem solid black;\n\n \n}\n .list li {\n    display:block;\n    width:100%;\n    height:6em;\n    border-bottom: 0.05rem solid grey;\n}\n .item {\n    width:90%;\n    height:95%;\n    display:flex;\n    flex-direction: row;\n    \n}\n .iLeft {\n    flex:1;\n   \n}\n .iLeft img {\n    width:100%;\n    height:100%;\n}\n .iMiddle {\n    flex:3;\n\n}\n .bName {\n    height:60%;\n    font-size:1.2em;\n    text-align: center;\n}\n .iRight {\n    flex:0.6;\n    display:flex;\n    align-items: center;\n    font-size:3rem; \n    background-color: white;\n    border:none;\n    color:grey;\n  \n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy94aXV4aW5nL2xpYnJhcnkvc2VhcmNoLXJlc3VsdC9zZWFyY2gtcmVzdWx0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCO0NBQ0M7S0FDSSxRQUFRO0tBQ1IsU0FBUztLQUNULGdCQUFnQjtDQUNwQjtDQUNEO0lBQ0ksUUFBUTs7QUFFWjtDQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7Q0FDQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtDQUNBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtBQUM1QjtDQUNBO0lBQ0ksUUFBUTtJQUNSLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDO0NBQ0E7SUFDSSxNQUFNO0lBQ04sa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixTQUFTO0lBQ1QsVUFBVTtJQUNWLGFBQWE7SUFDYixpQ0FBaUM7OztBQUdyQztDQUNBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixVQUFVO0lBQ1YsaUNBQWlDO0FBQ3JDO0NBQ0E7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWixtQkFBbUI7O0FBRXZCO0NBQ0E7SUFDSSxNQUFNOztBQUVWO0NBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmO0NBQ0E7SUFDSSxNQUFNOztBQUVWO0NBQ0E7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGtCQUFrQjtBQUN0QjtDQUNBO0lBQ0ksUUFBUTtJQUNSLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsVUFBVTs7QUFFZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMveGl1eGluZy9saWJyYXJ5L3NlYXJjaC1yZXN1bHQvc2VhcmNoLXJlc3VsdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHkge1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZm9udC1mYW1pbHk6IEthaVRpO1xufVxuICoge1xuICAgICBtYXJnaW46MDtcbiAgICAgcGFkZGluZzowO1xuICAgICBsaXN0LXN0eWxlOiBub25lO1xuIH1cbi50b3Age1xuICAgIGZsZXg6MC42O1xuXG59XG4uc0JveCB7XG4gICAgbWFyZ2luOjFyZW0gYXV0bztcbiAgICB3aWR0aDo2NCU7XG4gICAgaGVpZ2h0OjUwJTtcbn1cbi5zQm94IGlucHV0IHtcbiAgICB3aWR0aDo3NyU7XG4gICAgaGVpZ2h0OjkwJTtcbiAgICBib3JkZXItcmFkaXVzOiA0JTtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG59XG4uc0JveCBidXR0b24ge1xuICAgIHdpZHRoOjIwJTtcbiAgICBoZWlnaHQ6OTAlOyAgXG4gICAgYm9yZGVyLXJhZGl1czogMTAlOyBcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG59XG4uY2VudHJhbCB7XG4gICAgZmxleDowLjM7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMC4wMXJlbSBzb2xpZCBncmV5O1xufVxuLmJvdHRvbSB7XG4gICAgZmxleDo1O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvdmVyZmxvdzphdXRvO1xuICAgIHdpZHRoOjkwJTtcbiAgICBoZWlnaHQ6ODAlO1xuICAgIG1hcmdpbjowIGF1dG87XG4gICAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIHNvbGlkIGJsYWNrO1xuXG4gXG59XG4ubGlzdCBsaSB7XG4gICAgZGlzcGxheTpibG9jaztcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDo2ZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMC4wNXJlbSBzb2xpZCBncmV5O1xufVxuLml0ZW0ge1xuICAgIHdpZHRoOjkwJTtcbiAgICBoZWlnaHQ6OTUlO1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIFxufVxuLmlMZWZ0IHtcbiAgICBmbGV4OjE7XG4gICBcbn1cbi5pTGVmdCBpbWcge1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7XG59XG4uaU1pZGRsZSB7XG4gICAgZmxleDozO1xuXG59XG4uYk5hbWUge1xuICAgIGhlaWdodDo2MCU7XG4gICAgZm9udC1zaXplOjEuMmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pUmlnaHQge1xuICAgIGZsZXg6MC42O1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTozcmVtOyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6bm9uZTtcbiAgICBjb2xvcjpncmV5O1xuICBcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/xiuxing/library/search-result/search-result.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/xiuxing/library/search-result/search-result.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <div class=\"top\">\n    <div class=\"sBox\">\n      <input type=\"text\" placeholder=\"请输入搜索的书名\" [(ngModel)]=\"searchInf\"><button class=\"sBtn\" (click)=\"search()\">搜索</button>\n    </div>\n  </div>\n  <div class=\"central\">搜索结果有{{number}}个</div>\n  <div class=\"bottom\">\n    <ul class=\"list\">\n      <li *ngFor=\"let item of list\">\n        <div class=\"item\">\n           <div class=\"iLeft\">\n               <img src=\"../../../../../assets/{{item.booktype}}.png\">\n            </div>\n            <div class=\"iMiddle\">\n              <p class=\"bName\">{{item[\"bookname\"]}}</p>\n              <p class=\"rNum\">修读人数：{{item[\"readnumber\"]}}</p> \n            </div>\n            <button class=\"iRight\" (click)=\"read(item)\">&gt;</button>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/xiuxing/library/search-result/search-result.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/xiuxing/library/search-result/search-result.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SearchResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultComponent", function() { return SearchResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/storage.service */ "./src/app/services/storage.service.ts");





var SearchResultComponent = /** @class */ (function () {
    function SearchResultComponent(router, http, storage) {
        this.router = router;
        this.http = http;
        this.storage = storage;
        this.number = 0;
        this.list = [];
    }
    SearchResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        var inf = this.storage.get("searchInf");
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
        this.http.post("/api/search", { "bookname": inf }, httpOptions).subscribe(function (response) {
            _this.list = response;
            _this.number = _this.list.length;
        });
    };
    SearchResultComponent.prototype.search = function () {
        var _this = this;
        if (this.searchInf.length > 0) {
            var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
            this.http.post("/api/search", { "bookname": this.searchInf }, httpOptions).subscribe(function (response) {
                _this.list = response;
                _this.number = _this.list.length;
                _this.storage.remove("searchInf");
                _this.storage.set("searchInf", _this.searchInf);
            });
            this.router.navigate(['/searchResult']);
        }
    };
    SearchResultComponent.prototype.read = function (item) {
        if (item.booktype == "fozhou") {
            this.storage.set("zhouInf", item);
            this.router.navigate(['/zhouGeneral']);
        }
        else {
            this.storage.set("jingInf", item);
            this.router.navigate(['/jingGeneral']);
        }
    };
    SearchResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-result',
            template: __webpack_require__(/*! ./search-result.component.html */ "./src/app/components/xiuxing/library/search-result/search-result.component.html"),
            styles: [__webpack_require__(/*! ./search-result.component.css */ "./src/app/components/xiuxing/library/search-result/search-result.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]])
    ], SearchResultComponent);
    return SearchResultComponent;
}());



/***/ }),

/***/ "./src/app/components/xiuxing/simiao/simiao.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/xiuxing/simiao/simiao.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\n    text-align: center;\n    font-family: \"华文新魏\";\n}\n\nh3{\n    font-family: \"华文行楷\"\n}\n\ndiv{\n    margin:10px;\n}\n\n.square{\n        width: 10px;\n        height: 10px;\n        float: left;\n        margin-right: 20px;\n        \n}\n\n.all{\n    background-color: rgb(245, 217, 141);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy94aXV4aW5nL3NpbWlhby9zaW1pYW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO1FBQ1EsV0FBVztRQUNYLFlBQVk7UUFDWixXQUFXO1FBQ1gsa0JBQWtCOztBQUUxQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMveGl1eGluZy9zaW1pYW8vc2ltaWFvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IFwi5Y2O5paH5paw6a2PXCI7XG59XG5cbmgze1xuICAgIGZvbnQtZmFtaWx5OiBcIuWNjuaWh+ihjOalt1wiXG59XG5cbmRpdntcbiAgICBtYXJnaW46MTBweDtcbn1cblxuLnNxdWFyZXtcbiAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgXG59XG5cbi5hbGx7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjE3LCAxNDEpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/xiuxing/simiao/simiao.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/xiuxing/simiao/simiao.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='all'>\n\n\n  <br>\n  <h1>寺庙推荐</h1>\n  <hr>\n  <div>\n    <img style=\"float:left;margin:10px;\" src=\"../../../assets/donghuatemple.jpg\" width=\"200\" height=\"140\">\n    <div>\n      <h3>东华禅寺</h3>\n      <a href=\"http://www.simiao.cn/information/7.html\" target=\"_parent\">唐龙朔元年，六祖惠能于黄梅受衣钵，南归经此寺而隐修......</a>\n    </div>\n    &nbsp;\n  </div>\n\n  &nbsp;\n\n\n  <div>\n    <hr>\n    <img style=\"float:left;margin:8px;\" src=\"../../../assets/fuzhouxichansi.jpg\" width=\"200\" height=\"140\">\n    <div>\n      <h3>福州西禅寺</h3>\n      <a href=\"http://www.simiao.cn/information/14.html\" target=\"_parent\">西禅寺名列福州五大禅林之一，为全国重点寺庙，位于西......</a>\n    </div>\n    <br>\n  </div>\n  <br>\n\n\n  <div>\n    <hr>\n    <img style=\"float:left;margin:10px;\" src=\"../../../assets/nanputuosi.jpg\" width=\"200\" height=\"140\">\n    <div>\n      <h3>南普陀寺</h3>\n      <a href=\"http://www.simiao.cn/information/2.html\">南普陀寺位于福建省厦门市东南五老峰下，面临碧澄海港，该寺......</a>\n    </div>\n    <br>\n  </div>\n  <hr>\n\n  <div style=\"margin-left:40%;background-color: blue;\" class=\"square\" (click)=\"firstpage()\"></div>\n  <div class=\"square\" style=\"background-color:purple;\" (click)=\"secondpage()\"></div>\n  <div class=\"square\" style=\"background-color: green;\" (click)=\"thirdpage()\"></div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/components/xiuxing/simiao/simiao.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/xiuxing/simiao/simiao.component.ts ***!
  \***************************************************************/
/*! exports provided: SimiaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimiaoComponent", function() { return SimiaoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SimiaoComponent = /** @class */ (function () {
    function SimiaoComponent(router) {
        this.router = router;
    }
    SimiaoComponent.prototype.ngOnInit = function () {
    };
    SimiaoComponent.prototype.firstpage = function () {
        this.router.navigate(['../simiao']);
    };
    SimiaoComponent.prototype.secondpage = function () {
        this.router.navigate(['../simiaotwo']);
    };
    SimiaoComponent.prototype.thirdpage = function () {
        this.router.navigate(['../simiaothree']);
    };
    SimiaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-simiao',
            template: __webpack_require__(/*! ./simiao.component.html */ "./src/app/components/xiuxing/simiao/simiao.component.html"),
            styles: [__webpack_require__(/*! ./simiao.component.css */ "./src/app/components/xiuxing/simiao/simiao.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SimiaoComponent);
    return SimiaoComponent;
}());



/***/ }),

/***/ "./src/app/components/xiuxing/simiao/simiaothree/simiaothree.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/xiuxing/simiao/simiaothree/simiaothree.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\n    text-align: center;\n    font-family: \"华文新魏\";\n}\n\nh3{\n    font-family: \"华文行楷\"\n}\n\ndiv{\n    margin:10px;\n}\n\n.square{\n        width: 10px;\n        height: 10px;\n        float: left;\n        margin-right: 20px;\n        \n}\n\n.all{\n    background-color: rgb(245, 217, 141);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy94aXV4aW5nL3NpbWlhby9zaW1pYW90aHJlZS9zaW1pYW90aHJlZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7UUFDUSxXQUFXO1FBQ1gsWUFBWTtRQUNaLFdBQVc7UUFDWCxrQkFBa0I7O0FBRTFCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy94aXV4aW5nL3NpbWlhby9zaW1pYW90aHJlZS9zaW1pYW90aHJlZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBcIuWNjuaWh+aWsOmtj1wiO1xufVxuXG5oM3tcbiAgICBmb250LWZhbWlseTogXCLljY7mlofooYzmpbdcIlxufVxuXG5kaXZ7XG4gICAgbWFyZ2luOjEwcHg7XG59XG5cbi5zcXVhcmV7XG4gICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIFxufVxuXG4uYWxse1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDIxNywgMTQxKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/xiuxing/simiao/simiaothree/simiaothree.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/xiuxing/simiao/simiaothree/simiaothree.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='all'>\n\n  <br>\n  <h1>寺庙推荐</h1>\n\n  <hr>\n  <div>\n    <img style=\"float:left;margin:10px;\" src=\"../../../assets/guanyingusi.jpg\" width=\"200\" height=\"140\">\n    <div>\n      <h3>观音古寺</h3>\n      <a href=\"http://www.simiao.cn/information/57.html\" target=\"_parent\">观音古寺位于罗浮山麓，罗浮山又名东樵山，位于......</a>\n    </div>\n    &nbsp;\n  </div>\n\n  &nbsp;\n\n\n  <div>\n    <hr>\n    <img style=\"float:left;margin:8px;\" src=\"../../../assets/yufosi.jpeg\" width=\"200\" height=\"140\">\n    <div>\n      <h3>玉佛寺</h3>\n      <a href=\"http://www.simiao.cn/information/44.html\" target=\"_parent\">玉佛禅寺坐落在上海市区北侧的安远、江宁路口。建于1918年......</a>\n    </div>\n    <br>\n  </div>\n\n\n  <div>\n    <hr>\n    <img style=\"float:left;margin:10px;\" src=\"../../../assets/ziguosi.jpg\" width=\"200\" height=\"140\">\n    <div>\n      <h3>资国寺</h3>\n      <a href=\"http://www.simiao.cn/information/40.html\">资国寺为闽东千年古刹，也是福鼎市原六大寺之一......</a>\n    </div>\n    <br>\n  </div>\n  <br>\n  <hr>\n\n  <div style=\"margin-left:40%;background-color: blue;\" class=\"square\" (click)=\"firstpage()\"></div>\n  <div class=\"square\" style=\"background-color:purple;\" (click)=\"secondpage()\"></div>\n  <div class=\"square\" style=\"background-color: green;\" (click)=\"thirdpage()\"></div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/xiuxing/simiao/simiaothree/simiaothree.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/xiuxing/simiao/simiaothree/simiaothree.component.ts ***!
  \********************************************************************************/
/*! exports provided: SimiaothreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimiaothreeComponent", function() { return SimiaothreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SimiaothreeComponent = /** @class */ (function () {
    function SimiaothreeComponent(router) {
        this.router = router;
    }
    SimiaothreeComponent.prototype.ngOnInit = function () {
    };
    SimiaothreeComponent.prototype.firstpage = function () {
        this.router.navigate(['../simiao']);
    };
    SimiaothreeComponent.prototype.secondpage = function () {
        this.router.navigate(['../simiaotwo']);
    };
    SimiaothreeComponent.prototype.thirdpage = function () {
        this.router.navigate(['../simiaothree']);
    };
    SimiaothreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-simiaothree',
            template: __webpack_require__(/*! ./simiaothree.component.html */ "./src/app/components/xiuxing/simiao/simiaothree/simiaothree.component.html"),
            styles: [__webpack_require__(/*! ./simiaothree.component.css */ "./src/app/components/xiuxing/simiao/simiaothree/simiaothree.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SimiaothreeComponent);
    return SimiaothreeComponent;
}());



/***/ }),

/***/ "./src/app/components/xiuxing/simiao/simiaotwo/simiaotwo.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/xiuxing/simiao/simiaotwo/simiaotwo.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\n    text-align: center;\n    font-family: \"华文新魏\";\n}\n\nh3{\n    font-family: \"华文行楷\"\n}\n\ndiv{\n    margin:10px;\n}\n\n.square{\n        width: 10px;\n        height: 10px;\n        float: left;\n        margin-right: 20px;\n        \n}\n\n.all{\n    background-color: rgb(245, 217, 141);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy94aXV4aW5nL3NpbWlhby9zaW1pYW90d28vc2ltaWFvdHdvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtRQUNRLFdBQVc7UUFDWCxZQUFZO1FBQ1osV0FBVztRQUNYLGtCQUFrQjs7QUFFMUI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3hpdXhpbmcvc2ltaWFvL3NpbWlhb3R3by9zaW1pYW90d28uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogXCLljY7mlofmlrDprY9cIjtcbn1cblxuaDN7XG4gICAgZm9udC1mYW1pbHk6IFwi5Y2O5paH6KGM5qW3XCJcbn1cblxuZGl2e1xuICAgIG1hcmdpbjoxMHB4O1xufVxuXG4uc3F1YXJle1xuICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICBcbn1cblxuLmFsbHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyMTcsIDE0MSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/xiuxing/simiao/simiaotwo/simiaotwo.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/xiuxing/simiao/simiaotwo/simiaotwo.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='all'>\n\n\n  <br>\n  <h1>寺庙推荐</h1>\n\n  <hr>\n  <div>\n    <img style=\"float:left;margin:10px;\" src=\"../../../assets/jingtaipumingsi.jpg\" width=\"200\" height=\"140\">\n    <div>\n      <h3>荆台普明寺</h3>\n      <a href=\"http://www.simiao.cn/information/49.html\" target=\"_parent\">普明寺始建于明朝万历年间，原名普润庵，后名普名寺......</a>\n    </div>\n    &nbsp;\n  </div>\n\n  &nbsp;\n\n\n  <div>\n    <hr>\n    <img style=\"float:left;margin:8px;\" src=\"../../../assets/shanxishuijingsi.jpg\" width=\"200\" height=\"140\">\n    <div>\n      <h3>山西水晶院</h3>\n      <a href=\"http://www.simiao.cn/information/58.html\" target=\"_parent\">山西水晶院始建于隋末，是著名的佛教寺院，经过......</a>\n    </div>\n    <br>\n  </div>\n  <br>\n\n\n  <div>\n    <hr>\n    <img style=\"float:left;margin:10px;\" src=\"../../../assets/baihesi.jpg\" width=\"200\" height=\"140\">\n    <div>\n      <h3> 弋阳县白鹤寺</h3>\n      <a href=\"http://www.simiao.cn/information/63.html\">弋阳县白鹤寺位于江西上饶市弋阳县三县岭镇姚畈村附近,比邻......</a>\n    </div>\n    <br>\n  </div>\n  <hr>\n\n  <div style=\"margin-left:40%;background-color: blue;\" class=\"square\" (click)=\"firstpage()\"></div>\n  <div class=\"square\" style=\"background-color:purple;\" (click)=\"secondpage()\"></div>\n  <div class=\"square\" style=\"background-color: green;\" (click)=\"thirdpage()\"></div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/xiuxing/simiao/simiaotwo/simiaotwo.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/xiuxing/simiao/simiaotwo/simiaotwo.component.ts ***!
  \****************************************************************************/
/*! exports provided: SimiaotwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimiaotwoComponent", function() { return SimiaotwoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SimiaotwoComponent = /** @class */ (function () {
    function SimiaotwoComponent(router) {
        this.router = router;
    }
    SimiaotwoComponent.prototype.ngOnInit = function () {
    };
    SimiaotwoComponent.prototype.firstpage = function () {
        this.router.navigate(['../simiao']);
    };
    SimiaotwoComponent.prototype.secondpage = function () {
        this.router.navigate(['../simiaotwo']);
    };
    SimiaotwoComponent.prototype.thirdpage = function () {
        this.router.navigate(['../simiaothree']);
    };
    SimiaotwoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-simiaotwo',
            template: __webpack_require__(/*! ./simiaotwo.component.html */ "./src/app/components/xiuxing/simiao/simiaotwo/simiaotwo.component.html"),
            styles: [__webpack_require__(/*! ./simiaotwo.component.css */ "./src/app/components/xiuxing/simiao/simiaotwo/simiaotwo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SimiaotwoComponent);
    return SimiaotwoComponent;
}());



/***/ }),

/***/ "./src/app/components/xiuxing/xinde/addxinde/addxinde.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/xiuxing/xinde/addxinde/addxinde.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\n    background-image: url('gongde-bg.jpg');\n    height: 100%;\n    width: 100%;\n    background-size: 100%;\n  }\n\n  .input-group{\n      color: black\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy94aXV4aW5nL3hpbmRlL2FkZHhpbmRlL2FkZHhpbmRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQ0FBNEQ7SUFDNUQsWUFBWTtJQUNaLFdBQVc7SUFDWCxxQkFBcUI7RUFDdkI7O0VBRUE7TUFDSTtFQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy94aXV4aW5nL3hpbmRlL2FkZHhpbmRlL2FkZHhpbmRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2dvbmdkZS1iZy5qcGdcIik7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgfVxuXG4gIC5pbnB1dC1ncm91cHtcbiAgICAgIGNvbG9yOiBibGFja1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/xiuxing/xinde/addxinde/addxinde.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/xiuxing/xinde/addxinde/addxinde.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n    <!-- <link rel=\"stylesheet\" href=\"https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\"> -->\n    <link rel=\"stylesheet\" href=\"http://www.bootcss.com/p/buttons/css/buttons.css\">\n    <link href=\"http://cdn.bootcss.com/font-awesome/4.2.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n    \n    </head>\n    <body>\n    <!-- <script src=\"http://cdn.bootcss.com/jquery/1.11.2/jquery.min.js\"></script>\n    <script type=\"text/javascript\" src=\"http://www.bootcss.com/p/buttons/js/buttons.js\"></script> -->\n    <script src=\"https://cdn.bootcss.com/jquery/3.2.1/jquery.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script>\n    <script src=\"https://cdn.bootcss.com/popper.js/1.12.9/umd/popper.min.js\" integrity=\"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q\" crossorigin=\"anonymous\"></script>\n    <script src=\"https://cdn.bootcss.com/bootstrap/4.0.0/js/bootstrap.min.js\" integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\" crossorigin=\"anonymous\"></script>\n    \n  </body>\n<flash-messages></flash-messages>\n\n<div class=\"body\">\n    <br>\n    <br>\n    <br>\n    <br>\n\n  <div class=\"container\">\n    <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\" id=\"basic-addon1\">标题</span>\n        </div>\n        <input type=\"text\" class=\"form-control\" placeholder=\"不断学习，随缘度日\" aria-label=\"不断学习，随缘度日\" aria-describedby=\"basic-addon1\" name=\"title\" [(ngModel)]=\"this.Message.Title\" >\n      </div>\n      \n      <div class=\"input-group\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\">心得</span>\n        </div>\n        <textarea class=\"form-control rounded-0 \" rows=\"10\" type=\"text\" aria-label=\"With textarea\" placeholder=\"学习永无止境，认识到自己的不足就是一种进步，活到老学到老。\" [(ngModel)]=\"this.Message.Xinde\" name=\"Xinde\" id=\"Xinde\" ></textarea>\n      </div>\n      <br>\n      <div class=\"text-center\">\n          <button class=\"btn btn-warning btn-block  btn-lg\" type=\"button\" (click)=\"add()\" >添加</button>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/xiuxing/xinde/addxinde/addxinde.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/xiuxing/xinde/addxinde/addxinde.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddxindeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddxindeComponent", function() { return AddxindeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





var AddxindeComponent = /** @class */ (function () {
    function AddxindeComponent(http, flashMessagesService, route) {
        this.http = http;
        this.flashMessagesService = flashMessagesService;
        this.route = route;
        this.Message = {
            WechatID: "asd",
            Xinde: "",
            Title: ""
        };
    }
    AddxindeComponent.prototype.ngOnInit = function () {
    };
    AddxindeComponent.prototype.add = function () {
        var _this = this;
        console.log(this.Message);
        if (this.Message.Xinde == "") {
            this.flashMessagesService.show("心得不能为空！", { cssClass: "alert-danger", timeout: 3000 });
        }
        else if (this.Message.Title == "") {
            this.flashMessagesService.show("心得标题不能为空！", { cssClass: "alert-danger", timeout: 3000 });
        }
        else {
            var api = '/api/xiuxing/xinde/addxinde';
            var HttpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
            };
            this.http.post(api, this.Message, HttpOptions).subscribe(function (res) {
                console.log(res);
                if (res) {
                    _this.route.navigate(['/xiuxing/xinde']);
                }
            });
        }
    };
    AddxindeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addxinde',
            template: __webpack_require__(/*! ./addxinde.component.html */ "./src/app/components/xiuxing/xinde/addxinde/addxinde.component.html"),
            styles: [__webpack_require__(/*! ./addxinde.component.css */ "./src/app/components/xiuxing/xinde/addxinde/addxinde.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddxindeComponent);
    return AddxindeComponent;
}());



/***/ }),

/***/ "./src/app/components/xiuxing/xinde/xinde.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/xiuxing/xinde/xinde.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pullleft{\n    width: 20%;\n    float: left;\n    position: relative;\n    left: 20px;\n  }\n  \n.pullright{\n    width: 10%;\n    float: right;\n    clear:right;\n}\n  \n.body {\n  background-image: url('gongde-bg.jpg');\n  height: 100%;\n  width: 100%;\n  background-size: 100%;\n}\n  \n.list-group11{\n  background-color:#5b8a00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy94aXV4aW5nL3hpbmRlL3hpbmRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixVQUFVO0VBQ1o7O0FBRUY7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtFQUNFLHNDQUF5RDtFQUN6RCxZQUFZO0VBQ1osV0FBVztFQUNYLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMveGl1eGluZy94aW5kZS94aW5kZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnB1bGxsZWZ0e1xuICAgIHdpZHRoOiAyMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDIwcHg7XG4gIH1cbiAgXG4ucHVsbHJpZ2h0e1xuICAgIHdpZHRoOiAxMCU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNsZWFyOnJpZ2h0O1xufVxuXG4uYm9keSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9nb25nZGUtYmcuanBnXCIpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG59XG5cbi5saXN0LWdyb3VwMTF7XG4gIGJhY2tncm91bmQtY29sb3I6IzViOGEwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/xiuxing/xinde/xinde.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/xiuxing/xinde/xinde.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n  <!-- <link rel=\"stylesheet\" href=\"https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\"> -->\n  <link rel=\"stylesheet\" href=\"http://www.bootcss.com/p/buttons/css/buttons.css\">\n  <link href=\"http://cdn.bootcss.com/font-awesome/4.2.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n</head>\n<body>\n<!-- <script src=\"http://cdn.bootcss.com/jquery/1.11.2/jquery.min.js\"></script>\n<script type=\"text/javascript\" src=\"http://www.bootcss.com/p/buttons/js/buttons.js\"></script> -->\n<script src=\"https://cdn.bootcss.com/jquery/3.2.1/jquery.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script>\n<script src=\"https://cdn.bootcss.com/popper.js/1.12.9/umd/popper.min.js\" integrity=\"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q\" crossorigin=\"anonymous\"></script>\n<script src=\"https://cdn.bootcss.com/bootstrap/4.0.0/js/bootstrap.min.js\" integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\" crossorigin=\"anonymous\"></script>\n\n</body>\n\n\n\n\n<div class=\"body\">\n  <div class=\"card-header\">\n    <header class=\"blog-header py-3\">\n      <div class=\"row flex-nowrap justify-content-between align-items-center\">\n        <div class=\"col-4 pt-1\">\n          <h3 class=\"text-muted\">心得</h3>\n        </div>\n        <div class=\"col-4 d-flex justify-content-end align-items-center\">\n            <a class=\"nav-link disabled\"><button class=\"button button-highlight button-circle button-small\" [routerLink]=\"[ '/xiuxing/xinde/addxinde']\"><i class=\"fa fa-plus\"></i></button></a>\n          </div>\n      </div>\n    </header>\n  </div>         \n  <div class=\"list-group\" *ngFor=\"let item of tablePageList\">\n    <a class=\"list-group-item list-group-item-warning flex-column align-items-start\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\">{{item.Title}}</h5>\n        <!-- <small>{{item.Createdat}}</small> -->\n      </div>\n      <p class=\"mb-1\" >{{item.Xinde}}</p>\n    </a>\n  </div>\n  <button type=\"button\" class=\"btn btn-secondary\" [hidden]=\"!preShow\" (click)=\"showPrePage()\" href='javascript:void(0)'>上一页</button>\n  <div class=\"pull-right\">\n  <button type=\"button\" class=\"btn btn-secondary \" [hidden]=\"!nextShow\" (click)=\"showNextPage()\" href='javascript:void(0)' >下一页</button>\n  </div>\n  <!-- <nav aria-label=\"Page navigation example\" class=\"text-align\">\n    <ul class=\"pagination\">\n      <li ><a class=\"page-link\" href='javascript:void(0)' [hidden]=\"!preShow\" disabled=\"!preShow\" (click)=\"showPrePage()\">上一页</a></li>\n      <li ><a class=\"page-link\" href='javascript:void(0)' [hidden]=\"!nextShow\" disabled=\"!nextShow\" (click)=\"showNextPage()\">下一页</a></li>\n    </ul>\n  </nav> -->\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/xiuxing/xinde/xinde.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/xiuxing/xinde/xinde.component.ts ***!
  \*************************************************************/
/*! exports provided: XindeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XindeComponent", function() { return XindeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var XindeComponent = /** @class */ (function () {
    function XindeComponent(http) {
        this.http = http;
        this.messagelist = [];
        this.tableList = [];
        this.tablePageList = []; //分页后前台显示数据
        this.pageNo = 1; //当前页码
        this.preShow = false; //上一页
        this.nextShow = false; //下一页
        this.pageSize = 5; //单页显示数
        this.curPage = 1; //当前页
        this.pageNos = [5, 10];
    }
    XindeComponent.prototype.ngOnInit = function () {
        this.getxinde();
    };
    XindeComponent.prototype.getxinde = function () {
        var _this = this;
        var api = '/api/xiuxing/xinde';
        this.http.get(api).subscribe(function (res) {
            console.log(res);
            _this.addxinde(res);
            _this.getPageList();
            _this.onChangePageSize(3);
        });
    };
    XindeComponent.prototype.addxinde = function (message) {
        this.messagelist = message;
    };
    XindeComponent.prototype.getPageList = function () {
        if (this.messagelist.length >= 1) { //如果有数据
            if (this.messagelist.length % this.pageSize === 0) { //如果刚好10/5=2，刚好两页，否则9%5=1，就再多加一页
                this.pageNo = Math.floor(this.messagelist.length / this.pageSize); //当前页等于，Math.floor，返回一个小于等于参数的最大整数
            }
            else {
                this.pageNo = Math.floor(this.messagelist.length / this.pageSize) + 1;
            }
            if (this.pageNo < this.curPage) {
                this.curPage = this.curPage - 1;
            }
            if (this.pageNo === 1 || this.curPage === this.pageNo) {
                this.preShow = this.curPage !== 1;
                this.nextShow = false;
            }
            else {
                this.preShow = this.curPage !== 1;
                this.nextShow = true;
            }
        }
        else {
            this.messagelist.length = 0;
            this.pageNo = 1; //当前页为1
            this.curPage = 1; //当前页为1
        }
        this.tablePageList = this.messagelist.slice((this.curPage - 1) * this.pageSize, (this.curPage) * this.pageSize);
    };
    //点击上一页方法
    XindeComponent.prototype.showPrePage = function () {
        this.curPage--;
        if (this.curPage >= 1) {
            this.getPageList();
        }
        else {
            this.curPage = 1;
        }
    };
    //点击下一页方法
    XindeComponent.prototype.showNextPage = function () {
        this.curPage++;
        if (this.curPage <= this.pageNo) {
            this.getPageList();
        }
        else {
            this.curPage = this.pageNo;
        }
    };
    //改变每页显示方法
    XindeComponent.prototype.onChangePageSize = function (value) {
        this.pageSize = value;
        this.curPage = 1;
        this.getPageList();
    };
    XindeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-xinde',
            template: __webpack_require__(/*! ./xinde.component.html */ "./src/app/components/xiuxing/xinde/xinde.component.html"),
            styles: [__webpack_require__(/*! ./xinde.component.css */ "./src/app/components/xiuxing/xinde/xinde.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], XindeComponent);
    return XindeComponent;
}());



/***/ }),

/***/ "./src/app/components/xiuxing/xiuxing.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/xiuxing/xiuxing.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\r\n    /* background-image: url(\"../../../assets/xiuxing.jpg\"); */\r\n    height: 100%;\r\n    width: 100%;\r\n    background-size: 100%;\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n/*轮播图*/\r\n\r\n\r\n.viewport {\r\n    /*position: relative;*/\r\n    overflow: hidden;\r\n    height: 30%;\r\n}\r\n\r\n\r\n.wrap {\r\n    position: relative;\r\n    width: 300vw;\r\n    overflow: hidden;\r\n    -webkit-animation: lunbo linear 15s infinite 1s normal;\r\n            animation: lunbo linear 15s infinite 1s normal;\r\n}\r\n\r\n\r\n.wrap img {\r\n    display: relative;\r\n    width: 100vw;\r\n    height: 65vw;\r\n    float: left;\r\n}\r\n\r\n\r\n@-webkit-keyframes lunbo {\r\n    0% {\r\n        left: 0;\r\n    }\r\n    20% {\r\n        left: -0vw;\r\n    }\r\n    40% {\r\n        left: -100vw;\r\n    }\r\n    60% {\r\n        left: -100vw;\r\n    }\r\n    80% {\r\n        left: -200vw;\r\n    }\r\n    100% {\r\n        left: -200vw;\r\n    }\r\n}\r\n\r\n\r\n@keyframes lunbo {\r\n    0% {\r\n        left: 0;\r\n    }\r\n    20% {\r\n        left: -0vw;\r\n    }\r\n    40% {\r\n        left: -100vw;\r\n    }\r\n    60% {\r\n        left: -100vw;\r\n    }\r\n    80% {\r\n        left: -200vw;\r\n    }\r\n    100% {\r\n        left: -200vw;\r\n    }\r\n}\r\n\r\n\r\n/*字幕滚动条*/\r\n\r\n\r\n@-webkit-keyframes rowup {\r\n    0% {\r\n        -webkit-transform: translate3d(0, 0, 0);\r\n        transform: translate3d(0, 0, 0);\r\n    }\r\n    100% {\r\n        -webkit-transform: translate3d(0, -307px, 0);\r\n        transform: translate3d(0, -307px, 0);\r\n    }\r\n}\r\n\r\n\r\n@keyframes rowup {\r\n    0% {\r\n        -webkit-transform: translate3d(0, 0, 0);\r\n        transform: translate3d(0, 0, 0);\r\n    }\r\n    100% {\r\n        -webkit-transform: translate3d(0, -307px, 0);\r\n        transform: translate3d(0, -307px, 0);\r\n    }\r\n}\r\n\r\n\r\n.list {\r\n    width: 90%;\r\n    height: 40%;\r\n    border: 3px solid #999;\r\n    margin: auto;\r\n    overflow: hidden;\r\n    text-align: center\r\n}\r\n\r\n\r\n.list .rowup {\r\n    -webkit-animation: 20s rowup linear infinite normal;\r\n    animation: 20s rowup linear infinite normal;\r\n    position: relative;\r\n}\r\n\r\n\r\n.item {\r\n    font-size: 120%;\r\n    font-family: \"Times New Roman\", Georgia, LiSu;\r\n}\r\n\r\n\r\na {\r\n    overflow: scroll;\r\n    font-size: 150%;\r\n    flex: 1;\r\n    margin-left: 30px\r\n}\r\n\r\n\r\n.line1,\r\n.line2 {\r\n    display: flex;\r\n    width: 100%;\r\n    margin: 20px 0px\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy94aXV4aW5nL3hpdXhpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBEQUEwRDtJQUMxRCxZQUFZO0lBQ1osV0FBVztJQUNYLHFCQUFxQjtJQUNyQixrQ0FBa0M7SUFDbEMsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7OztBQUdBLE1BQU07OztBQUVOO0lBQ0ksc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsc0RBQThDO1lBQTlDLDhDQUE4QztBQUNsRDs7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0FBQ2Y7OztBQUVBO0lBQ0k7UUFDSSxPQUFPO0lBQ1g7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOzs7QUFuQkE7SUFDSTtRQUNJLE9BQU87SUFDWDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7OztBQUdBLFFBQVE7OztBQUVSO0lBQ0k7UUFDSSx1Q0FBdUM7UUFDdkMsK0JBQStCO0lBQ25DO0lBQ0E7UUFDSSw0Q0FBNEM7UUFDNUMsb0NBQW9DO0lBQ3hDO0FBQ0o7OztBQVRBO0lBQ0k7UUFDSSx1Q0FBdUM7UUFDdkMsK0JBQStCO0lBQ25DO0lBQ0E7UUFDSSw0Q0FBNEM7UUFDNUMsb0NBQW9DO0lBQ3hDO0FBQ0o7OztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQjtBQUNKOzs7QUFFQTtJQUNJLG1EQUFtRDtJQUNuRCwyQ0FBMkM7SUFDM0Msa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZiw2Q0FBNkM7QUFDakQ7OztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixPQUFPO0lBQ1A7QUFDSjs7O0FBRUE7O0lBRUksYUFBYTtJQUNiLFdBQVc7SUFDWDtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy94aXV4aW5nL3hpdXhpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHtcclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy94aXV4aW5nLmpwZ1wiKTsgKi9cclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuXHJcbi8q6L2u5pKt5Zu+Ki9cclxuXHJcbi52aWV3cG9ydCB7XHJcbiAgICAvKnBvc2l0aW9uOiByZWxhdGl2ZTsqL1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGhlaWdodDogMzAlO1xyXG59XHJcblxyXG4ud3JhcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMzAwdnc7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYW5pbWF0aW9uOiBsdW5ibyBsaW5lYXIgMTVzIGluZmluaXRlIDFzIG5vcm1hbDtcclxufVxyXG5cclxuLndyYXAgaW1nIHtcclxuICAgIGRpc3BsYXk6IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiA2NXZ3O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbHVuYm8ge1xyXG4gICAgMCUge1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgICAyMCUge1xyXG4gICAgICAgIGxlZnQ6IC0wdnc7XHJcbiAgICB9XHJcbiAgICA0MCUge1xyXG4gICAgICAgIGxlZnQ6IC0xMDB2dztcclxuICAgIH1cclxuICAgIDYwJSB7XHJcbiAgICAgICAgbGVmdDogLTEwMHZ3O1xyXG4gICAgfVxyXG4gICAgODAlIHtcclxuICAgICAgICBsZWZ0OiAtMjAwdnc7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBsZWZ0OiAtMjAwdnc7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKuWtl+W5lea7muWKqOadoSovXHJcblxyXG5Aa2V5ZnJhbWVzIHJvd3VwIHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMzA3cHgsIDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTMwN3B4LCAwKTtcclxuICAgIH1cclxufVxyXG5cclxuLmxpc3Qge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzk5OTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG5cclxuLmxpc3QgLnJvd3VwIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiAyMHMgcm93dXAgbGluZWFyIGluZmluaXRlIG5vcm1hbDtcclxuICAgIGFuaW1hdGlvbjogMjBzIHJvd3VwIGxpbmVhciBpbmZpbml0ZSBub3JtYWw7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICAgIGZvbnQtc2l6ZTogMTIwJTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBHZW9yZ2lhLCBMaVN1O1xyXG59XHJcblxyXG5hIHtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICBmb250LXNpemU6IDE1MCU7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHhcclxufVxyXG5cclxuLmxpbmUxLFxyXG4ubGluZTIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IDBweFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/xiuxing/xiuxing.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/xiuxing/xiuxing.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n    <div class=\"viewport\">\n        <div class=\"wrap\">\n            <img src=\"assets/xiuxing/xiuxing01.jpg\">\n            <img src=\"assets/xiuxing/xiuxing02.jpg\">\n            <img src=\"assets/xiuxing/xiuxing03.jpg\">\n        </div>\n    </div>\n\n    <div style=\"margin:30px 0px;\">\n        <div class=\"line1\">\n            <a style=\"font-family:LiSu;color:#3e923b\" href=\"xiuxing/foyin\"><img style=\"width:50px\" src=\"assets/xiuxing/foyin.png\">佛音</a>\n            <a style=\"font-family:LiSu;color:#e65817\" href=\"xiuxing/xinde\"><img style=\"width:50px\" src=\"assets/xiuxing/xinde.png\">心得</a>\n        </div>\n        <div class=\"line1\">\n            <a style=\"font-family:LiSu;color:#1416bb\" href=\"/library\"><img style=\"width:50px\" src=\"assets/xiuxing/library.png\">藏经阁</a>\n            <a style=\"font-family:LiSu;color:#000000\" href=\"/simiao\"><img style=\"width:50px\" src=\"assets/xiuxing/temple.png\">寺庙</a>\n        </div>\n    </div>\n\n\n\n\n    <div class=\"list\">\n        <div class=\"rowup\">\n            <div class=\"item\">苦海无边，回头是岸。</div>\n            <div class=\"item\">知错能改，善莫大焉。</div>\n            <div class=\"item\">色即是空，空即是色。</div>\n            <div class=\"item\">放下屠刀，立地成佛。</div>\n            <div class=\"item\">不忆一切法，乃名禅定。</div>\n            <div class=\"item\">离一切诸相，则名诸佛。</div>\n            <div class=\"item\">救人一命，胜造七级浮屠。</div>\n            <div class=\"item\">每一种创伤，都是一种成熟。</div>\n            <div class=\"item\">改变别人，不如先改变自己。</div>\n            <div class=\"item\">盛喜勿许人物，盛怒勿答人书。</div>\n            <div class=\"item\">你永远要感谢给你逆境的众生。</div>\n            <div class=\"item\">风平浪静，训练不出良好的水手。</div>\n            <div class=\"item\">伤人之语，如水覆地，难以挽回。</div>\n            <div class=\"item\">能为别人设想的人，永远不寂寞。</div>\n            <div class=\"item\">善用威者不轻怒，善用恩者不妄施。</div>\n            <div class=\"item\">若能一切随他去，便是世间自在人。</div>\n            <div class=\"item\">知足者虽贫而富，不知足者虽富而贫。</div>\n            <div class=\"item\">人天福报非久计，苦海茫茫莫留连。</div>\n            <div class=\"item\">本性体若太虚，无内无外，非来非去。</div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/xiuxing/xiuxing.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/xiuxing/xiuxing.component.ts ***!
  \*********************************************************/
/*! exports provided: XiuxingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XiuxingComponent", function() { return XiuxingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var XiuxingComponent = /** @class */ (function () {
    function XiuxingComponent() {
    }
    XiuxingComponent.prototype.ngOnInit = function () {
    };
    XiuxingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-xiuxing',
            template: __webpack_require__(/*! ./xiuxing.component.html */ "./src/app/components/xiuxing/xiuxing.component.html"),
            styles: [__webpack_require__(/*! ./xiuxing.component.css */ "./src/app/components/xiuxing/xiuxing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], XiuxingComponent);
    return XiuxingComponent;
}());



/***/ }),

/***/ "./src/app/services/storage.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StorageService = /** @class */ (function () {
    function StorageService() {
    }
    //将数据写入服务
    StorageService.prototype.set = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };
    //从服务提取数据
    StorageService.prototype.get = function (key) {
        return JSON.parse(localStorage.getItem(key));
    };
    //删除服务数据
    StorageService.prototype.remove = function (key) {
        localStorage.removeItem(key);
    };
    StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/dishonored/docker_Buddhism/Client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map