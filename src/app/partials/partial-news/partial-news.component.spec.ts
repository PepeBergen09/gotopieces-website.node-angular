import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialNewsComponent } from './partial-news.component';

describe('PartialNewsComponent', () => {
  let component: PartialNewsComponent;
  let fixture: ComponentFixture<PartialNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartialNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartialNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
