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
    private id: string;
    private player: Player;
    private battingDataSource: MatTableDataSource<Batting>;
    private battingPropertyToLabelMap: Map<string, string>;
    private fieldingDataSource: MatTableDataSource<Fielding>;
    private fieldingPropertyToLabelMap: Map<string, string>;
    

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

    getPlayer(): void {
        this.playerService.getPlayer(this.id)
            .subscribe(player => this.player = player);
    }

    getBatting(): void {
        this.battingService.getBattingStats(this.id)
            .subscribe(batting => {
                this.battingDataSource = new MatTableDataSource(batting)
            });
    }

    getFielding(): void {
        this.fieldingService.getFieldingStats(this.id)
            .subscribe(fielding => {
                this.fieldingDataSource = new MatTableDataSource(fielding)
            });
    }

    generateBattingPropertyToLabelMap():void{
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

    generateFieldingPropertyToLabelMap():void{
        this.fieldingPropertyToLabelMap = new Map([
            ['yearId', 'Year'],
            ['teamId', 'Team'],
            ['pos','Pos'],
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

