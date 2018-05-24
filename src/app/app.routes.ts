import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const appRoutes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'login'
}, {
  path: 'login',
  component: LoginComponent,
  // canActivate: [NotAuthenticatedGuard],
  outlet: 'primary'
}];
