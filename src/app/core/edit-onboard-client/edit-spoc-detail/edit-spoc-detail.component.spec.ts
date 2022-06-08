import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSpocDetailComponent } from './edit-spoc-detail.component';

describe('EditSpocDetailComponent', () => {
  let component: EditSpocDetailComponent;
  let fixture: ComponentFixture<EditSpocDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSpocDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSpocDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
