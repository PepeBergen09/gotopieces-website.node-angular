import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFeatures3Component } from './main-features3.component';

describe('MainFeatures3Component', () => {
  let component: MainFeatures3Component;
  let fixture: ComponentFixture<MainFeatures3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainFeatures3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFeatures3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
