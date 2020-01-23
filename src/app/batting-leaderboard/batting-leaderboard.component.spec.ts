import { async, ComponentFixture, TestBed, flush, fakeAsync } from '@angular/core/testing';
import { BattingLeaderboardComponent } from './batting-leaderboard.component';
import { MatCardModule, MatFormFieldModule, MatSelectModule, MatTableModule, MatPaginatorModule, MatExpansionModule, MatTabsModule } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { BattingService } from '../batting.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Component, Input } from '@angular/core';
import { BattingPost } from '../battingPost';
import { Batting } from '../batting';
import { of } from 'rxjs';
import { By, Title } from '@angular/platform-browser';
import { BattingLeaderboard } from '../battingLeaderboard';
import { BattingPostLeaderboard } from '../battingPostLeaderboard';

describe('BattingLeaderboardComponent', () => {
  let component: BattingLeaderboardComponent;
  let fixture: ComponentFixture<BattingLeaderboardComponent>;
  const fakeBatting = createFakeBatting();
  const fakeBattingPost = createFakeBattingPost();
  let fakeBattingService: BattingService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTableModule,
        MatPaginatorModule,
        NoopAnimationsModule,
        MatExpansionModule,
        MatTabsModule
      ],
      declarations: [
        BattingLeaderboardComponent,
        MockYearSelectComponent,
        MockBasicBattingTableComponent,
        MockAdvancedBattingTableComponent
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
    fakeBattingService = TestBed.get(BattingService);
    component = fixture.componentInstance;
  });

  it('should pass stats to table', fakeAsync(() => {
    fixture.detectChanges();

    checkTable(`${fakeBatting[0].yearId} Regular-Season Leaderboard`, "Box Stats", ".basic-batting-table", fakeBatting);

    checkTable(`${fakeBatting[0].yearId} Regular-Season Leaderboard`, "Advanced Stats", ".advanced-batting-table", fakeBatting);

    checkTable(`${fakeBattingPost[0].yearId} Post-Season Leaderboard`, "Box Stats", ".post-basic-batting-table", fakeBattingPost);
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

  function createFakeBatting(): BattingLeaderboard[] {
    const batting = new BattingLeaderboard();
    batting.playerId = 'id';
    batting.yearId = 2000;
    batting.h = 20;
    batting.hr = 2;
    batting.avg = .203;
    return [batting];
  }

  function createFakeBattingPost(): BattingPostLeaderboard[] {
    const batting = new BattingPostLeaderboard();
    batting.yearId = 2000;
    batting.playerId = 'id';
    batting.h = 20;
    batting.hr = 2;
    batting.avg = .203;
    return [batting];
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
    selector: 'app-year-select',
    template: '',
  })
  class MockYearSelectComponent {
  }
});
