import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevelationPageRoutingModule } from './revelation-routing.module';

import { RevelationPage } from './revelation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RevelationPageRoutingModule
  ],
  declarations: [RevelationPage]
})
export class RevelationPageModule {}
