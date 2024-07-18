import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalatiansPage } from './galatians.page';

const routes: Routes = [
  {
    path: '',
    component: GalatiansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalatiansPageRoutingModule {}
