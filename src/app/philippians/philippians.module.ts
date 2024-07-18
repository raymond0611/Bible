import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhilippiansPageRoutingModule } from './philippians-routing.module';

import { PhilippiansPage } from './philippians.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhilippiansPageRoutingModule
  ],
  declarations: [PhilippiansPage]
})
export class PhilippiansPageModule {}
