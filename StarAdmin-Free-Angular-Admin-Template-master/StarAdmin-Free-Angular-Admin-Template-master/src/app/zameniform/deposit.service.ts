import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Deposit} from './deposit';


@Injectable({
  providedIn: 'root'
})
export class DepositService {


  constructor(private http: HttpClient) { }
  ServerUrl = 'http://172.16.25.113/login';
  public getToken(): string {
    return localStorage.getItem('access_token');
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}
      )
  };


  contactForm( formdata: Deposit ) {
    return this.http.post<Deposit>(this.ServerUrl + 'deposit', formdata, this.httpOptions);
  }
  contactForm2() {
    return this.http.get(this.ServerUrl + 'deposit', this.httpOptions);
  }


}

