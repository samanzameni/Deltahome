import { Component, OnInit } from '@angular/core';
import {ImageService} from './image.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-imageupload',
  templateUrl: './imageupload.component.html',
  styleUrls: ['./imageupload.component.scss']
})
export class ImageuploadComponent implements OnInit {

  title = 'helloworld';

  fileData = null;
  constructor(private http: HttpClient) { }

  ngOnInit() {


  }

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.fileData);
    this.http.post('url/to/your/api', formData)
      .subscribe(res => {
        console.log(res);
        alert('SUCCESS !!');
      });
  }

}

