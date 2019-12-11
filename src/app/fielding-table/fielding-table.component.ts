import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Fielding } from '../fielding';
import { FieldingService } from '../fielding.service';

@Component({
    selector: 'app-fielding-table',
    templateUrl: './fielding-table.component.html',
    styleUrls: ['./fielding-table.component.sass']
})
export class FieldingTableComponent implements OnInit {
    private dataSource: MatTableDataSource<Fielding>;
    private propertyToLabelMap: Map<string, string>;
    private displayedColumns: string[];

    @Input() id: string;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    constructor(
        private fieldingService: FieldingService
    ) { }

    ngOnInit() {
        this.propertyToLabelMap = new Map([
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
        this.getFielding();
        this.displayedColumns = Array.from(this.propertyToLabelMap.keys());
    }

    getFielding(): void {
        this.fieldingService.getFieldingStats(this.id)
            .subscribe(fielding => {
                this.dataSource = new MatTableDataSource(fielding)
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
