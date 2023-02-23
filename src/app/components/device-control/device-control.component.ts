import {Component, Input} from '@angular/core';
import {Device} from "../../model/device";

@Component({
  selector: 'pc-device-control',
  templateUrl: './device-control.component.html',
  styleUrls: ['./device-control.component.scss'],

})
export class DeviceControlComponent {

  @Input() device?: Device;



  constructor() { }






}
