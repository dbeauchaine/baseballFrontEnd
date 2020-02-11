import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { MatMenuModule, MatToolbarModule, MatIconModule, MatIconRegistry, MatSidenavModule } from '@angular/material';
import { Component } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                MatMenuModule,
                MatToolbarModule,
                MatIconModule,
                MatSidenavModule,
                NoopAnimationsModule
            ],
            declarations: [
                AppComponent,
                MockTopMenuComponent,
                MockPlayerSearchComponent,
                MockPlayerSidenavComponent,
                MockBottomBarComponent
            ],
            providers: [
                {
                    provide: MatIconRegistry,
                    useValue: {
                        addSvgIcon(iconName: string, url: SafeResourceUrl) { }
                    }
                },
                {
                    provide: DomSanitizer,
                    useValue: {
                        bypassSecurityTrustResourceUrl(value: string) { }
                    }
                }
            ]
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

    @Component({
        selector: 'app-player-sidenav',
        template: '',
    })
    class MockPlayerSidenavComponent {
    }

    @Component({
        selector: 'app-bottom-bar',
        template: '',
    })
    class MockBottomBarComponent {
    }
});
