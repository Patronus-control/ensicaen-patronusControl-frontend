import { TestBed } from '@angular/core/testing';

import { DeviceSearchModeService } from './device-search-mode.service';

describe('DeviceSearchModeService', () => {
  let service: DeviceSearchModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviceSearchModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
