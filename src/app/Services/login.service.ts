import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http"; 
import { Injectable } from "@angular/core"; 
import { Observable, throwError } from "rxjs"; 
import {catchError,tap} from 'rxjs/operators'; 
import { ICustomer } from "../Models/ICustomer";

@Injectable({ providedIn:'root' }) 
 
export class LoginServService{ 
     private loginUrl = 'https://localhost:44383/api/Login/';

     constructor(private http: HttpClient) { }
     
     loginMethod(tempPhone:string, tempPass:string): Observable<ICustomer> {
          return this.http.post<ICustomer>(this.loginUrl  + "?tempPhone=" + tempPhone + "&tempPass=" + tempPass,
            { headers:new HttpHeaders({
                 'Content-Type':'application/json;charset=UTF-8',
                  'Access-Control-Allow-Origin':'*', 
                  'Access-Control-Allow-Method':'*' })
          })            
     }
}

