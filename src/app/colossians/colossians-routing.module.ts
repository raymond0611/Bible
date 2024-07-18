import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColossiansPage } from './colossians.page';

const routes: Routes = [
  {
    path: '',
    component: ColossiansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColossiansPageRoutingModule {}
