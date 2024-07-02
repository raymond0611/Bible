import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZephaniahPage } from './zephaniah.page';

const routes: Routes = [
  {
    path: '',
    component: ZephaniahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZephaniahPageRoutingModule {}
