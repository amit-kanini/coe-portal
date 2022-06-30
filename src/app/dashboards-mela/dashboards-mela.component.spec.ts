import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardsMelaComponent } from './dashboards-mela.component';

describe('DashboardsMelaComponent', () => {
  let component: DashboardsMelaComponent;
  let fixture: ComponentFixture<DashboardsMelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardsMelaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardsMelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
