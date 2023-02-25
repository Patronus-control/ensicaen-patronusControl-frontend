import {DeviceSearchModeInterface} from "./device-search-mode-interface";
import {DeviceSearchModeEnum} from "../device-search-mode-enum";

export class BeaconSearchModeService implements DeviceSearchModeInterface {

  canAddDevice(): boolean {
    return true;
  }

  getDeviceSearchMode(): DeviceSearchModeEnum {
    return DeviceSearchModeEnum.BEACON;
  }

  getDeviceSearchModeName(): string {
    return "Beacon";
  }

}
