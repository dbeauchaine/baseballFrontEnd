import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../team.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-team-stats',
  templateUrl: './team-stats.component.html',
  styleUrls: ['./team-stats.component.sass']
})
export class TeamStatsComponent implements OnInit {

  public year: number;
  public validYears: string[];
  public teams: Team[];
  public default:string;

  constructor(
    private teamService:TeamService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.default = '2018';
    this.year = Number(this.default);
    this.validYears = this.generateValidYears();
    this.titleService.setTitle(`Team Leaderboards`);
    this.getTeamsByYear();

  }

  getTeamsByYear(): void { 
    this.teamService.getTeamStatsByYear(this.year)
    .subscribe(teams =>{
      this.teams = teams;
      this.titleService.setTitle(`${this.year} Team Leaderboards`)   
    })
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
    this.getTeamsByYear();
  }

}
