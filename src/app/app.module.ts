import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BackgroundComponent } from './background/background.component';
import { LoadingComponent } from './loading/loading.component';
import { RegisterComponent } from './register/register.component';
import { LocalService } from './local.service';
import { AuthService } from './auth.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BackgroundComponent,
    LoadingComponent,
    RegisterComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    
    
  ],
  providers: [LocalService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
