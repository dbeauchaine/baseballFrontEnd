import { async, ComponentFixture, TestBed, flush, fakeAsync } from '@angular/core/testing';
import { PlayerDetailComponent } from './player-detail.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { LabelValueComponent } from '../label-value/label-value.component';
import {
    MatTableModule, MatSortModule, MatFormFieldModule,
    MatToolbarModule, MatButtonModule, MatMenuModule,
    MatInputModule, MatTabsModule, MatDividerModule,
    MatExpansionModule, MatIconModule, MatTooltipModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatOptionModule,
} from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TopMenuComponent } from '../top-menu/top-menu.component';
import { PlayerService } from '../player.service';
import { Player } from '../player';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BattingService } from '../batting.service';
import { Batting } from '../batting';
import { Fielding } from '../fielding';
import { Pitching } from '../pitching';
import { FieldingService } from '../fielding.service';
import { PitchingService } from '../pitching.service';
import { BasicBattingTableComponent } from '../basic-batting-table/basic-batting-table.component';
import { AdvancedBattingTableComponent } from '../advanced-batting-table/advanced-batting-table.component';
import { BasicPitchingTableComponent } from '../basic-pitching-table/basic-pitching-table.component';
import { BasicFieldingTableComponent } from '../basic-fielding-table/basic-fielding-table.component';
import { PlayerSearchComponent } from '../player-search/player-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BattingPost } from '../battingPost';
import { toBase64String } from '@angular/compiler/src/output/source_map';


