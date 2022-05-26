import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DashboardService } from '../Services/dashboard.service';
import { IAcceleretors } from '../Models/IAccelerators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-accelerator-details',
  templateUrl: './accelerator-details.component.html',
  styleUrls: ['./accelerator-details.component.css']
})
export class AcceleratorDetailsComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    isExpanded=true
    isExpandeds=false
    accelerators: IAcceleretors[] = [];
    b:null|Number=0
    accelerator:IAcceleretors={
      accId:0,
      accDescr:'',
      accName:'',
      accDoc:'',
      accImg:'',
      accUrl:'',
      accVideo:'',
      accHowIt:'',
      accLogo:'',
      accNumberOfDays:''
    }
  constructor(private breakpointObserver: BreakpointObserver,private obj1:DashboardService,private router: Router,private route:ActivatedRoute) {
    route.params.subscribe(val => {
     const b= this.route.snapshot.paramMap.get('id')
     this.b=Number(b)
     console.log(b)
     this.obj1.getAcceleratorById(Number(b)).subscribe(data=>
      {
        this.accelerator=data;
        console.log(data)
      })
    })
  }
  ngOnInit(): void {
    this.obj1.getAccelerators().subscribe((data)=>this.accelerators=data);
  }
}
