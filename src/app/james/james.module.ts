import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JamesPageRoutingModule } from './james-routing.module';

import { JamesPage } from './james.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JamesPageRoutingModule
  ],
  declarations: [JamesPage]
})
export class JamesPageModule {}
