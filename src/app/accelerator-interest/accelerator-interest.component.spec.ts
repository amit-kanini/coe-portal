import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceleratorInterestComponent } from './accelerator-interest.component';

describe('AcceleratorInterestComponent', () => {
  let component: AcceleratorInterestComponent;
  let fixture: ComponentFixture<AcceleratorInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceleratorInterestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceleratorInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
