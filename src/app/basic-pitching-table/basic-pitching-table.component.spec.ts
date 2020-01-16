import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPitchingTableComponent } from './basic-pitching-table.component';

describe('BasicPitchingTableComponent', () => {
  let component: BasicPitchingTableComponent;
  let fixture: ComponentFixture<BasicPitchingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicPitchingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicPitchingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
