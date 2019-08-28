import { Component, OnInit } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders, } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  password = '';
  username = '';

  constructor(private toastrService: ToastrService, private http: HttpClient) { }


  ngOnInit() {
  }

  passwordChange($event) {
    this.password = $event.target.value;
  }
  usernameChange($event) {
    this.username = $event.target.value;
  }


  userLogin() {
    this.toastrService.error('Error: User with this ID doesnt exists', 'Notification', {timeOut : 400000 });
    const urlSearchParams = new HttpParams();
    urlSearchParams.append('username', 'admin@example.com');
    urlSearchParams.append('password', 'Admin@123456');
    urlSearchParams.append('grant_type', 'password');
    const body = urlSearchParams.toString();

    const header = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');
    return this
      .http
      // tslint:disable-next-line:max-line-length
      .post('http://172.16.25.113/login', 'grant_type=password&username=' + this.username + '&password=' + this.password, { headers: header } ).subscribe(
        (res) => {
          console.log(res);

         // localStorage.setItem('access_token', res.access_token);
        //  localStorage.setItem('refresh_token', res.refresh_token);

        },
        err => console.log(err)
      );
  }


  }






