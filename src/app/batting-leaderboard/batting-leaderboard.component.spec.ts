import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattingLeaderboardComponent } from './batting-leaderboard.component';

describe('BattingLeaderboardComponent', () => {
  let component: BattingLeaderboardComponent;
  let fixture: ComponentFixture<BattingLeaderboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattingLeaderboardComponent ]
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
});
