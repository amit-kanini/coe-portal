import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
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
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainscreenComponent } from './mainscreen/mainscreen.component';
import { AcceleratorsComponent } from './accelerators/accelerators.component';
import { AcceleratorDetailsComponent } from './accelerator-details/accelerator-details.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


import { ChartsModule } from 'ng2-charts';
import { DashboardsMelaComponent } from './dashboards-mela/dashboards-mela.component';
import { DashboardMelaDetailsComponent } from './dashboard-mela-details/dashboard-mela-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    LogoutComponent,
    SignupComponent,
    ManageacceleratorsComponent,
    ProductownerComponent,
    CoreteamComponent,
    UpdatedetailsComponent,
    ManageuserComponent,
    EdituserComponent,
    DeleteuserComponent,
    ApproverequestComponent,
    RejectrequestComponent,
    ThirdScreenComponent,
    AcceleratorInterestComponent,
    SidebarComponent,
    MainscreenComponent,
    AcceleratorsComponent,
    AcceleratorDetailsComponent,
    DashboardsMelaComponent,
    DashboardMelaDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NoopAnimationsModule,
    NgbModule,
    ChartsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
