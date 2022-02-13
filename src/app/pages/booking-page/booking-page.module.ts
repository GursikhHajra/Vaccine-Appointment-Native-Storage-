import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingPagePageRoutingModule } from './booking-page-routing.module';

import { BookingPagePage } from './booking-page.page';
import {ComponentsModule} from '../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingPagePageRoutingModule,
    ComponentsModule
  ],
  declarations: [BookingPagePage]
})
export class BookingPagePageModule {}
