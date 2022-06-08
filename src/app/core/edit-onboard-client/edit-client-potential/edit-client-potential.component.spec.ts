import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClientPotentialComponent } from './edit-client-potential.component';

describe('EditClientPotentialComponent', () => {
  let component: EditClientPotentialComponent;
  let fixture: ComponentFixture<EditClientPotentialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditClientPotentialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClientPotentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
