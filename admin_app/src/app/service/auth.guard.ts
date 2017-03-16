import {CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router} from "@angular/router";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
/**
 * Created by schrek on 15.03.2017.
 */

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    if (this.authService.isLoggedIn()) {
      console.log('is auth');
      return true;
    } else {
      console.log('not auth');
      this.router.navigate(['/login']);
      return false;
    }
  }

}
