import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Batting } from '../batting';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { Player } from '../player';

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
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  goToPlayer(row:Player){
    this.router.navigateByUrl(`player/${row.playerId}`);
  }

  generateDisplayedColumns(): string[] {
    let columns:string[] = ['yearId']; 
    
    if(this.data[0].nameFirst){
      columns = columns.concat(['nameFirst','nameLast'])
    }
    if(this.data[0].teamId){
      columns = columns.concat(['teamId'])
    }
    if(this.data[0].lgId){
    columns = columns.concat(['lgId']);
    }
    if (this.data[0].round) {
      columns = columns.concat('round');
    }
    if (this.data[0].g) {
      columns = columns.concat('g');
    }
    if (this.data[0].ab) {
      columns = columns.concat('ab');
    }
    if (this.data[0].r) {
      columns = columns.concat('r');
    }
    if (this.data[0].h) {
      columns = columns.concat('h');
    }
    if (this.data[0].singles) {
      columns = columns.concat('singles');
    }
    if (this.data[0].x2b) {
      columns = columns.concat('x2b');
    }
    if (this.data[0].x3b) {
      columns = columns.concat('x3b');
    }
    if (this.data[0].hr) {
      columns = columns.concat('hr');
    }
    if (this.data[0].rbi) {
      columns = columns.concat('rbi');
    }
    if (this.data[0].sb) {
      columns = columns.concat('cs');
    }
    if (this.data[0].cs) {
      columns = columns.concat('cs');
    }
    if (this.data[0].bb) {
      columns = columns.concat('bb');
    }
    if (this.data[0].so) {
      columns = columns.concat('so');
    }
    if (this.data[0].ibb) {
      columns = columns.concat('ibb');
    }
    if (this.data[0].hbp) {
      columns = columns.concat('hbp');
    }
    if (this.data[0].sh) {
      columns = columns.concat('sh');
    }
    if (this.data[0].sf) {
      columns = columns.concat('sf');
    }
    if (this.data[0].gidp) {
      columns = columns.concat('gidp');
    }
      return columns;
  }

}
