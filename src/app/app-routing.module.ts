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

import { ThirdScreenComponent } from './third-screen/third-screen.component';

import { AcceleratorInterestComponent } from './accelerator-interest/accelerator-interest.component';
import { MainscreenComponent } from './mainscreen/mainscreen.component';
import { AcceleratorDetailsComponent } from './accelerator-details/accelerator-details.component';
import { DashboardMelaDetailsComponent } from './dashboard-mela-details/dashboard-mela-details.component';



const routes: Routes = [

  {path:'login', component : LoginComponent},
   {path:'', component : LoginComponent},
  {path:'dashboard', component : DashboardComponent},
  {path:'logout', component : LogoutComponent},
  {path:'hi', component : ThirdScreenComponent},
  {path:'signup', component : SignupComponent},
  {path:'manageaccelerators', component : ManageacceleratorsComponent},
  {path:'productowner', component : ProductownerComponent},
  {path:'coreteam', component : CoreteamComponent},
  {path:'updatedetail/:id', component : UpdatedetailsComponent},
  {path:'manageuser', component : ManageuserComponent},
  {path:'edituser/:id', component : EdituserComponent},
  {path:'deleteuser/:id', component : DeleteuserComponent},
  {path:'approveuser/:id', component : ApproverequestComponent},
  {path:'rejectuser/:id', component : RejectrequestComponent},
  {path:'acceleratorinterest/:id',component:AcceleratorInterestComponent},
  {path:'main/:urlprm',component:MainscreenComponent},
  {path:'main/:urlprm/:id',component:MainscreenComponent},
  {path:'main/dashboardDetails/:id',component:DashboardMelaDetailsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
