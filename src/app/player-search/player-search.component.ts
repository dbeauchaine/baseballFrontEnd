import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap, tap, finalize } from 'rxjs/operators';
import { Observable, Subject, ObservableInput } from 'rxjs';
import { PlayerService } from '../player.service';
import { Player } from '../player';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-player-search',
  templateUrl: './player-search.component.html',
  styleUrls: ['./player-search.component.sass']
})
export class PlayerSearchComponent implements OnInit {
  players: Observable<Player[]>;
  private searchTerms = new Subject<string>();
  isLoading = false;
  playersForm: FormGroup;

  constructor(private fb: FormBuilder, private playerService: PlayerService) {
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.playersForm = this.fb.group({
      userInput: null
    });

    this.players = this.playersForm.get('userInput')
      .valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => this.isLoading = true),
        switchMap((term: string) => this.playerService.getPlayerByName(term)
          .pipe(
            finalize(() => this.isLoading = false),
          )
        )
      )
  }

  displayFn(player: Player) {
    if (player) { return `${player.nameFirst} ${player.nameLast}`; }
  }

}
