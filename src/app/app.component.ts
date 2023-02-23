import { Component } from '@angular/core';
import {AndroidService} from "./services/android/android.service";
import {ObjectService} from "./services/object/object.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pc-frontend';


  constructor(androidService: AndroidService, objectService: ObjectService) {
    objectService.initialize();
  }


}
