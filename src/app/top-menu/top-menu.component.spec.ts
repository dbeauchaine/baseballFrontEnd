import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMenuComponent } from './top-menu.component';
import { MatMenuModule, MatToolbarModule } from '@angular/material';

describe('TopMenuComponent', () => {
    let component: TopMenuComponent;
    let fixture: ComponentFixture<TopMenuComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MatMenuModule, MatToolbarModule],
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
