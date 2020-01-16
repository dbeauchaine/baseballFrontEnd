import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicBattingTableComponent } from './basic-batting-table.component';

describe('BasicBattingTableComponent', () => {
  let component: BasicBattingTableComponent;
  let fixture: ComponentFixture<BasicBattingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicBattingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicBattingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
