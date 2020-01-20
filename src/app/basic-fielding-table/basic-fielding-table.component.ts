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

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  goToPlayer(row){
    this.router.navigateByUrl(`player/${row.playerId}`);
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

    if(this.data[0].g){
      columns = columns.concat(['g']);
    }

    if(this.data[0].gs){
      columns = columns.concat(['gs']);
    }

    if(this.data[0].innOuts){
      columns = columns.concat(['innOuts']);
    }

    if(this.data[0].po){
      columns = columns.concat(['po']);
    }

    if(this.data[0].a){
      columns = columns.concat(['a']);
    }

    if(this.data[0].e){
      columns = columns.concat(['e']);
    }

    if(this.data[0].dp){
      columns = columns.concat(['dp']);
    }

    if(this.data[0].zr){
      columns = columns.concat(['zr']);
    }

    if(this.data[0].wp){
      columns = columns.concat(['wp']);
    }

    if(this.data[0].sb){
      columns = columns.concat(['sb']);
    }

    if(this.data[0].cs){
      columns = columns.concat(['cs']);
    }

    return columns;
  }
}
