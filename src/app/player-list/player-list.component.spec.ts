import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerListComponent } from './player-list.component';
import { MatDividerModule, MatListModule, MatCardModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { generatePlayer } from '../test-helpers';

describe('PlayerListComponent', () => {
    let component: PlayerListComponent;
    let fixture: ComponentFixture<PlayerListComponent>;
    const fakePlayer = generatePlayer();

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
                MockLabelValueComponent
            ],
            providers: [
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlayerListComponent);
        component = fixture.componentInstance;
    });

    it('should render player data', () => {
        component.player = fakePlayer;
       
        fixture.detectChanges();

        let title = fixture.debugElement.query(By.css('mat-card-title'));

        expect(title.nativeElement.textContent)
        .toEqual(` ${component.player.nameFirst} ${component.player.nameLast} `);

        let appLabelComponents = fixture.debugElement.queryAll(By.css('app-label-value'));

        expect(appLabelComponents[0].componentInstance.label).toEqual('Throws/Bats');
        expect(appLabelComponents[0].componentInstance.value)
        .toEqual(`${component.player.throws}/${component.player.bats}`);

        expect(appLabelComponents[1].componentInstance.label).toEqual('Born');
        expect(appLabelComponents[1].componentInstance.value)
        .toEqual(`${component.player.birthMonth}/${component.player.birthDay}/${component.player.birthYear}`);

        expect(appLabelComponents[2].componentInstance.label).toEqual('Died');
        expect(appLabelComponents[2].componentInstance.value)
        .toEqual(`${component.player.deathMonth}/${component.player.deathDay}/${component.player.deathYear}`);
        
        let birthPlaceSpans = fixture.debugElement.queryAll(By.css('span'));
        expect(birthPlaceSpans[0].nativeElement.textContent)
        .toEqual(`in ${component.player.birthCity} `);

        expect(birthPlaceSpans[1].nativeElement.textContent)
        .toEqual(`${component.player.birthState}, `);

        expect(birthPlaceSpans[2].nativeElement.textContent)
        .toEqual(`${component.player.birthCountry}`);
    });

    @Component({
        selector: 'app-label-value',
        template: '',
    })
    class MockLabelValueComponent {
        @Input() label: string;
        @Input() value: string;
    }
});
