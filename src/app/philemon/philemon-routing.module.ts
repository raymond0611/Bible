import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhilemonPage } from './philemon.page';

const routes: Routes = [
  {
    path: '',
    component: PhilemonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhilemonPageRoutingModule {}
