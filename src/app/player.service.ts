import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Player } from './player';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PlayerService {
    private playerUrl = `${environment.baseUrl}/player`;

    constructor(private http: HttpClient) { }

    getPlayer(id: string): Observable<Player> {
        const url = `${this.playerUrl}/${id}`;
        
        return this.http.get<Player>(url);
    }

    getPlayerByName(name: string): Observable<Player[]> {
        const url = `${this.playerUrl}/?name=${name}`;

        return this.http.get<Player[]>(url);
    }

}
