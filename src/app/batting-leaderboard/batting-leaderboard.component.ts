import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BattingService } from '../batting.service';
import { MatTableDataSource } from '@angular/material';
import { BattingLeaderboard } from '../battingLeaderboard';

@Component({
  selector: 'app-batting-leaderboard',
  templateUrl: './batting-leaderboard.component.html',
  styleUrls: ['./batting-leaderboard.component.sass']
})
export class BattingLeaderboardComponent implements OnInit {
  public year: number;
  public validYears: string[];
  public battingLeaderboard: BattingLeaderboard[];
  public battingPropertyToLabelMap: Map<string, string>;

  constructor(
    private route: ActivatedRoute,
    private battingService: BattingService,
  ) { }

  ngOnInit() {
    this.generateBattingPropertyToLabelMap();
    this.validYears = this.generateValidYears();
  }

  getBattingByYear(): void {
    this.battingService.getBattingStatsByYear(this.year)
      .subscribe(batting => {
        this.battingLeaderboard = batting;
      });
  }

  generateBattingPropertyToLabelMap(): void {
    this.battingPropertyToLabelMap = new Map([
      ['nameFirst', 'First'],
      ['nameLast', 'Last'],
      ['teamId', 'Team'],
      ['g', 'G'],
      ['ab', 'AB'],
      ['h', 'H'],
      ['x2b', '2B'],
      ['x3b', '3B'],
      ['hr', 'HR'],
      ['rbi', 'RBI'],
      ['bb', 'BB'],
      ['ibb', 'IBB'],
      ['hbp', 'HBP'],
      ['so', 'K'],
      ['sb', 'SB'],
      ['cs', 'CS'],
      ['sh', 'SH'],
      ['sf', 'SF'],
      ['gidp', 'GIDP']
    ]);
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
  }
}
