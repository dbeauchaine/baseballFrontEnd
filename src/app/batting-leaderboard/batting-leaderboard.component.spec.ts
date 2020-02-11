import { async, ComponentFixture, TestBed, flush, fakeAsync } from '@angular/core/testing';
import { BattingLeaderboardComponent } from './batting-leaderboard.component';
import { MatCardModule, MatExpansionModule, MatTabsModule } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { BattingService } from '../batting.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Component, Input } from '@angular/core';
import { of } from 'rxjs';
import { By, Title } from '@angular/platform-browser';
import { FakeDataGenerator, TableChecker } from '../test-helpers.spec';

describe('BattingLeaderboardComponent', () => {
  let component: BattingLeaderboardComponent;
  let fixture: ComponentFixture<BattingLeaderboardComponent>;
  const fakeDataGenerator = new FakeDataGenerator();
  const fakeBatting = fakeDataGenerator.createFakeBatting();
  const fakeBattingPost = fakeDataGenerator.createFakeBattingPost();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatExpansionModule,
        MatTabsModule,
        NoopAnimationsModule
      ],
      declarations: [
        BattingLeaderboardComponent,
        MockYearSelectComponent,
        MockDataTableComponent
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(new Map([['year', fakeBatting[0].yearId]]))
          }
        },

        {
          provide: BattingService,
          useValue:
          {
            getBattingStatsByYear(year: number) {
              expect(year).toEqual(fakeBatting[0].yearId);
              return of(fakeBatting);
            },

            getBattingPostStatsByYear(year: number) {
              expect(year).toEqual(fakeBatting[0].yearId);
              return of(fakeBattingPost);
            }
          },
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
    fixture = TestBed.createComponent(BattingLeaderboardComponent);
    component = fixture.componentInstance;
  });

  it('should pass stats to table', fakeAsync(() => {
    fixture.detectChanges();

    const tableChecker = new TableChecker(fixture);

    tableChecker.checkTable(`${fakeBatting[0].yearId} Regular-Season Leaderboard`, "Box Stats", ".basic-batting-table", fakeBatting);

    tableChecker.checkTable(`${fakeBatting[0].yearId} Regular-Season Leaderboard`, "Advanced Stats", ".advanced-batting-table", fakeBatting);

    tableChecker.checkTable(`${fakeBattingPost[0].yearId} Post-Season Leaderboard`, "Box Stats", ".post-basic-batting-table", fakeBattingPost);
  }));

  @Component({
    selector: 'app-data-table',
    template: '',
  })
  class MockDataTableComponent {
    @Input() data: any;
    @Input() propertyToLabelMap: Map<string, string>;
  }

  @Component({
    selector: 'app-year-select',
    template: '',
  })
  class MockYearSelectComponent {
  }
});
