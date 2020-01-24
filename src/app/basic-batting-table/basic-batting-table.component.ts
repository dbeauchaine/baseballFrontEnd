import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

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
  @Output() rowClick:EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.displayedColumns = this.generateDisplayedColumns();
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

  itemClick(row){
    this.rowClick.emit(row);
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
    if (this.data[0].w !== null) {
      columns = columns.concat(['w']);
    }
    if (this.data[0].l !== null) {
      columns = columns.concat(['l']);
    }
    if (this.data[0].round) {
      columns = columns.concat(['round']);
    }
    if (this.data[0].ab !== null) {
      columns = columns.concat('ab');
    }
    if (this.data[0].r !== null) {
      columns = columns.concat('r');
    }
    if (this.data[0].h !== null) {
      columns = columns.concat('h');
    }
    if (this.data[0].singles !== null  && typeof(this.data[0].singles) != 'undefined') {
      columns = columns.concat('singles');
    }
    if (this.data[0].x2b !== null  && typeof(this.data[0].x2b) != 'undefined') {
      columns = columns.concat('x2b');
    }
    if (this.data[0].x3b !== null  && typeof(this.data[0].x3b) != 'undefined') {
      columns = columns.concat('x3b');
    }
    if (this.data[0].hr !== null && typeof(this.data[0].hr) != 'undefined') {
      columns = columns.concat('hr');
    }
    if (this.data[0].rbi !== null && typeof(this.data[0].rbi) != 'undefined') {
      columns = columns.concat('rbi');
    }
    if (this.data[0].sb !== null) {
      columns = columns.concat('sb');
    }
    if (this.data[0].cs !== null) {
      columns = columns.concat('cs');
    }
    if (this.data[0].bb !== null) {
      columns = columns.concat('bb');
    }
    if (this.data[0].so !== null) {
      columns = columns.concat('so');
    }
    if (this.data[0].ibb !== null) {
      columns = columns.concat('ibb');
    }
    if (this.data[0].hbp !== null) {
      columns = columns.concat('hbp');
    }
    if (this.data[0].sh !== null) {
      columns = columns.concat('sh');
    }
    if (this.data[0].sf !== null) {
      columns = columns.concat('sf');
    }
    if (this.data[0].gidp !== null) {
      columns = columns.concat('gidp');
    }
    return columns;
  }
}
