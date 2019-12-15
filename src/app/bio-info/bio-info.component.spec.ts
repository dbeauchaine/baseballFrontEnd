import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BioInfoComponent } from './bio-info.component';
import { MatCardModule } from '@angular/material';
import { LabelValueComponent } from '../label-value/label-value.component';
import { By } from '@angular/platform-browser';
import { Player } from '../player';

describe('BioInfoComponent', () => {
    let component: BioInfoComponent;
    let fixture: ComponentFixture<BioInfoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MatCardModule,

            ],
            declarations: [
                BioInfoComponent,
                LabelValueComponent
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
    });

});
