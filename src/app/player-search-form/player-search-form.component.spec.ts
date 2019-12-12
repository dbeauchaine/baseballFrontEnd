import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSearchFormComponent } from './player-search-form.component';

describe('PlayerSearchFormComponent', () => {
  let component: PlayerSearchFormComponent;
  let fixture: ComponentFixture<PlayerSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerSearchFormComponent ]
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
