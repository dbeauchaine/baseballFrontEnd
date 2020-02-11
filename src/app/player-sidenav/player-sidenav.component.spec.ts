import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSidenavComponent } from './player-sidenav.component';
import { MatDividerModule, MatSidenavModule, MatExpansionModule, MatListModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('PlayerSidenavComponent', () => {
  let component: PlayerSidenavComponent;
  let fixture: ComponentFixture<PlayerSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDividerModule,
        MatSidenavModule,
        MatExpansionModule,
        MatListModule,
        NoopAnimationsModule
      ],
      declarations: [ PlayerSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerSidenavComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
