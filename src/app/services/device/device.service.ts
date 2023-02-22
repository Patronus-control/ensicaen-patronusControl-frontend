import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Device} from "../../model/device";
import {Action} from "../../model/action/action";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DeviceService {


  actualDevice: BehaviorSubject<Device | undefined> = new BehaviorSubject<Device | undefined>(undefined);

  constructor(private http: HttpClient) {

  }

  noDeviceFound() {
    this.actualDevice.next(undefined);
  }


  getDevice(macAddr: string): Device {
    return {
      id: 1,
      mac_addr: macAddr,
      name: "Lampe de chevet",
      device_type: 0
    }
  }

  deviceFound(deviceId: string) {
    this.actualDevice.next(this.getDevice(deviceId));
  }


  doAction(id: number, action: Action) {
    return this.http.post<any>(environment.api_url + "/device/action/" + id, action).subscribe(() => {
      console.log("Action sent");
    })
  }

}
