import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComingsoonComponent } from './main-comingsoon.component';

describe('MainComingsoonComponent', () => {
  let component: MainComingsoonComponent;
  let fixture: ComponentFixture<MainComingsoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComingsoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComingsoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
