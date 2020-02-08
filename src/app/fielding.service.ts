import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fielding } from './fielding';
import { FieldingPost } from './fieldingPost';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FieldingService {
  private fieldingUrl = `${environment.baseUrl}/fielding`;

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
