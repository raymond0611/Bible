import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GalatiansPageRoutingModule } from './galatians-routing.module';

import { GalatiansPage } from './galatians.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GalatiansPageRoutingModule
  ],
  declarations: [GalatiansPage]
})
export class GalatiansPageModule {}
