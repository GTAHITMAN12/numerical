import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LilComponent } from './lil.component';

describe('LilComponent', () => {
  let component: LilComponent;
  let fixture: ComponentFixture<LilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
