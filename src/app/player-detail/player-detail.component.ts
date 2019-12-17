import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../player.service';
import { Player } from '../player';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Batting } from '../batting';
import { BattingService } from '../batting.service';
import { Fielding } from '../fielding';
import { FieldingService } from '../fielding.service';

@Component({
    selector: 'app-player-detail',
    templateUrl: './player-detail.component.html',
    styleUrls: ['./player-detail.component.sass']
})
export class PlayerDetailComponent implements OnInit {
    public id: string;
    public player: Player;
    public battingDataSource: MatTableDataSource<Batting>;
    public battingPropertyToLabelMap: Map<string, string>;
    public fieldingDataSource: MatTableDataSource<Fielding>;
    public fieldingPropertyToLabelMap: Map<string, string>;


    constructor(
        private route: ActivatedRoute,
        private playerService: PlayerService,
        private battingService: BattingService,
        private fieldingService: FieldingService
    ) { }

    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.getPlayer();
        this.getBatting();
        this.getFielding();
        this.generateBattingPropertyToLabelMap();
        this.generateFieldingPropertyToLabelMap();
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
                this.battingDataSource = new MatTableDataSource(batting);
            });
    }

    private getFielding(): void {
        this.fieldingService.getFieldingStats(this.id)
            .subscribe(fielding => {
                this.fieldingDataSource = new MatTableDataSource(fielding);
            });
    }

    private generateBattingPropertyToLabelMap(): void {
        this.battingPropertyToLabelMap = new Map([
            ['yearId', 'Year'],
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
}

