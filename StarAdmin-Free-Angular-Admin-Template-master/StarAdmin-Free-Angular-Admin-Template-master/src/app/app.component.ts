import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent   implements OnInit {
   checkLogin = false;
  ngOnInit() {
    const item = localStorage.getItem('access_token');
    if (item == null) {
      this.checkLogin = false;
    } else {
      this.checkLogin = true;
    }
  }
}
