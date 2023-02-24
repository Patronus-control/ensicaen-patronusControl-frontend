import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {EditDevicePageComponent} from "./pages/edit-device-page/edit-device-page.component";
import {CreateDevicePageComponent} from "./pages/create-device-page/create-device-page.component";

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'create/device/:macAddr', component: CreateDevicePageComponent},
  { path: 'edit/device/:id', component: EditDevicePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
