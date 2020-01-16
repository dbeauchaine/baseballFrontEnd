import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Batting } from '../batting';
import { MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-advanced-batting-table',
  templateUrl: './advanced-batting-table.component.html',
  styleUrls: ['./advanced-batting-table.component.sass']
})
export class AdvancedBattingTableComponent implements OnInit {

  public displayedColumns: string[];
  public dataSource: MatTableDataSource<Batting>;
  @Input() data: any;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.displayedColumns = this.generateDisplayedColumns();
  }

  generateDisplayedColumns(): string[] {
    return ['yearId','teamId','lgId','avg', 'slg', 'obp', 'ops'];
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
