import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  validUser:boolean=false;
  id:string|null=null;
  ngOnInit(): void {
    this.id=localStorage.getItem("userid");
    if(this.id!=null){
    this.validUser=true;
    }
  }
  logout():void{
    localStorage.clear();
    this.router.navigate(['/']);
    }


}
