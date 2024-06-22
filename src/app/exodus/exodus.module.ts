import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExodusPageRoutingModule } from './exodus-routing.module';

import { ExodusPage } from './exodus.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExodusPageRoutingModule
  ],
  declarations: [ExodusPage]
})
export class ExodusPageModule {}
