import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    //TODO check here
    const param = route.params.name;
    if (!param) {
      return true;
    } else {
      //not login go to login page
      this.router.navigate(['/login'], {
        queryParams: { returnUrl: state.url },
      });
    }
  }
}
