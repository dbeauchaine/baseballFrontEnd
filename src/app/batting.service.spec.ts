import { TestBed } from '@angular/core/testing';

import { BattingService } from './batting.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('BattingService', () => {
    let httpMock: HttpTestingController;
    let service: BattingService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [BattingService],
            imports: [HttpClientTestingModule],
        });

        httpMock = TestBed.get(HttpTestingController);
        service = TestBed.get(BattingService);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('Getting Batting Data', () => {
        it('returned data should match mock data', () => {
            const mockBatting = {
                playerId: 'id',
                ab: 20,
                hr: 1
            }

            service.getBattingStats(mockBatting.playerId)
                .subscribe(data => {
                    expect(data[0].playerId).toEqual(mockBatting.playerId);
                    expect(data[0].ab).toEqual(mockBatting.ab);
                    expect(data[0].hr).toEqual(mockBatting.hr);
                });

            const req = httpMock.expectOne(
                `https://localhost:5001/batting/id`
            );

            expect(req.request.method).toEqual('GET');

            req.flush(mockBatting);
        });
    });
});
