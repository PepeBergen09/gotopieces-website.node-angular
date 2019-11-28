import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHomeCoverComponent } from './section-home-cover.component';

describe('SectionHomeCoverComponent', () => {
  let component: SectionHomeCoverComponent;
  let fixture: ComponentFixture<SectionHomeCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionHomeCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionHomeCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
