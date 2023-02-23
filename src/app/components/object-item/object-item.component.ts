import {Component, Input} from '@angular/core';
import {Object} from "../../model/object/object";

@Component({
  selector: 'pc-object-item',
  templateUrl: './object-item.component.html',
  styleUrls: ['./object-item.component.scss']
})
export class ObjectItemComponent {

  @Input() isActive: boolean = false;
  @Input() object?: Object;



}
