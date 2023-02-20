import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'pc-device-control-vertical-slider',
  templateUrl: './device-control-vertical-slider.component.html',
  styleUrls: ['./device-control-vertical-slider.component.scss'],
})
export class DeviceControlVerticalSliderComponent implements AfterViewInit{

  maxSliderHeight = 100;
  sliderHeight = 0;

  constructor(private elementView:ElementRef) {
  }


  onClick(e: any) {
    this.sliderHeight = this.maxSliderHeight - e.offsetY;
  }

  ngAfterViewInit() {
    this.maxSliderHeight = this.elementView.nativeElement.offsetHeight;
  }
}
