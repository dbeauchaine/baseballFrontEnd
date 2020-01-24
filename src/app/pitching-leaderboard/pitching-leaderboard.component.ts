import { Component, OnInit } from '@angular/core';
import { PitchingService } from '../pitching.service';
import { PitchingLeaderboard } from '../pitchingLeaderboard';
import { PitchingPostLeaderboard } from '../pitchingPostLeaderboard';
import { ColumnDefinitions } from '../columnDefinitions';
import { ColumnConfig } from '../columnConfig';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pitching-leaderboard',
  templateUrl: './pitching-leaderboard.component.html',
  styleUrls: ['./pitching-leaderboard.component.sass']
})
export class PitchingLeaderboardComponent implements OnInit {
  public year: number;
  public pitchingLeaderboard: PitchingLeaderboard[];
  public pitchingPostLeaderboard: PitchingPostLeaderboard[];
  columnDefinitions: ColumnDefinitions;
  pitchingLeaderboardPropertyToLabelMap: Map<string, ColumnConfig>;

  constructor(
    private titleService: Title,
    private router: Router,
    private route:ActivatedRoute,
    private pitchingService: PitchingService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(year => {
    this.year = Number(year.get('year'));
    this.titleService.setTitle(`Batting Leaderboards`);
    this.columnDefinitions = new ColumnDefinitions();
    this.pitchingLeaderboardPropertyToLabelMap = this.columnDefinitions.pitchingLeaderboard();
    this.getPitchingByYear();
    this.getPitchingPostByYear();
    });
  }

  getPitchingByYear(): void {
    this.pitchingService.getPitchingStatsByYear(this.year)
      .subscribe(pitching => {
        this.pitchingLeaderboard = pitching;
        this.titleService.setTitle(`${this.year} Pitching Leaderboards`)
      });
  }

  getPitchingPostByYear(): void {
    this.pitchingService.getPitchingPostStatsByYear(this.year)
    .subscribe(pitching => {
      this.pitchingPostLeaderboard = pitching;
    });
  }

  public updateData(event): void {
    this.year = event;
    this.getPitchingByYear();
    this.getPitchingPostByYear();
    this.router.navigateByUrl(`/batting-leaderboard/${this.year}`);
  }

  public goToPlayer(event): void{
    this.router.navigateByUrl(`player/${event.playerId}`);
  }
}