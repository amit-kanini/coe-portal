import { TestBed } from '@angular/core/testing';

import { DashboardmelaService } from './dashboardmela.service';

describe('DashboardmelaService', () => {
  let service: DashboardmelaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardmelaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
