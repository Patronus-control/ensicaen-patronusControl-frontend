import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Device} from "../../model/device";

@Injectable({
  providedIn: 'root'
})
export class DeviceService {


  actualDevice: BehaviorSubject<Device | undefined> = new BehaviorSubject<Device | undefined>(undefined);

  constructor() {
  }

  noDeviceFound() {
    this.actualDevice.next(undefined);
  }


  getDevice(macAddr: string): Device {
    return {
      mac_addr: macAddr,
      name: "Lampe de chevet",
      device_type: 0
    }
  }

  deviceFound(deviceId: string) {
    this.actualDevice.next(this.getDevice(deviceId));
  }



  deviceOnOff() {
    console.log("device on");
  }

}
