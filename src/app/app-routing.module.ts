import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { ManageacceleratorsComponent } from './manageaccelerators/manageaccelerators.component';
import { ProductownerComponent } from './productowner/productowner.component';
import { CoreteamComponent } from './coreteam/coreteam.component';
import { UpdatedetailsComponent } from './updatedetails/updatedetails.component';


const routes: Routes = [
  {path:'', component : LoginComponent},
  {path:'dashboard', component : DashboardComponent},
  {path:'logout', component : LogoutComponent},
  {path:'signup', component : SignupComponent},
  {path:'manageaccelerators', component : ManageacceleratorsComponent},
  {path:'productowner', component : ProductownerComponent},
  {path:'coreteam', component : CoreteamComponent},
  {path:'updatedetail/:id', component : UpdatedetailsComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
