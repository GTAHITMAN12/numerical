import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QinComponent } from './qin.component';

describe('QinComponent', () => {
  let component: QinComponent;
  let fixture: ComponentFixture<QinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
