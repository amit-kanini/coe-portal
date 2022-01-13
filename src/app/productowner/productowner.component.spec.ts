import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductownerComponent } from './productowner.component';

describe('ProductownerComponent', () => {
  let component: ProductownerComponent;
  let fixture: ComponentFixture<ProductownerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductownerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
