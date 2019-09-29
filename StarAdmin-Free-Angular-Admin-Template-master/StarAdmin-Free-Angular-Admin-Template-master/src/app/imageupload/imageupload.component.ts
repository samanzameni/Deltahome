import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-imageupload',
  templateUrl: './imageupload.component.html',
  styleUrls: ['./imageupload.component.scss']
})
export class ImageuploadComponent implements OnInit {
  constructor(private http: HttpClient, private toastrService: ToastrService) { }
  title = 'ImageUpload';
  fileUploadProgress: string = null;
  previewUrl: any = null;
  fileData: File = null;
  imageArray: string [] = [];
  PathImageArray: string [] = [];
  theAddress = '';

  // EventEmitter for array.
  @Output() imageEvent = new EventEmitter<string[]>();
  @Output() selectedEvent = new EventEmitter<string>();
  @Input() depositImgEdit: string[] = [];
   public selectedIndex: string ;
  ImageMessage() {
    this.imageEvent.emit(this.PathImageArray);
    this.selectedEvent.emit(this.selectedIndex);
    this.onSubmit();
  }
  ngOnInit() {
    this.imageArray = this.depositImgEdit;
    console.log(this.imageArray);

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
    if (this.selectedIndex === index) {
      this.selectedIndex = '';
    }
  }
  selectImageMain(index: string) {
    this.selectedIndex = index;
  }

  onSubmit() {
    if (this.theAddress !== '') {
    if (this.imageArray.length <= 7 ) {
      if (this.imageArray.indexOf(this.theAddress) < 0) {
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
      .subscribe(
        events => {
        if (events.type === HttpEventType.UploadProgress) {
          this.fileUploadProgress = Math.round(events.loaded / events.total * 100) + '%';
          console.log(this.fileUploadProgress);
        } else if (events.type === HttpEventType.Response) {
          this.fileUploadProgress = '';
          this.toastrService.success('Image Uploaded successfully.', '', {timeOut: 4000});
          const obj: string = JSON.stringify(events.body);
         const returnAddressImage: string = obj.split(':')[1].split('}')[0].split('"')[1].split('"')[0];
          this.PathImageArray.push(returnAddressImage);
          console.log(this.PathImageArray);
        }
      }
      );
  } else {
        this.toastrService.error('This is a duplicate photo.', '', {timeOut: 4000});
    }
    } else {
      this.toastrService.error('You can attach 8 photo for each listing.', '', {timeOut: 4000});
    }
  } else {
      this.toastrService.error('Please select a photo.', '', {timeOut: 4000});
    }
  }


}

