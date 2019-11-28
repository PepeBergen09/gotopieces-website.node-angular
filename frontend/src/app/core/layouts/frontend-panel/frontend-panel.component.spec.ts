import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendPanelComponent } from './frontend-panel.component';

describe('FrontendPanelComponent', () => {
  let component: FrontendPanelComponent;
  let fixture: ComponentFixture<FrontendPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontendPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontendPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
