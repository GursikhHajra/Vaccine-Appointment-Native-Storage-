import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NativestorageComponent } from './nativestorage/nativestorage.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [NativestorageComponent],
  imports: [
    CommonModule, IonicModule, FormsModule
  ],
  exports: [NativestorageComponent]
})
export class NativeModule { }
