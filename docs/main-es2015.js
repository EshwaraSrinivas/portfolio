(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/about/about.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/about/about.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"aboutMe\">\n    <h1 class=\"lg-heading\">\n        About <span class=\"text-secondary\">Me</span>\n    </h1>\n    <div class=\"data\">\n        <div class=\"portrait\"></div>\n        <div class=\"content\">\n            <p>I am presently working as senior software Developer at Monsanto and I completed my Bachelor’s from JNTUK University, Computer Science and Engineering. \n                Currently, I am working on various technologies Angular, React, Redux, Java.\n            </p>\n        </div>\n    </div>\n    <div class=\"jobs\">\n        <div class=\"job\" *ngFor=\"let job of jobs\">\n            <h3>{{job.companyName}}</h3>\n            <h5>{{job.role}}</h5>\n            <p class=\"description\">{{job.description}}</p>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/contact/contact.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/contact/contact.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact\">\n    <h1 class=\"lg-heading\">\n        Contact <span class=\"text-secondary\">Me</span>\n    </h1>\n    <div class=\"boxes\">\n        <div>\n            <span class=\"text-secondary\">Email:</span>\n            eswarasrinivaslanka@gmail.com\n        </div>\n        <div>\n            <span class=\"text-secondary\">Phone:</span>\n            +918867458799\n        </div>\n        <div>\n            <span class=\"text-secondary\">Address:</span>\n            Hebbal, Bangalore\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <div class=\"menu-btn\" (click)=\"showmenu()\" [ngClass]=\"showMenu ? 'close' : ''\">\n        <div class=\"btn-line\"></div>\n        <div class=\"btn-line\"></div>\n        <div class=\"btn-line\"></div>\n    </div>\n\n    <nav class=\"menu\" *ngIf=\"showMenu\">\n        <div class=\"menu-branding\" [@portrait]=\"showMenu ? 'open' : 'closed'\">\n            <div class=\"portrait\"></div>\n        </div>\n        <ul class=\"menu-nav\" [@navigation]=\"showMenu ? 'open' : 'closed'\">\n            <li class=\"nav-item\" [ngClass]=\"showMenu ? 'show' : ''\">\n                <button (click)=\"navigate('/home')\" class=\"nav-link\">\n                    Home\n                </button>\n            </li>\n            <li class=\"nav-item\">\n                <button (click)=\"navigate('/about')\" class=\"nav-link\">\n                    About Me\n                </button>\n            </li>\n            <li class=\"nav-item\" [ngClass]=\"showMenu ? 'show' : ''\">\n                <button (click)=\"navigate('/work')\" class=\"nav-link\">\n                    My Work\n                </button>\n            </li>\n            <li class=\"nav-item\" [ngClass]=\"showMenu ? 'show' : ''\">\n                <button (click)=\"navigate('/technologies')\" class=\"nav-link\">\n                    Tech Stuff\n                </button>\n            </li>\n            <li class=\"nav-item\" [ngClass]=\"showMenu ? 'show' : ''\">\n                <button (click)=\"navigate('/contact')\" class=\"nav-link\">\n                    How to Reach Me\n                </button>\n            </li>\n        </ul>\n    </nav>\n</header>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main id=\"home\">\n    <h1 class=\"lg-heading\">\n        Eshwar <span class=\"text-secondary\">L</span>\n    </h1>\n    <h2 class=\"sm-heading\">\n        Web Developer, Programmer & Designer\n    </h2>\n    <div class=\"icons\">\n        <a href=\"#!\">\n            <i class=\"fab fa-twitter fa-2x\"></i>\n        </a>\n        <a href=\"#!\">\n            <i class=\"fab fa-facebook fa-2x\"></i>\n        </a>\n        <a href=\"#!\">\n            <i class=\"fab fa-linkedin fa-2x\"></i>\n        </a>\n        <a href=\"#!\">\n            <i class=\"fab fa-github fa-2x\"></i>\n        </a>\n    </div>\n</main>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/technologies/technologies.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/technologies/technologies.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"technologies\">\n    <h1 class=\"lg-heading\">\n        Technologies\n    </h1>\n    <div class=\"tech-list\">\n        <div class=\"tech\" *ngFor=\"let tech of techs\">\n            <h3>{{tech.type}}</h3>\n            <ul class=\"list\">\n                <li class=\"list-item\" *ngFor=\"let language of tech.languages\">{{language}}</li>\n            </ul>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/work/work.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/work/work.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"work\">\n    <h1 class=\"lg-heading\">\n        My <span class=\"text-secondary\">Work</span>\n    </h1>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_technologies_technologies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/technologies/technologies.component */ "./src/app/components/technologies/technologies.component.ts");
/* harmony import */ var _components_work_work_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/work/work.component */ "./src/app/components/work/work.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");








const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'about',
        component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
    },
    {
        path: 'technologies',
        component: _components_technologies_technologies_component__WEBPACK_IMPORTED_MODULE_5__["TechnologiesComponent"]
    },
    {
        path: 'work',
        component: _components_work_work_component__WEBPACK_IMPORTED_MODULE_6__["WorkComponent"]
    },
    {
        path: 'contact',
        component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'portfolio';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_technologies_technologies_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/technologies/technologies.component */ "./src/app/components/technologies/technologies.component.ts");
