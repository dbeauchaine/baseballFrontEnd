import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pitching } from './pitching';
import { PitchingLeaderboard } from './pitchingLeaderboard';
import { PitchingPost } from './pitchingPost';
import { PitchingPostLeaderboard } from './pitchingPostLeaderboard';

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

  getPitchingStatsByYear(year: number): Observable<PitchingLeaderboard[]> {
    const url = `${this.pitchingUrl}/post/year/${year.toString()}`;

    return this.http.get<PitchingLeaderboard[]>(url);
  }

  getPitchingPostStats(id: string): Observable<PitchingPost[]> {
    const url = `${this.pitchingUrl}/post/${id}`;

    return this.http.get<PitchingPost[]>(url);
  }

  getPitchingPostStatsByYear(year: number): Observable<PitchingPostLeaderboard[]> {
    const url = `${this.pitchingUrl}/post/year/${year.toString()}`;

    return this.http.get<PitchingPostLeaderboard[]>(url);
  }
}
