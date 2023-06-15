import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormsModule } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent {
  constructor(private router: Router){}
  navToLogin(){
    this.router.navigateByUrl('/login')
  }
  back(){
    this.navToLogin();
  }
  register(registerForm: FormGroup) : void{
    this.sendRequest(registerForm.value.username, registerForm.value.email, registerForm.value.password);

  }

  async sendRequest(username: string, email: string, password: string, ){
    try{
      const url = 'http://localhost:8080/api/auth/register'
      const data = {
        'username': username,
        'email': email,
        'password': password
      };
      const response = await axios.post(url,data);
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
