import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private store: LocalService) { }
  makeRequest(path: string): Observable<any> {
    const url = 'http://localhost:8080/' + path;
    const token = this.store.getData("token");
    if(this.store.isItemPresent('token')){
      /* const headerOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.store.getData('token')
        })
      }; */
      const headers= new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', 'Bearer ' + this.store.getData('token'));
 
      
      return this.http.get(url, {'headers': headers});
    } else {
      throw new Error('something went wrong');
      
    }
  
    
  }
 /*  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization Bearer' + this.store.getData('token')) 
  } */

}
