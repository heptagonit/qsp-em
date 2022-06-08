import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContractLetterComponent } from './edit-contract-letter.component';

describe('EditContractLetterComponent', () => {
  let component: EditContractLetterComponent;
  let fixture: ComponentFixture<EditContractLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditContractLetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditContractLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
