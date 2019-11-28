import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFjordarCoverComponent } from './section-fjordar-cover.component';

describe('SectionFjordarCoverComponent', () => {
  let component: SectionFjordarCoverComponent;
  let fixture: ComponentFixture<SectionFjordarCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionFjordarCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFjordarCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
