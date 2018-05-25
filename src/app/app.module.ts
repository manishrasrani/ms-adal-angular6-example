import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationGuard, MsAdalAngular6Module } from 'microsoft-adal-angular6';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsAdalAngular6Module.forRoot({
      tenant: '<YOUR TENANT>',
      clientId: '<YOUR CLIENT / APP ID>',
      redirectUri: window.location.origin,
      endpoints: {
        "https://localhost/Api/": "xxx-bae6-4760-b434-xxx"
      },
      navigateToLoginRequestUrl: false,
      cacheLocation: 'localStorage',
    })
  ],
  providers: [AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }