import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
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
  @Input() data: Fielding[];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @Output() rowClick:EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() {
    this.displayedColumns = this.generateDisplayedColumns();
  }

  ngOnChanges(){
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
    let columns:string[] = ['yearId'];

    if(this.data[0].teamId){
      columns = columns.concat(['teamId']);
    }

    if(this.data[0].lgId){
      columns = columns.concat(['lgId']);
    }

    if(this.data[0].pos){
      columns = columns.concat(['pos']);
    }

    if(typeof(this.data[0].g) !== 'undefined'){
      columns = columns.concat(['g']);
    }

    if(typeof(this.data[0].gs) !== 'undefined'){
      columns = columns.concat(['gs']);
    }

    if(typeof(this.data[0].innOuts) !== 'undefined'){
      columns = columns.concat(['innOuts']);
    }

    if(typeof(this.data[0].po) !== 'undefined'){
      columns = columns.concat(['po']);
    }

    if(typeof(this.data[0].a) !== 'undefined'){
      columns = columns.concat(['a']);
    }

    if(typeof(this.data[0].e) !== 'undefined'){
      columns = columns.concat(['e']);
    }

    if(typeof(this.data[0].dp) !== 'undefined'){
      columns = columns.concat(['dp']);
    }

    if(typeof(this.data[0].zr) !== 'undefined'){
      columns = columns.concat(['zr']);
    }

    if(typeof(this.data[0].wp) !== 'undefined'){
      columns = columns.concat(['wp']);
    }

    if(typeof(this.data[0].sb) !== 'undefined'){
      columns = columns.concat(['sb']);
    }

    if(typeof(this.data[0].cs) !== 'undefined'){
      columns = columns.concat(['cs']);
    }

    return columns;
  }
}
