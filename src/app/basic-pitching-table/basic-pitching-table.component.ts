import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Pitching } from '../pitching';

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

    if(this.data[0].teamId){
      columns = columns.concat(['teamId'])
    }

    if(this.data[0].lgId){
      columns = columns.concat(['lgId'])
    }

    if(typeof(this.data[0].era) !== 'undefined'){
      columns = columns.concat(['era'])
    }

    if(typeof(this.data[0].w) !== 'undefined'){
      columns = columns.concat(['w'])
    }

    if(typeof(this.data[0].l) !== 'undefined'){
      columns = columns.concat(['l'])
    }

    if(typeof(this.data[0].g) !== 'undefined'){
      columns = columns.concat(['g'])
    }

    if(typeof(this.data[0].gs) !== 'undefined'){
      columns = columns.concat(['gs'])
    }

    if(typeof(this.data[0].cg) !== 'undefined'){
      columns = columns.concat(['cg'])
    }

    if(typeof(this.data[0].sho) !== 'undefined'){
      columns = columns.concat(['sho'])
    }

    if(typeof(this.data[0].sv) !== 'undefined'){
      columns = columns.concat(['sv'])
    }

    if(typeof(this.data[0].ipouts) !== 'undefined'){
      columns = columns.concat(['ipouts'])
    }

    if(typeof(this.data[0].h) !== 'undefined'){
      columns = columns.concat(['h'])
    }
    
    if(typeof(this.data[0].er) !== 'undefined'){
      columns = columns.concat(['er'])
    }

    if(typeof(this.data[0].hr) !== 'undefined'){
      columns = columns.concat(['hr'])
    }

    if(typeof(this.data[0].bb) !== 'undefined'){
      columns = columns.concat(['bb'])
    }

    if(typeof(this.data[0].so) !== 'undefined'){
      columns = columns.concat(['so'])
    }

    if(typeof(this.data[0].baopp) !== 'undefined'){
      columns = columns.concat(['baopp'])
    }

    if(typeof(this.data[0].ibb) !== 'undefined'){
      columns = columns.concat(['ibb'])
    }

    if(typeof(this.data[0].wp) !== 'undefined'){
      columns = columns.concat(['wp'])
    }

    if(typeof(this.data[0].hbp) !== 'undefined'){
      columns = columns.concat(['hbp'])
    }

    if(typeof(this.data[0].bk) !== 'undefined'){
      columns = columns.concat(['bk'])
    }

    if(typeof(this.data[0].bfp) !== 'undefined'){
      columns = columns.concat(['bfp'])
    }

    if(typeof(this.data[0].r) !== 'undefined'){
      columns = columns.concat(['r'])
    }

    if(typeof(this.data[0].sh) !== 'undefined'){
      columns = columns.concat(['sh'])
    }

    if(typeof(this.data[0].sf) !== 'undefined'){
      columns = columns.concat(['sf'])
    }

    if(typeof(this.data[0].gidp) !== 'undefined'){
      columns = columns.concat(['gidp'])
    }
    
    return columns;
  }
}
