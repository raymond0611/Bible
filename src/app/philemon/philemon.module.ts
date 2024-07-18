import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhilemonPageRoutingModule } from './philemon-routing.module';

import { PhilemonPage } from './philemon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhilemonPageRoutingModule
  ],
  declarations: [PhilemonPage]
})
export class PhilemonPageModule {}
