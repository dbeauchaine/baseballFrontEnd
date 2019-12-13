import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
    selector: 'app-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.sass']
})
export class DataTableComponent implements OnInit {
    private displayedColumns: string[];

    @Input() dataSource: MatTableDataSource<any>;
    @Input() propertyToLabelMap: Map<string, string>;

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    
    constructor() { }

    ngOnInit() { 
        this.displayedColumns = Array.from(this.propertyToLabelMap.keys());
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
