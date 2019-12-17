import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BioInfoComponent } from './bio-info.component';
import { MatCardModule } from '@angular/material';
import { By } from '@angular/platform-browser';
import { Player } from '../player';
import { Component, Input } from '@angular/core';

fdescribe('BioInfoComponent', () => {
    let component: BioInfoComponent;
    let fixture: ComponentFixture<BioInfoComponent>;

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
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();

        component.player = new Player();
        component.player.nameFirst = 'expectedFirstName';
        component.player.nameLast = 'expectedLastName';

        const titleElement = fixture.debugElement.query(By.css('mat-card-title'));
        expect(titleElement.nativeElement.textContent).toEqual(`expectedFirstName expectedLastName`);

        fixture.detectChanges();

        const bioInfoComponent = fixture.debugElement.query(By.css('app-label-value'));
        expect(bioInfoComponent.componentInstance.label).toEqual('Throws/Bats');
    });

});

@Component({
    selector: 'app-label-value',
    templateUrl: '',

  })
  export class MockLabelValueComponent {
      @Input() label: string;
      @Input() value: string;
  }
