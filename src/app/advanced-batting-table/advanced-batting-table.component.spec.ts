import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedBattingTableComponent } from './advanced-batting-table.component';

describe('AdvancedBattingTableComponent', () => {
  let component: AdvancedBattingTableComponent;
  let fixture: ComponentFixture<AdvancedBattingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedBattingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedBattingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
