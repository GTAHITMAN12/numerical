import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LudecomposeComponent } from './ludecompose.component';

describe('LudecomposeComponent', () => {
  let component: LudecomposeComponent;
  let fixture: ComponentFixture<LudecomposeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LudecomposeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LudecomposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
