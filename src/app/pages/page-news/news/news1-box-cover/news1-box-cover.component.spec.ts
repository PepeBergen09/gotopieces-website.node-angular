import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { News1BoxCoverComponent } from './news1-box-cover.component';

describe('News1BoxCoverComponent', () => {
  let component: News1BoxCoverComponent;
  let fixture: ComponentFixture<News1BoxCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ News1BoxCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(News1BoxCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
