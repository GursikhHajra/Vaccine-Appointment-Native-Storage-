import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingPagePageRoutingModule } from './booking-page-routing.module';

import { BookingPagePage } from './booking-page.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingPagePageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [BookingPagePage]
})
export class BookingPagePageModule {}