describe('PlayerDetailComponent', () => {
    let component: PlayerDetailComponent;
    let fixture: ComponentFixture<PlayerDetailComponent>;
    let mockPlayerService: PlayerService;
    let mockBattingService: BattingService;
    let mockFieldingService: FieldingService;
    let mockPitchingService: PitchingService;
    const fakePlayer = createFakePlayer();
    const fakeBatting = createFakeBatting();
    const fakeFielding = createFakeFielding();
    const fakePitching = createFakePitching();
    const fakeBattingPost = createFakeBattingPost();

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                MatTabsModule,
                MatCardModule,
                MatButtonModule,
                MatMenuModule,
                MatToolbarModule,
                MatFormFieldModule,
                MatInputModule,
                MatTableModule,
                MatPaginatorModule,
                MatSortModule,
                NoopAnimationsModule,
                MatDividerModule,
                MatExpansionModule,
                MatIconModule,
                MatTooltipModule,
                MatFormFieldModule,
                ReactiveFormsModule,
                MatAutocompleteModule,
                MatProgressSpinnerModule,
                MatOptionModule,
                RouterTestingModule
            ],

            declarations: [
                PlayerDetailComponent,
                LabelValueComponent,
                MockBioInfoComponent,
                TopMenuComponent,
                BasicBattingTableComponent,
                AdvancedBattingTableComponent,
                BasicPitchingTableComponent,
                BasicFieldingTableComponent,
                MockDataTableComponent,
                PlayerSearchComponent,
            ],

            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: {
                        paramMap: of(new Map([['id', fakePlayer.playerId]]))
                    }
                },

                {
                    provide: PlayerService,
                    useValue:
                        {
                            getPlayer(id: string) {
                                expect(id).toEqual(fakePlayer.playerId);
                                return of(fakePlayer);
                            }
                        } as PlayerService,
                },

                {
                    provide: BattingService,
                    useValue:
                        {
                            getBattingStats(id: string) {
                                expect(id).toEqual(fakeBatting[0].playerId);
                                return of(fakeBatting);
                            },

                            getBattingPostStats(id: string) {
                                expect(id).toEqual(fakeBatting[0].playerId);
                                return of(fakeBattingPost);
                            }
                        } as BattingService,
                },

                {
                    provide: FieldingService,
                    useValue:
                        {
                            getFieldingStats(id: string) {
                                expect(id).toEqual(fakeFielding[0].playerId);
                                return of(fakeFielding);
                            }
                        } as FieldingService,
                },

                {
                    provide: PitchingService,
                    useValue:
                        {
                            getPitchingStats(id: string) {
                                expect(id).toEqual(fakePitching[0].playerId);
                                return of(fakePitching);
                            }
                        } as PitchingService,
                },

            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlayerDetailComponent);
        mockPlayerService = TestBed.get(PlayerService);
        mockBattingService = TestBed.get(BattingService);
        mockFieldingService = TestBed.get(FieldingService);
        mockPitchingService = TestBed.get(PitchingService);
        component = fixture.componentInstance;
    });

    it('should return player and pass it to bio-info', () => {
        fixture.detectChanges();

        const bioInfoComponent = fixture.debugElement.query(By.css('app-bio-info'));

        expect(bioInfoComponent.componentInstance.player).toEqual(fakePlayer);
    });

    it('should pass stats to table', fakeAsync(() => {
        fixture.detectChanges();

        checkTable("Batting Statistics","Regular Season Box Stats", ".basic-batting-table", fakeBatting);

        checkTable("Batting Statistics","Regular Season Advanced Stats", ".advanced-batting-table", fakeBatting);
    
        checkTable("Pitching Statistics", "Regular Season Stats", ".basic-pitching-table", fakePitching);

        checkTable("Fielding Statistics", "Regular Season Stats", ".basic-fielding-table", fakeFielding);
    }));

    function checkTable(expansionLabel: string, tabLabel: string, className: string, expectedData: any) {
        clickExpansion(expansionLabel);
        clickTab(tabLabel);

        const tableComponent = fixture.debugElement.query(By.css(className));
        expect(tableComponent.componentInstance.data).toEqual(expectedData);
    }

    function clickTab(label: string) {
        const tabs = fixture.debugElement.queryAll(By.css('.mat-tab-label-content'));
        const tab = tabs.find(item => {
            return item.nativeElement.textContent == label;
        });

        tab.nativeElement.click();

        //workaround for async material tab behavior
        fixture.detectChanges();
        flush();
        fixture.detectChanges();
    }

    function clickExpansion(label: string) {
        const expansions = fixture.debugElement.queryAll(By.css('.mat-expansion-panel-header-title'));
        const expansion = expansions.find(item => {
            return item.nativeElement.textContent == label;
        });

        expansion.nativeElement.click();

        //workaround for async material tab behavior
        fixture.detectChanges();
        flush();
        fixture.detectChanges();
    }

    function createFakePlayer(): Player {
        const player = new Player();
        player.playerId = 'id';
        player.nameFirst = 'expectedFirstName';
        player.nameLast = 'expectedLastName';

        return player;
    }

    function createFakeBatting(): Batting[] {
        const batting = new Batting();
        batting.playerId = 'id';
        batting.h = 20;
        batting.hr = 2;
        batting.avg = .242;
        return [batting];
    }

    function createFakeBattingPost(): BattingPost[] {
        const batting = new BattingPost();
        batting.playerId = 'id';
        batting.h = 20;
        batting.hr = 2;
        batting.avg = .242;
        return [batting];
    }

    function createFakeFielding(): Fielding[] {
        const fielding = new Fielding();
        fielding.playerId = 'id';
        fielding.e = 2;
        fielding.a = 20;

        return [fielding];
    }

    function createFakePitching(): Pitching[] {
        const pitching = new Pitching();
        pitching.playerId = 'id';
        pitching.w = 20;
        pitching.l = 10;

        return [pitching];
    }

    @Component({
        selector: 'app-bio-info',
        template: '',
    })
    class MockBioInfoComponent {
        @Input() player: Player;
    }

    @Component({
        selector: 'app-data-table',
        template: '',
    })
    class MockDataTableComponent {
        @Input() data: any;
        @Input() propertyToLabelMap: Map<string, string>;
    }

});
