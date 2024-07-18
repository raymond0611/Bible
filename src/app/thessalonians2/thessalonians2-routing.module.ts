import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Thessalonians2Page } from './thessalonians2.page';

const routes: Routes = [
  {
    path: '',
    component: Thessalonians2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Thessalonians2PageRoutingModule {}
