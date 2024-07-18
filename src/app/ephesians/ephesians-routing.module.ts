import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EphesiansPage } from './ephesians.page';

const routes: Routes = [
  {
    path: '',
    component: EphesiansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EphesiansPageRoutingModule {}
