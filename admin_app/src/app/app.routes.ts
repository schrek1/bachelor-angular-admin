/**
 * Created by schrek on 12.03.2017.
 */


import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./content/login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
];



export const routing = RouterModule.forRoot(APP_ROUTES);


