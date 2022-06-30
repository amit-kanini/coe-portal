import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardmelaService } from '../Services/dashboardmela.service';

@Component({
  selector: 'app-dashboards-mela',
  templateUrl: './dashboards-mela.component.html',
  styleUrls: ['./dashboards-mela.component.css']
})
export class DashboardsMelaComponent implements OnInit {

  dashunique:any
  constructor(private router: Router,private obj:DashboardmelaService) { }

  ngOnInit(): void {
    this.obj.getDashboardMela().subscribe(data=>
      {
        console.log(data)
        const key = 'dashType';
        this.dashunique= [...new Map(data.map(item =>
          [item[key], item])).values()];
         console.log(this.dashunique)
      })

  }

}
