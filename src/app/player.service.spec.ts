import { TestBed } from '@angular/core/testing';

import { PlayerService } from './player.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

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
        it('returned object should match mock data',() => {
            const mockPlayer = {
                nameFirst: 'firstName',
                nameLast: 'lastName',
                playerId: 'id'
            }

            service.getPlayer(mockPlayer.playerId)
                .subscribe(data => {
                    expect(data[0].playerId).toEqual(mockPlayer.playerId);
                    expect(data[0].nameFirst).toEqual(mockPlayer.nameFirst);
                    expect(data[0].nameLast).toEqual(mockPlayer.nameLast);
                });

            const req = httpMock.expectOne(
                `https://localhost:5001/player/id`
            );

            expect(req.request.method).toEqual('GET');

            req.flush(mockPlayer);
        });
    });

});
