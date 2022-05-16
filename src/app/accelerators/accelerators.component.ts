import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAcceleretors } from '../Models/IAccelerators';
import { DashboardService } from '../Services/dashboard.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-accelerators',
  templateUrl: './accelerators.component.html',
  styleUrls: ['./accelerators.component.css']
})
export class AcceleratorsComponent implements OnInit {
  accelerators: IAcceleretors[] = [];
  constructor(private router: Router,private obj:DashboardService,private obj1:UserService) { }

  ngOnInit(): void {
    this.obj.getAccelerators().subscribe((data)=>this.accelerators=data);
  }
  button(accName:string):void{
    localStorage.setItem('acc',accName);
  }

}
