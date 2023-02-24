import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDevicePageComponent } from './create-device-page.component';

describe('CreateDevicePageComponent', () => {
  let component: CreateDevicePageComponent;
  let fixture: ComponentFixture<CreateDevicePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDevicePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDevicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
