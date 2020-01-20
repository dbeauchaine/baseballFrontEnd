import { Component, OnInit} from '@angular/core';
import { BattingService } from '../batting.service';
import { BattingLeaderboard } from '../battingLeaderboard';
import { BattingPostLeaderboard } from '../battingPostLeaderboard';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-batting-leaderboard',
  templateUrl: './batting-leaderboard.component.html',
  styleUrls: ['./batting-leaderboard.component.sass']
})
export class BattingLeaderboardComponent implements OnInit {
  public year: number;
  public validYears: string[];
  public battingLeaderboard: BattingLeaderboard[];
  public battingPostLeaderboard: BattingPostLeaderboard[];
  public default:string;

  constructor(
    private battingService: BattingService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.default = '2018';
    this.year = Number(this.default);
    this.validYears = this.generateValidYears();
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

  generateValidYears(): string[] {
    const validDates = new Array();
    for (let i = 2018; i > 1871; i--) {
      validDates.push(i.toString());
    }
    return validDates;
  }

  public updateData(event): void {
    console.log(event);
    this.year = event;
    this.getBattingByYear();
    this.getBattingPostByYear();
  }
}
