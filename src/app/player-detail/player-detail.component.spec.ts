import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerDetailComponent } from './player-detail.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { LabelValueComponent } from '../label-value/label-value.component';
import { MatTableModule, MatSortModule, MatFormFieldModule,
    MatToolbarModule, MatButtonModule, MatMenuModule,
    MatInputModule, MatTabsModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BioInfoComponent } from '../bio-info/bio-info.component';
import { TopMenuComponent } from '../top-menu/top-menu.component';
import { PlayerService } from '../player.service';
import { Player } from '../player';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DataTableComponent } from '../data-table/data-table.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BattingService } from '../batting.service';
import { Batting } from '../batting';


describe('PlayerDetailComponent', () => {
    let component: PlayerDetailComponent;
    let fixture: ComponentFixture<PlayerDetailComponent>;
    let mockPlayerService: PlayerService;
    let mockBattingService: BattingService;
    const fakePlayer = createFakePlayer();

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
                NoopAnimationsModule
            ],

            declarations: [
                PlayerDetailComponent,
                LabelValueComponent,
                MockBioInfoComponent,
                TopMenuComponent,
                DataTableComponent,
            ],

            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: {
                        snapshot:
                        {
                            paramMap: new Map([['id', fakePlayer.playerId]])

                        }
                    }
                },

                {
                    provide: PlayerService,
                    useValue:
                    {
                        getPlayer() {
                        }
                    },
                },

            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlayerDetailComponent);
        mockPlayerService = TestBed.get(PlayerService);
        mockBattingService = TestBed.get(BattingService);
        component = fixture.componentInstance;
    });

    it('should return player and pass it to bio-info', () => {
        spyOn(mockPlayerService, 'getPlayer').and.callFake(idUsedToGetPlayer => {
            expect(idUsedToGetPlayer).toEqual(fakePlayer.playerId);
            return of(fakePlayer);
        });

        fixture.detectChanges();

        const bioInfoComponent = fixture.debugElement.query(By.css('app-bio-info'));
        expect(bioInfoComponent.componentInstance.player).toEqual(fakePlayer);
    });

    function createFakePlayer(): Player {
        const player = new Player();
        player.playerId = 'expectedPlayerId';
        player.nameFirst = 'expectedFirstName';
        player.nameLast = 'expectedLastName';

        return player;
    }

    @Component({
        selector: 'app-bio-info',
        template: '',
    })
    class MockBioInfoComponent {
        @Input() player: Player;
    }

});
