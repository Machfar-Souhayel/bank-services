import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankServicesHomeComponent } from './bank-services-home.component';

describe('BankServicesHomeComponent', () => {
  let component: BankServicesHomeComponent;
  let fixture: ComponentFixture<BankServicesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankServicesHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankServicesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
