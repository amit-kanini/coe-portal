import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
password:string='';
phone:string='';

login(tempPhone:string,pass:string){
  console.log(this.phone);
  console.log(this.password);
  if(this.phone=='1234567890'|| this.password=='asdf'){
    this.router.navigate(['/dashboard']);
  }

}
  ngOnInit(): void {
  }

}