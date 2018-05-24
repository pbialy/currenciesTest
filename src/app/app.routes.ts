import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FeaturesComponent } from './main/features/features.component';
import { CurrenciesComponent } from './main/currencies/currencies.component';
import { NotFoundComponent } from './main/not-found/not-found.component';
import { AuthenticatedGuard } from './security/authenticated.guard';

export const appRoutes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'login'
}, {
  path: 'login',
  component: LoginComponent,
  outlet: 'primary'
}, {
  path: 'features',
  component: FeaturesComponent,
  canActivate: [AuthenticatedGuard],
  outlet: 'primary'
}, {
  path: 'currencies',
  component: CurrenciesComponent,
  canActivate: [AuthenticatedGuard],
  outlet: 'primary'
}, {
  path: '404',
  component: NotFoundComponent,
  canActivate: [AuthenticatedGuard],
  outlet: 'primary'
}, {
  path: '**',
  redirectTo: '/404'
}];
