import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproverequestComponent } from './approverequest.component';

describe('ApproverequestComponent', () => {
  let component: ApproverequestComponent;
  let fixture: ComponentFixture<ApproverequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproverequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproverequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
