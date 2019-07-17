import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FjordarFeaturesComponent } from './fjordar-features.component';

describe('FjordarFeaturesComponent', () => {
  let component: FjordarFeaturesComponent;
  let fixture: ComponentFixture<FjordarFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FjordarFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FjordarFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
