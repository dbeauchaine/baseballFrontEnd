import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Player } from '../player';

@Component({
    selector: 'app-player-list',
    templateUrl: './player-list.component.html',
    styleUrls: ['./player-list.component.sass']
})
export class PlayerListComponent implements OnInit {
    @Input() url: string;
    @Input() player: Player;

    constructor() { }

    ngOnInit() {
    }
}
