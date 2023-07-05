import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { Storage } from '@ionic/storage';
import axios from 'axios';
import { jwtOptionsFactory } from '../app.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
  constructor(private router: Router, private store: Storage) {}

  loginForm = new FormGroup({
    usernameOrEmail: new FormControl(''),
    password: new FormControl('')
  });

  async storeToken(token: string) {
    try {
      this.store.create();
      await this.store.set('token', token);
      console.log(jwtOptionsFactory(this.store).tokenGetter()); // Perform the set operation
    } catch (error) {
      console.error(error);
    }
  }

  navToLoading() {
    this.router.navigateByUrl('/loading');
  }

  navToRegister() {
    this.router.navigateByUrl('/register');
  }

  async submit() {
    const usernameOrEmail = this.loginForm.value.usernameOrEmail;
    const password = this.loginForm.value.password;

    try {
      const url = 'http://localhost:8080/api/login/authenticate';
      const data = {
        usernameOrEmail,
        password
      };

      const response = await axios.post(url, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const token = response.data;
      console.log(token + "orig token from server")
      this.storeToken(token);

      console.log(jwtOptionsFactory(this.store).tokenGetter());

      this.navToLoading();
    } catch (error) {
      console.error(error);
    }
  }

  register() {
    this.navToRegister();
  }
}
