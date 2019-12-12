import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSearchFormComponent } from './player-search-form.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';

describe('PlayerSearchFormComponent', () => {
    let component: PlayerSearchFormComponent;
    let fixture: ComponentFixture<PlayerSearchFormComponent>;
    let playerGroup: FormGroup;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MatFormFieldModule,
                MatInputModule,
                ReactiveFormsModule,
            ],
            declarations: [
                PlayerSearchFormComponent,
            ],
            providers: [
                {

                }
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlayerSearchFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
