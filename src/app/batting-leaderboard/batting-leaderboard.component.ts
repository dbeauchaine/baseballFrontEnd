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
  public battingPropertyToLabelMap: Map<string, string>;
  public battingPostPropertyToLabelMap: Map<string, string>;

  constructor(
    private battingService: BattingService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.validYears = this.generateValidYears();
    this.titleService.setTitle(`Batting Leaderboards`);
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

  public onChange(event): void {
    this.year = Number(event.value);
    this.getBattingByYear();
    this.getBattingPostByYear();
  }
}
