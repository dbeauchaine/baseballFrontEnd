import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattingLeaderboardComponent } from './batting-leaderboard.component';
import { MatCardModule, MatFormFieldModule, MatSelectModule, MatTableModule, MatPaginatorModule } from '@angular/material';
import { DataTableComponent } from '../data-table/data-table.component';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../player.service';
import { BattingLeaderboard } from '../battingLeaderboard';
import { BattingService } from '../batting.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('BattingLeaderboardComponent', () => {
  let component: BattingLeaderboardComponent;
  let fixture: ComponentFixture<BattingLeaderboardComponent>;
  const fakeBattingData = createFakeBatting();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTableModule,
        MatPaginatorModule,
        NoopAnimationsModule
      ],
      declarations: [
        BattingLeaderboardComponent,
        DataTableComponent
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot:
            {
              paramMap: new Map([['year', fakeBattingData.yearId]])

            }
          }
        },

        {
          provide: BattingService,
          useValue:
          {
            getBattingStatsByYear() {
            }
          },
        },

      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattingLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  function createFakeBatting(): BattingLeaderboard {
    const fakeBatting = new BattingLeaderboard();
    fakeBatting.playerId = 'expectedPlayerId';
    fakeBatting.nameFirst = 'expectedFirstName';
    fakeBatting.nameLast = 'expectedLastName';
    fakeBatting.yearId = 2000;

    return fakeBatting;
  }
});
