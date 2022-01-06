import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'', component : LoginComponent},
  {path:'dashboard', component : DashboardComponent},
  {path:'logout', component : LogoutComponent},
  {path:'signup', component : SignupComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
