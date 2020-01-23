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

fdescribe('TeamStatsComponent', () => {
  let component: TeamStatsComponent;
  let fixture: ComponentFixture<TeamStatsComponent>;
  const fakeTeam = createFakeTeam();
  let mockTeamService:TeamService;

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
        MockBasicBattingTableComponent,
        MockAdvancedBattingTableComponent,
        MockBasicFieldingTableComponent,
        MockBasicPitchingTableComponent,
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

    checkTable("Batting Statistics","Box Stats", ".basic-batting-table", fakeTeam);

    checkTable("Batting Statistics","Advanced Stats", ".advanced-batting-table", fakeTeam);

    checkTable("Pitching Statistics", "Box Stats", ".basic-pitching-table", fakeTeam);

}));

function checkTable(expansionLabel: string, tabLabel: string, className: string, expectedData: any) {
    clickExpansion(expansionLabel);
    clickTab(tabLabel);

    const tableComponent = fixture.debugElement.query(By.css(className));
    expect(tableComponent.componentInstance.data).toEqual(expectedData);
}

function clickTab(label: string) {
    const tabs = fixture.debugElement.queryAll(By.css('.mat-tab-label-content'));
    const tab = tabs.find(item => {
        return item.nativeElement.textContent == label;
    });

    tab.nativeElement.click();

    //workaround for async material tab behavior
    fixture.detectChanges();
    flush();
    fixture.detectChanges();
}

function clickExpansion(label: string) {
    const expansions = fixture.debugElement.queryAll(By.css('.mat-expansion-panel-header-title'));
    const expansion = expansions.find(item => {
        return item.nativeElement.textContent == label;
    });

    expansion.nativeElement.click();

    //workaround for async material tab behavior
    fixture.detectChanges();
    flush();
    fixture.detectChanges();
}



  function createFakeTeam(): Team[] {
    const team = new Team();
    team.teamId = 'id';
    team.h = 20;
    team.hr = 2;
    team.avg = .242;
    team.era = 3.21;
    return [team];
  }

  @Component({
    selector: 'app-team-detail',
    template: '',
  })
  class MockTeamDetailComponent {
    @Input() team: any;
  }

  @Component({
    selector: 'app-basic-batting-table',
    template: '',
  })
  class MockBasicBattingTableComponent {
    @Input() data: any;
  }

  @Component({
    selector: 'app-advanced-batting-table',
    template: '',
  })
  class MockAdvancedBattingTableComponent {
    @Input() data: any;
  }

  @Component({
    selector: 'app-basic-fielding-table',
    template: '',
  })
  class MockBasicFieldingTableComponent {
    @Input() data: any;
  }

  @Component({
    selector: 'app-basic-pitching-table',
    template: '',
  })
  class MockBasicPitchingTableComponent {
    @Input() data: any;
  }
});
