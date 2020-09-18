import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServiceLoginFormComponent } from './auth/service-login-form/service-login-form.component';
import { SiteLoginFormComponent } from './auth/site-login-form/site-login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceLoginFormComponent,
    SiteLoginFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
