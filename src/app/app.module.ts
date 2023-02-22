import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {DeviceComponent} from './components/device/device.component';
import { DeviceControlComponent } from './components/device-control/device-control.component';
import { DeviceControlButtonComponent } from './components/device-control/device-control-button/device-control-button.component';
import { DeviceControlVerticalSliderComponent } from './components/device-control/device-control-vertical-slider/device-control-vertical-slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ActionMenuComponent} from "./action-menu/action-menu.component";


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    DeviceComponent,
    DeviceControlComponent,
    DeviceControlButtonComponent,
    DeviceControlVerticalSliderComponent,
    AppComponent,
    ActionMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: 'Window', useValue: window}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
