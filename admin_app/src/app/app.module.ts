import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./content/login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {routing} from "./app.routes";
import {AuthService} from "./service/auth.service";
import {HeaderComponent} from "./dashboard/header/header.component";
import {ToolbarComponent} from "./dashboard/toolbar/toolbar.component";
import {UserDashboardComponent} from "./content/users/user-dashboard.component";
import {AuthGuard} from "./service/auth.guard";
import {UserAddComponent} from './content/users/user-add/user-add.component';
import {UserService} from "./service/user.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    ToolbarComponent,
    UserDashboardComponent,
    UserAddComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
