import {Component, Input, OnChanges} from '@angular/core';
import {Device} from "../../../model/device";
import {DeviceService} from "../../../services/device/device.service";
import {OnOffAction} from "../../../model/action/on-off-action";

@Component({
  selector: 'pc-device-control-button',
  templateUrl: './device-control-button.component.html',
  styleUrls: ['./device-control-button.component.scss']
})
export class DeviceControlButtonComponent implements OnChanges {
  @Input() device?: Device;
  on: boolean = false;

  constructor(private deviceService: DeviceService) {

  }

  ngOnChanges() {
    //@ts-ignore
    this.on = this.device?.stateList.ON_OFF;

  }

  onClick() {
    if (this.device != null && this.device.id != null) {
      this.deviceService.doAction(this.device?.id, new OnOffAction(!this.on));
    }
  }

}
