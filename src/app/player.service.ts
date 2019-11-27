import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Player } from './player';

@Injectable({
    providedIn: 'root'
})
export class PlayerService {
    getPlayer(id: string): Observable<Player> {
        const player = new Player();
        player.id = '123abc';
        player.name = 'joe joe';

        return of(player);
    }

    constructor() { }
}
