import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearAppComponent } from './linear-app.component';

describe('LinearAppComponent', () => {
  let component: LinearAppComponent;
  let fixture: ComponentFixture<LinearAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinearAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
