import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamListElementComponent } from './team-list-element.component';

describe('TeamListElementComponent', () => {
  let component: TeamListElementComponent;
  let fixture: ComponentFixture<TeamListElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamListElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
