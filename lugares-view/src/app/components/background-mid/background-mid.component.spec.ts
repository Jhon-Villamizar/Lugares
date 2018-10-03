import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundMidComponent } from './background-mid.component';

describe('BackgroundMidComponent', () => {
  let component: BackgroundMidComponent;
  let fixture: ComponentFixture<BackgroundMidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundMidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundMidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
