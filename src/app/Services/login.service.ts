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
     signup(c:ICustomer):Observable<any>
     {
          console.log(c)
          return this.http.post(this.url+"Register",c, {
               headers: new HttpHeaders({
                 'Content-Type':'application/json;charset=UTF-8',
                 'Access-Control-Allow-Origin':'*',
                 'Access-Control-Allow-Method':'*',    
                 'Accept': 'text/html, application/xhtml+xml, */*'
           }),responseType:'text'}
           )
     }
}

