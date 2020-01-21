import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Batting } from '../batting';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ActivatedRoute, Router, ParamMap } from "@angular/router";

@Component({
  selector: 'app-basic-batting-table',
  templateUrl: './basic-batting-table.component.html',
  styleUrls: ['./basic-batting-table.component.sass']
})
export class BasicBattingTableComponent implements OnInit {
  public displayedColumns: string[];
  public dataSource: MatTableDataSource<any>;
  @Input() data: any;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.displayedColumns = this.generateDisplayedColumns();
  }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  generateDisplayedColumns(): string[] {
    let columns: string[] = ['yearId'];

    if (this.data[0].nameFirst) {
      columns = columns.concat(['nameFirst', 'nameLast'])
    }
    if (this.data[0].teamId) {
      columns = columns.concat(['teamId'])
    }
    if (this.data[0].lgId) {
      columns = columns.concat(['lgId']);
    }
    if (typeof(this.data[0].w) !== 'undefined') {
      columns = columns.concat(['w']);
    }
    if (typeof(this.data[0].l) !== 'undefined') {
      columns = columns.concat(['l']);
    }
    if (this.data[0].round) {
      columns = columns.concat(['round']);
    }
    if (typeof (this.data[0].ab) !== 'undefined') {
      columns = columns.concat('ab');
    }
    if (typeof (this.data[0].r) !== 'undefined') {
      columns = columns.concat('r');
    }
    if (typeof (this.data[0].h) !== 'undefined') {
      columns = columns.concat('h');
    }
    if (typeof (this.data[0].singles) !== 'undefined') {
      columns = columns.concat('singles');
    }
    if (typeof (this.data[0].x2b) !== 'undefined') {
      columns = columns.concat('x2b');
    }
    if (typeof (this.data[0].x3b) !== 'undefined') {
      columns = columns.concat('x3b');
    }
    if (typeof (this.data[0].hr) !== 'undefined') {
      columns = columns.concat('hr');
    }
    if (typeof (this.data[0].rbi) !== 'undefined') {
      columns = columns.concat('rbi');
    }
    if (typeof (this.data[0].sb) !== 'undefined') {
      columns = columns.concat('sb');
    }
    if (typeof (this.data[0].cs) !== 'undefined') {
      columns = columns.concat('cs');
    }
    if (typeof (this.data[0].bb) !== 'undefined') {
      columns = columns.concat('bb');
    }
    if (typeof (this.data[0].so) !== 'undefined') {
      columns = columns.concat('so');
    }
    if (typeof (this.data[0].ibb) !== 'undefined') {
      columns = columns.concat('ibb');
    }
    if (typeof (this.data[0].hbp) !== 'undefined') {
      columns = columns.concat('hbp');
    }
    if (typeof (this.data[0].sh) !== 'undefined') {
      columns = columns.concat('sh');
    }
    if (typeof (this.data[0].sf) !== 'undefined') {
      columns = columns.concat('sf');
    }
    if (typeof (this.data[0].gidp) !== 'undefined') {
      columns = columns.concat('gidp');
    }
    return columns;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  goToPlayer(row) {
    this.router.navigateByUrl(`player/${row.playerId}`);
  }

}
