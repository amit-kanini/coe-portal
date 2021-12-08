import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  validUser:boolean=false;
  id:string|null='';
  ngOnInit(): void {
    this.id=localStorage.getItem("custmid");
    if(Number(this.id) >=100){
    this.validUser=true;
    }

  }


}
