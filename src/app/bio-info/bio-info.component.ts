import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
    selector: 'app-bio-info',
    templateUrl: './bio-info.component.html',
    styleUrls: ['./bio-info.component.sass']
})
export class BioInfoComponent implements OnInit {
    @Input() player: Player;

    constructor() { }

    ngOnInit() {
    }


}
