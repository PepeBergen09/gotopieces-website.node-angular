import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTeamComponent } from './section-team.component';

describe('SectionTeamComponent', () => {
  let component: SectionTeamComponent;
  let fixture: ComponentFixture<SectionTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
