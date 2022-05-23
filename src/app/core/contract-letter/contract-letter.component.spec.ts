import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractLetterComponent } from './contract-letter.component';

describe('ContractLetterComponent', () => {
  let component: ContractLetterComponent;
  let fixture: ComponentFixture<ContractLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractLetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
