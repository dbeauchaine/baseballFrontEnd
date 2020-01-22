import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team-list-element',
  templateUrl: './team-list-element.component.html',
  styleUrls: ['./team-list-element.component.sass']
})
export class TeamListElementComponent implements OnInit {
  @Input() teams: Map<string,string>;
  constructor() { }

  ngOnInit() {
  }

}
