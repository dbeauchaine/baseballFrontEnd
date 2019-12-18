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
import { generatePlayer } from '../test-helpers';

fdescribe('SearchPlayersComponent', () => {
    let component: SearchPlayersComponent;
    let mockPlayerService: PlayerService;
    let fixture: ComponentFixture<SearchPlayersComponent>;
    const fakeplayers = generatePlayer();
    let playerGroup = generateGroup();

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
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchPlayersComponent);
        mockPlayerService = TestBed.get(PlayerService);
        component = fixture.componentInstance;
        component.players = [fakeplayers];
        component.playerGroup = playerGroup;
    });

    it('should be created', () => {
        fixture.detectChanges();

        let searchForm = fixture.debugElement.query(By.css('app-player-search-form'));
        expect(searchForm.componentInstance.playerForm).toEqual(component.playerGroup);
    });

    function updateForm(firstName, lastName) {
        playerGroup.controls.firstName.setValue(firstName);
        playerGroup.controls.lastName.setValue(lastName);
    }
    function generateGroup(): FormGroup{
        let playerGroup = new FormGroup({
            firstName: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required),
        });
        return playerGroup;
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
