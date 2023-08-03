import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JWT_OPTIONS, JwtModule } from "@auth0/angular-jwt";

import { Storage } from '@ionic/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BackgroundComponent } from './background/background.component';
import { LoadingComponent } from './loading/loading.component';
import { RegisterComponent } from './register/register.component';
import { LocalService } from './local.service';
import { CallbackComponent } from './callback/callback.component';

export function jwtOptionsFactory(storage: Storage) {
  return {
    tokenGetter: () => {
      return storage.get('token');
    },
    allowedDomains: ["localhost:8080/"]
  }
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BackgroundComponent,
    LoadingComponent,
    RegisterComponent,
    CallbackComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [Storage]
      }
    })
    
    
    
  ],
  providers: [LocalService, Storage],
    //{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
    //LocalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
