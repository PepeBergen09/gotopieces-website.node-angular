import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFjordarInfoComponent } from './section-fjordar-info.component';

describe('SectionFjordarInfoComponent', () => {
  let component: SectionFjordarInfoComponent;
  let fixture: ComponentFixture<SectionFjordarInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionFjordarInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFjordarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
