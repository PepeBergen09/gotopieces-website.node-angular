import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FjordarInfoComponent } from './fjordar-info.component';

describe('FjordarInfoComponent', () => {
  let component: FjordarInfoComponent;
  let fixture: ComponentFixture<FjordarInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FjordarInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FjordarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
