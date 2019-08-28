import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Deposit} from './deposit';


@Injectable({
  providedIn: 'root'
})
export class DepositService {
  ServerUrl = 'http://172.16.25.113/login';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };


  constructor(private http: HttpClient) { }

  contactForm( formdata: Deposit ) {
    return this.http.post<Deposit>(this.ServerUrl + 'deposit', formdata, this.httpOptions);
  }


}

