import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinComponent } from './lin.component';

describe('LinComponent', () => {
  let component: LinComponent;
  let fixture: ComponentFixture<LinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
