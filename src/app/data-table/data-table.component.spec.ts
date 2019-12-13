import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataTableComponent } from './data-table.component';
import { BattingService } from '../batting.service';
import { of } from 'rxjs';
import { Batting } from '../batting';
import { ActivatedRoute } from '@angular/router';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BattingTableComponent', () => {
    let component: DataTableComponent;
    let fixture: ComponentFixture<DataTableComponent>;
    let mockBattingService: BattingService;
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
                        getBattingStats: function()
                        {
                        }
                    },
                }
            ]

        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DataTableComponent);
        mockBattingService = TestBed.get(BattingService);
        component = fixture.componentInstance;
    });

    it('should return batting', () => {
        spyOn(mockBattingService, 'getBattingStats').and.callFake(idUsedToGetBatting => {
            expect(idUsedToGetBatting).toEqual(fakeBatting[0].playerId);
            return of(fakeBatting);
        });

        fixture.detectChanges();
    });

    function createFakeBatting(): Batting[] {
        let fakeBatting = new Batting();
        fakeBatting.playerId = 'expectedPlayerId';
        fakeBatting.yearId = 1999;
        fakeBatting.stint = 1;
        fakeBatting.teamId = "SEA";
        fakeBatting.lgId = "AL";
        fakeBatting.g = 100;
        fakeBatting.gBatting = 99;
        fakeBatting.ab = 99;
        fakeBatting.r = 50;
        fakeBatting.h = 20;
        fakeBatting.x2b = 10;
        fakeBatting.x3b = 3;
        fakeBatting.hr = 20;
        fakeBatting.rbi = 40;
        fakeBatting.sb = 10;
        fakeBatting.cs = 5;
        fakeBatting.bb = 20;
        fakeBatting.so = 25;
        fakeBatting.ibb = 1;
        fakeBatting.hbp = 1;
        fakeBatting.sh = 3;
        fakeBatting.sf = 2;
        fakeBatting.gidp = 1;

        let fakeBattings: Array<Batting> = [fakeBatting];

        return fakeBattings;
    }
});
