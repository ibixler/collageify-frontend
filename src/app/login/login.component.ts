import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
  constructor(private router: Router){}
  navToLoading(){
    this.router.navigateByUrl('/loading');
  }
  submit() {
    this.navToLoading();
  }

}
