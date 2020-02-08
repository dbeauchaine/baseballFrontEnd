import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../team';
import { ColumnDefinitions } from '../columnDefinitions';
import { ColumnConfig } from '../columnConfig';
import { Batting } from '../batting';
import { BattingService } from '../batting.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-roster-view',
  templateUrl: './team-roster-view.component.html',
  styleUrls: ['./team-roster-view.component.sass']
})
export class TeamRosterViewComponent implements OnInit {
  columnDefinitions: ColumnDefinitions;
  battingPropertyToLabelMap: Map<string, ColumnConfig>;
  batting: Batting[];

  @Input() team: Team;

  constructor(
    private router: Router,
    private battingService: BattingService
    ) { }

  ngOnInit() {
    this.columnDefinitions = new ColumnDefinitions();
    this.battingPropertyToLabelMap = this.columnDefinitions.rosterBatting();
    this.getBattingByTeam();
  }

  getBattingByTeam(): void {
    this.battingService.getBattingStatsByTeam(this.team.teamId,this.team.yearId)
    .subscribe(batting => {
      this.batting = batting;
    });
  }

  public goToPlayer(event): void{
    this.router.navigateByUrl(`player/${event.playerId}`);
  }
}
