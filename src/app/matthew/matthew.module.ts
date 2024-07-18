import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatthewPageRoutingModule } from './matthew-routing.module';

import { MatthewPage } from './matthew.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatthewPageRoutingModule
  ],
  declarations: [MatthewPage]
})
export class MatthewPageModule {}
