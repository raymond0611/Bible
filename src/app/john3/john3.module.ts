import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { John3PageRoutingModule } from './john3-routing.module';

import { John3Page } from './john3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    John3PageRoutingModule
  ],
  declarations: [John3Page]
})
export class John3PageModule {}
