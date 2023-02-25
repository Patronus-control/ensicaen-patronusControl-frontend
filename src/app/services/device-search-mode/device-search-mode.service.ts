import { Injectable } from '@angular/core';
import {DeviceSearchModeInterface} from "./mode/device-search-mode-interface";
import {DeviceSearchModeEnum} from "./device-search-mode-enum";
import {DeviceService} from "../device/device.service";
import {BeaconSearchModeService} from "./mode/beacon-search-mode.service";
import {PointerSearchModeService} from "./mode/pointer-search-mode.service";

@Injectable({
  providedIn: 'root'
})
export class DeviceSearchModeService {


  private deviceSearchMode: DeviceSearchModeInterface;
  constructor(private deviceService: DeviceService) {
    this.deviceSearchMode = new BeaconSearchModeService();
  }


  getDeviceSearchMode(): DeviceSearchModeEnum {
    return this.deviceSearchMode.getDeviceSearchMode();
  }

  setDeviceSearchMode(deviceSearchModeInterface: DeviceSearchModeInterface): void {
    this.deviceSearchMode = deviceSearchModeInterface;
  }

  getDeviceSearchModeName(): string {
    return this.deviceSearchMode.getDeviceSearchModeName();
  }

  canAddDevice(): boolean {
    return this.deviceSearchMode.canAddDevice();
  }

  setDeviceSearchModeByEnum(deviceSearchModeEnum: DeviceSearchModeEnum): void {
    switch (deviceSearchModeEnum) {
      case DeviceSearchModeEnum.BEACON:
        this.deviceSearchMode = new BeaconSearchModeService();
        break;
      case DeviceSearchModeEnum.POINTER:
      default:
        this.deviceSearchMode = new PointerSearchModeService(this.deviceService);
        break;
    }
  }



}
