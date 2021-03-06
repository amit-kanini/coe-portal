import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ICustomer } from '../Models/ICustomer';
import { LoginServService } from '../Services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router,private service: LoginServService) { }

  ngOnInit(): void {
  }
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
  password=""
  status=false;
  loading=true;
  invalidlogin=false;

  onSubmit(form:ICustomer):void
  {
    this.loading=false;
    form.status=""
    console.log(form)
    this.service.signup(form).subscribe(
      data=>
      {

        console.log(data,'data')

        this.invalidlogin=false;

        if(data=="Already exists change your phone number or email")
        {
          this.loading=true;
          this.status=true;
          window.scroll(0,0);
        }
        else if(data=="Request sent to Admin")
        {
          alert(data);
          this.router.navigate(['/login'])
        }
      },err=>
      {
        this.loading=true;
        this.invalidlogin=true;
      }
    )
  }
}
