import {Component, OnInit} from '@angular/core';
import {Device} from "../../model/device";
import {DeviceService} from "../../services/device/device.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'pc-edit-device-page',
  templateUrl: './edit-device-page.component.html',
  styleUrls: ['./edit-device-page.component.scss']
})
export class EditDevicePageComponent implements OnInit{




  device?: Device;



  constructor(private deviceService: DeviceService,
              private route: ActivatedRoute) {
  }



  ngOnInit() {
    this.getDevice();
  }

  getDevice() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.deviceService.getDevice(id).subscribe((device) => {
        this.device = device;
    })

  }

}
