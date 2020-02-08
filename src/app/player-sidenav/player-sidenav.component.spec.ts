import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSidenavComponent } from './player-sidenav.component';

describe('PlayerSidenavComponent', () => {
  let component: PlayerSidenavComponent;
  let fixture: ComponentFixture<PlayerSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
