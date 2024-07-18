import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HebrewsPageRoutingModule } from './hebrews-routing.module';

import { HebrewsPage } from './hebrews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HebrewsPageRoutingModule
  ],
  declarations: [HebrewsPage]
})
export class HebrewsPageModule {}
