import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServService } from '../Services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router,private authService: LoginServService) { }

  // firstName:string=''
  // lastName:string=''
  // email:string=''
  // phone:string=''
  // password:string=''


  ngOnInit(): void {
  }

  onSubmit(form: NgForm):void
  {
    if (!form.valid) {
      return;
    }
    
    const firstName = form.value.firstName;
    const lastName = form.value.lastName;
    const email = form.value.email;
    const password = form.value.password;
    const phone = form.value.phone;
    const isAdmin = true; // get from checkbox ?

    console.log("Registration : "+ firstName, lastName, phone, email, password, true);

    this.authService.signup(firstName, lastName, phone, email, password, isAdmin).subscribe({
      next: data => {
        console.log(data)
        this.router.navigate(['/']);
    },
    error: error => {
        //this.errorMessage = error.message;
        console.error('There was an error!', error);
        this.router.navigate(['/']);
    }
      

      

      })
  }
}
