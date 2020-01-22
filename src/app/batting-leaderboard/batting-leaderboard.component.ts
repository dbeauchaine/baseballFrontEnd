import { Component, OnInit} from '@angular/core';
import { BattingLeaderboard } from '../battingLeaderboard';
import { BattingPostLeaderboard } from '../battingPostLeaderboard';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { BattingService } from '../batting.service';

@Component({
  selector: 'app-batting-leaderboard',
  templateUrl: './batting-leaderboard.component.html',
  styleUrls: ['./batting-leaderboard.component.sass']
})
export class BattingLeaderboardComponent implements OnInit {
  public year: number;
  public battingLeaderboard: BattingLeaderboard[];
  public battingPostLeaderboard: BattingPostLeaderboard[];

  constructor(
    private titleService: Title,
    private router: Router,
    private route:ActivatedRoute,
    private battingService: BattingService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(year => {
    this.year = Number(year.get('year'));
    this.titleService.setTitle(`Batting Leaderboards`);
    this.getBattingByYear();
    this.getBattingPostByYear();
    });
  }

  getBattingByYear(): void {
    this.battingService.getBattingStatsByYear(this.year)
      .subscribe(batting => {
        this.battingLeaderboard = batting;
        this.titleService.setTitle(`${this.year} Batting Leaderboards`)
      });
  }

  getBattingPostByYear(): void {
    this.battingService.getBattingPostStatsByYear(this.year)
    .subscribe(batting => {
      this.battingPostLeaderboard = batting;
    });
  }

  public updateData(event): void {
    this.year = event;
    this.getBattingByYear();
    this.getBattingPostByYear();
    this.router.navigateByUrl(`/batting-leaderboard/${this.year}`);
  }

  public goToPlayer(event): void{
    this.router.navigateByUrl(`player/${event.playerId}`);
  }
}
