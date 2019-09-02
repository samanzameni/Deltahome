import { Component, OnInit } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders, } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  password = '';
  username = '';

  constructor(private toastrService: ToastrService, private http: HttpClient, public router: Router) { }
  ngOnInit() {
  }
  passwordChange($event) {
    this.password = $event.target.value;
  }
  usernameChange($event) {
    this.username = $event.target.value;
  }
  userLogin() {
    if (this.password !== '' || this.username !== '') {

      const data = new HttpParams().set('grant_type', 'password').set('username', this.username).set('password', this.password);
      let header = new HttpHeaders();
       header = header.set('Content-Type', 'application/x-www-form-urlencoded');
      return this.http.post('http://172.16.25.113/login', data, {headers: header}).subscribe(
          (res) => {
            console.log(res);
            localStorage.setItem('access_token', res.access_token);
             localStorage.setItem('refresh_token', res.refresh_token);
            const decoded = jwt_decode(res.access_token);
            localStorage.setItem('DisplayName', decoded.DisplayName);
             // location.reload();
            // return this.router.navigate(['/Index']);
          },
          err => {
            console.log(err);
            this.toastrService.error('Invalid Username or Password.', '', {timeOut: 4000});
          }
        );
    } else {
      this.toastrService.error('Please Insert Username or Password.', '', {timeOut: 4000});
    }
  }
  }






