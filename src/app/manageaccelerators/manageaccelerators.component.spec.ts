import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageacceleratorsComponent } from './manageaccelerators.component';

describe('ManageacceleratorsComponent', () => {
  let component: ManageacceleratorsComponent;
  let fixture: ComponentFixture<ManageacceleratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageacceleratorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageacceleratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
