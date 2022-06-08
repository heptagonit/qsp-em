import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditImportantNotesComponent } from './edit-important-notes.component';

describe('EditImportantNotesComponent', () => {
  let component: EditImportantNotesComponent;
  let fixture: ComponentFixture<EditImportantNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditImportantNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditImportantNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
