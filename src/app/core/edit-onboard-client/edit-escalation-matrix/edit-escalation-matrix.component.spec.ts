import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEscalationMatrixComponent } from './edit-escalation-matrix.component';

describe('EditEscalationMatrixComponent', () => {
  let component: EditEscalationMatrixComponent;
  let fixture: ComponentFixture<EditEscalationMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEscalationMatrixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEscalationMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
