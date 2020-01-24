import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../team.service';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { BattingPostLeaderboard } from '../battingPostLeaderboard';
import { ColumnDefinitions } from '../columnDefinitions';
import { ColumnConfig } from '../columnConfig';

@Component({
  selector: 'app-team-standings',
  templateUrl: './team-standings.component.html',
  styleUrls: ['./team-standings.component.sass']
})
export class TeamStandingsComponent implements OnInit {
  public year: number;
  public teams: Team[];
  public battingPostLeaderboard: BattingPostLeaderboard[];
  columnDefinitions: ColumnDefinitions;
  battingPropertyToLabelMap: Map<string, ColumnConfig>;
  advancedBattingPropertyToLabelMap: Map<string, ColumnConfig>;

  constructor(
    private teamService: TeamService,
    private titleService: Title,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(year => {
      this.year = Number(year.get('year'));
      this.titleService.setTitle(`Team Leaderboards`);
      this.columnDefinitions = new ColumnDefinitions();
      this.battingPropertyToLabelMap = this.columnDefinitions.teamBattingBox();
      this.advancedBattingPropertyToLabelMap = this.columnDefinitions.battingAdv();
      this.getTeamsByYear();
    });
  }

  getTeamsByYear(): void {
    this.teamService.getTeamStatsByYear(this.year)
      .subscribe(teams => {
        this.teams = teams;
        this.titleService.setTitle(`${this.year} Team Leaderboards`)
      })
  }

  public updateData(event): void {
    this.year = Number(event);
    this.getTeamsByYear();
    this.router.navigateByUrl(`/teams/standings/${this.year}`)
  }

  goToTeam(event): void {
    this.router.navigateByUrl(`team/${event.teamId}`);
  }

}
