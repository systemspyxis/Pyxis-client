import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportChequeComponent } from './export-cheque.component';

describe('ExportChequeComponent', () => {
  let component: ExportChequeComponent;
  let fixture: ComponentFixture<ExportChequeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportChequeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportChequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
