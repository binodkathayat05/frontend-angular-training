"use strict";
(self["webpackChunkexamfront"] = self["webpackChunkexamfront"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/admin/dashboard/dashboard.component */ 5700);
/* harmony import */ var _pages_admin_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/admin/welcome/welcome.component */ 514);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ 5245);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.component */ 4902);
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/profile/profile.component */ 220);
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/signup/signup.component */ 8406);
/* harmony import */ var _pages_user_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/user/user-dashboard/user-dashboard.component */ 7864);
/* harmony import */ var _services_admin_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/admin.guard */ 7057);
/* harmony import */ var _services_normal_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/normal.guard */ 4698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);












const routes = [
    {
        path: '',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent,
        pathMatch: 'full',
    },
    {
        path: 'signup',
        component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__.SignupComponent,
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent,
        pathMatch: 'full',
    },
    {
        path: 'user-dashboard',
        component: _pages_user_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_6__.UserDashboardComponent,
        pathMatch: 'full',
        canActivate: [_services_normal_guard__WEBPACK_IMPORTED_MODULE_8__.NormalGuard],
    },
    {
        path: 'admin',
        component: _pages_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent,
        canActivate: [_services_admin_guard__WEBPACK_IMPORTED_MODULE_7__.AdminGuard],
        children: [
            {
                path: '',
                component: _pages_admin_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_1__.WelcomeComponent,
            },
            {
                path: 'profile',
                component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__.ProfileComponent,
            },
        ]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 3252);



class AppComponent {
    constructor() {
        this.title = 'examfront';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar")(1, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 3252);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/signup/signup.component */ 8406);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/login/login.component */ 4902);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home/home.component */ 5245);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _services_auth_inteceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth.inteceptor */ 8202);
/* harmony import */ var _pages_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/admin/dashboard/dashboard.component */ 5700);
/* harmony import */ var _pages_user_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/user/user-dashboard/user-dashboard.component */ 7864);
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/profile/profile.component */ 220);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ 517);
/* harmony import */ var _pages_admin_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/admin/sidebar/sidebar.component */ 825);
/* harmony import */ var _pages_admin_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/admin/welcome/welcome.component */ 514);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/table */ 288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);



























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [_services_auth_inteceptor__WEBPACK_IMPORTED_MODULE_7__.authInterceptorProviders], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__.MatSnackBarModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_22__.MatCardModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIconModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__.MatListModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_26__.MatTableModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent,
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent,
        _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__.SignupComponent,
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__.LoginComponent,
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__.HomeComponent,
        _pages_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__.DashboardComponent,
        _pages_user_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_9__.UserDashboardComponent,
        _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__.ProfileComponent,
        _pages_admin_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__.SidebarComponent,
        _pages_admin_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_12__.WelcomeComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__.MatSnackBarModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_22__.MatCardModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIconModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__.MatListModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_26__.MatTableModule] }); })();


/***/ }),

/***/ 4662:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 3252:
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/login.service */ 4120);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);







function NavbarComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/login");
} }
function NavbarComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Register ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/signup");
} }
function NavbarComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.user.username, " ");
} }
function NavbarComponent_a_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_a_10_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.logout()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/login");
} }
class NavbarComponent {
    constructor(login) {
        this.login = login;
        this.isLoggedIn = false;
        this.user = null;
    }
    ngOnInit() {
        this.isLoggedIn = this.login.isLoggedIn();
        this.user = this.login.getUser();
        this.login.loginStatusSubject.asObservable().subscribe(data => {
            this.isLoggedIn = this.login.isLoggedIn();
            this.user = this.login.getUser();
        });
    }
    logout() {
        this.login.logout();
        this.login.loginStatusSubject.next(false);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService)); };
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 11, vars: 4, consts: [["color", "primary"], ["routerLink", "/", "mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon"], [1, "example-spacer"], ["mat-icon-button", "", "class", "example-icon favorite-icon", "aria-label", "Example icon-button with heart icon", 3, "routerLink", 4, "ngIf"], ["mat-icon-button", "", "class", "example-icon favorite-icon ml20 mr20", "aria-label", "Example icon-button with heart icon", 3, "routerLink", 4, "ngIf"], ["mat-icon-button", "", "class", "example-icon favorite-icon ml20 mr20", "aria-label", "Example icon-button with heart icon", 4, "ngIf"], ["mat-icon-button", "", "class", "example-icon favorite-icon ml20 mr20", "aria-label", "Example icon-button with heart icon", 3, "routerLink", "click", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "Example icon-button with heart icon", 1, "example-icon", "favorite-icon", 3, "routerLink"], ["mat-icon-button", "", "aria-label", "Example icon-button with heart icon", 1, "example-icon", "favorite-icon", "ml20", "mr20", 3, "routerLink"], ["mat-icon-button", "", "aria-label", "Example icon-button with heart icon", 1, "example-icon", "favorite-icon", "ml20", "mr20"], ["mat-icon-button", "", "aria-label", "Example icon-button with heart icon", 1, "example-icon", "favorite-icon", "ml20", "mr20", 3, "routerLink", "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "a", 1)(2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "menu_book");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Training App");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, NavbarComponent_a_7_Template, 2, 1, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, NavbarComponent_a_8_Template, 2, 1, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, NavbarComponent_a_9_Template, 2, 1, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, NavbarComponent_a_10_Template, 2, 1, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoggedIn && ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatAnchor, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon], styles: [".example-spacer[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztFQUNoQiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXNwYWNlciB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gIH0iXX0= */"] });


