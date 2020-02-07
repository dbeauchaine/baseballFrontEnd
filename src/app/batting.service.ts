import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Batting } from './batting';
import { BattingLeaderboard } from './battingLeaderboard';
import { BattingPostLeaderboard } from './battingPostLeaderboard';
import { BattingPost } from './battingPost';

@Injectable({
  providedIn: 'root'
})
export class BattingService {
  private battingUrl = 'https://localhost:5001/batting';

  constructor(private http: HttpClient) { }

  getBattingStats(id: string): Observable<Batting[]> {
    const url = `${this.battingUrl}/${id}`;

    return this.http.get<Batting[]>(url);
  }

  getBattingPostStats(id: string): Observable<BattingPost[]> {
    const url = `${this.battingUrl}/post/${id}`;

    return this.http.get<BattingPost[]>(url);
  }

  getBattingStatsByYear(year: number): Observable<BattingLeaderboard[]> {
    const url = `${this.battingUrl}/year/${year.toString()}`;

    return this.http.get<BattingLeaderboard[]>(url);
  }

  getBattingPostStatsByYear(year: number): Observable<BattingPostLeaderboard[]> {
    const url = `${this.battingUrl}/post/year/${year.toString()}`;

    return this.http.get<BattingPostLeaderboard[]>(url);
  }

  getBattingStatsByTeam(id: string, year:number): Observable<Batting[]>{
    const url = `${this.battingUrl}/team/${year.toString()}/${id}`;

    return this.http.get<Batting[]>(url);
  }
}
