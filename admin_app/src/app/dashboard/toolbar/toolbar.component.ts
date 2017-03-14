import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";

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

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    console.log(this.isLoggedIn());
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

}
