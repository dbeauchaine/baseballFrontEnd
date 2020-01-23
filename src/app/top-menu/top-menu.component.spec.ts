import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMenuComponent } from './top-menu.component';
import { MatMenuModule, MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Component, Input } from '@angular/core';
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
                FormsModule,
                MatIconModule,
            ],
            declarations: [
                TopMenuComponent,
                MockPlayerSearchComponent,
            ]

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

    @Component({
        selector: 'app-player-search',
        template: '',
    })
    class MockPlayerSearchComponent {
        @Input() data: any;
    }

});
