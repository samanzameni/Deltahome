import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Deposit} from './deposit';
import {Firstdata} from '../Classes/firstdata';



@Injectable({
  providedIn: 'root'
})
export class DepositService {
  token =  localStorage.getItem('access_token');
  constructor(private http: HttpClient) { }
  ServerUrl = 'http://172.16.25.113/api/';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json',
                                      'Authorization': 'Bearer ' + this.token}
      )
  };


  contactForm( formdata: Deposit ) {
    return this.http.post<Deposit>(this.ServerUrl + 'deposit/Add', formdata, this.httpOptions);
  }
  contactForm2() {
    return this.http.get<Firstdata>(this.ServerUrl + 'deposit/index', this.httpOptions);
  }


}

