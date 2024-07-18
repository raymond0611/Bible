import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LukePageRoutingModule } from './luke-routing.module';

import { LukePage } from './luke.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LukePageRoutingModule
  ],
  declarations: [LukePage]
})
export class LukePageModule {}
