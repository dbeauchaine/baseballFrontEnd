import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { SearchPlayersComponent } from './search-players.component';
import { MatCardModule, MatFormFieldModule, MatDividerModule, MatMenuModule, MatListModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PlayerService } from '../player.service';
import { Player } from '../player';
import { Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

describe('SearchPlayersComponent', () => {
    let component: SearchPlayersComponent;
    let mockPlayerService: PlayerService;
    let mockFormbuilder: FormBuilder;
    let fixture: ComponentFixture<SearchPlayersComponent>;
    const fakeplayers = createFakePlayers();
    let playerGroup: FormGroup;

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
                MockPlayerSearchFormComponent,
                MockPlayerListComponent,
                MockLabelValueComponent
            ],
            providers: [
                {
                    provide: PlayerService,
                    useValue:
                    {
                        getPlayerByName() {
                        }
                    },
                },
                FormBuilder,
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchPlayersComponent);
        mockPlayerService = TestBed.get(PlayerService);
        mockFormbuilder = TestBed.get(FormBuilder);
        component = fixture.componentInstance;
        component.players = fakeplayers;
        playerGroup = new FormGroup({
            firstName: new FormControl('first', Validators.required),
            lastName: new FormControl('last', Validators.required),
        });
    });

    it('should create', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('should have fake players', fakeAsync(() => {
        expect(component.players[0]).toEqual(fakeplayers[0]);
    }));

    it('should update form value from form changes', fakeAsync(() => {
        updateForm(fakeplayers[1].nameFirst, fakeplayers[1].nameLast);
        expect(playerGroup.value.firstName).toEqual(fakeplayers[1].nameFirst);
        expect(playerGroup.value.lastName).toEqual(fakeplayers[1].nameLast);
      }));

    it('should pass players to app-player-list', () => {
        fixture.detectChanges();

        const playerListComponent = fixture.debugElement.query(By.css('app-player-list'));
        expect(playerListComponent.componentInstance.players[0]).toEqual(fakeplayers[0]);
    });



    function updateForm(firstName, lastName) {
        playerGroup.controls.firstName.setValue(firstName);
        playerGroup.controls.lastName.setValue(lastName);
    }
    function createFakePlayers(): Player[] {
        const player = new Player();
        player.nameFirst = 'first';
        player.nameLast = 'last';

        const playerTwo = new Player();
        player.nameFirst = 'first';
        player.nameLast = 'last';

        return [player, playerTwo];
    }


    @Component({
        selector: 'app-player-list',
        template: '',
    })
    class MockPlayerListComponent {
        @Input() url: string;
        @Input() player: Player;
    }

    @Component({
        selector: 'app-label-value',
        template: '',
    })
    class MockLabelValueComponent {
        @Input() label: string;
        @Input() value: string;
    }

    @Component({
        selector: 'app-player-search-form',
        template: '',
    })
    class MockPlayerSearchFormComponent {
        private id: string;
        @Input() playerForm: FormGroup;
    }
});
