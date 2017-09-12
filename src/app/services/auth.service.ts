//curl -D- -u fred:fred -X GET -H "Content-Type: application/json" http://kelpie9:8081/rest/api/2/issue/createmeta
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { LogIn } from '../models/login';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {

  }
  logIn(cred: LogIn) {
    const headers = new HttpHeaders();
    headers.append('Authorization', 'Basic ' + btoa(cred.userName + ':' + cred.password));
    headers.append('Content-Type', 'application/json');
    //'Keroles55'
    this.http.get(cred.baseUrl, { headers: headers }).subscribe(data => {
      this.router.navigate(['/home']);
    }, error => {
      console.log('errororororororor');
      console.log(error);
    });
  }
};
