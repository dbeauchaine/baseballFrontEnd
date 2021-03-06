import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ColumnConfig, DisplayFormat, NumberFormat } from '../columnConfig';

@Component({
    selector: 'app-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.sass']
})
export class DataTableComponent implements OnInit {
    public displayedColumns: string[];
    public dataSource: MatTableDataSource<any>;
    public displayFormat = DisplayFormat;
    public numberFormat = NumberFormat;

    @Output() rowClick: EventEmitter<any> = new EventEmitter<any>();
    @Input() data: any;
    @Input() propertyToLabelMap: Map<string, ColumnConfig>;

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    constructor() { }

    ngOnInit() {
        this.dataSource = new MatTableDataSource(this.data);
        this.displayedColumns = Array.from(this.propertyToLabelMap.keys());
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

    }

    ngOnChanges() {
        this.dataSource = new MatTableDataSource(this.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    itemClick(row) {
        this.rowClick.emit(row);
    }
}
