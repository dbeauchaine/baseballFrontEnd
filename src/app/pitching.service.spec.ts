import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PitchingService } from './pitching.service';

describe('PitchingService', () => {
    let httpMock: HttpTestingController;
    let service: PitchingService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PitchingService],
            imports: [HttpClientTestingModule],
        });

        httpMock = TestBed.get(HttpTestingController);
        service = TestBed.get(PitchingService);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('Getting Pitching Data', () => {
        it('returned data should match mock data', () => {
            const mockPitching = {
                playerId: 'id',
                w: 20,
                hr: 1
            }

            service.getPitchingStats(mockPitching.playerId)
                .subscribe(data => {
                    expect(data[0].playerId).toEqual(mockPitching.playerId);
                    expect(data[0].w).toEqual(mockPitching.w);
                    expect(data[0].hr).toEqual(mockPitching.hr);
                });

            const req = httpMock.expectOne(
                `https://localhost:5001/pitching/${mockPitching.playerId}`
            );

            expect(req.request.method).toEqual('GET');

            req.flush([mockPitching]);
        });
    });
});
