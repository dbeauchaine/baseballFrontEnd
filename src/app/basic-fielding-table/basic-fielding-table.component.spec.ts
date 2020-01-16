import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFieldingTableComponent } from './basic-fielding-table.component';

describe('BasicFieldingTableComponent', () => {
  let component: BasicFieldingTableComponent;
  let fixture: ComponentFixture<BasicFieldingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicFieldingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicFieldingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
