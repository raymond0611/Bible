import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColossiansPageRoutingModule } from './colossians-routing.module';

import { ColossiansPage } from './colossians.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColossiansPageRoutingModule
  ],
  declarations: [ColossiansPage]
})
export class ColossiansPageModule {}
