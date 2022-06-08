import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOnboardingPointsComponent } from './edit-onboarding-points.component';

describe('EditOnboardingPointsComponent', () => {
  let component: EditOnboardingPointsComponent;
  let fixture: ComponentFixture<EditOnboardingPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOnboardingPointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOnboardingPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
