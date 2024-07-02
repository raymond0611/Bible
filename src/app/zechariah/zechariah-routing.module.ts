import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZechariahPage } from './zechariah.page';

const routes: Routes = [
  {
    path: '',
    component: ZechariahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZechariahPageRoutingModule {}
