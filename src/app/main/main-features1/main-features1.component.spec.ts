import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFeatures1Component } from './main-features1.component';

describe('MainFeatures1Component', () => {
  let component: MainFeatures1Component;
  let fixture: ComponentFixture<MainFeatures1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainFeatures1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFeatures1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
