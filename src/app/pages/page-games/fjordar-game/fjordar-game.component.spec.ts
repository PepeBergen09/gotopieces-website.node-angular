import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FjordarGameComponent } from './fjordar-game.component';

describe('FjordarGameComponent', () => {
  let component: FjordarGameComponent;
  let fixture: ComponentFixture<FjordarGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FjordarGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FjordarGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
