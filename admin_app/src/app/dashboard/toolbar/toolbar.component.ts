import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styles: [`
   div.row {
    background-color: aliceblue;
    padding: 5px 0;
   }
`],
})
export class ToolbarComponent implements OnInit {


  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

}
