import { browser, by, element } from 'protractor';
import { clearLine } from 'readline';

export class BattingLeaderboard {

  navigateTo() {
    return browser.get('/batting-leaderboard/2018') as Promise<any>;
  }

  getTitleText() {
    return element(by.css('.mat-card-title')).getText() as Promise<string>;
  }

  getRegularSeasonBoxTable(){
    element.all(by.css('.mat-tab-label')).get(0).click();
    return new DataTable('.basic-batting-table');
  }

  getRegularSeasonAdvancedTable(){
    element.all(by.css('.mat-tab-label')).get(1).click();
    return new DataTable('.advanced-batting-table');
  }
  
  getPostSeasonBoxTable(){
    element.all(by.css('mat-expansion-panel')).get(1).click();
    element.all(by.css('.mat-tab-label')).get(2).click();
    return new DataTable('.post-basic-batting-table');
  }
}

export class DataTable{
  tableSelector:string;

  constructor(tableSelector:string){
    this.tableSelector = tableSelector;
  }

  getCellContent(column:string, row:number){
    return element(by.css(this.tableSelector))
    .all(by.css(`.mat-column-${column}`))
    .get(row).getText();
  }
}