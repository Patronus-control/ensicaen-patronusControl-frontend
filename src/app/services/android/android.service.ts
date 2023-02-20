import {Inject, Injectable, NgZone} from '@angular/core';
import {DeviceService} from "../device/device.service";

@Injectable({
  providedIn: 'root'
})
export class AndroidService {

  constructor(@Inject('Window') window: Window,
              zone: NgZone,
              private deviceService: DeviceService) {

    // @ts-ignore
    window.deviceUpdate = (macAddr: string) => {
      zone.run(() => {
        this.deviceUpdate(macAddr);
      });
    }

  }


  deviceUpdate(macAddr?: string) {
    if (!macAddr) {
      this.deviceService.noDeviceFound();
      return;
    }

    this.deviceService.deviceFound(macAddr);


  }


}
