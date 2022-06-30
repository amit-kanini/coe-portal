import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMelaDetailsComponent } from './dashboard-mela-details.component';

describe('DashboardMelaDetailsComponent', () => {
  let component: DashboardMelaDetailsComponent;
  let fixture: ComponentFixture<DashboardMelaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardMelaDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMelaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
