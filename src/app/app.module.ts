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
import {HttpClientModule} from "@angular/common/http";
import {ActionMenuComponent} from "./components/action-menu/action-menu.component";
import { ObjectItemComponent } from './components/object-item/object-item.component';
import { EditDevicePageComponent } from './pages/edit-device-page/edit-device-page.component';
import { ButtonComponent } from './components/button/button.component';
import { ObjectListComponent } from './components/object-list/object-list.component';
import { CreateDevicePageComponent } from './pages/create-device-page/create-device-page.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    DeviceComponent,
    DeviceControlComponent,
    DeviceControlButtonComponent,
    DeviceControlVerticalSliderComponent,
    AppComponent,
    ActionMenuComponent,
    ObjectItemComponent,
    EditDevicePageComponent,
    ButtonComponent,
    ObjectListComponent,
    CreateDevicePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [{provide: 'Window', useValue: window}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
