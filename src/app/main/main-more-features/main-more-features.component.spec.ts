import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMoreFeaturesComponent } from './main-more-features.component';

describe('MainMoreFeaturesComponent', () => {
  let component: MainMoreFeaturesComponent;
  let fixture: ComponentFixture<MainMoreFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMoreFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMoreFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
