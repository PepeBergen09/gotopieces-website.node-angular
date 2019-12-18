import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { News3EssenComponent } from './news3-essen.component';

describe('News3EssenComponent', () => {
  let component: News3EssenComponent;
  let fixture: ComponentFixture<News3EssenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ News3EssenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(News3EssenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
