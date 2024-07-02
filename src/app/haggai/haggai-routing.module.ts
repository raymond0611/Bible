import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HaggaiPage } from './haggai.page';

const routes: Routes = [
  {
    path: '',
    component: HaggaiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HaggaiPageRoutingModule {}
