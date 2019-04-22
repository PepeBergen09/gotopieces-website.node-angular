import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFeatures2Component } from './main-features2.component';

describe('MainFeatures2Component', () => {
  let component: MainFeatures2Component;
  let fixture: ComponentFixture<MainFeatures2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainFeatures2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFeatures2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
