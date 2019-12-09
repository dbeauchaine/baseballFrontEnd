import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../player.service';
import { Player } from '../player';
import { BattingService } from '../batting.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Batting } from '../batting';

@Component({
    selector: 'app-player-detail',
    templateUrl: './player-detail.component.html',
    styleUrls: ['./player-detail.component.sass']
})
export class PlayerDetailComponent implements OnInit {
    private player: Player;
    private dataSource: MatTableDataSource<Batting>;
    private propertyToLabelMap: Map<string, string>;
    private displayedColumns: string[];

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    constructor(
        private route: ActivatedRoute,
        private playerService: PlayerService,
        private battingService: BattingService
    ) { }

    ngOnInit() {
        this.propertyToLabelMap = new Map([
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
        this.displayedColumns = Array.from(this.propertyToLabelMap.keys());
        this.getPlayer();
        this.getBatting();
    }

    getPlayer(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.playerService.getPlayer(id)
            .subscribe(player => this.player = player);
    }

    getBatting(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.battingService.getBattingStats(id)
            .subscribe(batting => {
                this.dataSource = new MatTableDataSource(batting)
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            });
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}

