import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamRosterViewComponent } from './team-roster-view.component';

describe('TeamRosterViewComponent', () => {
  let component: TeamRosterViewComponent;
  let fixture: ComponentFixture<TeamRosterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamRosterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamRosterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
