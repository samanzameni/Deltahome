import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http';


@Component({
  selector: 'app-imageupload',
  templateUrl: './imageupload.component.html',
  styleUrls: ['./imageupload.component.scss']
})
export class ImageuploadComponent implements OnInit {
  title = 'ImageUpload';
  fileUploadProgress: string = null;
  previewUrl: any = null;
  fileData: File = null;
  imageArray: string [] = [];
  theAddress = '';
  constructor(private http: HttpClient) { }

  ngOnInit() {


  }

  fileProgress(fileInput) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
  }


  preview() {
    // Show preview
    const mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (event) => {
      this.previewUrl = reader.result;
      this.theAddress = reader.result.toString();
    };
  }

  removeImage(index) {
    this.imageArray.splice(this.imageArray.indexOf((index)), 1);
  }


  onSubmit() {
    if (this.theAddress !== '') {
    if (this.imageArray.length <= 7) {
      this.imageArray.push(this.theAddress);
    const formData = new FormData();
    this.fileUploadProgress = '0%';
    formData.append('image', this.fileData , this.fileData.name);
    this.http.post('url/to/your/api', formData, {
      reportProgress: true,
      observe: 'events'
    })
      .subscribe(events => {
        if (events.type === HttpEventType.UploadProgress) {
          this.fileUploadProgress = Math.round(events.loaded / events.total * 100) + '%';
          console.log(this.fileUploadProgress);
        } else if (events.type === HttpEventType.Response) {
          this.fileUploadProgress = '';
          console.log(events.body);
          alert('SUCCESS !!');
        }

      });
  } else {
    alert('error');
    }
  } else {
      alert('plz select image');
    }
  }
}


