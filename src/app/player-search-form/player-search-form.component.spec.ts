import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSearchFormComponent } from './player-search-form.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { Player } from '../player';
import { By } from '@angular/platform-browser';

describe('PlayerSearchFormComponent', () => {
    let component: PlayerSearchFormComponent;
    let fixture: ComponentFixture<PlayerSearchFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MatFormFieldModule,
                MatInputModule,
                ReactiveFormsModule,
            ],
            declarations: [
                PlayerSearchFormComponent
            ],
            providers: [
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlayerSearchFormComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        fixture.detectChanges();
    });
});
