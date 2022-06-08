import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAboutClientComponent } from './edit-about-client.component';

describe('EditAboutClientComponent', () => {
  let component: EditAboutClientComponent;
  let fixture: ComponentFixture<EditAboutClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAboutClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAboutClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
