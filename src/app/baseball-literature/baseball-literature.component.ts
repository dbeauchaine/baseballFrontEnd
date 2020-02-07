import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-baseball-literature',
  templateUrl: './baseball-literature.component.html',
  styleUrls: ['./baseball-literature.component.sass']
})
export class BaseballLiteratureComponent implements OnInit {

  constructor(private titleService: Title,) { }

  ngOnInit() {
    this.titleService.setTitle(`Econometric Analysis of Player Salary`);
  }

}
