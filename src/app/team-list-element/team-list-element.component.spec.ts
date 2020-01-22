import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamListElementComponent } from './team-list-element.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatListModule } from '@angular/material';

fdescribe('TeamListElementComponent', () => {
  let component: TeamListElementComponent;
  let fixture: ComponentFixture<TeamListElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatListModule,
      ],
      declarations: [ 
        TeamListElementComponent 
      ]
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
