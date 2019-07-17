import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FjordarComingsoonComponent } from './fjordar-comingsoon.component';

describe('FjordarComingsoonComponent', () => {
  let component: FjordarComingsoonComponent;
  let fixture: ComponentFixture<FjordarComingsoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FjordarComingsoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FjordarComingsoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
