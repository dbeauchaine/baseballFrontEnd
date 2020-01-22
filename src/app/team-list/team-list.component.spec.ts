import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamListComponent } from './team-list.component';
import { MatCardModule, MatExpansionModule, MatListModule } from '@angular/material';
import { TeamListElementComponent } from '../team-list-element/team-list-element.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';

fdescribe('TeamListComponent', () => {
  let component: TeamListComponent;
  let fixture: ComponentFixture<TeamListComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatExpansionModule,
        MatListModule,
        RouterTestingModule,
        NoopAnimationsModule,

      ],
      declarations: [
        TeamListComponent,
        MockTeamListElementComponent,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamListComponent);
    component = fixture.componentInstance;
  });

  it('should pass teams to teamListElementComponents', () => {
    fixture.detectChanges();

    const teamListElementComponent = fixture.debugElement.queryAll(By.css('app-team-list-element'));
    expect(teamListElementComponent[0].componentInstance.teams).toEqual(component.alEast);
    expect(teamListElementComponent[1].componentInstance.teams).toEqual(component.alCentral);
    expect(teamListElementComponent[2].componentInstance.teams).toEqual(component.alWest);
    expect(teamListElementComponent[3].componentInstance.teams).toEqual(component.nlEast);
    expect(teamListElementComponent[4].componentInstance.teams).toEqual(component.nlCentral);
    expect(teamListElementComponent[5].componentInstance.teams).toEqual(component.nlWest);
  });

  @Component({
    selector: 'app-team-list-element',
    template: '',
  })
  class MockTeamListElementComponent {
    @Input() teams: any;
  }
});
