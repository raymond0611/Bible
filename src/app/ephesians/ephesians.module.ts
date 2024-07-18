import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EphesiansPageRoutingModule } from './ephesians-routing.module';

import { EphesiansPage } from './ephesians.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EphesiansPageRoutingModule
  ],
  declarations: [EphesiansPage]
})
export class EphesiansPageModule {}
