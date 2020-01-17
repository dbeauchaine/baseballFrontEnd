import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Fielding } from '../fielding';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic-fielding-table',
  templateUrl: './basic-fielding-table.component.html',
  styleUrls: ['./basic-fielding-table.component.sass']
})
export class BasicFieldingTableComponent implements OnInit {
  public displayedColumns: string[];
  public dataSource: MatTableDataSource<Fielding>;
  @Input() data: Fielding[];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private router:Router) { }

  ngOnInit() {
    this.displayedColumns = this.generateDisplayedColumns();
  }

  ngOnChanges(){
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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

  goToPlayer(row){
    this.router.navigateByUrl(`player/${row.playerId}`);
  }
}
