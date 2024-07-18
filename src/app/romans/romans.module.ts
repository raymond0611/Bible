import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RomansPageRoutingModule } from './romans-routing.module';

import { RomansPage } from './romans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RomansPageRoutingModule
  ],
  declarations: [RomansPage]
})
export class RomansPageModule {}
