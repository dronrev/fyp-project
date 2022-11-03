import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs";
export interface TheUser {
  username : string,
  password : string
}

@Injectable({
  providedIn : "root"
})
export class LoggingService{
  constructor(private http:HttpClient){ }

  logStatusChange(status: string){
    console.log()
  }

  login(username: string, password : string){
    return this.http.post<TheUser>('http://localhost/fyp-project/login-system.php',
    {
      username : username,
      password : password
    }).pipe(map(TheUser=>{

    }));
  }

  onSendData(form:FormData):Observable<any>{
    return this.http.post<any>('http://localhost/fyp-project/login-system.php',form)
  }
}
