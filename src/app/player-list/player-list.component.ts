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
    private formattedFirst: string;
    private formattedLast: string;

    constructor() { }

    ngOnInit() {
        this.formattedFirst = this.formatStrings(this.player.nameFirst);
        this.formattedLast = this.formatStrings(this.player.nameLast);
        console.log(this.formattedFirst)
    }

    formatStrings(s:string):string {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }
}
