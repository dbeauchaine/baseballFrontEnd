import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Player } from './player';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PlayerService {
    private playerUrl = 'https://localhost:5001/player'

    constructor(private http: HttpClient) { }

    getPlayer(id: string): Observable<Player> {
        const url = `${this.playerUrl}/${id}`;

        return this.http.get<Player>(url);
    }

    getPlayerByName(firstName: string, lastName: string): Observable<Player[]> {
        const url = `${this.playerUrl}/?firstName=${firstName}&lastName=${lastName}`;

        return this.http.get<Player[]>(url);
    }


}
