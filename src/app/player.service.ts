import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Player } from './player';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PlayerService {
    private playerUrl ='https://localhost:5001/player'

    getPlayer(id: string): Observable<Player> {
        const url = `${this.playerUrl}/${id}`;

        return this.http.get<Player>(url);
    }

    constructor(private http: HttpClient) { }
}
