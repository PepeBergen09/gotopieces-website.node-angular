import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFjordarFeaturesComponent } from './main-fjordar-features.component';

describe('MainFjordarFeaturesComponent', () => {
  let component: MainFjordarFeaturesComponent;
  let fixture: ComponentFixture<MainFjordarFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainFjordarFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFjordarFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
