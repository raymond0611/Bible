import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Timothy1PageRoutingModule } from './timothy1-routing.module';

import { Timothy1Page } from './timothy1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Timothy1PageRoutingModule
  ],
  declarations: [Timothy1Page]
})
export class Timothy1PageModule {}
