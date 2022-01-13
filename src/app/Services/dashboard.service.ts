import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http"; 
import { Injectable } from "@angular/core"; 
import { Observable, throwError } from "rxjs"; 
import {catchError,tap} from 'rxjs/operators'; 
import { IAcceleretors } from "../Models/IAccelerators";


@Injectable({ providedIn:'root' }) 
 
export class DashboardService{ 
     private dashUrl = 'https://localhost:7119/api/Dashboard/GetAllAccelerators';

     constructor(private http: HttpClient) { }
     
    getAccelerators(): Observable<IAcceleretors[]> {
          return this.http.get<IAcceleretors[]>(this.dashUrl ,
            { headers:new HttpHeaders({
                 'Content-Type':'application/json;charset=UTF-8',
                  'Access-Control-Allow-Origin':'*', 
                  'Access-Control-Allow-Method':'*' })
          })            
     }
}
