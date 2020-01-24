import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fielding } from './fielding';
import { FieldingPost } from './fieldingPost';

@Injectable({
  providedIn: 'root'
})
export class FieldingService {
  private fieldingUrl = 'https://localhost:5001/fielding';

  constructor(private http: HttpClient) { }

  getFieldingStats(id: string): Observable<Fielding[]> {
    const url = `${this.fieldingUrl}/${id}`;

    return this.http.get<Fielding[]>(url);
  }

  getFieldingPostStats(id: string): Observable<FieldingPost[]>{
    const url = `${this.fieldingUrl}/post/${id}`

    return this.http.get<FieldingPost[]>(url);
  }
}
