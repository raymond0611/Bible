import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TitusPage } from './titus.page';

const routes: Routes = [
  {
    path: '',
    component: TitusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TitusPageRoutingModule {}
