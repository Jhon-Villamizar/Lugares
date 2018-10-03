import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundDownComponent } from './background-down.component';

describe('BackgroundDownComponent', () => {
  let component: BackgroundDownComponent;
  let fixture: ComponentFixture<BackgroundDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