/***/ }),

/***/ 5700:
/*!**************************************************************!*\
  !*** ./src/app/pages/admin/dashboard/dashboard.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sidebar/sidebar.component */ 825);



class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 7, vars: 0, consts: [[1, "bootstrap-wrapper"], [1, "container-fluid"], [1, "row"], [1, "col-md-2"], [1, "col-md-10"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 825:
/*!**********************************************************!*\
  !*** ./src/app/pages/admin/sidebar/sidebar.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ 517);





class SidebarComponent {
    constructor() { }
    ngOnInit() {
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 16, vars: 0, consts: [["mat-subheader", ""], ["mat-list-item", "", "routerLink", "/admin"], ["mat-list-icon", ""], ["mat-list-item", "", "routerLink", "/admin/profile"], ["mat-list-item", ""]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card")(1, "mat-action-list")(2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1)(5, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3)(9, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4)(13, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListItem, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListIconCssMatStyler, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListSubheaderCssMatStyler], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 514:
/*!**********************************************************!*\
  !*** ./src/app/pages/admin/welcome/welcome.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeComponent": () => (/* binding */ WelcomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class WelcomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(); };
WelcomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 2, vars: 0, template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Welcome to admin Panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWxjb21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 5245:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 4522);


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 8, vars: 0, consts: [[1, "bootstrap-wrapper"], [1, "container"], [1, "row", "mt20"], [1, "col-md-6", "offset-md-3", "text-center"], ["type", "submit", "mat-raised-button", "", "color", "primary"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Welcome to exam portal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 4902:
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/login.service */ 4120);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 2156);









