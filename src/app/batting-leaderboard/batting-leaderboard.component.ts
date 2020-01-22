import { Component, OnInit} from '@angular/core';
import { BattingService } from '../batting.service';
import { BattingLeaderboard } from '../battingLeaderboard';
import { BattingPostLeaderboard } from '../battingPostLeaderboard';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-batting-leaderboard',
  templateUrl: './batting-leaderboard.component.html',
  styleUrls: ['./batting-leaderboard.component.sass']
})
export class BattingLeaderboardComponent implements OnInit {
  public year: number;
  public battingLeaderboard: BattingLeaderboard[];
  public battingPostLeaderboard: BattingPostLeaderboard[];
  public default:string;

  constructor(
    private battingService: BattingService,
    private titleService: Title,
    private router:Router
  ) { }

  ngOnInit() {
    this.default = '2018';
    this.year = Number(this.default);
    this.titleService.setTitle(`Batting Leaderboards`);
    this.getBattingByYear();
    this.getBattingPostByYear();
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
