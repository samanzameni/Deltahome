import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders} from '@angular/common/http';

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
  PathImageArray: any [] = [];
  theAddress = '';

  @Output() imageEvent = new EventEmitter<any>();
  ImageMessage() {
    this.imageEvent.emit(this.PathImageArray);
    this.onSubmit();
  }
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
    reader.onload = () => {
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
    this.http.post('http://172.16.25.113/api/File/uploadimage', formData, {
      reportProgress: true,
      observe: 'events',
      headers: new HttpHeaders(
        {'accept': 'application/json'})
    })
      .subscribe(events => {

        if (events.type === HttpEventType.UploadProgress) {
          this.fileUploadProgress = Math.round(events.loaded / events.total * 100) + '%';
          console.log(this.fileUploadProgress);
        } else if (events.type === HttpEventType.Response) {
          this.fileUploadProgress = '';
          console.log(events.body);
          alert('SUCCESS !!');
          this.PathImageArray.push(events.body); console.log(this.PathImageArray);
        }
      }
      );
  } else {
    alert('error');
    }
  } else {
      alert('plz select image');
    }
  }



}
