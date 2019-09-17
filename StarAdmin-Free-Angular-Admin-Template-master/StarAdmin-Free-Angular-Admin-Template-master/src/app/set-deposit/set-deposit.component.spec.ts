import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDepositComponent } from './set-deposit.component';

describe('SetDepositComponent', () => {
  let component: SetDepositComponent;
  let fixture: ComponentFixture<SetDepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetDepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
