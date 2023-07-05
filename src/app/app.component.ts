import { Component } from '@angular/core';
import { LocalService } from './local.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(private store: LocalService){

  }
  title = 'collageifyFrontend';
}
