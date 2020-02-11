import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataTableComponent } from './data-table.component';
import { BattingService } from '../batting.service';
import { of } from 'rxjs';
import { Batting } from '../batting';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule, MatTooltipModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { ColumnConfig } from '../columnConfig';

describe('DataTableComponent', () => {
    let component: DataTableComponent;
    let fixture: ComponentFixture<DataTableComponent>;
    const fakeBatting = createFakeBatting();

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                MatTableModule,
                MatPaginatorModule,
                MatSortModule,
                MatFormFieldModule,
                MatInputModule,
                MatTooltipModule,
                NoopAnimationsModule
            ],
            declarations: [
                DataTableComponent
            ],

            providers: [
                {
                    provide: BattingService,
                    useValue:
                    {
                        getBattingStats(idUsedToGetBatting) {
                            expect(idUsedToGetBatting).toEqual(fakeBatting[0].playerId);
                            return of(fakeBatting);
                        }
                    },
                }
            ]

        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DataTableComponent);
        component = fixture.componentInstance;
    });

    it('should contain batting data', () => {
        component.propertyToLabelMap = createFakePropertyToLabelMap();
        fixture.detectChanges();

        let headers = fixture.debugElement.queryAll(By.css('mat-header-cell'));
        let cells = fixture.debugElement.queryAll(By.css('mat-cell'));
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

    function createFakePropertyToLabelMap() : Map<string, ColumnConfig>{
        let propertyToLabelMap = new Map([
            ['playerId', { columnName: "Player Id" } ]
        ]);

        return propertyToLabelMap;
    }
});
