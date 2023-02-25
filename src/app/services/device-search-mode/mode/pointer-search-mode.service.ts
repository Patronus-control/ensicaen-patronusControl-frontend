import {DeviceSearchModeInterface} from "./device-search-mode-interface";
import {DeviceSearchModeEnum} from "../device-search-mode-enum";
import {DeviceService} from "../../device/device.service";

export class PointerSearchModeService implements DeviceSearchModeInterface {

  constructor(private deviceService: DeviceService) { }

  canAddDevice(): boolean {
    return this.deviceService.actualDevice.value != undefined && this.deviceService.actualDevice.value.id == undefined;
  }

  getDeviceSearchMode(): DeviceSearchModeEnum {
    return DeviceSearchModeEnum.POINTER;
  }

  getDeviceSearchModeName(): string {
    return "Pointeur";
  }


}
