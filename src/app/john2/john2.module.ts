import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { John2PageRoutingModule } from './john2-routing.module';

import { John2Page } from './john2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    John2PageRoutingModule
  ],
  declarations: [John2Page]
})
export class John2PageModule {}
