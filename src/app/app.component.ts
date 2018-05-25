import { Component } from '@angular/core';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private adalSvc: MsAdalAngular6Service) {
    console.log(this.adalSvc.userInfo);
    var token = this.adalSvc.acquireToken('https://graph.microsoft.com').subscribe((token: string) => {
      console.log(token);
    });;
  }
}