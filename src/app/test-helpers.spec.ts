import { Player } from './player';
import { BattingPost } from './battingPost';
import { Batting } from './batting';
import { Fielding } from './fielding';
import { Pitching } from './pitching';
import { FieldingPost } from './fieldingPost';
import { PitchingPost } from './pitchingPost';
import { ComponentFixture, flush } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Team } from './team';

export class TableChecker {
    private fixture: ComponentFixture<any>;

    constructor(fixture: ComponentFixture<any>) {
        this.fixture = fixture;
    }

    checkTable(expansionLabel: string, tabLabel: string, className: string, expectedData: any) {
        this.clickExpansion(expansionLabel);
        this.clickTab(tabLabel);

        const tableComponent = this.fixture.debugElement.query(By.css(className));
        expect(tableComponent.componentInstance.data).toEqual(expectedData);
    }

    clickTab(label: string) {
        const tabs = this.fixture.debugElement.queryAll(By.css('.mat-tab-label-content'));
        const tab = tabs.find(item => {
            return item.nativeElement.textContent == label;
        });

        tab.nativeElement.click();

        //workaround for async material tab behavior
        this.fixture.detectChanges();
        flush();
        this.fixture.detectChanges();
    }

    clickExpansion(label: string) {
        const expansions = this.fixture.debugElement.queryAll(By.css('.mat-expansion-panel-header-title'));
        const expansion = expansions.find(item => {
            return item.nativeElement.textContent == label;
        });

        expansion.nativeElement.click();

        //workaround for async material tab behavior
        this.fixture.detectChanges();
        flush();
        this.fixture.detectChanges();
    }
}

export class FakeDataGenerator {
    createFakePlayer(): Player {
        const player = new Player();
        player.playerId = "id";
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

    createFakeTeam(): Team[] {
        const team = new Team();
        team.teamId = 'teamId';
        team.h = 20;
        team.hr = 2;
        team.avg = .242;
        team.era = 3.21;
        team.yearId = 2000;
        return [team];
    }

    createFakeBatting(): Batting[] {
        const batting = new Batting();
        batting.playerId = 'id';
        batting.h = 20;
        batting.hr = 2;
        batting.avg = .242;
        batting.teamId = "teamId";
        batting.yearId = 2000;
        return [batting];
    }

    createFakeBattingPost(): BattingPost[] {
        const batting = new BattingPost();
        batting.playerId = 'id';
        batting.h = 20;
        batting.hr = 2;
        batting.avg = .242;
        return [batting];
    }

    createFakeFielding(): Fielding[] {
        const fielding = new Fielding();
        fielding.playerId = 'id';
        fielding.e = 2;
        fielding.a = 20;

        return [fielding];
    }

    createFakePitching(): Pitching[] {
        const pitching = new Pitching();
        pitching.playerId = 'id';
        pitching.w = 20;
        pitching.l = 10;

        return [pitching];
    }

    createFakeFieldingPost(): FieldingPost[] {
        const fielding = new FieldingPost();
        fielding.playerId = 'id';
        fielding.e = 2;
        fielding.a = 20;

        return [fielding];
    }

    createFakePitchingPost(): PitchingPost[] {
        const pitching = new PitchingPost();
        pitching.playerId = 'id';
        pitching.w = 20;
        pitching.l = 10;

        return [pitching];
    }
}