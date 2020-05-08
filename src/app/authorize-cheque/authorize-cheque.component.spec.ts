import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizeChequeComponent } from './authorize-cheque.component';

describe('AuthorizeChequeComponent', () => {
  let component: AuthorizeChequeComponent;
  let fixture: ComponentFixture<AuthorizeChequeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizeChequeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizeChequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
