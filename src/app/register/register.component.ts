import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent {
  constructor(private router: Router){}
  registerForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')

  });

  navToLogin(){
    this.router.navigateByUrl('/login')
  }
  back(){
    this.navToLogin();
  }
  register() : void{
    console.warn(this.registerForm.value);
    this.sendRequest(this.registerForm.value.username, this.registerForm.value.email, this.registerForm.value.password);
    
  }

  async sendRequest(username: string | null | undefined, email: string | null | undefined, password: string | null | undefined){
    try{
      const url = 'http://localhost:8080/api/login/register'
      const data = {
        'username': username,
        'email': email,
        'password': password
      };
      const response = await axios.post(url,data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data);
    }catch (error){
      console.error(error);

    }
  }

  validateEmail(email: string): boolean {
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

}
