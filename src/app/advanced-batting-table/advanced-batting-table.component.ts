import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-advanced-batting-table',
  templateUrl: './advanced-batting-table.component.html',
  styleUrls: ['./advanced-batting-table.component.sass']
})
export class AdvancedBattingTableComponent implements OnInit {

  public displayedColumns: string[];
  public dataSource: MatTableDataSource<any>;
  @Input() data: any;
  @Output() rowClick:EventEmitter<any> = new EventEmitter<any>();
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

    if(this.data[0].nameFirst){
      columns = columns.concat(['nameFirst','nameLast']);
    }

    if(this.data[0].teamId){
      columns = columns.concat(['teamId']);
    }

    if(this.data[0].lgId){
      columns = columns.concat(['lgId']);
    }

    if(this.data[0].avg !== null){
      columns = columns.concat(['avg']);
    }

    if(this.data[0].slg !== null){
      columns = columns.concat(['slg']);
    }

    if(this.data[0].obp !== null){
      columns = columns.concat(['obp']);
    }

    if(this.data[0].ops !== null){
      columns = columns.concat(['ops']);
    }

    if(this.data[0].iso !== null){
      columns = columns.concat(['iso']);
    }

    if(this.data[0].babip !== null){
      columns = columns.concat(['babip']);
    }

    if(this.data[0].bbRate !== null){
      columns = columns.concat(['bbRate']);
    }

    if(this.data[0].kRate !== null){
      columns = columns.concat(['kRate']);
    }

    return columns;
  }
}
