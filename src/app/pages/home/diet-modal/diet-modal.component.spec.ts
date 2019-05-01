import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietModalComponent } from './diet-modal.component';

describe('DietModalComponent', () => {
  let component: DietModalComponent;
  let fixture: ComponentFixture<DietModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
