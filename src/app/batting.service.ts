import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Batting } from './batting';

@Injectable({
  providedIn: 'root'
})
export class BattingService {
    private battingUrl = 'https://localhost:5001/batting'

    getBattingStats(id: string): Observable<Batting[]> {
        const url = `${this.battingUrl}/${id}`

        return this.http.get<Batting[]>(url);
    }
  constructor(private http: HttpClient) { }
}
