import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pitching } from './pitching';
import { PitchingLeaderboard } from './pitchingLeaderboard';

@Injectable({
  providedIn: 'root'
})
export class PitchingService {
  private pitchingUrl = 'https://localhost:5001/pitching';

  constructor(private http: HttpClient) { }

  getPitchingStats(id: string): Observable<Pitching[]> {
    const url = `${this.pitchingUrl}/${id}`;

    return this.http.get<Pitching[]>(url);
  }

  getBattingStatsByYear(year: number): Observable<PitchingLeaderboard[]> {
    const url = `${this.pitchingUrl}/year/${year.toString()}`;

    return this.http.get<PitchingLeaderboard[]>(url);
  }
}
