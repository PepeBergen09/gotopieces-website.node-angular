import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialNewslettersComponent } from './partial-newsletters.component';

describe('PartialNewslettersComponent', () => {
  let component: PartialNewslettersComponent;
  let fixture: ComponentFixture<PartialNewslettersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartialNewslettersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartialNewslettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
