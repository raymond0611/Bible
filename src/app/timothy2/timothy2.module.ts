import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Timothy2PageRoutingModule } from './timothy2-routing.module';

import { Timothy2Page } from './timothy2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Timothy2PageRoutingModule
  ],
  declarations: [Timothy2Page]
})
export class Timothy2PageModule {}
