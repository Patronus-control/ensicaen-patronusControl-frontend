import {DeviceSearchModeEnum} from "../device-search-mode-enum";

export interface DeviceSearchModeInterface {

  getDeviceSearchMode(): DeviceSearchModeEnum;


  getDeviceSearchModeName(): string;

  canAddDevice(): boolean;

}
