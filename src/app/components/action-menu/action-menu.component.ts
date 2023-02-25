import {Component, Input} from '@angular/core';
import {Device} from "../../model/device";
import {DeviceSearchModeService} from "../../services/device-search-mode/device-search-mode.service";

@Component({
  selector: 'pc-action-menu',
  templateUrl: './action-menu.component.html',
  styleUrls: ['./action-menu.component.scss']
})
export class ActionMenuComponent {

  @Input() device?: Device;



  constructor(protected deviceSearchModeService: DeviceSearchModeService) {
  }


}
