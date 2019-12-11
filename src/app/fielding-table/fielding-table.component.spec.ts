import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FieldingTableComponent } from './fielding-table.component';
import { FieldingService } from '../fielding.service';
import { Fielding } from '../fielding';

describe('FieldingTableComponent', () => {
    let component: FieldingTableComponent;
    let fixture: ComponentFixture<FieldingTableComponent>;
    let mockFieldingService: FieldingService;
    const fakeFielding = createFakeFielding();

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
                FieldingTableComponent
            ],

            providers: [
                {
                    provide: FieldingService,
                    useValue:
                    {
                        getFieldingStats: function()
                        {
                        }
                    },
                }
            ]

        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FieldingTableComponent);
        mockFieldingService = TestBed.get(FieldingService);
        component = fixture.componentInstance;
        component.id = fakeFielding[0].playerId;
    });

    it('should return fielding', () => {
        spyOn(mockFieldingService, 'getFieldingStats').and.callFake(idUsedToGetFielding => {
            expect(idUsedToGetFielding).toEqual(fakeFielding[0].playerId);
            return of(fakeFielding);
        });

        fixture.detectChanges();
    });

    function createFakeFielding(): Fielding[] {
        let fakeFielding = new Fielding();
        fakeFielding.playerId = 'expectedPlayerId';
        fakeFielding.yearId = 1999;
        fakeFielding.stint = 1;
        fakeFielding.teamId = "SEA";
        fakeFielding.lgId = "AL";
        fakeFielding.pos = "C";
        fakeFielding.g = 100;
        fakeFielding.gs = 99;
        fakeFielding.innOuts = 99;
        fakeFielding.po = 50;
        fakeFielding.a = 20;
        fakeFielding.e = 10;
        fakeFielding.dp = 3;
        fakeFielding.pb = 20;
        fakeFielding.wp = 40;
        fakeFielding.sb = 10;
        fakeFielding.cs = 5;
        fakeFielding.zr = 20;

        let fakeFieldings: Array<Fielding> = [fakeFielding];

        return fakeFieldings;
    }
});
