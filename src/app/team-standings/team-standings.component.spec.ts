import { async, ComponentFixture, TestBed, flush, fakeAsync } from '@angular/core/testing';
import { TeamStandingsComponent } from './team-standings.component';
import { Input, Component } from '@angular/core';
import { MatCardModule, MatExpansionModule, MatTabsModule } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { Title, By } from '@angular/platform-browser';
import { TeamService } from '../team.service';
import { of } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FakeDataGenerator, TableChecker } from '../test-helpers.spec';
import { ColumnConfig } from '../columnConfig';

describe('TeamStandingsComponent', () => {
  let component: TeamStandingsComponent;
  let fixture: ComponentFixture<TeamStandingsComponent>;
  const fakeDataGenerator = new FakeDataGenerator();
  const fakeTeam = fakeDataGenerator.createFakeTeam();
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
        MockDataTableComponent
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
    
    const tableChecker = new TableChecker(fixture);

    tableChecker.checkTable(`${fakeTeam[0].yearId} Regular-Season Stats`, "Box Stats", ".basic-batting-table", fakeTeam);

    tableChecker.checkTable(`${fakeTeam[0].yearId} Regular-Season Stats`, "Advanced Stats", ".advanced-batting-table", fakeTeam);
  }));


  @Component({
    selector: 'app-data-table',
    template: '',
  })
  class MockDataTableComponent {
    @Input() data: any;
    @Input() propertyToLabelMap: Map<string, ColumnConfig>;
  }

  @Component({
    selector: 'app-year-select',
    template: '',
  })
  class MockYearSelectComponent {
  }
});
