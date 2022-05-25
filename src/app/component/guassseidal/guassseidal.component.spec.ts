import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuassseidalComponent } from './guassseidal.component';

describe('GuassseidalComponent', () => {
  let component: GuassseidalComponent;
  let fixture: ComponentFixture<GuassseidalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuassseidalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuassseidalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
