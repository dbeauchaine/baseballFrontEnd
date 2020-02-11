import { BioInfoComponent } from './bio-info.component';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material';
import { By } from '@angular/platform-browser';
import { Component, Input } from '@angular/core';
import { FakeDataGenerator }  from '../test-helpers.spec';

describe('BioInfoComponent', () => {
    let component: BioInfoComponent;
    let fixture: ComponentFixture<BioInfoComponent>;
    let fakeDataGenerator = new FakeDataGenerator();

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MatCardModule,

            ],
            declarations: [
                BioInfoComponent,
                MockLabelValueComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BioInfoComponent);
        component = fixture.componentInstance;
    });

    it('should render player data', () => {
        expect(component).toBeTruthy();

        component.player = fakeDataGenerator.createFakePlayer();


        fixture.detectChanges();

        const titleElement = fixture.debugElement.query(By.css('mat-card-title'));
        expect(titleElement.nativeElement.textContent).toEqual(`${component.player.nameFirst} ${component.player.nameLast}`);

        const bioInfoComponents = fixture.debugElement.queryAll(By.css('app-label-value'));
        expect(bioInfoComponents[0].componentInstance.label).toEqual('Throws/Bats');
        expect(bioInfoComponents[0].componentInstance.value).toEqual(`${component.player.throws}/${component.player.bats}`);
        expect(bioInfoComponents[1].componentInstance.label).toEqual('Born');
        expect(bioInfoComponents[1].componentInstance.value)
        .toEqual(`${component.player.birthMonth}/${component.player.birthDay}/${component.player.birthYear}`);
        expect(bioInfoComponents[2].componentInstance.label).toEqual('Died');
        expect(bioInfoComponents[2].componentInstance.value)
        .toEqual(`${component.player.deathMonth}/${component.player.deathDay}/${component.player.deathYear}`);
    });

});



@Component({
    selector: 'app-label-value',
    template: '',

  })
  export class MockLabelValueComponent {
      @Input() label: string;
      @Input() value: string;
  }