/* harmony import */ var _components_work_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/work/work.component */ "./src/app/components/work/work.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
            _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
            _components_technologies_technologies_component__WEBPACK_IMPORTED_MODULE_10__["TechnologiesComponent"],
            _components_work_work_component__WEBPACK_IMPORTED_MODULE_11__["WorkComponent"],
            _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/about/about.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".aboutMe {\n  padding: 4rem;\n  height: 100%;\n  background: #444;\n}\n.aboutMe .lg-heading {\n  font-size: 4rem;\n}\n.aboutMe .data {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 2%;\n}\n.aboutMe .data .portrait {\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  background: url('portrait.jpg');\n  background-size: cover;\n  border: 2px solid #eece1a;\n  margin: 12px 12px 12px 0px;\n}\n.aboutMe .data .content {\n  width: 70%;\n}\n.aboutMe .jobs {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin-top: 20px;\n}\n.aboutMe .jobs .job {\n  width: 30%;\n  margin: 2%;\n  padding: 1%;\n  background: #494949;\n}\n@media screen and (max-width: 768px) {\n  .aboutMe {\n    padding: 4rem 0rem;\n    height: 100%;\n  }\n  .aboutMe .lg-heading {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    font-size: 3rem;\n  }\n  .aboutMe .data {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n  .aboutMe .data .portrait {\n    width: 150px;\n    height: 150px;\n  }\n  .aboutMe .data .content {\n    padding: 15px;\n    width: 100%;\n  }\n  .aboutMe .jobs {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    margin: 20px;\n  }\n  .aboutMe .jobs .job {\n    width: 100%;\n    margin: 2% 0%;\n    padding: 0%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9HOlxccG9ydGZvbGlvL3NyY1xcYXBwXFxjb21wb25lbnRzXFxhYm91dFxcYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvRzpcXHBvcnRmb2xpby9zcmNcXGFwcFxcc2Nzc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQUo7QURDSTtFQUNJLGVBQUE7QUNDUjtBRENJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFVBQUE7QUNDUjtBREFRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FDRVo7QURBUTtFQUNJLFVBQUE7QUNFWjtBRENJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDUjtBREFRO0VBQ0ksVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNFWjtBQ25CSTtFRnVCQTtJQUNJLGtCQUFBO0lBQ0EsWUFBQTtFQ0FOO0VEQ007SUFDSSxvQkFBQTtJQUFBLGFBQUE7SUFDQSx3QkFBQTtZQUFBLHVCQUFBO0lBQ0EsZUFBQTtFQ0NWO0VEQ007SUFDSSxvQkFBQTtJQUFBLGFBQUE7SUFDQSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7RUNDVjtFREFVO0lBQ0ksWUFBQTtJQUNBLGFBQUE7RUNFZDtFREFVO0lBQ0ksYUFBQTtJQUNBLFdBQUE7RUNFZDtFRENNO0lBQ0ksb0JBQUE7SUFBQSxhQUFBO0lBQ0EsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0lBQ0EsWUFBQTtFQ0NWO0VEQVU7SUFDSSxXQUFBO0lBQ0EsYUFBQTtJQUNBLFdBQUE7RUNFZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zY3NzLy92YXJpYWJsZXMuc2Nzc1wiO1xyXG4uYWJvdXRNZSB7XHJcbiAgICBwYWRkaW5nOiA0cmVtO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogIzQ0NDtcclxuICAgIC5sZy1oZWFkaW5nIHtcclxuICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICB9XHJcbiAgICAuZGF0YSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAyJTtcclxuICAgICAgICAucG9ydHJhaXQge1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2ltYWdlcy9wb3J0cmFpdC5qcGcpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEycHggMTJweCAxMnB4IDBweFxyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmpvYnMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIC5qb2Ige1xyXG4gICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDIlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg3MywgNzMsIDczLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIG1lZGlhU207IEBpbmNsdWRlIG1lZGlhTWQge1xyXG4gICAgLmFib3V0TWUge1xyXG4gICAgICAgIHBhZGRpbmc6IDRyZW0gMHJlbTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgLmxnLWhlYWRpbmcge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGF0YSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIC5wb3J0cmFpdCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuam9icyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgICAgICAgLmpvYiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMiUgMCU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5hYm91dE1lIHtcbiAgcGFkZGluZzogNHJlbTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjNDQ0O1xufVxuLmFib3V0TWUgLmxnLWhlYWRpbmcge1xuICBmb250LXNpemU6IDRyZW07XG59XG4uYWJvdXRNZSAuZGF0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMiU7XG59XG4uYWJvdXRNZSAuZGF0YSAucG9ydHJhaXQge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2ltYWdlcy9wb3J0cmFpdC5qcGcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZWVjZTFhO1xuICBtYXJnaW46IDEycHggMTJweCAxMnB4IDBweDtcbn1cbi5hYm91dE1lIC5kYXRhIC5jb250ZW50IHtcbiAgd2lkdGg6IDcwJTtcbn1cbi5hYm91dE1lIC5qb2JzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5hYm91dE1lIC5qb2JzIC5qb2Ige1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW46IDIlO1xuICBwYWRkaW5nOiAxJTtcbiAgYmFja2dyb3VuZDogIzQ5NDk0OTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmFib3V0TWUge1xuICAgIHBhZGRpbmc6IDRyZW0gMHJlbTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLmFib3V0TWUgLmxnLWhlYWRpbmcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICB9XG4gIC5hYm91dE1lIC5kYXRhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmFib3V0TWUgLmRhdGEgLnBvcnRyYWl0IHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgfVxuICAuYWJvdXRNZSAuZGF0YSAuY29udGVudCB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuYWJvdXRNZSAuam9icyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMjBweDtcbiAgfVxuICAuYWJvdXRNZSAuam9icyAuam9iIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDIlIDAlO1xuICAgIHBhZGRpbmc6IDAlO1xuICB9XG59IiwiJHByaW1hcnktY29sb3I6ICM0NDQ7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNlZWNlMWE7XHJcblxyXG5AbWl4aW4gZWFzZU91dCB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246YWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246YWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOmFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbkBtaXhpbiBtZWRpYVNtIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KXtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIG1lZGlhTWQge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gbWVkaWFMZyB7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDExNzBweCl7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtZWRpYVhsIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExNzFweCl7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_jobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/jobs */ "./src/app/data/jobs.ts");



