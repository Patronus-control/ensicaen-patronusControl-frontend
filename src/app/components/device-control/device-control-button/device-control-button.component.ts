import {Component, Input} from '@angular/core';
import {Device} from "../../../model/device";
import {DeviceService} from "../../../services/device/device.service";

@Component({
  selector: 'pc-device-control-button',
  templateUrl: './device-control-button.component.html',
  styleUrls: ['./device-control-button.component.scss']
})
export class DeviceControlButtonComponent {
  @Input() device?: Device;

  constructor(private deviceService: DeviceService) {

  }

  onClick($event: any) {


  }

}
