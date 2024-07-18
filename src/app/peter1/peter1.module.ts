import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Peter1PageRoutingModule } from './peter1-routing.module';

import { Peter1Page } from './peter1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Peter1PageRoutingModule
  ],
  declarations: [Peter1Page]
})
export class Peter1PageModule {}
