import { Component, OnInit } from '@angular/core';
import {DepositList} from './deposit-list';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Depositcount} from './depositcount';
import {SearchBase} from '../Classes/searchbase';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})


export class PropertyListComponent implements OnInit {



  constructor(private http: HttpClient) {

  }
  depositList: DepositList[];
  depositCount = new Depositcount();
  searchBase: SearchBase[];

  ServerUrl = 'http://172.16.25.113/api/';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json',
       // 'Authorization': 'Bearer ' + this.token
    }
    )
  };

  getlistdeposit(pagenumber) {
    return this.http.get<DepositList[]>(this.ServerUrl + 'deposit/list?pagenumber=' + pagenumber, this.httpOptions).subscribe(
      (data) => {
        this.depositList = data;
       console.log(this.depositList);
      },
      (err) => console.log(err)
    );
  }

  getCountDeposit() {
    return this.http.get<Depositcount>(this.ServerUrl + 'deposit/count', this.httpOptions).subscribe(
      (data) => {
        this.depositCount = data;
        console.log(this.depositCount);
      },
      (err) => console.log(err)
    );
  }


  getSearchBase() {
    return this.http.get<SearchBase[]>(this.ServerUrl + 'deposit/searchbase', this.httpOptions).subscribe(
      (data) => {
        this.searchBase = data;
        console.log(this.searchBase);
      },
      (err) => console.log(err)
    );
  }


  onPageChange(event) {
    this.getlistdeposit(event);
    console.log(event);
  }

  ngOnInit() {
    this.getCountDeposit();
    this.getlistdeposit(1);
    this.getSearchBase();
  }

}