let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
        this.jobs = _data_jobs__WEBPACK_IMPORTED_MODULE_2__["Jobs"].data;
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/about/about.component.html"),
        styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/components/about/about.component.scss")]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/components/contact/contact.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact {\n  padding: 4rem;\n  height: 100vh;\n  background: #444;\n}\n.contact .lg-heading {\n  font-size: 4rem;\n}\n.contact .boxes {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 1rem;\n}\n.contact .boxes div {\n  font-size: 2rem;\n  border: 3px #fff solid;\n  padding: 1.5rem 2.5rem;\n  margin-bottom: 3rem;\n  -webkit-transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-out;\n  transition: all 0.5s ease-out;\n}\n.contact .boxes div:hover {\n  padding: 0.5rem 1.5rem;\n  background: #eece1a;\n}\n.contact .boxes div:hover span {\n  color: #444;\n}\n@media screen and (max-width: 500px) {\n  .contact {\n    padding: 4rem 0rem;\n    height: 100vh;\n  }\n  .contact .lg-heading {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    font-size: 3rem;\n  }\n  .contact .boxes div {\n    font-size: 1rem;\n    padding: 0.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L0c6XFxwb3J0Zm9saW8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNvbnRhY3RcXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QvRzpcXHBvcnRmb2xpby9zcmNcXGFwcFxcc2Nzc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDQUo7QURDSTtFQUNJLGVBQUE7QUNDUjtBRENJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO1VBQUEsNkJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDUjtBREFRO0VBQ0ksZUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFRWRSLHdDQUFBO0VBR0EscUNBQUE7RUFBQSw2QkFBQTtBRGlCSjtBREpZO0VBQ0ksc0JBQUE7RUFDQSxtQkVyQkU7QUQyQmxCO0FETGdCO0VBQ0ksV0FBQTtBQ09wQjtBQ3BCSTtFRnFCQTtJQUNFLGtCQUFBO0lBQ0EsYUFBQTtFQ0dKO0VERkk7SUFDSSxvQkFBQTtJQUFBLGFBQUE7SUFDQSx3QkFBQTtZQUFBLHVCQUFBO0lBQ0EsZUFBQTtFQ0lSO0VERFE7SUFDSSxlQUFBO0lBQ0EsZUFBQTtFQ0daO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zY3NzLy92YXJpYWJsZXMuc2Nzc1wiO1xyXG4uY29udGFjdCB7XHJcbiAgICBwYWRkaW5nOiA0cmVtO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6ICM0NDQ7XHJcbiAgICAubGctaGVhZGluZyB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgfVxyXG4gICAgLmJveGVzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICBib3JkZXI6IDNweCAjZmZmIHNvbGlkO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxLjVyZW0gMi41cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBlYXNlT3V0O1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0NDQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIG1lZGlhU20ge1xyXG4gICAgLmNvbnRhY3Qge1xyXG4gICAgICBwYWRkaW5nOiA0cmVtIDByZW07XHJcbiAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgIC5sZy1oZWFkaW5nIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgfVxyXG4gICAgICAuYm94ZXMge1xyXG4gICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSIsIi5jb250YWN0IHtcbiAgcGFkZGluZzogNHJlbTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogIzQ0NDtcbn1cbi5jb250YWN0IC5sZy1oZWFkaW5nIHtcbiAgZm9udC1zaXplOiA0cmVtO1xufVxuLmNvbnRhY3QgLmJveGVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbi5jb250YWN0IC5ib3hlcyBkaXYge1xuICBmb250LXNpemU6IDJyZW07XG4gIGJvcmRlcjogM3B4ICNmZmYgc29saWQ7XG4gIHBhZGRpbmc6IDEuNXJlbSAyLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dDtcbn1cbi5jb250YWN0IC5ib3hlcyBkaXY6aG92ZXIge1xuICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xuICBiYWNrZ3JvdW5kOiAjZWVjZTFhO1xufVxuLmNvbnRhY3QgLmJveGVzIGRpdjpob3ZlciBzcGFuIHtcbiAgY29sb3I6ICM0NDQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5jb250YWN0IHtcbiAgICBwYWRkaW5nOiA0cmVtIDByZW07XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxuICAuY29udGFjdCAubGctaGVhZGluZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDNyZW07XG4gIH1cbiAgLmNvbnRhY3QgLmJveGVzIGRpdiB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgfVxufSIsIiRwcmltYXJ5LWNvbG9yOiAjNDQ0O1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZWVjZTFhO1xyXG5cclxuQG1peGluIGVhc2VPdXQge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOmFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOmFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjphbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0O1xyXG59XHJcblxyXG5AbWl4aW4gbWVkaWFTbSB7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtZWRpYU1kIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIG1lZGlhTGcge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIGFuZCAobWF4LXdpZHRoOiAxMTcwcHgpe1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gbWVkaWFYbCB7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTcxcHgpe1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/contact/contact.component.html"),
        styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/components/contact/contact.component.scss")]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  position: fixed;\n  z-index: 2;\n  width: 100%;\n}\nheader .menu-btn {\n  position: absolute;\n  z-index: 3;\n  right: 35px;\n  top: 35px;\n  cursor: pointer;\n  -webkit-transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-out;\n  transition: all 0.5s ease-out;\n}\nheader .menu-btn .btn-line {\n  width: 28px;\n  height: 3px;\n  margin: 0 0 5px 0;\n  background: #fff;\n  -webkit-transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-out;\n  transition: all 0.5s ease-out;\n}\nheader .menu-btn.close {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\nheader .menu-btn.close .btn-line:nth-child(1) {\n  -webkit-transform: rotate(45deg) translate(5px, 5px);\n          transform: rotate(45deg) translate(5px, 5px);\n}\nheader .menu-btn.close .btn-line:nth-child(2) {\n  opacity: 0;\n}\nheader .menu-btn.close .btn-line:nth-child(3) {\n  -webkit-transform: rotate(-45deg) translate(7px, -6px);\n          transform: rotate(-45deg) translate(7px, -6px);\n}\n.menu {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  opacity: 0.95;\n  -webkit-transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-out;\n  transition: all 0.5s ease-out;\n}\n.menu-branding, .menu-nav {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column wrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  float: left;\n  width: 50%;\n  height: 100vh;\n  overflow: hidden;\n}\n.menu-nav {\n  margin: 0;\n  padding: 0;\n  background: #373737;\n  list-style: none !important;\n}\n.menu-branding {\n  background: #444;\n}\n.menu-branding .portrait {\n  width: 250px;\n  height: 250px;\n  border-radius: 50%;\n  background: url('portrait.jpg');\n  background-size: cover;\n  border: 2px solid #eece1a;\n}\n.menu .nav-link {\n  display: inline-block;\n  background: transparent;\n  border: none;\n  outline: none;\n  position: relative;\n  font-size: 24px;\n  text-transform: uppercase;\n  padding: 1rem 0;\n  font-weight: 300;\n  color: #fff;\n  text-decoration: none;\n}\n.menu .nav-link:hover {\n  color: #eece1a;\n  cursor: pointer;\n}\n@media screen and (max-width: 500px) {\n  .menu {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    height: 100vh;\n    width: 100%;\n  }\n  .menu .menu-branding {\n    height: 30%;\n    width: 100%;\n  }\n  .menu .menu-branding .portrait {\n    width: 150px;\n    height: 150px;\n  }\n  .menu .menu-nav {\n    height: 70%;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvRzpcXHBvcnRmb2xpby9zcmNcXGFwcFxcY29tcG9uZW50c1xcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvRzpcXHBvcnRmb2xpby9zcmNcXGFwcFxcc2Nzc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNESjtBREVJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VFUEosd0NBQUE7RUFHQSxxQ0FBQTtFQUFBLDZCQUFBO0FEUUo7QURGUTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFRWJSLHdDQUFBO0VBR0EscUNBQUE7RUFBQSw2QkFBQTtBRGtCSjtBREhRO0VBQ0ksaUNBQUE7VUFBQSx5QkFBQTtBQ0taO0FERmdCO0VBQ0ksb0RBQUE7VUFBQSw0Q0FBQTtBQ0lwQjtBRERnQjtFQUNJLFVBQUE7QUNHcEI7QURBZ0I7RUFDSSxzREFBQTtVQUFBLDhDQUFBO0FDRXBCO0FES0E7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VFMUNBLHdDQUFBO0VBR0EscUNBQUE7RUFBQSw2QkFBQTtBRHlDSjtBREFJO0VBRUksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0NSO0FEQ0k7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUNDUjtBRENJO0VBQ0ksZ0JFbEVRO0FEbUVoQjtBREFRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQ0VaO0FERUk7RUFDSSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ0FSO0FER0k7RUFDSSxjRTNGVTtFRjRGVixlQUFBO0FDRFI7QUNqRkk7RUZ3RkE7SUFDSSxvQkFBQTtJQUFBLGFBQUE7SUFDQSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7SUFDQSxhQUFBO0lBQ0EsV0FBQTtFQ0hOO0VESU07SUFDSSxXQUFBO0lBQ0EsV0FBQTtFQ0ZWO0VER1U7SUFDSSxZQUFBO0lBQ0EsYUFBQTtFQ0RkO0VESU07SUFDSSxXQUFBO0lBQ0EsV0FBQTtFQ0ZWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vc2Nzcy8vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbmhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAubWVudS1idG4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgIHJpZ2h0OiAzNXB4O1xyXG4gICAgICAgIHRvcDogMzVweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgQGluY2x1ZGUgZWFzZU91dCgpO1xyXG4gICAgICAgIC5idG4tbGluZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgNXB4IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGVhc2VPdXQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFJvdGF0ZSBJbnRvIFhcclxuICAgICAgICAmLmNsb3NlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICAgICAgLmJ0bi1saW5lIHtcclxuICAgICAgICAgICAgICAgIC8vIExpbmUgMSAtIFJvdGF0ZVxyXG4gICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoNXB4LCA1cHgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gTGluZSAyIC0gSGlkZVxyXG4gICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBMaW5lIDMgLSBSb3RhdGVcclxuICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSg3cHgsIC02cHgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubWVudSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9wYWNpdHk6IDAuOTU7XHJcbiAgICBAaW5jbHVkZSBlYXNlT3V0O1xyXG4gICAgJi1icmFuZGluZyxcclxuICAgICYtbmF2IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICAgICYtbmF2IHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJHByaW1hcnktY29sb3IsIDUpO1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmUgIWltcG9ydGFudDsgIFxyXG4gICAgfVxyXG4gICAgJi1icmFuZGluZyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgLnBvcnRyYWl0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9pbWFnZXMvcG9ydHJhaXQuanBnKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICB9ICAgXHJcbiAgICB9XHJcblxyXG4gICAgLm5hdi1saW5rIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAubmF2LWxpbms6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLy8gbW9iaWxlIGNzc1xyXG5AaW5jbHVkZSBtZWRpYVNtIHtcclxuICAgIC5tZW51IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAubWVudS1icmFuZGluZyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzAlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgLnBvcnRyYWl0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnUtbmF2IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3MCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjtcbiAgd2lkdGg6IDEwMCU7XG59XG5oZWFkZXIgLm1lbnUtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAzO1xuICByaWdodDogMzVweDtcbiAgdG9wOiAzNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dDtcbn1cbmhlYWRlciAubWVudS1idG4gLmJ0bi1saW5lIHtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogM3B4O1xuICBtYXJnaW46IDAgMCA1cHggMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0O1xufVxuaGVhZGVyIC5tZW51LWJ0bi5jbG9zZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5oZWFkZXIgLm1lbnUtYnRuLmNsb3NlIC5idG4tbGluZTpudGgtY2hpbGQoMSkge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKDVweCwgNXB4KTtcbn1cbmhlYWRlciAubWVudS1idG4uY2xvc2UgLmJ0bi1saW5lOm50aC1jaGlsZCgyKSB7XG4gIG9wYWNpdHk6IDA7XG59XG5oZWFkZXIgLm1lbnUtYnRuLmNsb3NlIC5idG4tbGluZTpudGgtY2hpbGQoMykge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSg3cHgsIC02cHgpO1xufVxuXG4ubWVudSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMC45NTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0O1xufVxuLm1lbnUtYnJhbmRpbmcsIC5tZW51LW5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tZW51LW5hdiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogIzM3MzczNztcbiAgbGlzdC1zdHlsZTogbm9uZSAhaW1wb3J0YW50O1xufVxuLm1lbnUtYnJhbmRpbmcge1xuICBiYWNrZ3JvdW5kOiAjNDQ0O1xufVxuLm1lbnUtYnJhbmRpbmcgLnBvcnRyYWl0IHtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9pbWFnZXMvcG9ydHJhaXQuanBnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm9yZGVyOiAycHggc29saWQgI2VlY2UxYTtcbn1cbi5tZW51IC5uYXYtbGluayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDI0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDFyZW0gMDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5tZW51IC5uYXYtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjZWVjZTFhO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5tZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAubWVudSAubWVudS1icmFuZGluZyB7XG4gICAgaGVpZ2h0OiAzMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLm1lbnUgLm1lbnUtYnJhbmRpbmcgLnBvcnRyYWl0IHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgfVxuICAubWVudSAubWVudS1uYXYge1xuICAgIGhlaWdodDogNzAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59IiwiJHByaW1hcnktY29sb3I6ICM0NDQ7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNlZWNlMWE7XHJcblxyXG5AbWl4aW4gZWFzZU91dCB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246YWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246YWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOmFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbkBtaXhpbiBtZWRpYVNtIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KXtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIG1lZGlhTWQge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gbWVkaWFMZyB7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDExNzBweCl7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtZWRpYVhsIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExNzFweCl7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HeaderComponent = class HeaderComponent {
    constructor(router) {
        this.router = router;
        this.showMenu = false;
    }
    ngOnInit() {
    }
    showmenu() {
        this.showMenu = !this.showMenu;
    }
    navigate(url) {
        this.showMenu = false;
        this.router.navigateByUrl(url);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('portrait', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(100%)', opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(0)', opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(0)', opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(100%)', opacity: 0 }))
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('navigation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(-100%)', opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(0)', opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(0)', opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(-100%)', opacity: 0 }))
                ])
            ])
        ],
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\n  height: 100vh;\n  z-index: 2;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\nmain .icons {\n  margin-top: 1rem;\n}\nmain .icons a {\n  padding: 0.4rem;\n}\nmain .icons a:hover {\n  color: #eece1a;\n  -webkit-transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-out;\n  transition: all 0.5s ease-out;\n}\nmain#home {\n  overflow: hidden;\n}\n@media screen and (max-width: 500px) {\n  main {\n    -webkit-box-align: center;\n            align-items: center;\n    text-align: center;\n  }\n  main .lg-heading {\n    font-size: 3rem;\n  }\n}\n@media screen and (max-width: 768px) {\n  main {\n    padding: 4rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1170px) {\n  main {\n    padding: 4rem;\n  }\n}\n@media screen and (min-width: 1171px) {\n  main {\n    padding: 4rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0c6XFxwb3J0Zm9saW8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvRzpcXHBvcnRmb2xpby9zcmNcXGFwcFxcc2Nzc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNESjtBREVJO0VBQ0ksZ0JBQUE7QUNBUjtBRENRO0VBQ0ksZUFBQTtBQ0NaO0FEQVk7RUFDSSxjRVpFO0VBR2Qsd0NBQUE7RUFHQSxxQ0FBQTtFQUFBLDZCQUFBO0FEWUo7QURBSTtFQUNJLGdCQUFBO0FDRVI7QUNYSTtFRmVBO0lBQ0kseUJBQUE7WUFBQSxtQkFBQTtJQUNBLGtCQUFBO0VDQU47RURDTTtJQUNJLGVBQUE7RUNDVjtBQUNGO0FDZkk7RUZtQkE7SUFDSSxhQUFBO0VDRE47QUFDRjtBQ2RJO0VGbUJBO0lBQ0ksYUFBQTtFQ0ZOO0FBQ0Y7QUNiSTtFRm1CQTtJQUNJLGFBQUE7RUNITjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vc2Nzcy8vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbm1haW4ge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLmljb25zIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBlYXNlT3V0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJiNob21lIHtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBtb2JpbGUgY3NzXHJcbkBpbmNsdWRlIG1lZGlhU20ge1xyXG4gICAgbWFpbiB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLmxnLWhlYWRpbmcge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBtZWRpYU1kIHtcclxuICAgIG1haW4ge1xyXG4gICAgICAgIHBhZGRpbmc6IDRyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIG1lZGlhTGcge1xyXG4gICAgbWFpbiB7XHJcbiAgICAgICAgcGFkZGluZzogNHJlbTtcclxuICAgIH1cclxufVxyXG5cclxuQGluY2x1ZGUgbWVkaWFYbCB7XHJcbiAgICBtYWluIHtcclxuICAgICAgICBwYWRkaW5nOiA0cmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJtYWluIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgei1pbmRleDogMjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5tYWluIC5pY29ucyB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5tYWluIC5pY29ucyBhIHtcbiAgcGFkZGluZzogMC40cmVtO1xufVxubWFpbiAuaWNvbnMgYTpob3ZlciB7XG4gIGNvbG9yOiAjZWVjZTFhO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQ7XG59XG5tYWluI2hvbWUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICBtYWluIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBtYWluIC5sZy1oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIG1haW4ge1xuICAgIHBhZGRpbmc6IDRyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSBhbmQgKG1heC13aWR0aDogMTE3MHB4KSB7XG4gIG1haW4ge1xuICAgIHBhZGRpbmc6IDRyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExNzFweCkge1xuICBtYWluIHtcbiAgICBwYWRkaW5nOiA0cmVtO1xuICB9XG59IiwiJHByaW1hcnktY29sb3I6ICM0NDQ7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNlZWNlMWE7XHJcblxyXG5AbWl4aW4gZWFzZU91dCB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246YWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246YWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOmFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbkBtaXhpbiBtZWRpYVNtIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KXtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIG1lZGlhTWQge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gbWVkaWFMZyB7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDExNzBweCl7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtZWRpYVhsIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExNzFweCl7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/technologies/technologies.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/technologies/technologies.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\nli {\n  text-transform: uppercase;\n  -webkit-animation: fadeIn 0.5s linear;\n          animation: fadeIn 0.5s linear;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n}\nli:nth-child(1) {\n  -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n}\nli:nth-child(2) {\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n}\nli:nth-child(3) {\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n}\nli:nth-child(4) {\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n}\nli:nth-child(5) {\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n}\nli:nth-child(6) {\n  -webkit-animation-delay: 0.6s;\n          animation-delay: 0.6s;\n}\nli:nth-child(7) {\n  -webkit-animation-delay: 0.7s;\n          animation-delay: 0.7s;\n}\nli:nth-child(8) {\n  -webkit-animation-delay: 0.8s;\n          animation-delay: 0.8s;\n}\nli:nth-child(9) {\n  -webkit-animation-delay: 0.9s;\n          animation-delay: 0.9s;\n}\nli:nth-child(10) {\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n}\nli:nth-child(11) {\n  -webkit-animation-delay: 1.1s;\n          animation-delay: 1.1s;\n}\nli:nth-child(12) {\n  -webkit-animation-delay: 1.2s;\n          animation-delay: 1.2s;\n}\nli:nth-child(13) {\n  -webkit-animation-delay: 1.3s;\n          animation-delay: 1.3s;\n}\nli:nth-child(14) {\n  -webkit-animation-delay: 1.4s;\n          animation-delay: 1.4s;\n}\nli:nth-child(15) {\n  -webkit-animation-delay: 1.5s;\n          animation-delay: 1.5s;\n}\nli:nth-child(16) {\n  -webkit-animation-delay: 1.6s;\n          animation-delay: 1.6s;\n}\nli:nth-child(17) {\n  -webkit-animation-delay: 1.7s;\n          animation-delay: 1.7s;\n}\nli:nth-child(18) {\n  -webkit-animation-delay: 1.8s;\n          animation-delay: 1.8s;\n}\nli:nth-child(19) {\n  -webkit-animation-delay: 1.9s;\n          animation-delay: 1.9s;\n}\nli:nth-child(20) {\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n}\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n    top: 100px;\n  }\n  75% {\n    opacity: 0.5;\n    top: 0px;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.technologies {\n  padding: 4rem;\n  height: 100vh;\n  background: #444;\n}\n.technologies .lg-heading {\n  font-size: 4rem;\n}\n.technologies .tech-list {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  justify-content: space-around;\n  margin-top: 2%;\n}\n.technologies .tech-list .tech {\n  width: 40%;\n  padding: 2%;\n  background: #494949;\n}\n.technologies .tech-list .tech .list .list-item .fab {\n  color: #eece1a;\n  width: 16px;\n  height: 16px;\n}\n.technologies .tech-list .tech .list .list-item .name {\n  margin-left: 12px;\n}\n.technologies ul {\n  list-style: none;\n}\n.technologies ul li::before {\n  font-family: \"Font Awesome 5 Free\";\n  content: \"\";\n  color: #eece1a;\n  font-weight: bold;\n  display: inline-block;\n  width: 1em;\n  margin-left: -1em;\n  margin-right: 10px;\n}\n@media screen and (max-width: 500px) {\n  .technologies {\n    padding: 4rem 0rem;\n    height: 100%;\n  }\n  .technologies .lg-heading {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    font-size: 3rem;\n  }\n  .technologies .tech-list {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    padding: 15px;\n  }\n  .technologies .tech-list .tech {\n    width: 100%;\n    margin-bottom: 4%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZWNobm9sb2dpZXMvdGVjaG5vbG9naWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RlY2hub2xvZ2llcy9HOlxccG9ydGZvbGlvL3NyY1xcYXBwXFxjb21wb25lbnRzXFx0ZWNobm9sb2dpZXNcXHRlY2hub2xvZ2llcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90ZWNobm9sb2dpZXMvRzpcXHBvcnRmb2xpby9zcmNcXGFwcFxcc2Nzc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDRWhCO0VBQ0kseUJBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtBREFKO0FDS0k7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FERk47QUNDSTtFQUNFLDZCQUFBO1VBQUEscUJBQUE7QURFTjtBQ0hJO0VBQ0UsNkJBQUE7VUFBQSxxQkFBQTtBRE1OO0FDUEk7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FEVU47QUNYSTtFQUNFLDZCQUFBO1VBQUEscUJBQUE7QURjTjtBQ2ZJO0VBQ0UsNkJBQUE7VUFBQSxxQkFBQTtBRGtCTjtBQ25CSTtFQUNFLDZCQUFBO1VBQUEscUJBQUE7QURzQk47QUN2Qkk7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FEMEJOO0FDM0JJO0VBQ0UsNkJBQUE7VUFBQSxxQkFBQTtBRDhCTjtBQy9CSTtFQUNFLDJCQUFBO1VBQUEsbUJBQUE7QURrQ047QUNuQ0k7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FEc0NOO0FDdkNJO0VBQ0UsNkJBQUE7VUFBQSxxQkFBQTtBRDBDTjtBQzNDSTtFQUNFLDZCQUFBO1VBQUEscUJBQUE7QUQ4Q047QUMvQ0k7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FEa0ROO0FDbkRJO0VBQ0UsNkJBQUE7VUFBQSxxQkFBQTtBRHNETjtBQ3ZESTtFQUNFLDZCQUFBO1VBQUEscUJBQUE7QUQwRE47QUMzREk7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FEOEROO0FDL0RJO0VBQ0UsNkJBQUE7VUFBQSxxQkFBQTtBRGtFTjtBQ25FSTtFQUNFLDZCQUFBO1VBQUEscUJBQUE7QURzRU47QUN2RUk7RUFDRSwyQkFBQTtVQUFBLG1CQUFBO0FEMEVOO0FDckVFO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsVUFBQTtFRHdFSjtFQ3RFRTtJQUNFLFlBQUE7SUFDQSxRQUFBO0VEd0VKO0VDdEVFO0lBQ0UsVUFBQTtFRHdFSjtBQUNGO0FDckVBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBRHVFSjtBQ3RFSTtFQUNJLGVBQUE7QUR3RVI7QUN0RUk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUR3RVI7QUN2RVE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FEeUVaO0FDdEVvQjtFQUNJLGNDaEROO0VEaURNLFdBQUE7RUFDQSxZQUFBO0FEd0V4QjtBQ3RFb0I7RUFDSSxpQkFBQTtBRHdFeEI7QUNsRUk7RUFDSSxnQkFBQTtBRG9FUjtBQ2pFSTtFQUNJLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGNDbEVVO0VEbUVWLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRG1FUjtBRWhJSTtFRGtFRjtJQUNFLGtCQUFBO0lBQ0EsWUFBQTtFRGtFRjtFQ2pFRTtJQUNJLG9CQUFBO0lBQUEsYUFBQTtJQUNBLHdCQUFBO1lBQUEsdUJBQUE7SUFDQSxlQUFBO0VEbUVOO0VDakVFO0lBQ0Usb0JBQUE7SUFBQSxhQUFBO0lBQ0EsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0lBQ0EsYUFBQTtFRG1FSjtFQ2xFSTtJQUNFLFdBQUE7SUFDQSxpQkFBQTtFRG9FTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90ZWNobm9sb2dpZXMvdGVjaG5vbG9naWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xubGkge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBhbmltYXRpb246IGZhZGVJbiAwLjVzIGxpbmVhcjtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxubGk6bnRoLWNoaWxkKDEpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xufVxuXG5saTpudGgtY2hpbGQoMikge1xuICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XG59XG5cbmxpOm50aC1jaGlsZCgzKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC4zcztcbn1cblxubGk6bnRoLWNoaWxkKDQpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xufVxuXG5saTpudGgtY2hpbGQoNSkge1xuICBhbmltYXRpb24tZGVsYXk6IDAuNXM7XG59XG5cbmxpOm50aC1jaGlsZCg2KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC42cztcbn1cblxubGk6bnRoLWNoaWxkKDcpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjdzO1xufVxuXG5saTpudGgtY2hpbGQoOCkge1xuICBhbmltYXRpb24tZGVsYXk6IDAuOHM7XG59XG5cbmxpOm50aC1jaGlsZCg5KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC45cztcbn1cblxubGk6bnRoLWNoaWxkKDEwKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMXM7XG59XG5cbmxpOm50aC1jaGlsZCgxMSkge1xuICBhbmltYXRpb24tZGVsYXk6IDEuMXM7XG59XG5cbmxpOm50aC1jaGlsZCgxMikge1xuICBhbmltYXRpb24tZGVsYXk6IDEuMnM7XG59XG5cbmxpOm50aC1jaGlsZCgxMykge1xuICBhbmltYXRpb24tZGVsYXk6IDEuM3M7XG59XG5cbmxpOm50aC1jaGlsZCgxNCkge1xuICBhbmltYXRpb24tZGVsYXk6IDEuNHM7XG59XG5cbmxpOm50aC1jaGlsZCgxNSkge1xuICBhbmltYXRpb24tZGVsYXk6IDEuNXM7XG59XG5cbmxpOm50aC1jaGlsZCgxNikge1xuICBhbmltYXRpb24tZGVsYXk6IDEuNnM7XG59XG5cbmxpOm50aC1jaGlsZCgxNykge1xuICBhbmltYXRpb24tZGVsYXk6IDEuN3M7XG59XG5cbmxpOm50aC1jaGlsZCgxOCkge1xuICBhbmltYXRpb24tZGVsYXk6IDEuOHM7XG59XG5cbmxpOm50aC1jaGlsZCgxOSkge1xuICBhbmltYXRpb24tZGVsYXk6IDEuOXM7XG59XG5cbmxpOm50aC1jaGlsZCgyMCkge1xuICBhbmltYXRpb24tZGVsYXk6IDJzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdG9wOiAxMDBweDtcbiAgfVxuICA3NSUge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICB0b3A6IDBweDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4udGVjaG5vbG9naWVzIHtcbiAgcGFkZGluZzogNHJlbTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogIzQ0NDtcbn1cbi50ZWNobm9sb2dpZXMgLmxnLWhlYWRpbmcge1xuICBmb250LXNpemU6IDRyZW07XG59XG4udGVjaG5vbG9naWVzIC50ZWNoLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgbWFyZ2luLXRvcDogMiU7XG59XG4udGVjaG5vbG9naWVzIC50ZWNoLWxpc3QgLnRlY2gge1xuICB3aWR0aDogNDAlO1xuICBwYWRkaW5nOiAyJTtcbiAgYmFja2dyb3VuZDogIzQ5NDk0OTtcbn1cbi50ZWNobm9sb2dpZXMgLnRlY2gtbGlzdCAudGVjaCAubGlzdCAubGlzdC1pdGVtIC5mYWIge1xuICBjb2xvcjogI2VlY2UxYTtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbn1cbi50ZWNobm9sb2dpZXMgLnRlY2gtbGlzdCAudGVjaCAubGlzdCAubGlzdC1pdGVtIC5uYW1lIHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG4udGVjaG5vbG9naWVzIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi50ZWNobm9sb2dpZXMgdWwgbGk6OmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcbiAgY29udGVudDogXCLvgIVcIjtcbiAgY29sb3I6ICNlZWNlMWE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxZW07XG4gIG1hcmdpbi1sZWZ0OiAtMWVtO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC50ZWNobm9sb2dpZXMge1xuICAgIHBhZGRpbmc6IDRyZW0gMHJlbTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLnRlY2hub2xvZ2llcyAubGctaGVhZGluZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDNyZW07XG4gIH1cbiAgLnRlY2hub2xvZ2llcyAudGVjaC1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuICAudGVjaG5vbG9naWVzIC50ZWNoLWxpc3QgLnRlY2gge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDQlO1xuICB9XG59IiwiQGltcG9ydCBcIi4uLy4uL3Njc3MvL3ZhcmlhYmxlcy5zY3NzXCI7XHJcbiR0b3RhbC1pdGVtczogMjA7XHJcbmxpIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjVzIGxpbmVhcjtcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIFNldCBkZWxheSBwZXIgTGlzdCBJdGVtXHJcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkdG90YWwtaXRlbXMge1xyXG4gICAgbGk6bnRoLWNoaWxkKCN7JGl9KSB7XHJcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogLjEwcyAqICRpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBLZXlmcmFtZSBhbmltYXRpb25cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdG9wOiAxMDBweDtcclxuICAgIH1cclxuICAgIDc1JSB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgdG9wOiAwcHg7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4udGVjaG5vbG9naWVzIHtcclxuICAgIHBhZGRpbmc6IDRyZW07XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDogIzQ0NDtcclxuICAgIC5sZy1oZWFkaW5nIHtcclxuICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICB9XHJcbiAgICAudGVjaC1saXN0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICAgICAgLnRlY2gge1xyXG4gICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzQ5NDk0OTtcclxuICAgICAgICAgICAgLmxpc3Qge1xyXG4gICAgICAgICAgICAgICAgLmxpc3QtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmZhYiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVsIHtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgdWwgbGk6OmJlZm9yZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXFxmMDA1XCI7XHJcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcclxuICAgICAgICB3aWR0aDogMWVtO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMWVtO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuQGluY2x1ZGUgbWVkaWFTbSB7XHJcbiAgLnRlY2hub2xvZ2llcyB7XHJcbiAgICBwYWRkaW5nOiA0cmVtIDByZW07XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAubGctaGVhZGluZyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICB9XHJcbiAgICAudGVjaC1saXN0IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgLnRlY2gge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiJHByaW1hcnktY29sb3I6ICM0NDQ7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNlZWNlMWE7XHJcblxyXG5AbWl4aW4gZWFzZU91dCB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246YWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246YWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOmFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbkBtaXhpbiBtZWRpYVNtIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KXtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIG1lZGlhTWQge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gbWVkaWFMZyB7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDExNzBweCl7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtZWRpYVhsIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExNzFweCl7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/technologies/technologies.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/technologies/technologies.component.ts ***!
  \*******************************************************************/
/*! exports provided: TechnologiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologiesComponent", function() { return TechnologiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_techs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/techs */ "./src/app/data/techs.ts");



