import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnbordingPointsComponent } from './onbording-points.component';

describe('OnbordingPointsComponent', () => {
  let component: OnbordingPointsComponent;
  let fixture: ComponentFixture<OnbordingPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnbordingPointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnbordingPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
