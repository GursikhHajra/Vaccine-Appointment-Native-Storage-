import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavComPageRoutingModule } from './nav-com-routing.module';

import { NavComPage } from './nav-com.page';
import { NativeModule } from 'src/app/native/native.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavComPageRoutingModule,
    NativeModule
  ],
  declarations: [NavComPage]
})
export class NavComPageModule {}
