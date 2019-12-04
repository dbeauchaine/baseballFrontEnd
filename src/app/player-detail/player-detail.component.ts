import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../player.service';
import { Player } from '../player';
import { BattingService } from '../batting.service';
import { Batting } from '../batting';

@Component({
    selector: 'app-player-detail',
    templateUrl: './player-detail.component.html',
    styleUrls: ['./player-detail.component.sass']
})
export class PlayerDetailComponent implements OnInit {
    player: Player;
    batting: Batting[];

    constructor(
        private route: ActivatedRoute,
        private playerService: PlayerService,
        private battingService: BattingService
    ) { }

    ngOnInit() {
        this.getPlayer();
    }

    getPlayer(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.playerService.getPlayer(id)
            .subscribe( player => this.player = player);
    }

    getBatting(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.battingService.getBattingStats(id)
            .subscribe(batting => this.batting = batting);
    }

}
