import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInvoicingProcessComponent } from './edit-invoicing-process.component';

describe('EditInvoicingProcessComponent', () => {
  let component: EditInvoicingProcessComponent;
  let fixture: ComponentFixture<EditInvoicingProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInvoicingProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInvoicingProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
