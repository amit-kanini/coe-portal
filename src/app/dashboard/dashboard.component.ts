import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAcceleretors } from '../Models/IAccelerators';
import { DashboardService } from '../Services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  accelerators: IAcceleretors[] = [];
  constructor(private router: Router,private obj:DashboardService) { }

  UserStatus:string='';
  checkUser:boolean=false;
  checkAdmin:boolean=false;
  
  ngOnInit(): void {
    this.obj.getAccelerators().subscribe((data)=>this.accelerators=data);
    if(localStorage.length==0){
          var temp=localStorage.length;
          console.log(temp)
          this.router.navigate(['/']);
        }

    this.UserStatus= localStorage.userStat;

    if(this.UserStatus=='admin'){
      this.checkAdmin=true;
    }
    else{
      this.checkUser=true;
    }
  }

}
