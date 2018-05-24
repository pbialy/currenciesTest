import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { LoginComponent } from './login/login.component';
import { InputComponent } from './commons/input/input.component';
import { FeaturesComponent } from './main/features/features.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    InputComponent,
    FeaturesComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
