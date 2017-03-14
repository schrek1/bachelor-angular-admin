import {Injectable} from '@angular/core';
import {User} from "../shared/User";

declare var firebase: any;

@Injectable()
export class AuthService {

  constructor() {
  }

  signinUser(user: User) {
    firebase.auth().signInWithEmailAndPassword(user.username, user.password)
      .catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
        }
      );
  }

  isLoggedIn(): boolean {
    let user = firebase.auth().currentUser;

    if (user) {
      return true;
    } else {
      return false;
    }

  }


  logout() {
    console.log('ok');
    firebase.auth().signOut();
  }
}
