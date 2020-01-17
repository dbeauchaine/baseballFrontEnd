import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Pitching } from '../pitching';

@Component({
  selector: 'app-basic-pitching-table',
  templateUrl: './basic-pitching-table.component.html',
  styleUrls: ['./basic-pitching-table.component.sass']
})
export class BasicPitchingTableComponent implements OnInit {
  public displayedColumns: string[];
  public dataSource: MatTableDataSource<Pitching>;
  @Input() data: Pitching[];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.displayedColumns = this.generateDisplayedColumns();
  }

  ngOnChanges(){
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  generateDisplayedColumns(): string[] {
    return ['yearId', 'teamId', 'lgId', 'era', 'w', 'l', 'g', 'gs', 'cg', 'sho', 'sv', 'ipouts',
      'h', 'er', 'hr', 'bb', 'so', 'baopp', 'ibb', 'wp', 'hbp', 'bk', 'bfp', 'r', 'sh', 'sf', 'gidp'];
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
