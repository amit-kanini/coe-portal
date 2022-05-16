import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AcceleretorsChoice } from '../Models/AcceleratorsChoice';
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
  acceleratorsChoice:AcceleretorsChoice[]=[];
  c=0;
  list=[];
  nill=null
  cust_id=Number(this.route.snapshot.paramMap.get('id'));
  ngOnInit(): void {
    const cust_id=Number(this.route.snapshot.paramMap.get('id'));
    this.obj.getUserInterest(cust_id).subscribe(
      data=>
      {
        this.userInterest=data;
      }
    )
    this.obj1.getAccelerators().subscribe(
      data=>
      {
       this.accelerators=data;
       for(let item of this.accelerators)
        {
          var acc:AcceleretorsChoice=
          {
            accId: 0,
            accName:"",
            userInterest:0
          }
          acc.accName=item.accName
          acc.accId=item.accId
          if(this.userInterest.indexOf(item.accId)!=-1)
          {
           acc.userInterest=item.accId
          }
          this.acceleratorsChoice.push(acc)
        }
    
      }
    )
  }

  postInterest(acc:AcceleretorsChoice[]):void
  {
    console.log(acc)
    var interest=[]
    for(let accnew of acc)
    {
      if(accnew.userInterest!=0)
      {
      interest.push(accnew.userInterest)
      }
    }
    this.obj.addUserInterest(interest,this.cust_id).subscribe(
      data=>
      {
        window.location.reload();
        alert(data)
      }
    )
  }

}
