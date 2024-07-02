import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HabakkukPageRoutingModule } from './habakkuk-routing.module';

import { HabakkukPage } from './habakkuk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HabakkukPageRoutingModule
  ],
  declarations: [HabakkukPage]
})
export class HabakkukPageModule {}
