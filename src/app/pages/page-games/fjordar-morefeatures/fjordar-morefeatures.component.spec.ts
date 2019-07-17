import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FjordarMorefeaturesComponent } from './fjordar-morefeatures.component';

describe('FjordarMorefeaturesComponent', () => {
  let component: FjordarMorefeaturesComponent;
  let fixture: ComponentFixture<FjordarMorefeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FjordarMorefeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FjordarMorefeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
