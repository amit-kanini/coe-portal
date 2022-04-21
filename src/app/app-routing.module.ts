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
import { ManageuserComponent } from './manageuser/manageuser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { ApproverequestComponent } from './approverequest/approverequest.component';
import { RejectrequestComponent } from './rejectrequest/rejectrequest.component';


const routes: Routes = [
  // {path:'', component : LoginComponent},
  {path:'', component : SignupComponent},
  {path:'dashboard', component : DashboardComponent},
  {path:'logout', component : LogoutComponent},
  // {path:'signup', component : SignupComponent},
  {path:'manageaccelerators', component : ManageacceleratorsComponent},
  {path:'productowner', component : ProductownerComponent},
  {path:'coreteam', component : CoreteamComponent},
  {path:'updatedetail', component : UpdatedetailsComponent},
  {path:'manageuser', component : ManageuserComponent},
  {path:'edituser/:id', component : EdituserComponent},
  {path:'deleteuser/:id', component : DeleteuserComponent},
  {path:'approveuser/:id', component : ApproverequestComponent},
  {path:'rejectuser/:id', component : RejectrequestComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
