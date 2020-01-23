import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSearchComponent } from './player-search.component';
import { MatFormFieldModule, MatAutocompleteModule, MatProgressSpinnerModule } from '@angular/material';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { PlayerService } from '../player.service';
import { of } from 'rxjs';
import { Player } from '../player';

describe('PlayerSearchComponent', () => {
  let component: PlayerSearchComponent;
  let fixture: ComponentFixture<PlayerSearchComponent>;
  const fakePlayer = createFakePlayer();
  let mockPlayerService: PlayerService;
  let mockFormBuilder: FormBuilder;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatFormFieldModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatProgressSpinnerModule,
        RouterTestingModule
      ],
      declarations: [
        PlayerSearchComponent
      ],
      providers: [
        {
          provide: FormBuilder,
          useValue:
            {
              group() {
                return new FormGroup({id:new FormControl(fakePlayer.playerId)});
              }
            },
        },
        {
          provide: PlayerService,
          useValue:
              {
                  getPlayer(id: string) {
                      expect(id).toEqual(fakePlayer.playerId);
                      return of(fakePlayer);
                  }
              } as PlayerService,
      },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerSearchComponent);
    mockPlayerService = TestBed.get(PlayerService);
    mockFormBuilder = TestBed.get(FormBuilder);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  function createFakePlayer(): Player {
    const player = new Player();
    player.playerId = 'id';
    player.nameFirst = 'expectedFirstName';
    player.nameLast = 'expectedLastName';

    return player;
}
});
