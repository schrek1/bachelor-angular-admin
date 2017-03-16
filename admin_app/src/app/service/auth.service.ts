import {Injectable} from "@angular/core";
import {User} from "../shared/User";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

declare var firebase: any;

@Injectable()
export class AuthService {

  private isAdmin: boolean = false;

  constructor(private router: Router) {
  }

  signinUser(user: User) {
    firebase.auth().signInWithEmailAndPassword(user.username, user.password)
      .then(userInfo => {
          firebase.database().ref('/server/administrators/' + userInfo.uid).once('value')
            .then(snapshot => {
              if (snapshot.val() != null) {
                this.isAdmin = true;
                this.router.navigate(['/users']);
              } else {
                this.isAdmin = false;
                this.logout();
              }
            });
        }
      ).catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
      }
    );
  }

  isLoggedIn(): boolean {
    let user = firebase.auth().currentUser;

    if (user && this.isAdmin) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    firebase.auth().signOut().then(() => {
        this.isAdmin = false;
        this.router.navigate(['/login']);
      }
    );
  }
}
