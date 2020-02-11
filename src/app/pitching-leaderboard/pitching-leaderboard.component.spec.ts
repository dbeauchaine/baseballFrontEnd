import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { PitchingLeaderboardComponent } from './pitching-leaderboard.component';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PitchingService } from '../pitching.service';
import { FakeDataGenerator, TableChecker } from '../test-helpers.spec';
import { Title } from '@angular/platform-browser';
import { Component, Input } from '@angular/core';
import { MatCardModule, MatExpansionModule, MatTabsModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('PitchingLeaderboardComponent', () => {
  let component: PitchingLeaderboardComponent;
  let fixture: ComponentFixture<PitchingLeaderboardComponent>;
  const fakeDataGenerator = new FakeDataGenerator();
  const fakePitching = fakeDataGenerator.createFakePitching();
  const fakePitchingPost = fakeDataGenerator.createFakePitchingPost();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatExpansionModule,
        MatTabsModule,
        NoopAnimationsModule
      ],
      declarations: [
        PitchingLeaderboardComponent,
        MockDataTableComponent,
        MockYearSelectComponent
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(new Map([['year', fakePitching[0].yearId]]))
          }
        },

        {
          provide: PitchingService,
          useValue:
          {
            getPitchingStatsByYear(year: number) {
              expect(year).toEqual(fakePitching[0].yearId);
              return of(fakePitching);
            },

            getPitchingPostStatsByYear(year: number) {
              expect(year).toEqual(fakePitching[0].yearId);
              return of(fakePitchingPost);
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
    fixture = TestBed.createComponent(PitchingLeaderboardComponent);
    component = fixture.componentInstance;
  });

  it('should create tables from leaderboard data', fakeAsync(() => {
    fixture.detectChanges();

    const tableChecker = new TableChecker(fixture);

    tableChecker.checkTable(`${fakePitching[0].yearId} Regular-Season Leaderboard`, "Box Stats", ".basic-pitching-table", fakePitching);

    tableChecker.checkTable(`${fakePitchingPost[0].yearId} Post-Season Leaderboard`, "Box Stats", ".post-basic-pitching-table", fakePitchingPost);

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
