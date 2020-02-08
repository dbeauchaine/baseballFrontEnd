import { TestBed } from '@angular/core/testing';
import { PlayerService } from './player.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Player } from './player';

describe('PlayerService', () => {
    let httpMock: HttpTestingController;
    let service: PlayerService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PlayerService],
            imports: [HttpClientTestingModule],
        });

        httpMock = TestBed.get(HttpTestingController);
        service = TestBed.get(PlayerService);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('getting player information.', () => {
        it('returned object should match mock data', () => {
            const mockPlayer = {
                nameFirst: 'firstName',
                nameLast: 'lastName',
                playerId: 'id'
            };

            service.getPlayer(mockPlayer.playerId)
                .subscribe((data: Player) => {
                    expect(data.playerId).toEqual(mockPlayer.playerId);
                    expect(data.nameFirst).toEqual(mockPlayer.nameFirst);
                    expect(data.nameLast).toEqual(mockPlayer.nameLast);
                });

            const req = httpMock.expectOne(
                `${environment.baseUrl}/player/id`
            );

            expect(req.request.method).toEqual('GET');

            req.flush(mockPlayer);
        });
    });

});
