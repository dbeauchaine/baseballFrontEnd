import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from './team';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private teamUrl = `${environment.baseUrl}/team`;

  constructor(private http: HttpClient) { }

  getTeamStats(id: string): Observable<Team[]> {
    const url = `${this.teamUrl}/${id}`;

    return this.http.get<Team[]>(url);
  }

  getTeamStatsByYear(year: number): Observable<Team[]> {
    const url = `${this.teamUrl}/year/${year.toString()}`;

    return this.http.get<Team[]>(url);
  }
}
