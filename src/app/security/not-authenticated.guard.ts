import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class NotAuthenticatedGuard implements CanActivate {

  constructor(
    private router: Router
  ) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.isUserLoggedIn()) {
      this.router.navigate(['/features']);
      return false;
    } else {
      return true;
    }
  }

  private isUserLoggedIn(): boolean {
    return sessionStorage.getItem('password') !== null && sessionStorage.getItem('userName') !== null;
  }

}
