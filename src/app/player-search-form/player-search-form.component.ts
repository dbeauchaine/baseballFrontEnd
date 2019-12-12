import { Component, OnInit, Input } from '@angular/core';
import {  FormGroup } from '@angular/forms';

@Component({
    selector: 'app-player-search-form',
    templateUrl: './player-search-form.component.html',
    styleUrls: ['./player-search-form.component.sass']
})
export class PlayerSearchFormComponent implements OnInit {
    private id: string;
    @Input() playerForm: FormGroup;

    constructor() {
    }

    ngOnInit() {
    }

}
