import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JohnPageRoutingModule } from './john-routing.module';

import { JohnPage } from './john.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JohnPageRoutingModule
  ],
  declarations: [JohnPage]
})
export class JohnPageModule {}
