import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import axios from 'axios';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
  constructor(private router: Router){}
  loginForm = new FormGroup({
    usernameOrEmail: new FormControl(''),
    password: new FormControl('')
  });
  navToLoading(){
    this.router.navigateByUrl('/loading');
  }
  navToRegister(){
    this.router.navigateByUrl('/register');
  }
  submit() {
    this.sendRequest(this.loginForm.value.usernameOrEmail, this.loginForm.value.password);
    
    //this.navToLoading();
  }
  register(){
    this.navToRegister();
  }
  async sendRequest(usernameOrEmail: string | null | undefined, password: string | null | undefined){
    try{
      const url = 'http://localhost:8080/api/auth/login'
      const data = {
        'usernameOrEmail': usernameOrEmail,
        'password': password
      };
      const response = await axios.post(url,data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data);
      this.router.navigate(["/loading"]);
    }catch (error){
      console.error(error);

    }
  }


}
