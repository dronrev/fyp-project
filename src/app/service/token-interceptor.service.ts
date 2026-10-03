import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private inject:Injector) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.inject.get(AuthService).getToken();
    if(!token){
      return next.handle(req);
    }
    const jwttoken = req.clone({
      setHeaders:{
        Authorization: 'Bearer '+ token
      }
    })
    return next.handle(jwttoken);
  }
}
