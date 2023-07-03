import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import axios from 'axios';
import { LocalService } from '../local.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
  constructor(private router: Router, private store: LocalService){}
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
    
    this.navToLoading();
  }
  register(){
    this.navToRegister();
  }
  async sendRequest(usernameOrEmail: string | null | undefined, password: string | null | undefined){
    try{
      
      const storage = new LocalService;
      const url = 'http://localhost:8080/api/login/authenticate'
      const data = {
        'usernameOrEmail': usernameOrEmail,
        'password': password
      };
      const response = await axios.post(url,data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      this.store.saveData('token', response.data);
      console.log(response.data);
      this.router.navigate(["/loading"]);
    }catch (error){
      console.error(error);

    }
  }


}
