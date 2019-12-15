import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PlayerService } from '../player.service';
import { Player } from '../player';

@Component({
    selector: 'app-search-players',
    templateUrl: './search-players.component.html',
    styleUrls: ['./search-players.component.sass']
})
export class SearchPlayersComponent implements OnInit {
    public players: Player[];
    public playerForm: FormGroup;
    public url: string[];
    constructor(private formBuilder: FormBuilder, private playerService: PlayerService) { }

    ngOnInit() {
        this.playerForm = this.formBuilder.group({
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
        });
    }

    private getUrl(players: Player[]) {
        this.url = new Array();

        for (let i = 0; i < players.length; i++) {
            this.url.push(`/player-detail/${this.players[i].playerId}`);
        }
    }

    onSubmit(): void {
        this.playerService.getPlayerByName(this.playerForm.value.firstName, this.playerForm.value.lastName)
            .subscribe((players) => {
                this.players = players;
                this.getUrl(players);

                for (let i = 0; i < players.length; i++) {
                  console.log(this.players[i].playerId);
                }
            });
    }
}
