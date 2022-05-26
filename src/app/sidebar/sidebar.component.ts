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
    this.dashboards=''
    this.report=''
    this.accelerator=''
    this.dashboardDetail=''
    }
    else if(headerurl=='acc')
    {
      this.dashboard=''
      this.report=''
      this.dashboards=''
      this.accelerator='yes'
      this.dashboardDetail=''
    }
    else if(headerurl=='report')
    {
      this.dashboard=''
      this.report='yes'
      this.dashboards=''
      this.accelerator=''
      this.dashboardDetail=''
    }
    else if(headerurl=='dashboardDetail')
    {
      this.dashboard=''
      this.report=''
      this.accelerator=''
      this.dashboards=''
      this.dashboardDetail='yes'
      console.log(localStorage.getItem('acc'))
    }
    else if(headerurl=='dashboards')
    {
      this.dashboard=''
      this.report=''
      this.dashboards='yes'
      this.accelerator=''
      this.dashboardDetail=''
    }
    });
   }
  dashboard='yes'
  dashboards=''
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
    else if(val=='dashboards')
    {
      this.router.navigate(['main/dashboards'])
    }
  }

}
