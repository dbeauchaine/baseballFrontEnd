import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Fielding } from '../fielding';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-basic-fielding-table',
  templateUrl: './basic-fielding-table.component.html',
  styleUrls: ['./basic-fielding-table.component.sass']
})
export class BasicFieldingTableComponent implements OnInit {
  public displayedColumns: string[];
  public dataSource: MatTableDataSource<Fielding>;
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
    return ['yearId', 'teamId', 'lgId', 'pos', 'g', 'gs', 'innOuts', 'po', 'a', 'e', 'dp', 'zr', 'wp',
      'sb', 'cs',];
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
