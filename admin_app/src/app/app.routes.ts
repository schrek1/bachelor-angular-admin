/**
 * Created by schrek on 12.03.2017.
 */
import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./content/login/login.component";
import {UserDashboardComponent} from "./content/users/user-dashboard.component";
import {AuthGuard} from "./service/auth.guard";

const APP_ROUTES: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'users', component: UserDashboardComponent, canActivate: [AuthGuard]},
  {path: '**', component: LoginComponent},
];


export const routing = RouterModule.forRoot(APP_ROUTES);


