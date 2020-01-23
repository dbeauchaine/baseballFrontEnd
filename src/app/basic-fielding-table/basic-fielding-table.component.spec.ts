import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFieldingTableComponent } from './basic-fielding-table.component';
import { MatCardModule, MatFormFieldModule, MatTableModule, MatTooltipModule, MatPaginatorModule, MatSortModule, MatInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Fielding } from '../fielding';

describe('BasicFieldingTableComponent', () => {
  let component: BasicFieldingTableComponent;
  let fixture: ComponentFixture<BasicFieldingTableComponent>;

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
        BasicFieldingTableComponent 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicFieldingTableComponent);
    component = fixture.componentInstance;
    component.data = createFakeFielding();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  function createFakeFielding(): Fielding[] {
    const fielding = new Fielding();
    fielding.playerId = 'expectedPlayerId';
    fielding.yearId = 1999;
    fielding.stint = 1;
    fielding.teamId = 'SEA';
    fielding.lgId = 'AL';
    fielding.pos = '1B';
    fielding.g = 100;
    fielding.gs = 99;
    fielding.innOuts = 1;
    fielding.po = 2;
    fielding.a = 3;
    fielding.e = 2;
    fielding.dp = 2;
    fielding.pb = 1;
    fielding.wp = 1;
    fielding.sb = 10;
    fielding.cs = 5;
    fielding.zr = 2;


    const fakeFielding: Array<Fielding> = [fielding];

    return fakeFielding;
}
});
