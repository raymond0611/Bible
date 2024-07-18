import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { John1PageRoutingModule } from './john1-routing.module';

import { John1Page } from './john1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    John1PageRoutingModule
  ],
  declarations: [John1Page]
})
export class John1PageModule {}
