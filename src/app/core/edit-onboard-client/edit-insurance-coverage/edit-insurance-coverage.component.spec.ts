import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInsuranceCoverageComponent } from './edit-insurance-coverage.component';

describe('EditInsuranceCoverageComponent', () => {
  let component: EditInsuranceCoverageComponent;
  let fixture: ComponentFixture<EditInsuranceCoverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInsuranceCoverageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInsuranceCoverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
