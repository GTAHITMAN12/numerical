import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QilComponent } from './qil.component';

describe('QilComponent', () => {
  let component: QilComponent;
  let fixture: ComponentFixture<QilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
