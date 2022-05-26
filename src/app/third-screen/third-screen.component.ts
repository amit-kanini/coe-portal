import { Component, OnInit } from '@angular/core';
import {    ChartsModule, Color  } from 'ng2-charts';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-third-screen',
  templateUrl: './third-screen.component.html',
  styleUrls: ['./third-screen.component.css']
})
export class ThirdScreenComponent implements OnInit {
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Acc1', 'Acc2', 'Acc3', 'Acc4', 'Acc5', 'Acc16','Acc7','Acc8','Acc9','Acc10'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
 
  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46, 33,15,20,35], label: 'Accelerators' }
  ];

  public barChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgb(159, 194, 102)',
    },
  ];
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40,60,55,45], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (ChartOptions & {  }) = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgb(205, 154, 87)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType :any= 'line';
  public lineChartPlugins = [];
  constructor() { }

  ngOnInit(): void {
  }

}
