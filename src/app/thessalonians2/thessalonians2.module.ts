import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Thessalonians2PageRoutingModule } from './thessalonians2-routing.module';

import { Thessalonians2Page } from './thessalonians2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Thessalonians2PageRoutingModule
  ],
  declarations: [Thessalonians2Page]
})
export class Thessalonians2PageModule {}
