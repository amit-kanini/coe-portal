import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http"; 
import { Injectable } from "@angular/core"; 
import { Observable, throwError } from "rxjs"; 
import {catchError,tap} from 'rxjs/operators'; 
import { ICustomer } from "../Models/ICustomer";

@Injectable({ providedIn:'root' }) 
 
export class LoginServService{ 
     private url = 'https://localhost:7244/api/access/';

     constructor(private http: HttpClient) { }
     
     loginMethod(tempPhone:string, tempPass:string): Observable<ICustomer> {
          return this.http.post<ICustomer>(this.url  + "Login?tempEmail=" + tempPhone + "&tempPass=" + tempPass,
            { headers:new HttpHeaders({
                 'Content-Type':'application/json;charset=UTF-8',
                  'Access-Control-Allow-Origin':'*', 
                  'Access-Control-Allow-Method':'*' })
          })            
     }

     signup( 
          firstName: string,
          lastName: string,
          phoneNumber: string,
          email: string,
          password: string,
          isAdmin: boolean
     ): Observable<any> {
          return this.http.post<any>(this.url + "Register",
          {
               firstName: firstName,
               lastName: lastName,
               phoneNumber: phoneNumber,
               email: email,
               password: password,
               isAdmin: isAdmin,
               status: "Pending"
            
          })            
     }
}

