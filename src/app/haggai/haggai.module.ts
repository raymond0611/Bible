import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HaggaiPageRoutingModule } from './haggai-routing.module';

import { HaggaiPage } from './haggai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HaggaiPageRoutingModule
  ],
  declarations: [HaggaiPage]
})
export class HaggaiPageModule {}
