import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Object} from "../../model/object/object";
import {ObjectService} from "../../services/object/object.service";
import {DeviceService} from "../../services/device/device.service";

@Component({
  selector: 'pc-object-list',
  templateUrl: './object-list.component.html',
  styleUrls: ['./object-list.component.scss']
})
export class ObjectListComponent {


  objectList?: Object[];
  selectedObjectList: Object[] = [];


  @Input() editMode: boolean = false;
  @Input() deviceId?: number;

  @Output() selectedObjectListEvent = new EventEmitter<Object[]>();

  constructor(private objectService: ObjectService,
              private deviceService: DeviceService) {
  }


  ngOnInit() {
    if (this.deviceId != null) {
      this.deviceService.getObjectList(this.deviceId).subscribe(objectList => {
        this.objectList = objectList;
      });
    } else {
      this.objectService.getObjectList().subscribe(objectList => {
        this.objectList = objectList;
      });
    }
  }

  selectObject(object: Object) {
    if (this.editMode) {
      if (this.selectedObjectList.includes(object)) {
        this.selectedObjectList.splice(this.selectedObjectList.indexOf(object), 1);
      } else {
        this.selectedObjectList.push(object);
      }

      this.selectedObjectListEvent.emit(this.selectedObjectList);
    }

  }
}
