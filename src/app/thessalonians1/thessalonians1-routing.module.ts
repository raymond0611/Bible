import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Thessalonians1Page } from './thessalonians1.page';

const routes: Routes = [
  {
    path: '',
    component: Thessalonians1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Thessalonians1PageRoutingModule {}
