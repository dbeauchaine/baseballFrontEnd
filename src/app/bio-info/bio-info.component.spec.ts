import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BioInfoComponent } from './bio-info.component';
import { MatCardModule } from '@angular/material';
import { LabelValueComponent } from '../label-value/label-value.component';
import { By } from '@angular/platform-browser';

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

        //const titleElement = fixture.debugElement.query(By.css("mat-card-title"));
        //expect(titleElement.nativeElement.textContent).toEqual(`expectedFirstName expectedLastName`);
    });

});
