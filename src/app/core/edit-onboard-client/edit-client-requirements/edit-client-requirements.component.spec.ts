import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClientRequirementsComponent } from './edit-client-requirements.component';

describe('EditClientRequirementsComponent', () => {
  let component: EditClientRequirementsComponent;
  let fixture: ComponentFixture<EditClientRequirementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditClientRequirementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClientRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
