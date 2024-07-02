import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZechariahPageRoutingModule } from './zechariah-routing.module';

import { ZechariahPage } from './zechariah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZechariahPageRoutingModule
  ],
  declarations: [ZechariahPage]
})
export class ZechariahPageModule {}
