import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCoverfjordarComponent } from './section-coverfjordar.component';

describe('SectionCoverfjordarComponent', () => {
  let component: SectionCoverfjordarComponent;
  let fixture: ComponentFixture<SectionCoverfjordarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionCoverfjordarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCoverfjordarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
