import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFjordarComponent } from './page-fjordar.component';

describe('PageFjordarComponent', () => {
  let component: PageFjordarComponent;
  let fixture: ComponentFixture<PageFjordarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFjordarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFjordarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
