import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceControlVerticalSliderComponent } from './device-control-vertical-slider.component';

describe('DeviceControlVerticalSliderComponent', () => {
  let component: DeviceControlVerticalSliderComponent;
  let fixture: ComponentFixture<DeviceControlVerticalSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceControlVerticalSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceControlVerticalSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
