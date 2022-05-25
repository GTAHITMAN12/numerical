import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterExtarComponent } from './inter-extar.component';

describe('InterExtarComponent', () => {
  let component: InterExtarComponent;
  let fixture: ComponentFixture<InterExtarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterExtarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterExtarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
