import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBeginingComponent } from './the-begining.component';

describe('TheBeginingComponent', () => {
  let component: TheBeginingComponent;
  let fixture: ComponentFixture<TheBeginingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheBeginingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheBeginingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
