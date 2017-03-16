import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {Router, ActivatedRoute} from "@angular/router";
import {auditTime} from "rxjs/operator/auditTime";

declare var firebase: any;

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    if(this.authService.isLoggedIn()){
      this.router.navigate(['users']);
    }
  }

  onSubmit() {
    this.authService.signinUser(this.loginForm.value);
  }
}



