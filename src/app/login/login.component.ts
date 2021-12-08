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
    verifiedFlag:false,
} 
// login(tempPhone:string,pass:string){
//   console.log(this.phone);
//   console.log(this.password);
//   if(this.phone=='1234567890'|| this.password=='asdf'){
//     this.router.navigate(['/dashboard']);
//   }

// }
  ngOnInit(): void {
  }

  getid_loginapi(tempPhone:string, tempPass:string ):void
  {
    this.obj.loginMethod(tempPhone, tempPass).subscribe(data=>
      {
        this.customer = data;
        localStorage.setItem("custmid", String(this.customer.customerId));
         console.log(this.customer);

        this.router.navigate(['/dashboard']);

      })
  }
}