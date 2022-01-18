import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-updatedetails',
  templateUrl: './updatedetails.component.html',
  styleUrls: ['./updatedetails.component.css']
})
export class UpdatedetailsComponent implements OnInit {

  constructor() { }

  clicked=true;
  ishidden=true;

  public buttonChanges1() : void {
    this.ishidden=false;
    this.clicked=false;
  }

  public buttonChanges2() : void {
    this.ishidden=true;
    this.clicked=true;
  }

  public onSubmit() : void {
   console.log("hello");
  }

  ngOnInit(): void {
  }

}
