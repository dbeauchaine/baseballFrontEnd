import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../player.service';
import { Player } from '../player';

@Component({
    selector: 'app-player-detail',
    templateUrl: './player-detail.component.html',
    styleUrls: ['./player-detail.component.sass']
})
export class PlayerDetailComponent implements OnInit {
    private id: string;
    private player: Player;

    constructor(
        private route: ActivatedRoute,
        private playerService: PlayerService,
    ) { }

    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.getPlayer();
    }
    
    getPlayer(): void {
        this.playerService.getPlayer(this.id)
            .subscribe(player => this.player = player);
    }
}

