import {Component, Input} from '@angular/core';
import {Device} from "../../model/device";
import {animate, style, transition, trigger} from "@angular/animations";
import {DeviceSearchModeService} from "../../services/device-search-mode/device-search-mode.service";

@Component({
  selector: 'pc-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate(100, style({opacity: 1}))
      ]),
      transition(':leave', [
        animate(100, style({opacity: 0}))
      ])
    ])
  ]
})
export class DeviceComponent {

  @Input() device?: Device;

  constructor(protected deviceSearchModeService: DeviceSearchModeService) {


  }

}
