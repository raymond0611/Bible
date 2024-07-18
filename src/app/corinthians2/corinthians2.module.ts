import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Corinthians2PageRoutingModule } from './corinthians2-routing.module';

import { Corinthians2Page } from './corinthians2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Corinthians2PageRoutingModule
  ],
  declarations: [Corinthians2Page]
})
export class Corinthians2PageModule {}
