import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceControlButtonComponent } from './device-control-button.component';

describe('DeviceControlButtonComponent', () => {
  let component: DeviceControlButtonComponent;
  let fixture: ComponentFixture<DeviceControlButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceControlButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceControlButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
