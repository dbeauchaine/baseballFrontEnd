import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fielding } from './fielding';

@Injectable({
  providedIn: 'root'
})
export class FieldingService {
    private fieldingUrl = 'https://localhost:5001/fielding'

    getFieldingStats(id: string): Observable<Fielding[]> {
        const url = `${this.fieldingUrl}/${id}`

        return this.http.get<Fielding[]>(url);
    }
  constructor(private http: HttpClient) { }
}
