import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOnboardClientComponent } from './create-onboard-client.component';

describe('CreateOnboardClientComponent', () => {
  let component: CreateOnboardClientComponent;
  let fixture: ComponentFixture<CreateOnboardClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOnboardClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOnboardClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
