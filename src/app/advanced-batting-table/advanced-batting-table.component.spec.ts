import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedBattingTableComponent } from './advanced-batting-table.component';
import { MatCardModule, MatFormFieldModule, MatTableModule, MatTooltipModule, MatPaginatorModule, MatSortModule, MatInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BasicBattingTableComponent } from '../basic-batting-table/basic-batting-table.component';
import { Batting } from '../batting';

describe('AdvancedBattingTableComponent', () => {
  let component: AdvancedBattingTableComponent;
  let fixture: ComponentFixture<AdvancedBattingTableComponent>;

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
        AdvancedBattingTableComponent 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedBattingTableComponent);
    component = fixture.componentInstance;
    component.data = createFakeBatting();

  });

  it('should render proper headerss', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
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
    batting.avg = 0.324;
    batting.slg = 0.300;
    batting.ops = 0.628;
    batting.obp = 0.328;
    batting.singles = 30;
    batting.pa = 200;
    batting.iso = .293;
    batting.kRate = .200;
    batting.bbRate = .429;
    batting.babip = .302;

    const fakeBattings: Array<Batting> = [batting];

    return fakeBattings;
}
});
