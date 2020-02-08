import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FieldingService } from './fielding.service';
import { environment } from 'src/environments/environment';

describe('Fielding Service', () => {
    let httpMock: HttpTestingController;
    let service: FieldingService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [FieldingService],
            imports: [HttpClientTestingModule],
        });

        httpMock = TestBed.get(HttpTestingController);
        service = TestBed.get(FieldingService);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('Getting Fielding Data', () => {
        it('returned data should match mock data', () => {
            const mockFielding = {
                playerId: 'id',
                pos: 'c',
                e: 1
            };

            service.getFieldingStats(mockFielding.playerId)
                .subscribe(data => {
                    expect(data[0].playerId).toEqual(mockFielding.playerId);
                    expect(data[0].pos).toEqual(mockFielding.pos);
                    expect(data[0].e).toEqual(mockFielding.e);
                });

            const req = httpMock.expectOne(
                `${environment.baseUrl}/fielding/${mockFielding.playerId}`
            );

            expect(req.request.method).toEqual('GET');

            req.flush([mockFielding]);
        });
    });
});
