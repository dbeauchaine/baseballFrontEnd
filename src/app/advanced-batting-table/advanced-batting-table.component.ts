import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Batting } from '../batting';
import { MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advanced-batting-table',
  templateUrl: './advanced-batting-table.component.html',
  styleUrls: ['./advanced-batting-table.component.sass']
})
export class AdvancedBattingTableComponent implements OnInit {

  public displayedColumns: string[];
  public dataSource: MatTableDataSource<any>;
  @Input() data: any;
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

    if(this.data[0].nameFirst){
      columns = columns.concat(['nameFirst','nameLast']);
    }

    if(this.data[0].teamId){
      columns = columns.concat(['teamId']);
    }

    if(this.data[0].lgId){
      columns = columns.concat(['lgId']);
    }

    if(this.data[0].avg){
      columns = columns.concat(['avg']);
    }

    if(this.data[0].slg){
      columns = columns.concat(['slg']);
    }

    if(this.data[0].obp){
      columns = columns.concat(['obp']);
    }

    if(this.data[0].ops){
      columns = columns.concat(['ops']);
    }

    if(this.data[0].iso){
      columns = columns.concat(['iso']);
    }

    if(this.data[0].babip){
      columns = columns.concat(['babip']);
    }

    if(this.data[0].bbRate){
      columns = columns.concat(['bbRate']);
    }

    if(this.data[0].kRate){
      columns = columns.concat(['kRate']);
    }

    return columns;
  }
}
