import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicBattingTableComponent } from './basic-batting-table.component';
import { Batting } from '../batting';
import { MatCardModule, MatFormFieldModule, MatTableModule, MatTooltipModule, MatPaginatorModule, MatSortModule, MatInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('BasicBattingTableComponent', () => {
  let component: BasicBattingTableComponent;
  let fixture: ComponentFixture<BasicBattingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatFormFieldModule,
        MatTableModule,
        MatTooltipModule,
        MatPaginatorModule,
        MatSortModule,
        MatInputModule,
        NoopAnimationsModule
      ],
      declarations: [ 
        BasicBattingTableComponent 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicBattingTableComponent);
    component = fixture.componentInstance;
    component.data = createFakeBatting();
  });

  it('should create', () => {
    fixture.detectChanges();
    const headers = fixture.debugElement.queryAll(By.css('mat-header-cell'));
    headers.forEach(header =>{
      expect(component.displayedColumns.includes(header.componentInstance));
    });
  });

  function createFakeBatting(): Batting[] {
    const batting = new Batting();
    batting.playerId = 'expectedPlayerId';
    batting.yearId = 1999;
    batting.stint = 1;
    batting.teamId = 'SEA';
    batting.lgId = 'AL';
    batting.g = 100;
    batting.gBatting = 99;
    batting.ab = 99;
    batting.r = 50;
    batting.h = 20;
    batting.x2b = 10;
    batting.x3b = 3;
    batting.hr = 20;
    batting.rbi = 40;
    batting.sb = 10;
    batting.cs = 5;
    batting.bb = 20;
    batting.so = 25;
    batting.ibb = 1;
    batting.hbp = 1;
    batting.sh = 3;
    batting.sf = 2;
    batting.gidp = 1;

    const fakeBattings: Array<Batting> = [batting];

    return fakeBattings;
}
});
