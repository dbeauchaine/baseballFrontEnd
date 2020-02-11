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
import { FieldingService } from '../fielding.service';
import { PitchingService } from '../pitching.service';
import { PlayerSearchComponent } from '../player-search/player-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import {FakeDataGenerator, TableChecker} from '../test-helpers.spec'


describe('PlayerDetailComponent', () => {
    let component: PlayerDetailComponent;
    let fixture: ComponentFixture<PlayerDetailComponent>;
    let fakeDataGenerator = new FakeDataGenerator();
    const fakePlayer = fakeDataGenerator.createFakePlayer();
    const fakeBatting = fakeDataGenerator.createFakeBatting();
    const fakeFielding = fakeDataGenerator.createFakeFielding();
    const fakePitching = fakeDataGenerator.createFakePitching();
    const fakeBattingPost = fakeDataGenerator.createFakeBattingPost();
    const fakeFieldingPost = fakeDataGenerator.createFakeFieldingPost();
    const fakePitchingPost = fakeDataGenerator.createFakePitchingPost();

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
                            },
                            getFieldingPostStats(id: string){
                                expect(id).toEqual(fakeFieldingPost[0].playerId);
                                return of(fakeFieldingPost);
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
                            },
                            getPitchingPostStats(id: string){
                                expect(id).toEqual(fakePitchingPost[0].playerId);
                                return of(fakePitchingPost);
                            }
                        } as PitchingService,
                },

            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlayerDetailComponent);
        component = fixture.componentInstance;
    });

    it('should return player and pass it to bio-info', () => {
        fixture.detectChanges();

        const bioInfoComponent = fixture.debugElement.query(By.css('app-bio-info'));

        expect(bioInfoComponent.componentInstance.player).toEqual(fakePlayer);
    });

    it('should pass stats to table', fakeAsync(() => {
        fixture.detectChanges();

        const tableChecker = new TableChecker(fixture);

        tableChecker.checkTable("Batting Statistics","Regular Season Box Stats", ".basic-batting-table", fakeBatting);

        tableChecker.checkTable("Batting Statistics","Regular Season Advanced Stats", ".advanced-batting-table", fakeBatting);

        tableChecker.checkTable("Batting Statistics","Post-Season Box Stats", ".basic-batting-post", fakeBattingPost);

        tableChecker.checkTable("Batting Statistics","Post-Season Advanced Stats", ".advanced-batting-post", fakeBattingPost);
    
        tableChecker.checkTable("Pitching Statistics", "Regular Season Stats", ".basic-pitching-table", fakePitching);

        tableChecker.checkTable("Pitching Statistics", "Post-Season Stats", ".basic-pitching-post", fakePitchingPost);

        tableChecker.checkTable("Fielding Statistics", "Regular Season Stats", ".basic-fielding-table", fakeFielding);
        
    }));

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
