import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICustomer } from '../Models/ICustomer';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-approverequest',
  templateUrl: './approverequest.component.html',
  styleUrls: ['./approverequest.component.css']
})
export class ApproverequestComponent implements OnInit {

  constructor(private router: Router,private route:ActivatedRoute, private obj: UserService) { }
  user:ICustomer={
    customerId:0,
    firstName:"",
    lastName:"",
    phoneNumber: "",
      email: "",
      password: "",
      isAdmin:false,
      status:"",
      logTime:"",
      loginCounter:0,
  }
status=false;
invalidlogin=false;
loading=true;
  ngOnInit(): void {
    const user_id=Number(this.route.snapshot.paramMap.get('id'));
    this.getUserById(user_id);
  }
  getUserById(id:number):void
  {
  
    this.obj.getUserById(id).subscribe(data=>
      {
        this.user=data;
      })
  }

  approveUser(id:number):void{
    this.loading=false;
    this.obj.approveUser(id).subscribe(data=>
      {
        if(data=="Approved"||data=="Already Approved")
        {
          alert(data)
          this.router.navigate(['/manageuser']);
        }
        else
        {
          this.loading=true;
          this.status=true;
        }
      },err=>
      {
        this.loading=true
        this.invalidlogin=true;
      })

  }
}
