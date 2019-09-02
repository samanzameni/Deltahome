import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor(private http: HttpClient) { }
  DisplayName = '';

  ngOnInit() {
    this.DisplayName = localStorage.getItem('DisplayName');
  }
  logout() {
    const token =  localStorage.getItem('access_token');
   // localStorage.removeItem('access_token');
    let myheader = new HttpHeaders();
    myheader = myheader.set('Content-Type', 'application/json; charset=utf-8');
    myheader = myheader.set('Authorization', token );

   // console.log(myheader);
    return this.http.get('http://172.16.25.113/api/Account/logout', { headers: myheader, withCredentials: true }).subscribe(
      (res) => {
        console.log(res); },
      (err) => {
      console.log(err);
    }

      );
    location.reload();
  }

}
