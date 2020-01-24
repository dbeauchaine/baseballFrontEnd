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

    if(this.data[0].g !== null){
      columns = columns.concat(['g']);
    }

    if(this.data[0].gs !== null){
      columns = columns.concat(['gs']);
    }

    if(this.data[0].innOuts !== null){
      columns = columns.concat(['innOuts']);
    }

    if(this.data[0].po !== null){
      columns = columns.concat(['po']);
    }

    if(this.data[0].a !== null){
      columns = columns.concat(['a']);
    }

    if(this.data[0].e !== null){
      columns = columns.concat(['e']);
    }

    if(this.data[0].dp !== null){
      columns = columns.concat(['dp']);
    }

    if(this.data[0].zr !== null){
      columns = columns.concat(['zr']);
    }

    if(this.data[0].wp !== null){
      columns = columns.concat(['wp']);
    }

    if(this.data[0].sb !== null){
      columns = columns.concat(['sb']);
    }

    if(this.data[0].cs !== null){
      columns = columns.concat(['cs']);
    }

    return columns;
  }
}
