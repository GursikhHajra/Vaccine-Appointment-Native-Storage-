import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NativestorageComponent } from './nativestorage/nativestorage.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AppversionComponent } from './appversion/appversion.component';
import { DeviceComponent } from './device/device.component';

@NgModule({
  declarations: [NativestorageComponent, AppversionComponent, DeviceComponent],
  imports: [
    CommonModule, IonicModule, FormsModule
  ],
  exports: [NativestorageComponent, AppversionComponent, DeviceComponent]
})
export class NativeModule { }
