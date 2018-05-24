import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { LoginComponent } from './login/login.component';
import { FeaturesComponent } from './main/features/features.component';
import { CurrenciesComponent } from './main/currencies/currencies.component';
import { CurrenciesService } from './services/currencies.service';
import { NotFoundComponent } from './main/not-found/not-found.component';
import { LogOutComponent } from './main/log-out/log-out.component';
import { CurrencyPlnComponent } from './main/currencies/currency-pln/currency-pln.component';
import { CurrencyUsdComponent } from './main/currencies/currency-usd/currency-usd.component';
import { AuthenticatedGuard } from './security/authenticated.guard';
import { NotAuthenticatedGuard } from './security/not-authenticated.guard';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    FeaturesComponent,
    CurrenciesComponent,
    NotFoundComponent,
    LogOutComponent,
    CurrencyPlnComponent,
    CurrencyUsdComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    CurrenciesService,
    AuthenticatedGuard,
    NotAuthenticatedGuard
  ]
})
export class AppModule {
}
