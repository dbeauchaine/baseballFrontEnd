import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { TeamRosterViewComponent } from './team-roster-view.component';
import { MatTabsModule, MatExpansionModule } from '@angular/material';
import { Component, Input } from '@angular/core';
import { ColumnConfig } from '../columnConfig';
import { BattingService } from '../batting.service';
import { of } from 'rxjs/internal/observable/of';
import { Router } from '@angular/router';
import { FakeDataGenerator, TableChecker } from '../test-helpers.spec';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('TeamRosterViewComponent', () => {
  let component: TeamRosterViewComponent;
  let fixture: ComponentFixture<TeamRosterViewComponent>;
  const fakeDataGenerator = new FakeDataGenerator();
  const fakeBatting = fakeDataGenerator.createFakeBatting();
  const fakeTeam = fakeDataGenerator.createFakeTeam();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatTabsModule,
        MatExpansionModule,
        NoopAnimationsModule
      ],
      declarations: [
        TeamRosterViewComponent,
        MockDataTableComponent
      ],
      providers: [
        {
          provide: BattingService,
          useValue:
          {
            getBattingStatsByTeam(id: string) {
              expect(id).toEqual(fakeBatting[0].teamId);
              return of(fakeBatting);
            },
          },
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
    fixture = TestBed.createComponent(TeamRosterViewComponent);
    component = fixture.componentInstance;
    component.team = fakeTeam[0];
  });

  it('should create data table containing batting data', fakeAsync(() => {
    fixture.detectChanges();

    const tableChecker = new TableChecker(fixture);

    tableChecker.checkTable(`${component.team.yearId} ${component.team.teamId} Roster`, "Regular Season Batting", ".roster-regular-batting", fakeBatting);
  }));


  @Component({
    selector: 'app-data-table',
    template: '',
  })
  class MockDataTableComponent {
    @Input() data: any;
    @Input() propertyToLabelMap: Map<string, ColumnConfig>;
  }
});


