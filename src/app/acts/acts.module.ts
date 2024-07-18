import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActsPageRoutingModule } from './acts-routing.module';

import { ActsPage } from './acts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActsPageRoutingModule
  ],
  declarations: [ActsPage]
})
export class ActsPageModule {}
