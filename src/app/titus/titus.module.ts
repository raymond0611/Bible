import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TitusPageRoutingModule } from './titus-routing.module';

import { TitusPage } from './titus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TitusPageRoutingModule
  ],
  declarations: [TitusPage]
})
export class TitusPageModule {}
