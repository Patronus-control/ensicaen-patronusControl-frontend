import {Attribute} from "./enums/attribute";
import {Point} from "./point";

export interface Device {

  id?: number;
  macAddr?: string;
  name?: string;
  device_type?: number;
  stateList?: Map<Attribute, Object>

  objectList?: Object[];

  point?: Point;
}
