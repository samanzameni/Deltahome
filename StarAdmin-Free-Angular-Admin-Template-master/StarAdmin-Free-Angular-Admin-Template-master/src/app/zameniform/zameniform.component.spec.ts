import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZameniformComponent } from './zameniform.component';

describe('ZameniformComponent', () => {
  let component: ZameniformComponent;
  let fixture: ComponentFixture<ZameniformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZameniformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZameniformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
