import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAcceleretors } from '../Models/IAccelerators';
import { DashboardService } from '../Services/dashboard.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-accelerator-interest',
  templateUrl: './accelerator-interest.component.html',
  styleUrls: ['./accelerator-interest.component.css']
})
export class AcceleratorInterestComponent implements OnInit {

  constructor(private router: Router,private route:ActivatedRoute, private obj: UserService,private obj1:DashboardService) { }
  accelerators: IAcceleretors[] = [];
  userInterest:Number[]=[];
  loading=true;
  status=false;
  list=[];

  ngOnInit(): void {
    const cust_id=Number(this.route.snapshot.paramMap.get('id'));
    this.obj1.getAccelerators().subscribe(
      data=>
      {
       this.accelerators=data; 
       console.log(this.accelerators)
      }
    )
    this.obj.getUserInterest(cust_id).subscribe(
      data=>
      {
        this.userInterest=data;
        console.log(this.userInterest)
      }
    )
  }

  postInterest():void
  {
    console.log(this.list)
  }

}
