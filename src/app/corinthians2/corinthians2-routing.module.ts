import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Corinthians2Page } from './corinthians2.page';

const routes: Routes = [
  {
    path: '',
    component: Corinthians2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Corinthians2PageRoutingModule {}
