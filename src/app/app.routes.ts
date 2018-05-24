import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FeaturesComponent } from './main/features/features.component';
import { CurrenciesComponent } from './main/currencies/currencies.component';

export const appRoutes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'login'
}, {
  path: 'login',
  component: LoginComponent,
  // canActivate: [NotAuthenticatedGuard],
  outlet: 'primary'
}, {
  path: 'features',
  component: FeaturesComponent,
  // canActivate: [NotAuthenticatedGuard],
  outlet: 'primary'
}, {
  path: 'currencies',
  component: CurrenciesComponent,
  // canActivate: [NotAuthenticatedGuard],
  outlet: 'primary'
}];
