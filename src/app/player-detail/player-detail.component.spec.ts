import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerDetailComponent } from './player-detail.component';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../player.service';
import { of } from 'rxjs';
import { Player } from '../player';

describe('PlayerDetailComponent', () => {
    let component: PlayerDetailComponent;
    let fixture: ComponentFixture<PlayerDetailComponent>;
    let mockPlayerService: PlayerService;

    let fakePlayer = createFakePlayer();


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PlayerDetailComponent],
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
                    }
                }

            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlayerDetailComponent);
        mockPlayerService = TestBed.get(PlayerService);
        component = fixture.componentInstance;

    });

    it('should display player name', () => {
        spyOn(mockPlayerService, 'getPlayer').and.callFake(idUsedToGetPlayer => {
            expect(idUsedToGetPlayer).toEqual(fakePlayer.playerId);
            return of(fakePlayer);
        });

        fixture.detectChanges();

        const compiled = fixture.debugElement.nativeElement;

        expect(compiled.textContent).toContain(`Player name: ${fakePlayer.nameFirst}`);
    });

    function createFakePlayer(): Player {
        let fakePlayer = new Player();
        fakePlayer.playerId = 'expectedPlayerId';
        fakePlayer.nameFirst = 'expected name';

        return fakePlayer;
    }
});
