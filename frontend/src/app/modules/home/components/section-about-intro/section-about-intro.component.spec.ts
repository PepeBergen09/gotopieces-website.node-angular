import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAboutIntroComponent } from './section-about-intro.component';

describe('SectionAboutIntroComponent', () => {
  let component: SectionAboutIntroComponent;
  let fixture: ComponentFixture<SectionAboutIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionAboutIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionAboutIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
