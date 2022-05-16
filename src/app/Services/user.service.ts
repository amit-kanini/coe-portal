import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http"; 
import { Injectable } from "@angular/core"; 
import { Observable, throwError } from "rxjs"; 
import {catchError,tap} from 'rxjs/operators'; 
import { IAcceleretors } from "../Models/IAccelerators";
 import { ICustomer } from "../Models/ICustomer";
// import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http"; 
// import { Injectable } from "@angular/core"; 
// import { Observable, throwError } from "rxjs"; 
// import {catchError,tap} from 'rxjs/operators'; 
// import { ICustomer } from "../Models/ICustomer";


@Injectable({ providedIn:'root' }) 
 
export class UserService{ 
     private dashUrl = 'https://localhost:7244/api/access/GetAllUsers';
     private dashUrl1='https://localhost:7244/api/access/'
     private dashUrl2='https://localhost:7244/api/access/EditUser'

     constructor(private http: HttpClient) { }
     
    getUsers(): Observable<ICustomer[]> {
          return this.http.get<ICustomer[]>(this.dashUrl ,
            { headers:new HttpHeaders({
                 'Content-Type':'application/json;charset=UTF-8',
                  'Access-Control-Allow-Origin':'*', 
                  'Access-Control-Allow-Method':'*' })
          })            
     }

     getUserById(custid:number):Observable<ICustomer>
     {
       return this.http.get<ICustomer>(this.dashUrl1+"GetUserById"+"?custid="+custid,{
         headers:new HttpHeaders({
           'Content-Type':'application/json;charset=UTF-8',
           'Access-Control-Allow-Origin':'*',
           'Access-Control-Allow-Method':'*'
         })
       });
     }

     putUser(user:ICustomer):Observable<any>
     {
        {
            return this.http.put(this.dashUrl2,user,{
                headers: new HttpHeaders({
                    'Content-Type':'application/json;charset=UTF-8',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Method':'*',    
                    'Accept': 'text/html, application/xhtml+xml, */*'
              }),responseType:'text'}
              )
        }
   }
    

    deleteUser(id:number):Observable<any>
    {
     return this.http.delete(this.dashUrl1+"DeleteUser"+"?custid="+id,{
        headers: new HttpHeaders({
            'Content-Type':'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Method':'*',    
            'Accept': 'text/html, application/xhtml+xml, */*'
      }),responseType:'text'}
      )
    }
approveUser(id:number):Observable<any>
{
  return this.http.post(this.dashUrl1+"Approval"+"?custid="+id,null,{
    headers: new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*',    
        'Accept': 'text/html, application/xhtml+xml, */*'
  }),responseType:'text'}
  )
}
getUserInterest(id:number):Observable<any>
{
  return this.http.get(this.dashUrl1+"GetUserInterest?custid="+id,{
    headers:new HttpHeaders({
      'Content-Type':'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Method':'*'
    })
  })
}
addUserInterest(list:Number[],id:Number):Observable<any>
{
  return this.http.post(this.dashUrl1+"AddUserInterest?custid="+id,list,{
    headers:new HttpHeaders({
      'Content-Type':'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Method':'*',
      'Accept': 'text/html, application/xhtml+xml, */*'
    }),responseType:'text'
  })
}
}
