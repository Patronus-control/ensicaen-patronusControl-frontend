import {Component} from '@angular/core';
import {Device} from "../../model/device";
import {DeviceService} from "../../services/device/device.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'pc-create-device-page',
  templateUrl: './create-device-page.component.html',
  styleUrls: ['./create-device-page.component.scss']
})
export class CreateDevicePageComponent {

  device: Device;


  constructor(private deviceService: DeviceService,
              private route: ActivatedRoute,
              private router: Router) {
    this.device = {
      macAddr: String(this.route.snapshot.paramMap.get('macAddr')),
    }
  }


  createDevice() {
    this.deviceService.createDevice(this.device).subscribe((device) => {
      this.router.navigate(['/edit/device/' + device.id]);
    });


  }


  updateObjectList($event: Object[]) {
    this.device.objectList = $event;
    console.log(this.device.objectList);
  }
}
