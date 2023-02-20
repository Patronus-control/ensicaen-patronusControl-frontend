import { Component } from '@angular/core';
import {AndroidService} from "./services/android/android.service";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pc-frontend';


  constructor(androidService: AndroidService) {
  }


}
