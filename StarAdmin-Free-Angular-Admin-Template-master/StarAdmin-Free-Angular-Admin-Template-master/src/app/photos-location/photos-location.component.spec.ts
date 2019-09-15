import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosLocationComponent } from './photos-location.component';

describe('PhotosLocationComponent', () => {
  let component: PhotosLocationComponent;
  let fixture: ComponentFixture<PhotosLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
