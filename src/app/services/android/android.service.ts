import {Inject, Injectable, NgZone} from '@angular/core';
import {DeviceService} from "../device/device.service";
import {Point} from "../../model/point";

@Injectable({
  providedIn: 'root'
})
export class AndroidService {

  lastCoord: Point;

  constructor(@Inject('Window') window: Window,
              zone: NgZone,
              private deviceService: DeviceService) {
    this.lastCoord = {
      x: 0,
      y: 0,
    }
    // @ts-ignore
    window.deviceUpdate = (macAddr: string) => {
      zone.run(() => {
        this.deviceUpdate(macAddr);
      });
    }
    // @ts-ignore

    window.findByCoordinates = (x, y, ang) => {
      zone.run(() => {
        this.lastCoord = {x, y};
        this.findByCoordinates(x, y, ang);
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

  findByCoordinates(x: number, y: number, ang: number) {
    this.deviceService.findByCoordinates(x, y, ang);
  }


}
