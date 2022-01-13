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

 userid:string|null=null;
  UserStatus:string|null='';
  checkUser:boolean=false; //
  checkAdmin:boolean=false;
  
  ngOnInit(): void {
    this.obj.getAccelerators().subscribe((data)=>this.accelerators=data);
    this.userid=localStorage.getItem("userid");
    if(this.userid==null)
    {
      this.router.navigate(['/']);
    }

    this.UserStatus= localStorage.getItem("userStat");
    console.log(this.UserStatus);
    if(this.UserStatus=='true'){
      this.checkAdmin=true;
    }
    else{
      this.checkUser=true;
    }
  }

}
