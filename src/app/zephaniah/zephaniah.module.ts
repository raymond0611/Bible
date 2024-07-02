import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZephaniahPageRoutingModule } from './zephaniah-routing.module';

import { ZephaniahPage } from './zephaniah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZephaniahPageRoutingModule
  ],
  declarations: [ZephaniahPage]
})
export class ZephaniahPageModule {}
