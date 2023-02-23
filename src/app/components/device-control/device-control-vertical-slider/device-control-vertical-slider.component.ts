import {AfterViewInit, Component, ElementRef, Inject, Input, OnChanges} from '@angular/core';
import {Device} from "../../../model/device";
import {DeviceService} from "../../../services/device/device.service";
import {BrightnessAction} from "../../../model/action/brightness-action";

@Component({
  selector: 'pc-device-control-vertical-slider',
  templateUrl: './device-control-vertical-slider.component.html',
  styleUrls: ['./device-control-vertical-slider.component.scss'],
})
export class DeviceControlVerticalSliderComponent implements AfterViewInit, OnChanges {

  @Input() device?: Device;

  maxSliderHeight = 100;
  sliderHeight = 0;
  mouseTracking = false;

  brightness: number = 0;

  constructor(@Inject('Window') window: Window,
              private elementView:ElementRef,
              private deviceService: DeviceService) {
    window.addEventListener('pointerup', () => {
      this.mouseTracking = false;
      this.updateBrightness();
    });

  }

  ngOnChanges() {
    //@ts-ignore
    this.brightness = this.device?.stateList.BRIGHTNESS;
    this.sliderHeight = this.maxSliderHeight * (this.brightness / 254);

  }

  mousePosition(e: any) {
    if(this.mouseTracking){
      let bounds = e.target.getBoundingClientRect();
      this.sliderHeight = Math.min(Math.max(this.maxSliderHeight - (e.clientY - bounds.top), 0), this.maxSliderHeight);
      this.brightness = (this.sliderHeight / this.maxSliderHeight) * 254;
    }
  }


  updateBrightness(): void {

    if(this.device != null && this.device.id != null) {
      this.deviceService.doAction(this.device.id, new BrightnessAction(this.brightness));
    }

  }




  mouseDown() {
    this.mouseTracking = true;
  }
  ngAfterViewInit() {
    this.maxSliderHeight = this.elementView.nativeElement.offsetHeight;
  }
}
