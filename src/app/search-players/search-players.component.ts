import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PlayerService } from '../player.service';

@Component({
    selector: 'app-search-players',
    templateUrl: './search-players.component.html',
    styleUrls: ['./search-players.component.sass']
})
export class SearchPlayersComponent implements OnInit {
    private playerId: string;
    private playerForm: FormGroup;
    private url: string;
    constructor(private formBuilder: FormBuilder, private playerService: PlayerService) { }

    ngOnInit() {
        this.playerForm = this.formBuilder.group({
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
        })
    }

    getUrl() {
        
    }

    onSubmit(): void {
        this.playerService.getPlayerByName(this.playerForm.value.firstName, this.playerForm.value.lastName)
            .subscribe((id) => {
                this.playerId = id;
                this.url = `/player-detail/${this.playerId}`;
            });
    }
}
