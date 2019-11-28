import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPageCoverComponent } from './section-page-cover.component';

describe('SectionPageCoverComponent', () => {
  let component: SectionPageCoverComponent;
  let fixture: ComponentFixture<SectionPageCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionPageCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionPageCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
