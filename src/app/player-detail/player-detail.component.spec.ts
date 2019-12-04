import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerDetailComponent } from './player-detail.component';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../player.service';
import { of } from 'rxjs';
import { Player } from '../player';
import { MatCardModule } from '@angular/material/card';
import { LabelValueComponent } from '../label-value/label-value.component';
import { By } from '@angular/platform-browser';

describe('PlayerDetailComponent', () => {
    let component: PlayerDetailComponent;
    let fixture: ComponentFixture<PlayerDetailComponent>;
    let mockPlayerService: PlayerService;

    let fakePlayer = createFakePlayer();


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
});
