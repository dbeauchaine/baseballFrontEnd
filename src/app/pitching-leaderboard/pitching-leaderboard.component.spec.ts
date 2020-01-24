import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitchingLeaderboardComponent } from './pitching-leaderboard.component';

describe('PitchingLeaderboardComponent', () => {
  let component: PitchingLeaderboardComponent;
  let fixture: ComponentFixture<PitchingLeaderboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitchingLeaderboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitchingLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
