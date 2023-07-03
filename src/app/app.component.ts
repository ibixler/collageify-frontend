import { Component } from '@angular/core';
import { LocalService } from './local.service';
import { AuthService } from './auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(private store: LocalService, private auth: AuthService){

  }
  title = 'collageifyFrontend';
}
