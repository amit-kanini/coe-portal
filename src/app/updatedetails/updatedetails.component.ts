import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IAcceleretors } from '../Models/IAccelerators';
import { ActivatedRoute,Router } from '@angular/router';
import { DashboardService } from '../Services/dashboard.service';

@Component({
  selector: 'app-updatedetails',
  templateUrl: './updatedetails.component.html',
  styleUrls: ['./updatedetails.component.css']
})
export class UpdatedetailsComponent implements OnInit {

  constructor(private router: Router,private route:ActivatedRoute,private obj:DashboardService) { }

  clicked=true;
  ishidden=true;

  accelerators: IAcceleretors={
    accId	:0,
    accName	:"",
    accDescr:"",
    accUrl:	"",
    accImg:	"",
    accDoc:	"",
    accVideo:"",
    accHowIt:'',
    accLogo:'',
    accNumberOfDays:''
  };
 
  ngOnInit(): void {
    const acc_id=Number(this.route.snapshot.paramMap.get('id'));
    console.log(acc_id);
    this.getAcceleratorById(acc_id);
  }

  getAcceleratorById(id:number):void
  {
    this.obj.getAcceleratorById(id).subscribe(data=>
      {
        this.accelerators=data;
        console.log(this.accelerators);
      })
  }

  public buttonChanges1() : void {
    this.ishidden=false;
    this.clicked=false;
  }

  public buttonChanges2(id:number) : void {
    this.ishidden=true;
    this.clicked=true;
    this.obj.getAcceleratorById(id).subscribe(data=>
      {
        this.accelerators=data;
        console.log(this.accelerators);
      })
  }

  onSubmit(form:IAcceleretors) : void {
    console.log("form1:",form)
    console.log("hello");
    this.obj.editAccelerator(form).subscribe(data=>
      {
        console.log("form2:",form);
        this.ishidden=true;
        this.clicked=true;
        this.router.navigate(['/updatedetail',form.accId]);
      })
  }


}
