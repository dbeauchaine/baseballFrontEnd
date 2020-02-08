import { TestBed } from '@angular/core/testing';

import { TeamService } from './team.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

describe('TeamService', () => {
  let httpMock: HttpTestingController;
  let service: TeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [TeamService],
        imports: [HttpClientTestingModule],
    });

    httpMock = TestBed.get(HttpTestingController);
    service = TestBed.get(TeamService);
});

  afterEach(() => {
    httpMock.verify();
});

it('should be created', () => {
    expect(service).toBeTruthy();
});

describe('Getting Team Data', () => {
    it('gets team data from team service by id', () => {
        const mockTeam = {
            teamId: 'id',
            yearId: 2000,
            w: 20,
            hr: 1
        }

        service.getTeamStats(mockTeam.teamId)
            .subscribe(data => {
                expect(data[0].teamId).toEqual(mockTeam.teamId);
                expect(data[0].w).toEqual(mockTeam.w);
                expect(data[0].hr).toEqual(mockTeam.hr);
                expect(data[0].yearId).toEqual(mockTeam.yearId);
            });

        const req = httpMock.expectOne(
            `${environment.baseUrl}/team/${mockTeam.teamId}`
        );

        expect(req.request.method).toEqual('GET');

        req.flush([mockTeam]);
    });

    it('gets team stats from team service by year', () => {
      const mockTeam = {
          teamId: 'id',
          yearId: 2000,
          w: 20,
          hr: 1
      }

      service.getTeamStatsByYear(mockTeam.yearId)
          .subscribe(data => {
              expect(data[0].teamId).toEqual(mockTeam.teamId);
              expect(data[0].w).toEqual(mockTeam.w);
              expect(data[0].hr).toEqual(mockTeam.hr);
              expect(data[0].yearId).toEqual(mockTeam.yearId);
          });

      const req = httpMock.expectOne(
          `${environment.baseUrl}/team/year/${mockTeam.yearId}`
      );

      expect(req.request.method).toEqual('GET');

      req.flush([mockTeam]);
  });
});
});
