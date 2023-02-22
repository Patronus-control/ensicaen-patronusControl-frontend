import {Component, Input} from '@angular/core';
import {Device} from "../../../model/device";
import {DeviceService} from "../../../services/device/device.service";
import {OnOffAction} from "../../../model/action/on-off-action";

@Component({
  selector: 'pc-device-control-button',
  templateUrl: './device-control-button.component.html',
  styleUrls: ['./device-control-button.component.scss']
})
export class DeviceControlButtonComponent {
  @Input() device?: Device;

  constructor(private deviceService: DeviceService) {

  }

  onClick() {
    if(this.device != null) {
      this.deviceService.doAction(this.device?.id, new OnOffAction(false));
    }
  }

}
