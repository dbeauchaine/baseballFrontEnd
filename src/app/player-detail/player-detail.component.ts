import { Component, OnInit, ViewChild, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../player.service';
import { Player } from '../player';
import { Batting } from '../batting';
import { BattingService } from '../batting.service';
import { Fielding } from '../fielding';
import { FieldingService } from '../fielding.service';
import { Pitching } from '../pitching';
import { PitchingService } from '../pitching.service';
import { BattingPost } from '../battingPost';
import { Title } from '@angular/platform-browser';
import { ColumnConfig, DisplayFormat } from '../columnConfig';
@Component({
    selector: 'app-player-detail',
    templateUrl: './player-detail.component.html',
    styleUrls: ['./player-detail.component.sass']
})
export class PlayerDetailComponent implements OnInit {
    public id: string;
    public player: Player;
    public batting: Batting[];
    public fielding: Fielding[];
    public pitching: Pitching[];
    public battingPost: BattingPost[];
    battingPropertyToLabelMap: Map<string, ColumnConfig>;

    constructor(
        private route: ActivatedRoute,
        private playerService: PlayerService,
        private battingService: BattingService,
        private fieldingService: FieldingService,
        private pitchingService: PitchingService,
        private titleService: Title
    ) { }

    ngOnInit() {
        this.route.paramMap.subscribe(id => {
            this.id = id.get('id');
            this.getPlayer();
            this.getBatting();
            this.getBattingPost();
            this.getFielding();
            this.getPitching();
            this.battingPropertyToLabelMap = new Map([
                ['yearId', { columnName: "Year" }],
                ['lgId', {columnName: "League", displayFormat: DisplayFormat.Logo}],
                ['teamId', { columnName: 'Team', displayFormat: DisplayFormat.Logo}],
                ['g', { columnName: 'G', tooltip: "Games" }],
                ['ab', { columnName: 'AB', tooltip: "At Bats" }],
                ['h', { columnName: 'H', tooltip: "Hits" }],
                ['x2b', { columnName: '2B', tooltip: "Doubles" }],
                ['x3b', { columnName: '3B', tooltip: "Triples" }],
                ['hr', { columnName: 'HR', tooltip: "Homeruns" }],
                ['rbi', { columnName: 'RBI', tooltip: "Runs Batted In"}],
                ['bb', { columnName: 'BB', tooltip: "Walks"}],
                ['ibb', { columnName: 'IBB', tooltip: "Intentional Walks"}],
                ['hbp', { columnName: 'HBP', tooltip: "Hit By Pitch"}],
                ['so', { columnName: 'K', tooltip: "Strikeouts"}],
                ['sb', { columnName: 'SB', tooltip: "Stolen Bases"}],
                ['cs', { columnName: 'CS', tooltip: "Caught Stealing"}],
                ['sh', { columnName: 'SH', tooltip: "Sacrifice Hits"}],
                ['sf', { columnName: 'SF', tooltip: "Sacrifice Flies"}],
                ['gidp', { columnName: 'GIDP', tooltip: "Ground Into Double Play"}],
            ]);
        });
    }

    private getPlayer(): void {
        this.playerService.getPlayer(this.id)
            .subscribe(player => {
                this.player = player;
                this.titleService.setTitle(`${this.player.nameFirst} ${this.player.nameLast} Stats`);
            });
    }

    private getBatting(): void {
        this.battingService.getBattingStats(this.id)
            .subscribe(batting => {
                if (batting.length > 0) {
                    this.batting = batting;
                } else {
                    this.batting = null;
                }
            });
    }

    private getBattingPost(): void {
        this.battingService.getBattingPostStats(this.id)
            .subscribe(batting => {
                if (batting.length > 0) {
                    this.battingPost = batting;
                } else {
                    this.battingPost = null;
                }
            });
    }

    private getFielding(): void {
        this.fieldingService.getFieldingStats(this.id)
            .subscribe(fielding => {
                if (fielding.length > 0) {
                    this.fielding = fielding;
                } else {
                    this.fielding = null;
                }
            });
    }

    private getPitching(): void {
        this.pitchingService.getPitchingStats(this.id)
            .subscribe(pitching => {
                if (pitching.length > 0) {
                    this.pitching = pitching;
                } else {
                    this.pitching = null;
                }
            });
    }
}

