import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICustomer } from '../Models/ICustomer';
import { LoginServService } from '../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private obj: LoginServService) { }
  
password:string='';
phone:string='';

customer : ICustomer = {
  customerId: 0, 
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email:"",
    password: "",
    isAdmin:false,
    status:"",
    logTime:"",
    loginCounter:0
} 
status=false;
invalidlogin=false;
loading=true;
userid:string|null=null;
  ngOnInit(): void {
    this.userid=localStorage.getItem("userid");
    if(this.userid!=null)
    {
      this.router.navigate(['/dashboard']);
    }
  }

  getid_loginapi(tempEmail:string, tempPass:string ):void
  {
    this.loading=false;
    this.obj.loginMethod(tempEmail, tempPass).subscribe(data=>
      {
        this.invalidlogin=false;
        this.customer = data;
         console.log(this.customer);
         if(this.customer.status=="Approved")
         {
          localStorage.setItem("username",data.firstName+" "+data.lastName);
          localStorage.setItem("userid",data.customerId.toString());
          localStorage.setItem("userStat",String(data.isAdmin));
          this.router.navigate(['/dashboard']);
         }
         else if(this.customer.status=="Pending")
         {
          this.loading=true;
           this.status=true;
           window.scroll(0,0);
         }

      },err=>
      {
        this.loading=true;
        this.invalidlogin=true;
      })
  }

 
}