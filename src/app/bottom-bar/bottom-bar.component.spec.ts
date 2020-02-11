import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomBarComponent } from './bottom-bar.component';
import { MatToolbarModule, MatIconModule } from '@angular/material';

describe('BottomBarComponent', () => {
  let component: BottomBarComponent;
  let fixture: ComponentFixture<BottomBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        MatToolbarModule,
        MatIconModule,
      ],
      declarations: [ BottomBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
