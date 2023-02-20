import {Component, OnInit} from '@angular/core';
import {Device} from "../../model/device";
import {DeviceService} from "../../services/device/device.service";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'pc-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity:0}),
        animate(100, style({opacity:1}))
      ]),
      transition(':leave', [
        animate(100, style({opacity:0}))
      ])
    ])
  ]
})
export class MainPageComponent implements OnInit {

  device?: Device;
  constructor(private deviceService: DeviceService) {

  }


  ngOnInit(): void {
    this.device = this.deviceService.actualDevice.value;

    this.deviceService.actualDevice.subscribe(device => {
      this.device = device;
    });

  }



}
