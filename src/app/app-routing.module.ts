import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BackgroundComponent } from './background/background.component';
import { LoadingComponent } from './loading/loading.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'background', component: BackgroundComponent},
  { path: 'loading', component: LoadingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
