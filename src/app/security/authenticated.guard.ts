import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticatedGuard implements CanActivate {

  constructor(
    private router: Router
  ) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.isUserLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  private isUserLoggedIn(): boolean {
    return sessionStorage.getItem('password') !== null && sessionStorage.getItem('userName') !== null;
  }

}
