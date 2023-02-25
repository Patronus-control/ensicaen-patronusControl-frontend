import {Component} from '@angular/core';
import {Device} from "../../model/device";
import {DeviceService} from "../../services/device/device.service";
import {Router} from "@angular/router";
import {DeviceSearchModeService} from "../../services/device-search-mode/device-search-mode.service";
import {DeviceSearchModeEnum} from "../../services/device-search-mode/device-search-mode-enum";
import {AndroidService} from "../../services/android/android.service";

@Component({
  selector: 'pc-create-device-page',
  templateUrl: './create-device-page.component.html',
  styleUrls: ['./create-device-page.component.scss']
})
export class CreateDevicePageComponent {

  device: Device;


  constructor(private deviceService: DeviceService,
              private router: Router,
              private deviceSearchModeService: DeviceSearchModeService,
              private androidService: AndroidService) {

    switch (this.deviceSearchModeService.getDeviceSearchMode()) {
      case DeviceSearchModeEnum.BEACON:
        this.device = {
          point: androidService.lastCoord,
        }
        break;
      case DeviceSearchModeEnum.POINTER:
      default:
        if(this.deviceService.actualDevice.value != null){
          this.device = this.deviceService.actualDevice.value;
        } else {
          this.device = {};
        }
        break;
    }

  }


  createDevice() {
    if (this.device != null) {
      this.deviceService.createDevice(this.device).subscribe((device) => {
        this.router.navigate(['/edit/device/' + device.id]);
      });
    }
  }


  updateObjectList($event: Object[]) {
    if (this.device != null) {
      this.device.objectList = $event;
    }
  }
}
