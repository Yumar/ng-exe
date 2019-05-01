import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietCalendarComponent } from './diet-calendar.component';

describe('DietCalendarComponent', () => {
  let component: DietCalendarComponent;
  let fixture: ComponentFixture<DietCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
