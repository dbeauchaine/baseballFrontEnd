import { async, ComponentFixture, TestBed, flush, fakeAsync } from '@angular/core/testing';
import { TeamStatsComponent } from './team-stats.component';
import { Component, Input } from '@angular/core';
import { MatCardModule, MatExpansionModule, MatTabsModule } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from '../team';
import { TeamService } from '../team.service';
import { of } from 'rxjs';
import { Title, By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ColumnConfig } from '../columnConfig';
import { TableChecker, FakeDataGenerator } from '../test-helpers';

describe('TeamStatsComponent', () => {
  let component: TeamStatsComponent;
  let fixture: ComponentFixture<TeamStatsComponent>;
  const fakeDataGenerator = new FakeDataGenerator();
  const fakeTeam = fakeDataGenerator.createFakeTeam();
  let mockTeamService: TeamService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatExpansionModule,
        MatTabsModule,
        NoopAnimationsModule,
      ],
      declarations: [
        TeamStatsComponent,
        MockTeamDetailComponent,
        MockDataTableComponent,
        MockTeamRosterViewComponent
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(new Map([['id', fakeTeam[0].teamId]]))
          }
        },

        {
          provide: TeamService,
          useValue:
            {
              getTeamStats(id: string) {
                expect(id).toEqual(fakeTeam[0].teamId);
                return of(fakeTeam);
              }
            } as TeamService,
        },
        {
          provide: Title,
          useValue:
          {
            setTitle() { }
          }
        },
        {
          provide: Router,
          useValue:
          {
            navigateByUrl() { }
          }
        },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamStatsComponent);
    mockTeamService = TestBed.get(TeamService);
    component = fixture.componentInstance;
  });

  it('should return team and pass it to team-detail', () => {
    fixture.detectChanges();

    const teamDetailComponent = fixture.debugElement.query(By.css('app-team-detail'));

    expect(teamDetailComponent.componentInstance.team).toEqual(fakeTeam[0]);
  });

  it('should pass stats to table', fakeAsync(() => {
    fixture.detectChanges();

    const tableChecker = new TableChecker(fixture);

    tableChecker.checkTable("Team Batting Statistics", "Box Stats", ".basic-batting-table", fakeTeam);

    tableChecker.checkTable("Team Batting Statistics", "Advanced Stats", ".advanced-batting-table", fakeTeam);

    tableChecker.checkTable("Team Pitching Statistics", "Box Stats", ".basic-pitching-table", fakeTeam);

  }));

  @Component({
    selector: 'app-team-detail',
    template: '',
  })
  class MockTeamDetailComponent {
    @Input() team: any;
  }

  @Component({
    selector: 'app-data-table',
    template: '',
  })
  class MockDataTableComponent {
    @Input() data: any;
    @Input() propertyToLabelMap: Map<string, ColumnConfig>;
  }

  @Component({
    selector: 'app-team-roster-view',
    template: '',
  })
  class MockTeamRosterViewComponent {
    @Input() team: any;
  }

});
