import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerDetailComponent } from './player-detail.component';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../player.service';
import { of } from 'rxjs';
import { Player } from '../player';
import { MatCardModule } from '@angular/material/card';
import { LabelValueComponent } from '../label-value/label-value.component';
import { By } from '@angular/platform-browser';
import { BattingService } from '../batting.service';
import { Batting } from '../batting';

describe('PlayerDetailComponent', () => {
    let component: PlayerDetailComponent;
    let fixture: ComponentFixture<PlayerDetailComponent>;
    let mockPlayerService: PlayerService;
    let mockBattingService: BattingService;

    let fakePlayer = createFakePlayer();
    let fakeBatting = createFakeBatting();

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MatCardModule],
            declarations: [PlayerDetailComponent, LabelValueComponent],
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
                        getPlayer:
                        {
                        }
                    },
                },
                {
                    provide: BattingService,
                    useValue:
                    {
                        getBattingStats:
                        {
                        }
                    },
                }

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

    it('should display player name', () => {
        spyOn(mockPlayerService, 'getPlayer').and.callFake(idUsedToGetPlayer => {
            expect(idUsedToGetPlayer).toEqual(fakePlayer.playerId);
            return of(fakePlayer);
        });

        spyOn(mockBattingService, 'getBattingStats').and.callFake(idUsedToGetPlayer => {
            expect(idUsedToGetPlayer).toEqual(fakeBatting[0].playerId);
            return of(fakeBatting);
        });

        fixture.detectChanges();

        const titleElement = fixture.debugElement.query(By.css("mat-card-title"));

        expect(titleElement.nativeElement.textContent).toEqual(`${fakePlayer.nameFirst} ${fakePlayer.nameLast}`);
    });

    function createFakePlayer(): Player {
        let fakePlayer = new Player();
        fakePlayer.playerId = 'expectedPlayerId';
        fakePlayer.nameFirst = 'expectedFirstName';
        fakePlayer.nameLast = 'expectedLastName';

        return fakePlayer;
    }

    function createFakeBatting(): Batting[] {
        let fakeBatting = new Batting();
        fakeBatting.playerId = 'expectedPlayerId';
        fakeBatting.ab = 99;
        fakeBatting.hr = 20;
        let fakeBattings: Array<Batting> = [fakeBatting];

        return fakeBattings;
    }
});
