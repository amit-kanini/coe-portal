import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDashboardMela } from '../Models/IDashboardMela';

@Injectable({
  providedIn: 'root'
})
export class DashboardmelaService {

  private dashboardUrl = 'https://localhost:7153/api/DashboardMela/';
  constructor(private http: HttpClient) { }
  getDashboardMela(): Observable<IDashboardMela[]> {
    return this.http.get<IDashboardMela[]>(this.dashboardUrl +'GetAllDashboards',
      { headers:new HttpHeaders({
           'Content-Type':'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin':'*', 
            'Access-Control-Allow-Method':'*' })
    })            
}
}
