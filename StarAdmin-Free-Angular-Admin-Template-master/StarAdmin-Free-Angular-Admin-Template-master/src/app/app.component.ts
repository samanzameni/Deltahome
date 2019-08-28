import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent   implements OnInit {

   checkLogin = true;

  ngOnInit() {
    const item = localStorage.getItem('access_token');
    if (item == null) {
      this.checkLogin = true;
    } else {
      this.checkLogin = true;
    }
  }
}
