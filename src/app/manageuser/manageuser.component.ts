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
  return this.users.filter((users: ICustomer) =>
  users.status .toLocaleLowerCase().includes(filterBy));

}
constructor(private router: Router,private obj:UserService) { }
  ngOnInit(): void {

    this.obj.getUsers().subscribe({
      next:users=>{
        this.users=users;
      this.filteredusers = this.users;
      },
    }); 
}
  cartAdd():void{
   // this.obj1.CartAdd(this.cartdetails).subscribe(data=>{
    //  this.router.navigate(['/cart']);
   // })
}

}
