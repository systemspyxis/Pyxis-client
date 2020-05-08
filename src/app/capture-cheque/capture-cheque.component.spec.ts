import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureChequeComponent } from './capture-cheque.component';

describe('CaptureChequeComponent', () => {
  let component: CaptureChequeComponent;
  let fixture: ComponentFixture<CaptureChequeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptureChequeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureChequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
