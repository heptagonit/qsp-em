import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardClientListComponent } from './onboard-client-list.component';

describe('OnboardClientListComponent', () => {
  let component: OnboardClientListComponent;
  let fixture: ComponentFixture<OnboardClientListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardClientListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardClientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
