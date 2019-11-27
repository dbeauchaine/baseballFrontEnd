import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../player.service';
import { Player } from '../player';

@Component({
    selector: 'app-player-detail',
    templateUrl: './player-detail.component.html',
    styleUrls: ['./player-detail.component.sass']
})
export class PlayerDetailComponent implements OnInit {
    player: Player;

    constructor(
        private route: ActivatedRoute,
        private playerService:PlayerService
    ) { }

    ngOnInit() {
        this.getPlayer();
    }

    getPlayer(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.playerService.getPlayer(id)
            .subscribe( player => this.player = player);
    }

}
