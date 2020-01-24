import { Component, OnInit } from '@angular/core';
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
import { ColumnConfig } from '../columnConfig';
import { ColumnDefinitions } from '../columnDefinitions';
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
    columnDefinitions: ColumnDefinitions;
    battingPropertyToLabelMap: Map<string, ColumnConfig>;
    advancedBattingPropertyToLabelMap: Map<string, ColumnConfig>;
    battingPostPropertyToLabelMap: Map<string, ColumnConfig>;
    fieldingPropertyToLabelMap: Map<string, ColumnConfig>;
    pitchingPropertyToLabelMap: Map<string, ColumnConfig>;
    

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
            this.columnDefinitions = new ColumnDefinitions();
            this.getPlayer();
            this.getBatting();
            this.getBattingPost();
            this.getFielding();
            this.getPitching();
            this.battingPropertyToLabelMap = this.columnDefinitions.battingBox();
            this.advancedBattingPropertyToLabelMap = this.columnDefinitions.battingAdv();
            this.battingPostPropertyToLabelMap = this.columnDefinitions.battingPostBox();
            this.fieldingPropertyToLabelMap = this.columnDefinitions.fieldingBox();
            this.pitchingPropertyToLabelMap = this.columnDefinitions.pitchingBox();
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

