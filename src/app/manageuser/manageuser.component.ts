import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICustomer } from '../Models/ICustomer';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.css']
})
export class ManageuserComponent implements OnInit {
users:ICustomer[]=[];
non_admin_users:ICustomer[]=[];
filteredusers:ICustomer[]=[];
  
  private _listFilter: string = '';
get listFilter(): string {
  return this._listFilter;
}
set listFilter(value: string) {
  this._listFilter = value;
  console.log('In setter:', value);
  this.filteredusers = this.performFilter(value);
}
performFilter(filterBy: string): ICustomer[] {
 filterBy = filterBy.toLocaleLowerCase();
  return this.non_admin_users.filter((non_admin_users: ICustomer) =>
  non_admin_users.status.toLocaleLowerCase().includes(filterBy));

}
constructor(private router: Router,private obj:UserService) { }
  ngOnInit(): void {

    this.obj.getUsers().subscribe({
      next:users=>{
        for(let i of users)
        {
          if(i.isAdmin==false)
          {
            this.non_admin_users.push(i)
          }
        }
        this.non_admin_users=this.non_admin_users;
      this.filteredusers = this.non_admin_users;
      },
    }); 
}

}
