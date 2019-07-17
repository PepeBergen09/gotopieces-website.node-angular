import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FjordarCoverComponent } from './fjordar-cover.component';

describe('FjordarCoverComponent', () => {
  let component: FjordarCoverComponent;
  let fixture: ComponentFixture<FjordarCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FjordarCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FjordarCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
