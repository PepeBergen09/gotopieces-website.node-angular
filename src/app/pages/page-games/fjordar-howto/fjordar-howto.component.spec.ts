import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FjordarHowtoComponent } from './fjordar-howto.component';

describe('FjordarHowtoComponent', () => {
  let component: FjordarHowtoComponent;
  let fixture: ComponentFixture<FjordarHowtoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FjordarHowtoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FjordarHowtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
