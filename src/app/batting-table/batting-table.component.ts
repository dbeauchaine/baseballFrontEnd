import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Batting } from '../batting';
import { BattingService } from '../batting.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-batting-table',
    templateUrl: './batting-table.component.html',
    styleUrls: ['./batting-table.component.sass']
})
export class BattingTableComponent implements OnInit {
    private dataSource: MatTableDataSource<Batting>;
    private propertyToLabelMap: Map<string, string>;
    private displayedColumns: string[];

    @Input() id: string;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    constructor(
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
        this.getBatting();
        this.displayedColumns = Array.from(this.propertyToLabelMap.keys());
    }

    getBatting(): void {
        this.battingService.getBattingStats(this.id)
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
