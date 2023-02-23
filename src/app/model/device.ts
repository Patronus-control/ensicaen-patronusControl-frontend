import {Attribute} from "./enums/attribute";

export interface Device {

  id?: number;
  macAddr: string;
  name?: string;
  device_type?: number;
  stateList?: Map<Attribute, Object>

  objectList?: Object[];
}
