import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-player-list',
    templateUrl: './player-list.component.html',
    styleUrls: ['./player-list.component.sass']
})
export class PlayerListComponent implements OnInit {
    @Input() playerForm: FormGroup;
    @Input() url: string;

    constructor() { }

    ngOnInit() {
        this.playerForm.value.firstName = this.formatStrings(this.playerForm.value.firstName);
        this.playerForm.value.lastName = this.formatStrings(this.playerForm.value.lastName);
    }

    formatStrings(s:string):string {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }
}
