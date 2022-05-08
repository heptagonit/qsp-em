import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DueCalendarComponent } from './due-calendar.component';

describe('DueCalendarComponent', () => {
  let component: DueCalendarComponent;
  let fixture: ComponentFixture<DueCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DueCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DueCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
