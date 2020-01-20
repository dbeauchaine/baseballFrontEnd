import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Pitching } from '../pitching';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

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

  goToPlayer(row) {
    this.router.navigateByUrl(`player/${row.playerId}`);
  }

  generateDisplayedColumns(): string[] {
    let columns: string[] = ['yearId'];

    if(this.data[0].teamId){
      columns = columns.concat(['teamId'])
    }

    if(this.data[0].lgId){
      columns = columns.concat(['lgId'])
    }

    if(this.data[0].era !== null){
      columns = columns.concat(['era'])
    }

    if(this.data[0].w !== null){
      columns = columns.concat(['w'])
    }

    if(this.data[0].l !== null){
      columns = columns.concat(['l'])
    }

    if(this.data[0].g !== null){
      columns = columns.concat(['g'])
    }

    if(this.data[0].gs !== null){
      columns = columns.concat(['gs'])
    }

    if(this.data[0].cg !== null){
      columns = columns.concat(['cg'])
    }

    if(this.data[0].sho !== null){
      columns = columns.concat(['sho'])
    }

    if(this.data[0].sv !== null){
      columns = columns.concat(['sv'])
    }

    if(this.data[0].ipouts !== null){
      columns = columns.concat(['ipouts'])
    }

    if(this.data[0].h !== null){
      columns = columns.concat(['h'])
    }
    
    if(this.data[0].er !== null){
      columns = columns.concat(['er'])
    }

    if(this.data[0].hr !== null){
      columns = columns.concat(['hr'])
    }

    if(this.data[0].bb !== null){
      columns = columns.concat(['bb'])
    }

    if(this.data[0].so !== null){
      columns = columns.concat(['so'])
    }

    if(this.data[0].baopp !== null){
      columns = columns.concat(['baopp'])
    }

    if(this.data[0].ibb !== null){
      columns = columns.concat(['ibb'])
    }

    if(this.data[0].wp !== null){
      columns = columns.concat(['wp'])
    }

    if(this.data[0].hbp !== null){
      columns = columns.concat(['hbp'])
    }

    if(this.data[0].bk !== null){
      columns = columns.concat(['bk'])
    }

    if(this.data[0].bfp !== null){
      columns = columns.concat(['bfp'])
    }

    if(this.data[0].r !== null){
      columns = columns.concat(['r'])
    }

    if(this.data[0].sh !== null){
      columns = columns.concat(['sh'])
    }

    if(this.data[0].sf !== null){
      columns = columns.concat(['sf'])
    }

    if(this.data[0].gidp !== null){
      columns = columns.concat(['gidp'])
    }
    
    return columns;
  }
}
