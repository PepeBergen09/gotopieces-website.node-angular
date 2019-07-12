import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCoversliderComponent } from './section-coverslider.component';

describe('SectionCoversliderComponent', () => {
  let component: SectionCoversliderComponent;
  let fixture: ComponentFixture<SectionCoversliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionCoversliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCoversliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
