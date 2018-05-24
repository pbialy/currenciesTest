import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { LoginComponent } from './login/login.component';
import { InputComponent } from './commons/input/input.component';
import { FeaturesComponent } from './main/features/features.component';
import { CurrenciesComponent } from './main/currencies/currencies.component';
import { CurrenciesService } from './services/currencies.service';
import { NotFoundComponent } from './main/not-found/not-found.component';
import { LogOutComponent } from './main/log-out/log-out.component';

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
    InputComponent,
    FeaturesComponent,
    CurrenciesComponent,
    NotFoundComponent,
    LogOutComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    CurrenciesService
  ]
})
export class AppModule {
}
