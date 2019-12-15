import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPlayersComponent } from './search-players.component';
import { PlayerSearchFormComponent } from '../player-search-form/player-search-form.component';
import { PlayerListComponent } from '../player-list/player-list.component';
import { MatCardModule, MatFormFieldModule, MatDividerModule, MatMenuModule, MatListModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PlayerService } from '../player.service';
import { LabelValueComponent } from '../label-value/label-value.component';

describe('SearchPlayersComponent', () => {
    let component: SearchPlayersComponent;
    let fixture: ComponentFixture<SearchPlayersComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MatCardModule,
                MatFormFieldModule,
                ReactiveFormsModule,
                RouterModule,
                FormsModule,
                MatDividerModule,
                MatMenuModule,
                MatListModule,
            ],
            declarations: [
                SearchPlayersComponent,
                PlayerSearchFormComponent,
                PlayerListComponent,
                LabelValueComponent
            ],
            providers: [
                {
                    provide: PlayerService,
                    useValue:
                    {
                        getPlayer() {
                        }
                    },
                },

                {
                    provide: FormBuilder,
                    useValue:
                    {
                        group() {
                        }
                    }
                }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchPlayersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
    });
});
