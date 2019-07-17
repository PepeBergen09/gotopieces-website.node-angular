import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ukgames2019Component } from './ukgames2019.component';

describe('Ukgames2019Component', () => {
  let component: Ukgames2019Component;
  let fixture: ComponentFixture<Ukgames2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ukgames2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ukgames2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