let TechnologiesComponent = class TechnologiesComponent {
    constructor() { }
    ngOnInit() {
        this.techs = _data_techs__WEBPACK_IMPORTED_MODULE_2__["Techs"].data;
        console.log(this.techs);
    }
};
TechnologiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-technologies',
        template: __webpack_require__(/*! raw-loader!./technologies.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/technologies/technologies.component.html"),
        styles: [__webpack_require__(/*! ./technologies.component.scss */ "./src/app/components/technologies/technologies.component.scss")]
    })
], TechnologiesComponent);



/***/ }),

/***/ "./src/app/components/work/work.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/work/work.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".work {\n  padding: 4rem;\n  height: 100vh;\n  background: #444;\n}\n.work .lg-heading {\n  font-size: 4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93b3JrL0c6XFxwb3J0Zm9saW8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXHdvcmtcXHdvcmsuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvd29yay93b3JrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQUk7RUFDSSxlQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dvcmsvd29yay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53b3JrIHtcclxuICAgIHBhZGRpbmc6IDRyZW07XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDogIzQ0NDtcclxuICAgIC5sZy1oZWFkaW5nIHtcclxuICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICB9XHJcbn0iLCIud29yayB7XG4gIHBhZGRpbmc6IDRyZW07XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6ICM0NDQ7XG59XG4ud29yayAubGctaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/work/work.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/work/work.component.ts ***!
  \***************************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WorkComponent = class WorkComponent {
    constructor() { }
    ngOnInit() {
    }
};
WorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-work',
        template: __webpack_require__(/*! raw-loader!./work.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/work/work.component.html"),
        styles: [__webpack_require__(/*! ./work.component.scss */ "./src/app/components/work/work.component.scss")]
    })
], WorkComponent);



