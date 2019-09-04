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
      localStorage.removeItem('access_token');
    let myheader = new HttpHeaders();
    // myheader = myheader.set('Content-Type', 'application/json; charset=utf-8');
    myheader = myheader.set('Authorization', 'Bearer ' + token);


    return this.http.get('api/Account/logout', { headers: myheader, withCredentials: true }).subscribe(
      (res) => {
        console.log(res); location.reload(); },
      (err) => {
      console.log(err);
        if (err.status === 401) {
          location.reload();
        }
    }

      );

  }

}
