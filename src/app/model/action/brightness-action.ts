import {Action} from "./action";
import {Attribute} from "../enums/attribute";

export class BrightnessAction implements Action {
  attribute: Attribute = Attribute.BRIGHTNESS;

  brightness: number;

  constructor(brightness: number) {
    this.brightness = brightness;
  }

}
