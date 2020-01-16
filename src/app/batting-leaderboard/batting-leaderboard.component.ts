import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BattingService } from '../batting.service';
import { MatTableDataSource } from '@angular/material';
import { BattingLeaderboard } from '../battingLeaderboard';
import { BattingPostLeaderboard } from '../battingPostLeaderboard';

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
    private route: ActivatedRoute,
    private battingService: BattingService,
  ) { }

  ngOnInit() {
    this.generateBattingPropertyToLabelMap();
    this.generateBattingPostPropertyToLabelMap();
    this.validYears = this.generateValidYears();
  }

  getBattingByYear(): void {
    this.battingService.getBattingStatsByYear(this.year)
      .subscribe(batting => {
        this.battingLeaderboard = batting;
      });
  }

  getBattingPostByYear(): void {
    this.battingService.getBattingPostStatsByYear(this.year)
    .subscribe(batting => {
      this.battingPostLeaderboard = batting;
    });
  }

  generateBattingPropertyToLabelMap(): void {
    this.battingPropertyToLabelMap = new Map([
      ['nameFirst', 'First Name'],
      ['nameLast', 'Last Name'],
      ['teamId', 'Team'],
      ['avg', 'AVG'],
      ['slg', 'SLG'],
      ['obp', 'OBP'],
      ['ops', 'OPS'],
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

  generateBattingPostPropertyToLabelMap(): void {
    this.battingPostPropertyToLabelMap = new Map([
      ['nameFirst', 'First Name'],
      ['nameLast', 'Last Name'],
      ['teamId', 'Team'],
      ['yearId', 'Year'],
      ['round', 'Round'],
      ['avg', 'AVG'],
      ['slg', 'SLG'],
      ['obp', 'OBP'],
      ['ops', 'OPS'],
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
    this.getBattingPostByYear();
  }
}
