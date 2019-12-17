import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerListComponent } from './player-list.component';
import { MatDividerModule, MatListModule, MatCardModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LabelValueComponent } from '../label-value/label-value.component';
import { Component, Input } from '@angular/core';
import { Player } from '../player';
import { By } from '@angular/platform-browser';

describe('PlayerListComponent', () => {
    let component: PlayerListComponent;
    let fixture: ComponentFixture<PlayerListComponent>;
    const fakePlayer = createFakePlayer();

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                MatDividerModule,
                FormsModule,
                ReactiveFormsModule,
                MatListModule,
                RouterModule,
                RouterTestingModule,
                MatCardModule
            ],
            declarations: [
                PlayerListComponent,
                LabelValueComponent
            ],
            providers: [
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlayerListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();

    });

    function createFakePlayer(): Player {
        const player = new Player();
        player.playerId = 'expectedPlayerId';
        player.nameFirst = 'expectedFirstName';
        player.nameLast = 'expectedLastName';

        return player;
    }


});
