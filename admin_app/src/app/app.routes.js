/**
 * Created by schrek on 12.03.2017.
 */
"use strict";
var router_1 = require("@angular/router");
var login_component_1 = require("./login/login.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var APP_ROUTES = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent }
];
exports.routing = router_1.RouterModule.forRoot(APP_ROUTES);
