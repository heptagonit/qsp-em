import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvocingProcessComponent } from './invocing-process.component';

describe('InvocingProcessComponent', () => {
  let component: InvocingProcessComponent;
  let fixture: ComponentFixture<InvocingProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvocingProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvocingProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
