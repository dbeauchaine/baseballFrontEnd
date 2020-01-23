import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamDetailComponent } from './team-detail.component';
import { MatCardModule } from '@angular/material';
import { LabelValueComponent } from '../label-value/label-value.component';
import { Team } from '../team';

describe('TeamDetailComponent', () => {
  let component: TeamDetailComponent;
  let fixture: ComponentFixture<TeamDetailComponent>;
  let fakeTeam = createFakeTeam();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        MatCardModule,

      ],
      declarations: [ 
        TeamDetailComponent,
        LabelValueComponent 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamDetailComponent);
    component = fixture.componentInstance;
    component.team = fakeTeam;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  function createFakeTeam(): Team {
    const team = new Team();
    team.teamId = 'id';
    team.divId ='divId';
    team.lgId = 'lgId';
    team.park = 'park';
    team.h = 20;
    team.hr = 2;
    team.avg = .242;
    team.era = 3.21;
    return team;
  }
});
