import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICustomer } from '../Models/ICustomer';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-rejectrequest',
  templateUrl: './rejectrequest.component.html',
  styleUrls: ['./rejectrequest.component.css']
})
export class RejectrequestComponent implements OnInit {

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
msg: string='';
  ngOnInit(): void {
    //const cart_id=Number(this.route.snapshot.paramMap.get('cartId'));
    const cart_id=Number(this.route.snapshot.paramMap.get('id'));
    this.getUserById(cart_id);
  }
  getUserById(id:number):void
  {
  
    this.obj.getUserById(id).subscribe(data=>
      {
        this.user=data;

        console.log(this.user);
      })
  }

  delete_api(id:number):void
  {
    this.obj.deleteUser(id).subscribe(data=>
      {
        this.msg="Rejected the Request";
        this.router.navigate(['/manageuser']);
        alert(this.msg);
      });
      
  }
}