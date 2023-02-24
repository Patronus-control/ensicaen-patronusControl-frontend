import {Action} from "./action";
import {Attribute} from "../enums/attribute";

export class OnOffAction implements Action {

  on: boolean;

  constructor(on: boolean) {
    this.on = on;
  }

  attribute: Attribute = Attribute.ON_OFF;

}
