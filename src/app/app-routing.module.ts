import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthenticationGuard } from 'microsoft-adal-angular6';
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: '', component: AppComponent, pathMatch:'full', canActivate: [AuthenticationGuard]}
  ]; 
@NgModule({
    imports: [    
      RouterModule.forRoot(routes),
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule { }