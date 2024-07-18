import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Peter2PageRoutingModule } from './peter2-routing.module';

import { Peter2Page } from './peter2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Peter2PageRoutingModule
  ],
  declarations: [Peter2Page]
})
export class Peter2PageModule {}
