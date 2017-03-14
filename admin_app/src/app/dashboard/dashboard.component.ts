import {Component, OnInit} from '@angular/core';
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-dashboard',
  template: `
<div class="container-fluid">
  <app-header></app-header>
  <app-toolbar *ngIf="isLoggedIn()"></app-toolbar>
  <router-outlet></router-outlet>
</div>
`,
})
export class DashboardComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

}
