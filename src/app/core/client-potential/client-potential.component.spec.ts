import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPotentialComponent } from './client-potential.component';

describe('ClientPotentialComponent', () => {
  let component: ClientPotentialComponent;
  let fixture: ComponentFixture<ClientPotentialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientPotentialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPotentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