/***/ }),

/***/ "./src/app/data/jobs.ts":
/*!******************************!*\
  !*** ./src/app/data/jobs.ts ***!
  \******************************/
/*! exports provided: Jobs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jobs", function() { return Jobs; });
class Jobs {
}
Jobs.data = [
    {
        companyName: 'TATA ELXSI',
        role: 'Software Engineer',
        description: 'Worked on various embedded projects. Developed user interface for set top boxes using technologies HAVI and JAVA. Developed an engine which displays interactive advertisements on screen.'
    },
    {
        companyName: 'TCS',
        role: 'Senior Software Engineer',
        description: 'Worked on multiple projects Ad-Relevance(ADR-US & ADR-INTERNATIONAL), Profile Generator and InfoSID Processor. Technologies used in these projects are AngularJs, Angular, JAVA.'
    },
    {
        companyName: 'MONSANTO',
        role: 'Senior Software Engineer',
        description: 'Worked on an angular project called Incubator. Currently working on multiple React & Redux projects.'
    }
];


/***/ }),

/***/ "./src/app/data/techs.ts":
/*!*******************************!*\
  !*** ./src/app/data/techs.ts ***!
  \*******************************/
/*! exports provided: Techs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Techs", function() { return Techs; });
class Techs {
}
Techs.data = [
    {
        type: 'FRONT END',
        languages: [
            'HTML5',
            'CSS3',
            'BOOTSTRAP',
            'JAVASCRIPT',
            'ANGULARJS',
            'ANGULAR',
            'NODE JS',
            'REACT',
            'JSX',
            'REDUX',
            'JSON'
        ],
    },
    {
        type: 'BACK END',
        languages: [
            'JAVA',
            'SPRING',
            'SPRING BOOT',
            'SPRING MICROSERVICES',
            'JPA',
            'HIBERNATE',
            'JUNIT',
            'ORACLE',
            'SQL',
            'MONGODB',
        ]
    }
];


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map