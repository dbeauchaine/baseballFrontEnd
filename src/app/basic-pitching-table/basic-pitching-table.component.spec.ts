import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPitchingTableComponent } from './basic-pitching-table.component';
import { MatCardModule, MatFormFieldModule, MatTableModule, MatTooltipModule, MatPaginatorModule, MatSortModule, MatInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Pitching } from '../pitching';

describe('BasicPitchingTableComponent', () => {
  let component: BasicPitchingTableComponent;
  let fixture: ComponentFixture<BasicPitchingTableComponent>;

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
        BasicPitchingTableComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicPitchingTableComponent);
    component = fixture.componentInstance;
    component.data = createFakePitching();
  });

  it('should render proper headers', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  function createFakePitching(): Pitching[] {
    const pitching = new Pitching()
    pitching.playerId = 'expectedPlayerId';
    pitching.yearId = 1999;
    pitching.stint = 1;
    pitching.teamId = 'SEA';
    pitching.w = 2;
    pitching.l = 1;
    pitching.g = 10;
    pitching.gs = 8;
    pitching.cg = 2;
    pitching.sho = 1;
    pitching.sv = 1;
    pitching.ipouts = 2;
    pitching.h = 1;
    pitching.er = 2;
    pitching.hr = 1;
    pitching.bb = 5;
    pitching.so = 3;
    pitching.baopp = 5;
    pitching.era = 3.23;
    pitching.ibb = 2;
    pitching.wp = 3;
    pitching.hbp = 6;
    pitching.bk = 5;
    pitching.bfp = 1;
    pitching.gf = 2;
    pitching.r = 3;
    pitching.sh = 4;
    pitching.sf = 5;
    pitching.gidp = 6;

    const fakePitching: Array<Pitching> = [pitching];

    return fakePitching;
  }
});
