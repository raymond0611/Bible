import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Thessalonians1PageRoutingModule } from './thessalonians1-routing.module';

import { Thessalonians1Page } from './thessalonians1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Thessalonians1PageRoutingModule
  ],
  declarations: [Thessalonians1Page]
})
export class Thessalonians1PageModule {}
