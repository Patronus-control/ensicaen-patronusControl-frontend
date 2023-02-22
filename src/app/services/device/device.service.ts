import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
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


  getDevice(macAddr: string): Observable<Device> {
    return this.http.get<Device>(environment.api_url + "/device/macAddr/" + macAddr);
  }

  deviceFound(deviceId: string) {
    this.getDevice(deviceId).subscribe((device) => {
      this.actualDevice.next(device);
    })
  }


  doAction(id: number, action: Action) {
    return this.http.post<any>(environment.api_url + "/device/action/" + id, action).subscribe(() => {
      console.log("Action sent");
    })
  }

}
