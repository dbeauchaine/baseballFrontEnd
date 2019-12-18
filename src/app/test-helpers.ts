import { Player } from './player';

export function generatePlayer(): Player {
    const player = new Player();
    player.nameFirst = 'expectedFirstName';
    player.nameLast = 'expectedLastName';
    player.throws = 'R';
    player.bats = 'L';
    player.birthMonth = 10;
    player.birthDay = 11;
    player.birthYear = 1991;
    player.deathDay = 11;
    player.deathMonth = 10;
    player.deathYear = 2001;
    player.birthCity = 'city';
    player.birthState = 'state';
    player.birthCountry = 'country';
    return player;
}