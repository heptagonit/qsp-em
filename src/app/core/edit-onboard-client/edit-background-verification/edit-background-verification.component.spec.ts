import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBackgroundVerificationComponent } from './edit-background-verification.component';

describe('EditBackgroundVerificationComponent', () => {
  let component: EditBackgroundVerificationComponent;
  let fixture: ComponentFixture<EditBackgroundVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBackgroundVerificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBackgroundVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
