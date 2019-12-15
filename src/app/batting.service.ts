import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Batting } from './batting';
import { BattingLeaderboard } from './battingLeaderboard';

@Injectable({
  providedIn: 'root'
})
export class BattingService {
  private battingUrl = 'https://localhost:5001/batting'
  private yearUrl = 'https://localhost:5001/year'

  constructor(private http: HttpClient) { }

  getBattingStats(id: string): Observable<Batting[]> {
    const url = `${this.battingUrl}/${id}`;

    return this.http.get<Batting[]>(url);
  }

  getBattingStatsByYear(year: number): Observable<BattingLeaderboard[]> {
    const url = `${this.yearUrl}/${year.toString()}`;
  
    return this.http.get<BattingLeaderboard[]>(url);
  }
}
