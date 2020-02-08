import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseballLiteratureComponent } from './baseball-literature.component';

describe('BaseballLiteratureComponent', () => {
  let component: BaseballLiteratureComponent;
  let fixture: ComponentFixture<BaseballLiteratureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseballLiteratureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseballLiteratureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
