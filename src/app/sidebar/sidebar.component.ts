import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router: Router) {
    route.params.subscribe(val => {
      const headerurl=this.route.snapshot.paramMap.get('urlprm')
    if(headerurl=='dash')
    {
    this.dashboard='yes'
    this.report=''
    this.accelerator=''
    this.dashboardDetail=''
    }
    else if(headerurl=='acc')
    {
      this.dashboard=''
      this.report=''
      this.accelerator='yes'
      this.dashboardDetail=''
    }
    else if(headerurl=='report')
    {
      this.dashboard=''
      this.report='yes'
      this.accelerator=''
      this.dashboardDetail=''
    }
    else if(headerurl=='dashboardDetail')
    {
      this.dashboard=''
      this.report=''
      this.accelerator=''
      this.dashboardDetail='yes'
      console.log(localStorage.getItem('acc'))
    }
    });
   }
  dashboard='yes'
  report=''
  accelerator=''
  dashboardDetail=''
  ngOnInit(): void {
    
  }
  button(val:string):void
  {
    if(val=='dash')
    {
    this.router.navigate(['main/dash'])
    }
    else if(val=='acc')
    {
      this.router.navigate(['main/acc'])
    }
    else if(val=='report')
    {
      this.router.navigate(['main/report'])
    }
  }

}
