import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-year-select',
  templateUrl: './year-select.component.html',
  styleUrls: ['./year-select.component.sass']
})
export class YearSelectComponent implements OnInit {
  public validYears: string[];
  public default:string;
  public year:number;
  @Output() yearChange:EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.default = '2018';
    this.year = Number(this.default);
    this.validYears = this.generateValidYears();
  }
  
  generateValidYears(): string[] {
    const validDates = new Array();
    for (let i = 2018; i > 1871; i--) {
      validDates.push(i.toString());
    }
    return validDates;
  }

  public onChange(event): void {
    this.year = Number(event.value);
    this.yearChange.emit(this.year);
  }

}