class LoginComponent {
    constructor(snack, login, router) {
        this.snack = snack;
        this.login = login;
        this.router = router;
        this.loginData = {
            username: '',
            password: '',
        };
    }
    ngOnInit() {
    }
    // triggered when click ob login button
    formSubmit() {
        console.log("login button click");
        if (this.loginData.username.trim() == '' || this.loginData.username == null) {
            this.snack.open('User name is required !!', '', {
                duration: 3000,
            });
            return;
        }
        if (this.loginData.password.trim() == '' || this.loginData.password == null) {
            this.snack.open('Password is required !!', '', {
                duration: 3000,
            });
            return;
        }
        //request to server to generate token
        this.login.generateToken(this.loginData).subscribe((data) => {
            console.log('success');
            console.log(data);
            //login..
            this.login.loginUser(data.token);
            this.login.getCurrentUser().subscribe((user) => {
                this.login.setUser(user);
                console.log(user);
                // redirect ... Admin: admin-dashboard
                //redirect ...Normal: normal-dashboard
                if (this.login.getUserRole() == 'ADMIN') {
                    //admin dashbaord
                    //window.location.href='/admin';
                    this.login.loginStatusSubject.next(true);
                    this.router.navigate(['admin']);
                }
                else if (this.login.getUserRole() == 'NORMAL') {
                    // normal user dashboard
                    //window.location.href='/user-dashboard';
                    this.router.navigate(['user-dashboard']);
                    this.login.loginStatusSubject.next(true);
                }
                else {
                    this.login.logout();
                }
            });
        }, (error) => {
            console.log('Error !');
            console.log(error);
            this.snack.open("Invalid Details !!, Try again", '', {
                duration: 3000
            });
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 27, vars: 2, consts: [[1, "bootstrap-wrapper"], [1, "container"], [1, "row"], [1, "col-md-6", "offset-md-3"], [1, "mt20"], [1, "container", "text-center", "mb10", "mt20"], ["src", "../../../assets/logo.png", "alt", "logo", 1, "imagesize"], [1, "text-center", "mt20"], [3, "ngSubmit"], ["appearance", "outline", 1, "full-width"], ["required", "", "name", "username", "matInput", "", "placeholder", "Enter Here", 3, "ngModel", "ngModelChange"], ["required", "", "name", "password", "type", "password", "matInput", "", "placeholder", "Enter Here", 3, "ngModel", "ngModelChange"], [1, "container", "text-center"], ["type", "submit", "mat-raised-button", "", "color", "primary"], ["mat-raised-button", "", "color", "accent", 1, "ml20"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "mat-card", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Login Here !!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_9_listener() { return ctx.formSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field", 9)(11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "User Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) { return ctx.loginData.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Valid User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field", 9)(17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "User Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_19_listener($event) { return ctx.loginData.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 12)(23, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.loginData.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.loginData.password);
    } }, dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard], styles: [".full-width[_ngcontent-%COMP%]{\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoe1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });


/***/ }),

/***/ 220:
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 2156);


class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 38, vars: 0, consts: [[1, "bootstrap-wrapper"], [1, "container"], [1, "container", "text-center"], ["src", "../../../assets/default_pic.png", "alt", "default photo", 1, "profile_image_responsive", "mb20"], [1, "row"], [1, "col-md-10", "offset-md-1"], [1, "table", "text-center"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card")(1, "H1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your Profile Detail>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content")(4, "div", 0)(5, "div", 1)(6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Binod Kumar Kathayat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4)(11, "div", 5)(12, "table", 6)(13, "tr")(14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "BinodK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr")(19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "UserId");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "34343");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr")(24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "34343434343");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr")(29, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr")(34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
    } }, dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardContent], styles: [".profile_image_responsive[_ngcontent-%COMP%]{\n    max-width: 150px;\n    max-height: 150px;\n    border-radius: 50%;\n    border: 2px solid #3f51b5;\n\n}\n.table[_ngcontent-%COMP%]{\n    width: 100%;\n    border: 0.5px solid rgb(242, 238, 244);\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\n    padding: 20px 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQUF5Qjs7QUFFN0I7QUFDQTtJQUNJLFdBQVc7SUFDWCxzQ0FBc0M7QUFDMUM7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZV9pbWFnZV9yZXNwb25zaXZle1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzZjUxYjU7XG5cbn1cbi50YWJsZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYigyNDIsIDIzOCwgMjQ0KTtcbn1cbi50YWJsZSB0ciB0ZHtcbiAgICBwYWRkaW5nOiAyMHB4IDUwcHg7XG59Il19 */"] });


/***/ }),

/***/ 8406:
/*!**************************************************!*\
  !*** ./src/app/pages/signup/signup.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupComponent": () => (/* binding */ SignupComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ 3071);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 2156);









class SignupComponent {
    constructor(userService, snack) {
        this.userService = userService;
        this.snack = snack;
        this.user = {
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
        };
    }
    ngOnInit() {
    }
    formSubmit() {
        console.log(this.user);
        if (this.user.username == '' || this.user.username == null) {
            this.snack.open("Username is required !!", '', {
                duration: 3000,
            });
            return;
        }
        // addUser: UserService
        this.userService.addUser(this.user).subscribe((data) => {
            //success
            //console.log(data);
            //alert('success');
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Successfully done', 'user id is' + data.id, 'success');
        }, (error) => {
            console.log(error);
            this.snack.open("User is already exist with this user id !!", '', {
                duration: 300,
            });
            //alert('something went wrong');
        });
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar)); };
SignupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 43, vars: 6, consts: [[1, "bootstrap-wrapper"], [1, "container"], [1, "row"], [1, "col-md-6", "offset-md-3"], [1, "mt20"], [1, "container", "text-center", 2, "margin-bottom", "10px", "margin-top", "20px"], ["src", "../../../assets/logo.png", "alt", "logo", 1, "imagesize"], [1, "text-center"], [3, "ngSubmit"], ["appearance", "outline", 1, "full-width"], ["required", "", "name", "username", "matInput", "", "placeholder", "Enter Here", 3, "ngModel", "ngModelChange"], ["required", "", "name", "password", "type", "password", "matInput", "", "placeholder", "Enter Here", 3, "ngModel", "ngModelChange"], ["required", "", "name", "firstname", "matInput", "", "placeholder", "Enter Here", 3, "ngModel", "ngModelChange"], ["required", "", "name", "lastname", "matInput", "", "placeholder", "Enter Here", 3, "ngModel", "ngModelChange"], ["required", "", "name", "email", "type", "email", "matInput", "", "placeholder", "Enter Here", 3, "ngModel", "ngModelChange"], ["type", "number", "required", "", "name", "phone", "matInput", "", "placeholder", "Enter Here", 3, "ngModel", "ngModelChange"], [1, "container", "text-center"], ["type", "submit", "mat-raised-button", "", "color", "primary"], ["mat-raised-button", "", "color", "accent", 2, "margin-left", "20px"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "mat-card", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Register Here !!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_9_listener() { return ctx.formSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-form-field", 9)(11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "User Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_13_listener($event) { return ctx.user.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "User must be unique");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-form-field", 9)(17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "User Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_19_listener($event) { return ctx.user.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-form-field", 9)(23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "First Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_25_listener($event) { return ctx.user.firstname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "mat-form-field", 9)(27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Last Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_29_listener($event) { return ctx.user.lastname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "mat-form-field", 9)(31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Email address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_33_listener($event) { return ctx.user.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "mat-form-field", 9)(35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Phone Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_37_listener($event) { return ctx.user.phone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 16)(39, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.user.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.user.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.user.firstname);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.user.lastname);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.user.phone);
    } }, dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard], styles: [".full-width[_ngcontent-%COMP%]{\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGh7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */"] });


