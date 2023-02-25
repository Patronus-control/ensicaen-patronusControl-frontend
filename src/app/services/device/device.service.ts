import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Device} from "../../model/device";
import {Action} from "../../model/action/action";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Object} from "../../model/object/object";

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


  getDeviceByMacAddr(macAddr: string): Observable<Device> {
    return this.http.get<Device>(environment.api_url + "/device/macAddr/" + macAddr);
  }

  deviceFound(macAddr: string) {
    this.getDeviceByMacAddr(macAddr).subscribe((device) => {
      if (device != null) {
        this.actualDevice.next(device);
      } else {
        this.actualDevice.next({
          macAddr: macAddr,
        });
      }
    })
  }


  createDevice(device: Device): Observable<Device> {
    return this.http.post<Device>(environment.api_url + "/device/", device);
  }


  doAction(id: number, action: Action) {
    this.http.post<Device>(environment.api_url + "/device/action/" + id, action).subscribe((device) => {
      this.actualDevice.next(device);
    });
  }

  getDevice(id: number): Observable<Device> {
    return this.http.get<Device>(environment.api_url + "/device/" + id);
  }

  getObjectList(deviceId: number): Observable<Object[]> {
    return this.http.get<Object[]>(environment.api_url + "/device/get-object/" + deviceId);
  }

  findByCoordinates(x: number, y: number, ang: number) {
    this.http.get<Device>(environment.api_url + "/device/find-by-coordinates/" + x + "/" + y + "/" + ang).subscribe((device) => {
      if (device != null) {
        this.actualDevice.next(device);
      }
    })
  }
}
