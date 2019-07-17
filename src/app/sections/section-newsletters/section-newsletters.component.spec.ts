import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionNewslettersComponent } from './section-newsletters.component';

describe('SectionNewslettersComponent', () => {
  let component: SectionNewslettersComponent;
  let fixture: ComponentFixture<SectionNewslettersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionNewslettersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionNewslettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
