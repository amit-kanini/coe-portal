import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDashboardMela } from '../Models/IDashboardMela';
import { DashboardmelaService } from '../Services/dashboardmela.service';

@Component({
  selector: 'app-dashboard-mela-details',
  templateUrl: './dashboard-mela-details.component.html',
  styleUrls: ['./dashboard-mela-details.component.css']
})
export class DashboardMelaDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private obj:DashboardmelaService) { }
  dashboardmela:IDashboardMela[]=[]
  dashval:any=''
  ngOnInit(): void {
    const headerurl=this.route.snapshot.paramMap.get('id')
    console.log(headerurl)
    this.dashval=headerurl
    this.obj.getDashboardMela().subscribe(data=>
      {
        this.dashboardmela=data
      })
  }

}