/***/ }),

/***/ 7864:
/*!***********************************************************************!*\
  !*** ./src/app/pages/user/user-dashboard/user-dashboard.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDashboardComponent": () => (/* binding */ UserDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class UserDashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserDashboardComponent.ɵfac = function UserDashboardComponent_Factory(t) { return new (t || UserDashboardComponent)(); };
UserDashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserDashboardComponent, selectors: [["app-user-dashboard"]], decls: 2, vars: 0, template: function UserDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Welcome to normal userdashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 7057:
/*!*****************************************!*\
  !*** ./src/app/services/admin.guard.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminGuard": () => (/* binding */ AdminGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.service */ 4120);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);




class AdminGuard {
    constructor(login, router) {
        this.login = login;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.login.isLoggedIn() && this.login.getUserRole() == 'ADMIN') {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
}
AdminGuard.ɵfac = function AdminGuard_Factory(t) { return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AdminGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AdminGuard, factory: AdminGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8202:
/*!*********************************************!*\
  !*** ./src/app/services/auth.inteceptor.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor),
/* harmony export */   "authInterceptorProviders": () => (/* binding */ authInterceptorProviders)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.service */ 4120);



class AuthInterceptor {
    constructor(login) {
        this.login = login;
    }
    intercept(req, next) {
        //add the jwt token (localStorage) request
        console.log("inside interceptor");
        let authReq = req;
        const token = this.login.getToken();
        if (token != null) {
            authReq = authReq.clone({ setHeaders: { Authorization: `Bearer ${token}` },
            });
        }
        return next.handle(authReq);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService)); };
AuthInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
const authInterceptorProviders = [
    {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true,
    },
];


/***/ }),

/***/ 5567:
/*!************************************!*\
  !*** ./src/app/services/helper.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let baseUrl = "http://localhost:8080";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseUrl);
// addUser: UserService


/***/ }),

/***/ 4120:
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ 5567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




class LoginService {
    constructor(http) {
        this.http = http;
        this.loginStatusSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }
    getCurrentUser() {
        return this.http.get(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/current-user`);
    }
    //generate token
    generateToken(loginData) {
        return this.http.post(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/generate-token`, loginData);
    }
    // login user: set token in locaStorage
    loginUser(token) {
        localStorage.setItem('token', token);
        return true;
    }
    //isLogin : user is logged in or not
    isLoggedIn() {
        let tokenStr = localStorage.getItem('token');
        if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
            return false;
        }
        else {
            return true;
        }
    }
    //logout : remove token from local storage
    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        return true;
    }
    // get token
    getToken() {
        return localStorage.getItem('token');
    }
    //set userDetail
    setUser(user) {
        localStorage.setItem('user', JSON.stringify(user));
    }
    //getUser
    getUser() {
        let userStr = localStorage.getItem('user');
        if (userStr != null) {
            return JSON.parse(userStr);
        }
        else {
            this.logout();
            return null;
        }
    }
    // get user role
    getUserRole() {
        let user = this.getUser();
        return user.authorities[0].authority;
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
LoginService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4698:
/*!******************************************!*\
  !*** ./src/app/services/normal.guard.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NormalGuard": () => (/* binding */ NormalGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.service */ 4120);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);




class NormalGuard {
    constructor(login, router) {
        this.login = login;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.login.isLoggedIn() && this.login.getUserRole() == 'NORMAL') {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
}
NormalGuard.ɵfac = function NormalGuard_Factory(t) { return new (t || NormalGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
NormalGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NormalGuard, factory: NormalGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3071:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ 5567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class UserService {
    constructor(http) {
        this.http = http;
    }
    // add user
    addUser(user) {
        return this.http.post(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/user/`, user);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
UserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(1211), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map