import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAcceleretors } from '../Models/IAccelerators';
import { DashboardService } from '../Services/dashboard.service';

@Component({
  selector: 'app-manageaccelerators',
  templateUrl: './manageaccelerators.component.html',
  styleUrls: ['./manageaccelerators.component.css']
})
export class ManageacceleratorsComponent implements OnInit {

  accelerators: IAcceleretors[] = [];
  constructor(private router: Router,private obj:DashboardService) { }
  
  ngOnInit(): void {
    this.obj.getAccelerators().subscribe((data)=>this.accelerators=data);
  }

}
