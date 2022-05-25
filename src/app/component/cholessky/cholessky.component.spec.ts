import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CholesskyComponent } from './cholessky.component';

describe('CholesskyComponent', () => {
  let component: CholesskyComponent;
  let fixture: ComponentFixture<CholesskyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CholesskyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CholesskyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
