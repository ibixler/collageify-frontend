import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.less']
})
export class CallbackComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private store: Storage){}
  async ngOnInit() {
    this.getCurrentUrl();
    const code = this.route.snapshot.queryParamMap.get('code');
    console.log(code);  
    const jsonData = { code: code };
    await this.store.create().then(() => {
      this.store.get('token').then((token) => {
        const headers = { 'Authorization': `Bearer ${token}` }
        console.log(headers);
        console.log('token!' + token);

        const response = axios.post('http://localhost:8080/callback/set-refresh-token', jsonData,{ headers, withCredentials: true }).then(
          response => {
            console.log(response.data);
          }
          );
        });
      })
  }
  getCurrentUrl(): void {
    const currentUrl = this.router.url;
    console.log('Current URL:', currentUrl);
    
  }   
}