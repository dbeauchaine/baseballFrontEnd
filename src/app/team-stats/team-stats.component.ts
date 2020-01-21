import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../team.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-stats',
  templateUrl: './team-stats.component.html',
  styleUrls: ['./team-stats.component.sass']
})
export class TeamStatsComponent implements OnInit {
  public team: Team[];
  public id: string;

  constructor(
    private teamService:TeamService,
    private titleService: Title,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(id => {
      this.id = id.get('id');
      this.titleService.setTitle(`Team Stats`);
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

}
