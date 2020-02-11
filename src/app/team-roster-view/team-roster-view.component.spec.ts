import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamRosterViewComponent } from './team-roster-view.component';
import { MatTabsModule, MatExpansionModule } from '@angular/material';
import { Component, Input } from '@angular/core';
import { ColumnConfig } from '../columnConfig';
import { BattingService } from '../batting.service';
import { of } from 'rxjs/internal/observable/of';
import { Router } from '@angular/router';
import { FakeDataGenerator } from '../test-helpers.spec';

fdescribe('TeamRosterViewComponent', () => {
  let component: TeamRosterViewComponent;
  let fixture: ComponentFixture<TeamRosterViewComponent>;
  const fakeDataGenerator = new FakeDataGenerator();
  const fakeBatting = fakeDataGenerator.createFakeBatting();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatTabsModule,
        MatExpansionModule
      ],
      declarations: [ 
        TeamRosterViewComponent,
        MockDataTableComponent
      ],
      providers: [
          {
              provide: BattingService,
              useValue:
                  {
                      getBattingStatsByTeam(id: string) {
                          expect(id).toEqual(fakeBatting[0].teamId);
                          return of(fakeBatting);
                      },
                  },
          },
          {
            provide: Router,
            useValue:
            {
              navigateByUrl() { }
            }
          },

      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamRosterViewComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
  });

  
@Component({
  selector: 'app-data-table',
  template: '',
})
class MockDataTableComponent {
  @Input() data: any;
  @Input() propertyToLabelMap: Map<string, ColumnConfig>;
}
});


