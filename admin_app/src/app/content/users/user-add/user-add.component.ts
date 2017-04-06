import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {UserService} from "../../../service/user.service";
import {User} from "../../../shared/User";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  addUserForm: FormGroup;

  constructor(private userService: UserService) {
    this.addUserForm = new FormGroup({
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
      'checkpass': new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  onSubmit() {
      this.userService.createNewUser({
        username: this.addUserForm.value.username,
        password: this.addUserForm.value.password
      });
    this.addUserForm.reset();
  }
}
