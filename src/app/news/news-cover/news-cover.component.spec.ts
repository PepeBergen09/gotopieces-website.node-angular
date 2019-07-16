import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCoverComponent } from './news-cover.component';

describe('NewsCoverComponent', () => {
  let component: NewsCoverComponent;
  let fixture: ComponentFixture<NewsCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
