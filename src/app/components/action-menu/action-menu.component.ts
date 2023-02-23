import {Component, Input} from '@angular/core';
import {Device} from "../../model/device";

@Component({
  selector: 'pc-action-menu',
  templateUrl: './action-menu.component.html',
  styleUrls: ['./action-menu.component.scss']
})
export class ActionMenuComponent {

  @Input() device?: Device;





}
