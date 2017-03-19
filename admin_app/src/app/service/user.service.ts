import {Injectable} from "@angular/core";
import {User} from "../shared/User";
/**
 * Created by schrek on 16.03.2017.
 */

declare var firebase: any;

@Injectable()
export class UserService {


  /**
   vytvori noveho uzivatele mobilni aplikace a objekt v db
   */
  createNewUser(user: User) {
    firebase.auth().createUserWithEmailAndPassword(user.username, user.password)
      .then(userInfo => {
        firebase.database().ref('app/users/' + userInfo.uid).set({
          friends: {id_firend: "id_firend"},
          info: {username: user.username}
        });
        console.log('user created!');
      })
      .catch(function (error) {
        console.log(error);
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  }
}
