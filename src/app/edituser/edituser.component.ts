import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAcceleretors } from '../Models/IAccelerators';
import { ICustomer } from '../Models/ICustomer';
import { DashboardService } from '../Services/dashboard.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  constructor(private router: Router,private route:ActivatedRoute, private obj: UserService,private obj1:DashboardService) { }
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
accelerators: IAcceleretors[] = [];
  ngOnInit(): void {
    //const cart_id=Number(this.route.snapshot.paramMap.get('cartId'));
    const cart_id=Number(this.route.snapshot.paramMap.get('id'));
    this.getUserById(cart_id);
    this.obj1.getAccelerators().subscribe((data)=>this.accelerators=data);
    console.log(this.accelerators);
  }
  getUserById(id:number):void
  {
  
    this.obj.getUserById(id).subscribe(data=>
      {
        this.user=data;

        console.log(this.user);
      })
  }

  putUserDetails():void{
    this.obj.putUser(this.user).subscribe(data=>
      
      {
        console.log(this.user);
        this.router.navigate(['/manageuser']);
      })

  }

}
