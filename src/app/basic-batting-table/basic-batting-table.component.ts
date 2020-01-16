import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Batting } from '../batting';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-basic-batting-table',
  templateUrl: './basic-batting-table.component.html',
  styleUrls: ['./basic-batting-table.component.sass']
})
export class BasicBattingTableComponent implements OnInit {
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
    return ['yearId', 'teamId', 'lgId', 'g', 'ab', 'r', 'h', 'singles', 'x2b', 'x3b', 'hr', 'rbi',
      'sb', 'cs', 'bb', 'so', 'ibb', 'hbp', 'sh', 'sf', 'gidp'];
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
