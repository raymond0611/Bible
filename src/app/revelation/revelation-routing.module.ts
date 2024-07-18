import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevelationPage } from './revelation.page';

const routes: Routes = [
  {
    path: '',
    component: RevelationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RevelationPageRoutingModule {}
