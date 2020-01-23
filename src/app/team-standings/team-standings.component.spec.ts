import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamStandingsComponent } from './team-standings.component';
import { Input, Component } from '@angular/core';

describe('TeamStandingsComponent', () => {
  let component: TeamStandingsComponent;
  let fixture: ComponentFixture<TeamStandingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamStandingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  class MockBasicBattingTableComponent {
    @Input() data: any;
  }
  
  @Component({
    selector: 'app-advanced-batting-table',
    template: '',
  })
  class MockAdvancedBattingTableComponent {
    @Input() data: any;
  }
 
  @Component({
    selector: 'app-basic-fielding-table',
    template: '',
  })
  class MockBasicFieldingTableComponent {
    @Input() data: any;
  }
  
  @Component({
    selector: 'app-basic-pitching-table',
    template: '',
  })
  class MockBasicPitchingTableComponent {
    @Input() data: any;
  }
});
