import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMenuComponent } from './top-menu.component';
import { MatMenuModule, MatToolbarModule, MatButtonModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
describe('TopMenuComponent', () => {
    let component: TopMenuComponent;
    let fixture: ComponentFixture<TopMenuComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MatMenuModule,
                MatToolbarModule,
                MatButtonModule,
                ReactiveFormsModule,
                FormsModule
            ],
            declarations: [TopMenuComponent]

        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TopMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
