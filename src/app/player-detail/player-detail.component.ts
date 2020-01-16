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
import { DataTableComponent } from '../data-table/data-table.component';
import { BattingPost } from '../battingPost';

@Component({
    selector: 'app-player-detail',
    templateUrl: './player-detail.component.html',
    styleUrls: ['./player-detail.component.sass']
})
export class PlayerDetailComponent implements OnInit {
    public id: string;
    public player: Player;
    public batting: Batting[];
    public battingPropertyToLabelMap: Map<string, string>;
    public fielding: Fielding[];
    public fieldingPropertyToLabelMap: Map<string, string>;
    public pitching: Pitching[];
    public pitchingPropertyToLabelMap: Map<string, string>;
    public battingPost: BattingPost[];
    public battingPostPropertyToLabelMap: Map<string, string>;

    constructor(
        private route: ActivatedRoute,
        private playerService: PlayerService,
        private battingService: BattingService,
        private fieldingService: FieldingService,
        private pitchingService: PitchingService
    ) { }

    ngOnInit() {
        this.route.paramMap.subscribe(id => {
            this.id = id.get('id');
            this.getPlayer();
            this.getBatting();
            this.getBattingPost();
            this.getFielding();
            this.getPitching();
            this.generateBattingPropertyToLabelMap();
            this.generateFieldingPropertyToLabelMap();
            this.generatePitchingPropertyToLabelMap();
            this.generateBattingPostPropertyToLabelMap();
        });
    }

    private getPlayer(): void {
        this.playerService.getPlayer(this.id)
            .subscribe(player => {
                this.player = player;
            });
    }

    private getBatting(): void {
        this.battingService.getBattingStats(this.id)
            .subscribe(batting => {
                if (batting.length > 0) {
                    this.batting = batting;
                }
            });
    }

    private getBattingPost(): void {
        this.battingService.getBattingPostStats(this.id)
        .subscribe(batting => {
            if(batting.length > 0) {
                this.battingPost = batting;
            }
        });
    }

    private getFielding(): void {
        this.fieldingService.getFieldingStats(this.id)
            .subscribe(fielding => {
                if (fielding.length > 0) {
                    this.fielding = fielding;
                }
            });
    }

    private getPitching(): void {
        this.pitchingService.getPitchingStats(this.id)
            .subscribe(pitching => {
                if (pitching.length > 0) {
                    this.pitching = pitching;
                }
            });
    }
    private generateBattingPropertyToLabelMap(): void {
        this.battingPropertyToLabelMap = new Map([
            ['yearId', 'Year'],
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

    private generateBattingPostPropertyToLabelMap(): void {
        this.battingPostPropertyToLabelMap = new Map([
            ['yearId', 'Year'],
            ['teamId', 'Team'],
            ['round', "Round"],
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

    private generateFieldingPropertyToLabelMap(): void {
        this.fieldingPropertyToLabelMap = new Map([
            ['yearId', 'Year'],
            ['teamId', 'Team'],
            ['pos', 'Pos'],
            ['g', 'G'],
            ['gs', 'GS'],
            ['innOuts', 'InnOuts'],
            ['po', 'PO'],
            ['a', 'A'],
            ['e', 'E'],
            ['dp', 'DP'],
            ['pb', 'PB'],
            ['wp', 'WP'],
            ['sb', 'SB'],
            ['cs', 'CS'],
            ['zr', 'ZR'],
        ]);
    }

    private generatePitchingPropertyToLabelMap(): void {
        this.pitchingPropertyToLabelMap = new Map([
            ['yearId', 'Year'],
            ['teamId', 'Team'],
            ['g', 'G'],
            ['gs', 'GS'],
            ['w', 'W'],
            ['l', 'L'],
            ['cg', 'CG'],
            ['sho', 'SO'],
            ['sv', 'SV'],
            ['era', 'ERA'],
            ['h', 'H'],
            ['hr', 'HR'],
            ['so', 'K'],
            ['bb', 'BB'],
            ['ibb', 'IBB'],
            ['er', 'ER'],
            ['r', 'R'],
            ['baopp', 'Opp. BA'],
            ['wp', 'WP'],
            ['hbp', 'HBP'],
            ['bk', 'BK'],
            ['sf', 'SF'],
            ['sh', 'SH'],
            ['gidp', 'GIDP'],
        ]);
    }
}

