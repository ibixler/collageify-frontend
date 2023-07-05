/* import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalService } from './local.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor (private local: LocalService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.local.getData('token'); // you probably want to store it in localStorage or something

    if (!token) {
      return next.handle(req);
    }

    const req1 = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });
    const headersString = JSON.stringify(req1.headers, null, 2);

    console.log(headersString + "request headders");

    return next.handle(req1);
  }

} */