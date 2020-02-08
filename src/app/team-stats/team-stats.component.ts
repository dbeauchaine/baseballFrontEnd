import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../team.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ColumnDefinitions } from '../columnDefinitions';
import { ColumnConfig } from '../columnConfig';

@Component({
  selector: 'app-team-stats',
  templateUrl: './team-stats.component.html',
  styleUrls: ['./team-stats.component.sass']
})
export class TeamStatsComponent implements OnInit {
  public team: Team[];
  public id: string;
  public selectedTeam: Team[];

  columnDefinitions: ColumnDefinitions;
  battingPropertyToLabelMap: Map<string, ColumnConfig>;
  advancedBattingPropertyToLabelMap: Map<string, ColumnConfig>;
  pitchingPropertyToLabelMap: Map<string, ColumnConfig>;

  constructor(
    private teamService:TeamService,
    private titleService: Title,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(id => {
      this.id = id.get('id');
      this.columnDefinitions = new ColumnDefinitions();
      this.titleService.setTitle(`Team Stats`);
      this.battingPropertyToLabelMap = this.columnDefinitions.teamBattingBox();
      this.advancedBattingPropertyToLabelMap = this.columnDefinitions.battingAdv();
      this.pitchingPropertyToLabelMap = this.columnDefinitions.teamPitchingBox();
      this.getTeam();
    });

  }

  getTeam(): void { 
    this.teamService.getTeamStats(this.id)
    .subscribe(team =>{
      this.team = team;
      this.titleService.setTitle(`${this.id} Stats`)   
    })
  }

  public selectTeam(event): void {
    this.selectedTeam = event;
  }


}
