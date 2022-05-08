import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardClientSearchComponent } from './onboard-client-search.component';

describe('OnboardClientSearchComponent', () => {
  let component: OnboardClientSearchComponent;
  let fixture: ComponentFixture<OnboardClientSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardClientSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardClientSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
