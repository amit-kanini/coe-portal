import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreteamComponent } from './coreteam.component';

describe('CoreteamComponent', () => {
  let component: CoreteamComponent;
  let fixture: ComponentFixture<CoreteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreteamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
