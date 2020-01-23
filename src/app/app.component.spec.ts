import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { MatMenuModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { Component } from '@angular/core';

fdescribe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                MatMenuModule,
                MatToolbarModule,
                MatIconModule,
            ],
            declarations: [
                AppComponent,
                MockTopMenuComponent,
                MockPlayerSearchComponent,
            ],
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'angular-baseball'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('angular-baseball');
    });

    @Component({
        selector: 'app-player-search',
        template: '',
    })
    class MockPlayerSearchComponent {
    }

    @Component({
        selector: 'app-top-menu',
        template: '',
    })
    class MockTopMenuComponent {
    }
});
