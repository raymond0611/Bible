import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorinthiansPageRoutingModule } from './corinthians-routing.module';

import { CorinthiansPage } from './corinthians.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorinthiansPageRoutingModule
  ],
  declarations: [CorinthiansPage]
})
export class CorinthiansPageModule {}
