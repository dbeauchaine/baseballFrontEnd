import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.sass']
})
export class TeamListComponent implements OnInit {
  alEast:Map<string,string>;
  alCentral:Map<string,string>;
  alWest:Map<string,string>;
  nlEast:Map<string,string>;
  nlCentral:Map<string,string>;
  nlWest:Map<string,string>;
  constructor() { }

  ngOnInit() {
    this.generateTeamMaps();
  }

  generateTeamMaps() {
   this.alEast = new Map<string,string>([
     ["NYA","New York Yankees"],
     ["BOS","Boston Red Sox"],
     ["TBA","Tampa Bay Rays"],
     ["TOR", "Toronto Blue Jays"],
     ["BAL", "Baltimore Orioles"]
    ]);

    this.alCentral = new Map<string,string>([
      ["MIN","Minnesota Twins"],
      ["CLE","Cleveland Indians"],
      ["CHA","Chicago White Sox"],
      ["KCA", "Kansas City Royals"],
      ["DET", "Detroit Tigerss"]
     ]);

     this.alWest = new Map<string,string>([
      ["HOU","Houston Astros"],
      ["OAK","Oakland Athletics"],
      ["TEX","Texas Rangers"],
      ["LAA", "Los Angeles Angels"],
      ["SEA", "Seattle Mariners"]
     ]);

     this.nlEast = new Map<string,string>([
      ["ATL","Atlanta Braves"],
      ["WAS","Washington Nationals"],
      ["NYN","New York Mets"],
      ["PHI", "Philadelphia Phillies"],
      ["MIA", "Miami Marlins"]
     ]);
     
     this.nlCentral = new Map<string,string>([
      ["SLN","St. Louis Cardinals"],
      ["MIL"," Milwaukee Brewers"],
      ["CHN","Chicago Cubs"],
      ["CIN", "Cincinnati Reds"],
      ["PIT", "Pittsburgh Pirates"]
     ]);

     this.nlWest = new Map<string,string>([
      ["LAN","Los Angeles Dodgers"],
      ["ARI","Arizona Diamondbacks"],
      ["SFN","San Francisco Giants"],
      ["COL", "Colorado Rockies"],
      ["SDN", "San Diego Padres"]
     ]);
  }
}
