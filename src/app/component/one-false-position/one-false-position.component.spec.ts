import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneFalsePositionComponent } from './one-false-position.component';

describe('OneFalsePositionComponent', () => {
  let component: OneFalsePositionComponent;
  let fixture: ComponentFixture<OneFalsePositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneFalsePositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneFalsePositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
