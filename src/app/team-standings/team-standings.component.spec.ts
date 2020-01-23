import { async, ComponentFixture, TestBed, flush, fakeAsync } from '@angular/core/testing';

import { TeamStandingsComponent } from './team-standings.component';
import { Input, Component } from '@angular/core';
import { MatCardModule, MatExpansionModule, MatTabsModule } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { Title, By } from '@angular/platform-browser';
import { TeamService } from '../team.service';
import { of } from 'rxjs';
import { Team } from '../team';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('TeamStandingsComponent', () => {
  let component: TeamStandingsComponent;
  let fixture: ComponentFixture<TeamStandingsComponent>;
  const fakeTeam = createFakeTeam();
  let mockTeamService: TeamService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatExpansionModule,
        MatTabsModule,
        NoopAnimationsModule
      ],
      declarations: [
        TeamStandingsComponent,
        MockYearSelectComponent,
        MockBasicBattingTableComponent,
        MockAdvancedBattingTableComponent,
        MockBasicPitchingTableComponent,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(new Map([['year', fakeTeam[0].yearId]]))
          }
        },

        {
          provide: TeamService,
          useValue:
            {
              getTeamStatsByYear(year: number) {
                expect(year).toEqual(fakeTeam[0].yearId);
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
    fixture = TestBed.createComponent(TeamStandingsComponent);
    mockTeamService = TestBed.get(TeamService);
    component = fixture.componentInstance;
  });

  it('should pass stats to table', fakeAsync(() => {
    fixture.detectChanges();

    checkTable(`${fakeTeam[0].yearId} Regular-Season Stats`, "Box Stats", ".basic-batting-table", fakeTeam);

    checkTable(`${fakeTeam[0].yearId} Regular-Season Stats`, "Advanced Stats", ".advanced-batting-table", fakeTeam);
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
    team.yearId = 2000;
    team.h = 20;
    team.hr = 2;
    team.avg = .242;
    team.era = 3.21;
    return [team];
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

  @Component({
    selector: 'app-year-select',
    template: '',
  })
  class MockYearSelectComponent {
  }
});
