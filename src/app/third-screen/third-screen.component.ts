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
  barChartLabels: Label[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes','A','B','C','D'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
 
  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46, 33,15,20,35], label: 'Best Fruits' }
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
      backgroundColor: 'rgb(65, 207, 86)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType :any= 'line';
  public lineChartPlugins = [];
  constructor() { }

  ngOnInit(): void {
  }

}