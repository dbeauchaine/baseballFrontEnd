import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelValueComponent } from './label-value.component';

describe('LabelValueComponent', () => {
  let component: LabelValueComponent;
  let fixture: ComponentFixture<LabelValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelValueComponent);
    component = fixture.componentInstance;
  });

  it('should display label and value', () => {
    component.label = "label";
    component.value ="value";

    fixture.detectChanges();

    expect(fixture.componentInstance.label).toEqual(`${component.label}`);
    expect(fixture.componentInstance.value).toEqual(`${component.value}`);
  });
});
